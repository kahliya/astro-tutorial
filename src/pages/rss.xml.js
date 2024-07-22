import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(ctx) {
  return rss({
    title: 'Astro Learner Tutorial | Bloggie',
    description: 'My Astro Learning Journey',
    site: ctx.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}
