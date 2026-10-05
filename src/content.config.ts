import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** I silos tematici del sito. L'URL di un articolo e' /{categoria}/{slug}/ */
export const CATEGORIE = ['stampa-3d', 'cnc', 'laser', 'ai', 'canale'] as const;

/** Il tipo e' trasversale ai silos: genera pagine di elenco, non URL di articolo. */
export const TIPI = ['recensione', 'guida', 'tutorial', 'progetto', 'risoluzione-problemi'] as const;

const articoli = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articoli' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(70, 'Oltre i 70 caratteri il title viene troncato in SERP'),
      description: z.string().min(70).max(165, 'La meta description va tenuta entro 165 caratteri'),
      categoria: z.enum(CATEGORIE),
      tipo: z.enum(TIPI),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      cover: image(),
      coverAlt: z.string(),

      /** Solo l'ID del video, non l'URL completo. Es: "dQw4w9WgXcQ" */
      videoId: z.string().optional(),
      /** Durata ISO 8601 per lo schema VideoObject. Es: "PT12M30S" */
      videoDurata: z.string().optional(),

      /** Compilato solo quando tipo === 'recensione': alimenta lo schema Review */
      prodotto: z
        .object({
          nome: z.string(),
          marca: z.string(),
          voto: z.number().min(1).max(5),
          prezzoIndicativo: z.number().optional(),
        })
        .optional(),

      /** Serie di video da mostrare in fondo all'articolo, in ordine cronologico. */
      shorts: z
        .array(
          z.object({
            id: z.string(),
            titolo: z.string(),
            nota: z.string().optional(),
            /** true per i video normali 16:9; gli Short verticali sono il default. */
            orizzontale: z.boolean().default(false),
          }),
        )
        .optional(),

      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { articoli };
