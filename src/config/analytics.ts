/**
 * Statistiche del sito. Entrambi gli strumenti sono senza cookie e senza
 * identificatori persistenti, quindi non serve il banner di consenso.
 *
 * Questi non sono segreti: finiscono nell'HTML della pagina ed e' normale.
 * Lasciare la stringa vuota disattiva lo strumento.
 */

/** Cloudflare Web Analytics -> token del beacon. Traffico e Core Web Vitals reali. */
export const CLOUDFLARE_TOKEN = '';

/** Umami Cloud -> Website ID. Serve per gli eventi sui link affiliati. */
export const UMAMI_WEBSITE_ID = '';

/** Host dello script Umami. Cambia solo se usi un'istanza tua invece del cloud. */
export const UMAMI_SRC = 'https://cloud.umami.is/script.js';
