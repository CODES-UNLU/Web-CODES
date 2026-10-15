// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Sitio publicado en GitHub Pages (CODES-UNLU/Web-CODES).
  site: 'https://codes-unlu.github.io',

  // `base` es obligatorio para project pages: la web vive en /Web-CODES/.
  base: '/Web-CODES',

  vite: {
    plugins: [tailwindcss()],
  },
});
