import { onboardingSteps } from '../features/ingresantes/data/steps';
import { universityPlatforms, platformFaqs } from '../features/vida-academica/data/platformsData';
import {
  academicTopics,
  universityProcedures,
  codesInitiatives,
} from '../features/vida-academica/data/academicData';
import { calendarEvents, CALENDAR_YEAR } from '../features/calendario/data/calendarEvents';
import { toolCategories, toolsData } from '../features/herramientas/data/toolsData';
import { activitiesData } from '../features/actividades/data/activitiesData';
import { communityChannels } from '../features/comunidad/data/channelsData';

export interface SearchItem {
  id: string;
  title: string;
  category:
    | 'Ingresantes'
    | 'Vida Académica'
    | 'Calendario'
    | 'Comunidad'
    | 'Actividades'
    | 'Herramientas';
  description: string;
  url: string;
  keywords: string[];
}

const extraKeywordsById: Record<string, string[]> = {
  'paso-sedes': ['sede', 'lujan', 'san miguel', 'chivilcoy', 'campana', 'aulas', 'campus', 'mesita'],
  'paso-plataformas': ['saweb', 'platdig', 'g3w3', 'gestion de estudiantes', 'cohorte', 'aulas virtuales'],
  'paso-cursadas': ['cursada', 'materias', 'parciales', 'promocion', 'regularidad', 'correlativas', 'plan de estudios'],
  'paso-fechas': ['calendario', 'fechas', 'inscripcion', 'finales', 'receso'],
  'paso-comunidad': ['whatsapp', 'grupos', 'avisos', 'beca', 'becas', 'convocatorias', 'paro'],
  'paso-recursos': ['boleto', 'sube', 'biblioteca', 'tutorias', 'beneficios', 'beca', 'becas'],
  'orientacion-cursadas': ['cursada', 'materias', 'parciales', 'promocion', 'regularidad', 'asistencia'],
  'orientacion-finales': ['finales', 'examenes', 'mesa', 'correlativas', 'correlatividad', 'turnos', 'inscripcion'],
  'orientacion-regularidad': ['regularidad', 'readmision', 'dos materias', 'alumno regular'],
  'orientacion-planes': [
    'plan de estudios',
    'plan de estudio',
    'correlativas',
    'correlatividades',
    'licenciatura en sistemas',
    'materias',
  ],
  'tramite-boleto': ['boleto', 'sube', 'transporte', 'colectivo', 'tren', 'descuento', 'beca', 'becas', 'bienestar'],
  'tramite-regularidad': ['regularidad', 'readmision', 'mesa de entradas', 'nota', 'legajo'],
  'tramite-constancia': ['constancia', 'certificado', 'alumno regular', 'qr', 'saweb', 'g3w3'],
  'gestion-contracursadas': ['contracursadas', 'comisiones', 'horarios', 'contraturno', 'trabajo'],
};

const overviewItems: SearchItem[] = [
  {
    id: 'ingresantes-inicio',
    title: 'Guía paso a paso para Ingresantes',
    category: 'Ingresantes',
    description:
      'Recorrido ordenado para empezar Sistemas en la UNLu: sedes, mesita de CODES, plataformas según cohorte, cursadas y beneficios.',
    url: '/ingresantes',
    keywords: [
      'ingreso',
      'ingresantes',
      'primer año',
      'empezar',
      'cohorte',
      'carrera',
      'sistemas',
      'onboarding',
    ],
  },
  {
    id: 'vida-academica-plataformas',
    title: 'Plataformas digitales de la UNLu (PlatDig, SAWEB y Gestión de Estudiantes)',
    category: 'Vida Académica',
    description:
      'A qué plataforma entrar según tu tarea y cohorte: PlatDig para aulas virtuales, SAWEB (cohortes previas a 2027) y Gestión de Estudiantes (cohorte 2027+).',
    url: '/vida-academica#plataformas-unlu',
    keywords: [
      'saweb',
      'platdig',
      'g3w3',
      'aulas virtuales',
      'educativa mobile',
      'sistema de gestion de estudiantes',
      'cohorte 2027',
      'inscripcion a materias',
      'examenes',
    ],
  },
  {
    id: 'calendario-academico',
    title: `Calendario Académico ${CALENDAR_YEAR}`,
    category: 'Calendario',
    description:
      'Cronograma 2026 de inscripciones a materias, mesas de exámenes finales, inicio de cuatrimestres y receso de invierno en la UNLu.',
    url: '/calendario',
    keywords: [
      'calendario',
      'fechas',
      '2026',
      'inscripciones',
      'finales',
      'receso',
      'cuatrimestre',
      'cronograma',
    ],
  },
  {
    id: 'herramientas-guia-despliegue',
    title: 'Guía práctica: cómo publicar y desplegar un proyecto',
    category: 'Herramientas',
    description:
      'Cómo elegir entre GitHub Pages, Vercel, Netlify, Render, Railway o Supabase según si tu trabajo es estático, frontend, backend o base de datos.',
    url: '/herramientas#guia-despliegue',
    keywords: [
      'deploy',
      'desplegar',
      'publicar',
      'hosting',
      'subir pagina',
      'frontend',
      'backend',
      'base de datos',
    ],
  },
  {
    id: 'herramientas-catalogo',
    title: 'Banco de herramientas y software de desarrollo',
    category: 'Herramientas',
    description:
      'Catálogo completo de editores, Git, bases de datos, clientes HTTP, diagramas y plataformas de despliegue.',
    url: '/herramientas',
    keywords: ['herramientas', 'software', 'programas', 'ides', 'editores', 'desarrollo', 'programar'],
  },
  {
    id: 'comunidad-canales',
    title: 'Comunidad, canales oficiales y mesita presencial de CODES',
    category: 'Comunidad',
    description:
      'Redes oficiales, grupos de estudio por materia, Discord, contacto por correo y horarios de la mesita en Luján y San Miguel.',
    url: '/comunidad',
    keywords: [
      'comunidad',
      'whatsapp',
      'grupos',
      'discord',
      'mesita',
      'lujan',
      'san miguel',
      'contacto',
      'correo',
      'becas',
      'avisos',
    ],
  },
  {
    id: 'actividades-talleres',
    title: 'Actividades, charlas grabadas y talleres',
    category: 'Actividades',
    description:
      'Videoteca en YouTube con charlas de ciberseguridad, IA, investigación y mercado laboral, más próximos talleres.',
    url: '/actividades',
    keywords: ['actividades', 'charlas', 'talleres', 'youtube', 'videos', 'podcast', 'eventos'],
  },
];

const stepItems: SearchItem[] = onboardingSteps.map((step) => ({
  id: `step-${step.id}`,
  title: `Paso ${step.number}: ${step.title}`,
  category: 'Ingresantes',
  description: step.summary,
  url: `/ingresantes#${step.id}`,
  keywords: [
    step.badge ?? '',
    ...(extraKeywordsById[step.id] ?? []),
    ...step.details,
  ].filter(Boolean),
}));

const platformItems: SearchItem[] = universityPlatforms.map((platform) => ({
  id: `platform-${platform.id}`,
  title: platform.name,
  category: 'Vida Académica',
  description: `${platform.targetAudience} ${platform.purpose}`,
  url: '/vida-academica#plataformas-unlu',
  keywords: [
    platform.commonName,
    platform.mobileAppName ?? '',
    ...platform.keyFunctions,
  ].filter(Boolean),
}));

const faqItems: SearchItem[] = platformFaqs.map((faq, idx) => ({
  id: `platform-faq-${idx}`,
  title: faq.question,
  category: 'Vida Académica',
  description: faq.answer,
  url: '/vida-academica#plataformas-unlu',
  keywords: [faq.highlightPlatform, 'plataformas', 'cohorte', 'saweb', 'platdig', 'g3w3'],
}));

const topicItems: SearchItem[] = academicTopics.map((topic) => ({
  id: `topic-${topic.id}`,
  title: topic.title,
  category: 'Vida Académica',
  description: topic.summary,
  url: `/vida-academica#${topic.id}`,
  keywords: [topic.badge, ...(extraKeywordsById[topic.id] ?? []), ...topic.content],
}));

const procedureItems: SearchItem[] = universityProcedures.map((proc) => ({
  id: `proc-${proc.id}`,
  title: proc.title,
  category: 'Vida Académica',
  description: proc.description,
  url: `/vida-academica#${proc.id}`,
  keywords: [
    proc.category,
    proc.officialChannel,
    ...(extraKeywordsById[proc.id] ?? []),
    ...proc.requirements,
  ],
}));

const initiativeItems: SearchItem[] = codesInitiatives.map((init) => ({
  id: `init-${init.id}`,
  title: init.title,
  category: 'Vida Académica',
  description: init.description,
  url: `/vida-academica#${init.id}`,
  keywords: [init.status, init.period, ...(extraKeywordsById[init.id] ?? [])],
}));

const calendarItems: SearchItem[] = calendarEvents.map((event) => ({
  id: `cal-${event.id}`,
  title: `${event.title} (${event.dateDisplay})`,
  category: 'Calendario',
  description: event.description,
  url: `/calendario#${event.id}`,
  keywords: [
    event.category,
    event.period,
    event.month,
    String(CALENDAR_YEAR),
    'fecha',
    'calendario',
  ],
}));

const toolCategoryItems: SearchItem[] = toolCategories.map((cat) => ({
  id: `tool-cat-${cat.id}`,
  title: `${cat.name} (categoría de herramientas)`,
  category: 'Herramientas',
  description: cat.description,
  url: `/herramientas?cat=${cat.id}#cat-${cat.id}`,
  keywords: [cat.shortName, cat.name, 'herramientas', 'software'],
}));

const toolItems: SearchItem[] = toolsData.map((tool) => ({
  id: `tool-${tool.id}`,
  title: `${tool.name} — ${tool.role}`,
  category: 'Herramientas',
  description: `${tool.description} ${tool.whenToUse}`,
  url: `/herramientas?cat=${tool.categories[0]}#herramienta-${tool.id}`,
  keywords: [
    tool.name,
    tool.role,
    tool.license,
    tool.deploymentTier ?? '',
    ...tool.categories,
    tool.recommendedFor,
  ].filter(Boolean),
}));

const activityItems: SearchItem[] = activitiesData.map((act) => ({
  id: `act-${act.id}`,
  title: `${act.title}${act.speaker ? ` · ${act.speaker}` : ''}`,
  category: 'Actividades',
  description: `${act.dateDisplay}. ${act.description}`,
  url: `/actividades#${act.id}`,
  keywords: [act.type, act.platform, act.dateDisplay, act.speaker ?? '', 'charla', 'youtube'].filter(Boolean),
}));

const communityItems: SearchItem[] = communityChannels.map((channel) => ({
  id: `comm-${channel.id}`,
  title: channel.title,
  category: 'Comunidad',
  description: channel.description,
  url: '/comunidad',
  keywords: [channel.category, channel.status, 'comunidad', 'whatsapp', 'discord', 'mesita'],
}));

export const searchIndex: SearchItem[] = [
  ...overviewItems,
  ...stepItems,
  ...topicItems,
  ...procedureItems,
  ...initiativeItems,
  ...platformItems,
  ...faqItems,
  ...calendarItems,
  ...toolCategoryItems,
  ...toolItems,
  ...activityItems,
  ...communityItems,
];
