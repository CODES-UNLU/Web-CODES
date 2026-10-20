export interface AcademicTopic {
  id: string;
  title: string;
  badge: string;
  summary: string;
  content: string[];
}

export interface UniversityProcedure {
  id: string;
  title: string;
  category: 'Trámite UNLu' | 'Beneficio Provincial' | 'Sistema';
  statusNote?: string;
  description: string;
  requirements: string[];
  steps: string[];
  officialChannel: string;
  verifiedLink?: string;
  verifiedLinkLabel?: string;
}

export interface CodesInitiative {
  id: string;
  title: string;
  status: 'Abierta' | 'En evaluación' | 'Próximamente' | 'Cerrada';
  statusVariant: 'success' | 'warning' | 'info' | 'neutral';
  period: string;
  description: string;
  objectives: string[];
  responsibleContact: string;
  externalFormUrl?: string; // Solo si está verificado
}

// 1. Orientación Académica
export const academicTopics: AcademicTopic[] = [
  {
    id: 'orientacion-cursadas',
    title: 'Régimen de cursadas y evaluación',
    badge: 'Cursada',
    summary: 'Las materias en la UNLu son en su mayoría cuatrimestrales (1° cuatrimestre: marzo a julio; 2° cuatrimestre: agosto a diciembre).',
    content: [
      'Asistencia: Cada asignatura establece un porcentaje mínimo de asistencia a clases prácticas (habitualmente 75% o 80%).',
      'Parciales y recuperatorios: Durante el cuatrimestre se toman generalmente dos exámenes parciales. Tenés derecho a recuperar instancias desaprobadas de acuerdo al régimen de la cátedra.',
      'Condición de Promoción: Si aprobás los parciales con una nota igual o superior a la fijada por el programa (habitualmente 7 o más) y cumplís la asistencia, aprobás la materia en forma directa sin rendir examen final.',
      'Condición de Regular: Si aprobás los parciales con la nota mínima de regularidad (habitualmente 4 a 6), alcanzás la condición de alumno regular y tenés derecho a rendir la materia en las mesas de examen final.'
    ]
  },
  {
    id: 'orientacion-finales',
    title: 'Exámenes finales y correlatividades',
    badge: 'Finales',
    summary: 'Los exámenes finales evalúan la totalidad del programa de la materia ante un tribunal docente.',
    content: [
      'Turnos de finales: Existen turnos ordinarios distribuidos en el año: febrero/marzo, mayo, julio/agosto, octubre y diciembre.',
      'Inscripción obligatoria: Para rendir un final debés inscribirte por el sistema académico correspondiente a tu cohorte (SAWEB para cohortes anteriores a 2027 o Sistema de Gestión de Estudiantes para cohorte 2027+) con la anticipación fijada por el calendario (habitualmente 48 horas hábiles antes).',
      'Límite de finales: Las normativas de la UNLu regulan la cantidad de asignaturas a rendir por turno. Consultá siempre el régimen de tu plan de estudios.',
      'Validez de la regularidad: Una materia regularizada tiene una vigencia temporal determinada para rendir el final antes de perder la regularidad.'
    ]
  },
  {
    id: 'orientacion-regularidad',
    title: 'Mantenimiento de la condición de alumno regular',
    badge: 'Normativa',
    summary: 'Para conservar la condición de estudiante activo en la universidad se debe cumplir el requisito mínimo de rendimiento académico anual.',
    content: [
      'Requisito general: Aprobar al menos dos (2) asignaturas por año lectivo (considerando finales o promociones).',
      'Excepciones para ingresantes: Durante el primer año de carrera rigen condiciones especiales de inserción académica.',
      'Qué ocurre si no cumplís el requisito: Perdés transitoriamente la regularidad y debés solicitar la readmisión formal para continuar cursando.'
    ]
  },
  {
    id: 'orientacion-planes',
    title: 'Planes de estudio y correlatividades',
    badge: 'Plan de carrera',
    summary: 'La Licenciatura en Sistemas de Información cuenta con un árbol de correlatividades que establece qué materias necesitás tener aprobadas o regularizadas para anotarte en las siguientes.',
    content: [
      'Correlatividad para cursar: Requiere tener regularizada (o aprobada) la materia previa.',
      'Correlatividad para rendir final: Requiere tener aprobado el examen final de las materias previas.',
      'Verificá el plan oficial: Antes de armar tu cuatrimestre, revisá el plan de estudios vigente en la web departamental.'
    ]
  }
];

// 2. Gestiones Universitarias Oficiales
export const universityProcedures: UniversityProcedure[] = [
  {
    id: 'tramite-boleto',
    title: 'Boleto Estudiantil Universitario (SUBE)',
    category: 'Beneficio Provincial',
    statusNote: 'Sujeto al calendario y confirmación del Ministerio de Transporte PBA',
    description: 'Beneficio de tarifa subsidiada para transporte público en el Área Metropolitana y provincia de Buenos Aires para traslados a la universidad.',
    requirements: [
      'Ser estudiante regular de la UNLu.',
      'Tener una tarjeta SUBE registrada a tu nombre en sube.gob.ar.',
      'Cumplir con el requisito de materias aprobadas del ciclo anterior (los ingresantes no requieren materias aprobadas previas).',
      'No poseer otro beneficio de transporte vigente en la misma tarjeta.'
    ],
    steps: [
      '1. Ingresar al sistema académico que corresponde a tu cohorte (SAWEB o Sistema de Gestión de Estudiantes) con tu usuario y contraseña.',
      '2. Ir a la sección Trámites > Boleto Estudiantil y completar el formulario de solicitud.',
      '3. Esperar la confirmación por correo electrónico o consultar el estado en la web provincial.',
      '4. Validar la carga del beneficio apoyando tu tarjeta en una Terminal Automática SUBE (TAS) o mediante la app SUBE en un celular con NFC.'
    ],
    officialChannel: 'Secretaría de Bienestar Universitario UNLu y Ministerio de Transporte PBA'
  },
  {
    id: 'tramite-regularidad',
    title: 'Solicitud de Readmisión por pérdida de regularidad',
    category: 'Trámite UNLu',
    statusNote: 'Gestión formal ante Dirección de Alumnos',
    description: 'Procedimiento administrativo para estudiantes que no alcanzaron a aprobar las dos materias anuales reglamentarias y necesitan rehabilitar su legajo para cursar.',
    requirements: [
      'Haber estado inscripto en la carrera en el ciclo lectivo inmediato anterior.',
      'Presentar la solicitud dentro de los plazos establecidos por el calendario académico.'
    ],
    steps: [
      '1. Redactar una nota formal dirigida a la Dirección de Alumnos / Secretaría Académica solicitando la readmisión.',
      '2. Detallar los motivos justificados (laborales, de salud o personales) que impidieron cumplir el requisito.',
      '3. Adjuntar certificados o documentación respaldatoria si corresponde.',
      '4. Presentar por Mesa de Entradas de la Sede Central o Centro Regional según las vías habilitadas por la UNLu.'
    ],
    officialChannel: 'Dirección General de Asuntos Académicos - Departamento de Alumnos UNLu'
  },
  {
    id: 'tramite-constancia',
    title: 'Certificado de Alumno Regular digital',
    category: 'Sistema',
    description: 'Documento oficial con código QR o clave de verificación institucional que acredita tu condición de estudiante ante obras sociales, empleadores o transporte.',
    requirements: [
      'Tener usuario activo en el sistema de gestión académica (SAWEB o Sistema de Gestión de Estudiantes según cohorte) y matrícula vigente en el año lectivo.'
    ],
    steps: [
      '1. Entrar a tu sistema académico (SAWEB para cohortes previas a 2027 / Sistema de Gestión de Estudiantes para cohorte 2027+).',
      '2. Navegar al menú de constancias y certificados de alumno regular.',
      '3. Generar y descargar el archivo con código de validación digital institucional.'
    ],
    officialChannel: 'Servicios Académicos Web (SAWEB) / Sistema de Gestión de Estudiantes UNLu'
  }
];

// 3. Gestiones Organizadas por CODES++
export const codesInitiatives: CodesInitiative[] = [
  {
    id: 'gestion-contracursadas',
    title: 'Relevamiento y Petición de Contracursadas',
    status: 'En evaluación',
    statusVariant: 'warning',
    period: 'Previo al inicio de cada cuatrimestre',
    description: 'Gestión gremial impulsada por el Centro de Estudiantes ante la Dirección de la Licenciatura en Sistemas y el Departamento de Ciencias Básicas para solicitar la apertura de comisiones de cursada en turnos opuestos (mañana/noche), especialmente para estudiantes que trabajan.',
    objectives: [
      'Relevar la cantidad real de estudiantes que necesitan cursar materias clave a contraturno.',
      'Elaborar el informe cuantitativo y presentarlo formalmente ante la Comisión de Carrera.',
      'Hacer seguimiento institucional de las respuestas departamentales e informar a los inscriptos.'
    ],
    responsibleContact: 'Comisión de Asuntos Académicos CODES++'
  }
];
