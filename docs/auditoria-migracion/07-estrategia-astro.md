# 07. Estrategia TÃ©cnica de MigraciÃ³n a Astro

Este documento define la arquitectura tÃ©cnica para la reconstrucciÃ³n del sitio web utilizando **Astro v5**, **Tailwind CSS v4** y un enfoque estricto de **cero JavaScript por defecto (Zero-JS Architecture)**.

---

## 1. Paradigma TÃ©cnico: EstÃ¡tico por Defecto con Islas Selectivas

El sitio actual en React carga bundles de JavaScript masivos que superan los 4 MB en la carga inicial (incluyendo librerÃ­as pesadas como `pdfjs-dist`, `bootstrap`, `react-router` y clientes de base de datos en runtime).

En Astro, **mÃ¡s del 85% de las pÃ¡ginas del sitio serÃ¡n 100% HTML y CSS compilados en build time**, garantizando tiempos de carga casi instantÃ¡neos (LCP < 1.0s) incluso en conexiones mÃ³viles lentas (3G/4G) en el campus de la universidad.

```
+-----------------------------------------------------------------------------------+
|                        ARQUITECTURA TÃ‰CNICA EN ASTRO                              |
+-----------------------------------------------------------------------------------+
| 1. Astro EstÃ¡tico (SSG): GuÃ­as de trÃ¡mites, portal ingresantes, novedades,       |
|    directorio de WhatsApp y pÃ¡ginas institucionales. 0 KB de JavaScript.         |
|                                                                                   |
| 2. InteracciÃ³n Ligera (Vanilla JS): Filtros de bÃºsqueda local (Pagefind / input), |
|    menÃº hamburguesa mÃ³vil accesible, acordeones nativos (<details>/<summary>)     |
|    y alternador de tema claro/oscuro inline (< 3 KB JS).                          |
|                                                                                   |
| 3. Islas React Hidratadas (client:visible): Exclusivamente reservadas para       |
|    componentes interactivos complejos si se conservan (ej. selector interactivo   |
|    de rifas o timeline dinÃ¡mico si fuera estrictamente indispensable).           |
|                                                                                   |
| 4. Astro Content Collections (Type-Safe): GestiÃ³n de datos institucionales       |
|    mediante schemas de Zod para trÃ¡mites, calendario oficial y novedades.        |
+-----------------------------------------------------------------------------------+
```

---

## 2. ClasificaciÃ³n TÃ©cnica de Funcionalidades

| Funcionalidad | CategorÃ­a TÃ©cnica | Necesidad Real de JS | ImplementaciÃ³n Recomendada | Dependencias Externas |
| :--- | :--- | :--- | :--- | :--- |
| **Portal Ingresantes** | **Astro EstÃ¡tico** | Ninguna (0 KB JS) | Plantilla `.astro` pura estructurada con tipografÃ­a y enlaces limpios. | Ninguna |
| **GuÃ­as de TrÃ¡mites** | **Astro Content Collections** | Ninguna (0 KB JS) | Archivos `.md` / `.mdx` en `src/content/tramites/` con schema Zod. | Ninguna |
| **Novedades / Blog** | **Astro Content Collections** | Ninguna (0 KB JS) | Archivos en `src/content/novedades/` compilados a rutas `/novedades/[slug]`. | Ninguna |
| **Calendario AcadÃ©mico** | **Astro EstÃ¡tico + Script** | MÃ­nima (< 2 KB) | Render estÃ¡tico de eventos. PequeÃ±o script para descargar `.ics` o filtrar por categorÃ­a. | Generador de string ICS en navegador |
| **Directorio de WhatsApp** | **Astro EstÃ¡tico** | Ninguna (0 KB JS) | Grilla de tarjetas con enlaces `https://chat.whatsapp.com/...`. | Ninguna |
| **Acordeones de FAQs** | **HTML Nativo** | Ninguna (0 KB JS) | Uso de elementos semÃ¡nticos estÃ¡ndar `<details>` y `<summary>` con estilos Tailwind. | Ninguna |
| **Buscador de TrÃ¡mites** | **InteracciÃ³n Ligera** | MÃ­nima (< 5 KB) | Script Vanilla JS de filtrado de DOM o integraciÃ³n de Pagefind para bÃºsqueda estÃ¡tica indexada. | Pagefind (opcional) |
| **MenÃº MÃ³vil y Tema** | **InteracciÃ³n Ligera** | MÃ­nima (< 1.5 KB) | Script inline estÃ¡ndar en el layout base para toggle de clases CSS y `aria-expanded`. | Ninguna |
| **Videoteca de Charlas** | **Astro EstÃ¡tico** | Ninguna (0 KB JS) | Componente `astro-embed` o fachada estÃ¡tica con `lite-youtube` (carga el iframe solo al hacer clic). | YouTube Thumbnail API |
| **Formulario "Sumate"** | **Servicio Externo** | MÃ­nima | Formulario HTML estÃ¡ndar con action a Formspree, Google Forms embebido o Tally.so. | Formspree / Google Forms |

---

## 3. Modelo de Datos con Astro Content Collections

Para garantizar que el contenido institucional no se degrade con el tiempo ni dependa de llamadas frÃ¡giles a APIs durante la navegaciÃ³n, se estructuran colecciones con tipado estricto:

### ColecciÃ³n: TrÃ¡mites (`src/content/tramites/`)
```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const tramites = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['ingreso', 'cursada', 'finales', 'administrativo']),
    updatedDate: z.date(),
    actionUrl: z.string().url().optional(),
    actionText: z.string().optional(),
    officeContact: z.string().optional(),
  }),
});

export const collections = { tramites };
```

### ColecciÃ³n: Calendario AcadÃ©mico (`src/data/calendar.json`)
```typescript
// Datos estÃ¡ticos sincronizados con la resoluciÃ³n oficial de la UNLu
export interface CalendarEvent {
  id: string;
  title: string;
  dateStart: string;
  dateEnd?: string;
  category: 'inscripcion' | 'finales' | 'feriado' | 'receso';
  description?: string;
}
```

---

## 4. Reemplazo de TecnologÃ­as Pesadas

| TecnologÃ­a en Sitio Antiguo (React) | Problema Detectado | Reemplazo Propuesto en Astro | Beneficio Inmediato |
| :--- | :--- | :--- | :--- |
| **PDF.js (`pdfjs-dist`)** | Bundle de 2 MB en el cliente para parsear legajos | **ELIMINAR** | Cero costo de red; eliminaciÃ³n de barrera de entrada para estudiantes. |
| **Bootstrap 5 + jQuery Scripts** | CSS redundante y parches imperativos en `index.html` | **Tailwind CSS v4** | CSS purgado a menos de 15 KB en producciÃ³n; diseÃ±o mobile nativo. |
| **React-Router 7** | Ruteo en cliente (SPA) con pantalla blanca inicial | **Astro File-based Routing** | Cada pÃ¡gina es una URL estÃ¡tica real; SEO Ã³ptimo y compatibilidad total con navegadores mÃ³viles. |
| **Supabase Client en Runtime** | Consultas en tiempo de ejecuciÃ³n para contenido estÃ¡tico | **Build-Time Data Fetching / MDX** | El sitio no se rompe si se suspende la base de datos o si falla la conexiÃ³n a internet del campus. |
| **Google Apps Script API** | Latencias de mÃ¡s de 2 segundos en solicitudes de admin | **Herramienta Interna Separada** | El sitio web pÃºblico queda libre de riesgos de seguridad y cuellos de botella de backend. |

---

## 5. Estrategia de Despliegue en GitHub Pages

El nuevo repositorio `Web-CODES` ya cuenta con configuraciÃ³n base para GitHub Pages bajo el path `/Web-CODES`:
- **`astro.config.mjs`**:
  ```javascript
  import { defineConfig } from 'astro/config';
  import tailwind from '@tailwindcss/vite';

  export default defineConfig({
    site: 'https://codes-unlu.github.io',
    base: '/Web-CODES',
    build: {
      format: 'directory'
    }
  });
  ```
- **Pipeline de GitHub Actions**: CompilaciÃ³n estÃ¡tica (`pnpm build`) y despliegue automÃ¡tico a GitHub Pages en cada push a la rama principal. Cero costo de hosting y mÃ¡xima disponibilidad (99.99%).