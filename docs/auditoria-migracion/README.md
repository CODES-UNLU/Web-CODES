# AuditorÃ­a Funcional, UX/UI, Identidad Visual y PlanificaciÃ³n de MigraciÃ³n de React a Astro

**Proyecto:** Centro de Estudiantes CODES++ (Licenciatura en Sistemas de InformaciÃ³n - Universidad Nacional de LujÃ¡n, UNLu)  
**Repositorio Antiguo:** `WebCodes2026` (React 19, Vite, Bootstrap 5, Supabase, Google Apps Script)  
**Repositorio Nuevo:** `Web-CODES` (Astro v5, Tailwind CSS v4, GitHub Pages)  
**Fecha:** Octubre 2026  
**Estado:** Auditoría, Revisión Crítica y Propuesta Consolidada Completadas (Documentos Históricos)

> [!WARNING]
> **Adenda de Corrección Académica (Octubre 2026):**
> Varios documentos históricos de esta auditoría (01, 05, 06, 14) asumieron erróneamente que la UNLu utiliza genéricamente «SIU Guaraní» para todos los estudiantes de Sistemas. Esta suposición fue **formalmente superada y rectificada** en la implementación final:
> 1. **SAWEB:** Acceso vigente para consultas, trámites, cursadas y exámenes para estudiantes de grado/pregrado de **cohortes anteriores a 2027**.
> 2. **Nuevo Sistema de Gestión de Estudiantes (`g3w3.unlu.edu.ar`):** Acceso oficial para estudiantes a partir de la **cohorte 2027**.
> 3. **PlatDig (E-ducativa) y Educativa Mobile:** Plataforma exclusiva de aulas virtuales y recursos de cursada (no para inscripciones a materias o exámenes).
>
> Para las especificaciones y normativas vigentes, consultar [`docs/implementacion/README.md`](../implementacion/README.md#8-reglas-de-verificación-académica-y-plataformas-oficiales-de-la-unlu).

---

## 1. Resumen Ejecutivo

La web actual del centro de estudiantes fue desarrollada en gran medida mediante generaciÃ³n automÃ¡tica de cÃ³digo con inteligencia artificial, lo que resultÃ³ en un sitio visualmente recargado pero funcionalmente desarticulado. Presenta graves barreras de entrada para los estudiantes, duplicaciÃ³n masiva de formularios, secciones rotas o abandonadas, e incluso riesgos de seguridad por rutas administrativas expuestas al pÃºblico (`/admin`).

El presente trabajo no propone una traducciÃ³n automÃ¡tica de componentes React a Astro, sino una **reconstrucciÃ³n con criterio humano y foco centrado en las necesidades reales de los estudiantes**, en especial los ingresantes de primer aÃ±o.

La nueva web en Astro serÃ¡ **estÃ¡tica por defecto**, reduciendo el peso de carga inicial de mÃ¡s de 4 MB a menos de 150 KB, eliminando llamadas innecesarias a APIs en tiempo de ejecuciÃ³n y garantizando una experiencia accesible, rÃ¡pida y confiable desde cualquier telÃ©fono mÃ³vil en el campus universitario.

---

## 2. Ãndice Completo de DocumentaciÃ³n (14 Entregables)

Toda la documentaciÃ³n tÃ©cnica y analÃ­tica se organiza en **14 documentos estructurados**:

### Bloque A: AuditorÃ­a Exhaustiva del Repositorio Antiguo
1. **[`01-inventario-funcional.md`](./01-inventario-funcional.md):** CatÃ¡logo exhaustivo de las 40 funcionalidades identificadas en el cÃ³digo fuente (`FN-01` a `FN-40`), con rutas, componentes, dependencias, estado y valor.
2. **[`02-funcionalidades-similares.md`](./02-funcionalidades-similares.md):** AnÃ¡lisis de 6 grupos de solapamiento (Voluntariado vs Proyectos, Flujos rotos de WhatsApp, Eventos vs Charlas vs Talleres, Noticias vs Carrusel, Admin vs Dashboard, Recursos vs FAQs).
3. **[`03-evaluacion-y-depuracion.md`](./03-evaluacion-y-depuracion.md):** Matriz de depuraciÃ³n funcional: quÃ© mantener, mejorar, fusionar, simplificar o proponer eliminar.
4. **[`04-auditoria-ux-ui-responsive.md`](./04-auditoria-ux-ui-responsive.md):** AuditorÃ­a mobile-first y a11y: menÃº saturado (16 enlaces), colapso de la grilla del calendario en celulares, contraste insuficiente (WCAG AA) y abuso de efectos visuales de IA.
5. **[`05-recorridos-de-estudiantes.md`](./05-recorridos-de-estudiantes.md):** AuditorÃ­a de los 9 recorridos reales mÃ¡s frecuentes (ingresantes perdidos, inscripciÃ³n a materias, pÃ©rdida de regularidad, boleto SUBE, guardia presencial).

### Bloque B: Propuesta de Producto y Arquitectura TÃ©cnica
6. **[`06-arquitectura-de-informacion.md`](./06-arquitectura-de-informacion.md):** Propuesta de nuevo sitemap orientado a tareas del alumno, reducciÃ³n del menÃº a 5 secciones claras y diseÃ±o conceptual del Home como tablero orientador.
7. **[`07-estrategia-astro.md`](./07-estrategia-astro.md):** Modelo tÃ©cnico en Astro: arquitectura estÃ¡tica por defecto (Zero-JS), esquemas con Astro Content Collections (Zod) y despliegue a GitHub Pages.
8. **[`08-roadmap-migracion.md`](./08-roadmap-migracion.md):** Plan de trabajo incremental dividido en Fase 1 (MVP Esencial), Fase 2 (ConsolidaciÃ³n) y Fase 3 (ValidaciÃ³n y Futuro).
9. **[`09-dudas-y-validaciones.md`](./09-dudas-y-validaciones.md):** Cuestionario inicial de definiciones estratÃ©gicas para la comisiÃ³n directiva del centro.

### Bloque C: Identidad Visual Oficial y Arquitectura Feature-Driven
10. **[`10-identidad-y-design-system.md`](./10-identidad-y-design-system.md):** EspecificaciÃ³n de marca basada en la [guÃ­a oficial de identidad](https://codes-unlu.github.io/Identidad-CODES/): escala Teal OKLCH (50-950), variantes vectoriales de logo, desacoplamiento de colores semÃ¡nticos, contrastes WCAG 2.1 AA/AAA y componentes base.
11. **[`11-arquitectura-feature-driven.md`](./11-arquitectura-feature-driven.md):** DiseÃ±o de arquitectura modular por dominios funcionales en Astro (`src/features/`), reglas estrictas de importaciÃ³n sin acoplamiento cruzado y pÃ¡ginas delgadas en `src/pages/`.

### Bloque D: RevisiÃ³n CrÃ­tica, Decisiones Pendientes y Propuesta Consolidada
12. **[`12-revision-critica.md`](./12-revision-critica.md):** ValidaciÃ³n rigurosa de afirmaciones tÃ©cnicas frente al cÃ³digo fuente, anÃ¡lisis de la brecha en `/admin` vs `/dashboard`, verificaciÃ³n de Supabase RLS y taxonomÃ­a formal de evidencias ([HC], [CE], [IT], [UX], [HE], [DP]).
13. **[`13-decisiones-pendientes.md`](./13-decisiones-pendientes.md):** Matriz de las 8 decisiones de producto y arquitectura que requieren aprobaciÃ³n formal de la comisiÃ³n directiva, con alternativas, ventajas, desventajas y recomendaciÃ³n fundamentada.
14. **[`14-propuesta-consolidada.md`](./14-propuesta-consolidada.md):** Documento maestro de sÃ­ntesis con la visiÃ³n consolidada del producto, sitemap definitivo, checklist de validaciÃ³n acadÃ©mica previa y hoja de ruta para la ejecuciÃ³n.

---

## 3. Estado de EjecuciÃ³n y Reglas de Trabajo Respetadas

- âœ… **No se modificÃ³ ninguna lÃ­nea de cÃ³digo del repositorio antiguo (`WebCodes2026`).**
- âœ… **No se iniciÃ³ cÃ³digo de componentes ni implementaciÃ³n en el nuevo repositorio (`Web-CODES`).**
- âœ… **No se adoptÃ³ ninguna decisiÃ³n tÃ©cnica o de contenido irreversible sin el consentimiento explÃ­cito de los responsables del centro.**
- âœ… **Toda propuesta de eliminaciÃ³n o fusiÃ³n estÃ¡ catalogada como provisional sujeta a aprobaciÃ³n humana.**