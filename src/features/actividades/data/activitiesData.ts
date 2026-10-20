export interface ActivityItem {
  id: string;
  title: string;
  type: 'Charla' | 'Taller' | 'Podcast' | 'Entrevista' | 'Evento';
  status: 'Grabación disponible' | 'Próximamente' | 'Finalizado';
  platform: 'YouTube' | 'Spotify' | 'Presencial' | 'Online';
  dateDisplay: string;
  speaker?: string;
  description: string;
  externalUrl?: string;
  videoDuration?: string;
}

export const activitiesData: ActivityItem[] = [
  {
    id: 'charla-ciberseguridad',
    title: 'Introducción a la Ciberseguridad y Seguridad Ofensiva',
    type: 'Charla',
    status: 'Grabación disponible',
    platform: 'YouTube',
    dateDisplay: 'Ciclo Académico Anterior',
    speaker: 'Especialistas invitados y graduados UNLu',
    description: 'Conceptos fundamentales de seguridad informática, vulnerabilidades comunes en aplicaciones web y buenas prácticas de desarrollo seguro.',
    externalUrl: 'https://www.youtube.com/@codesunlu',
    videoDuration: '1h 20m'
  },
  {
    id: 'charla-desarrollo-web',
    title: 'Desarrollo Web Moderno: De la Universidad a la Industria IT',
    type: 'Charla',
    status: 'Grabación disponible',
    platform: 'YouTube',
    dateDisplay: 'Ciclo Académico Anterior',
    speaker: 'Estudiantes avanzados y desarrolladores',
    description: 'Experiencias de inserción profesional, tecnologías demandadas en el mercado laboral y cómo construir proyectos de software durante la carrera.',
    externalUrl: 'https://www.youtube.com/@codesunlu',
    videoDuration: '1h 10m'
  },
  {
    id: 'taller-git-github',
    title: 'Taller Inicial de Control de Versiones con Git y GitHub',
    type: 'Taller',
    status: 'Próximamente',
    platform: 'Presencial',
    dateDisplay: 'A confirmar durante el 1° cuatrimestre',
    speaker: 'Equipo de Software CODES++',
    description: 'Encuentro práctico para aprender a usar Git desde la terminal, trabajar en repositorios remotos y colaborar en proyectos grupales de materias.',
  },
  {
    id: 'podcast-experiencia-sistemas',
    title: 'Charlas de Pasillo: ¿Cómo sobrevivir al 1° año de Sistemas?',
    type: 'Podcast',
    status: 'Próximamente',
    platform: 'Spotify',
    dateDisplay: 'En producción',
    speaker: 'Comisión CODES++',
    description: 'Episodio introductorio donde charlamos sobre mitos y realidades del ingreso, organización del tiempo y cómo no frustrarse con los primeros parciales.',
  }
];
