/**
 * Sito bilingue: italiano alla radice, inglese sotto /en/.
 *
 * L'italiano e' gia' indicizzato, quindi i suoi URL non si toccano: l'inglese e'
 * tutto in aggiunta. Gli slug di categoria inglesi sono diversi da quelli
 * italiani perche' "stampa-3d" in un URL inglese non lo cerca nessuno.
 */

export const LINGUE = ['it', 'en'] as const;
export type Lingua = (typeof LINGUE)[number];

type PerCategoria = Record<string, string>;

/** Slug usato nell'URL, per lingua. L'italiano resta identico a prima. */
export const SLUG_CATEGORIA: Record<Lingua, PerCategoria> = {
  it: { 'stampa-3d': 'stampa-3d', cnc: 'cnc', laser: 'laser', ai: 'ai', canale: 'canale' },
  en: { 'stampa-3d': '3d-printing', cnc: 'cnc', laser: 'laser', ai: 'ai', canale: 'channel' },
};

/** Etichetta leggibile della categoria, per lingua. */
export const ETICHETTA_CATEGORIA: Record<Lingua, PerCategoria> = {
  it: { 'stampa-3d': 'Stampa 3D', cnc: 'CNC', laser: 'Laser', ai: 'AI', canale: 'Il canale' },
  en: { 'stampa-3d': '3D Printing', cnc: 'CNC', laser: 'Laser', ai: 'AI', canale: 'The channel' },
};

/** Etichetta del tipo di articolo, quella che compare sopra il titolo. */
export const ETICHETTA_TIPO: Record<Lingua, PerCategoria> = {
  it: {
    recensione: 'recensione',
    guida: 'guida',
    tutorial: 'tutorial',
    progetto: 'progetto',
    'risoluzione-problemi': 'risoluzione problemi',
  },
  en: {
    recensione: 'review',
    guida: 'guide',
    tutorial: 'tutorial',
    progetto: 'project',
    'risoluzione-problemi': 'troubleshooting',
  },
};

/** Percorso di un articolo, dalla radice del sito (senza base path). */
export function percorsoArticolo(lingua: Lingua, categoria: string, slug: string): string {
  const cat = SLUG_CATEGORIA[lingua][categoria] ?? categoria;
  return lingua === 'it' ? `/${cat}/${slug}/` : `/en/${cat}/${slug}/`;
}

/** Percorso di una pagina di categoria. */
export function percorsoCategoria(lingua: Lingua, categoria: string): string {
  const cat = SLUG_CATEGORIA[lingua][categoria] ?? categoria;
  return lingua === 'it' ? `/${cat}/` : `/en/${cat}/`;
}

/** Home della lingua. */
export const percorsoHome = (lingua: Lingua) => (lingua === 'it' ? '/' : '/en/');

/** Testi dell'interfaccia. Solo quelli che compaiono su piu' pagine. */
export const T = {
  it: {
    saltaAlContenuto: 'Salta al contenuto',
    vaiAllaHome: 'Walter Maker Labs, vai alla home',
    navPrincipale: 'Principale',
    recensioni: 'Recensioni',
    problemi: 'Problemi',
    percorso: 'Percorso',
    home: 'Home',
    altraLingua: 'English',
    altraLinguaTitolo: 'Read this page in English',
    footerClaim: 'stampa 3D, CNC, laser e AI applicata al making.',
    footerVideo: 'I video sul canale',
    footerArduino: 'Cerchi elettronica e Arduino? Sono su',
    footerSconti: 'Sconti e codici',
    footerPrivacy: 'Privacy e cookie',
    aggiornatoIl: 'aggiornato il',
    episodiInOrdine: 'Gli episodi, in ordine',
    videoInOrdine: 'I video, in ordine',
    nessunArticolo: 'Nessun articolo in questa sezione, per ora.',
  },
  en: {
    saltaAlContenuto: 'Skip to content',
    vaiAllaHome: 'Walter Maker Labs, go to the homepage',
    navPrincipale: 'Main',
    recensioni: 'Reviews',
    problemi: 'Troubleshooting',
    percorso: 'Breadcrumb',
    home: 'Home',
    altraLingua: 'Italiano',
    altraLinguaTitolo: 'Leggi questa pagina in italiano',
    footerClaim: '3D printing, CNC, laser and AI applied to making.',
    footerVideo: 'Videos on the channel',
    footerArduino: 'Looking for electronics and Arduino? They live on',
    footerSconti: 'Discounts and codes',
    footerPrivacy: 'Privacy and cookies',
    aggiornatoIl: 'updated on',
    episodiInOrdine: 'The episodes, in order',
    videoInOrdine: 'The videos, in order',
    nessunArticolo: 'Nothing in this section yet.',
  },
} as const satisfies Record<Lingua, Record<string, string>>;
