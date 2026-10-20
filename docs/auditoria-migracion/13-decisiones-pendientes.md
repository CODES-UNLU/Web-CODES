# 13. Decisiones Pendientes de AprobaciÃ³n Institucional

Este documento reÃºne las **8 decisiones estratÃ©gicas de producto, experiencia de usuario y arquitectura tÃ©cnica** que la conducciÃ³n del Centro de Estudiantes CODES++ debe evaluar y aprobar formalmente antes de comenzar la fase de desarrollo.

Para cada decisiÃ³n se presentan alternativas concretas, sus ventajas, desventajas, impacto operativo y una recomendaciÃ³n fundamentada. **Ninguna de estas propuestas debe considerarse una decisiÃ³n cerrada.**

---

## DecisiÃ³n 1: PolÃ­tica de Acceso y ModeraciÃ³n a Grupos de WhatsApp (`FN-04`)

- **Contexto:** La web actual exige subir un PDF del Certificado de Alumno Regular, rastrea la IP y bloquea tras 3 fallos (`WhatsAppRegistration.jsx`).
- **Problema:** Excluye a ingresantes que no tienen certificado y genera una pÃ©sima primera impresiÃ³n.

### Alternativas de SoluciÃ³n:
- **OpciÃ³n A (Directorio PÃºblico y Abierto):** Publicar enlaces directos a los grupos de WhatsApp de cada aÃ±o y materia en una pÃ¡gina `/comunidad`, acompaÃ±ados de un cÃ³digo de convivencia visible.
  - *Ventajas:* Acceso instantÃ¡neo en 1 clic desde el celular; cero fricciÃ³n; cero costo de mantenimiento tÃ©cnico.
  - *Desventajas:* Mayor exposiciÃ³n a spam o bots si no hay moderadores activos en los grupos de WhatsApp.
- **OpciÃ³n B (Grupo de Bienvenida / Sala de Espera):** Un Ãºnico enlace pÃºblico a un "Grupo de Bienvenida" donde administradores humanos verifican la condiciÃ³n de alumno y derivan a los grupos especÃ­ficos.
  - *Ventajas:* ModeraciÃ³n humana simple sin necesidad de programar validaciones en la web.
  - *Desventajas:* Requiere disponibilidad constante de personas para responder y enviar enlaces manuales.
- **OpciÃ³n C (Reconstruir ValidaciÃ³n Simplificada sin PuniciÃ³n):** Formulario web bÃ¡sico (solo legajo y nombre) que valide contra un listado sin rastreo de IP ni bloqueo.
  - *Ventajas:* Filtro intermedio automatizado.
  - *Desventajas:* Requiere mantener una base de datos con padrÃ³n de alumnos (lo cual plantea dudas de privacidad institucional).

> **RecomendaciÃ³n del Equipo Auditor:** **OpciÃ³n A** para grupos de cursada general, respaldada con la **OpciÃ³n B** para grupos sensibles. Los grupos de WhatsApp cuentan nativamente con la opciÃ³n "Aprobar nuevos participantes", lo que resuelve la moderaciÃ³n dentro de la propia app sin necesidad de burocracia web.

---

## DecisiÃ³n 2: Destino de la Venta de Rifas y Financiamiento (`FN-12`, `FN-13`, `FN-15`)

- **Contexto:** El sitio viejo implementa un selector de rifas interactivo conectado a Google Apps Script y Supabase (`RafflePage.jsx`, `AdminPage.jsx`).
- **Problema:** Desplegar en GitHub Pages un sistema transaccional con manejo de comprobantes de pago introduce riesgos de seguridad y alta complejidad de mantenimiento sin un backend robusto.

### Alternativas de SoluciÃ³n:
- **OpciÃ³n A (Externalizar a Plataforma Especializada o Formulario):** Cuando haya rifa activa, publicar una landing informativa en la web con un botÃ³n que dirija a un formulario de Google Forms / Mercado Pago o plataforma de sorteos.
  - *Ventajas:* Cero riesgo de seguridad en la web; cero cÃ³digo de backend a mantener; el sitio se mantiene 100% estÃ¡tico.
  - *Desventajas:* La experiencia de compra no es 100% personalizada con la marca de CODES.
- **OpciÃ³n B (Reconstruir MÃ³dulo de Rifas en Backend Separado):** Desarrollar un microservicio en Vercel/Cloudflare Workers con autenticaciÃ³n real para gestionar la venta.
  - *Ventajas:* Experiencia in-app completa y control total de la base de datos.
  - *Desventajas:* Alto costo de desarrollo y mantenimiento; desvÃ­a esfuerzos del objetivo principal (atenciÃ³n al ingresante).
- **OpciÃ³n C (Discontinuar la Funcionalidad en la Web):** Eliminar toda referencia a rifas de la web y gestionarlas por redes sociales y mesita presencial.
  - *Ventajas:* Simplicidad absoluta.
  - *Desventajas:* Se pierde la web como canal de venta si la rifa es una fuente de ingresos importante.

> **RecomendaciÃ³n del Equipo Auditor:** **OpciÃ³n A**. La web institucional debe enfocarse en resolver la vida acadÃ©mica; las campaÃ±as de recaudaciÃ³n temporal funcionan de manera mÃ¡s Ã¡gil y segura mediante formularios externos auditables.

---

## DecisiÃ³n 3: Reemplazo del "Banco de Recursos" (`FN-06`)

- **Contexto:** `Resources.jsx` contiene 980 lÃ­neas de enlaces externos a Docker, Vim, Illustrator, CSS-Tricks, etc.
- **Problema:** No resuelve necesidades acadÃ©micas de los estudiantes de la UNLu y duplica informaciÃ³n que cualquier alumno encuentra en un buscador.

### Alternativas de SoluciÃ³n:
- **OpciÃ³n A (EliminaciÃ³n Completa y CreaciÃ³n del Repositorio AcadÃ©mico):** Descartar las herramientas genÃ©ricas y construir una secciÃ³n de apuntes, programas de materias oficiales y exÃ¡menes modelo organizados por aÃ±o de la carrera.
  - *Ventajas:* Resuelve una necesidad crÃ­tica de los estudiantes de 1Â° a 5Â° aÃ±o; posiciona al centro como referente acadÃ©mico.
  - *Desventajas:* Requiere que la comisiÃ³n recopile y clasifique archivos reales (Google Drive institucional).
- **OpciÃ³n B (Conservar una SecciÃ³n Reducida de Software de la Carrera):** Mantener solo enlaces a software requerido estrictamente por las cÃ¡tedras (ej. entorno de desarrollo C/C++, simuladores de circuitos lÃ³gicos, IDEs oficiales).
  - *Ventajas:* Ayuda a configurar la computadora a ingresantes sin experiencia tÃ©cnica previa.
  - *Desventajas:* Requiere actualizaciÃ³n constante segÃºn lo que pida cada profesor.

> **RecomendaciÃ³n del Equipo Auditor:** **OpciÃ³n A combinada con una guÃ­a mÃ­nima de OpciÃ³n B**: Enfocar los recursos al 90% en material acadÃ©mico de la UNLu y un 10% en "Entorno de Desarrollo para 1Â° AÃ±o".

---

## DecisiÃ³n 4: Nivel de Interactividad del Calendario AcadÃ©mico (`FN-03`, `FN-31`)

- **Contexto:** El calendario actual es una matriz de 7 columnas que colapsa en celulares.
- **Problema:** El calendario es la secciÃ³n mÃ¡s consultada pero la mÃ¡s difÃ­cil de usar en mobile.

### Alternativas de SoluciÃ³n:
- **OpciÃ³n A (Timeline Vertical Adaptativo + Descarga .ics):** En mÃ³viles se muestra una lista vertical cronolÃ³gica agrupada por meses con tarjetas claras y filtros por categorÃ­a ("Finales", "Inscripciones"). BotÃ³n para aÃ±adir a Google Calendar.
  - *Ventajas:* Perfectamente legible en pantallas chicas; carga instantÃ¡nea; 0 KB de librerÃ­as externas.
  - *Desventajas:* En pantallas de escritorio no se visualiza el "mes completo en cuadrÃ­cula" a menos que se implemente una vista alternativa en CSS.
- **OpciÃ³n B (Grilla Interactiva Completa con Selector de Vistas):** Desarrollar un componente interactivo con vista mensual, semanal y de agenda.
  - *Ventajas:* Muy vistoso para usuarios que navegan desde laptops o computadoras de escritorio.
  - *Desventajas:* Mayor complejidad de cÃ³digo; requiere pruebas exhaustivas en mÃºltiples resoluciones.

> **RecomendaciÃ³n del Equipo Auditor:** **OpciÃ³n A**. MÃ¡s del 80% del trÃ¡fico estudiantil proviene de smartphones. Un timeline vertical es la soluciÃ³n mÃ¡s rÃ¡pida, accesible y confiable.

---

## 5. DecisiÃ³n 5: Desacoplamiento del Panel de AdministraciÃ³n (`FN-15`, `FN-16`)

- **Contexto:** `/admin` y `/dashboard` conviven en el mismo repositorio que la pÃ¡gina pÃºblica.
- **Problema:** Mantener rutas administrativas en un sitio estÃ¡tico de GitHub Pages genera confusiÃ³n y riesgos de fuga de datos si se comete un error de configuraciÃ³n en rutas pÃºblicas.

### Alternativas de SoluciÃ³n:
- **OpciÃ³n A (Eliminar Panel del Frontend PÃºblico):** Gestionar las tareas administrativas directamente desde las plataformas de origen (Google Sheets para rifas, Supabase Studio para base de datos y Google Drive para archivos).
  - *Ventajas:* MÃ¡xima seguridad; cero cÃ³digo administrativo expuesto en GitHub Pages; el sitio queda 100% libre de vulnerabilidades.
  - *Desventajas:* Los administradores deben usar interfaces externas en lugar de una pantalla con la marca de CODES.
- **OpciÃ³n B (Panel Administrativo Aislado en Subdominio Privado):** Crear una app separada en un subdominio protegido (ej. `admin.codesunlu.tech`) con autenticaciÃ³n estricta por roles.
  - *Ventajas:* Interfaz a medida para la comisiÃ³n directiva.
  - *Desventajas:* Implica mantener dos proyectos distintos.

> **RecomendaciÃ³n del Equipo Auditor:** **OpciÃ³n A para el MVP**. Permite lanzar el nuevo sitio web pÃºblico sin demoras de seguridad y sin costo de mantenimiento.

---

## 6. DecisiÃ³n 6: TipografÃ­a y AplicaciÃ³n del Sistema de DiseÃ±o

- **Contexto:** La guÃ­a de identidad usa fuentes del sistema (`system-ui`), mientras que la web anterior usaba combinaciones tipogrÃ¡ficas dispares de Google Fonts.

### Alternativas de SoluciÃ³n:
- **OpciÃ³n A (Fuentes del Sistema Nativas):** Usar la pila tipogrÃ¡fica nativa del sistema operativo (`system-ui, -apple-system, Roboto, sans-serif`).
  - *Ventajas:* Cero bytes de descarga de fuentes; carga inmediata del texto (cero FOUT/CLS).
  - *Desventajas:* La apariencia del texto varÃ­a ligeramente segÃºn el dispositivo (Android, iOS, Windows).
- **OpciÃ³n B (TipografÃ­a Autohospedada Inter / Plus Jakarta Sans):** Incorporar los archivos WOFF2 locales de una fuente moderna mediante `@fontsource`.
  - *Ventajas:* Apariencia visual 100% idÃ©ntica y profesional en todos los dispositivos.
  - *Desventajas:* AÃ±ade ~30 KB al peso total del sitio.

> **RecomendaciÃ³n del Equipo Auditor:** **OpciÃ³n B con Inter**. Aporta un acabado visual de alta calidad con un costo de rendimiento insignificante y sin dependencias de servidores de Google.

---

## 7. DecisiÃ³n 7: Alcance del MVP para Reemplazar el Sitio Viejo

- **Pregunta:** Â¿CuÃ¡l es la fecha o hito objetivo para dar de baja la web vieja en React y publicar la nueva en Astro?

### Alternativas de SoluciÃ³n:
- **OpciÃ³n A (Lanzamiento RÃ¡pido de Emergencia - MVP Base):** Publicar de inmediato con Home, Ingresantes, Calendario AcadÃ©mico, Directorio de WhatsApp y TrÃ¡mites Esenciales. Dar de baja la web vieja para eliminar las pÃ¡ginas rotas y la brecha de `/admin`.
  - *Ventajas:* Soluciona de inmediato los problemas mÃ¡s graves antes del inicio del cuatrimestre.
  - *Desventajas:* Charlas pasadas y formulario de voluntariado quedan para una segunda semana.
- **OpciÃ³n B (Lanzamiento Integral Completo):** Esperar a tener construidas todas las fases antes de hacer el cambio de dominio.
  - *Ventajas:* Se migra todo junto.
  - *Desventajas:* Mantiene la web rota expuesta al pÃºblico durante varias semanas mÃ¡s.

> **RecomendaciÃ³n del Equipo Auditor:** **OpciÃ³n A**. El valor de solucionar el onboarding de ingresantes y cerrar la vulnerabilidad de `/admin` supera ampliamente la necesidad de esperar al resto de las secciones secundarias.