import type { Course, Testimonial } from '../../types/seo-cms';

export const coursesData: Record<string, Course> = {
  'clases-pintura': {
    id: 'course-pintura',
    slug: 'clases-pintura',
    name: 'Clases de Pintura en Yeso y Resina & Técnicas de Pátina',
    audience: 'Adultos, jóvenes, emprendedores y amantes de la decoración artesanal',
    curriculum: [
      'Preparación del soporte: sellado, lijado fino e imprimación blanca',
      'Teoría del color, mezclas armónicas y degradados en húmedo sobre húmedo',
      'Técnicas de pátina al óleo: envejecido con betún de Judea, turquesas y cobrizos',
      'Aplicación de dorados metálicos, purpurinas finas y pan de oro con mixtión',
      'Pincel seco (Dry-brush) para resaltar relieves anatómicos y pliegues',
      'Barnices finales: satinado, mate sedoso y acabado porcelana'
    ],
    schedule: 'Miércoles, viernes y sábados con modalidad presencial en Turrialba y jornadas especiales itinerantes',
    includedMaterials: [
      'Pieza en resina o yeso de libre elección del catálogo del taller',
      'Pinturas acrílicas, óleos y pigmentos artísticos de uso libre en clase',
      'Pinceles de pelo de marta y cerda sintética de diversos calibres',
      'Selladores, pátinas y barnices profesionales'
    ],
    benefitPsychological: 'Nuestras clases funcionan como una sesión inmersiva de arteterapia: reducen el estrés, fomentan la concentración plena y estimulan la satisfacción de crear con tus propias manos una obra que adornará tu hogar.'
  },
  arteterapia: {
    id: 'course-arteterapia',
    slug: 'arteterapia',
    name: 'Talleres de Arteterapia & Expresión Creativa con Escultura',
    audience: 'Personas que buscan desconexión emocional, bienestar mental, adultos mayores y grupos familiares',
    curriculum: [
      'Desbloqueo creativo a través del tacto con arcilla y resina',
      'Psicología de las formas y paletas cromáticas relajantes',
      'Técnicas de pincelada libre y texturas intuitivas',
      'Meditación activa mientras se modelan detalles florales y orgánicos'
    ],
    schedule: 'Sábados por la mañana y sesiones personalizadas bajo reserva',
    includedMaterials: ['Todos los materiales, delantales y refrigerio artesanal de café de la zona'],
    benefitPsychological: 'Canalización de emociones retenidas, fortalecimiento de la autoestima y reconexión profunda con la tranquilidad interior.'
  }
};

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Doña Carmen Arguedas',
    location: 'Cartago Centro',
    rating: 5,
    quote: 'La restauración de la Virgen de los Ángeles que perteneció a mi abuela fue un milagro en manos de Maria. Llegó con las manitas quebradas y el manto sin brillo; hoy luce con una dignidad y solemnidad que nos conmovió a toda la familia. 100% recomendados en Cartago.',
    serviceOrProduct: 'Restauración de Vírgenes en Yeso',
    date: '15 de Enero de 2026'
  },
  {
    id: 'test-2',
    author: 'Lic. Rodrigo Montero',
    location: 'Escazú, San José',
    rating: 5,
    quote: 'Adquirí la Sagrada Familia labrada en yeso y candelabros clásicos para nuestra sala. El nivel de detalle en el rostro y la calidez del dorado artesanal superó todas nuestras expectativas. El embalaje para el envío a Escazú fue sumamente seguro.',
    serviceOrProduct: 'Figuras de Yeso para Sala de Estar',
    date: '3 de Febrero de 2026'
  },
  {
    id: 'test-3',
    author: 'Viviana Solano Vargas',
    location: 'Turrialba, Cartago',
    rating: 5,
    quote: 'Asistir a las clases de pintura en el taller de Maria en Turrialba ha sido mi mejor terapia semanal. No solo aprendí a dominar las pátinas envejecidas y el pan de oro, sino que el ambiente de compañerismo y paz que se respira no tiene comparación.',
    serviceOrProduct: 'Clases de Pintura y Arteterapia',
    date: '20 de Febrero de 2026'
  },
  {
    id: 'test-4',
    author: 'Marlon Chaves Navarro',
    location: 'Ciudad Quesada, San Carlos',
    rating: 5,
    quote: 'Nos repararon una escultura antigua de San Judas Tadeo en resina para la capilla familiar. La unión de los dedos rotos es completamente invisible y la policromía quedó perfecta. Un trabajo de restauradores de verdad.',
    serviceOrProduct: 'Restauración de Santos en Resina',
    date: '28 de Febrero de 2026'
  },
  {
    id: 'test-5',
    author: 'Adriana Brenes Porras',
    location: 'Santa Ana, San José',
    rating: 5,
    quote: 'Comisioné una figura de colibrí y mariposa en resina para la terraza de mi casa en Santa Ana. Los colores esmeralda con reflejos tornasol cambian según la luz del atardecer. Es la pieza favorita de todos mis invitados.',
    serviceOrProduct: 'Figura de Colibrí en Resina Decorativa',
    date: '10 de Marzo de 2026'
  }
];
