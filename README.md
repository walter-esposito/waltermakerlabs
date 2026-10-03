# waltermakerlabs.it

Sito di [Walter Maker Labs](https://www.youtube.com/@waltermakerlabs) — stampa 3D, CNC, laser e AI applicata al making.

Astro, pagine statiche, deploy su GitHub Pages.

## Comandi

```bash
npm install
npm run dev      # sviluppo su localhost:4321
npm run build    # build di produzione in dist/
npm run preview  # anteprima della build
```

## Scrivere un articolo

Un file Markdown in `src/content/articoli/`. Il nome del file diventa lo slug,
e l'URL finale e' `/{categoria}/{slug}/`.

Frontmatter minimo:

```yaml
---
title: "Titolo entro 70 caratteri"
description: "Meta description fra 70 e 165 caratteri."
categoria: stampa-3d   # stampa-3d | cnc | laser | ai
tipo: recensione       # recensione | guida | tutorial | progetto
pubDate: 2026-10-03
cover: ../../assets/nome-immagine.jpg
coverAlt: "Descrizione dell'immagine per screen reader e SEO"
videoId: dQw4w9WgXcQ   # solo l'ID YouTube, non l'URL
draft: true
---
```

Lo schema in `src/content.config.ts` valida tutto in fase di build: se il title
supera i 70 caratteri o la description esce dai limiti, la build fallisce.

## Regole non negoziabili

- **Mai pubblicare la trascrizione del video come articolo.** Ogni pagina deve
  reggersi da sola, altrimenti Google la tratta come contenuto generato in serie.
- **Ogni link affiliato va con `rel="sponsored nofollow"`** e con la nota di
  trasparenza visibile. Link affiliati seguiti possono penalizzare tutto il sito.
- I video si incorporano solo con `<YouTubeEmbed />`, che carica il player al
  clic. Un iframe YouTube normale scarica ~1,5 MB e rovina i Core Web Vitals.
- Permalink senza data: la data nell'URL fa sembrare vecchio l'articolo in SERP.

## Anteprima e dominio

Il sito e' costruito per stare alla radice di `waltermakerlabs.it`. Finche' il dominio
non e' collegato viene pubblicato su
`walter-esposito.github.io/waltermakerlabs/`, che e' un sottopercorso: senza
accorgimenti ogni link e ogni immagine darebbe 404.

La variabile `SITE_BASE` risolve la cosa:

```bash
npm run build                      # sito definitivo, base "/"
SITE_BASE=waltermakerlabs npm run build   # anteprima su GitHub Pages
```

La build con `SITE_BASE` si marca anche `noindex`, per non far indicizzare
l'anteprima e ritrovarsi contenuto duplicato quando il dominio sara' attivo.

**Quando colleghi waltermakerlabs.it:** togli le righe `env: SITE_BASE` da
`.github/workflows/deploy.yml` e aggiungi `public/CNAME` con dentro il dominio.

I link interni dentro gli articoli vanno scritti **relativi**
(`../../stampa-3d/slug/`), non assoluti: cosi' funzionano con qualsiasi base.

## Struttura

```
src/
  content.config.ts          schema e silos
  content/articoli/          gli articoli in Markdown
  components/
    YouTubeEmbed.astro       player con facade
    SchedaArticolo.astro
  layouts/
    BaseLayout.astro         head SEO, canonical, OG
    ArticleLayout.astro      dati strutturati Article/Review/VideoObject
  pages/
    [categoria]/             silos e articoli
    recensioni/              elenco per tipo
```

## Sito gemello

L'elettronica e i microcontrollori stanno su [arduinoproject.it](https://arduinoproject.it).
Regola per smistare: **se c'e' codice o uno schema elettrico va su arduinoproject,
se c'e' una macchina o un oggetto fabbricato va qui.**
