/**
 * Dati della pagina collaborazioni, in italiano e inglese.
 *
 * I NUMERI DEL CANALE STANNO SOLO QUI. Vanno riletti da YouTube Studio e
 * aggiornati insieme alla data: una pagina che un'azienda legge prima di
 * decidere se mandarti una macchina non puo' avere cifre vecchie.
 */

export const NUMERI = {
  /** Data a cui si riferiscono le cifre qui sotto. */
  aggiornati: '24 ottobre 2026',
  iscritti: '2.600+',
  /** Finestra a cui si riferiscono visualizzazioni e ore. */
  finestra: 'ultimi 28 giorni',
  visualizzazioni: '46.000+',
  oreVisione: '299',
  videoPubblicati: '24',
};

export const EMAIL = 'waltermakerlab@gmail.com';

/** Macchine provate di persona, non solo commentate. */
export const MACCHINE = [
  'Snapmaker U1',
  'Anycubic Kobra X',
  'Anycubic Kobra 3 Combo',
  'Anycubic ACE 2 Pro',
  'Makera Z1 Pro',
  'Bambu Lab A1 mini',
];

/** Marche di cui ho scritto o parlato, comprese quelle che non possiedo. */
export const MARCHE_SEGUITE = [
  'Anycubic',
  'Snapmaker',
  'Makera',
  'Flashforge',
  'InfiMech',
  'Bambu Lab',
  'Creality',
  'Prusa',
  'Sovol',
  'R3D',
];

export interface Formato {
  titolo: string;
  testo: string;
}

export const T = {
  it: {
    titolo: 'Collaborazioni',
    metaTitolo: 'Collaborazioni | Walter Maker Labs',
    metaDescrizione:
      'Lavoriamo insieme: recensioni di stampanti 3D, CNC e laser con prova sul campo, video lungo e articolo. Come lavoro, cosa non faccio e come contattarmi.',
    h1: 'Lavoriamo insieme',
    apertura: [
      'Sono Walter Esposito. Su **Walter Maker Labs** provo stampanti 3D, frese CNC e incisori laser, e racconto come vanno davvero: anche quando non vanno.',
      'Il canale e il sito sono in italiano, ma i video lunghi hanno **traccia audio e sottotitoli in inglese** e il sito ha una **versione inglese**. Chi vi segue dall’estero vi trova lo stesso.',
    ],
    titoloNumeri: 'I numeri',
    etichetteNumeri: {
      iscritti: 'iscritti',
      visualizzazioni: 'visualizzazioni',
      oreVisione: 'ore di visione',
      videoPubblicati: 'video',
    },
    notaNumeri: (d: string, f: string) =>
      `Visualizzazioni, ore e video si riferiscono agli ${f}. Dati aggiornati al ${d}.`,
    titoloProve: 'Macchine che ho in laboratorio',
    testoProve:
      'Non le commento soltanto: le monto, ci stampo o ci freso per settimane, e scrivo anche quello che si rompe.',
    titoloMarche: 'Marche di cui ho gia’ parlato',
    titoloFormati: 'Cosa posso fare',
    formati: [
      {
        titolo: 'Video lungo con prova sul campo',
        testo:
          'Da 15 a 40 minuti: unboxing, montaggio, calibrazione e settimane di uso reale. È il formato in cui il canale lavora meglio.',
      },
      {
        titolo: 'Articolo collegato, indicizzato',
        testo:
          'Ogni video ha il suo articolo sul sito, con dati strutturati e il video incorporato. Resta trovabile su Google quando il video è già sceso dalle raccomandazioni.',
      },
      {
        titolo: 'Short verticali',
        testo:
          'Dettagli, errori e soluzioni rapide. Funzionano bene per far conoscere una funzione specifica.',
      },
      {
        titolo: 'Copertura da fiera',
        testo:
          'Riprese allo stand, prova dal vivo, intervista. Sono a Maker Faire Rome e a Formnext.',
      },
      {
        titolo: 'Risoluzione problemi',
        testo:
          'Pagine dedicate agli errori di una macchina specifica. Portano traffico di ricerca per anni e riducono le richieste alla vostra assistenza.',
      },
    ] satisfies Formato[],
    titoloComeLavoro: 'Come lavoro',
    comeLavoro: [
      '**Dico quello che non funziona.** È la ragione per cui chi guarda si fida di quello che dico quando invece funziona. Se cercate una recensione positiva garantita, non sono la persona giusta, e ve lo dico subito invece di farvelo scoprire dopo.',
      '**Dichiaro sempre cosa mi è stato mandato.** Se un prodotto arriva in omaggio o in prestito, lo scrivo nel video e nell’articolo. Lo stesso vale per i link affiliati.',
      '**I tempi sono quelli della prova.** Non pubblico un giudizio su una macchina che ho acceso ieri. Se serve una pubblicazione entro una data, ditemelo prima e vediamo se è compatibile.',
      '**Non cancello e non riscrivo** un contenuto già pubblicato perché è scomodo. Se emerge un dato nuovo, aggiungo un aggiornamento: la correzione resta visibile.',
    ],
    titoloContatto: 'Parliamone',
    testoContatto:
      'Scrivetemi cosa avete in mente. Rispondo anche quando la risposta è no, e in quel caso vi dico perché.',
    etichettaEmail: 'Scrivimi',
    altroCanale: 'Il canale',
    altroSito: 'Gli articoli',
  },

  en: {
    titolo: 'Work with me',
    metaTitolo: 'Work with me | Walter Maker Labs',
    metaDescrizione:
      'Hands-on reviews of 3D printers, desktop CNC and laser machines: long-form video plus an indexed article. How I work, what I don’t do, and how to reach me.',
    h1: 'Work with me',
    apertura: [
      'I’m Walter Esposito. On **Walter Maker Labs** I test 3D printers, desktop CNC mills and laser machines, and report how they actually perform — including when they don’t.',
      'The channel is in Italian, but the long-form videos carry an **English audio track and reviewed English subtitles**, and the site has an **English edition**. Your international audience can follow the coverage too.',
    ],
    titoloNumeri: 'The numbers',
    etichetteNumeri: {
      iscritti: 'subscribers',
      visualizzazioni: 'views',
      oreVisione: 'hours watched',
      videoPubblicati: 'videos',
    },
    notaNumeri: (d: string, f: string) =>
      `Views, hours and videos refer to the ${f}. Figures updated on ${d}.`,
    titoloProve: 'Machines in my workshop',
    testoProve:
      'I don’t just comment on them: I build them, print or mill with them for weeks, and write down what breaks.',
    titoloMarche: 'Brands I have already covered',
    titoloFormati: 'What I can do',
    formati: [
      {
        titolo: 'Long-form video with a real test',
        testo:
          '15 to 40 minutes: unboxing, assembly, calibration and weeks of actual use. It’s the format this channel does best.',
      },
      {
        titolo: 'A companion article, indexed',
        testo:
          'Every video gets its own article on the site, with structured data and the video embedded. It stays findable on Google long after the video drops out of recommendations.',
      },
      {
        titolo: 'Vertical shorts',
        testo:
          'Details, failures and quick fixes. They work well for putting one specific feature in front of people.',
      },
      {
        titolo: 'Trade show coverage',
        testo:
          'Filming at the booth, a live demo, an interview. I’ll be at Maker Faire Rome and at Formnext.',
      },
      {
        titolo: 'Troubleshooting pages',
        testo:
          'Dedicated pages for a specific machine’s errors. They bring search traffic for years and take load off your support team.',
      },
    ] satisfies Formato[],
    titoloComeLavoro: 'How I work',
    comeLavoro: [
      '**I say what doesn’t work.** That’s the reason people believe me when I say something does. If you need a guaranteed positive review, I’m the wrong person — and I’d rather tell you now than have you find out later.',
      '**I always disclose what I was sent.** If a product arrives free or on loan, it’s stated in the video and in the article. The same goes for affiliate links.',
      '**The timeline is however long the test takes.** I don’t publish a verdict on a machine I switched on yesterday. If you need publication by a specific date, tell me up front and we’ll see whether it fits.',
      '**I don’t delete or rewrite** published coverage because it became inconvenient. If new information emerges I add an update, and the correction stays visible.',
    ],
    titoloContatto: 'Let’s talk',
    testoContatto:
      'Tell me what you have in mind. I reply even when the answer is no, and in that case I tell you why.',
    etichettaEmail: 'Email me',
    altroCanale: 'The channel',
    altroSito: 'The articles',
  },
} as const;
