import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Genera /someonelikethis.html (en comptes de /someonelikethis/index.html):
  // GitHub Pages el serveix a /someonelikethis sense redirigir a la barra final.
  build: { format: "file" },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
  integrations: [react(), tailwind()],
});
