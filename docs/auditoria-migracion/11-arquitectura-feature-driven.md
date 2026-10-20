# 11. Arquitectura Feature-Driven para Astro

Este documento define la arquitectura tÃ©cnica basada en funcionalidades y dominios de negocio (**Feature-Driven Architecture**) adaptada al modelo de enrutamiento estÃ¡tico de **Astro v5**.

---

## 1. EvaluaciÃ³n CrÃ­tica de la Arquitectura Antigua (React)

En el repositorio anterior (`WebCodes2026`), el cÃ³digo estaba organizado exclusivamente por **tipo tÃ©cnico de archivo** (`src/components/`, `src/pages/`, `src/services/`, `src/data/`), lo que provocÃ³ una serie de problemas arquitectÃ³nicos severos:

```
ARQUITECTURA ANTIGUA (Por Tipo TÃ©cnico)
src/
â”œâ”€â”€ components/   <-- 30+ archivos mezclados: botones genÃ©ricos, modales de rifas,
â”‚                     carruseles rotos, formularios de 500 lÃ­neas y secciones enteras.
â”œâ”€â”€ pages/        <-- PÃ¡ginas acopladas con llamadas directas a Supabase y Apps Script.
â”œâ”€â”€ services/     <-- Servicios zombis (geminiService, googleCalendar) junto a activos.
â””â”€â”€ data/         <-- Archivos JSON y JS dispersos sin validaciÃ³n de esquema.
```

### SÃ­ntomas Detectados en la AuditorÃ­a:
1. **Componentes con responsabilidades cruzadas:** `Modal.jsx` contenÃ­a lÃ³gica condicional para mostrar el Ã©xito de una rifa o advertencias de WhatsApp.
2. **DuplicaciÃ³n masiva de lÃ³gica:** `CollaborationForm.jsx` y `RealProjects.jsx` reimplementaban de forma independiente el mismo formulario de 3 pasos, las mismas validaciones de telÃ©fono y las mismas llamadas a Resend.
3. **Imposibilidad de aislar o eliminar funciones:** Para quitar el sistema de rifas en la web vieja, era necesario editar `App.jsx`, `Navbar.jsx`, `Home.jsx`, `RafflePage.jsx`, `AdminPage.jsx`, `Dashboard.jsx` y varios modales compartidos debido a dependencias enmaraÃ±adas.
4. **PÃ©rdida de foco en el dominio:** Un desarrollador que querÃ­a actualizar los reglamentos de cursada debÃ­a buscar entre `FAQ.jsx`, `knowledgeBase.json`, `Resources.jsx` y textos embebidos en el footer.

---

## 2. Dominios Funcionales Identificados para la Nueva Web

A partir de los recorridos reales de los estudiantes, se identifican **6 dominios de negocio autÃ³nomos**:

```
+-----------------------------------------------------------------------------------+
|                        DOMINIOS FUNCIONALES DE CODES++                            |
+-----------------------------------------------------------------------------------+
| 1. INGRESANTES: Onboarding, primeros pasos, activaciÃ³n SIU GuaranÃ­, sedes.        |
| 2. TRÃMITES: Instructivos de gestiÃ³n (Boleto SUBE, regularidad, cambio de plan).  |
| 3. CALENDARIO: Cronograma oficial UNLu, timeline, categorÃ­as, exportaciÃ³n .ics.   |
| 4. COMUNIDAD: Directorio de canales de WhatsApp, avisos oficiales, convivencia.   |
| 5. ACTIVIDADES: Videoteca de charlas pasadas (YouTube) y agenda de talleres.      |
| 6. NOSOTROS: Identidad del centro, ubicaciÃ³n fÃ­sica, guardias y convocatoria.     |
+-----------------------------------------------------------------------------------+
```

---

## 3. Propuesta de Estructura de Directorios Feature-Driven en Astro

Astro utiliza un sistema de enrutamiento basado en archivos dentro de `src/pages/`. La arquitectura feature-driven respeta este requisito de la siguiente manera: **las pÃ¡ginas en `src/pages/` actÃºan exclusivamente como orquestadores de ruta y layout, delegando la presentaciÃ³n y la lÃ³gica a los mÃ³dulos dentro de `src/features/`**.

```
Web-CODES/
â”œâ”€â”€ public/
â”‚   â””â”€â”€ brand/               <-- Logos oficiales y favicons (Identidad CODES)
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ components/          <-- COMPONENTES COMPARTIDOS GLOBALES
â”‚   â”‚   â”œâ”€â”€ ui/              <-- Primitivas UI agnÃ³sticas de dominio (Botones, Cards, Badges)
â”‚   â”‚   â”‚   â”œâ”€â”€ Button.astro
â”‚   â”‚   â”‚   â”œâ”€â”€ Card.astro
â”‚   â”‚   â”‚   â”œâ”€â”€ Badge.astro
â”‚   â”‚   â”‚   â””â”€â”€ Accordion.astro
â”‚   â”‚   â””â”€â”€ layout/          <-- Estructura visual del sitio
â”‚   â”‚       â”œâ”€â”€ Header.astro
â”‚   â”‚       â”œâ”€â”€ Footer.astro
â”‚   â”‚       â”œâ”€â”€ NavMenu.astro
â”‚   â”‚       â””â”€â”€ ThemeToggle.astro
â”‚   â”‚
â”‚   â”œâ”€â”€ content/             <-- GESTIÃ“N DE CONTENIDO (Astro Content Collections)
â”‚   â”‚   â”œâ”€â”€ config.ts        <-- Esquemas de validaciÃ³n tipados con Zod
â”‚   â”‚   â”œâ”€â”€ tramites/        <-- Archivos Markdown/MDX individuales por trÃ¡mite
â”‚   â”‚   â””â”€â”€ novedades/       <-- Comunicados y artÃ­culos oficiales
â”‚   â”‚
â”‚   â”œâ”€â”€ features/            <-- MÃ“DULOS DE DOMINIO FUNCIONAL
â”‚   â”‚   â”œâ”€â”€ ingresantes/
â”‚   â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ OnboardingHero.astro
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ StepsChecklist.astro
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ SiuGuaraniGuide.astro
â”‚   â”‚   â”‚   â””â”€â”€ data/steps.json
â”‚   â”‚   â”‚
â”‚   â”‚   â”œâ”€â”€ tramites/
â”‚   â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ TramiteCard.astro
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ TramiteHeader.astro
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ CategoryFilter.astro
â”‚   â”‚   â”‚   â””â”€â”€ types.ts
â”‚   â”‚   â”‚
â”‚   â”‚   â”œâ”€â”€ calendario/
â”‚   â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ CalendarTimeline.astro
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ EventCard.astro
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ IcsDownloadButton.astro
â”‚   â”‚   â”‚   â”œâ”€â”€ data/calendar2026.json
â”‚   â”‚   â”‚   â”œâ”€â”€ types.ts
â”‚   â”‚   â”‚   â””â”€â”€ utils/icsGenerator.ts
â”‚   â”‚   â”‚
â”‚   â”‚   â”œâ”€â”€ comunidad/
â”‚   â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ WhatsAppDirectory.astro
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ GroupCard.astro
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ CodeOfConduct.astro
â”‚   â”‚   â”‚   â””â”€â”€ data/whatsappGroups.json
â”‚   â”‚   â”‚
â”‚   â”‚   â”œâ”€â”€ actividades/
â”‚   â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ VideoLectureCard.astro
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ WorkshopsList.astro
â”‚   â”‚   â”‚   â””â”€â”€ data/lectures.json
â”‚   â”‚   â”‚
â”‚   â”‚   â””â”€â”€ nosotros/
â”‚   â”‚       â”œâ”€â”€ components/
â”‚   â”‚       â”‚   â”œâ”€â”€ SedeOfficeCard.astro
â”‚   â”‚       â”‚   â”œâ”€â”€ AuthoritiesList.astro
â”‚   â”‚       â”‚   â””â”€â”€ JoinTeamForm.astro
â”‚   â”‚       â””â”€â”€ types.ts
â”‚   â”‚
â”‚   â”œâ”€â”€ layouts/             <-- LAYOUTS BASE REUTILIZABLES
â”‚   â”‚   â”œâ”€â”€ BaseLayout.astro <-- Metadatos, fuentes, SEO y favicon
â”‚   â”‚   â””â”€â”€ PageLayout.astro <-- Header + Contenido principal + Footer
â”‚   â”‚
â”‚   â”œâ”€â”€ pages/               <-- ENRUTADOR ASTRO (Puntos de entrada limpios)
â”‚   â”‚   â”œâ”€â”€ index.astro
â”‚   â”‚   â”œâ”€â”€ ingresantes.astro
â”‚   â”‚   â”œâ”€â”€ tramites/
â”‚   â”‚   â”‚   â”œâ”€â”€ index.astro
â”‚   â”‚   â”‚   â””â”€â”€ [slug].astro
â”‚   â”‚   â”œâ”€â”€ calendario.astro
â”‚   â”‚   â”œâ”€â”€ comunidad.astro
â”‚   â”‚   â”œâ”€â”€ actividades.astro
â”‚   â”‚   â””â”€â”€ nosotros.astro
â”‚   â”‚
â”‚   â””â”€â”€ styles/
â”‚       â””â”€â”€ global.css       <-- ConfiguraciÃ³n Tailwind CSS v4 y tokens de diseÃ±o
```

---

## 4. Reglas Estrictas de Dependencias e Importaciones

Para evitar que la nueva arquitectura vuelva a degradarse en cÃ³digo espagueti, se establecen cuatro reglas fundamentales de importaciÃ³n:

```
[ Capa de PÃ¡ginas (src/pages/) ]
        â”‚  puede importar de
        â–¼
[ Capa de Features (src/features/*) ]
        â”‚  puede importar de
        â–¼
[ Capa ComÃºn (src/components/ui/ + src/layouts/ + src/content/) ]
```

1. **Aislamiento entre Features (Cross-Feature Isolation):**
   - Una funcionalidad dentro de `src/features/tramites/` **NUNCA puede importar componentes ni cÃ³digo de `src/features/calendario/`**.
   - Si dos features necesitan compartir un componente visual, este se promueve a `src/components/ui/`.
   - Si necesitan compartir un dato o funciÃ³n, se ubica en `src/utils/shared/` o en una colecciÃ³n global en `src/content/`.
2. **PÃ¡ginas Delgadas (Thin Pages):**
   - Los archivos `.astro` en `src/pages/` deben contener un mÃ¡ximo de 30 a 50 lÃ­neas. Su Ãºnica funciÃ³n es:
     1. Importar el `BaseLayout` o `PageLayout`.
     2. Consultar datos si corresponde (ej. `getCollection('tramites')`).
     3. Renderizar los componentes de la feature correspondiente.
3. **ProhibiciÃ³n de JavaScript en Componentes UI BÃ¡sicos:**
   - Todo componente en `src/components/ui/` debe ser puramente HTML y Tailwind CSS. No se permite empaquetar scripts innecesarios dentro de primitivas visuales.

---

## 5. Ejemplos de MigraciÃ³n de Funcionalidades Representativas

### Ejemplo A: MigraciÃ³n del Calendario AcadÃ©mico (`features/calendario`)

**Antes (React):**
- Archivo monolÃ­tico de 380 lÃ­neas `src/pages/Calendar.jsx` que incluÃ­a estados de filtro, modales en pantalla completa, lÃ³gica de fechas, dependencias fallidas de Google Calendar y CSS Grid rÃ­gido.

**Ahora (Astro Feature-Driven):**
1. **Datos:** `src/features/calendario/data/calendar2026.json` (fechas oficiales limpias).
2. **Tipos:** `src/features/calendario/types.ts` con interface `CalendarEvent`.
3. **Componente de PresentaciÃ³n:** `src/features/calendario/components/CalendarTimeline.astro` (renderiza una lista vertical accesible y responsiva).
4. **PÃ¡gina de Entrada (`src/pages/calendario.astro`):**
   ```astro
   ---
   import PageLayout from '../layouts/PageLayout.astro';
   import CalendarTimeline from '../features/calendario/components/CalendarTimeline.astro';
   import eventsData from '../features/calendario/data/calendar2026.json';
   ---
   <PageLayout title="Calendario AcadÃ©mico 2026 | CODES++ UNLu">
     <div class="max-w-4xl mx-auto px-4 py-8">
       <h1 class="text-3xl font-bold mb-2">Calendario AcadÃ©mico UNLu</h1>
       <p class="text-gray-600 dark:text-gray-400 mb-8">
         Fechas oficiales de inscripciones, llamados a exÃ¡menes finales y recesos.
       </p>
       <CalendarTimeline events={eventsData} />
     </div>
   </PageLayout>
   ```

---

### Ejemplo B: MigraciÃ³n de TrÃ¡mites y Reglamentos (`features/tramites`)

**Antes (React):**
- Textos encerrados en `knowledgeBase.json` y desplegados solo en el footer del Home en `FAQ.jsx`, sin URLs individuales para compartir por WhatsApp.

**Ahora (Astro Feature-Driven):**
1. **Contenido estructurado:** Archivos `.md` individuales dentro de `src/content/tramites/` (ej. `boleto-estudiantil.md`, `regularidad-y-readmision.md`).
2. **Componente de Tarjeta:** `src/features/tramites/components/TramiteCard.astro`.
3. **PÃ¡gina DinÃ¡mica (`src/pages/tramites/[slug].astro`):** Genera en build time una URL individual rÃ¡pida y compartible para cada gestiÃ³n universitaria.

---

## 6. AnÃ¡lisis de Ventajas y Desventajas (Trade-offs)

| DecisiÃ³n ArquitectÃ³nica | Ventajas Principales | Desventajas / DesafÃ­os | MitigaciÃ³n |
| :--- | :--- | :--- | :--- |
| **SeparaciÃ³n por Features (`src/features/`)** | CÃ³digo modular, fÃ¡cil de auditar, desacoplado y mantenible por distintos estudiantes a lo largo del tiempo. | Requiere disciplina para no crear dependencias cruzadas entre features. | Documentar las reglas de importaciÃ³n en el README y verificar en revisiones de PR. |
| **PÃ¡ginas Delgadas (`src/pages/`)** | MÃ¡xima claridad en las rutas del sitio. Cualquier miembro nuevo del centro encuentra la URL en 5 segundos. | Un nivel adicional de carpetas frente a tener todo dentro de `pages/`. | La estructura es muy limpia y estÃ¡ndar en proyectos de mediana escala. |
| **Astro Content Collections** | Tipado estricto con validaciÃ³n Zod en build time; imposibilidad de subir trÃ¡mites con datos incompletos. | Quien edite contenido debe seguir la estructura de frontmatter definida. | Se proporcionan plantillas claras de ejemplo para redactar nuevos trÃ¡mites. |
| **Cero React en MVP** | Cero costo de hidrataciÃ³n, bundle de JS inferior a 5 KB y velocidad extrema en redes mÃ³viles. | Componentes con micro-interacciones muy complejas requieren scripts nativos de Vanilla JS. | El sitio es un portal informativo; HTML5 semÃ¡ntico (`<details>`, `<dialog>`) cubre el 98% de los casos. |