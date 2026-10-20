# Entregable A: Inventario Funcional Completo

## 1. Resumen Ejecutivo del Inventario

Tras la inspecciÃ³n exhaustiva del cÃ³digo fuente del repositorio React (`WebCodes2026`), se identificaron un total de **34 funcionalidades y mÃ³dulos tÃ©cnicos**, distribuidos entre la vista principal (One-page), pÃ¡ginas de enrutamiento secundarias, formularios de postulaciÃ³n, servicios externos integrados, herramientas administrativas y mÃ³dulos huÃ©rfanos/en desuso.

### Tabla de Inventario de Funcionalidades

| ID | Nombre Funcional | UbicaciÃ³n / Ruta | Estado Real | Origen de Datos | Valor Ingresante |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **FUNC-01** | Portada Hero con Parallax y Acciones | `/` (`#hero`) | Funcional con sobrecarga | EstÃ¡tico | Medio |
| **FUNC-02** | Popup Modal de Comunidad LSI | `/` (`CommunityModal.jsx`) | Funcional (intrusivo) | LocalStorage / EstÃ¡tico | Alto |
| **FUNC-03** | SecciÃ³n Institucional "Â¿QuiÃ©nes Somos?" | `/` (`#nosotros`) | Funcional | EstÃ¡tico | Bajo |
| **FUNC-04** | NÃ³mina de Integrantes y ComisiÃ³n Directiva | `/` (`#integrantes`) | Funcional | EstÃ¡tico | Bajo |
| **FUNC-05** | Cartelera de PrÃ³ximas Actividades | `/` (`#eventos`) | Funcional (depende DB) | Supabase (`activities`) | Medio |
| **FUNC-06** | CatÃ¡logo de Software ("Banco de Recursos") | `/` (`#extra`) | Funcional (descontextualizado) | EstÃ¡tico (67 KB hardcoded) | Nulo / Negativo |
| **FUNC-07** | Blog y Noticias con Visor Modal | `/` (`#blog`) | Funcional | Supabase (`news`) | Medio |
| **FUNC-08** | Carrusel de Novedades Superior | `/` (`NewsCarousel.jsx`) | Inactivo (Comentado en App) | Supabase (`news`) | Medio |
| **FUNC-09** | Preguntas Frecuentes AcadÃ©micas (FAQ) | `/` (`#faq`) | Funcional (incompleto) | EstÃ¡tico (5 preguntas) | Muy Alto |
| **FUNC-10** | MenciÃ³n de Colaboradores de Redes | `/` (`#colaboradores`) | Funcional | EstÃ¡tico | Bajo |
| **FUNC-11** | Formulario de Contacto General | `/` (`#contacto`) | Funcional | Formspree API | Medio |
| **FUNC-12** | Directorio de Redes Sociales Institucionales | `/` (`Contact.jsx`, `Footer.jsx`) | Funcional | EstÃ¡tico | Alto |
| **FUNC-13** | MenÃº Lateral de NavegaciÃ³n (Sidebar) | Global (`Sidebar.jsx`) | Funcional (UX caÃ³tica) | EstÃ¡tico / Router | Alto |
| **FUNC-14** | BotÃ³n Flotante y Reset de Scroll | Global (`BackToTop`, `ScrollToTop`) | Funcional | Window scroll | Medio |
| **FUNC-15** | Barra Superior de Progreso de Lectura | Global (`ScrollIndicator.jsx`) | Funcional | Window scroll | Bajo |
| **FUNC-16** | Parche de Eventos Touch en Mobile | Global (`MobileFormEnhancer.jsx`) | Parcial / CÃ³digo FrÃ¡gil | DOM listeners | Nulo |
| **FUNC-17** | Grupos de Estudio | `/grupos` (`Groups.jsx`) | **En ConstrucciÃ³n (Roto)** | EstÃ¡tico | Alto (frustrado) |
| **FUNC-18** | AdmisiÃ³n a WhatsApp con ValidaciÃ³n de PDF | `/comunidad` (`WhatsAppRegistration.jsx`) | Funcional / LÃ³gica agresiva | Supabase + PDF.js + IPify | Muy Alto |
| **FUNC-19** | Calendario AcadÃ©mico Interactivo 2026 | `/calendario` (`CalendarPage.jsx`) | Funcional (no responsive) | EstÃ¡tico (`calendarEvents.js`) | Muy Alto |
| **FUNC-20** | Repositorio de Charlas Grabadas y PrÃ³ximas | `/charlas` (`CharlasPage.jsx`) | Funcional (hÃ­brido) | Supabase + Hardcoded YouTube | Medio |
| **FUNC-21** | InscripciÃ³n a Taller EspecÃ­fico (Git/GitHub) | `/taller` (`WorkshopRegistration.jsx`) | Funcional (hardcoded) | Supabase (`workshop_registrations`) | Medio |
| **FUNC-22** | Encuestas Estudiantiles Incrustadas | `/encuestas` (`EncuestasPage.jsx`) | Funcional (UX mÃ³vil precaria) | Google Forms iframes | Alto |
| **FUNC-23** | PostulaciÃ³n a Proyectos Colaborativos | `/colaborar` (`ColaborarPage.jsx`) | Funcional | Supabase + Resend API | Bajo |
| **FUNC-24** | PostulaciÃ³n a Proyectos Reales para Empresas | `/proyectos-reales` (`ProyectosRealesPage.jsx`)| Funcional | Supabase + Resend API | Bajo |
| **FUNC-25** | GalerÃ­a FotogrÃ¡fica de CACIC 2025 | `/cacic` (`Cacic.jsx`) | Funcional (fuera de foco) | EstÃ¡tico (27 fotos JPG pesadas)| Nulo |
| **FUNC-26** | Expo UNLu | `/expo-unlu` (`ExpoUnlu.jsx`) | **Incompleto / Abandonado** | EstÃ¡tico | Nulo |
| **FUNC-27** | Balance de Transparencia Financiera | `/transparencia` (`Transparencia.jsx`) | Funcional (datos simulados) | EstÃ¡tico simulado | Nulo / Dudoso |
| **FUNC-28** | Panel de Control de Rifa / Sorteo | `/admin` (`AdminPage.jsx`) | Funcional (vulnerable/sin auth)| Google Apps Script | Nulo |
| **FUNC-29** | AutenticaciÃ³n de Administradores | `/login` (`Login.jsx`, `AuthContext`) | Funcional | Supabase Auth | Administrativo |
| **FUNC-30** | Dashboard Administrativo Integral | `/dashboard` (`Dashboard.jsx`) | Funcional con mocks | Supabase DB | Administrativo |
| **FUNC-31** | GestiÃ³n de Solicitudes de WhatsApp | `/dashboard` y `/admin` | Funcional | Supabase DB & Storage | Administrativo |
| **FUNC-32** | Visualizador de Discord en Vivo (Mock) | `/dashboard` (`DiscordLive.jsx`) | Simulado / Incompleto | Mock hardcoded | Nulo |
| **FUNC-33** | Servicio de Chatbot y Base de Conocimiento IA | `src/services/geminiService.js` | **HuÃ©rfano / No utilizado** | `knowledgeBase.json` | Potencial Alto |
| **FUNC-34** | SincronizaciÃ³n Google Calendar y Pagos MP | `googleCalendar.js`, `mercadoPagoService`| **CÃ³digo Muerto** | N/A | Nulo |

---

## 2. Fichas Detalladas por Funcionalidad

### FUNC-01: Portada Hero con Parallax y Acciones RÃ¡pidas
- **UbicaciÃ³n:** PÃ¡gina principal (`/`, ancla `#hero`). Archivos: `src/components/Hero.jsx`, `src/components/Hero.css`.
- **DescripciÃ³n del comportamiento:** Presenta la cabecera del sitio con el tÃ­tulo "CODES++" y bajada institucional. Renderiza una animaciÃ³n de partÃ­culas inyectadas dinÃ¡micamente al DOM, formas geomÃ©tricas animadas y un efecto parallax ligado a listeners de movimiento del ratÃ³n (`mousemove`) y scroll de la ventana (`scroll`).
- **Problema que intenta resolver:** Dar identidad visual, impacto inicial y dirigir al usuario hacia las secciones clave del centro.
- **PÃºblico objetivo:** Toda persona que ingresa al sitio.
- **Flujo de uso:**
  1. El usuario entra a la web y ve aparecer el contenido animado con fade-in tras 500ms.
  2. Al mover el ratÃ³n, los contenedores flotantes se desplazan en sentido opuesto.
  3. Dispone de dos botones de llamada a la acciÃ³n (CTA): "ConocÃ© Nuestros Grupos" (navega a `/grupos`) y "PrÃ³ximos Eventos" (hace scroll suave a `#eventos`).
  4. En la parte inferior dispone de una flecha que al clickear realiza scroll suave a `#nosotros`.
- **Datos y origen:** Contenido de texto 100% estÃ¡tico hardcodeado en el JSX.
- **Dependencias tÃ©cnicas:** `react`, `react-router-dom` (`useNavigate`), FontAwesome icons.
- **Estado de implementaciÃ³n:** Funcional, pero tÃ©cnicamente sobrecargado.
- **Limitaciones:** 
  - El botÃ³n primario ("ConocÃ© Nuestros Grupos") redirige a `/grupos`, pÃ¡gina que se encuentra "En ConstrucciÃ³n".
  - Fuerte costo de rendimiento: ejecuta listeners pasivos que recalculan estilos en lÃ­nea en cada pÃ­xel de scroll y movimiento del cursor.
- **Valor para un estudiante de primer aÃ±o:** Medio a bajo. No ofrece accesos directos a trÃ¡mites, fechas de inicio ni respuestas urgentes; prioriza estÃ©tica sobre utilidad inmediata.
- **Evidencia en cÃ³digo:** `src/components/Hero.jsx` L75-77 (`navigate('/grupos')`), L26-50 (listeners `scroll` y `mousemove`).

---

### FUNC-02: Popup Modal de Comunidad LSI
- **UbicaciÃ³n:** Componente global montado en `/` cuando la ruta es la raÃ­z. Archivos: `src/components/CommunityModal.jsx`, `src/components/CommunityModal.css`.
- **DescripciÃ³n:** Ventana emergente (modal overlay) que se dispara automÃ¡ticamente a los 1.5 segundos de cargar la home para usuarios que no la hayan visto previamente en su navegador. Explica las reglas de ingreso a la nueva comunidad (exclusividad para estudiantes UNLu, certificado obligatorio, espacio seguro) y ofrece un botÃ³n directo a `/comunidad`.
- **Problema que intenta resolver:** Notificar a los estudiantes de la reapertura/organizaciÃ³n de los grupos oficiales de WhatsApp y filtrar miembros para evitar spam.
- **PÃºblico objetivo:** Estudiantes de Sistemas de la UNLu que buscan grupos de pares.
- **Flujo de uso:**
  1. El usuario entra a la Home.
  2. Tras un `setTimeout` de 1500ms, se superpone el modal bloqueando la interacciÃ³n de fondo.
  3. Si hace clic en "Entendido, Â¡quiero unirme!", se guarda una clave en `localStorage` (`communityModalSeen = 'true'`) y se redirige a `/comunidad`.
  4. Si hace clic en "QuizÃ¡s mÃ¡s tarde" o la cruz, se cierra y guarda el flag para no volver a molestar.
- **Datos y origen:** Reglas y textos estÃ¡ticos en el componente. Persistencia en `window.localStorage`.
- **Dependencias:** `react-router-dom`.
- **Estado de implementaciÃ³n:** Funcional.
- **Limitaciones:** PatrÃ³n de diseÃ±o invasivo (interstitial modal). En mÃ³viles tapa la pantalla inmediatamente interrumpiendo la lectura inicial.
- **Valor para un estudiante de primer aÃ±o:** Alto en contenido (el grupo de WhatsApp es la principal necesidad del ingresante), pero deficiente en experiencia de usuario.
- **Evidencia en cÃ³digo:** `src/components/CommunityModal.jsx` L11-17 (`localStorage.getItem('communityModalSeen')`, `setTimeout`).

---

### FUNC-03: SecciÃ³n Institucional "Â¿QuiÃ©nes Somos?"
- **UbicaciÃ³n:** Home (`/#nosotros`). Archivos: `src/components/About.jsx`, `src/components/About.css`.
- **DescripciÃ³n:** Muestra la historia del centro de estudiantes (fundaciÃ³n tras la pandemia en octubre 2022, reelecciÃ³n en octubre 2024), su misiÃ³n polÃ­tica/acadÃ©mica, una terna de logros y una grilla con 8 tarjetas de "valores" (Solidaridad, Compromiso, Transparencia, InnovaciÃ³n, InclusiÃ³n, Excelencia, PasiÃ³n, FormaciÃ³n).
- **Problema que intenta resolver:** Dar a conocer el origen del centro y su legitimidad institucional.
- **PÃºblico objetivo:** Comunidad universitaria en general.
- **Flujo de uso:** Lectura pasiva de texto estructurado en tarjetas.
- **Datos y origen:** EstÃ¡tico en cÃ³digo.
- **Dependencias:** `react-bootstrap` (`Container`, `Row`, `Col`).
- **Estado:** Funcional.
- **Limitaciones:** Ocupa un espacio vertical excesivo con abstracciones retÃ³ricas que postergan el acceso a herramientas concretas de cursada.
- **Valor para un ingresante:** Bajo. Un ingresante necesita saber quiÃ©n lo ayuda ante un problema, no una lista de 8 virtudes abstractas.
- **Evidencia en cÃ³digo:** `src/components/About.jsx` L7-48 (array de valores), L74-89 (relato de fundaciÃ³n).

---

### FUNC-04: NÃ³mina de Integrantes y ComisiÃ³n Directiva
- **UbicaciÃ³n:** Home (`/#integrantes`). Archivos: `src/components/Members.jsx`.
- **DescripciÃ³n:** Presenta con nombre, cargo, foto y enlace a LinkedIn a los 4 miembros de la comisiÃ³n directiva (Presidente, Vicepresidente, Secretaria, Tesorero) y una lista en badges de los 5 vocales.
- **Problema que intenta resolver:** Identificar a las personas fÃ­sicas responsables del centro de estudiantes para consultas y transparencia representativa.
- **PÃºblico objetivo:** Estudiantes de Sistemas.
- **Flujo de uso:** El estudiante visualiza quiÃ©nes son sus representantes y puede pulsar el botÃ³n "LinkedIn" para ver el perfil profesional de cada uno en una pestaÃ±a externa.
- **Datos y origen:** Array estÃ¡tico hardcodeado en el componente con imÃ¡genes locales en `/assets/images/`.
- **Dependencias:** Bootstrap cards.
- **Estado:** Funcional.
- **Limitaciones:** Solo enlaza a LinkedIn personal. No ofrece correo de contacto por rol ni canales institucionales directos para elevar consultas especÃ­ficas a secretarÃ­a o presidencia.
- **Valor para un ingresante:** Medio a bajo. Brinda caras visibles pero sin canal de resoluciÃ³n de dudas.
- **Evidencia en cÃ³digo:** `src/components/Members.jsx` L5-38.

---

### FUNC-05: Cartelera de PrÃ³ximas Actividades
- **UbicaciÃ³n:** Home (`/#eventos`). Archivos: `src/components/Events.jsx`, `src/services/activitiesService.js`.
- **DescripciÃ³n:** Consulta a la base de datos de Supabase la tabla `activities`. Si existen registros, lista tarjetas con fecha formateada, tÃ­tulo, ubicaciÃ³n fÃ­sica/virtual, descripciÃ³n y un botÃ³n de inscripciÃ³n externa. Si no hay registros o estÃ¡ vacÃ­a, muestra un mensaje por defecto ("PrÃ³ximamente... estamos preparando nuevas actividades").
- **Problema que intenta resolver:** Difundir eventos extracurriculares y encuentros organizados por el centro.
- **PÃºblico objetivo:** Estudiantes de todos los aÃ±os.
- **Flujo de uso:**
  1. Componente ejecuta `activitiesService.getAll()` en `useEffect`.
  2. Muestra skeleton/null mientras carga.
  3. Renderiza las actividades o el estado vacÃ­o con icono de calendario.
- **Datos y origen:** Base de datos PostgreSQL en Supabase (`table: activities`).
- **Dependencias:** `@supabase/supabase-js`, `react-bootstrap`.
- **Estado:** Funcional, condicionado a la disponibilidad de datos en Supabase.
- **Limitaciones:** No filtra por fecha en el servidor ni oculta automÃ¡ticamente actividades que ya caducaron (comentario explÃ­cito en cÃ³digo: `// Filtrar actividades futuras solamente?`).
- **Valor para un ingresante:** Medio.
- **Evidencia en cÃ³digo:** `src/components/Events.jsx` L11-25; `src/services/activitiesService.js` L5-13.

---

### FUNC-06: CatÃ¡logo de Software y Herramientas ("Banco de Recursos")
- **UbicaciÃ³n:** Home (`/#extra`). Archivos: `src/components/Resources.jsx`, `src/components/Resources.css`.
- **DescripciÃ³n:** MÃ³dulo masivo de 980 lÃ­neas de cÃ³digo y mÃ¡s de 67 KB de texto estÃ¡tico dentro del bundle cliente de la Home. Implementa una mÃ¡quina de estados para navegar en 3 niveles:
  1. Nivel 1: Grilla de 8 categorÃ­as generales (Herramientas, DiseÃ±o, Desarrollo, Productividad, ComunicaciÃ³n, Aprendizaje, Recursos, Utilidades).
  2. Nivel 2: SubcategorÃ­as con cientos de nombres de software (desde Notepad++, Vim, Emacs, atÃ© NetBeans, GIMP, TinyPNG, AWS, Kafka).
  3. Nivel 3: Ficha individual con descripciÃ³n ("Â¿QuÃ© es?"), caso de uso ("Â¿Para quÃ© sirve?"), comando de instalaciÃ³n y un botÃ³n para ir al sitio oficial o a una bÃºsqueda automÃ¡tica generada en Google (`https://www.google.com/search?q=...`).
- **Problema que intenta resolver:** Presuntamente buscaba proveer un compendio de herramientas para estudiantes de computaciÃ³n.
- **PÃºblico objetivo:** Desarrolladores o estudiantes de informÃ¡tica.
- **Flujo de uso:** NavegaciÃ³n por clic sucesivo y botones de "Volver a categorÃ­as".
- **Datos y origen:** 100% hardcodeado en estructuras de objetos gigantes dentro del archivo JSX.
- **Dependencias:** React local state (`useState`).
- **Estado:** Funcional desde el punto de vista del cÃ³digo, pero conceptualmente desastroso.
- **Limitaciones:** 
  - EngaÃ±oso: en el Sidebar se titula "Banco de Recursos", lo que hace suponer que contiene apuntes de materias, finales tomados, resÃºmenes o programas de cursada de la UNLu.
  - Es contenido genÃ©rico generado artificialmente que duplica informaciÃ³n accesible en Google o Wikipedia.
  - Aumenta innecesariamente el peso del JavaScript descargado por el navegador en dispositivos mÃ³viles.
- **Valor para un ingresante:** **Nulo a Negativo.** Desorienta totalmente al estudiante nuevo que necesita el programa de IntroducciÃ³n a la ProgramaciÃ³n o MatemÃ¡tica Discreta y se topa con un tutorial de cÃ³mo instalar Emacs o Adobe Illustrator.
- **Evidencia en cÃ³digo:** `src/components/Resources.jsx` L137-264, L269-849.

---

### FUNC-07: Blog y Noticias con Visor Modal
- **UbicaciÃ³n:** Home (`/#blog`). Archivos: `src/components/Blog.jsx`, `src/services/newsService.js`.
- **DescripciÃ³n:** Consume las noticias publicadas en Supabase (`table: news`). Muestra tarjetas con imagen, fecha, tÃ­tulo, extracto y botÃ³n "Leer mÃ¡s". Al cliquear abre un modal Bootstrap con la imagen ampliada, autor, fecha y cuerpo completo del artÃ­culo. Si no hay noticias, muestra mensaje "PrÃ³ximamente".
- **Problema que intenta resolver:** Canal de comunicaciÃ³n de novedades y anuncios oficiales del centro.
- **PÃºblico objetivo:** Comunidad estudiantil.
- **Flujo de uso:**
  1. Carga `newsService.getAll(true)`.
  2. El usuario explora las tarjetas de noticias.
  3. Hace clic en "Leer mÃ¡s". Se abre modal con el texto Ã­ntegro.
- **Datos y origen:** Supabase (`news` con join a `profiles` para el autor).
- **Dependencias:** Supabase, React Bootstrap Modal.
- **Estado:** Funcional.
- **Limitaciones:** No cuenta con paginaciÃ³n, filtros por fecha/tema, ni URLs Ãºnicas por noticia (no son indexables por buscadores ni compartibles individualmente en redes).
- **Valor para un ingresante:** Medio.
- **Evidencia en cÃ³digo:** `src/components/Blog.jsx` L13-25, L98-135.

---

### FUNC-08: Carrusel de Novedades Superior
- **UbicaciÃ³n:** Home (diseÃ±ado para ubicarse inmediatamente debajo del Hero). Archivo: `src/components/NewsCarousel.jsx`.
- **DescripciÃ³n:** Carrusel interactivo automÃ¡tico (rotaciÃ³n cada 5s) que consume las mismas noticias de Supabase (`newsService.getAll`), toma las 5 mÃ¡s recientes y las exhibe con imagen de fondo, badges de categorÃ­a y botÃ³n "Leer noticia completa".
- **Problema que intenta resolver:** Destacar noticias en la parte superior de la portada.
- **Flujo de uso:** Al pulsar "Leer noticia completa", ejecuta un scroll suave programÃ¡tico hacia la secciÃ³n `#blog` situada varios cientos de pÃ­xeles mÃ¡s abajo.
- **Estado:** **Inactivo en producciÃ³n.** Fue comentado en `App.jsx` lÃ­nea 78 (`{/* <NewsCarousel /> */}`).
- **Limitaciones:** Duplica la consulta a base de datos de `Blog.jsx`. Si el usuario pulsa para leer la noticia, solo es llevado hacia el bloque inferior donde debe volver a buscar la tarjeta correspondiente.
- **Valor para un ingresante:** Redundante.
- **Evidencia en cÃ³digo:** `src/App.jsx` L78; `src/components/NewsCarousel.jsx` L69-81.

---

### FUNC-09: Preguntas Frecuentes AcadÃ©micas (FAQ)
- **UbicaciÃ³n:** Home (`/#faq`). Archivos: `src/components/FAQ.jsx`.
- **DescripciÃ³n:** AcordeÃ³n colapsable con 5 preguntas clave sobre trÃ¡mites universitarios:
  1. Cambio de plan de estudios (indica escribir a `tramitesunlu@unlu.edu.ar`).
  2. PÃ©rdida de la regularidad (explica requisito de aprobar 2 materias con final al aÃ±o).
  3. ParticipaciÃ³n en actividades del centro.
  4. Beneficios como estudiante.
  5. Formas de contactar al centro.
- **Problema que intenta resolver:** Responder las dudas reglamentarias y administrativas mÃ¡s reiteradas.
- **PÃºblico objetivo:** Estudiantes de todos los aÃ±os, especialmente ingresantes.
- **Flujo de uso:** Clic sobre cada cabecera para desplegar la respuesta.
- **Datos y origen:** Hardcodeado en array local de 5 elementos.
- **Dependencias:** `react-bootstrap/Accordion`.
- **Estado:** Funcional pero gravemente incompleto en relaciÃ³n al conocimiento real disponible (en `knowledgeBase.json` hay decenas de respuestas adicionales que no estÃ¡n publicadas en esta interfaz).
- **Limitaciones:** Muy pocas preguntas, sin buscador, sin enlaces directos a las ordenanzas o resoluciones de la UNLu, ubicado casi al final de la portada despuÃ©s de cientos de lÃ­neas de scroll.
- **Valor para un ingresante:** **Muy Alto.** Es de las pocas funcionalidades que resuelven problemas reales de permanencia y trÃ¡mites en la UNLu.
- **Evidencia en cÃ³digo:** `src/components/FAQ.jsx` L6-27.

---

### FUNC-10: MenciÃ³n de Colaboradores de Redes
- **UbicaciÃ³n:** Home (`/#colaboradores`). Archivos: `src/components/Colaboradores.jsx`.
- **DescripciÃ³n:** Muestra dos tarjetas: una reconociendo a la colaboradora de gestiÃ³n de redes sociales (Tatiana Galeano) con sus redes, y una tarjeta vacÃ­a de reclutamiento ("Â¿Te gustarÃ­a colaborar? Ãšnete a nuestro equipo - Contactanos").
- **Problema que intenta resolver:** Reconocer a estudiantes colaboradores e invitar a sumarse.
- **Estado:** Funcional.
- **Limitaciones:** Muestra una sola colaboradora y una tarjeta genÃ©rica; coexiste de forma confusa con la pÃ¡gina completa `/colaborar`.
- **Valor para un ingresante:** Bajo.
- **Evidencia en cÃ³digo:** `src/components/Colaboradores.jsx` L42-70.

---

### FUNC-11: Formulario de Contacto General
- **UbicaciÃ³n:** Home (`/#contacto`). Archivos: `src/components/ContactForm.jsx`.
- **DescripciÃ³n:** Formulario completo para enviar consultas directas al centro. Incluye validaciÃ³n de campos: nombre, email, categorÃ­a (Consulta General, Asuntos AcadÃ©micos, Eventos, Soporte TÃ©cnico, Sugerencias, Reclamos), prioridad (Baja, Normal, Alta, Urgente), asunto y mensaje (mÃ­nimo 10 caracteres).
- **Problema que intenta resolver:** Canal formal para que cualquier estudiante transmita una duda o queja.
- **Flujo de uso:**
  1. El estudiante completa los datos.
  2. El formulario valida el formato.
  3. Al enviar, realiza un `fetch` POST a Formspree (`https://formspree.io/f/xkgpnnzr`).
  4. Muestra alerta de Ã©xito o error y resetea los campos.
- **Datos y origen:** Servicio externo Formspree.
- **Dependencias:** Bootstrap Form, Fetch API.
- **Estado:** Funcional.
- **Limitaciones:** Depende de una cuenta gratuita de Formspree con cuota mensual limitada de envÃ­os; si se supera la cuota, las consultas se pierden silenciosamente.
- **Valor para un ingresante:** Alto.
- **Evidencia en cÃ³digo:** `src/components/ContactForm.jsx` L92-105.

---

### FUNC-12: Directorio de Redes Sociales y Datos Institucionales
- **UbicaciÃ³n:** Secciones de Contacto y Footer. Archivos: `src/components/Contact.jsx`, `src/components/Footer.jsx`.
- **DescripciÃ³n:** Bloque con accesos directos a Instagram, Facebook, X (Twitter), LinkedIn y servidor de Discord de CODES++, ademÃ¡s de indicar correo institucional (`sistemas@codesunlu.tech`), ubicaciÃ³n institucional (Universidad Nacional de LujÃ¡n) y aÃ±o de fundaciÃ³n (2022).
- **Estado:** Funcional.
- **Limitaciones:** En el Footer se incluyen tres enlaces ficticios que no dirigen a ningÃºn lado (`#privacidad`, `#terminos`, `#cookies`).
- **Valor para un ingresante:** Alto (las redes sociales e Instagram son la principal vÃ­a de contacto informal).
- **Evidencia en cÃ³digo:** `src/components/Contact.jsx` L74-105; `src/components/Footer.jsx` L75-77.

---

### FUNC-13: MenÃº Lateral de NavegaciÃ³n (Sidebar)
- **UbicaciÃ³n:** Componente omnipresente en toda la aplicaciÃ³n (excepto rutas `/dashboard`). Archivos: `src/components/Sidebar.jsx`.
- **DescripciÃ³n:** BotÃ³n hamburguesa fijo que abre un menÃº lateral deslizante con 16 Ã­tems agrupados visualmente:
  1. Inicio (`#hero`)
  2. Calendario AcadÃ©mico (`/calendario`)
  3. Banco de Recursos (`#extra`)
  4. Charlas (`/charlas`)
  5. InscripciÃ³n a Talleres (`/taller`)
  6. Encuestas Activas (`/encuestas`)
  7. Proyectos Colaborativos (`/colaborar`)
  8. Proyectos Reales (`/proyectos-reales`)
  9. Actividades y Eventos (`#eventos`)
  10. CACIC (`/cacic`)
  11. Novedades (`#blog`)
  12. Grupos de Estudio (`/grupos`)
  13. Nuestro Equipo (`#integrantes`)
  14. Â¿QuiÃ©nes Somos? (`#nosotros`)
  15. Preguntas Frecuentes (`#faq`)
  16. ContÃ¡ctanos (`#contacto`)
  *(Y opciÃ³n 17 "Dashboard" si el usuario estÃ¡ autenticado).*
- **Problema que intenta resolver:** NavegaciÃ³n general de la aplicaciÃ³n.
- **Limitaciones y fallas UX:**
  - Mezcla incongruente de destinos: algunos Ã­tems son rutas independientes de pÃ¡gina completa (`/calendario`, `/colaborar`, etc.) y otros son anclas de scroll interno en la home (`#extra`, `#faq`, `#nosotros`).
  - Si el usuario se encuentra en `/charlas` y presiona "Banco de Recursos", el componente tiene que redirigir a `/` y luego disparar un temporizador de 500ms para intentar scrollear al elemento. Si la pÃ¡gina tarda mÃ¡s en renderizar, el scroll falla.
  - Sobrecarga visual: 16 opciones verticales sin colapsar generan fatiga de decisiÃ³n (Ley de Hick).
- **Valor para un ingresante:** Confuso y desorientador.
- **Evidencia en cÃ³digo:** `src/components/Sidebar.jsx` L98-131, L150-187.

---

### FUNC-14: BotÃ³n Flotante y Reset de Scroll
- **UbicaciÃ³n:** Global. Archivos: `src/components/BackToTop.jsx`, `src/components/ScrollToTop.jsx`.
- **DescripciÃ³n:** 
  - `ScrollToTop`: Componente lÃ³gico sin interfaz que escucha el cambio de ruta (`useLocation().pathname`) y resetea la posiciÃ³n de lectura a la cima (`window.scrollTo(0, 0)`).
  - `BackToTop`: BotÃ³n flotante redondo con icono de flecha hacia arriba que se muestra tras scrollear mÃ¡s de 300px.
- **Estado:** Funcional.
- **Evidencia en cÃ³digo:** `src/components/BackToTop.jsx` L8-19; `src/components/ScrollToTop.jsx` L4-12.

---

### FUNC-15: Barra Superior de Progreso de Lectura
- **UbicaciÃ³n:** Cabecera de la ventana. Archivo: `src/components/ScrollIndicator.jsx`.
- **DescripciÃ³n:** Barra horizontal cian de 3px que calcula el porcentaje de scroll vertical de la ventana y ajusta su ancho vÃ­a CSS en lÃ­nea.
- **Estado:** Funcional.
- **Valor para un ingresante:** MÃ­nimo.
- **Evidencia en cÃ³digo:** `src/components/ScrollIndicator.jsx` L8-15.

---

### FUNC-16: Parche de Eventos Touch en Mobile
- **UbicaciÃ³n:** Global en `AppContent`. Archivo: `src/components/MobileFormEnhancer.jsx`.
- **DescripciÃ³n:** Efecto que verifica si la pantalla mide `<= 768px` y vincula eventos `touchstart` y `touchend` para animar botones mediante escalas CSS (`scale(0.95)`), ademÃ¡s de forzar scroll centrado al hacer `focusin` en inputs.
- **Estado:** CÃ³digo precario.
- **Limitaciones:** Manipula directamente el DOM evadiendo el paradigma declarativo. Busca resolver con JS imperativo lo que se resuelve de forma nativa con pseudo-clases CSS (`:active`, `:focus-visible`).
- **Valor:** Negativo en mantenibilidad.
- **Evidencia en cÃ³digo:** `src/components/MobileFormEnhancer.jsx` L13-56.

---

### FUNC-17: Grupos de Estudio
- **UbicaciÃ³n:** `/grupos`. Archivo: `src/pages/Groups.jsx`.
- **DescripciÃ³n:** Pantalla con cabecera y un contenedor central que muestra un icono de martillo, el tÃ­tulo "ðŸš§ En ConstrucciÃ³n ðŸš§" y un mensaje de que pronto estarÃ¡n disponibles grupos por materia, integraciÃ³n con Discord y chat en tiempo real. Dispone de un enlace al servidor de Discord de CODES.
- **Problema que intenta resolver:** Conectar estudiantes para armar grupos de cursada.
- **Estado:** **Incompleto / En ConstrucciÃ³n.**
- **Impacto crÃ­tico:** Es la pÃ¡gina de destino directa del botÃ³n principal del Hero ("ConocÃ© Nuestros Grupos"). El usuario que hace clic esperando encontrar los grupos de WhatsApp de sus materias se choca con un callejÃ³n sin salida.
- **Valor para un ingresante:** Frustrante. Promete un servicio esencial y no lo entrega.
- **Evidencia en cÃ³digo:** `src/pages/Groups.jsx` L20-63.

---

### FUNC-18: AdmisiÃ³n a Comunidad WhatsApp con ValidaciÃ³n de PDF
- **UbicaciÃ³n:** `/comunidad`. Archivo: `src/pages/WhatsAppRegistration.jsx`.
- **DescripciÃ³n:** Formulario de registro para acceder al grupo oficial de WhatsApp de estudiantes de Sistemas. Solicita: Nombre, Apellido, Email, Celular con WhatsApp, NÃºmero de Legajo, Sede (LujÃ¡n, Chivilcoy, San Miguel) y el archivo en formato PDF del Certificado de Alumno Regular emitido por el sistema universitario.
- **LÃ³gica interna:**
  1. Llama a `api.ipify.org` para registrar la direcciÃ³n IP del usuario.
  2. Consulta en Supabase si la IP tiene 3 o mÃ¡s solicitudes en estado `rechazado`. Si es asÃ­, bloquea el envÃ­o con un mensaje de IP bloqueada.
  3. Ejecuta validaciones de "Blacklist" de palabras en nombre/apellido/email (`test`, `prueba`, `asdf`, `admin`, etc.).
  4. Valida rango numÃ©rico de legajo de forma rÃ­gida (`111111 <= legajo <= 300000`). Si no cumple, responde con mensaje hostil ("Buen intento. Te olvidaste que somos de sistemas, gracias por dejarnos tu IP...").
  5. Carga `pdfjs-dist` desde unpkg, extrae el texto de las dos primeras pÃ¡ginas del certificado subido y analiza si contiene palabras acadÃ©micas obligatorias (`lujan`, `universidad`, `legajo`, `estudiante`, `ingresante`).
  6. Sube el documento PDF a un bucket de Supabase Storage (`certificados`).
  7. Guarda la solicitud en la tabla `whatsapp_requests` de Supabase con estado `pendiente` o `rechazado`.
- **Problema que intenta resolver:** Evitar el ingreso de spam, personas ajenas a la carrera o acosadores a los grupos de WhatsApp estudiantiles.
- **PÃºblico objetivo:** Estudiantes de Sistemas de la UNLu.
- **Estado:** Funcional, pero con arquitectura frÃ¡gil y experiencia de usuario punitiva y agresiva.
- **Limitaciones crÃ­ticas:**
  - Dependencia de un CDN externo para el worker de PDF.js (`https://unpkg.com/pdfjs-dist@...`), propenso a fallar si hay bloqueadores o fallas de red.
  - El bundle de `pdfjs-dist` pesa mÃ¡s de 2 MB y penaliza fuertemente las conexiones mÃ³viles lentas.
  - ValidaciÃ³n arbitraria de legajos: estudiantes con legajos menores a 111.111 (alumnos con trayectoria previa) o superiores a 300.000 quedan bloqueados automÃ¡ticamente recibiendo una acusaciÃ³n de intento de ataque.
  - Almacena certificados con datos personales sensibles de alumnos (DNI, notas, historial) en un storage cloud sin constancia de polÃ­ticas de privacidad ni consentimiento explÃ­cito informado.
- **Valor para un ingresante:** Muy Alto en objetivo (es la llave para entrar al grupo de la carrera), pero Muy Deficiente y hostil en implementaciÃ³n.
- **Evidencia en cÃ³digo:** `src/pages/WhatsAppRegistration.jsx` L7-8, L27-31, L84-96, L98-142, L154-176.

---

### FUNC-19: Calendario AcadÃ©mico Interactivo 2026
- **UbicaciÃ³n:** `/calendario`. Archivos: `src/pages/CalendarPage.jsx`, `src/components/Calendar.jsx`, `src/data/calendarEvents.js`.
- **DescripciÃ³n:** MÃ³dulo de calendario mensual para navegar las fechas del ciclo lectivo 2026 de la UNLu. Permite cambiar de mes, volver al dÃ­a de hoy, y muestra los dÃ­as con puntos de color segÃºn el tipo de fecha (InscripciÃ³n a finales, turnos de exÃ¡menes, inscripciÃ³n a cursadas, inicio de cuatrimestre, receso invernal). Al tocar un dÃ­a con evento, abre un modal con el detalle. En el lateral derecho incluye una lista con los eventos del mes seleccionado.
- **Problema que intenta resolver:** Permitir al estudiante saber con precisiÃ³n cuÃ¡ndo debe realizar cada gestiÃ³n acadÃ©mica y cuÃ¡ndo rinde exÃ¡menes.
- **PÃºblico objetivo:** Todos los estudiantes de la UNLu.
- **Datos y origen:** Archivo estÃ¡tico local `src/data/calendarEvents.js` que contiene 11 fechas oficiales del aÃ±o 2026.
- **Estado:** Funcional.
- **Limitaciones:**
  - La grilla clÃ¡sica de 42 casillas es muy poco ergonÃ³mica en pantallas de celulares de menos de 400px de ancho.
  - Requiere cliquear dÃ­a por dÃ­a para descubrir quÃ© evento ocurre.
  - Pese a que existe un servicio complejo `googleCalendar.js` y un hook `useGoogleCalendar.js`, el calendario utiliza un array estÃ¡tico hardcodeado.
- **Valor para un ingresante:** **Excelente en contenido.** Es informaciÃ³n crÃ­tica que evita perder cursadas o fechas de inscripciÃ³n.
- **Evidencia en cÃ³digo:** `src/components/Calendar.jsx` L43-75, L106-115; `src/data/calendarEvents.js` L1-138.

---

### FUNC-20: Repositorio de Charlas Grabadas y PrÃ³ximas
- **UbicaciÃ³n:** `/charlas`. Archivo: `src/pages/CharlasPage.jsx`, `src/services/talksService.js`.
- **DescripciÃ³n:** Cartelera de conferencias y charlas tÃ©cnicas organizadas por CODES++. Separa automÃ¡ticamente entre "Charlas Pasadas" (con reproductor embebido de YouTube para ver la grabaciÃ³n completa) y "PrÃ³ximas Charlas" (con expositor, fecha, temÃ¡tica y botÃ³n de registro/acceso en vivo).
- **Problema que intenta resolver:** DivulgaciÃ³n cientÃ­fica y profesional, formaciÃ³n continua y acceso asincrÃ³nico a actividades extracurriculares.
- **PÃºblico objetivo:** Estudiantes interesados en ciberseguridad, IA, mercado laboral y programaciÃ³n.
- **Datos y origen:** HÃ­brido: intenta traer registros de Supabase (`talksService.getAll()`) y fusiona un listado hardcodeado con charlas de Walter AgÃ¼ero, Patricia Jebsen, Jorge Sagula y Ãngel Maldonado.
- **Estado:** Funcional.
- **Limitaciones:**
  - Inconsistencia de fuentes de datos (mezcla llamadas a DB con objetos fijos en el cÃ³digo).
  - Incrusta mÃºltiples iframes de YouTube en simultÃ¡neo, lo cual degrada la velocidad de carga inicial de la pÃ¡gina.
  - Fragmenta los eventos: un estudiante debe visitar `/eventos` en la home, `/taller` para talleres y `/charlas` para charlas.
- **Valor para un ingresante:** Medio a Alto.
- **Evidencia en cÃ³digo:** `src/pages/CharlasPage.jsx` L13-84, L147-165.

---

### FUNC-21: InscripciÃ³n a Taller EspecÃ­fico ("Tu CÃ³digo es tu CV")
- **UbicaciÃ³n:** `/taller`. Archivo: `src/components/WorkshopRegistration.jsx`.
- **DescripciÃ³n:** PÃ¡gina de promociÃ³n e inscripciÃ³n a un taller formativo de Git y GitHub orientado a la creaciÃ³n de portafolios con GitHub Pages. Contiene temario, beneficios, requisitos y un formulario que solicita Nombre, Email, Sede (LujÃ¡n, Chivilcoy, San Miguel, Mercedes, Otro), usuario de GitHub, nivel de carrera (Ingresante / Cursando materias bÃ¡sicas / Avanzado) y motivaciÃ³n. Guarda el registro en la tabla `workshop_registrations` de Supabase.
- **Problema que intenta resolver:** Formar a estudiantes en el uso de control de versiones y empleabilidad.
- **PÃºblico objetivo:** Estudiantes de los primeros aÃ±os de la carrera.
- **Estado:** Funcional para ese taller puntual.
- **Limitaciones graves:** La pÃ¡gina estÃ¡ codificada de manera 100% rÃ­gida para un Ãºnico taller especÃ­fico. Si el taller finaliza o se desea dictar un taller de Python, Docker o SQL, no hay forma de reutilizar la pÃ¡gina sin editar y recompilar el cÃ³digo fuente del proyecto.
- **Valor para un ingresante:** Alto durante la vigencia del taller; nulo una vez concluido.
- **Evidencia en cÃ³digo:** `src/components/WorkshopRegistration.jsx` L23-38, L85-186.

---

### FUNC-22: Encuestas Estudiantiles Incrustadas
- **UbicaciÃ³n:** `/encuestas`. Archivo: `src/pages/EncuestasPage.jsx`.
- **DescripciÃ³n:** Presenta dos encuestas de gestiÃ³n gremial-acadÃ©mica mediante pestaÃ±as de navegaciÃ³n:
  1. Solicitud de Contracursadas (para relevar demanda de materias fuera de tÃ©rmino).
  2. Encuesta de Horarios y Comisiones (para relevar problemas de superposiciÃ³n horaria para quienes trabajan).
  Incrusta dos iframes de Google Forms de 1200px de altura y provee enlaces para abrirlos en una pestaÃ±a externa.
- **Problema que intenta resolver:** Relevar problemas acadÃ©micos para gestionar ante la universidad comisiones y contracursadas.
- **PÃºblico objetivo:** Estudiantes regulares con dificultades de cursada.
- **Estado:** Funcional.
- **Limitaciones:** En dispositivos mÃ³viles, un iframe de Google Forms de 1200px con scroll interno genera problemas de captura de gestos tÃ¡ctiles (scroll trap). No explica a un ingresante quÃ© es reglamentariamente una "contracursada".
- **Valor para un ingresante:** Medio (las contracursadas suelen interesar a partir del segundo cuatrimestre).
- **Evidencia en cÃ³digo:** `src/pages/EncuestasPage.jsx` L8-23, L113-126.

---

### FUNC-23: PostulaciÃ³n a Proyectos Colaborativos
- **UbicaciÃ³n:** `/colaborar`. Archivos: `src/pages/ColaborarPage.jsx`, `src/services/collaboratorsService.js`, `api/send-collaborator-email.js`.
- **DescripciÃ³n:** Convocatoria para colaborar en iniciativas de la comunidad y proyectos open source de CODES++. Ofrece un formulario de 4 pasos que solicita:
  1. InformaciÃ³n personal: Nombre, email, telÃ©fono, aÃ±o de ingreso a la carrera.
  2. Disponibilidad horaria: MaÃ±ana, Tarde, Noche.
  3. TecnologÃ­as (hasta 3 con nivel principiante/intermedio/avanzado).
  4. MotivaciÃ³n e intereses (textarea con contador de caracteres).
  EnvÃ­a los datos a Supabase (`collaborator_applications`) y despacha un correo de alerta mediante la Serverless Function `/api/send-collaborator-email` usando el servicio Resend.
- **Problema que intenta resolver:** Captar colaboradores internos para desarrollar proyectos del centro de estudiantes.
- **PÃºblico objetivo:** Estudiantes con interÃ©s en participar activamente del centro.
- **Estado:** Funcional.
- **Limitaciones:** Se solapa en un 90% con `/proyectos-reales`.
- **Valor para un ingresante:** Bajo. Un ingresante reciÃ©n estÃ¡ adaptÃ¡ndose a la vida universitaria y no tiene herramientas para evaluar tecnologÃ­as ni niveles de experiencia.
- **Evidencia en cÃ³digo:** `src/pages/ColaborarPage.jsx` L7-16, L149-177; `src/services/collaboratorsService.js` L4-26.

---

### FUNC-24: PostulaciÃ³n a Proyectos Reales para Empresas
- **UbicaciÃ³n:** `/proyectos-reales`. Archivos: `src/pages/ProyectosRealesPage.jsx`, `src/services/proyectosRealesService.js`, `api/send-proyectos-reales-email.js`.
- **DescripciÃ³n:** Formulario para postularse a una base de talento estudiantil para vincularse con empresas reales bajo supervisiÃ³n docente. Pide: Nombre, email, legajo, celular, perfil de GitHub, perfil de LinkedIn, Ã¡rea de interÃ©s (Frontend, Backend, Data Analytics, QA) y tecnologÃ­as con nivel por cada Ã¡rea. Guarda en Supabase y dispara notificaciÃ³n vÃ­a Resend.
- **Problema que intenta resolver:** Vincular a estudiantes avanzados con el sector productivo y prÃ¡cticas profesionales.
- **PÃºblico objetivo:** Estudiantes de aÃ±os intermedios y avanzados.
- **Estado:** Funcional.
- **Limitaciones:** Duplica la lÃ³gica, diseÃ±o, estructura y endpoint de email de `/colaborar`.
- **Valor para un ingresante:** Nulo (requiere conocimientos de desarrollo y perfiles ya formados en GitHub/LinkedIn).
- **Evidencia en cÃ³digo:** `src/pages/ProyectosRealesPage.jsx` L7-18, L238-274; `src/services/proyectosRealesService.js` L4-28.

---

### FUNC-25: GalerÃ­a FotogrÃ¡fica de CACIC 2025
- **UbicaciÃ³n:** `/cacic`. Archivo: `src/pages/Cacic.jsx`.
- **DescripciÃ³n:** PÃ¡gina conmemorativa dedicada al Congreso Argentino de Ciencias de la ComputaciÃ³n (CACIC 2025). Contiene una explicaciÃ³n de la participaciÃ³n del centro, estadÃ­sticas estÃ¡ticas (27 fotos, 5 dÃ­as, 100% Ã©xito) y una galerÃ­a con 27 imÃ¡genes fotogrÃ¡ficas almacenadas en local con visor modal de ampliaciÃ³n.
- **Problema que intenta resolver:** Difundir la participaciÃ³n institucional en un congreso nacional.
- **Estado:** Funcional.
- **Limitaciones:** Ocupa un lugar privilegiado en la barra de navegaciÃ³n principal al mismo nivel que "Calendario" o "Banco de Recursos", cuando se trata de una crÃ³nica pasada con peso de imÃ¡genes no optimizadas.
- **Valor para un ingresante:** Muy bajo. No responde preguntas operativas.
- **Evidencia en cÃ³digo:** `src/pages/Cacic.jsx` L9-37, L343-380.

---

### FUNC-26: Expo UNLu
- **UbicaciÃ³n:** `/expo-unlu`. Archivo: `src/pages/ExpoUnlu.jsx`.
- **DescripciÃ³n:** Vista con tÃ­tulo "Expo UNLu", subtÃ­tulo "ExposiciÃ³n de proyectos estudiantiles..." y una tarjeta que dice "Â¡PrÃ³ximamente!" con un botÃ³n desactivado.
- **Problema que intenta resolver:** Iba a informar sobre la feria anual de carreras y proyectos de la universidad.
- **Estado:** **Incompleto / Abandonado.**
- **Limitaciones:** Ruta huÃ©rfana que no figura en los menÃºs y no aporta ningÃºn dato Ãºtil.
- **Valor para un ingresante:** Nulo.
- **Evidencia en cÃ³digo:** `src/pages/ExpoUnlu.jsx` L24-35.

---

### FUNC-27: Balance de Transparencia Financiera
- **UbicaciÃ³n:** `/transparencia`. Archivo: `src/pages/Transparencia.jsx`.
- **DescripciÃ³n:** Panel grÃ¡fico con solapas que exhibe mÃ©tricas presupuestarias del centro del aÃ±o 2024:
  - Ingresos totales ($125.000) divididos en Cuotas de Socios (60%), Eventos (20%), Donaciones (12%), Patrocinios (8%).
  - Gastos totales ($110.000) divididos en Eventos, Infraestructura, Materiales, AdministraciÃ³n y Reserva.
  - PestaÃ±a de Proyectos con montos asignados.
  - PestaÃ±a de Sorteos con nÃºmeros recaudados y lista de ganadores de tablets y premios en efectivo.
  - PestaÃ±a de Reportes Financieros mensuales con botones de descarga en PDF (`/reportes/enero-2024.pdf`).
- **Problema que intenta resolver:** RendiciÃ³n de cuentas y transparencia econÃ³mica.
- **Estado:** **Datos completamente simulados / Falsos.**
- **Limitaciones:**
  - El modelo financiero representado es ajeno a la realidad del centro: los centros de estudiantes universitarios en Argentina no cobran "cuotas de socios mensuales".
  - Los botones de descarga de PDF apuntan a archivos inexistentes en el servidor.
  - No estÃ¡ conectado a ninguna base de datos real.
- **Valor para un ingresante:** Nulo / Confuso (genera la idea errÃ³nea de que hay que pagar una cuota mensual para tener representaciÃ³n).
- **Evidencia en cÃ³digo:** `src/pages/Transparencia.jsx` L9-18, L22-31, L112-133, L565-568.

---

### FUNC-28: Panel de Control de Rifa / Sorteo
- **UbicaciÃ³n:** `/admin`. Archivo: `src/pages/AdminPage.jsx`.
- **DescripciÃ³n:** Interfaz administrativa creada para consultar y verificar la venta de nÃºmeros de una rifa (nÃºmeros de 4 cifras: 0000 a 9999). Se conecta a una Google Sheet mediante un endpoint de Google Apps Script. Permite consultar un nÃºmero, ver comprador, telÃ©fono, email, total recaudado y listado de nÃºmeros vendidos. AdemÃ¡s, incrusta el componente `<WhatsAppManagement />`.
- **Problema que intenta resolver:** Administrar la venta de boletos de un sorteo pro-fondos y validar admisiones de WhatsApp.
- **Estado:** Funcional en conexiÃ³n con Google Apps Script, pero **gravemente inseguro**.
- **Falla crÃ­tica de seguridad:** La ruta `/admin` en `App.jsx` **no cuenta con ningÃºn tipo de protecciÃ³n ni login**. Cualquier persona que escriba la URL `/admin` en el navegador accede a los datos personales, nombres, telÃ©fonos y emails de los compradores de rifas y puede aprobar o rechazar alumnos de WhatsApp.
- **Valor para un ingresante:** Nulo (es un panel interno).
- **Evidencia en cÃ³digo:** `src/App.jsx` L100 (`<Route path="/admin" element={<AdminPage />} />`); `src/pages/AdminPage.jsx` L13-44, L175-177.

---

### FUNC-29: AutenticaciÃ³n de Administradores
- **UbicaciÃ³n:** `/login`. Archivos: `src/components/Login.jsx`, `src/contexts/AuthContext.jsx`, `src/components/ProtectedRoute.jsx`.
- **DescripciÃ³n:** Inicio de sesiÃ³n mediante email y contraseÃ±a contra el servicio de autenticaciÃ³n de Supabase (`supabase.auth.signInWithPassword`). Valida roles (`admin`, `editor`, `member`) consultando la tabla `profiles`. Incluye sistema de fallback automÃ¡tico: si la base de datos tarda mÃ¡s de 1.5s o falla la consulta, y el correo coincide con `presidencia@codesunlu.tech` o `sistemas@codesunlu.tech`, le otorga privilegios de administrador de emergencia en memoria.
- **Estado:** Funcional.
- **Evidencia en cÃ³digo:** `src/contexts/AuthContext.jsx` L22-79, L139-152; `src/components/Login.jsx` L55-74.

---

### FUNC-30: Dashboard Administrativo Integral
- **UbicaciÃ³n:** `/dashboard`. Archivos: `src/components/Dashboard.jsx`.
- **DescripciÃ³n:** Panel restringido por `ProtectedRoute` con navegaciÃ³n por solapas laterales para coordinar:
  - MÃ©tricas generales (`DashboardStats.jsx`) con grÃ¡ficos simulados.
  - ABM de Noticias (`NewsManagement.jsx`) sobre tabla `news`.
  - ABM de Actividades (`ActivitiesManagement.jsx`) sobre tabla `activities`.
  - ABM de Charlas (`TalksManagement.jsx`) sobre tabla `talks`.
  - ABM de Usuarios y Roles (`UserManagement.jsx`) sobre tabla `profiles`.
  - GestiÃ³n de Comunidad WhatsApp (`WhatsAppManagement.jsx`).
  - GestiÃ³n de Inscriptos al Taller (`WorkshopManagement.jsx`).
  - Visor simulado de Discord (`DiscordLive.jsx`).
- **Estado:** Funcional en sus mÃ³dulos CRUD de Supabase; cosmÃ©tico en estadÃ­sticas y Discord.
- **Evidencia en cÃ³digo:** `src/components/Dashboard.jsx` L104-139.

---

### FUNC-31: GestiÃ³n de Solicitudes de Comunidad WhatsApp
- **UbicaciÃ³n:** `/dashboard` (pestaÃ±a Comunidad) y `/admin`. Archivo: `src/components/WhatsAppManagement.jsx`.
- **DescripciÃ³n:** Interfaz para que los directivos del centro revisen las admisiones estudiantiles recibidas desde `/comunidad`. Permite:
  - Filtrar por estado: Pendientes, Aprobados, Rechazados.
  - Ver nombre, legajo, sede, telÃ©fono y fecha.
  - Visualizar el archivo PDF del certificado subido mediante enlace firmado (`createSignedUrl` de Supabase Storage con validez de 10 minutos).
  - Aprobar o rechazar la solicitud.
  - BotÃ³n de acciÃ³n para abrir WhatsApp Web con mensaje de bienvenida preformateado (`https://wa.me/...`).
- **Estado:** Funcional.
- **Evidencia en cÃ³digo:** `src/components/WhatsAppManagement.jsx` L30-68, L70-74.

---

### FUNC-32: Visualizador de Discord en Vivo (Mock)
- **UbicaciÃ³n:** `/dashboard` (pestaÃ±a Discord). Archivo: `src/components/DiscordLive.jsx`.
- **DescripciÃ³n:** Componente que simula actividad en vivo del servidor de Discord de la carrera. Contiene un listado de canales (`#introduccion-programacion`, `#matematica-discreta`) y genera con `setTimeout` mensajes falsos de prueba con nombres inventados.
- **Estado:** **Simulado / Mock no funcional.**
- **Evidencia en cÃ³digo:** `src/components/DiscordLive.jsx` L13-56.

---

### FUNC-33: Asistente Gemini AI y Base de Conocimiento Estructurada
- **UbicaciÃ³n:** CÃ³digo backend/servicio no invocado en UI. Archivos: `src/services/geminiService.js`, `src/data/knowledgeBase.json`.
- **DescripciÃ³n:** ImplementaciÃ³n completa de una clase `GeminiService` con llamadas a la API de Google Gemini (`@google/genai` o API REST) para procesar consultas de estudiantes utilizando una base de conocimiento en JSON (`knowledgeBase.json`). El archivo JSON posee informaciÃ³n fidedigna sobre la estructura de la carrera, tutorÃ­as acadÃ©micas, objetivos del centro, autoridades y respuestas a preguntas frecuentes de trÃ¡mites.
- **Estado:** **HuÃ©rfano en el cÃ³digo actual.** No se encuentra montado en ninguna vista visible. En `App.jsx` lÃ­nea 120 existe el comentario `{/* Mascot - aparece en todas las pÃ¡ginas excepto dashboard */}` evidenciando que se planeÃ³ un widget o mascota interactiva que no se llegÃ³ a integrar o fue retirada.
- **Valor potencial:** Muy alto para el rescate del contenido informativo de `knowledgeBase.json`.
- **Evidencia en cÃ³digo:** `src/services/geminiService.js` L4-12, L106-115, L199-245; `src/data/knowledgeBase.json` L1-324.

---

### FUNC-34: Servicios de IntegraciÃ³n en Desuso (MercadoPago y Google Calendar)
- **UbicaciÃ³n:** `src/services/mercadoPagoService.js`, `src/services/googleCalendar.js`, `src/hooks/useGoogleCalendar.js`.
- **DescripciÃ³n:** MÃ³dulos de cÃ³digo desarrollados para procesar pagos con Mercado Pago SDK e interactuar bidireccionalmente con Google Calendar API (crear, listar y borrar eventos).
- **Estado:** **CÃ³digo muerto / No utilizado.** No existe ningÃºn componente en la web que invoque estas funciones.
- **Evidencia en cÃ³digo:** Ninguna referencia fuera de los propios archivos de declaraciÃ³n.