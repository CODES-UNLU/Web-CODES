export interface SearchItem {
  id: string;
  title: string;
  category: 'Ingresantes' | 'Vida Académica' | 'Calendario' | 'Comunidad' | 'Actividades' | 'Herramientas';
  description: string;
  url: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  {
    id: 'ingresantes-inicio',
    title: 'Guía de Primeros Pasos para Ingresantes',
    category: 'Ingresantes',
    description: 'Recorrido guiado ordenado para comenzar la carrera en la UNLu: qué saber, qué hacer y dónde acudir.',
    url: '/ingresantes',
    keywords: ['ingreso', 'primer año', 'empezar', 'nuevos', 'comienzo', 'carrera', 'sistemas', 'curso', 'onboarding']
  },
  {
    id: 'plataformas-digitales',
    title: 'Plataformas y servicios digitales de la UNLu (PlatDig, SAWEB y Gestión de Estudiantes)',
    category: 'Vida Académica',
    description: 'Guía oficial de sistemas: PlatDig (aulas virtuales E-ducativa), SAWEB (cohortes previas a 2027) y Sistema de Gestión de Estudiantes (cohorte 2027+).',
    url: '/vida-academica#plataformas-unlu',
    keywords: [
      'saweb',
      'platdig',
      'aulas virtuales',
      'educativa mobile',
      'servicios academicos web',
      'sistema de gestion de estudiantes',
      'cohorte 2027',
      'campus',
      'inscripcion a materias',
      'examenes',
      'situacion academica',
      'materiales de estudio',
      'mobile'
    ]
  },
  {
    id: 'ingresantes-sedes',
    title: 'Sedes y Aulas: Luján, Chivilcoy y San Miguel',
    category: 'Ingresantes',
    description: 'Ubicación física del campus, referencias de aulas y dónde encontrar la mesita de CODES++.',
    url: '/ingresantes#paso-sedes',
    keywords: ['sede', 'lujan', 'san miguel', 'chivilcoy', 'aulas', 'campus', 'pabellon', 'como llegar', 'mesita']
  },
  {
    id: 'vida-academica-cursadas',
    title: 'Régimen de Cursada, Asignaturas y Aprobación',
    category: 'Vida Académica',
    description: 'Conceptos clave sobre materias cuatrimestrales, parciales, promociones y regularidad académica.',
    url: '/vida-academica#orientacion-cursadas',
    keywords: ['cursada', 'materias', 'parciales', 'promocion', 'regularidad', 'aprobar', 'condicion', 'inscripcion a materias']
  },
  {
    id: 'vida-academica-finales',
    title: 'Exámenes Finales y Correlatividades',
    category: 'Vida Académica',
    description: 'Cómo funcionan las mesas de exámenes finales en la UNLu, límites por turno y plan de correlatividades.',
    url: '/vida-academica#orientacion-finales',
    keywords: ['finales', 'examen', 'mesa', 'correlatividad', 'plan de estudio', 'rendir', 'turnos', 'examenes']
  },
  {
    id: 'tramite-boleto',
    title: 'Boleto Estudiantil Universitario (SUBE)',
    category: 'Vida Académica',
    description: 'Requisitos y pasos para activar el descuento en tarjeta SUBE de transporte provincial mediante SAWEB o Gestión de Estudiantes.',
    url: '/vida-academica#tramite-boleto',
    keywords: ['boleto', 'sube', 'transporte', 'colectivo', 'tren', 'descuento', 'estudiantil', 'viaje', 'saweb']
  },
  {
    id: 'tramite-regularidad',
    title: 'Regularidad y Solicitud de Readmisión',
    category: 'Vida Académica',
    description: 'Explicación sobre el requisito anual de materias y procedimiento para solicitar readmisión ante pérdida de regularidad.',
    url: '/vida-academica#tramite-regularidad',
    keywords: ['regularidad', 'readmision', 'dos materias', 'año lectivo', 'nota', 'mesa de entradas', 'condicion']
  },
  {
    id: 'gestion-contracursadas',
    title: 'Petición de Contracursadas (CODES++)',
    category: 'Vida Académica',
    description: 'Iniciativa del centro de estudiantes para relevar necesidad de comisiones a contraturno y presentar ante el Departamento.',
    url: '/vida-academica#gestion-contracursadas',
    keywords: ['contracursada', 'comisiones', 'horarios', 'trabajo', 'departamento', 'reclamo', 'formulario']
  },
  {
    id: 'calendario-academico',
    title: 'Calendario Académico y Fechas Oficiales',
    category: 'Calendario',
    description: 'Cronograma anual: períodos de inscripción a materias, turnos de finales, recesos y feriados.',
    url: '/calendario',
    keywords: ['calendario', 'fechas', 'inscripciones', 'marzo', 'agosto', 'finales', 'receso', 'vacaciones', 'cronograma', 'inscripcion a materias', 'examenes']
  },
  {
    id: 'comunidad-canales',
    title: 'Comunidad Estudiantil y Canales de Comunicación',
    category: 'Comunidad',
    description: 'Cómo participar de los grupos de estudio de WhatsApp, canal oficial de avisos y convivencia universitaria.',
    url: '/comunidad',
    keywords: ['comunidad', 'whatsapp', 'grupos', 'avisos', 'discord', 'estudio', 'contacto', 'pares']
  },
  {
    id: 'actividades-talleres',
    title: 'Actividades, Talleres y Videoteca',
    category: 'Actividades',
    description: 'Charlas pasadas grabadas en YouTube, entrevistas a profesionales, talleres de software y eventos.',
    url: '/actividades',
    keywords: ['actividades', 'talleres', 'charlas', 'youtube', 'eventos', 'podcasts', 'entrevistas', 'videos', 'software']
  },
  {
    id: 'herramientas-catalogo',
    title: 'Banco de Herramientas y Software de Desarrollo',
    category: 'Herramientas',
    description: 'Catálogo orientativo de software, editores, control de versiones, bases de datos y plataformas de despliegue.',
    url: '/herramientas',
    keywords: ['herramientas', 'software', 'programas', 'recursos', 'banco de recursos', 'ides', 'editores', 'utilidades', 'desarrollo', 'programar', 'git', 'vscode', 'docker', 'postman']
  },
  {
    id: 'herramientas-despliegue',
    title: 'Desplegar y publicar proyectos (GitHub Pages, Vercel, Netlify, Render, Railway, Supabase)',
    category: 'Herramientas',
    description: 'Guía para publicar sitios web estáticos, frontends, APIs backend y bases de datos en internet.',
    url: '/herramientas#cat-despliegue',
    keywords: ['despliegue', 'publicar', 'deploy', 'hosting', 'github pages', 'vercel', 'netlify', 'render', 'railway', 'supabase', 'backend', 'frontend', 'bases de datos', 'servidores']
  },
  {
    id: 'herramientas-empezar',
    title: 'Herramientas para empezar a programar (VS Code, Git, Geany, Code::Blocks, PyCharm)',
    category: 'Herramientas',
    description: 'Software básico y ligero para dar los primeros pasos en materias de programación de la UNLu.',
    url: '/herramientas#cat-empezar',
    keywords: ['empezar a programar', 'vscode', 'visual studio code', 'git', 'geany', 'codeblocks', 'c++', 'python', 'primer año', 'introduccion a la programacion', 'editores']
  },
  {
    id: 'herramientas-testing',
    title: 'Herramientas para probar y depurar APIs (Postman, Bruno, HTTPie, DevTools)',
    category: 'Herramientas',
    description: 'Clientes HTTP y herramientas de depuración para probar endpoints y desarrollo web.',
    url: '/herramientas#cat-testing',
    keywords: ['testing', 'apis', 'postman', 'bruno', 'httpie', 'devtools', 'depurar', 'inspeccionar', 'red', 'http', 'endpoints']
  }
];
