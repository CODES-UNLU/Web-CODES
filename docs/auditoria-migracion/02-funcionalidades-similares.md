# 02. AnÃ¡lisis de Funcionalidades Similares, Solapadas y Redundantes

Este documento presenta una investigaciÃ³n exhaustiva sobre las duplicaciones de lÃ³gica, contenido fragmentado y funcionalidades competidoras detectadas en el repositorio React (`WebCodes2026`).

---

## 1. Matriz Resumen de Solapamientos

| Grupo de Solapamiento | Funcionalidades Involucradas | Archivos Clave | DiagnÃ³stico Principal | RecomendaciÃ³n |
| :--- | :--- | :--- | :--- | :--- |
| **G1: Voluntariado y Talento** | FN-08 (`/colaborar`) vs FN-11 (`/proyectos-reales`) | `CollaborationForm.jsx` vs `RealProjects.jsx` | DuplicaciÃ³n casi idÃ©ntica de formularios de postulaciÃ³n (500+ lÃ­neas cada uno) compitiendo por reclutar estudiantes para los mismos proyectos. | **FUSIONAR en una sola secciÃ³n**: "Sumate a CODES / Proyectos". |
| **G2: Acceso a WhatsApp / Grupos** | FN-02 (Hero `/grupos`), FN-04 (`/comunidad`), FN-14 (`RaffleCommunityModal`) | `Hero.jsx`, `Groups.jsx`, `WhatsAppRegistration.jsx`, `RaffleCommunityModal.jsx` | 3 caminos divergentes: uno roto (404/under construction), uno hÃ­per-punitivo (PDF/IP blacklist) y uno transaccional (post-compra de rifa). | **ELIMINAR barreras de IP/PDF**. Unificar en directorio pÃºblico y transparente de grupos por materia y sede. |
| **G3: Agenda, Charlas y Talleres** | FN-05 (`/eventos`), FN-09 (`/charlas`), FN-10 (`/talleres`) | `Events.jsx`, `CharlasPage.jsx`, `Talleres.jsx` | FragmentaciÃ³n de actividades en 3 pestaÃ±as distintas del menÃº sin distinciÃ³n conceptual clara para el estudiante. | **FUSIONAR en una sola secciÃ³n**: "Actividades y Charlas" con archivo histÃ³rico embebido. |
| **G4: Noticias y Novedades** | FN-17 (`NewsCarousel`) vs FN-07 (`/noticias` / `Blog.jsx`) | `NewsCarousel.jsx` vs `Blog.jsx` | Dos interfaces consumiendo exactamente el mismo servicio Supabase (`newsService.getAll(true)`). El carrusel fue comentado por saturaciÃ³n visual. | **ELIMINAR NewsCarousel**; mantener feed estÃ¡tico y limpio de Novedades con Astro Content Collections. |
| **G5: GestiÃ³n Administrativa y Rifas** | FN-15 (`/admin`) vs FN-16 (`/dashboard`) | `AdminPage.jsx` vs `Dashboard.jsx` | Ambas consumen Google Apps Script / Supabase con solapamiento en verificaciÃ³n de pagos y con una grave falta de autenticaciÃ³n. | **ELIMINAR del frontend pÃºblico**. Trasladar la administraciÃ³n a herramientas internas (Google Sheets / Retool / Supabase Dashboard). |
| **G6: Recursos y Material AcadÃ©mico** | FN-06 (`/recursos`) vs FN-24 (`FAQ.jsx`) | `Resources.jsx` vs `FAQ.jsx` | `/recursos` promete recursos pero muestra herramientas genÃ©ricas externas de desarrollo de software (980 lÃ­neas de links a Vim, TinyPNG); los reglamentos reales estÃ¡n escondidos en FAQs. | **REESTRUCTURAR COMPLETAMENTE**: Descartar el listado de links genÃ©ricos y crear un verdadero Repositorio AcadÃ©mico (planes de estudio, correlatividades, apuntes). |

---

## 2. AnÃ¡lisis Detallado por Grupo

### Grupo 1: Formulario de ColaboraciÃ³n (`/colaborar`) vs Proyectos Reales (`/proyectos-reales`)

#### 1. Funcionalidades del grupo
- **FN-08:** Formulario de Voluntariado y Sumate (`src/pages/CollaborationForm.jsx` / `src/components/CollaborationForm.jsx`).
- **FN-11:** Formulario de PostulaciÃ³n a Proyectos Reales (`src/pages/RealProjects.jsx`).

#### 2. En quÃ© se parecen
- Ambos formularios tienen campos prÃ¡cticamente idÃ©nticos: Nombre completo, Email, TelÃ©fono/WhatsApp, Legajo/Carrera, Ãrea de interÃ©s (Desarrollo Frontend, Backend, UI/UX, QA, Datos), Nivel de experiencia y Disponibilidad horaria.
- Ambos envÃ­an notificaciones por email mediante el backend `api/send-email.js` (Resend) e insertan datos en tablas de Supabase (`volunteers` vs `project_applications`).
- Ambos prometen incorporar al estudiante al equipo de trabajo de CODES para trabajar en proyectos del centro de estudiantes o de la universidad.

#### 3. En quÃ© se diferencian exactamente
- **`/colaborar`** se presenta desde un punto de vista institucional general: "Sumate al centro de estudiantes, colaborÃ¡ en secretarÃ­as o iniciativas tÃ©cnicas".
- **`/proyectos-reales`** se enfoca como una "pasantÃ­a simulada o incubadora de software": presenta una grilla de proyectos especÃ­ficos (ej. "Sistema de GestiÃ³n de Rifas", "App de MenÃº de Comedor", "RediseÃ±o Web") y pide postular a uno en particular.

#### 4. InformaciÃ³n exclusiva de cada una
- `/proyectos-reales` incluye un catÃ¡logo visual de proyectos activos con badges de tecnologÃ­as (`React`, `Node`, `Figma`) y cupos estimados.
- `/colaborar` incluye preguntas mÃ¡s abiertas sobre motivaciÃ³n personal, comisiones de trabajo y aportes extraacadÃ©micos.

#### 5. Acciones permitidas
- En `/proyectos-reales` el estudiante cree estar aplicando a un rol especÃ­fico dentro de un equipo de software.
- En `/colaborar` el estudiante se postula como voluntario generalista del centro.

#### 6. Diferencias en flujos de usuario
- El usuario que entra por `/colaborar` debe completar un wizard de 3 pasos.
- El usuario que entra por `/proyectos-reales` hace scroll, mira las tarjetas de proyectos, hace clic en "Postularme" y se le abre un formulario similar al anterior.

#### 7. Facilidad de comprensiÃ³n y esfuerzo
- Un estudiante de primer aÃ±o no comprende la diferencia entre "Colaborar con CODES" y "Participar en Proyectos Reales de CODES". Genera parÃ¡lisis de decisiÃ³n y dudas sobre si debe postular a uno, al otro, o a ambos.

#### 8. EvaluaciÃ³n y RecomendaciÃ³n
- **No deben coexistir de forma separada.**
- **RecomendaciÃ³n:** **FUSIONAR**. Integrar en una Ãºnica secciÃ³n clara: `/sumate` o `/proyectos`. Debe explicarse quÃ© es CODES, quÃ© proyectos de software existen y permitir postularse a travÃ©s de un Ãºnico formulario o convocatoria abierta semestral.

---

### Grupo 2: Acceso a WhatsApp y Grupos de la Carrera

#### 1. Funcionalidades del grupo
- **FN-02:** BotÃ³n principal del Hero hacia `/grupos` (`src/components/Hero.jsx` -> `src/pages/Groups.jsx`).
- **FN-04:** Portal de ValidaciÃ³n y AsignaciÃ³n de WhatsApp (`src/pages/WhatsAppRegistration.jsx`).
- **FN-14:** Modal de Acceso a Comunidad post-Rifa (`src/components/RaffleCommunityModal.jsx`).

#### 2. En quÃ© se parecen
- El objetivo final en los tres casos es el mismo: que el estudiante se una al ecosistema de grupos de WhatsApp y canales de comunicaciÃ³n de la carrera/materias.

#### 3. En quÃ© se diferencian exactamente
- **FN-02 (`/grupos`):** El botÃ³n de mayor jerarquÃ­a visual de la pÃ¡gina de inicio ("ConocÃ© Nuestros Grupos") conduce a `Groups.jsx`, que renderiza:
  ```jsx
  <div className="alert alert-warning">
    <h3>ðŸš§ En ConstrucciÃ³n ðŸš§</h3>
    <p>Estamos trabajando para mejorar el acceso a los grupos de WhatsApp...</p>
  </div>
  ```
  Es decir, el flujo principal de bienvenida estÃ¡ roto y abandonado.
- **FN-04 (`/comunidad`):** Implementa un proceso de seguridad extremo y desproporcionado:
  - Carga `pdfjs-dist` (2 MB) en el cliente.
  - Exige subir el PDF del Certificado de Alumno Regular.
  - Verifica si el legajo estÃ¡ en el rango `[111111, 300000]`.
  - Rastrea la IP del alumno vÃ­a `https://api.ipify.org?format=json`.
  - Tras 3 intentos fallidos bloquea al estudiante en `localStorage` (`codes_whatsapp_blocked`) y emite mensajes hostiles (`"Buen intento. Te olvidaste que somos de sistemas, gracias por dejarnos tu IP"`).
- **FN-14 (`RaffleCommunityModal`):** Aparece como recompensa secundaria o upsell tras comprar un nÃºmero de rifa en `/rifa`.

#### 4. Problema de UX y accesibilidad
- Este es el caso mÃ¡s crÃ­tico de fricciÃ³n detectado en la auditorÃ­a.
- El estudiante ingresante (que todavÃ­a no tiene certificado de alumno regular porque reciÃ©n se inscribiÃ³) queda totalmente excluido o bloqueado si comete un error tipogrÃ¡fico.
- La experiencia rompe el principio de hospitalidad y contenciÃ³n que debe caracterizar a un centro de estudiantes.

#### 5. RecomendaciÃ³n Fundamentada
- **ELIMINAR inmediatamente el flujo punitivo de `WhatsAppRegistration.jsx` (FN-04).**
- **ELIMINAR el componente incompleto `Groups.jsx` (FN-02).**
- **REEMPLAZAR por:** Un directorio pÃºblico y categorizado de canales oficiales de comunicaciÃ³n (`/comunidad` o `/grupos`), con enlaces directos a:
  1. Grupo general de ingresantes de la Licenciatura.
  2. Grupos oficiales por materia/aÃ±o acadÃ©mico (con reglas de convivencia visibles).
  3. Canal informativo de difusiÃ³n (unidireccional).
  4. Discord / Foro de consultas.
  Si se requiere moderaciÃ³n para evitar spam, debe gestionarse mediante moderadores humanos o enlace a grupo de bienvenida con bot de bienvenida estÃ¡ndar, no mediante rastreo de IP y validaciÃ³n de PDF en el navegador del cliente.

---

### Grupo 3: Agenda de Eventos (`/eventos`), Ciclo de Charlas (`/charlas`) y Talleres (`/talleres`)

#### 1. Funcionalidades del grupo
- **FN-05:** Agenda General de Eventos (`src/pages/Events.jsx`).
- **FN-09:** Archivo de Charlas Grabadas (`src/pages/CharlasPage.jsx`).
- **FN-10:** Talleres y Workshops (`src/pages/Talleres.jsx`).

#### 2. En quÃ© se parecen
- Las tres pÃ¡ginas muestran actividades extracurriculares organizadas por el centro: charlas de profesionales, talleres de Git/Linux/Python, encuentros y conferencias.

#### 3. En quÃ© se diferencian
- `Events.jsx` intenta mostrar un calendario con estados ("PrÃ³ximamente", "En curso", "Finalizado") y un botÃ³n para agendar.
- `CharlasPage.jsx` es una videoteca con reproductores de YouTube embebidos de charlas ya realizadas (muy valioso, con contenido real de ciberseguridad y desarrollo).
- `Talleres.jsx` es una grilla estÃ¡tica de cursos con enlaces a formularios de Google Forms para inscribirse.

#### 4. FricciÃ³n para el usuario
- El usuario debe navegar entre tres pantallas distintas para responder una pregunta simple: *"Â¿QuÃ© actividades hay para participar y quÃ© charlas puedo ver grabadas?"*.
- En mobile, tener 3 pestaÃ±as adicionales satura el menÃº de navegaciÃ³n (`Navbar.jsx` tiene 16 opciones).

#### 5. RecomendaciÃ³n Fundamentada
- **FUSIONAR en una sola secciÃ³n**: `/actividades` (o `/eventos`).
- Estructura recomendada:
  1. **PrÃ³ximos Eventos y Talleres:** Lista cronolÃ³gica con enlace a inscripciÃ³n (formulario o streaming).
  2. **Videoteca / Charlas Grabadas:** ColecciÃ³n de charlas pasadas organizadas por temÃ¡tica, con los videos de YouTube embebidos de forma optimizada (`lite-youtube` para evitar cargar scripts pesados innecesariamente).

---

### Grupo 4: Noticias (`/noticias`) vs Carrusel de Novedades (`NewsCarousel.jsx`)

#### 1. Funcionalidades del grupo
- **FN-07:** PÃ¡gina de Novedades / Blog (`src/pages/Blog.jsx` y `src/pages/PostPage.jsx`).
- **FN-17:** Carrusel de Noticias en el Home (`src/components/NewsCarousel.jsx`).

#### 2. En quÃ© se parecen
- Ambos componentes hacen exactamente la misma peticiÃ³n a la base de datos: `newsService.getAll(true)`.
- Muestran el mismo modelo de datos: tÃ­tulo, fecha, extracto, imagen y slug.

#### 3. En quÃ© se diferencian
- `NewsCarousel.jsx` fue implementado con `react-slick` o Bootstrap Carousel con controles tÃ¡ctiles complejos que generaban problemas de renderizado y saltos de layout (CLS). Por esa razÃ³n, fue comentado manualmente en `Home.jsx` (`{/* <NewsCarousel /> */}`).
- `Blog.jsx` presenta una vista de grilla paginada con buscador por texto.

#### 4. RecomendaciÃ³n Fundamentada
- **ELIMINAR definitivamente `NewsCarousel.jsx`.**
- En la pÃ¡gina de inicio de la nueva web Astro, incluir una secciÃ³n estÃ¡tica simple: *"Ãšltimas novedades"* con las 3 noticias mÃ¡s recientes generadas durante el build mediante Astro Content Collections.
- Mantener la pÃ¡gina de archivo `/novedades` para consultar publicaciones anteriores.

---

### Grupo 5: Panel de AdministraciÃ³n (`/admin`) vs Dashboard Interno (`/dashboard`)

#### 1. Funcionalidades del grupo
- **FN-15:** Panel de Rifas y Validaciones (`src/pages/AdminPage.jsx`).
- **FN-16:** Dashboard General (`src/pages/Dashboard.jsx`).

#### 2. En quÃ© se parecen
- Ambas son vistas administrativas pensadas para miembros de la comisiÃ³n directiva del centro de estudiantes.
- Ambas listan registros de estudiantes (nÃºmeros de rifa, nombres, telÃ©fonos, comprobantes de pago, solicitudes de WhatsApp).

#### 3. En quÃ© se diferencian
- `/admin` interactÃºa directamente con el script de Google Apps Script (`VITE_APPS_SCRIPT_URL`) para cambiar estados de rifa ("Aprobado", "Rechazado") y cuenta con filtros de bÃºsqueda local.
- `/dashboard` apunta a estadÃ­sticas consolidadas con grÃ¡ficos de mÃ©tricas.

#### 4. Riesgo de Seguridad CrÃ­tico Detectado
- Ninguna de las dos rutas (`/admin` ni `/dashboard`) posee `ProtectedRoute` ni verificaciÃ³n de sesiÃ³n de Supabase Auth en `App.jsx`.
- **Cualquier usuario o visitante que escriba `/admin` en la barra de direcciones puede ver los nombres, emails, telÃ©fonos y comprobantes bancarios de los estudiantes.**

#### 5. RecomendaciÃ³n Fundamentada
- **ELIMINAR ambas pÃ¡ginas del frontend pÃºblico.**
- La web institucional del centro debe ser un sitio estÃ¡tico, accesible y seguro para los estudiantes.
- La gestiÃ³n de rifas y voluntariados debe manejarse en herramientas internas protegidas (Google Sheets, base de datos con autenticaciÃ³n robusta o panel independiente en subdominio privado).

---

### Grupo 6: "Banco de Recursos" (`/recursos`) vs Preguntas Frecuentes y TrÃ¡mites (`FAQ.jsx`)

#### 1. Funcionalidades del grupo
- **FN-06:** CatÃ¡logo de Herramientas y Recursos (`src/pages/Resources.jsx`).
- **FN-24 / FN-25:** FAQs y Base de Conocimiento (`src/components/FAQ.jsx`, `src/data/knowledgeBase.json`).

#### 2. Problema de PercepciÃ³n vs Realidad
- Un estudiante de primer aÃ±o que hace clic en **"Banco de Recursos"** espera encontrar:
  - Modelos de exÃ¡menes parciales y finales.
  - Apuntes de las materias de primer aÃ±o (IntroducciÃ³n a la ProgramaciÃ³n, MatemÃ¡tica Discreta, Ãlgebra).
  - GuÃ­as de trabajos prÃ¡cticos.
  - Software especÃ­fico requerido por las cÃ¡tedras (ej. entorno de C, simuladores lÃ³gicos).
- En cambio, `Resources.jsx` contiene **980 lÃ­neas de cÃ³digo hardcodeado** con enlaces a:
  - Docker, Kafka, Vim, TinyPNG, Adobe Illustrator, CSS Tricks, Dribbble.
  - Al hacer clic en un recurso, muchos abren una bÃºsqueda en Google (`https://www.google.com/search?q=...`).
- Mientras tanto, la informaciÃ³n crucial que el estudiante realmente necesita (cÃ³mo tramitar el boleto estudiantil, cÃ³mo justificar inasistencia, cÃ³mo pedir equivalencias, correlatividades) estÃ¡ encerrada en un acordeÃ³n al pie de pÃ¡gina en `FAQ.jsx`.

#### 3. RecomendaciÃ³n Fundamentada
- **ELIMINAR el banco de herramientas genÃ©ricas de software.** No aporta valor diferencial para la vida universitaria en la UNLu.
- **CREAR la secciÃ³n central `/guias` o `/tramites`**:
  - GuÃ­a paso a paso para el Boleto Estudiantil Universitario (SUBE).
  - TrÃ¡mite de reincorporaciÃ³n y mantenimiento de regularidad.
  - Instructivo del sistema SIU GuaranÃ­.
  - Banco de apuntes y programas oficiales por materia.