# Someone Like This: web

Web de l'app mòbil **Someone Like This** (bingo de festa per jugar amb amics i família):
<https://someonelikethis.yapplic.com>. Astro 4 + Tailwind/daisyUI, pàgines estàtiques en
anglès (`/`), castellà (`/es/`) i català (`/ca/`).

## Executar-la

```bash
pnpm install
pnpm run dev      # http://localhost:4321
pnpm run check    # tipus
pnpm run build    # genera dist/
```

Cal Node 20 i pnpm 9.

## Desplegament

GitHub Actions (`.github/workflows/main.yml`) construeix i publica a GitHub Pages a cada
push a `master`. `build.format: "file"` genera `/someonelikethis.html`, perquè Pages el
serveixi sense redirigir a la barra final (necessari per als universal links).
`astro.config.mjs` copia també `es.html` i `ca.html` a `es/index.html` i `ca/index.html`
perquè `/es/` i `/ca/` funcionin.

## On és cada cosa

| Què | On |
| --- | --- |
| Nom de l'app, domini, enllaços de botiga | `src/site.ts` (el nom es canvia només aquí) |
| Textos de la portada i de la interfície | `src/i18n/en.ts`, `es.ts`, `ca.ts` (mateix esquema: `types.ts`) |
| Pàgines d'ocasió i targetes de la portada | `src/data/occasions.ts` |
| Testimonis (desactivats) | `src/data/testimonials.ts` |
| Pàgines legals i de suport (Markdown, en anglès) | `src/data/legal.ts` |
| Captures de l'app | `src/assets/screenshots/<idioma>/` |
| Imatges Open Graph, icones | `public/og-<idioma>.png`, `public/*.png`, `public/favicon.ico` |
| Components | `src/components/` i `src/components/home/` |

Pàgines que no s'han de tocar: `/someonelikethis` (invitació), `/app`, `public/.well-known/*`
i `public/app-ads.txt`.

## Afegir una pàgina d'ocasió

1. Obre `src/data/occasions.ts` i afegeix un objecte a `OCCASIONS` amb `id`, `text` (la targeta
   de la portada, en els tres idiomes) i `pages` (en els tres idiomes: `slug`, `seoTitle` ≤ 60,
   `seoDescription` ≤ 155, `h1`, `intro`, 15-20 `situations` originals i `tip`).
2. Ja està: les rutes (`/<slug>`, `/es/<slug>`, `/ca/<slug>`), l'`hreflang`, el sitemap i
   l'enllaç de la targeta de la portada es generen sols.

Una ocasió sense `pages` surt a la portada sense enllaç.

## Substituir les captures

Les captures actuals són maquetes del redisseny (`like_this/docs/store/screenshots/ios-6.9`).
Quan hi hagi captures reals, sobreescriu els PNG de `src/assets/screenshots/<idioma>/` amb els
mateixos noms (`01-bingo.png` ... `06-win.png`). Es serveixen en AVIF/WebP amb `astro:assets`.

## Activar els testimonis

Afegeix ressenyes **reals** (amb nom i botiga d'origen) a `src/data/testimonials.ts`. Mentre
l'array sigui buit, la secció no es mostra.

## SEO

- `title`, `description`, `canonical`, `hreflang` i Open Graph per pàgina a `src/layouts/BaseLayout.astro`.
- `sitemap.xml` propi a `src/pages/sitemap.xml.ts` (les pàgines d'ocasió tenen una URL
  diferent per idioma). `/someonelikethis` i `/app` queden fora i porten `noindex`.
- JSON-LD: `MobileApplication`, `Organization` i `FAQPage` a la portada; `BreadcrumbList` a les
  pàgines d'ocasió. No hi ha `aggregateRating` perquè no hi ha dades reals.
