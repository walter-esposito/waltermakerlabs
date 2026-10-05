/**
 * Codici di verifica della proprieta' del sito per i motori di ricerca.
 *
 * Servono solo se scegli la verifica via tag HTML. Se verifichi via DNS (TXT),
 * queste restano vuote e non viene emesso nulla.
 *
 * Non sono segreti: sono pensati per stare nell'HTML pubblico.
 */

/** Google Search Console -> valore di content del tag google-site-verification. */
export const GOOGLE = '';

/** Bing Webmaster Tools -> valore di content del tag msvalidate.01. */
export const BING = '';
