export interface CommunityChannel {
  id: string;
  title: string;
  category: 'Canal de Difusión' | 'Grupo de Estudio' | 'Espacio Virtual';
  description: string;
  status: 'Disponible' | 'Próximamente' | 'Moderado';
  link?: string;
  linkLabel?: string;
}

export const communityChannels: CommunityChannel[] = [
  {
    id: 'redes-oficiales',
    title: 'Portal de Redes y Enlaces CODES++',
    category: 'Canal de Difusión',
    description: 'Enlace centralizado con acceso a Instagram, canales de comunicación y avisos urgentes del centro de estudiantes.',
    status: 'Disponible',
    link: 'https://link.codesunlu.com.ar/',
    linkLabel: 'Visitar link.codesunlu.com.ar'
  },
  {
    id: 'grupos-materias',
    title: 'Grupos de WhatsApp por Materia y Año',
    category: 'Grupo de Estudio',
    description: 'Canales organizados para resolver dudas de cursada, compartir apuntes y coordinar grupos de laboratorio para materias de 1° a 5° año.',
    status: 'Moderado',
    link: 'https://link.codesunlu.com.ar/',
    linkLabel: 'Consultar directorio'
  },
  {
    id: 'discord-estudio',
    title: 'Servidor de Discord Estudiantil',
    category: 'Espacio Virtual',
    description: 'Espacio virtual con salas de voz para estudiar en grupo, debatir sobre programación y compartir proyectos de software libre.',
    status: 'Disponible',
    link: 'https://link.codesunlu.com.ar/',
    linkLabel: 'Unirse al Discord'
  }
];

export const codeOfConductRules = [
  'Solidaridad y respeto mutuo: La comunidad está conformada por estudiantes y docentes con distintos niveles de conocimiento. Las preguntas sobre temas iniciales son siempre bienvenidas.',
  'Prohibido el spam comercial: No se permite la difusión de servicios pagos de resolución de parciales, venta de apuntes ni publicidad sin autorización.',
  'Cuidado de datos personales: Nunca compartas contraseñas, documentos de identidad ni información sensible en los grupos abiertos.',
  'Enfoque académico: Priorizar las consultas y debates constructivos relacionados con la carrera y la universidad.'
];
