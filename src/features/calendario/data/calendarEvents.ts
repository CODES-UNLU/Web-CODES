export const CALENDAR_YEAR = 2026;

export interface CalendarEvent {
  id: string;
  title: string;
  category: 'Inscripciones' | 'Exámenes Finales' | 'Clases' | 'Receso y Feriados';
  categoryVariant: 'brand' | 'warning' | 'info' | 'neutral';
  startDate: string;
  endDate: string;
  dateDisplay: string;
  period: '1° Cuatrimestre' | '2° Cuatrimestre' | 'Receso de Invierno' | 'Cierre de Año';
  month: string;
  isConfirmed: boolean;
  sourceNote: string;
  description: string;
}

export const calendarEvents: CalendarEvent[] = [
  {
    id: 'inscripcion-materias-1c',
    title: 'Inscripción a asignaturas del 1° cuatrimestre',
    category: 'Inscripciones',
    categoryVariant: 'warning',
    startDate: '2026-03-02',
    endDate: '2026-03-08',
    dateDisplay: '2 al 8 de marzo de 2026',
    period: '1° Cuatrimestre',
    month: 'Marzo',
    isConfirmed: false,
    sourceNote: 'Período habitual según calendario general UNLu.',
    description: 'Inscripción online obligatoria a comisiones y materias a través del sistema académico de tu cohorte (SAWEB para cohortes previas a 2027 / Sistema de Gestión de Estudiantes para cohorte 2027+).'
  },
  {
    id: 'inicio-clases-1c',
    title: 'Inicio del 1° cuatrimestre',
    category: 'Clases',
    categoryVariant: 'brand',
    startDate: '2026-03-16',
    endDate: '2026-03-20',
    dateDisplay: '16 de marzo de 2026',
    period: '1° Cuatrimestre',
    month: 'Marzo',
    isConfirmed: false,
    sourceNote: 'Fecha estimada según resolución habitual del Consejo Superior UNLu.',
    description: 'Comienzo formal del dictado de clases teóricas y prácticas en Sede Central Luján y Centros Regionales.'
  },
  {
    id: 'turno-mayo-finales',
    title: 'Turno especial de exámenes finales (Mayo)',
    category: 'Exámenes Finales',
    categoryVariant: 'info',
    startDate: '2026-05-04',
    endDate: '2026-05-15',
    dateDisplay: '4 al 15 de mayo de 2026',
    period: '1° Cuatrimestre',
    month: 'Mayo',
    isConfirmed: false,
    sourceNote: 'Sujeto a confirmación de llamados de mesa.',
    description: 'Mesa de exámenes finales ordinarios. Recordá inscribirte por tu sistema académico (SAWEB o Gestión de Estudiantes) con al menos 48 hs hábiles de anticipación.'
  },
  {
    id: 'fin-clases-1c',
    title: 'Finalización de clases del 1° cuatrimestre',
    category: 'Clases',
    categoryVariant: 'brand',
    startDate: '2026-06-29',
    endDate: '2026-07-04',
    dateDisplay: '29 de junio al 4 de julio de 2026',
    period: '1° Cuatrimestre',
    month: 'Julio',
    isConfirmed: false,
    sourceNote: 'Calendario general UNLu.',
    description: 'Cierre de actas de cursada y publicación de notas de parciales y promociones.'
  },
  {
    id: 'receso-invernal',
    title: 'Receso académico y administrativo invernal',
    category: 'Receso y Feriados',
    categoryVariant: 'neutral',
    startDate: '2026-07-13',
    endDate: '2026-07-25',
    dateDisplay: '13 al 25 de julio de 2026',
    period: 'Receso de Invierno',
    month: 'Julio',
    isConfirmed: true,
    sourceNote: 'Receso oficial provincial y universitario.',
    description: 'Receso invernal sin actividades académicas presenciales ni virtuales.'
  },
  {
    id: 'turno-julio-agosto-finales',
    title: 'Turno general de exámenes finales (Julio / Agosto)',
    category: 'Exámenes Finales',
    categoryVariant: 'info',
    startDate: '2026-07-27',
    endDate: '2026-08-08',
    dateDisplay: '27 de julio al 8 de agosto de 2026',
    period: 'Receso de Invierno',
    month: 'Agosto',
    isConfirmed: false,
    sourceNote: 'Llamados habituales de invierno.',
    description: 'Dos llamados a exámenes finales para materias del 1° cuatrimestre y asignaturas previas.'
  },
  {
    id: 'inscripcion-materias-2c',
    title: 'Inscripción a asignaturas del 2° cuatrimestre',
    category: 'Inscripciones',
    categoryVariant: 'warning',
    startDate: '2026-08-03',
    endDate: '2026-08-09',
    dateDisplay: '3 al 9 de agosto de 2026',
    period: '2° Cuatrimestre',
    month: 'Agosto',
    isConfirmed: false,
    sourceNote: 'Según cronograma habitual de Secretaría Académica UNLu.',
    description: 'Período de altas y bajas de materias para la segunda mitad del ciclo lectivo.'
  },
  {
    id: 'inicio-clases-2c',
    title: 'Inicio del 2° cuatrimestre',
    category: 'Clases',
    categoryVariant: 'brand',
    startDate: '2026-08-17',
    endDate: '2026-08-21',
    dateDisplay: '17 de agosto de 2026',
    period: '2° Cuatrimestre',
    month: 'Agosto',
    isConfirmed: false,
    sourceNote: 'Estimado según ciclos anteriores.',
    description: 'Comienzo de clases de la segunda mitad del año.'
  },
  {
    id: 'turno-diciembre-finales',
    title: 'Turno general de exámenes finales (Diciembre)',
    category: 'Exámenes Finales',
    categoryVariant: 'info',
    startDate: '2026-11-30',
    endDate: '2026-12-19',
    dateDisplay: '30 de noviembre al 19 de diciembre de 2026',
    period: 'Cierre de Año',
    month: 'Diciembre',
    isConfirmed: false,
    sourceNote: 'Sujeto a cronograma departamental.',
    description: 'Mesa de exámenes finales de cierre de ciclo lectivo con dos llamados ordinarios.'
  }
];
