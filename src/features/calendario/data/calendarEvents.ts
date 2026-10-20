export interface CalendarEvent {
  id: string;
  title: string;
  category: 'Inscripciones' | 'Exámenes Finales' | 'Clases' | 'Receso y Feriados';
  categoryVariant: 'brand' | 'warning' | 'info' | 'neutral';
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
    dateDisplay: '02 al 08 de Marzo (Provisorio)',
    period: '1° Cuatrimestre',
    month: 'Marzo',
    isConfirmed: false,
    sourceNote: 'Período habitual según calendario general UNLu. A confirmar publicación oficial.',
    description: 'Inscripción online obligatoria a comisiones y materias a través del sistema académico de tu cohorte (SAWEB para cohortes previas a 2027 / Sistema de Gestión de Estudiantes para cohorte 2027+).'
  },
  {
    id: 'inicio-clases-1c',
    title: 'Inicio del 1° cuatrimestre',
    category: 'Clases',
    categoryVariant: 'brand',
    dateDisplay: 'Mediados de Marzo (Provisorio)',
    period: '1° Cuatrimestre',
    month: 'Marzo',
    isConfirmed: false,
    sourceNote: 'Fecha sujeta a resolución del Consejo Superior de la UNLu.',
    description: 'Comienzo formal del dictado de clases teóricas y prácticas en Sede Central Luján y Centros Regionales.'
  },
  {
    id: 'turno-mayo-finales',
    title: 'Turno especial de exámenes finales (Mayo)',
    category: 'Exámenes Finales',
    categoryVariant: 'info',
    dateDisplay: 'Primera quincena de Mayo',
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
    dateDisplay: 'Primera semana de Julio',
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
    dateDisplay: 'Segunda quincena de Julio',
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
    dateDisplay: 'Fines de Julio y principios de Agosto',
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
    dateDisplay: 'Primera semana de Agosto',
    period: '2° Cuatrimestre',
    month: 'Agosto',
    isConfirmed: false,
    sourceNote: 'A confirmar cronograma exacto por Secretaría Académica UNLu.',
    description: 'Período de altas y bajas de materias para la segunda mitad del ciclo lectivo.'
  },
  {
    id: 'inicio-clases-2c',
    title: 'Inicio del 2° cuatrimestre',
    category: 'Clases',
    categoryVariant: 'brand',
    dateDisplay: 'Mediados de Agosto',
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
    dateDisplay: 'Primeras tres semanas de Diciembre',
    period: 'Cierre de Año',
    month: 'Diciembre',
    isConfirmed: false,
    sourceNote: 'Sujeto a cronograma departamental.',
    description: 'Mesa de exámenes finales de cierre de ciclo lectivo con dos llamados ordinarios.'
  }
];
