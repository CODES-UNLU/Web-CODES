// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Sitio publicado en GitHub Pages (CODES-UNLU/Web-CODES).
  site: 'https://codes-unlu.github.io',

  // `base` es obligatorio para project pages: la web vive en /Web-CODES/.
  base: '/Web-CODES',

  // Precarga cada enlace interno al tocarlo/presionarlo (antes de soltar), así la
  // transición entre páginas se siente inmediata sin gastar datos en páginas que no se abren.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'tap',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
