import { getCollection } from 'astro:content';
import { percorsoArticolo } from './i18n';

/**
 * Collega ogni articolo italiano alla sua traduzione inglese e viceversa.
 *
 * Il legame sta in un posto solo: il campo `originale` nel frontmatter inglese.
 * Da li' si ricavano entrambi i versi, cosi' non puo' capitare che una pagina
 * dichiari un alternato che l'altra non conferma — che per Google equivale a
 * non averlo dichiarato affatto.
 */
export async function mappaTraduzioni() {
  const inglesi = await getCollection('articoliEn', ({ data }) => !data.draft);

  /** slug italiano -> percorso della pagina inglese */
  const versoInglese = new Map<string, string>();
  /** slug inglese -> percorso della pagina italiana */
  const versoItaliano = new Map<string, string>();

  for (const a of inglesi) {
    versoInglese.set(a.data.originale, percorsoArticolo('en', a.data.categoria, a.id));
    versoItaliano.set(a.id, percorsoArticolo('it', a.data.categoria, a.data.originale));
  }

  return { versoInglese, versoItaliano };
}
