// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Il sito vive alla radice di waltermakerlabs.it, ma finche' il dominio non e'
 * collegato viene servito sotto /waltermakerlabs/ dalle GitHub Pages di progetto.
 * SITE_BASE permette di costruire quella variante senza toccare il codice:
 * senza la variabile si ottiene il sito definitivo.
 */
// Si passa senza slash (SITE_BASE=waltermakerlabs): su Git Bash un valore che
// inizia con "/" verrebbe convertito in un percorso Windows.
const grezzo = (process.env.SITE_BASE || '').replace(/^\/+|\/+$/g, '');
const BASE = grezzo ? `/${grezzo}/` : '/';

export default defineConfig({
  site: 'https://waltermakerlabs.it',
  base: BASE,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // /laser/ non ha ancora articoli: pagina vuota, non va proposta a Google.
      // Appena avra' un articolo, togliere la condizione.
      filter: (page) => !page.includes('/404') && !page.endsWith('/laser/'),
    }),
  ],
  build: {
    format: 'directory',
  },
});
