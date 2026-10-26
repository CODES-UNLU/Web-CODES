export type ToolCategoryId =
  | 'empezar'
  | 'organizar'
  | 'desarrollo'
  | 'testing'
  | 'diseno'
  | 'despliegue';

export interface CategoryMeta {
  id: ToolCategoryId;
  name: string;
  shortName: string;
  description: string;
  contextAdvice?: string;
}

export interface ToolItem {
  id: string;
  name: string;
  logo: string;
  role: string;
  license: string;
  categories: ToolCategoryId[];
  deploymentTier?: 'Sitio estático' | 'Frontend web' | 'Servicio backend / API' | 'Base de datos / BaaS';
  description: string;
  whenToUse: string;
  recommendedFor: string;
  officialUrl: string;
  verified: boolean;
}

export const toolCategories: CategoryMeta[] = [
  {
    id: 'empezar',
    name: 'Empezar a programar',
    shortName: 'Inicio',
    description: 'Editores livianos, entornos de compilación directa y herramientas base para dar los primeros pasos sin complicaciones de configuración.',
    contextAdvice: 'Si estás cursando materias de primer año (como Introducción a la Programación o Programación Estructurada), te recomendamos elegir un editor simple y familiarizarte con el control de versiones desde el primer día.'
  },
  {
    id: 'organizar',
    name: 'Organizar y compartir proyectos',
    shortName: 'Organización',
    description: 'Plataformas de repositorios, clientes visuales de control de versiones y tableros para coordinar entregas y trabajos en grupo.',
    contextAdvice: 'El trabajo colaborativo en la universidad es más fluido cuando el equipo define de antemano qué herramienta usar para versionar código y dónde registrar las tareas pendientes.'
  },
  {
    id: 'desarrollo',
    name: 'Desarrollar aplicaciones',
    shortName: 'Desarrollo',
    description: 'Entornos de ejecución, IDEs especializados, administradores de bases de datos relacionales y contenedores para proyectos de software.',
    contextAdvice: 'A medida que avanzás en la carrera hacia materias de diseño y bases de datos, estas herramientas te permiten crear aplicaciones completas con arquitectura modular.'
  },
  {
    id: 'testing',
    name: 'Probar y depurar',
    shortName: 'Testing y depuración',
    description: 'Clientes de peticiones HTTP, inspectores de red y navegadores para encontrar errores y verificar que tus endpoints respondan correctamente.',
    contextAdvice: 'Antes de construir la interfaz gráfica de un sistema, acostumbrate a probar tus endpoints de backend con un cliente HTTP para verificar las respuestas JSON y los códigos de estado.'
  },
  {
    id: 'diseno',
    name: 'Diseñar y documentar',
    shortName: 'Diseño y diagramas',
    description: 'Herramientas de wireframing, pizarras para esquemas de arquitectura, diagramas técnicos UML/DER y optimización de recursos gráficos.',
    contextAdvice: 'Bocetar la estructura de pantallas y diagramar el modelo de datos antes de programar ahorra horas de refactorización y ayuda a acordar alcances con tus compañeros.'
  },
  {
    id: 'despliegue',
    name: 'Desplegar y publicar proyectos',
    shortName: 'Despliegue y publicación',
    description: 'Plataformas para poner proyectos en internet: sitios estáticos, aplicaciones frontend interactivas, servidores backend y bases de datos en la nube.',
    contextAdvice: 'Distinguí bien qué tipo de proyecto tenés: si es solo HTML/CSS/JS te alcanza con GitHub Pages; si es una app frontend conectada a Git podés usar Vercel o Netlify; y si tiene servidor propio o base de datos, necesitás plataformas como Render, Railway o Supabase.'
  }
];

export const toolsData: ToolItem[] = [
  // --- Categoría 1: Empezar a programar ---
  {
    id: 'git',
    name: 'Git',
    logo: '/tools-logos/git.svg',
    role: 'Control de versiones',
    license: 'Gratuito y de código abierto (GPL v2)',
    categories: ['empezar', 'organizar'],
    description: 'Sistema de control de versiones distribuido que registra cada cambio en tu código y permite recuperar versiones anteriores sin perder avances.',
    whenToUse: 'Cuando empezás a desarrollar proyectos, necesitás experimentar sin temor a romper lo que ya funcionaba o querés trabajar con otras personas sobre los mismos archivos.',
    recommendedFor: 'Estudiantes que comienzan a programar en cualquier materia o lenguaje.',
    officialUrl: 'https://git-scm.com/',
    verified: true
  },
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    logo: '/tools-logos/vscode.svg',
    role: 'Editor de código extensible',
    license: 'Gratuito (Binario de Microsoft bajo licencia privativa gratuita; núcleo Code - OSS de código abierto bajo MIT)',
    categories: ['empezar', 'desarrollo'],
    description: 'Editor de código fuente ligero, rápido y personalizable mediante extensiones para casi cualquier lenguaje (C, C++, Python, Java, JavaScript, etc.).',
    whenToUse: 'Cuando necesitás un editor moderno con resaltado de sintaxis, terminal integrado y extensiones que te ayuden a formatear y depurar tu código.',
    recommendedFor: 'Estudiantes de cualquier año que buscan un entorno versátil para múltiples asignaturas.',
    officialUrl: 'https://code.visualstudio.com/',
    verified: true
  },
  {
    id: 'geany',
    name: 'Geany',
    logo: '/tools-logos/geany.svg',
    role: 'IDE ultraligero para C, C++ y Python',
    license: 'Gratuito y de código abierto (GPL v2+)',
    categories: ['empezar'],
    description: 'Entorno de desarrollo rápido y con mínimo consumo de memoria, pensado para compilar y ejecutar programas con un solo botón sin configuraciones complejas.',
    whenToUse: 'En asignaturas iniciales (Introducción a la Programación, Programación Estructurada) y especialmente en computadoras portátiles con recursos modestos.',
    recommendedFor: 'Quienes inician con C, C++ o Python y buscan una herramienta simple que abra al instante.',
    officialUrl: 'https://www.geany.org/',
    verified: true
  },
  {
    id: 'codeblocks',
    name: 'Code::Blocks',
    logo: '/tools-logos/codeblocks.svg',
    role: 'IDE clásico para C y C++',
    license: 'Gratuito y de código abierto (GPL v3)',
    categories: ['empezar'],
    description: 'Entorno de desarrollo para C y C++ que incluye el compilador MinGW preinstalado, facilitando crear proyectos de consola sin tocar la terminal.',
    whenToUse: 'Al cursar materias que requieren C o C++ y se busca un instalador que configure automáticamente el compilador en Windows.',
    recommendedFor: 'Ingresantes y estudiantes de materias de algoritmos que prefieren una solución integrada para C/C++.',
    officialUrl: 'https://www.codeblocks.org/',
    verified: true
  },
  {
    id: 'pycharm-community',
    name: 'PyCharm Community',
    logo: '/tools-logos/pycharm-community.svg',
    role: 'IDE especializado en Python',
    license: 'Gratuito y de código abierto (Apache 2.0)',
    categories: ['empezar', 'desarrollo'],
    description: 'Entorno enfocado en Python con análisis estático de errores, navegación inteligente de funciones y depurador visual paso a paso.',
    whenToUse: 'Cuando cursás materias con Python o ciencia de datos y necesitás inspeccionar el estado de listas, diccionarios y variables mientras el programa corre.',
    recommendedFor: 'Estudiantes que trabajan en Python y prefieren un IDE completo en lugar de un editor genérico.',
    officialUrl: 'https://www.jetbrains.com/pycharm/',
    verified: true
  },

  // --- Categoría 2: Organizar y compartir proyectos ---
  {
    id: 'github',
    name: 'GitHub',
    logo: '/tools-logos/github.svg',
    role: 'Alojamiento de repositorios y colaboración',
    license: 'Gratuito (Plan Free con repositorios públicos y privados ilimitados)',
    categories: ['organizar', 'despliegue'],
    deploymentTier: 'Sitio estático',
    description: 'Plataforma en la nube para sincronizar repositorios Git, colaborar mediante Pull Requests y publicar proyectos como portafolio digital.',
    whenToUse: 'Para respaldar tus trabajos en la nube, compartir código con docentes y compañeros, y publicar páginas web estáticas mediante GitHub Pages.',
    recommendedFor: 'Cualquier estudiante que use Git y quiera mantener su trabajo respaldado y visible.',
    officialUrl: 'https://github.com/',
    verified: true
  },
  {
    id: 'github-desktop',
    name: 'GitHub Desktop',
    logo: '/tools-logos/github-desktop.svg',
    role: 'Cliente visual para Git',
    license: 'Gratuito y de código abierto (MIT)',
    categories: ['organizar'],
    description: 'Aplicación visual de escritorio para gestionar repositorios Git, revisar diferencias de código y sincronizar cambios sin comandos de terminal.',
    whenToUse: 'Cuando entendés los conceptos de Git pero te resulta más cómodo ver visualmente qué líneas modificaste antes de hacer commit.',
    recommendedFor: 'Estudiantes que prefieren una interfaz gráfica intuitiva mientras se familiarizan con Git.',
    officialUrl: 'https://desktop.github.com/',
    verified: true
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    logo: '/tools-logos/gitlab.svg',
    role: 'Plataforma DevOps y repositorios Git',
    license: 'Gratuito (Nivel Free en nube; Community Edition de código abierto bajo MIT para autoalojar)',
    categories: ['organizar'],
    description: 'Plataforma integral para gestión de repositorios Git, seguimiento de incidentes (issues) y pipelines de integración continua.',
    whenToUse: 'Si tu equipo de trabajo busca una alternativa sólida a GitHub con potentes herramientas de automatización y CI/CD integradas.',
    recommendedFor: 'Estudiantes interesados en DevOps y metodologías ágiles de entrega de software.',
    officialUrl: 'https://about.gitlab.com/',
    verified: true
  },
  {
    id: 'trello',
    name: 'Trello',
    logo: '/tools-logos/trello.svg',
    role: 'Tableros Kanban de tareas',
    license: 'Gratuito (Plan Free con tableros y tarjetas colaborativas ilimitadas)',
    categories: ['organizar'],
    description: 'Herramienta visual basada en tableros y columnas (Por hacer, En curso, Hecho) para organizar entregas y asignar tareas en equipo.',
    whenToUse: 'Al organizar trabajos prácticos grupales de varias semanas, para acordar quién hace cada parte y supervisar el avance del proyecto.',
    recommendedFor: 'Equipos de estudiantes que buscan coordinar tareas de manera visual sin burocracia.',
    officialUrl: 'https://trello.com/',
    verified: true
  },
  {
    id: 'notion',
    name: 'Notion',
    logo: '/tools-logos/notion.svg',
    role: 'Espacio de apuntes, notas y documentación',
    license: 'Gratuito (Plan Plus sin costo para estudiantes acreditados con correo institucional)',
    categories: ['organizar', 'diseno'],
    description: 'Espacio de trabajo modular para redactar resúmenes, organizar calendarios de exámenes, armar wikis y documentar sistemas.',
    whenToUse: 'Cuando querés centralizar apuntes teóricos de varias materias, compartir resúmenes con compañeros o documentar la arquitectura de un software.',
    recommendedFor: 'Quienes valoran tener notas académicas estructuradas y sincronizadas entre computadora y celular.',
    officialUrl: 'https://www.notion.so/',
    verified: true
  },

  // --- Categoría 3: Desarrollar aplicaciones ---
  {
    id: 'nodejs',
    name: 'Node.js',
    logo: '/tools-logos/nodejs.svg',
    role: 'Entorno de ejecución de JavaScript en el servidor',
    license: 'Gratuito y de código abierto (MIT)',
    categories: ['desarrollo', 'empezar'],
    description: 'Plataforma que permite ejecutar JavaScript fuera del navegador para crear APIs, servidores backend, scripts y ejecutar herramientas web modernas.',
    whenToUse: 'Cuando querés programar un servidor web, construir una API REST o utilizar gestores de paquetes como npm y pnpm para proyectos de frontend.',
    recommendedFor: 'Estudiantes con conocimientos básicos de programación que quieren dar el salto al desarrollo web.',
    officialUrl: 'https://nodejs.org/',
    verified: true
  },
  {
    id: 'intellij-community',
    name: 'IntelliJ IDEA Community',
    logo: '/tools-logos/intellij-community.svg',
    role: 'IDE para Java y Kotlin',
    license: 'Gratuito y de código abierto (Apache 2.0)',
    categories: ['desarrollo'],
    description: 'Entorno de desarrollo enfocado en Java con refactorizaciones seguras, análisis estático profundo y navegación entre clases y métodos.',
    whenToUse: 'En asignaturas de Programación Orientada a Objetos (POO), Algoritmos o desarrollo backend empresarial donde se programa en Java.',
    recommendedFor: 'Estudiantes de materias intermedias que cursan con Java y prefieren un entorno más ágil que Eclipse o NetBeans.',
    officialUrl: 'https://www.jetbrains.com/idea/',
    verified: true
  },
  {
    id: 'dbeaver',
    name: 'DBeaver Community',
    logo: '/tools-logos/dbeaver.svg',
    role: 'Gestor universal de bases de datos SQL',
    license: 'Gratuito y de código abierto (GPL v2)',
    categories: ['desarrollo'],
    description: 'Cliente gráfico para conectarse a múltiples motores de bases de datos (PostgreSQL, MySQL, SQLite, Oracle) con editor SQL y visualización de datos.',
    whenToUse: 'En la materia Bases de Datos o al desarrollar una aplicación con persistencia, para ejecutar consultas SQL y diseñar tablas sin instalar programas distintos para cada motor.',
    recommendedFor: 'Estudiantes que aprenden SQL o integran bases de datos relacionales en sus proyectos.',
    officialUrl: 'https://dbeaver.io/',
    verified: true
  },
  {
    id: 'docker',
    name: 'Docker',
    logo: '/tools-logos/docker.svg',
    role: 'Contenedores de software',
    license: 'Gratuito (Docker Engine de código abierto bajo Apache 2.0; Docker Desktop gratuito para educación y uso personal)',
    categories: ['desarrollo', 'despliegue'],
    deploymentTier: 'Servicio backend / API',
    description: 'Herramienta que empaqueta una aplicación y sus dependencias en un contenedor reproducible que corre exactamente igual en cualquier máquina o servidor.',
    whenToUse: 'Para levantar una base de datos local (ej. PostgreSQL o Redis) o un servidor sin instalar y configurar dependencias pesadas en tu sistema operativo.',
    recommendedFor: 'Estudiantes con base de sistemas operativos o desarrollo web que quieren entornos de desarrollo limpios y reproducibles.',
    officialUrl: 'https://www.docker.com/',
    verified: true
  },
  {
    id: 'windows-terminal',
    name: 'Windows Terminal',
    logo: '/tools-logos/windows-terminal.svg',
    role: 'Emulador de consola moderno para Windows',
    license: 'Gratuito y de código abierto (MIT)',
    categories: ['desarrollo'],
    description: 'Consola moderna para Windows con soporte para pestañas múltiples, paneles divididos, personalización estética y compatibilidad con PowerShell y WSL (Linux).',
    whenToUse: 'Cuando trabajás en Windows y querés una terminal cómoda para ejecutar Git, servidores de desarrollo o entornos Linux mediante WSL.',
    recommendedFor: 'Usuarios de Windows que buscan una experiencia de terminal ágil y legible.',
    officialUrl: 'https://github.com/microsoft/terminal',
    verified: true
  },

  // --- Categoría 4: Probar y depurar ---
  {
    id: 'postman',
    name: 'Postman',
    logo: '/tools-logos/postman.svg',
    role: 'Cliente y banco de pruebas de APIs',
    license: 'Gratuito (Plan Free con peticiones y colecciones colaborativas)',
    categories: ['testing'],
    description: 'Aplicación para enviar peticiones HTTP (GET, POST, PUT, DELETE) a servidores, comprobar respuestas JSON, configurar cabeceras y verificar códigos de estado.',
    whenToUse: 'Cuando desarrollás una API en el backend y necesitás verificar que responde correctamente antes de construir la pantalla o formulario en el frontend.',
    recommendedFor: 'Estudiantes que desarrollan o consumen servicios web y APIs REST.',
    officialUrl: 'https://www.postman.com/',
    verified: true
  },
  {
    id: 'bruno',
    name: 'Bruno',
    logo: '/tools-logos/bruno.svg',
    role: 'Cliente de APIs ligero y versionable en Git',
    license: 'Gratuito y de código abierto (MIT)',
    categories: ['testing'],
    description: 'Cliente de APIs de código abierto que almacena las peticiones en archivos locales dentro de tu proyecto, permitiendo versionarlas con Git.',
    whenToUse: 'Cuando hacés un trabajo práctico en equipo y querés compartir las pruebas de la API en el mismo repositorio sin obligar a nadie a crear cuentas en la nube.',
    recommendedFor: 'Estudiantes que priorizan herramientas ligeras, de código abierto y compatibles con Git.',
    officialUrl: 'https://usebruno.com/',
    verified: true
  },
  {
    id: 'httpie',
    name: 'HTTPie',
    logo: '/tools-logos/httpie.svg',
    role: 'Cliente HTTP por consola y escritorio',
    license: 'Gratuito (CLI de código abierto bajo BSD-3-Clause; apps web y de escritorio gratuitas)',
    categories: ['testing'],
    description: 'Herramienta para hacer peticiones HTTP con sintaxis simple e intuitiva, que formatea y colorea automáticamente las respuestas JSON en pantalla.',
    whenToUse: 'Para probar rápidamente si un servidor o una ruta responde sin salir de la terminal ni recordar parámetros complicados de cURL.',
    recommendedFor: 'Quienes prefieren realizar consultas y comprobaciones directas desde la línea de comandos.',
    officialUrl: 'https://httpie.io/',
    verified: true
  },
  {
    id: 'browser-devtools',
    name: 'DevTools del navegador',
    logo: '/tools-logos/browser-devtools.svg',
    role: 'Inspector y depurador web integrado',
    license: 'Gratuito (Incluido nativamente en Chrome, Firefox y navegadores modernos)',
    categories: ['testing'],
    description: 'Herramientas integradas en el navegador para inspeccionar HTML y CSS en vivo, depurar JavaScript con breakpoints y auditar peticiones de red.',
    whenToUse: 'En cualquier desarrollo web: para corregir errores visuales de diseño, inspeccionar fallas en la consola o ver qué devuelve una petición fetch.',
    recommendedFor: 'Indispensable para cualquier estudiante que curse o practique tecnologías web.',
    officialUrl: 'https://developer.chrome.com/docs/devtools',
    verified: true
  },

  // --- Categoría 5: Diseñar y documentar ---
  {
    id: 'figma',
    name: 'Figma',
    logo: '/tools-logos/figma.svg',
    role: 'Diseño de interfaces y prototipado',
    license: 'Gratuito (Plan Starter gratis; Plan Education gratuito para estudiantes universitarios)',
    categories: ['diseno'],
    description: 'Herramienta en la nube para diseñar interfaces de usuario, wireframes y prototipos interactivos navegables de forma colaborativa.',
    whenToUse: 'Antes de programar, para acordar con tu grupo la disposición visual de las pantallas, los colores y el flujo de navegación de la aplicación.',
    recommendedFor: 'Equipos que construyen proyectos con interfaz gráfica y necesitan validar el diseño antes de implementar.',
    officialUrl: 'https://www.figma.com/',
    verified: true
  },
  {
    id: 'excalidraw',
    name: 'Excalidraw',
    logo: '/tools-logos/excalidraw.svg',
    role: 'Pizarra virtual para esquemas y diagramas conceptuales',
    license: 'Gratuito y de código abierto (MIT)',
    categories: ['diseno'],
    description: 'Pizarra virtual con estética de dibujo a mano alzada para plasmar arquitecturas de software, diagramas de flujo y esquemas lógicos rápidamente.',
    whenToUse: 'Para explicar una idea técnica en una videollamada, diseñar la arquitectura de un trabajo práctico o bosquejar la lógica de un examen.',
    recommendedFor: 'Quienes necesitan volcar ideas y conceptos técnicos de manera visual e inmediata.',
    officialUrl: 'https://excalidraw.com/',
    verified: true
  },
  {
    id: 'drawio',
    name: 'Draw.io (diagrams.net)',
    logo: '/tools-logos/drawio.svg',
    role: 'Editor de diagramas técnicos (UML, DER, flujos)',
    license: 'Gratuito y de código abierto (Apache 2.0)',
    categories: ['diseno'],
    description: 'Herramienta para crear diagramas técnicos formales: diagramas de clases UML, entidad-relación (DER) para bases de datos y flujos de procesos.',
    whenToUse: 'En materias de Análisis de Sistemas, Ingeniería de Software y Bases de Datos, donde se exige entregar documentación con simbología estándar.',
    recommendedFor: 'Estudiantes que cursan materias de modelado de software o diseño de bases de datos.',
    officialUrl: 'https://app.diagrams.net/',
    verified: true
  },
  {
    id: 'lucide',
    name: 'Lucide Icons',
    logo: '/tools-logos/lucide.svg',
    role: 'Biblioteca de íconos vectoriales SVG',
    license: 'Gratuito y de código abierto (ISC / MIT)',
    categories: ['diseno'],
    description: 'Colección de más de 1.000 íconos vectoriales limpios y consistentes, con paquetes listos para HTML, React, Vue, Svelte y Astro.',
    whenToUse: 'Al diseñar interfaces web o móviles y necesitar íconos claros para botones, alertas y menús sin sobrecargar la página con imágenes pesadas.',
    recommendedFor: 'Desarrolladores frontend y diseñadores web.',
    officialUrl: 'https://lucide.dev/',
    verified: true
  },
  {
    id: 'tinypng',
    name: 'TinyPNG',
    logo: '/tools-logos/tinypng.svg',
    role: 'Compresión inteligente de imágenes web',
    license: 'Gratuito (Servicio web gratuito para optimización individual)',
    categories: ['diseno'],
    description: 'Optimizador en línea que reduce drásticamente el peso en kilobytes de imágenes PNG, WebP y JPEG sin pérdida perceptible de calidad visual.',
    whenToUse: 'Antes de agregar capturas, banners o fotos a un sitio web o repositorio, para que cargue mucho más rápido y gaste menos datos móviles.',
    recommendedFor: 'Cualquier estudiante que publique páginas web o proyectos con imágenes.',
    officialUrl: 'https://tinypng.com/',
    verified: true
  },

  // --- Categoría 6: Desplegar y publicar proyectos ---
  {
    id: 'github-pages',
    name: 'GitHub Pages',
    logo: '/tools-logos/github-pages.svg',
    role: 'Alojamiento de sitios estáticos y documentación',
    license: 'Gratuito (Incluido en cuentas de GitHub para repositorios públicos)',
    categories: ['despliegue'],
    deploymentTier: 'Sitio estático',
    description: 'Servicio de publicación que toma archivos HTML/CSS/JS (o sitios compilados con Astro/Vite) desde un repositorio y los publica con URL pública y HTTPS.',
    whenToUse: 'Cuando tenés un sitio web estático (como la web de un trabajo práctico, tu currículum o documentación) y querés publicarlo gratis sin tocar servidores.',
    recommendedFor: 'Quienes inician en desarrollo web y necesitan mostrar sus páginas terminadas a docentes o colegas.',
    officialUrl: 'https://pages.github.com/',
    verified: true
  },
  {
    id: 'vercel',
    name: 'Vercel',
    logo: '/tools-logos/vercel.svg',
    role: 'Despliegue de aplicaciones frontend modernas',
    license: 'Gratuito (Plan Hobby para proyectos personales y educativos sin costo comercial)',
    categories: ['despliegue'],
    deploymentTier: 'Frontend web',
    description: 'Plataforma en la nube optimizada para desplegar aplicaciones frontend (React, Next.js, Astro, Vue) con conexión directa a GitHub y despliegues automáticos.',
    whenToUse: 'Cuando desarrollás una aplicación web frontend y querés compartirla con una dirección segura que se actualiza cada vez que hacés un commit.',
    recommendedFor: 'Estudiantes que construyen interfaces web modernas y buscan publicación automatizada sin configurar servidores.',
    officialUrl: 'https://vercel.com/',
    verified: true
  },
  {
    id: 'netlify',
    name: 'Netlify',
    logo: '/tools-logos/netlify.svg',
    role: 'Alojamiento de frontends y sitios estáticos',
    license: 'Gratuito (Plan Free con generoso límite de ancho de banda y minutos de compilación)',
    categories: ['despliegue'],
    deploymentTier: 'Frontend web',
    description: 'Plataforma para publicar sitios estáticos y aplicaciones frontend conectando un repositorio Git o simplemente arrastrando una carpeta de archivos compilados.',
    whenToUse: 'Al publicar un proyecto web de manera ágil, probar formularios sin backend propio o contar con una alternativa robusta a Vercel y GitHub Pages.',
    recommendedFor: 'Quienes necesitan poner en línea proyectos frontend con configuración mínima.',
    officialUrl: 'https://www.netlify.com/',
    verified: true
  },
  {
    id: 'render',
    name: 'Render',
    logo: '/tools-logos/render.svg',
    role: 'Alojamiento de servicios backend y bases de datos',
    license: 'Gratuito (Capa Free para servicios web y bases PostgreSQL de prueba; con suspensión por inactividad)',
    categories: ['despliegue'],
    deploymentTier: 'Servicio backend / API',
    description: 'Plataforma en la nube para ejecutar servidores backend (Node.js/Express, Python/FastAPI, Java/Spring, Docker) y conectarlos a bases de datos PostgreSQL.',
    whenToUse: 'Cuando programaste una API o servidor backend y necesitás que esté corriendo en internet para responder llamadas desde tu frontend o aplicación móvil.',
    recommendedFor: 'Estudiantes que terminaron un backend y necesitan que sea accesible públicamente en la red.',
    officialUrl: 'https://render.com/',
    verified: true
  },
  {
    id: 'railway',
    name: 'Railway',
    logo: '/tools-logos/railway.svg',
    role: 'Infraestructura para aplicaciones y bases de datos',
    license: 'Gratuito (Crédito inicial de prueba sin tarjeta para desplegar contenedores y bases de datos)',
    categories: ['despliegue'],
    deploymentTier: 'Base de datos / BaaS',
    description: 'Plataforma que permite desplegar arquitecturas compuestas (por ejemplo un backend en Node/Python y una base PostgreSQL o Redis) desde un repositorio Git.',
    whenToUse: 'Cuando tu proyecto grupal incluye backend y base de datos relacional conectada y querés levantarlos juntos en la nube sin administrar un servidor Linux.',
    recommendedFor: 'Estudiantes con proyectos fullstack que necesitan backend y base de datos comunicados.',
    officialUrl: 'https://railway.app/',
    verified: true
  },
  {
    id: 'supabase',
    name: 'Supabase',
    logo: '/tools-logos/supabase.svg',
    role: 'Backend-as-a-Service con PostgreSQL gestionado',
    license: 'Gratuito (Plan Free con hasta 2 proyectos activos de PostgreSQL y 500 MB de almacenamiento)',
    categories: ['despliegue', 'desarrollo'],
    deploymentTier: 'Base de datos / BaaS',
    description: 'Plataforma que entrega una base de datos PostgreSQL completa en la nube con autenticación de usuarios, almacenamiento de archivos y APIs REST automáticas.',
    whenToUse: 'Cuando tu aplicación necesita autenticación de usuarios y persistencia relacional pero querés evitar programar todo el servidor desde cero.',
    recommendedFor: 'Estudiantes que construyen aplicaciones web o móviles y necesitan una base de datos segura y moderna en la nube.',
    officialUrl: 'https://supabase.com/',
    verified: true
  }
];
