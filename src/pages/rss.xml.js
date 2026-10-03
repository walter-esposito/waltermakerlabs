import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articoli = (await getCollection('articoli', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: 'Walter Maker Labs',
    description: 'Stampa 3D, CNC, laser e AI applicata al making.',
    site: context.site,
    customData: '<language>it-it</language>',
    items: articoli.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.pubDate,
      link: `/${a.data.categoria}/${a.id}/`,
    })),
  });
}
