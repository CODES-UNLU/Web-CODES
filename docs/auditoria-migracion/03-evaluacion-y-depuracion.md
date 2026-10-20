# 03. EvaluaciÃ³n CrÃ­tica del Valor Real y DepuraciÃ³n Funcional

Este documento clasifica rigurosamente cada funcionalidad detectada en el sitio antiguo segÃºn su valor real para la comunidad estudiantil, especialmente para ingresantes y alumnos de primer aÃ±o.

---

## 1. Criterios de ClasificaciÃ³n

- **MANTENER:** Resuelve una necesidad clara y aporta valor verificado con bajo costo de mantenimiento.
- **MEJORAR:** Es conceptualmente Ãºtil, pero su diseÃ±o, accesibilidad o implementaciÃ³n tÃ©cnica actual presenta fallas serias.
- **FUSIONAR:** Su objetivo es vÃ¡lido pero compite o se solapa con otra funcionalidad del sitio.
- **SIMPLIFICAR:** Su complejidad tÃ©cnica actual (APIs, JS pesado, bases de datos) puede resolverse de forma mÃ¡s rÃ¡pida y confiable como contenido estÃ¡tico o enlace externo.
- **ELIMINAR (PROPUESTA):** No responde a las necesidades de los estudiantes, contiene datos ficticios, estÃ¡ rota o genera riesgos de seguridad.
- **INVESTIGAR:** Requiere validaciÃ³n con la comisiÃ³n directiva del centro para definir su vigencia operativa.

---

## 2. Matriz General de EvaluaciÃ³n

| ID | Funcionalidad | CategorÃ­a | Confianza | JustificaciÃ³n Principal |
| :--- | :--- | :--- | :--- | :--- |
| **FN-01** | Hero y Propuesta de Valor | **MEJORAR** | Alta | RediseÃ±ar el mensaje para orientar al ingresante; corregir botones y CTAs rotos. |
| **FN-02** | BotÃ³n "ConocÃ© Nuestros Grupos" | **ELIMINAR** | Alta | Conduce a una pantalla rota "En ConstrucciÃ³n". Se reemplaza por el directorio unificado. |
| **FN-03** | Calendario AcadÃ©mico UNLu | **MEJORAR** | Alta | Datos 100% reales y vitales para los alumnos, pero la grilla mensual colapsa en mobile. Convertir a lista cronolÃ³gica. |
| **FN-04** | Registro WhatsApp con PDF/IP | **ELIMINAR (PROPUESTA)** | Alta | Punitivo, hostil y tÃ©cnicamente desmedido (rastrea IP, 2MB PDF, banea alumnos). |
| **FN-05** | Agenda de Eventos | **FUSIONAR** | Alta | Unificar con Charlas y Talleres en una sola secciÃ³n de Actividades. |
| **FN-06** | Banco de Recursos (Herramientas) | **ELIMINAR (PROPUESTA)** | Alta | 980 lÃ­neas de software genÃ©rico externo (Docker, Vim) que no resuelven la cursada de la UNLu. |
| **FN-07** | Blog / Novedades | **SIMPLIFICAR** | Alta | Reemplazar cliente Supabase en runtime por Astro Content Collections estÃ¡ticas y rÃ¡pidas. |
| **FN-08** | Formulario "Sumate / Colaborar" | **FUSIONAR** | Alta | Unificar con "Proyectos Reales" en una Ãºnica convocatoria de talento/voluntariado. |
| **FN-09** | Charlas Grabadas (YouTube) | **MANTENER** | Alta | Contenido acadÃ©mico e institucional de gran valor real. Optimizar embeds con `lite-youtube`. |
| **FN-10** | Talleres y Workshops | **FUSIONAR** | Alta | Integrar a la secciÃ³n unificada de Actividades. |
| **FN-11** | Proyectos Reales | **FUSIONAR** | Alta | Integrar con Colaborar. |
| **FN-12** | Sistema de Venta de Rifas | **INVESTIGAR** | Media | Evaluar si las rifas son periÃ³dicas o fueron un evento Ãºnico de financiamiento para eventos pasados. |
| **FN-13** | Selector Interactivo de Rifas | **INVESTIGAR** | Media | Depende de la decisiÃ³n de mantener o externalizar la venta de rifas. |
| **FN-14** | Modal Acceso Rifa -> WhatsApp | **ELIMINAR** | Alta | El acceso a los grupos de la carrera debe ser pÃºblico y universal, nunca transaccional. |
| **FN-15** | Panel Admin de Rifas (`/admin`) | **ELIMINAR (PROPUESTA)** | Alta | Brecha de seguridad crÃ­tica: sin autenticaciÃ³n, expone datos personales en el cliente. |
| **FN-16** | Dashboard MÃ©tricas (`/dashboard`) | **ELIMINAR (PROPUESTA)** | Alta | Sin autenticaciÃ³n, datos incompletos. Debe gestionarse de forma interna fuera del sitio pÃºblico. |
| **FN-17** | NewsCarousel en Home | **ELIMINAR** | Alta | Ya estaba comentado en el cÃ³digo. Genera saltos de layout e interactividad innecesaria. |
| **FN-18** | Floating Action Button (FAB) | **SIMPLIFICAR** | Alta | Reemplazar el botÃ³n flotante pesado por un bloque de ayuda fijo y visible en el footer y menÃº. |
| **FN-19** | SecciÃ³n "Sobre Nosotros" | **MANTENER** | Alta | Necesaria para que el estudiante entienda quÃ© es CODES, quiÃ©nes lo integran y quÃ© rol cumple. |
| **FN-20** | MÃ©tricas Sociales de Impacto | **SIMPLIFICAR** | Alta | Evitar contadores dinÃ¡micos ficticios; mostrar logros concretos de la gestiÃ³n estudiantil. |
| **FN-21** | Testimonios de Estudiantes | **ELIMINAR (PROPUESTA)** | Alta | Citas genÃ©ricas de relleno tipo landing comercial SaaS. Poco aporte institucional. |
| **FN-22** | Transparencia Financiera | **ELIMINAR (PROPUESTA)** | Alta | Datos contables 100% ficticios generados por IA (mencionan "cuotas de socios"). Links a PDFs rotos. |
| **FN-23** | GalerÃ­a Congreso CACIC | **SIMPLIFICAR** | Alta | 27 fotos no optimizadas de 2025. Convertir a una reseÃ±a fotogrÃ¡fica ligera dentro de novedades. |
| **FN-24** | AcordeÃ³n de FAQs | **MEJORAR** | Alta | Contiene la informaciÃ³n mÃ¡s valiosa de trÃ¡mites y reglamentos. Debe subir al menÃº principal como "GuÃ­as / TrÃ¡mites". |
| **FN-25** | Buscador Predictivo de FAQs | **MEJORAR** | Alta | Muy Ãºtil si busca sobre contenido real; implementable con Pagefind o script estÃ¡tico ultraligero. |
| **FN-26** | Footer Institucional | **MEJORAR** | Alta | Corregir enlaces rotos, agregar horarios de atenciÃ³n del centro y ubicaciÃ³n fÃ­sica en sedes. |
| **FN-27** | Navbar Responsive (16 links) | **MEJORAR** | Alta | Reducir drÃ¡sticamente de 16 Ã­tems a 5 o 6 secciones orientadas a tareas del alumno. |
| **FN-28** | Selector Tema Claro / Oscuro | **MANTENER** | Alta | Buena prÃ¡ctica de accesibilidad. Implementar con script inline estÃ¡ndar sin flicker. |
| **FN-29** | MicrointeracciÃ³n Cursor | **ELIMINAR** | Alta | CÃ³digo muerto en desuso; empeora rendimiento y usabilidad en dispositivos tÃ¡ctiles. |
| **FN-30** | Filtro de Eventos por Tipo | **SIMPLIFICAR** | Media | Reemplazar lÃ³gica pesada en cliente por filtros semÃ¡nticos simples. |
| **FN-31** | Descarga ICS Calendario | **MANTENER** | Media | Permite agregar fechas clave de la UNLu a Google Calendar. Gran utilidad para no olvidar finales. |
| **FN-32** | Filtro de BÃºsqueda Recursos | **ELIMINAR** | Alta | Asociado a la secciÃ³n de herramientas externas descartada. |
| **FN-33** | Vista Detalle Novedad | **MANTENER** | Alta | Lectura limpia de comunicados y noticias. Generada estÃ¡ticamente en build time por Astro. |
| **FN-34** | SincronizaciÃ³n Google Sheets | **SIMPLIFICAR** | Media | Los datos estÃ¡ticos del centro deben compilarse en build time; evitar llamadas frÃ¡giles en runtime. |
| **FN-35** | Servicio Resend de Emails | **SIMPLIFICAR** | Media | Mantener solo si se necesita formulario de contacto; preferir email directo de mesa de ayuda o Formspree. |
| **FN-36** | Servicio Supabase DB | **SIMPLIFICAR** | Alta | El 95% del sitio puede ser estÃ¡tico. No justificar base de datos para mostrar informaciÃ³n institucional. |
| **FN-37** | Cliente PDF.js en Navegador | **ELIMINAR** | Alta | LibrerÃ­a de 2 MB innecesaria para un sitio de centro de estudiantes. |
| **FN-38** | DetecciÃ³n IP Externa | **ELIMINAR** | Alta | InvasiÃ³n injustificada de privacidad para unirse a grupos de estudio. |
| **FN-39** | ExpoUNLu | **ELIMINAR (PROPUESTA)** | Alta | Vista huÃ©rfana de un evento puntual con botÃ³n deshabilitado. |
| **FN-40** | Modales MÃºltiples de InteracciÃ³n | **SIMPLIFICAR** | Alta | Reemplazar popups y modales invasivos por navegaciÃ³n fluida y pÃ¡ginas dedicadas. |

---

## 3. JustificaciÃ³n Detallada de Decisiones CrÃ­ticas

### A. Funcionalidades a ELIMINAR

#### 1. Registro de WhatsApp con PDF y Rastreo de IP (`FN-04`, `FN-37`, `FN-38`)
- **JustificaciÃ³n:** Viola los principios bÃ¡sicos de accesibilidad, empatÃ­a y privacidad. Pide un documento institucional formal para una acciÃ³n que deberÃ­a ser abierta a toda la comunidad estudiantil.
- **Riesgo de eliminar:** Cero riesgo de pÃ©rdida de informaciÃ³n acadÃ©mica. Al contrario: reduce el abandono del 100% de estudiantes que no tienen el PDF a mano o que son bloqueados por error.
- **Alternativa propuesta:** Directorio abierto y transparente de grupos de WhatsApp organizados por aÃ±o, materia y sede, con reglas de convivencia y moderaciÃ³n humana.

#### 2. Transparencia con Datos Ficticios (`FN-22`)
- **JustificaciÃ³n:** `Transparencia.jsx` muestra balances financieros generados con IA con conceptos inaplicables a la universidad pÃºblica argentina (ej. "cobro de cuotas a socios"). AdemÃ¡s, los botones de descarga de memorias y balances apuntan a URLs vacÃ­as (`href="#"`).
- **Riesgo de eliminar:** Ninguno. Mantener datos falsos o rotos destruye la confianza institucional en el centro de estudiantes.
- **Alternativa propuesta:** Si el centro rinde cuentas pÃºblicas, publicar actas y balances reales en formato PDF descargable en una secciÃ³n institucional sobria.

#### 3. Banco de Recursos de Software GenÃ©rico (`FN-06`, `FN-32`)
- **JustificaciÃ³n:** Enlaces a Docker, Kafka, Vim y Dribbble no resuelven las dudas acadÃ©micas de un alumno que estÃ¡ cursando Algoritmos o MatemÃ¡tica.
- **Riesgo de eliminar:** MÃ­nimo. Dichas herramientas son pÃºblicas y ampliamente conocidas en la web.
- **Alternativa propuesta:** Reemplazar por un verdadero "Banco AcadÃ©mico": programas de materias oficiales, modelos de parciales, apuntes colaborativos de la UNLu y guÃ­as de cÃ¡tedra.

#### 4. Panel de AdministraciÃ³n Expuesto (`FN-15`, `FN-16`)
- **JustificaciÃ³n:** La existencia de `/admin` y `/dashboard` sin contraseÃ±as ni autenticaciÃ³n JWT expone listas de legajos, telÃ©fonos y comprobantes de transferencias bancarias de estudiantes.
- **Riesgo:** Alto riesgo legal y de seguridad si se mantiene en el frontend pÃºblico de GitHub Pages.
- **AcciÃ³n:** Desacoplar del frontend pÃºblico de forma inmediata.

---

### B. Funcionalidades a MANTENER y MEJORAR

#### 1. Calendario AcadÃ©mico de la UNLu (`FN-03`, `FN-31`)
- **Por quÃ© mantener:** Las fechas de inscripciÃ³n a materias, turnos de finales, recesos y mesas de examen son la informaciÃ³n que mÃ¡s consultan los estudiantes durante todo el aÃ±o lectivo.
- **Problema actual:** `Calendar.jsx` dibuja una matriz rÃ­gida de 7x6 celdas que en pantallas de celular se comprime, corta los textos y desborda horizontalmente.
- **Mejora en Astro:**
  - En desktop: Vista de mes o lista.
  - En mobile: Vista vertical tipo timeline / lista de eventos ordenados por fecha con badges visuales ("Finales", "InscripciÃ³n", "Feriado").
  - BotÃ³n para aÃ±adir fechas clave al calendario personal (.ics / Google Calendar).

#### 2. GuÃ­as de TrÃ¡mites y Reglamentos Universitarios (`FN-24`, `FN-25`)
- **Por quÃ© mantener:** La base de conocimiento (`knowledgeBase.json`) tiene datos de alto valor real: cÃ³mo solicitar el cambio de plan de estudio, requisitos de regularidad (aprobar 2 materias por aÃ±o), rÃ©gimen de correlatividades y contactos de departamentos.
- **Problema actual:** EstÃ¡ oculta al fondo de la pÃ¡gina de inicio dentro de un acordeÃ³n colapsado.
- **Mejora en Astro:** Convertirla en la secciÃ³n protagonista del sitio (`/tramites` o `/guias`), con URLs individuales limpias para cada trÃ¡mite para que puedan compartirse directamente por WhatsApp cuando un estudiante pregunta.

#### 3. Charlas y Conferencias Grabadas (`FN-09`)
- **Por quÃ© mantener:** Representa el trabajo y la trayectoria formativa del centro de estudiantes (charlas con profesionales del sector IT).
- **Mejora en Astro:** Uso del componente optimizado `astro-embed-youtube` o `lite-youtube`, evitando cargar los scripts pesados de Google hasta que el usuario hace clic en reproducir.