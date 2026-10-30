// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Sitio publicado en GitHub Pages (CODES-UNLU/Web-CODES) con dominio propio.
  // Al servirse desde la raíz del dominio no hace falta `base`.
  site: 'https://codesunlu.com.ar',

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
