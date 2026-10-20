# 05. Recorridos Reales de Estudiantes (User Journeys)

Este documento audita la capacidad del sitio actual para dar respuesta a las 9 situaciones mÃ¡s frecuentes y crÃ­ticas que experimenta un estudiante de la Universidad Nacional de LujÃ¡n (UNLu), con especial foco en ingresantes.

---

## Escenario 1: "Soy ingresante y no sÃ© por dÃ³nde empezar"

- **Perfil:** Ingresante de primer aÃ±o a la Licenciatura en Sistemas de InformaciÃ³n. Accede desde su telÃ©fono mÃ³vil tras finalizar el curso de ingreso.
- **Punto de entrada probable:** `Home` (`/`).
- **Ruta en la web actual:**
  1. Entra al Home y ve el tÃ­tulo "Centro de Estudiantes CODES++".
  2. Lee el botÃ³n principal: *"ConocÃ© Nuestros Grupos"*. Hace clic.
  3. La pÃ¡gina navega a `/grupos` y se encuentra con un cartel: `ðŸš§ En ConstrucciÃ³n ðŸš§`.
  4. Regresa al Home y hace scroll buscando quÃ© hacer. Ve tarjetas con contadores de "impacto", testimonios de IA y un carrusel roto.
  5. Encuentra la secciÃ³n "Comunidad" en el menÃº (`/comunidad`), entra y el sistema le exige subir un Certificado de Alumno Regular en PDF para darle el enlace de WhatsApp. Como es ingresante y el SIU GuaranÃ­ aÃºn no le emitiÃ³ el certificado definitivo, no puede avanzar y abandona la web.
- **ObstÃ¡culos identificados:**
  - El botÃ³n principal estÃ¡ roto.
  - El sistema de WhatsApp exige un documento burocrÃ¡tico que el ingresante aÃºn no posee.
  - No existe ninguna secciÃ³n llamada "Ingresantes", "GuÃ­a de Inicio" o "Primeros Pasos".
- **InformaciÃ³n faltante:**
  - Â¿CÃ³mo se activa el usuario del SIU GuaranÃ­?
  - Â¿QuÃ© materias se cursan en el primer cuatrimestre?
  - Â¿DÃ³nde estÃ¡n las aulas en la sede LujÃ¡n, Chivilcoy o San Miguel?
  - Â¿CÃ³mo tramitar la tarjeta SUBE con boleto estudiantil?
- **ResoluciÃ³n ideal en Astro:**
  - BotÃ³n prominente en el Hero: **"Â¿Sos ingresante? EmpezÃ¡ acÃ¡"** -> Lleva a `/ingresantes`.
  - GuÃ­a paso a paso: ActivaciÃ³n SIU GuaranÃ­, materias de 1Â° aÃ±o, enlace directo sin fricciÃ³n al grupo oficial de WhatsApp de ingresantes, y mapa/ubicaciÃ³n de la sede.
- **Prioridad:** CRÃTICA (MVP).

---

## Escenario 2: "Necesito saber cÃ³mo inscribirme a una materia"

- **Perfil:** Estudiante de 1Â° o 2Â° aÃ±o durante el perÃ­odo de inscripciones de marzo o agosto.
- **Punto de entrada probable:** BÃºsqueda en Google ("inscripciÃ³n materias UNLu sistemas") o enlace en historias de Instagram.
- **Ruta en la web actual:**
  1. Entra a `/calendario` buscando las fechas.
  2. En el telÃ©fono mÃ³vil, la grilla del calendario estÃ¡ colapsada; tiene que adivinar quÃ© celda tiene un punto verde o azul.
  3. Si logra tocar la celda correcta, el modal le muestra: "InscripciÃ³n a asignaturas del 1Â° cuatrimestre: 02/03/2026 al 08/03/2026".
  4. Busca un enlace o instructivo de cÃ³mo inscribirse, pero el modal no contiene ningÃºn botÃ³n ni texto explicativo sobre el SIU GuaranÃ­.
- **ObstÃ¡culos identificados:**
  - La fecha estÃ¡ presente en el cÃ³digo, pero el calendario en celular es casi imposible de usar.
  - No hay enlace al sistema SIU GuaranÃ­ ni advertencia sobre prioridades o turnos de inscripciÃ³n.
- **InformaciÃ³n faltante:** Enlace directo al SIU GuaranÃ­, quÃ© hacer si una comisiÃ³n no tiene cupo, cÃ³mo solicitar excepciÃ³n o contracursada.
- **ResoluciÃ³n ideal en Astro:**
  - Tarjeta de aviso destacado en Home durante semana de inscripciones con countdown y botÃ³n: *"Entrar a SIU GuaranÃ­"*.
  - En la secciÃ³n `/calendario`, vista en lista vertical clara: *"02 al 08 de Marzo: InscripciÃ³n a Materias (SIU GuaranÃ­)"* con enlace directo a la guÃ­a de inscripciÃ³n.
- **Prioridad:** ALTA (MVP).

---

## Escenario 3: "Tengo una duda sobre cursadas o exÃ¡menes finales"

- **Perfil:** Estudiante que desaprobÃ³ un parcial o tiene dudas sobre cÃ³mo anotarse a una mesa de examen final.
- **Punto de entrada probable:** MenÃº de navegaciÃ³n.
- **Ruta en la web actual:**
  1. Revisa los 16 Ã­tems del menÃº. Ve "Recursos", entra creyendo que allÃ­ estÃ¡n los reglamentos.
  2. Encuentra links a herramientas de diseÃ±o y servidores web (Docker, Vim, Illustrator). No hay nada sobre la universidad.
  3. Vuelve atrÃ¡s frustrado. Revisa "Novedades" y solo ve artÃ­culos antiguos.
  4. Solo si tiene la paciencia de scrollear hasta el pie del Home encuentra el acordeÃ³n de FAQs, donde una de las preguntas dice *"Â¿CuÃ¡ntos finales puedo rendir por turno?"*.
- **ObstÃ¡culos identificados:**
  - La informaciÃ³n acadÃ©mica vital estÃ¡ enterrada bajo 9 pantallas de scroll en el Home.
  - La secciÃ³n "Recursos" confunde al usuario con herramientas externas.
- **InformaciÃ³n faltante:**
  - Reglamento general de estudios de la UNLu en formato claro y resumido.
  - Diferencia entre condiciÃ³n regular, promocionado y libre.
  - Plazos para darse de baja de una mesa de examen si decide no presentarse.
- **ResoluciÃ³n ideal en Astro:**
  - SecciÃ³n dedicada `/guias/examenes-y-cursadas` con respuestas concretas redactadas en lenguaje estudiantil claro.
- **Prioridad:** ALTA (MVP).

---

## Escenario 4: "Necesito encontrar un trÃ¡mite (Boleto, Constancia, Equivalencias)"

- **Perfil:** Estudiante que viaja todos los dÃ­as en colectivo o tren y necesita tramitar el Boleto Estudiantil.
- **Punto de entrada probable:** MenÃº de navegaciÃ³n o buscador de la pÃ¡gina.
- **Ruta en la web actual:**
  1. En el menÃº no existe la palabra "TrÃ¡mites".
  2. En el Home, si llega al acordeÃ³n de FAQs, encuentra un texto breve sobre el boleto estudiantil que dice *"RevisÃ¡ los requisitos en la web de provincia"*. No hay enlace directo ni guÃ­a de quÃ© formulario llenar en el SIU.
- **ObstÃ¡culos identificados:** No hay centralizaciÃ³n de trÃ¡mites universitarios.
- **ResoluciÃ³n ideal en Astro:**
  - PÃ¡gina `/tramites` organizada por tarjetas:
    - **Boleto Estudiantil Universitario (SUBE):** Requisitos, link a formulario de registro provincial y cÃ³mo validar en terminal automÃ¡tica.
    - **Certificado de Alumno Regular:** CÃ³mo descargarlo del SIU GuaranÃ­ con cÃ³digo de validaciÃ³n.
    - **Solicitud de ReadmisiÃ³n:** Pasos ante pÃ©rdida de regularidad.
- **Prioridad:** ALTA (MVP).

---

## Escenario 5: "Quiero conocer mis derechos como estudiante"

- **Perfil:** Alumno que trabaja y necesita presentar certificado laboral para justificar inasistencia o pedir cambio de comisiÃ³n.
- **Punto de entrada probable:** MenÃº de navegaciÃ³n.
- **Ruta en la web actual:**
  1. La web actual no tiene ninguna menciÃ³n a derechos estudiantiles, rÃ©gimen de compatibilidad laboral, licencia por maternidad/paternidad ni protocolos de violencia de gÃ©nero.
- **DiagnÃ³stico:** **La web actual NO resuelve este escenario.**
- **ResoluciÃ³n ideal en Astro:**
  - PÃ¡gina `/derechos-y-normativas` que explique de forma comprensible:
    - JustificaciÃ³n de inasistencias por razones laborales o de salud.
    - Acceso a revisiÃ³n de exÃ¡menes parciales (derecho a ver la correcciÃ³n).
    - Protocolo institucional de gÃ©nero y canales de denuncia reservados.
- **Prioridad:** SEGUNDA ETAPA.

---

## Escenario 6: "Tengo un problema acadÃ©mico y no sÃ© a quiÃ©n acudir"

- **Perfil:** Estudiante con una traba en una correlatividad o conflicto con una cÃ¡tedra.
- **Punto de entrada probable:** PÃ¡gina de contacto o footer.
- **Ruta en la web actual:**
  1. Ve el botÃ³n flotante (FAB) en la esquina inferior. Al tocarlo se despliegan iconos pequeÃ±os de redes sociales.
  2. En el footer hay un link a un formulario genÃ©rico de contacto o email.
- **ObstÃ¡culos identificados:** No se explica a quiÃ©n acudir segÃºn el tipo de problema (Departamento de Sistemas, SecretarÃ­a AcadÃ©mica, DirecciÃ³n de Alumnos o Centro de Estudiantes).
- **ResoluciÃ³n ideal en Astro:**
  - GuÃ­a interactiva simple: *"Â¿Con quiÃ©n tenÃ©s el problema?"*:
    - Cuestiones de cursada/cÃ¡tedra -> ComisiÃ³n de Asuntos AcadÃ©micos del Centro / Departamento.
    - TrÃ¡mites de legajo/tÃ­tulos -> DirecciÃ³n de Alumnos.
    - AcompaÃ±amiento gremial estudiantil -> SecretarÃ­a de Asuntos Estudiantiles de CODES.
- **Prioridad:** MEDIA.

---

## Escenario 7: "Quiero contactar al centro de estudiantes"

- **Perfil:** Estudiante que quiere hablar con un representante o visitar la mesa del centro.
- **Punto de entrada probable:** Footer o pÃ¡gina "Sobre Nosotros".
- **Ruta en la web actual:**
  1. Entra a `/sobre-nosotros`. Ve la lista de miembros de la comisiÃ³n directiva y fotos de eventos.
  2. No se indican horarios de atenciÃ³n en la sede ni ubicaciÃ³n fÃ­sica de la mesita del centro en LujÃ¡n, Chivilcoy o San Miguel.
- **ObstÃ¡culos identificados:** Falta informaciÃ³n del mundo real (horarios, ubicaciÃ³n fÃ­sica).
- **ResoluciÃ³n ideal en Astro:**
  - SecciÃ³n `/contacto` con:
    - DÃ³nde encontrarnos: Mapa del pabellÃ³n o ubicaciÃ³n de la mesa de CODES en Sede Central LujÃ¡n y Centro Regional San Miguel / Chivilcoy.
    - Horarios de guardia presencial de los delegados.
    - Enlace a WhatsApp directo y correo oficial institucional.
- **Prioridad:** ALTA (MVP).

---

## Escenario 8: "Quiero conocer los servicios que ofrece el centro"

- **Perfil:** Estudiante que necesita imprimir apuntes, usar computadoras o pedir una calculadora prestada.
- **Punto de entrada probable:** MenÃº principal.
- **Ruta en la web actual:**
  1. Revisa `/recursos` pensando que hay servicios, pero solo hay enlaces externos a herramientas web.
- **DiagnÃ³stico:** **La web actual no describe los servicios reales del centro de estudiantes.**
- **ResoluciÃ³n ideal en Astro:**
  - SecciÃ³n `/servicios`:
    - Banco de apuntes fÃ­sicos y digitales.
    - Impresiones a costo social en la mesita de CODES.
    - AcompaÃ±amiento y tutorÃ­as entre pares.
- **Prioridad:** SEGUNDA ETAPA.

---

## Escenario 9: "Busco informaciÃ³n confiable sobre una gestiÃ³n universitaria compleja"

- **Perfil:** Estudiante que no llegÃ³ a rendir los dos exÃ¡menes anuales obligatorios y teme haber perdido la regularidad en la carrera.
- **Punto de entrada probable:** BÃºsqueda interna o FAQs.
- **Ruta en la web actual:**
  1. La informaciÃ³n estÃ¡ parcialmente escrita en `src/data/knowledgeBase.json`: *"Para mantener la regularidad debÃ©s aprobar al menos 2 asignaturas por aÃ±o lectivo..."*.
  2. Si el alumno encuentra la FAQ, lee el requisito, pero no se le explica quÃ© trÃ¡mite hacer si ya la perdiÃ³ (cÃ³mo solicitar la readmisiÃ³n por nota).
- **ResoluciÃ³n ideal en Astro:**
  - Ficha detallada de trÃ¡mite: **"PÃ©rdida de Regularidad y ReadmisiÃ³n"**, con modelo de nota descargable para presentar en Mesa de Entradas y plazos oficiales del calendario acadÃ©mico.
- **Prioridad:** ALTA (MVP).