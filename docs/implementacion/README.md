# Documentación de la Implementación Inicial · Web CODES++

Este documento detalla la arquitectura técnica, las convenciones de diseño y las guías de mantenimiento para la nueva presencia digital de **CODES++** (Centro Organizado de Estudiantes de Sistemas de la Universidad Nacional de Luján), construida con **Astro** y **Tailwind CSS v4**.

---

## 1. Arquitectura de Carpetas

El proyecto adopta una estructura **Feature-Driven Pragmática** combinada con el modelo de enrutamiento basado en archivos de Astro:

```text
Web-CODES/
├── public/
│   ├── brand/                     # Recursos gráficos oficiales descargados
│   │   ├── logo.svg               # SVG reactivo al tema del sistema
│   │   ├── logo-claro.svg         # SVG para fondos claros (Teal 400 a 700)
│   │   ├── logo-oscuro.svg        # SVG para fondos oscuros (Teal 200 a 500)
│   │   ├── logo-mono.svg          # SVG monocromo para impresión o contraste
│   │   └── avatar-1024.png        # Isotipo de alta resolución
│   ├── favicon.svg / favicon.ico  # Favicons de navegador
├── src/
│   ├── components/
│   │   ├── layout/                # Estructura del marco visual
│   │   │   ├── Header.astro       # Barra de navegación responsive con logo y drawer móvil
│   │   │   ├── Footer.astro       # Pie institucional con enlaces oficiales verificados
│   │   │   └── ThemeToggle.astro  # Conmutador accesible de modo claro y oscuro
│   │   └── ui/                    # Primitivas UI compartidas (agnósticas de dominio)
│   │       ├── Button.astro       # Botón accesible (<a> o <button>) con variantes y tamaños
│   │       ├── Card.astro         # Tarjeta neutra con borde sutil y estados hover
│   │       ├── Badge.astro        # Píldora semántica de categoría o estado
│   │       ├── Callout.astro      # Cuadro de aviso informativo, advertencia o éxito
│   │       ├── SectionHeading.astro # Encabezados con jerarquía y subtítulo
│   │       ├── Breadcrumbs.astro  # Migas de pan accesibles
│   │       ├── Accordion.astro    # Acordeón nativo HTML5 (<details>) con cero JS
│   │       └── SearchBar.astro    # Buscador estático en vivo con navegación por teclado
│   ├── features/                  # Módulos de dominio funcional aislados
│   │   ├── ingresantes/
│   │   │   ├── components/OnboardingStepCard.astro
│   │   │   └── data/steps.ts
│   │   ├── vida-academica/
│   │   │   ├── components/AcademicGuideCard.astro
│   │   │   ├── components/ProcedureCard.astro
│   │   │   ├── components/CodesInitiativeCard.astro
│   │   │   └── data/academicData.ts
│   │   ├── calendario/
│   │   │   ├── components/CalendarTimeline.astro
│   │   │   └── data/calendarEvents.ts
│   │   ├── comunidad/
│   │   │   ├── components/GoogleFormEmbed.astro
│   │   │   └── data/channelsData.ts
│   │   └── actividades/
│   │       ├── components/ActivityCard.astro
│   │       └── data/activitiesData.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro       # Head, SEO, Open Graph, Favicon adaptativo y script anti-FOUC
│   │   └── PageLayout.astro       # Header + Main slot + Footer
│   ├── lib/
│   │   ├── paths.ts               # Utilidad de resolución con base (/Web-CODES/) y rutas activas
│   │   └── searchData.ts          # Índice estructurado de búsqueda estática
│   ├── pages/                     # Rutas del sitio (Páginas delgadas orquestadoras)
│   │   ├── index.astro            # Home / Tablero de orientación estudiantil
│   │   ├── ingresantes.astro      # Portal de bienvenida y primeros pasos
│   │   ├── vida-academica.astro   # Cursadas, finales, trámites y reclamos
│   │   ├── calendario.astro       # Cronograma cronológico accesible
│   │   ├── comunidad.astro        # Canales, grupos de estudio y normas
│   │   ├── actividades.astro      # Videoteca y talleres extracurriculares
│   │   └── 404.astro              # Página de error orientadora con buscador
│   └── styles/
│       ├── tokens.css             # Paleta Teal OKLCH oficial y tokens semánticos
│       └── global.css             # Integración Tailwind CSS v4, reset y foco accesible
├── docs/                          # Documentación del proyecto y auditoría previa
├── astro.config.mjs               # Configuración Astro (base: '/Web-CODES', vite tailwindcss)
└── package.json
```

---

## 2. Convenciones Feature-Driven

Para evitar el acoplamiento y la deuda técnica detectada en la web React anterior:
1. **Aislamiento entre Features:** Una feature (`src/features/vida-academica/`) **nunca importa directamente código de otra feature** (`src/features/calendario/`).
2. **Componentes Compartidos a UI:** Si dos features necesitan un componente visual común, se ubica en `src/components/ui/`.
3. **Páginas Delgadas (Thin Pages):** Los archivos en `src/pages/` tienen como única responsabilidad importar el layout, inyectar los datos del dominio y renderizar los componentes del feature.
4. **Cero JavaScript innecesario en el cliente:** Se utiliza HTML5 semántico nativo (`<details>` para acordeones, atributos semánticos para formularios) y scripts Vanilla JS mínimos (< 1 KB) únicamente donde se requiere interactividad en el navegador (buscador estático, conmutador de tema y menú móvil).

---

## 3. Design Tokens y Accesibilidad

Los tokens residen en [`src/styles/tokens.css`](file:///d:/Universidad/Centro%20de%20estudiantes/codigods/pagina%20web/Web-CODES/src/styles/tokens.css) y siguen la [Identidad Oficial de CODES++](https://codes-unlu.github.io/Identidad-CODES/):

- **Color Oficial de Marca:** `--brand-400: #39c0c3` (Teal 400).
- **Escala Teal OKLCH:** Pasos del 50 (`#e7fafa`) al 950 (`#022324`).
- **Contraste WCAG 2.2 AA/AAA Garantizado:**
  - *Modo Claro:* Fondo `#ffffff`, texto `#1a1a1a`, interactivo `--color-interactive: #1d6d6f` (Teal 700, ratio 4.9:1).
  - *Modo Oscuro:* Fondo `#0f0f0f`, superficie `#1a1a1a`, texto `#e0e0e0`, interactivo `--color-interactive: #5dd5d8` (Teal 300, ratio 9.6:1).
- **Desacoplamiento Semántico:** Éxito (verde `#15803d`), Advertencia (ámbar `#b45309`), Peligro (rojo `#b91c1c`) e Información (azul institucional UNLu `#0369a1`).
- **Respeto a Preferencias:** Detección de `prefers-reduced-motion: reduce` que desactiva animaciones no solicitadas.

---

## 4. Guías de Mantenimiento y Extensión

### A. Cómo crear una nueva página
1. Crear el archivo en `src/pages/nombre-pagina.astro`.
2. Importar `PageLayout` desde `../layouts/PageLayout.astro` y la función `withBase` desde `../lib/paths`.
3. Mantener la estructura delgada:
   ```astro
   ---
   import PageLayout from '../layouts/PageLayout.astro';
   import Breadcrumbs from '../components/ui/Breadcrumbs.astro';
   import SectionHeading from '../components/ui/SectionHeading.astro';
   ---
   <PageLayout title="Título de la Página" description="Breve descripción">
     <div class="max-w-4xl mx-auto px-4 py-8">
       <Breadcrumbs items={[{ label: 'Nombre de Página' }]} />
       <SectionHeading title="Título Principal" subtitle="Explicación clara" />
       <!-- Contenido o componente del feature -->
     </div>
   </PageLayout>
   ```

### B. Cómo agregar un trámite o guía académica
1. Abrir [`src/features/vida-academica/data/academicData.ts`](file:///d:/Universidad/Centro%20de%20estudiantes/codigods/pagina%20web/Web-CODES/src/features/vida-academica/data/academicData.ts).
2. Si es una guía de orientación, añadir un elemento al arreglo `academicTopics`.
3. Si es un trámite formal administrado por la UNLu, agregarlo a `universityProcedures` especificando `requirements`, `steps` y `officialChannel`.
4. Si es una gestión de reclamo colectivo de CODES++, agregarlo a `codesInitiatives` indicando período y contacto.
5. Si querés que sea indexable en la barra de búsqueda del Home, agregar un objeto en [`src/lib/searchData.ts`](file:///d:/Universidad/Centro%20de%20estudiantes/codigods/pagina%20web/Web-CODES/src/lib/searchData.ts).

### C. Cómo agregar una actividad, charla o podcast
1. Abrir [`src/features/actividades/data/activitiesData.ts`](file:///d:/Universidad/Centro%20de%20estudiantes/codigods/pagina%20web/Web-CODES/src/features/actividades/data/activitiesData.ts).
2. Añadir un objeto con la estructura `ActivityItem`:
   ```ts
   {
     id: 'taller-nuevo',
     title: 'Nombre del taller o charla',
     type: 'Taller', // 'Charla' | 'Taller' | 'Podcast' | 'Entrevista' | 'Evento'
     status: 'Próximamente', // o 'Grabación disponible'
     platform: 'Presencial', // 'YouTube' | 'Spotify' | 'Presencial' | 'Online'
     dateDisplay: 'Fecha o período',
     speaker: 'Nombre del disertante',
     description: 'Resumen claro del contenido.',
     externalUrl: 'https://...' // Opcional, solo si está verificado
   }
   ```

### D. Cómo actualizar el recorrido de ingresantes
1. Abrir [`src/features/ingresantes/data/steps.ts`](file:///d:/Universidad/Centro%20de%20estudiantes/codigods/pagina%20web/Web-CODES/src/features/ingresantes/data/steps.ts).
2. Editar el arreglo `onboardingSteps`. Cada paso contiene:
   - `number`: orden del paso (1 a N).
   - `id`: identificador de ancla URL (ej. `paso-plataformas`, `paso-sedes`).
   - `title`: encabezado claro en imperativo o descriptivo.
   - `summary`: síntesis de 2 líneas.
   - `details`: lista con viñetas explicativas.
   - `actionLabel` y `actionHref`: enlace a la sección donde se amplía el tema sin duplicar texto.

### E. Cómo incorporar el Google Form de comunidad
1. Abrir [`src/pages/comunidad.astro`](file:///d:/Universidad/Centro%20de%20estudiantes/codigods/pagina%20web/Web-CODES/src/pages/comunidad.astro).
2. Localizar el componente `<GoogleFormEmbed />`.
3. Pasar la URL del formulario verificado por la comisión directiva en la propiedad `formUrl`:
   ```astro
   <GoogleFormEmbed
     formUrl="https://docs.google.com/forms/d/e/.../viewform?embedded=true"
     title="Formulario oficial de ingreso a la comunidad CODES++"
     description="Completá tus datos para que los moderadores te envíen los accesos a los grupos de WhatsApp de tu sede y materias."
     alternativeContactEmail="contacto@codesunlu.com.ar"
   />
   ```
   *El componente embeberá automáticamente el iframe responsive, proveerá el botón de apertura externa y gestionará la accesibilidad.*

---

## 5. Funcionalidades del Repositorio Anterior NO Migradas (Por Decisión Fundamentada)

En cumplimiento de las decisiones de auditoría y directivas de CODES++:
- **Panel Administrativo (`/admin`, `/dashboard`):** Eliminado del frontend estático para prevenir brechas de seguridad.
- **Base de Datos Supabase en el Cliente:** Descartada. Cero credenciales expuestas en build time.
- **Inscripción con PDF.js y Detección de IP:** Eliminada por burocrática, punitiva e inaccesible para ingresantes.
- **Sistema Transaccional de Rifas:** Retirado del código del sitio. Se canalizará externamente si el centro organiza sorteos.
- **Chatbot IA:** Eliminado para evitar respuestas con información académica desactualizada o alucinaciones sobre reglamentos.
- **Banco de Herramientas Externas:** Reemplazado por contenido enfocado al 100% en la vida académica de la UNLu.

---

## 6. Comandos de Ejecución y Build

> **Regla obligatoria del repositorio:** Usar únicamente `pnpm`. No usar `npm`, `yarn` ni `bun`.

### Instalación de dependencias
```bash
pnpm install
```

### Servidor de desarrollo
```bash
pnpm dev
```
*Disponible en `http://localhost:4321/Web-CODES/`.*

Para ejecutarlo en segundo plano:
```bash
pnpm dev --background
```

### Build de producción estático
```bash
pnpm run build
```
*Genera los archivos finales en `./dist/` listos para ser desplegados en GitHub Pages.*

### Previsualización local del build
```bash
pnpm preview
```

---

## 7. Publicación y Transición de Dominio Definitivo

Actualmente el proyecto está configurado para publicar en GitHub Pages:
- `astro.config.mjs`:
  ```js
  site: 'https://codes-unlu.github.io',
  base: '/Web-CODES',
  ```
- **Cuando se realice la migración definitiva al dominio propio de CODES++:**
  1. Modificar `site` en `astro.config.mjs` (ej. `site: 'https://codesunlu.com.ar'`).
  2. Cambiar `base: '/'` (reemplazando `/Web-CODES`). Todas las rutas del proyecto utilizan la función `withBase()` de `src/lib/paths.ts`, por lo que el cambio será 100% transparente y automático en todos los enlaces y recursos.
  3. Configurar el archivo `CNAME` en `public/CNAME` con el dominio propio.

---

## 8. Reglas de Verificación Académica y Plataformas Oficiales de la UNLu

Para garantizar la veracidad y calidad de la información brindada al estudiantado y evitar suposiciones erróneas:

### A. Plataformas Universitarias Oficiales Verificadas

1. **SAWEB (Servicios Académicos Web):**
   - **URL Oficial:** `https://saweb.unlu.edu.ar/academica/estudiante-index.php`
   - **Público:** Estudiantes de grado y pregrado de **cohortes anteriores a 2027**.
   - **Funciones:** Inscripciones a cursadas y finales, situación académica, constancias y certificados.
   - **Fuente oficial:** [unlu.edu.ar/acceso-inf-acad.html](https://www.unlu.edu.ar/acceso-inf-acad.html).

2. **Nuevo Sistema de Gestión de Estudiantes:**
   - **URL Oficial:** `https://g3w3.unlu.edu.ar/`
   - **Público:** Estudiantes de grado y pregrado de la **cohorte 2027 en adelante**.
   - **Funciones:** Autogestión de materias, finales, seguimiento de plan y certificados.
   - **Fuentes oficiales:** [unlu.edu.ar/acceso-inf-acad.html](https://www.unlu.edu.ar/acceso-inf-acad.html) e [ingresouniversitario.unlu.edu.ar/?q=node/4](https://www.ingresouniversitario.unlu.edu.ar/?q=node/4).

3. **PlatDig (Aulas Virtuales E-ducativa):**
   - **URL Oficial:** `https://platdig.unlu.edu.ar/`
   - **Público:** Todas las cohortes y docentes durante el dictado de materias.
   - **Acceso móvil:** Aplicación **Educativa Mobile** (Android / iOS).
   - **Funciones:** Descarga de materiales de estudio, guías prácticas, foros de consulta y entrega de tareas.
   - **Fuente oficial:** [basicas.unlu.edu.ar/?q=node/917](https://www.basicas.unlu.edu.ar/?q=node/917).
   - *Nota estricta:* PlatDig no se utiliza para inscripciones formales a materias ni a exámenes.

### B. Prohibición de Términos Genéricos
- **Queda prohibido** utilizar «SIU Guaraní» como denominación genérica o recomendación automática para todos los estudiantes de la UNLu.
- La terminología debe basarse estrictamente en el servicio que el estudiante necesita y en su cohorte de ingreso.

### C. Estructura de Verificación en Código
Todo procedimiento o guía administrativa modelada en `src/features/` debe contemplar los metadatos de la interfaz `AcademicVerification` definida en [`src/features/vida-academica/data/platformsData.ts`](file:///d:/Universidad/Centro%20de%20estudiantes/codigods/pagina%20web/Web-CODES/src/features/vida-academica/data/platformsData.ts):
- `officialSource`: Nombre del departamento, secretaría o normativa oficial de la UNLu.
- `sourceUrl`: Enlace web oficial verificable.
- `lastVerifiedDate`: Fecha ISO de comprobación.
- `applicableAudience`: Cohorte o público destinatario.
- `editorialLead`: Comisión de CODES++ responsable.
- `validationStatus`: `'Verificado oficial'` | `'En revisión'` | `'Provisorio'`.

