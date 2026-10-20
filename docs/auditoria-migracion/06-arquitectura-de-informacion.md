# 06. Propuesta de Arquitectura de InformaciÃ³n (IA) y Nuevo Sitemap

Este documento define la reestructuraciÃ³n completa del contenido para el nuevo sitio en Astro, reemplazando la navegaciÃ³n institucional fragmentada por un modelo orientado a tareas, dudas frecuentes y momentos clave del estudiante.

---

## 1. Principios de la Nueva Arquitectura

1. **OrientaciÃ³n al Estudiante (Task-Oriented):** La informaciÃ³n se organiza por lo que el alumno necesita hacer o resolver, no por secretarÃ­as ni tecnologÃ­as.
2. **Prioridad Ingresante (Mobile-First Onboarding):** Un camino rÃ¡pido, visible y acogedor para quien reciÃ©n entra a la universidad y desconoce la jerga administrativa.
3. **NavegaciÃ³n Limpia y Predecible:** MÃ¡ximo 5 o 6 secciones principales en el Header, reduciendo la sobrecarga de 16 links a un Ã¡rbol intuitivo.
4. **Respuestas con PrÃ³ximo Paso Claro:** Cada guÃ­a o artÃ­culo termina indicando el formulario exacto, la oficina fÃ­sica o el canal de consulta correspondiente.

---

## 2. Nuevo Sitemap Propuesto

```
/ (PÃ¡gina de Inicio - Enrutador de necesidades y accesos directos)
â”œâ”€â”€ /ingresantes/ (Portal de Bienvenida: SIU GuaranÃ­, 1Â° aÃ±o, sedes)
â”œâ”€â”€ /tramites/ (GuÃ­as paso a paso de gestiones universitarias)
â”‚   â”œâ”€â”€ /tramites/boleto-estudiantil/
â”‚   â”œâ”€â”€ /tramites/regularidad-y-readmision/
â”‚   â”œâ”€â”€ /tramites/cambio-de-plan/
â”‚   â””â”€â”€ /tramites/constancias-y-certificados/
â”œâ”€â”€ /calendario/ (Calendario AcadÃ©mico UNLu con timeline y descarga .ics)
â”œâ”€â”€ /comunidad/ (Directorio de canales oficiales y grupos de WhatsApp)
â”‚   â”œâ”€â”€ Grupos por Materia / AÃ±o
â”‚   â”œâ”€â”€ Canal Informativo de DifusiÃ³n
â”‚   â””â”€â”€ Discord / Espacio de Estudio
â”œâ”€â”€ /actividades/ (UnificaciÃ³n de Eventos, Charlas grabadas y Talleres)
â”‚   â”œâ”€â”€ /actividades/proximas/
â”‚   â””â”€â”€ /actividades/videoteca/ (Charlas de YouTube optimizadas)
â””â”€â”€ /nosotros/ (QuiÃ©nes somos, quÃ© hace el centro, sede fÃ­sica, contacto y sumate)
    â”œâ”€â”€ /nosotros/autoridades-y-secretarias/
    â”œâ”€â”€ /nosotros/sumate/ (Voluntariado y proyectos de software)
    â””â”€â”€ /nosotros/contacto/ (UbicaciÃ³n fÃ­sica, guardia y canales)
```

---

## 3. EspecificaciÃ³n de Secciones Principales

### SecciÃ³n 1: Portal Ingresantes (`/ingresantes`)
- **Objetivo:** Recibir al estudiante nuevo, bajar la ansiedad del primer dÃ­a y guiarlo paso a paso en su incorporaciÃ³n a la vida universitaria.
- **PÃºblico:** Alumnos que estÃ¡n cursando el ingreso o empiezan su primer cuatrimestre.
- **Preguntas que responde:**
  - Â¿CÃ³mo creo y uso mi cuenta del SIU GuaranÃ­?
  - Â¿A quÃ© materias me tengo que anotar en el primer cuatrimestre?
  - Â¿DÃ³nde queda mi aula en LujÃ¡n, Chivilcoy o San Miguel?
  - Â¿CÃ³mo consigo los apuntes y dÃ³nde estÃ¡ la mesita de CODES?
  - Â¿CÃ³mo entro al grupo de WhatsApp de mis compaÃ±eros?
- **Contenido a incluir:**
  - GuÃ­a visual del SIU GuaranÃ­ (con capturas de pantalla reales).
  - Listado de materias de primer aÃ±o con correlatividades iniciales explicadas.
  - Enlace directo al grupo de WhatsApp de ingresantes.
  - Plano simple o referencias de acceso a las sedes.
- **Funcionalidades absorbidas:** Reemplaza la pantalla rota `/grupos` y el flujo punitivo de `/comunidad`.
- **Prioridad:** CRÃTICA (MVP).

---

### SecciÃ³n 2: TrÃ¡mites y Gestiones (`/tramites`)
- **Objetivo:** Desmitificar la burocracia universitaria ofreciendo instructivos claros y directos.
- **PÃºblico:** Estudiantes de todos los aÃ±os lectivos.
- **Preguntas que responde:**
  - Â¿CÃ³mo activo el Boleto Estudiantil en mi tarjeta SUBE?
  - Â¿QuÃ© hago si desaprobÃ© dos aÃ±os seguidos y perdÃ­ la regularidad?
  - Â¿CÃ³mo solicito equivalencias si vengo de otra carrera o universidad?
  - Â¿CÃ³mo pido cambio de plan de estudios a la casilla `tramitesunlu@unlu.edu.ar`?
- **Contenido a incluir:**
  - Fichas individuales por trÃ¡mite con: Requisitos, Fechas lÃ­mites, Paso a paso y Enlace al formulario o email oficial.
- **Funcionalidades absorbidas:** Absorbe y jerarquiza los datos de `FAQ.jsx` y `src/data/knowledgeBase.json`.
- **Prioridad:** ALTA (MVP).

---

### SecciÃ³n 3: Calendario AcadÃ©mico (`/calendario`)
- **Objetivo:** Mantener a la comunidad informada sobre las fechas crÃ­ticas oficiales de la UNLu.
- **PÃºblico:** Toda la comunidad acadÃ©mica.
- **Preguntas que responde:**
  - Â¿CuÃ¡ndo abren y cierran las inscripciones a materias?
  - Â¿QuÃ© semanas son los llamados a exÃ¡menes finales?
  - Â¿CuÃ¡ndo es el receso de invierno o feriados no laborables?
- **Contenido a incluir:**
  - Vista adaptativa: Timeline vertical en mÃ³viles y grilla mensual en desktop.
  - Filtros semÃ¡nticos rÃ¡pidos: "Inscripciones", "ExÃ¡menes Finales", "Feriados".
  - BotÃ³n "AÃ±adir a mi Google Calendar / Descargar .ics".
- **Funcionalidades absorbidas:** `Calendar.jsx` (`FN-03`, `FN-31`).
- **Prioridad:** CRÃTICA (MVP).

---

### SecciÃ³n 4: Comunidad y Grupos (`/comunidad`)
- **Objetivo:** Facilitar la conexiÃ³n entre pares y el acceso a los canales legÃ­timos de estudio.
- **PÃºblico:** Estudiantes que buscan grupos de estudio de sus materias o canales de avisos urgentes.
- **Preguntas que responde:**
  - Â¿Hay un grupo de WhatsApp de la materia que estoy cursando?
  - Â¿DÃ³nde avisa el centro de estudiantes si se suspenden clases por paro o temporal?
- **Contenido a incluir:**
  - Directorio ordenado por aÃ±o de la carrera con enlaces directos a grupos de WhatsApp moderados.
  - Enlace al canal unidireccional de WhatsApp / Telegram de avisos oficiales de CODES.
  - Reglas de convivencia de los grupos (respeto, evitar spam comercial).
- **Funcionalidades absorbidas:** Reemplaza `WhatsAppRegistration.jsx` eliminando barreras tÃ©cnicas.
- **Prioridad:** ALTA (MVP).

---

### SecciÃ³n 5: Actividades y Charlas (`/actividades`)
- **Objetivo:** Difundir la oferta extracurricular acadÃ©mica y profesional del centro.
- **PÃºblico:** Estudiantes con interÃ©s en formaciÃ³n complementaria e inserciÃ³n laboral en IT.
- **Preguntas que responde:**
  - Â¿QuÃ© talleres se dictan este mes?
  - Â¿DÃ³nde puedo ver la grabaciÃ³n de la charla de Ciberseguridad o Desarrollo Web?
- **Contenido a incluir:**
  - Agenda de prÃ³ximos talleres con enlace a inscripciÃ³n.
  - Videoteca de charlas pasadas organizadas por tÃ³picos (grabadas en YouTube).
- **Funcionalidades absorbidas:** Fusiona `/eventos` (`FN-05`), `/charlas` (`FN-09`) y `/talleres` (`FN-10`).
- **Prioridad:** MEDIA (Segunda Etapa).

---

### SecciÃ³n 6: El Centro de Estudiantes (`/nosotros`)
- **Objetivo:** Brindar transparencia institucional, legitimidad gremial y canales de contacto fÃ­sico y digital.
- **PÃºblico:** Estudiantes, docentes y comunidad universitaria.
- **Preguntas que responde:**
  - Â¿QuiÃ©nes integran la comisiÃ³n de CODES?
  - Â¿DÃ³nde estÃ¡ la oficina fÃ­sica del centro y en quÃ© horarios hay alguien para consultar?
  - Â¿CÃ³mo puedo sumarme a participar o ayudar en proyectos?
- **Contenido a incluir:**
  - MisiÃ³n del centro de estudiantes.
  - UbicaciÃ³n fÃ­sica de la mesita en Sede Central LujÃ¡n y San Miguel con horarios de guardia.
  - Formulario unificado de convocatoria ("Sumate a CODES").
- **Funcionalidades absorbidas:** Fusiona `/sobre-nosotros` (`FN-19`), `/colaborar` (`FN-08`) y `/proyectos-reales` (`FN-11`).
- **Prioridad:** ALTA (MVP).

---

## 4. Estructura de la Nueva PÃ¡gina de Inicio (Home)

La pÃ¡gina de inicio no debe ser una vitrina de efectos visuales, sino un **tablero de orientaciÃ³n rÃ¡pida**:

```
+-----------------------------------------------------------------------------------+
| HEADER: Logo CODES++ | Ingresantes | TrÃ¡mites | Calendario | Comunidad | Nosotros |
+-----------------------------------------------------------------------------------+
| HERO ORIENTADOR:                                                                  |
| "Â¿QuÃ© necesitÃ¡s resolver hoy?"                                                   |
| [ ðŸš€ Soy Ingresante ]   [ ðŸ“… Calendario AcadÃ©mico ]   [ ðŸ’¬ Grupos de WhatsApp ]   |
+-----------------------------------------------------------------------------------+
| BANNER DE ESTADO ACTUAL:                                                          |
| "ðŸ“¢ AtenciÃ³n: InscripciÃ³n a finales abierta hasta el viernes 18:00 hs (SIU)"     |
+-----------------------------------------------------------------------------------+
| ACCESOS DIRECTOS FRECUENTES (Cards claras):                                       |
| - Boleto Estudiantil SUBE                                                         |
| - PÃ©rdida de Regularidad y ReadmisiÃ³n                                             |
| - GuÃ­a de activaciÃ³n SIU GuaranÃ­                                                 |
| - Horarios y Sedes                                                                |
+-----------------------------------------------------------------------------------+
| PRÃ“XIMAS FECHAS CLAVE (Timeline de los prÃ³ximos 3 eventos del calendario)        |
+-----------------------------------------------------------------------------------+
| ÃšLTIMAS NOVEDADES (3 artÃ­culos generados estÃ¡ticamente)                           |
+-----------------------------------------------------------------------------------+
| FOOTER: UbicaciÃ³n de la mesa | Horarios de atenciÃ³n | Contacto oficial | Redes    |
+-----------------------------------------------------------------------------------+
```