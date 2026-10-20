# 14. Propuesta Consolidada de ReconstrucciÃ³n de la Web CODES++

Este documento consolida la visiÃ³n final del producto, la arquitectura de informaciÃ³n, la estructura tÃ©cnica feature-driven, el sistema de diseÃ±o visual y el plan de trabajo. **Diferencia explÃ­citamente entre definiciones validadas tÃ©cnicamente y propuestas provisionales sujetas a aprobaciÃ³n de la comisiÃ³n directiva.**

---

## 1. VisiÃ³n y Principios Rectores del Producto

### 1.1. PropÃ³sito
Transformar la presencia digital del Centro Organizado de Estudiantes de Sistemas (CODES++) en una **herramienta de servicio estudiantil rÃ¡pida, accesible y confiable**, optimizada para telÃ©fonos mÃ³viles y diseÃ±ada para resolver dudas concretas de la vida universitaria en la UNLu, con especial prioridad en el acompaÃ±amiento a ingresantes.

### 1.2. Principios de DiseÃ±o y Desarrollo
1. **Resolver Problemas Reales:** Priorizar trÃ¡mites, calendarios y canales de comunicaciÃ³n por encima de funciones accesorias o efectos visuales innecesarios.
2. **Hospitalidad y Cero FricciÃ³n:** Eliminar cualquier barrera punitiva de acceso; un estudiante debe poder incorporarse a la comunidad sin burocracia digital.
3. **EstÃ¡tico por Defecto (Zero-JS Architecture):** El 90% de las pÃ¡ginas deben ser HTML y CSS puros compilados en build time, garantizando carga instantÃ¡nea (< 1 segundo) en redes mÃ³viles universitarias.
4. **Fidelidad de Marca Accesible:** Adoptar rigurosamente la paleta oficial Teal OKLCH de CODES++, garantizando contrastes WCAG 2.1 AA/AAA tanto en modo claro como en modo oscuro.

---

## 2. Estado de ValidaciÃ³n: Validado vs Provisional

Para garantizar total transparencia ante los responsables del centro, la propuesta separa lo comprobado de lo que requiere confirmaciÃ³n:

```
+-----------------------------------------------------------------------------------+
|                     TABLA DE ESTADO DE DEFINICIONES DEL PROYECTO                  |
+-----------------------------------------------------------------------------------+
| DEFINICIÃ“N TÃ‰CNICA / FUNCIONAL                    | ESTADO       | RESPONSABLE    |
+---------------------------------------------------+--------------+----------------+
| Inventario de 40 funcionalidades existentes (FN)  | [VALIDADO]   | Equipo Auditor |
| Vulnerabilidad en ruta /admin y URL Google Apps   | [VALIDADO]   | Equipo Auditor |
| Rutas protegidas en /dashboard con AuthContext    | [VALIDADO]   | Equipo Auditor |
| Despliegue en GitHub Pages (SSG compatible)       | [VALIDADO]   | Equipo Auditor |
| Paleta oficial Teal OKLCH y logos vectoriales     | [VALIDADO]   | Identidad-CODES|
| Reemplazo de PDF.js por directorio abierto        | [PROVISIONAL]| ComisiÃ³n CODES |
| Descarte de herramientas externas en Recursos     | [PROVISIONAL]| ComisiÃ³n CODES |
| ExternalizaciÃ³n del sistema de rifas              | [PROVISIONAL]| ComisiÃ³n CODES |
| FusiÃ³n de Colaborar y Proyectos Reales            | [PROVISIONAL]| ComisiÃ³n CODES |
| Lista de fechas oficiales del Calendario 2026     | [PENDIENTE]  | SecretarÃ­a UNLu|
| Casillas y trÃ¡mites acadÃ©micos (tramitesunlu)     | [PENDIENTE]  | DirecciÃ³n Alum.|
+-----------------------------------------------------------------------------------+
```

---

## 3. Arquitectura de InformaciÃ³n y Sitemap Definitivo

Se propone una reducciÃ³n de los 16 enlaces desordenados del menÃº anterior a un esquema claro de **5 secciones principales** orientadas a tareas:

```
/ (PÃ¡gina de Inicio - Tablero de orientaciÃ³n rÃ¡pida para el estudiante)
â”‚
â”œâ”€â”€ /ingresantes/ (Portal de Bienvenida)
â”‚   â”œâ”€â”€ ActivaciÃ³n de cuenta SIU GuaranÃ­ (paso a paso con capturas)
â”‚   â”œâ”€â”€ Materias de 1Â° aÃ±o y rÃ©gimen de cursada
â”‚   â”œâ”€â”€ Enlace directo al Grupo de WhatsApp de Ingresantes
â”‚   â””â”€â”€ UbicaciÃ³n de aulas y referencias de sedes (LujÃ¡n, San Miguel, Chivilcoy)
â”‚
â”œâ”€â”€ /tramites/ (GuÃ­as AcadÃ©micas y Gestiones)
â”‚   â”œâ”€â”€ /tramites/boleto-estudiantil/ (SUBE universitaria provincial)
â”‚   â”œâ”€â”€ /tramites/regularidad-y-readmision/ (Requisitos y modelo de nota)
â”‚   â”œâ”€â”€ /tramites/cambio-de-plan/ (Instructivo plan nuevo Licenciatura)
â”‚   â””â”€â”€ /tramites/examenes-y-cursadas/ (CondiciÃ³n regular, libre y finales)
â”‚
â”œâ”€â”€ /calendario/ (Calendario AcadÃ©mico Oficial UNLu)
â”‚   â”œâ”€â”€ Timeline vertical responsivo agrupado por meses
â”‚   â”œâ”€â”€ Filtros por categorÃ­a: Inscripciones, Finales, Recesos y Feriados
â”‚   â””â”€â”€ BotÃ³n "AÃ±adir a Google Calendar / Descargar .ics"
â”‚
â”œâ”€â”€ /comunidad/ (Canales Oficiales y Grupos de Estudio)
â”‚   â”œâ”€â”€ Directorio de grupos de WhatsApp por materia y aÃ±o
â”‚   â”œâ”€â”€ Canal de avisos y novedades urgentes de CODES
â”‚   â”œâ”€â”€ Servidor de Discord de la carrera
â”‚   â””â”€â”€ CÃ³digo de convivencia estudiantil
â”‚
â””â”€â”€ /nosotros/ (El Centro de Estudiantes)
    â”œâ”€â”€ QuÃ© es CODES++, autoridades y secretarÃ­as
    â”œâ”€â”€ Mesita fÃ­sica: ubicaciÃ³n en pabellones y horarios de atenciÃ³n presencial
    â”œâ”€â”€ Convocatoria unificada "Sumate a CODES" (voluntariado y proyectos)
    â””â”€â”€ Videoteca histÃ³rica de charlas grabadas en YouTube (Fase 2)
```

---

## 4. Arquitectura TÃ©cnica Feature-Driven (Astro v5 + Tailwind CSS v4)

La estructura del nuevo repositorio `Web-CODES` separa estrictamente las responsabilidades para evitar el cÃ³digo espagueti del proyecto anterior:

```
src/
â”œâ”€â”€ components/          <-- Componentes compartidos globales
â”‚   â”œâ”€â”€ ui/              <-- Primitivas UI agnÃ³sticas (Button, Card, Badge, Accordion)
â”‚   â””â”€â”€ layout/          <-- Header responsivo (5 links), Footer, ThemeToggle
â”œâ”€â”€ content/             <-- Contenido estructurado tipado (Astro Content Collections)
â”‚   â”œâ”€â”€ config.ts        <-- Esquemas Zod obligatorios
â”‚   â”œâ”€â”€ tramites/        <-- Archivos Markdown individuales por trÃ¡mite
â”‚   â””â”€â”€ novedades/       <-- Comunicados oficiales
â”œâ”€â”€ features/            <-- MÃ³dulos de dominio aislados
â”‚   â”œâ”€â”€ ingresantes/     <-- OnboardingHero.astro, SiuGuaraniGuide.astro
â”‚   â”œâ”€â”€ calendario/      <-- CalendarTimeline.astro, EventCard.astro, calendar2026.json
â”‚   â”œâ”€â”€ comunidad/       <-- WhatsAppDirectory.astro, GroupCard.astro
â”‚   â””â”€â”€ nosotros/        <-- OfficeLocationCard.astro, JoinTeamForm.astro
â”œâ”€â”€ layouts/             <-- BaseLayout.astro (SEO, Favicon reactivo, fuentes)
â””â”€â”€ pages/               <-- PÃ¡ginas delgadas que conectan rutas con features
```

### Reglas TÃ©cnicas Inmutables:
- **Cero Dependencias de Servidor:** El sitio se compila 100% como archivos estÃ¡ticos HTML/CSS compatibles con GitHub Pages.
- **Sin React en el MVP:** Todas las interacciones iniciales se resuelven con HTML5 nativo y scripts de Vanilla JS menores a 3 KB.
- **Aislamiento entre Features:** Una feature nunca importa cÃ³digo de otra feature directamente.

---

## 5. Sistema de DiseÃ±o e Identidad Visual

Basado en la guÃ­a oficial de [Identidad-CODES](https://codes-unlu.github.io/Identidad-CODES/):
- **Escala de Color:** Familia cromÃ¡tica Teal OKLCH (`h â‰ˆ 197.6Â°`) con escalones 50 a 950.
- **Contraste WCAG 2.1 AA/AAA Garantizado:**
  - Modo Claro: Fondo `#ffffff`, texto principal `#1a1a1a`, interactivo Teal 700 (`#1d6d6f`, ratio `4.9:1`).
  - Modo Oscuro: Fondo `#0f0f0f`, texto principal `#e0e0e0`, interactivo Teal 300 (`#5dd5d8`, ratio `9.6:1`).
- **Desacoplamiento SemÃ¡ntico:** Ã‰xito (verde), Advertencia (Ã¡mbar), Error (rojo) e InformaciÃ³n (azul UNLu) independientes de la marca.
- **Activos Oficiales Incorporados Localmente:**
  - `logo.svg` reactivo como favicon adaptable al modo del navegador.
  - `logo-claro.svg` y `logo-oscuro.svg` para Header segÃºn el tema activo.

---

## 6. InformaciÃ³n AcadÃ©mica que Requiere ValidaciÃ³n Previa

Antes de publicar textos con carÃ¡cter formal, la comisiÃ³n de CODES debe contrastar con las fuentes oficiales de la UNLu:

1. **RÃ©gimen de Regularidad:** Confirmar si el requisito de "aprobar al menos 2 asignaturas por aÃ±o lectivo" tiene excepciones vigentes para ingresantes o planes en transiciÃ³n.
2. **Canales de TrÃ¡mites:** Validar si casillas de correo como `tramitesunlu@unlu.edu.ar` siguen activas o si fueron reemplazadas por mÃ³dulos del SIU GuaranÃ­ 3.
3. **Mantenimiento de Correlatividades:** Verificar las resoluciones vigentes del Consejo Departamental de Ciencias BÃ¡sicas / TecnologÃ­a para la Licenciatura en Sistemas.
4. **Boleto Estudiantil Universitario:** Comprobar fechas de reactivaciÃ³n y requisitos de materias aprobadas exigidos por el Ministerio de Transporte de la Provincia de Buenos Aires para el ciclo lectivo actual.

---

## 7. Plan de AcciÃ³n y PrÃ³ximos Pasos

```
PASO 1 (Inmediato):
RevisiÃ³n y aprobaciÃ³n de este documento y de 13-decisiones-pendientes.md
por parte de la comisiÃ³n directiva del Centro de Estudiantes.
       â”‚
       â–¼
PASO 2 (ValidaciÃ³n de Datos):
ConfirmaciÃ³n de enlaces de WhatsApp vigentes y horarios de mesita fÃ­sica.
       â”‚
       â–¼
PASO 3 (ImplementaciÃ³n Fase 1 - MVP):
ConstrucciÃ³n de la base Astro, sistema de diseÃ±o y las 5 pÃ¡ginas esenciales.
       â”‚
       â–¼
PASO 4 (Despliegue y SustituciÃ³n):
PublicaciÃ³n en GitHub Pages y reemplazo definitivo del repositorio antiguo.
```

*Recordatorio de Seguridad:* Este proceso se ha completado sin alterar el cÃ³digo fuente del repositorio antiguo ni tomar decisiones tÃ©cnicas irreversibles sin consentimiento.