/**
 * Datos oficiales verificados sobre plataformas y servicios digitales de la UNLu.
 * 
 * Reglas de calidad académica:
 * - Toda plataforma debe contar con URL oficial de la UNLu y fuente de referencia verificada.
 * - Se distingue estrictamente el acceso para cohortes previas a 2027 (SAWEB)
 *   del acceso para la cohorte 2027 en adelante (Sistema de Gestión de Estudiantes).
 * - No se confunde PlatDig (aulas virtuales E-ducativa) con los sistemas de gestión académica.
 */

export interface AcademicVerification {
  officialSource: string;
  sourceUrl: string;
  lastVerifiedDate: string;
  applicableAudience: string;
  editorialLead: string;
  validationStatus: 'Verificado oficial' | 'En revisión' | 'Provisorio';
}

export interface UniversityPlatform {
  id: string;
  name: string;
  commonName: string;
  purpose: string;
  targetAudience: string;
  officialUrl: string;
  hasMobileApp?: boolean;
  mobileAppName?: string;
  keyFunctions: string[];
  verification: AcademicVerification;
}

export interface PlatformFaq {
  question: string;
  answer: string;
  highlightPlatform: 'PlatDig' | 'SAWEB' | 'Sistema de Gestión de Estudiantes' | 'Ambos sistemas';
  platformUrl?: string;
  appNote?: string;
}

export const universityPlatforms: UniversityPlatform[] = [
  {
    id: 'saweb',
    name: 'Servicios Académicos Web (SAWEB)',
    commonName: 'SAWEB · Acceso para estudiantes',
    purpose: 'Gestión académica tradicional para trámites, inscripciones a cursadas y exámenes, situación académica y certificaciones.',
    targetAudience: 'Estudiantes de grado y pregrado de cohortes anteriores a 2027.',
    officialUrl: 'https://saweb.unlu.edu.ar/academica/estudiante-index.php',
    keyFunctions: [
      'Inscripción a asignaturas del cuatrimestre.',
      'Inscripción a mesas de examen final.',
      'Consulta de historia académica y notas de cursada.',
      'Solicitud de constancia de alumno regular.',
      'Solicitud del beneficio del Boleto Estudiantil Universitario (SUBE).'
    ],
    verification: {
      officialSource: 'Portal oficial de Acceso a Información Académica UNLu',
      sourceUrl: 'https://www.unlu.edu.ar/acceso-inf-acad.html',
      lastVerifiedDate: '2026-10-19',
      applicableAudience: 'Cohortes anteriores a 2027',
      editorialLead: 'Comisión de Asuntos Académicos CODES++',
      validationStatus: 'Verificado oficial'
    }
  },
  {
    id: 'gestion-estudiantes-2027',
    name: 'Nuevo Sistema de Gestión de Estudiantes',
    commonName: 'Sistema de Gestión de Estudiantes (Cohorte 2027+)',
    purpose: 'Plataforma oficial de autogestión académica de la UNLu para la nueva cohorte.',
    targetAudience: 'Estudiantes de grado y pregrado ingresantes desde la cohorte 2027 en adelante.',
    officialUrl: 'https://g3w3.unlu.edu.ar/',
    keyFunctions: [
      'Autogestión de cursadas e inscripciones a materias.',
      'Inscripción a turnos de exámenes finales.',
      'Seguimiento del plan de estudios y correlatividades.',
      'Trámites académicos y certificados digitales.'
    ],
    verification: {
      officialSource: 'Acceso a Información Académica e Información de Ingreso UNLu',
      sourceUrl: 'https://www.ingresouniversitario.unlu.edu.ar/?q=node/4',
      lastVerifiedDate: '2026-10-19',
      applicableAudience: 'Cohorte 2027 en adelante',
      editorialLead: 'Comisión de Asuntos Académicos CODES++',
      validationStatus: 'Verificado oficial'
    }
  },
  {
    id: 'platdig',
    name: 'PlatDig (Plataforma Digital UNLu)',
    commonName: 'PlatDig · Aulas Virtuales',
    purpose: 'Campus virtual de cursadas (basado en E-ducativa) donde los docentes publican materiales, consignas de trabajos prácticos, foros de consulta y actividades.',
    targetAudience: 'Todos los estudiantes y docentes de la universidad durante el dictado de asignaturas.',
    officialUrl: 'https://platdig.unlu.edu.ar/',
    hasMobileApp: true,
    mobileAppName: 'Educativa Mobile',
    keyFunctions: [
      'Acceso a aulas virtuales de las asignaturas en las que estás inscripto.',
      'Descarga de bibliografía, diapositivas y guías de trabajos prácticos.',
      'Entrega de tareas y participación en foros de debate de la cátedra.',
      'Comunicaciones directas del equipo docente.'
    ],
    verification: {
      officialSource: 'Departamento de Ciencias Básicas UNLu',
      sourceUrl: 'https://www.basicas.unlu.edu.ar/?q=node/917',
      lastVerifiedDate: '2026-10-19',
      applicableAudience: 'Todas las cohortes',
      editorialLead: 'Comisión de Asuntos Académicos CODES++',
      validationStatus: 'Verificado oficial'
    }
  }
];

export const platformFaqs: PlatformFaq[] = [
  {
    question: '¿Dónde consulto mis aulas virtuales y materiales de estudio?',
    answer: 'En PlatDig (platdig.unlu.edu.ar). Es el campus virtual de la UNLu donde cada cátedra sube las guías de ejercicios, diapositivas teóricas, fechas de parciales y foros de consulta.',
    highlightPlatform: 'PlatDig',
    platformUrl: 'https://platdig.unlu.edu.ar/'
  },
  {
    question: '¿Dónde me inscribo a materias y exámenes finales?',
    answer: 'En el sistema académico que corresponde a tu cohorte de ingreso: si ingresaste antes de 2027, usás SAWEB (saweb.unlu.edu.ar). Si sos ingresante cohorte 2027 en adelante, usás el nuevo Sistema de Gestión de Estudiantes (g3w3.unlu.edu.ar). No te inscribís a través de PlatDig.',
    highlightPlatform: 'Ambos sistemas'
  },
  {
    question: '¿Dónde consulto mi situación académica y notas de finales?',
    answer: 'En tu sistema académico correspondiente (SAWEB o Sistema de Gestión de Estudiantes). Allí figura tu historia académica completa con materias aprobadas, condición de regularidad y promedios oficiales.',
    highlightPlatform: 'Ambos sistemas'
  },
  {
    question: '¿Qué acceso corresponde exactamente a mi cohorte?',
    answer: 'La UNLu diferencia el acceso según el año de tu cohorte de ingreso: para cohortes previas a 2027 rige SAWEB; para la cohorte 2027 en adelante se utiliza el Sistema de Gestión de Estudiantes oficial.',
    highlightPlatform: 'Ambos sistemas'
  },
  {
    question: '¿Puedo acceder a las aulas virtuales de PlatDig desde el celular?',
    answer: 'Sí. Además de acceder mediante cualquier navegador web móvil en platdig.unlu.edu.ar, podés descargar la aplicación oficial Educativa Mobile (Android / iOS) e ingresar la dirección del campus de la UNLu para recibir notificaciones y leer materiales.',
    highlightPlatform: 'PlatDig',
    platformUrl: 'https://platdig.unlu.edu.ar/',
    appNote: 'Disponible en Google Play Store y Apple App Store bajo el nombre Educativa Mobile.'
  }
];
