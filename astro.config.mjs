import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import { cpSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

// Amb build.format "file" la portada /es/ es genera com a /es.html. GitHub Pages
// serveix /es amb això, però /es/ (amb barra, que és la URL canònica) donaria 404:
// copiem també la portada a es/index.html perquè les dues formes funcionin.
function indexForLocaleFolders() {
  return {
    name: "index-for-locale-folders",
    hooks: {
      "astro:build:done": ({ dir }) => {
        const root = fileURLToPath(dir);
        for (const l of ["es", "ca"]) {
          const src = `${root}${l}.html`;
          if (!existsSync(src)) continue;
          mkdirSync(`${root}${l}`, { recursive: true });
          cpSync(src, `${root}${l}/index.html`);
        }
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://someonelikethis.yapplic.com",
  // Genera /someonelikethis.html (en comptes de /someonelikethis/index.html):
  // GitHub Pages el serveix a /someonelikethis sense redirigir a la barra final.
  build: { format: "file" },
  // Idiomes: anglès a l'arrel, /es/ i /ca/ amb prefix (carpetes a src/pages).
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "ca"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [react(), tailwind(), indexForLocaleFolders()],
});
