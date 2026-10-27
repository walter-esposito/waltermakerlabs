/**
 * Marche, codici e link affiliati: sorgente unica per /sconti/ e per le pagine
 * dedicate /sconti/<marca>/.
 *
 * Una marca ottiene la sua pagina dedicata solo se ha almeno un codice o almeno
 * un articolo (vedi `haPaginaPropria`). Una pagina "sconti X" senza codici e
 * senza niente di provato sarebbe una pagina vuota, e le pagine vuote abbassano
 * la reputazione di tutte le altre.
 */

export const AGGIORNATA = '12 ottobre 2026';

export interface Codice {
  codice: string;
  valore: string;
}

export interface Articolo {
  t: string;
  u: string;
}

export interface Faq {
  d: string;
  r: string;
}

/**
 * Promozione a tempo mostrata in cima alla pagina dedicata. Sparisce da sola dopo
 * `fino`: al build se la data è passata, e nel browser per le pagine compilate prima.
 */
export interface Promo {
  titolo: string;
  /** Ultimo giorno valido, formato AAAA-MM-GG. */
  fino: string;
  testo: string;
  righe: string[];
  link: string;
}

export interface Marca {
  slug: string;
  nome: string;
  /** Riassunto di una riga, usato nella griglia dell'indice. */
  cosa: string;
  link: string;
  etichetta: string;
  codici: Codice[];
  nota: string;
  articoli: Articolo[];
  promo?: Promo;
  /** Contenuto della pagina dedicata. Assente = niente pagina dedicata. */
  pagina?: {
    titolo: string;
    descrizione: string;
    h1: string;
    /** Paragrafi di apertura: rispondono subito alla domanda che ha portato qui. */
    intro: string[];
    /** Modelli citati per nome: sono le ricerche di coda lunga che si possono vincere. */
    prodotti: string[];
    faq: Faq[];
  };
}

export const MARCHE: Marca[] = [
  {
    slug: 'anycubic',
    nome: 'Anycubic',
    cosa: 'Stampanti 3D FDM e resina, fascia accessibile. Il sistema multicolore ACE.',
    link: 'https://it.anycubic3d.com/?ref=waltermakerlabs',
    etichetta: 'Store italiano Anycubic',
    codici: [{ codice: 'WALTERMAKERLABS', valore: '15 €' }],
    nota: 'Il codice si inserisce nel carrello, non alla cassa. Se il totale non cambia, è quasi sempre perché è stato messo nel punto sbagliato o perché quella promozione non è cumulabile: alcune lo sono, altre no.',
    articoli: [
      { t: 'Kobra X: unboxing, setup e prime stampe', u: '/stampa-3d/anycubic-kobra-x-recensione-iniziale/' },
      { t: 'Kobra X: verità scomode', u: '/stampa-3d/anycubic-kobra-x-verita-scomode/' },
      { t: 'ACE 2 Pro: conviene l’upgrade?', u: '/stampa-3d/anycubic-ace-2-pro-conviene-upgrade/' },
      { t: 'Kobra 3: gli errori più frequenti', u: '/stampa-3d/anycubic-kobra-3-problemi/' },
    ],
    promo: {
      titolo: 'Black Friday Anycubic: il codice si somma',
      fino: '2026-12-07',
      testo:
        'Fino al 7 dicembre. L’ho provato nel carrello il 27 ottobre: la **Kobra X** in offerta a 279 € con WALTERMAKERLABS scende a **264 €**. Sugli altri modelli verifica il totale nel carrello prima di pagare.',
      righe: [
        'Kobra X da 279 € (Combo 7 colori 459 €)',
        'Kobra S1 ACE 2 Pro Combo da 429 €',
        'Kobra S1 Max Combo da 799 €',
        'Kobra 4 Combo a 299 €',
        'Accessori scontati del 20%',
      ],
      link: 'https://it.anycubic3d.com/pages/offerte-black-friday?ref=waltermakerlabs',
    },
    pagina: {
      titolo: 'Codice sconto Anycubic: 15 € con WALTERMAKERLABS',
      descrizione:
        'Il codice sconto Anycubic da 15 €: dove si inserisce nel carrello e perché a volte non si applica. Con le recensioni di Kobra X, Kobra 3 e ACE 2 Pro.',
      h1: 'Codice sconto Anycubic: 15 € con WALTERMAKERLABS',
      intro: [
        'Il codice è **WALTERMAKERLABS** e vale **15 €** sullo store italiano Anycubic. Funziona sulla maggior parte del catalogo, stampanti e accessori.',
        'La parte che fa perdere tempo a tutti è dove si inserisce: **va messo nel carrello, non alla cassa.** Se arrivi alla schermata di pagamento e cerchi il campo lì, non lo trovi, e la conclusione naturale è che il codice non funzioni.',
      ],
      prodotti: ['Kobra X', 'Kobra 3', 'Kobra S1 Max', 'ACE 2 Pro', 'Photon (resina)'],
      faq: [
        {
          d: 'Dove si inserisce il codice sconto Anycubic?',
          r: 'Nel carrello, prima di andare alla cassa. Apri il carrello, cerca il campo del codice promozionale, incolla WALTERMAKERLABS e applica: il totale deve scendere di 15 € prima di proseguire. Alla cassa quel campo non c’è, ed è il motivo per cui in tanti pensano che il codice sia scaduto.',
        },
        {
          d: 'Il codice si somma alle promozioni già attive?',
          r: 'Dipende dalla promozione, e l’unico modo di saperlo è il carrello. Nel Black Friday 2026 sì: la Kobra X in offerta a 279 € con il codice scende a 264 € (provato il 27 ottobre). In altre promozioni Anycubic ha bloccato il cumulo e il totale non cambiava: in quel caso non è il codice a non funzionare, è il prodotto a essere già scontato. Si usa un solo codice per ordine, quindi non si somma ai codici pubblici del sito.',
        },
        {
          d: 'Quanto vale e su cosa funziona?',
          r: 'Quindici euro, sullo store italiano. Su un accessorio da 40 € incide parecchio, su una stampante da 400 € molto meno: è uno sconto fisso, non percentuale.',
        },
        {
          d: 'Conviene comprare dallo store italiano o da quello americano?',
          r: 'Dall’italiano. Lo store USA a volte espone prezzi più bassi, ma spedizione, IVA all’importazione e dazi li riassorbono quasi sempre, e in caso di guasto la garanzia va gestita con un’assistenza fuori dall’Unione Europea. Il link in questa pagina punta allo store italiano apposta.',
        },
        {
          d: 'Se il codice non funziona, cosa faccio?',
          r: 'Controlla tre cose, in quest’ordine: che tu sia nel carrello e non alla cassa, che il prodotto non sia già in promozione, e che tu stia comprando sullo store italiano. Se dopo questi tre non va, scrivimelo nei commenti sotto un video: lo verifico e, se è scaduto, me ne faccio dare un altro.',
        },
      ],
    },
  },
  {
    slug: 'snapmaker',
    nome: 'Snapmaker',
    cosa: 'La U1, stampante toolchange: ogni colore ha la sua testa, niente spurgo a ogni cambio.',
    link: 'https://eu.snapmaker.com/?ref=waltermakerlabs',
    etichetta: 'Store europeo Snapmaker',
    codici: [
      { codice: 'waltermaker20', valore: '20 €' },
      { codice: 'walter_esposito-1-1', valore: '5%' },
    ],
    nota: 'Uso il link allo store europeo e non a quello americano: spedizione dalla UE, prezzi in euro, nessuna sorpresa in dogana.',
    articoli: [
      { t: 'U1: unboxing, montaggio e prima stampa', u: '/stampa-3d/snapmaker-u1-unboxing-montaggio-prima-stampa/' },
      { t: 'Cosa scopri solo dopo un mese', u: '/stampa-3d/snapmaker-u1-dopo-un-mese-problemi/' },
      { t: 'Errori frequenti e come risolverli', u: '/stampa-3d/snapmaker-u1-problemi/' },
      { t: 'Oltre 10 colori senza AMS', u: '/stampa-3d/snapmaker-u1-dieci-colori-senza-ams/' },
    ],
    pagina: {
      titolo: 'Sconti Snapmaker: due codici per la U1',
      descrizione:
        'Due codici sconto Snapmaker: 20 € fissi o il 5%. Quale conviene secondo quanto spendi, e perché uso lo store europeo e non quello americano.',
      h1: 'Sconti Snapmaker: due codici, e quale dei due conviene',
      intro: [
        'Ci sono due codici e **non sono cumulabili**: uno fisso da 20 € e uno percentuale del 5%. Quale conviene dipende solo da quanto spendi.',
        'Il punto di pareggio è **400 €**: sotto quella cifra conviene il codice fisso, sopra conviene la percentuale. Su una U1 completa la differenza non è simbolica.',
      ],
      prodotti: ['Snapmaker U1', 'Artisan', 'A350T', 'Ray (laser)'],
      faq: [
        {
          d: 'Quale dei due codici sconto Snapmaker conviene?',
          r: 'Dipende dal totale. waltermaker20 toglie 20 € fissi, walter_esposito-1-1 toglie il 5%. Il 5% supera i 20 € a partire da 400 € di spesa: sotto conviene il fisso, sopra il percentuale. Non sono cumulabili, quindi provali entrambi nel carrello e tieni quello che abbassa di più il totale.',
        },
        {
          d: 'Perché il link porta allo store europeo e non a quello americano?',
          r: 'Perché comprando dallo store europeo la merce parte dalla UE: prezzi in euro, IVA già inclusa, nessun fermo doganale e nessuna sorpresa al momento della consegna. Il link affiliato ufficiale di Snapmaker punta allo store americano, e per chi compra dall’Italia è la scelta peggiore. Per questo uso l’altro.',
        },
        {
          d: 'Cos’è la U1 e in cosa è diversa da una stampante multicolore normale?',
          r: 'È una toolchanger: invece di tagliare e spurgare il filamento a ogni cambio colore, cambia proprio la testa di stampa. Significa niente torre di spurgo e niente montagna di scarto a fine stampa. L’ho usata per un mese e ci ho stampato anche oltre dieci colori senza AMS: trovi tutto negli articoli qui sotto.',
        },
        {
          d: 'I codici scadono?',
          r: 'Possono cambiare senza preavviso, come tutti. Questa pagina viene aggiornata quando me ne accorgo. Se uno dei due non funziona più, scrivimelo nei commenti sotto un video: lo sostituisco e intanto te ne faccio generare un altro.',
        },
      ],
    },
  },
  {
    slug: 'makera',
    nome: 'Makera',
    cosa: 'CNC da banco. La Z1, con cui ho iniziato con la fresatura.',
    link: 'https://makerainc.sjv.io/YVBELO',
    etichetta: 'Makera Z1',
    codici: [{ codice: 'WML100off', valore: '100 €' }],
    nota: 'Il link porta allo store europeo in italiano, direttamente sulla scheda della Z1.',
    articoli: [
      { t: 'Makera Z1: la mia prima CNC da banco', u: '/cnc/makera-z1-prima-cnc/' },
      { t: 'Makerables in beta', u: '/cnc/makerables-beta-prova/' },
    ],
    pagina: {
      titolo: 'Codice sconto Makera: 100 € con WML100off',
      descrizione:
        'Il codice sconto Makera da 100 € sulla Z1 e sulle Carvera. Perché conviene comprare dallo store europeo e non da quello americano, e la Z1 provata sul campo.',
      h1: 'Codice sconto Makera: 100 € con WML100off',
      intro: [
        'Il codice è **WML100off** e vale **100 €** sullo store Makera. Su una CNC da banco non è una cifra simbolica: è uno sconto fisso, quindi il risparmio è lo stesso sulla Z1 e su una Carvera.',
        'C’è però una seconda cosa che ti fa risparmiare più del codice, ed è **da dove compri**. Il link qui sotto porta allo store europeo in italiano, direttamente sulla scheda della Z1: merce che parte dalla UE, prezzi in euro, nessun fermo in dogana e nessun conguaglio alla consegna. Su una macchina pesante comprata dagli Stati Uniti, spedizione, IVA all’importazione e dazi superano tranquillamente i 100 € del codice.',
      ],
      prodotti: ['Makera Z1', 'Carvera', 'Carvera Air'],
      faq: [
        {
          d: 'Qual è il codice sconto Makera e quanto vale?',
          r: 'WML100off, e vale 100 € di sconto. È uno sconto fisso, non percentuale: toglie la stessa cifra qualunque macchina tu prenda. Incollalo nel carrello e controlla che il totale scenda di 100 € prima di confermare l’ordine.',
        },
        {
          d: 'Il codice si somma alle promozioni Makera già attive?',
          r: 'Di solito no, come su quasi tutti gli store. Se la macchina è già in offerta il codice può non applicarsi: in quel caso confronta i due totali e tieni il più basso. Vale la pena provarlo comunque, perché una promozione di listino non sempre batte 100 € fissi.',
        },
        {
          d: 'Conviene comprare dallo store europeo?',
          r: 'Sì, nettamente. Una CNC da banco è pesante e voluminosa: dagli Stati Uniti paghi spedizione, IVA all’importazione e dazi, e sono cifre a tre zeri sul totale. Dallo store europeo il prezzo che vedi è quello che paghi. È anche il motivo per cui il link di questa pagina non è quello generico ma quello europeo in italiano.',
        },
        {
          d: 'La Z1 va bene per chi non ha mai usato una CNC?',
          r: 'È stata la mia prima CNC da banco e ci sono arrivato dalla stampa 3D. La curva c’è — la fresatura perdona molto meno della stampa — ma la macchina è chiusa e automatizza la parte che nelle CNC tradizionali spaventa di più. Nell’articolo racconto cosa ho sbagliato all’inizio.',
        },
      ],
    },
  },
  {
    slug: 'flashforge',
    nome: 'Flashforge',
    cosa: 'Il Creator 5 Pro: quattro testine indipendenti, camera riscaldata, doppia filtrazione.',
    link: 'https://flashforge.sjv.io/JkLRma',
    etichetta: 'Flashforge',
    codici: [],
    nota: '',
    articoli: [
      { t: 'Creator 5 Pro: batte davvero la Bambu X2D?', u: '/stampa-3d/flashforge-creator-5-pro-vs-bambu-x2d/' },
    ],
    pagina: {
      titolo: 'Sconti Flashforge: cosa c’è e cosa no',
      descrizione:
        'Per Flashforge non ho un codice fisso: gli sconti passano dalle promozioni dello store. Cosa sapere prima di prendere il Creator 5 Pro.',
      h1: 'Sconti Flashforge: cosa c’è davvero, e cosa no',
      intro: [
        '**Non ho un codice sconto Flashforge** e preferisco dirtelo subito invece di fartelo scoprire alla cassa. Gli sconti Flashforge passano dalle promozioni periodiche dello store, non da un coupon permanente.',
        'Quello che posso darti è il link diretto e un parere sulla macchina che ho messo alla prova: il **Creator 5 Pro**, quattro testine indipendenti, camera riscaldata e doppia filtrazione.',
      ],
      prodotti: ['Creator 5 Pro', 'Adventurer 5M Pro', 'Guider 3'],
      faq: [
        {
          d: 'Esiste un codice sconto Flashforge?',
          r: 'Non uno permanente che io possa darti. Flashforge lavora soprattutto con promozioni a tempo sullo store: conviene controllare il prezzo nei periodi di saldo invece di cercare un coupon che non esiste.',
        },
        {
          d: 'Il Creator 5 Pro conviene rispetto alla Bambu X2D?',
          r: 'Sono macchine con filosofie diverse: quattro testine indipendenti contro un sistema a cambio filamento. Il Creator 5 Pro non spurga a ogni cambio colore, e su stampe multicolore lunghe è una differenza che si vede nello scarto. Ho messo i due approcci a confronto nell’articolo qui sotto.',
        },
      ],
    },
  },
  {
    slug: 'creality',
    nome: 'Creality',
    cosa: 'Stampanti FDM e resina di fascia economica, la marca più diffusa in assoluto.',
    link: 'https://crealityeu.sjv.io/5k3GZ9',
    etichetta: 'Store europeo Creality',
    codici: [],
    nota: "Qui devo essere onesto: non ho ancora provato una Creality, quindi non è una mia raccomandazione. Il link c'è perché me lo chiedete spesso e tanto vale che la commissione resti a me invece che a un sito a caso. Quando ne proverò una, lo scrivo qui sopra.",
    articoli: [],
  },
  {
    slug: 'r3d',
    nome: 'R3D',
    cosa: 'Filamenti, compresi i PEBA flessibili e i caricati che richiedono ugelli temprati.',
    link: 'https://r3dprint.com/s/waltermakerlabs',
    etichetta: 'R3D Filament',
    codici: [],
    nota: '',
    articoli: [],
  },
];

/** Le marche che meritano una pagina dedicata: quelle con contenuto vero dietro. */
export const MARCHE_CON_PAGINA = MARCHE.filter((m) => m.pagina);
