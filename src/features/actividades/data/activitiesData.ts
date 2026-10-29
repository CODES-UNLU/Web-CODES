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
  /** ID del video de YouTube (lo que va después de `watch?v=`). Activa la miniatura con reproducción al tocar */
  youtubeId?: string;
  videoDuration?: string;
}

/** Canal oficial de CODES en YouTube */
export const youtubeChannelUrl = 'https://www.youtube.com/@codes_unlu';

// Charlas grabadas del canal, de la más reciente a la más antigua
export const activitiesData: ActivityItem[] = [
  {
    id: 'charla-mercado-it',
    title: 'Radiografía del mercado IT',
    type: 'Charla',
    status: 'Grabación disponible',
    platform: 'YouTube',
    dateDisplay: 'Septiembre 2026',
    speaker: 'Ing. Hernán Kiryczun',
    description: 'Qué buscan hoy las empresas de software y cómo dar el salto de la universidad a la industria, desde la mirada de un director de operaciones que también es docente.',
    externalUrl: 'https://www.youtube.com/watch?v=r8fl3DVRGLQ',
    youtubeId: 'r8fl3DVRGLQ',
    videoDuration: '1:52:33'
  },
  {
    id: 'charla-gestion-profesional',
    title: 'Gestión profesional: claves para tu carrera',
    type: 'Charla',
    status: 'Grabación disponible',
    platform: 'YouTube',
    dateDisplay: 'Mayo 2026',
    speaker: 'Patricia Jebsen',
    description: 'Herramientas para prepararte para el mundo laboral, dinámicas actuales del mercado y preguntas respondidas en vivo.',
    externalUrl: 'https://www.youtube.com/watch?v=43jdEb1ebp8',
    youtubeId: '43jdEb1ebp8',
    videoDuration: '1:08:20'
  },
  {
    id: 'charla-hacking-etico',
    title: 'Descubriendo el mundo del hacking ético',
    type: 'Charla',
    status: 'Grabación disponible',
    platform: 'YouTube',
    dateDisplay: 'Abril 2026',
    speaker: 'Ángel Maldonado',
    description: 'La diferencia entre un hacker ético y un cibercriminal, cómo trabajan los equipos Red Team y Blue Team, Wi-Fi hacking y mitos sobre la privacidad en internet.',
    externalUrl: 'https://www.youtube.com/watch?v=RTIXINt6xFk',
    youtubeId: 'RTIXINt6xFk',
    videoDuration: '1:52:48'
  },
  {
    id: 'charla-peritaje-informatico',
    title: 'Ciberseguridad y peritaje informático',
    type: 'Charla',
    status: 'Grabación disponible',
    platform: 'YouTube',
    dateDisplay: 'Febrero 2026',
    speaker: 'Walter Agüero',
    description: 'Cómo se protege la información en la era digital y qué hace realmente un perito informático, con una mirada práctica para estudiantes.',
    externalUrl: 'https://www.youtube.com/watch?v=7NQ9KT6WgHA',
    youtubeId: '7NQ9KT6WgHA',
    videoDuration: '1:42:55'
  },
  {
    id: 'charla-junior-senior',
    title: 'De junior a senior',
    type: 'Charla',
    status: 'Grabación disponible',
    platform: 'YouTube',
    dateDisplay: 'Diciembre 2025',
    speaker: 'Valentina y Adrián Werle',
    description: 'Una charla sin filtro sobre los primeros pasos en el mundo de la programación y los consejos de carrera que nadie te cuenta.',
    externalUrl: 'https://www.youtube.com/watch?v=UC1ToqwavNA',
    youtubeId: 'UC1ToqwavNA',
    videoDuration: '1:30:28'
  },
  {
    id: 'charla-ia-pasado-presente-futuro',
    title: 'IA: pasado, presente y futuro',
    type: 'Charla',
    status: 'Grabación disponible',
    platform: 'YouTube',
    dateDisplay: 'Diciembre 2025',
    speaker: 'Jorge Sagula y José Luis Islas',
    description: 'Los orígenes de la inteligencia artificial, el estado actual de la tecnología y sus aplicaciones, y los desafíos éticos que vienen.',
    externalUrl: 'https://www.youtube.com/watch?v=UrtPaE4EBPM',
    youtubeId: 'UrtPaE4EBPM',
    videoDuration: '1:36:17'
  },
  {
    id: 'taller-git-github',
    title: 'Taller Inicial de Control de Versiones con Git y GitHub',
    type: 'Taller',
    status: 'Próximamente',
    platform: 'Presencial',
    dateDisplay: 'A confirmar durante el 1° cuatrimestre',
    speaker: 'Equipo de Software CODES',
    description: 'Encuentro práctico para aprender a usar Git desde la terminal, trabajar en repositorios remotos y colaborar en proyectos grupales de materias.',
  },
  {
    id: 'podcast-experiencia-sistemas',
    title: 'Charlas de Pasillo: ¿Cómo sobrevivir al 1° año de Sistemas?',
    type: 'Podcast',
    status: 'Próximamente',
    platform: 'Spotify',
    dateDisplay: 'En producción',
    speaker: 'Comisión CODES',
    description: 'Episodio introductorio donde charlamos sobre mitos y realidades del ingreso, organización del tiempo y cómo no frustrarse con los primeros parciales.',
  }
];
