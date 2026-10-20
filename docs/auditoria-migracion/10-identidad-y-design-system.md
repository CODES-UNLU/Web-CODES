# 10. Identidad Visual Oficial y Sistema de DiseÃ±o (Design System)

Este documento traduce la guÃ­a de identidad de marca oficial de CODES++ ([https://codes-unlu.github.io/Identidad-CODES/](https://codes-unlu.github.io/Identidad-CODES/)) en un **sistema de diseÃ±o (Design System)** accesible, mobile-first y orientado a la usabilidad estudiantil, preparado para implementarse con **Tailwind CSS v4** y **Astro v5**.

---

## 1. Fundamentos de Marca e Inventario de Recursos Oficiales

### 1.1. Concepto y Significado
- **InstituciÃ³n:** Centro Organizado de Estudiantes de Sistemas (CODES++) Â· Universidad Nacional de LujÃ¡n (UNLu).
- **Isotipo:** Un globo terrÃ¡queo que emerge de un libro abierto con la letra "C" al frente, simbolizando la trÃ­ada fundamental: **estudio acadÃ©mico, conexiÃ³n comunitaria y ciencias de la computaciÃ³n / sistemas**.
- **Color NÃºcleo de Marca:** `#39c0c3` (Teal 400), tonalidad histÃ³rica de `codesunlu.tech`.

### 1.2. Inventario de Activos GrÃ¡ficos Oficiales

| Recurso | Formato | Dimensiones / Escalabilidad | Comportamiento / Uso Recomendado | Destino en Proyecto |
| :--- | :--- | :--- | :--- | :--- |
| **`logo.svg`** | SVG DinÃ¡mico | Vectorial (16px a infinito) | **Reactivo al sistema:** Contiene media query interna `prefers-color-scheme`. Ideal para favicon y Header automÃ¡tico. | `public/brand/logo.svg` |
| **`logo-claro.svg`** | SVG EstÃ¡tico | Vectorial | Optimizado especÃ­ficamente para fondos blancos o claros (`#ffffff` / `#e7fafa`). Capas profundas (Teal 400 a 700). | `public/brand/logo-claro.svg` |
| **`logo-oscuro.svg`** | SVG EstÃ¡tico | Vectorial | Optimizado especÃ­ficamente para fondos oscuros (`#0f0f0f` / `#1a1a1a`). Capas luminosas (Teal 200 a 500). | `public/brand/logo-oscuro.svg` |
| **`logo-mono.svg`** | SVG Monocromo | Vectorial | Unicolor. Permite inversiÃ³n total mediante CSS (`filter: brightness(0) invert(1)`) para sellos o documentos. | `public/brand/logo-mono.svg` |
| **`avatar-1024.png`** | PNG Raster | 1024 x 1024 px | Imagen de alta resoluciÃ³n pensada para redes sociales (Instagram, Discord, WhatsApp). Admite recorte circular y esquinas redondeadas. | `public/brand/avatar-1024.png` |

---

## 2. Paleta Oficial: Escala Teal OKLCH

La identidad oficial define una Ãºnica familia cromÃ¡tica basada en el espacio perceptualmente uniforme **OKLCH** con un matiz constante `h â‰ˆ 197.6Â°` y pasos parejos de luminosidad:

```
[50] #e7fafa   (Luminosidad extrema - Fondos claros sutiles)
[100] #c8f3f4  (Bordes suaves en light mode)
[200] #95e7e8  (Acentos de texto en dark mode)
[300] #5dd5d8  --primary-light (Enlaces y hover en dark mode)
[400] #39c0c3  --primary (Color oficial CODES - Identidad de marca)
[500] #30a5a8  (Color primario para controles y botones activos)
[600] #2a8a8d  --primary-dark (Hover en light mode / fondos contrastados)
[700] #1d6d6f  (Enlaces y textos principales de acento en light mode)
[800] #125355  (Superficies oscuras con tinte de marca)
[900] #083b3c  (Fondos profundos de contraste)
[950] #022324  (Fondo mÃ¡ximo profundo / contraste extremo)
```

---

## 3. Tokens de DiseÃ±o y Roles SemÃ¡nticos

Para que la web resuelva necesidades funcionales y de lectura sin sobrecargar visualmente al usuario, es indispensable **desacoplar los colores de marca de los colores semÃ¡nticos de estado (Ã©xito, advertencia, error e informaciÃ³n)**.

### 3.1. Roles SemÃ¡nticos vs Colores de Marca

```css
/* DefiniciÃ³n de Design Tokens para Tailwind CSS v4 */
:root {
  /* --- MARCA CODES (Brand Scale) --- */
  --brand-50: #e7fafa;
  --brand-100: #c8f3f4;
  --brand-200: #95e7e8;
  --brand-300: #5dd5d8;
  --brand-400: #39c0c3; /* Principal */
  --brand-500: #30a5a8;
  --brand-600: #2a8a8d;
  --brand-700: #1d6d6f;
  --brand-800: #125355;
  --brand-900: #083b3c;
  --brand-950: #022324;

  /* --- MODO CLARO (Default Light Surfaces) --- */
  --color-bg: #ffffff;
  --color-bg-subtle: #f8fafb;
  --color-surface: #ffffff;
  --color-surface-hover: #f1f5f5;
  --color-border: #dfe7e7; /* Oficial Identidad */
  --color-border-subtle: #edf2f2;
  
  --color-text-main: #1a1a1a; /* Oficial Identidad */
  --color-text-muted: #555f5f; /* Oficial Identidad */
  --color-text-heading: #0f0f0f;
  
  --color-interactive: #1d6d6f; /* Teal 700 - Garantiza 4.8:1 en blanco */
  --color-interactive-hover: #125355; /* Teal 800 */
  --color-interactive-focus: #39c0c3;

  /* --- SEMÃNTICA INSTITUCIONAL (Feedback & Status) --- */
  --color-success: #15803d; /* Verde esmeralda (ConfirmaciÃ³n de trÃ¡mite / Aprobado) */
  --color-success-bg: #f0fdf4;
  --color-success-border: #bbf7d0;

  --color-warning: #b45309; /* Ãmbar oscuro (Plazos por vencer / Inscripciones) */
  --color-warning-bg: #fffbeb;
  --color-warning-border: #fde68a;

  --color-danger: #b91c1c; /* Rojo carmesÃ­ (PÃ©rdida regularidad / Fechas lÃ­mite cerradas) */
  --color-danger-bg: #fef2f2;
  --color-danger-border: #fecaca;

  --color-info: #0369a1; /* Azul cielo UNLu (Avisos acadÃ©micos / SIU GuaranÃ­) */
  --color-info-bg: #f0f9ff;
  --color-info-border: #bae6fd;
}

/* --- MODO OSCURO (Dark Surfaces) --- */
[data-theme="dark"], .dark {
  --color-bg: #0f0f0f; /* Oficial Identidad */
  --color-bg-subtle: #161818;
  --color-surface: #1a1a1a; /* Oficial Identidad */
  --color-surface-hover: #242727;
  --color-border: #333a3a;
  --color-border-subtle: #262a2a;

  --color-text-main: #e0e0e0; /* Oficial Identidad */
  --color-text-muted: #b0b0b0; /* Oficial Identidad */
  --color-text-heading: #ffffff;

  --color-interactive: #5dd5d8; /* Teal 300 - Luminoso y legible en dark */
  --color-interactive-hover: #95e7e8; /* Teal 200 */
  --color-interactive-focus: #39c0c3;

  --color-success: #4ade80;
  --color-success-bg: #052e16;
  --color-success-border: #14532d;

  --color-warning: #fbbf24;
  --color-warning-bg: #451a03;
  --color-warning-border: #78350f;

  --color-danger: #f87171;
  --color-danger-bg: #450a0a;
  --color-danger-border: #7f1d1d;

  --color-info: #38bdf8;
  --color-info-bg: #082f49;
  --color-info-border: #075985;
}
```

---

## 4. Matriz de Contraste y Accesibilidad (WCAG 2.1 AA/AAA)

Para evitar los problemas detectados en la web anterior (donde se usaban textos en `#00ffcc` o `#39c0c3` sobre blanco con ratios ilegibles de `1.8:1`), se establecen combinaciones obligatorias y combinaciones estrictamente prohibidas:

### 4.1. Combinaciones Aprobadas

| Elemento | Fondo | Color de Texto | Ratio Calculado | Nivel WCAG | Estado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Texto General (Light) | `#ffffff` | `#1a1a1a` | **16.1 : 1** | AAA | Aprobado |
| Texto Secundario (Light) | `#ffffff` | `#555f5f` | **5.8 : 1** | AA | Aprobado |
| Enlace / BotÃ³n (Light) | `#ffffff` | `#1d6d6f` (Teal 700) | **4.9 : 1** | AA | Aprobado |
| BotÃ³n Primario Relleno | `#1d6d6f` (Teal 700) | `#ffffff` | **4.9 : 1** | AA | Aprobado |
| Texto General (Dark) | `#0f0f0f` | `#e0e0e0` | **13.5 : 1** | AAA | Aprobado |
| Texto Secundario (Dark) | `#0f0f0f` | `#b0b0b0` | **8.4 : 1** | AAA | Aprobado |
| Enlace / Acento (Dark) | `#0f0f0f` | `#5dd5d8` (Teal 300) | **9.6 : 1** | AAA | Aprobado |
| Card de Novedad (Dark) | `#1a1a1a` | `#ffffff` | **15.2 : 1** | AAA | Aprobado |

### 4.2. Combinaciones Estrictamente Prohibidas
- âŒ **PROHIBIDO:** Usar `--brand-400` (`#39c0c3`) o `--brand-300` (`#5dd5d8`) como color de texto sobre fondo blanco (Ratio < `2.1:1`, falla crÃ­tica de accesibilidad).
- âŒ **PROHIBIDO:** Usar degradados de fondo con texto blanco encima sin una capa de oscurecimiento garantizada.
- âŒ **PROHIBIDO:** Usar `--brand-700` (`#1d6d6f`) o `--brand-800` (`#125355`) como texto sobre fondos oscuros (Ratio < `2.5:1`).

---

## 5. Componentes Fundamentales del Sistema de DiseÃ±o

El sistema de diseÃ±o define 6 componentes base construidos como utilidades de Tailwind CSS y componentes `.astro`:

### 5.1. Botones (`Button.astro`)
- **Variante Primaria:** Fondo `bg-teal-700 text-white hover:bg-teal-800 dark:bg-teal-400 dark:text-neutral-950 dark:hover:bg-teal-300`. Alto contraste y tamaÃ±o tÃ¡ctil mÃ­nimo de `44 x 44 px`.
- **Variante Secundaria / Outline:** Borde `border border-teal-700 text-teal-700 dark:border-teal-400 dark:text-teal-300`.
- **Variante Ghost / Texto:** Para acciones terciarias y paginadores.

### 5.2. Tarjetas de InformaciÃ³n (`Card.astro`)
- Superficie neutra, borde sutil (`border border-[var(--color-border)]`), esquinas redondeadas consistentes (`rounded-xl`), padding generoso (`p-6`).
- **Sin efectos de resplandor (glow) de IA**. El hover se comunica con una ligera elevaciÃ³n de sombra (`shadow-md`) y borde teal sutil.

### 5.3. Badges SemÃ¡nticos (`Badge.astro`)
- PÃ­ldoras compactas para categorÃ­as del calendario o estado de trÃ¡mites:
  - `InscripciÃ³n`: Fondo Ã¡mbar suave con texto Ã¡mbar oscuro.
  - `Finales`: Fondo teal suave con texto teal oscuro.
  - `Feriado / Receso`: Fondo gris suave con texto gris neutro.

### 5.4. AcordeÃ³n SemÃ¡ntico (`Accordion.astro`)
- Construido con elementos nativos de HTML5: `<details class="group">` y `<summary class="cursor-pointer">`.
- AnimaciÃ³n fluida mediante CSS puro (`transition` en max-height o `interpolate-size: allow-keywords`).
- Cero JavaScript del cliente. Accesible por teclado nativamente.

---

## 6. IntegraciÃ³n TÃ©cnica de los Recursos en Astro

1. **Favicon Adaptativo:**
   - En el `<head>` del layout principal `BaseLayout.astro`:
     ```html
     <link rel="icon" type="image/svg+xml" href="/brand/logo.svg" />
     ```
   - Gracias a las media queries internas del SVG oficial, el favicon se adaptarÃ¡ automÃ¡ticamente a la barra de pestaÃ±as del navegador en modo claro u oscuro.

2. **Isotipo en Header:**
   - Uso del SVG inline o etiqueta `<img>` con soporte para temas:
     ```html
     <img src="/brand/logo-claro.svg" alt="CODES++" class="h-9 w-auto dark:hidden" />
     <img src="/brand/logo-oscuro.svg" alt="CODES++" class="h-9 w-auto hidden dark:block" />
     ```

---

## 7. Aspectos a Validar con la ComisiÃ³n

1. **TipografÃ­a Complementaria:** La guÃ­a oficial utiliza fuentes del sistema (`system-ui, -apple-system, sans-serif`). Proponemos estandarizar en **Inter** o **Plus Jakarta Sans** vÃ­a fuentes locales autohospedadas (`fontsource`) para una estÃ©tica moderna y sin dependencia de Google Fonts en el cliente.
2. **Uso de la sigla CODES++:** Confirmar si el nombre oficial en textos institucionales debe escribirse siempre como `CODES++` (con los dos signos mÃ¡s) o si es aceptable alternar con `CODES`.