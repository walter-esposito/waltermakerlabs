/**
 * Antepone il base path agli URL interni.
 *
 * Il sito gira in due posti: alla radice del dominio finale (base = "/") e
 * sotto /waltermakerlabs/ sulle GitHub Pages di progetto, usate come anteprima.
 * Senza questo, in anteprima ogni link interno e ogni asset finisce in 404.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function u(percorso: string): string {
  if (!percorso.startsWith('/')) return percorso;
  return BASE + percorso;
}

/** true quando stiamo costruendo l'anteprima, non il sito definitivo. */
export const ANTEPRIMA = BASE !== '';
