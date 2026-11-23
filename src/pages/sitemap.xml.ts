import { OCCASIONS } from "../data/occasions";
import { LANGS, absoluteUrl, homePath, pagePath, type Lang } from "../i18n";

type Entry = { alternates: Record<Lang, string> };

// Sitemap propi (no @astrojs/sitemap): les pàgines d'ocasió tenen una URL
// diferent per idioma i la integració no n'estableix bé els hreflang.
// /someonelikethis i /app queden fora.
export function GET() {
  const entries: Entry[] = [
    { alternates: Object.fromEntries(LANGS.map((l) => [l, homePath(l)])) as Record<Lang, string> },
    ...OCCASIONS.filter((o) => o.pages).map((o) => ({
      alternates: Object.fromEntries(
        LANGS.map((l) => [l, pagePath(l, o.pages![l].slug)]),
      ) as Record<Lang, string>,
    })),
  ];
  const legal = ["/support", "/privacy-policy", "/terms-and-conditions", "/cookies-policy", "/delete-account"];

  const urls = [
    ...entries.flatMap((e) =>
      LANGS.map((l) => {
        const links = [
          ...LANGS.map(
            (x) => `    <xhtml:link rel="alternate" hreflang="${x}" href="${absoluteUrl(e.alternates[x])}"/>`,
          ),
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(e.alternates.en)}"/>`,
        ].join("\n");
        return `  <url>\n    <loc>${absoluteUrl(e.alternates[l])}</loc>\n${links}\n  </url>`;
      }),
    ),
    ...legal.map((p) => `  <url>\n    <loc>${absoluteUrl(p)}</loc>\n  </url>`),
  ].join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
