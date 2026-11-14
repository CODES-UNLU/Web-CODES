export interface CommunityChannel {
  id: string;
  title: string;
  category: 'Canal de Difusión' | 'Grupo de Estudio' | 'Espacio Virtual';
  description: string;
  status: 'Disponible' | 'Moderado por materia' | 'Comunidad virtual';
  link?: string;
  linkLabel?: string;
}

export const communityChannels: CommunityChannel[] = [
  {
    id: 'redes-oficiales',
    title: 'Portal de Redes y Enlaces CODES',
    category: 'Canal de Difusión',
    description: 'Directorio oficial con acceso a Instagram, canal de avisos y enlaces actualizados del centro de estudiantes.',
    status: 'Disponible',
    link: 'https://link.codesunlu.com.ar/',
    linkLabel: 'Abrir los canales de CODES'
  },
  {
    id: 'grupos-materias',
    title: 'Grupos de WhatsApp por Materia y Año',
    category: 'Grupo de Estudio',
    description: 'Grupos de estudio de 1° a 5° año para resolver dudas de cursada, compartir apuntes y armar equipos de laboratorio. Pedí el enlace de tus materias en la mesita presencial o por nuestras redes.',
    status: 'Moderado por materia'
  },
  {
    id: 'discord-estudio',
    title: 'Servidor de Discord Estudiantil',
    category: 'Espacio Virtual',
    description: 'Salas de voz y canales de consulta para estudiar en grupo, practicar programación y coordinar proyectos. El acceso actualizado se publica en el portal de enlaces de CODES.',
    status: 'Comunidad virtual'
  }
];

export const codeOfConductRules = [
  'Solidaridad y respeto mutuo: La comunidad está conformada por estudiantes y docentes con distintos niveles de conocimiento. Las preguntas sobre temas iniciales son siempre bienvenidas.',
  'Prohibido el spam comercial: No se permite la difusión de servicios pagos de resolución de parciales, venta de apuntes ni publicidad sin autorización.',
  'Cuidado de datos personales: Nunca compartas contraseñas, documentos de identidad ni información sensible en los grupos abiertos.',
  'Enfoque académico: Priorizar las consultas y debates constructivos relacionados con la carrera y la universidad.'
];
