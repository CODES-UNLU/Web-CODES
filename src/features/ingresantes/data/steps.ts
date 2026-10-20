export interface OnboardingStep {
  number: number;
  id: string;
  title: string;
  summary: string;
  details: string[];
  actionLabel?: string;
  actionHref?: string;
  badge?: string;
  relatedSection?: {
    label: string;
    href: string;
  };
}

export const onboardingSteps: OnboardingStep[] = [
  {
    number: 1,
    id: 'paso-sedes',
    title: 'Conocer la universidad y dónde encontrarnos',
    badge: 'Primer contacto',
    summary: 'La UNLu cuenta con Sede Central en Luján y Centros Regionales (San Miguel, Chivilcoy, Campana). Conocer el campus te ayuda a ubicarte desde el primer día.',
    details: [
      'Sede Central Luján: Cruce de Rutas 5 y 7. El Departamento de Ciencias Básicas y las aulas de informática se concentran en los pabellones principales.',
      'Centro Regional San Miguel: Fariña 2180. Se dictan los primeros años de las carreras de informática y sistemas.',
      'Mesita estudiantil de CODES++: Espacio presencial atendido por compañeros de años avanzados para sacarte dudas en persona durante el ciclo lectivo.',
    ],
    relatedSection: {
      label: 'Consultar canales y mesita de CODES++',
      href: '/comunidad'
    }
  },
  {
    number: 2,
    id: 'paso-plataformas',
    title: 'Conocé las plataformas de la universidad',
    badge: 'Sistemas digitales',
    summary: 'La UNLu utiliza plataformas diferentes según la tarea: PlatDig para las aulas virtuales y materiales de cursada, y Servicios Académicos Web o Sistema de Gestión de Estudiantes para inscripciones y notas según tu cohorte.',
    details: [
      'PlatDig (platdig.unlu.edu.ar): Es el campus virtual donde los docentes publican materiales de estudio, guías de trabajos prácticos, fechas de entrega y foros de consulta.',
      'Educativa Mobile: Aplicación móvil oficial para ingresar a tus aulas virtuales de PlatDig y recibir notificaciones desde tu celular.',
      'Inscripción a materias y finales: Si pertenecés a cohortes anteriores a 2027, utilizás SAWEB (saweb.unlu.edu.ar). Si sos ingresante de la cohorte 2027 en adelante, utilizás el Sistema de Gestión de Estudiantes (g3w3.unlu.edu.ar).',
      'Dónde pedir ayuda: CODES++ nunca te solicitará tus contraseñas universitarias. Ante problemas de acceso, consultá en la mesita presencial o en el Departamento de Alumnos de la sede.'
    ],
    actionLabel: 'Ver guía de plataformas y servicios',
    actionHref: '/vida-academica#plataformas-unlu'
  },
  {
    number: 3,
    id: 'paso-cursadas',
    title: 'Comprender cursadas, materias y exámenes',
    badge: 'Vida académica',
    summary: 'La dinámica universitaria es distinta a la secundaria. Las materias son cuatrimestrales y tienen régimen de regularidad, promoción y finales.',
    details: [
      'Materias de 1° año: Introducción a la Programación, Matemática General, Organización de Computadoras, etc.',
      'Condición Regular vs Promocionado: Si alcanzás la nota de promoción no rendís final; si quedás regular, debés rendir la mesa de examen final.',
      'Correlatividades: Cada materia aprobada te habilita a cursar las materias siguientes del plan de estudio.',
      'Requisito de regularidad: Debés aprobar al menos 2 asignaturas por año lectivo para mantener tu condición activa.'
    ],
    actionLabel: 'Ver explicación de régimen académico',
    actionHref: '/vida-academica#orientacion-cursadas'
  },
  {
    number: 4,
    id: 'paso-fechas',
    title: 'Seguir el calendario académico',
    badge: 'Fechas clave',
    summary: 'En la universidad los plazos son estrictos. Las inscripciones a materias y a finales tienen fechas límite improrrogables.',
    details: [
      'Inscripción a materias: Suele realizarse a fines de febrero / principios de marzo para el 1° cuatrimestre, y a fines de julio para el 2°.',
      'Llamados a exámenes finales: Se distribuyen en turnos a lo largo del año (marzo, mayo, julio/agosto, octubre, diciembre).',
      'Receso invernal y feriados: Consultá siempre las fechas oficiales para planificar tus semanas de estudio.'
    ],
    actionLabel: 'Consultar Calendario Académico',
    actionHref: '/calendario'
  },
  {
    number: 5,
    id: 'paso-comunidad',
    title: 'Integrarse a la comunidad y grupos de estudio',
    badge: 'Compañerismo',
    summary: 'Estudiar en equipo hace la carrera mucho más accesible. Sumate a los grupos de WhatsApp moderados por el centro.',
    details: [
      'Grupos por materia: Consultas sobre ejercicios prácticos, trabajos en laboratorio y fechas de parciales.',
      'Canal de avisos oficiales: Enterate de suspensiones de clases por paro o temporal, novedades de becas y convocatorias.',
      'Respeto y convivencia: Los grupos son espacios de estudio y compañerismo sin spam comercial ni mensajes partidarios.'
    ],
    actionLabel: 'Ver directorio de grupos de estudio',
    actionHref: '/comunidad'
  },
  {
    number: 6,
    id: 'paso-recursos',
    title: 'Acceder a beneficios y servicios estudiantiles',
    badge: 'Herramientas y derechos',
    summary: 'Conocé los beneficios a los que tenés derecho como estudiante de la universidad pública.',
    details: [
      'Boleto Estudiantil Universitario: Descuento en transporte público provincial (SUBE) para traslados a la sede.',
      'Biblioteca y salas de estudio: Préstamo de libros de texto, calculadoras y computadoras de consulta en campus.',
      'Tutorías y acompañamiento: Talleres de apoyo organizados por CODES++ y docentes antes de parciales.'
    ],
    actionLabel: 'Ver trámite del Boleto SUBE',
    actionHref: '/vida-academica#tramite-boleto'
  }
];
