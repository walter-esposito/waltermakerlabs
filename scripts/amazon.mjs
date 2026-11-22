/**
 * Client minimo per la Creators API di Amazon (sostituisce la PA-API 5.0).
 *
 * Le chiavi arrivano solo dalle variabili d'ambiente, cioe' dai segreti GitHub:
 *   AMAZON_ACCESS_KEY  -> Credential ID
 *   AMAZON_SECRET_KEY  -> Credential Secret
 * Il repository e' pubblico: nessuna chiave deve mai finire in un file.
 *
 * Uso:
 *   node scripts/amazon.mjs scopri   cerca i filamenti delle marche e stampa gli ASIN con i colori
 *   node scripts/amazon.mjs prezzi   legge src/data/filamenti.json e scrive src/data/prezzi-amazon.json
 */
import fs from 'node:fs';
import path from 'node:path';

const PARTNER_TAG = 'waltermaker05-21';
const MARKETPLACE = 'www.amazon.it';
const API = 'https://creatorsapi.amazon/catalog/v1';
// Le credenziali europee (versione 3.2) usano l'endpoint UK; le altre quello americano.
const ENDPOINT_TOKEN = ['https://api.amazon.co.uk/auth/o2/token', 'https://api.amazon.com/auth/o2/token'];

const RADICE = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')), '..');
const pausa = (ms) => new Promise((r) => setTimeout(r, ms));

let token = null;
async function prendiToken() {
  if (token) return token;
  const { AMAZON_ACCESS_KEY: id, AMAZON_SECRET_KEY: segreto } = process.env;
  if (!id || !segreto) throw new Error('Mancano AMAZON_ACCESS_KEY / AMAZON_SECRET_KEY');
  for (const url of ENDPOINT_TOKEN) {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: id,
        client_secret: segreto,
        scope: 'creatorsapi::default',
      }),
    });
    if (r.ok) {
      token = (await r.json()).access_token;
      console.error(`token ottenuto da ${url}`);
      return token;
    }
    console.error(`token rifiutato da ${url}: ${r.status} ${(await r.text()).slice(0, 200)}`);
  }
  throw new Error('Nessun endpoint ha accettato le credenziali');
}

// 1 richiesta al secondo: e' il limite iniziale dell'account.
let ultima = 0;
async function chiama(operazione, corpo) {
  const attesa = ultima + 1100 - Date.now();
  if (attesa > 0) await pausa(attesa);
  ultima = Date.now();
  const r = await fetch(`${API}/${operazione}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${await prendiToken()}`,
      'Content-Type': 'application/json',
      'x-marketplace': MARKETPLACE,
    },
    body: JSON.stringify({ partnerTag: PARTNER_TAG, marketplace: MARKETPLACE, ...corpo }),
  });
  const testo = await r.text();
  if (r.status === 429) {
    await pausa(3000);
    return chiama(operazione, corpo);
  }
  if (!r.ok) throw new Error(`${operazione} ${r.status}: ${testo.slice(0, 300)}`);
  return JSON.parse(testo);
}

/** La documentazione usa sia itemsResult sia itemResults: accetto entrambi. */
const articoli = (j) => j.searchResult?.items ?? j.itemsResult?.items ?? j.itemResults?.items ?? [];

const RISORSE = [
  'itemInfo.title',
  'itemInfo.byLineInfo',
  'itemInfo.productInfo',
  'parentASIN',
  'images.primary.medium',
  'offersV2.listings.price',
  'offersV2.listings.availability',
];

// ---------------------------------------------------------------- scopri

const MARCHE = [
  { marca: 'Anycubic', parole: 'Anycubic filamento' },
  { marca: 'AzureFilm', parole: 'AzureFilm filamento' },
];

async function scopri() {
  const trovati = new Map();
  for (const { marca, parole } of MARCHE) {
    for (let pagina = 1; pagina <= 10; pagina++) {
      let j;
      try {
        j = await chiama('searchItems', { keywords: parole, itemCount: 10, itemPage: pagina, resources: RISORSE });
      } catch (e) {
        console.error(`${marca} pagina ${pagina}: ${e.message}`);
        break;
      }
      const lista = articoli(j);
      if (!lista.length) break;
      for (const it of lista) {
        const titolo = it.itemInfo?.title?.displayValue ?? '';
        if (!titolo.toLowerCase().includes(marca.toLowerCase())) continue;
        trovati.set(it.asin, { marca, asin: it.asin, padre: it.parentASIN ?? null, titolo });
      }
      if (lista.length < 10) break;
    }
  }

  // Per ogni famiglia di varianti chiedo tutti i colori.
  const padri = [...new Set([...trovati.values()].map((t) => t.padre).filter(Boolean))];
  for (const padre of padri) {
    const marca = [...trovati.values()].find((t) => t.padre === padre).marca;
    for (let pagina = 1; pagina <= 20; pagina++) {
      let j;
      try {
        j = await chiama('getVariations', {
          asin: padre,
          variationCount: 9,
          variationPage: pagina,
          resources: ['itemInfo.title', 'variationSummary.variationDimension'],
        });
      } catch (e) {
        console.error(`varianti ${padre}: ${e.message}`);
        break;
      }
      const v = j.variationsResult ?? {};
      for (const it of v.items ?? []) {
        const attr = Object.fromEntries((it.variationAttributes ?? []).map((a) => [a.name, a.value]));
        trovati.set(it.asin, {
          marca,
          asin: it.asin,
          padre,
          titolo: it.itemInfo?.title?.displayValue ?? '',
          varianti: attr,
        });
      }
      if (pagina >= (v.variationSummary?.pageCount ?? 1)) break;
    }
  }

  const risultato = [...trovati.values()].sort((a, b) => (a.marca + a.titolo).localeCompare(b.marca + b.titolo));
  console.log(JSON.stringify(risultato, null, 1));
  console.error(`totale: ${risultato.length} articoli, ${padri.length} famiglie di varianti`);
}

// ---------------------------------------------------------------- prezzi

async function prezzi() {
  const filamenti = JSON.parse(fs.readFileSync(path.join(RADICE, 'src/data/filamenti.json'), 'utf8'));
  const asin = [...new Set(filamenti.filter((f) => f.asin).map((f) => f.asin))];
  const prezzi = {};
  for (let i = 0; i < asin.length; i += 10) {
    const blocco = asin.slice(i, i + 10);
    try {
      const j = await chiama('getItems', { itemIds: blocco, itemIdType: 'ASIN', resources: RISORSE });
      for (const it of articoli(j)) {
        const offerta = it.offersV2?.listings?.[0];
        const soldi = offerta?.price?.money;
        const disponibile = offerta?.availability?.type;
        prezzi[it.asin] = {
          titolo: it.itemInfo?.title?.displayValue ?? null,
          prezzo: soldi?.amount ?? null,
          valuta: soldi?.currency ?? null,
          disponibile: disponibile ?? null,
          url: it.detailPageURL ?? null,
          immagine: it.images?.primary?.medium?.url ?? null,
        };
      }
    } catch (e) {
      console.error(`prezzi ${blocco.join(',')}: ${e.message}`);
    }
  }
  const uscita = { aggiornati: new Date().toISOString(), prezzi };
  fs.writeFileSync(path.join(RADICE, 'src/data/prezzi-amazon.json'), JSON.stringify(uscita, null, 1));
  console.error(`prezzi Amazon: ${Object.keys(prezzi).length} su ${asin.length}`);
}

const comando = process.argv[2];
if (comando === 'scopri') await scopri();
else if (comando === 'prezzi') await prezzi();
else {
  console.error('Uso: node scripts/amazon.mjs scopri|prezzi');
  process.exit(1);
}
