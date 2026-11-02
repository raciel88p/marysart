export interface VillageModel {
  slug: string;
  name: string;
  category: 'villa-navidena' | 'casita-rustica' | 'pueblo-miniatura' | 'fachada-campesina';
  subtitle: string;
  description: string;
  material: string;
  dimensions: string;
  hasLedSupport: boolean;
  idealRoom: string;
  priceRange: string;
  highlights: string[];
  image: string;
  popularOccasions: string[];
  searchIntentKeywords: string[];
  details: {
    origin: string;
    technique: string;
    careInstructions: string;
    weight: string;
  };
  faqs: Array<{ q: string; a: string }>;
}

export const RESIN_VILLAGES: VillageModel[] = [
  {
    slug: 'villas-navidenas-con-luz-led',
    name: 'Villas Navideñas de Resina con Luz LED',
    category: 'villa-navidena',
    subtitle: 'Escenas invernales y villas europeas artesanales con hueco y túnel para iluminación LED cálida',
    description: 'Nuestra colección más demandada y vendida en toda Costa Rica. Las villas navideñas de resina de alta resistencia reproducen escenas idílicas de poblados nevados, campanarios, cabañas alpinas y puentes de piedra pintados al óleo y acrílico con sellador antihumedad. Diseñadas estructuralmente para integrar luces LED interiores que proyectan un resplandor acogedor en ventanas y techos escarchados.',
    material: 'Resina poliéster de alta densidad y cuarzo triturado',
    dimensions: '22 cm alto x 28 cm ancho x 18 cm fondo',
    hasLedSupport: true,
    idealRoom: 'Sala principal, recibidor y centro de mesa navideño',
    priceRange: '₡24.000 - ₡48.000',
    highlights: [
      'Top Ventas Anual en Mary\'s Art Costa Rica',
      'Cavidad interior oculta para instalación rápida de cable o foco LED tipo vela',
      'Pintura texturizada con técnica de pincel seco y nieve cristalizada de alta adherencia',
      'Base nivelada antideslizante protegida con felpa para muebles finos'
    ],
    image: '/images/gallery/WhatsApp Image 2026-09-25 at 14.35.58 (1).jpeg',
    popularOccasions: ['Navidad', 'Colección familiar', 'Decoración de fin de año', 'Regalo de boda'],
    searchIntentKeywords: [
      'villas navideñas de resina costa rica',
      'casitas de resina con luz navideñas',
      'adornos de villas nevadas san jose cartago',
      'comprar pueblo navideño resina marys art'
    ],
    details: {
      origin: 'Hecho a mano en talleres de Turrialba y San Carlos, Costa Rica',
      technique: 'Vaciado en resina de doble densidad, desbastado manual, pintura acrílica profesional y pátinas al óleo',
      careInstructions: 'Limpieza periódica con brocha suave o paño de microfibra seco. No sumergir ni utilizar solventes agresivos.',
      weight: '1.2 kg - 2.5 kg'
    },
    faqs: [
      {
        q: '¿Las villas navideñas de resina vienen con la luz LED incluida?',
        a: 'Cada villa cuenta con hueco y conductos interiores listos para alojar series micro-LED de luz cálida o velitas LED a batería. Puedes solicitarla con el kit de luces preinstalado o colocar tu propia serie fácilmente.'
      },
      {
        q: '¿Por qué las casitas de resina son más duraderas que las de yeso para navidad?',
        a: 'La resina no es porosa ni quebradiza como el yeso tradicional. Tolera traslados año tras año, no se astilla en bordes de tejados ni chimeneas, y soporta cambios de temperatura y humedad ambiental típicos de Costa Rica sin descascararse.'
      },
      {
        q: '¿Realizan envíos de las villas a todo Costa Rica de forma segura?',
        a: 'Sí. Cada villa se embala con triple capa de plástico de burbujas de alto calibre, relleno amortiguante y caja rígida identificada como arte frágil. Enviamos mediante Correos de Costa Rica o entrega directa en San José y Cartago cada 22 días.'
      }
    ]
  },
  {
    slug: 'casitas-rusticas-campesinas-resina',
    name: 'casitas de resina Costa Rica',
    category: 'casita-rustica',
    subtitle: 'Homenaje al patrimonio rural tico: corredores, tejas de barro simuladas y barriales pintados a mano',
    description: 'Piezas escultóricas representativas de la arquitectura vernácula costarricense. Reproducen con asombroso detalle casas de adobe y madera, corredores amplios, gallos en cercas, tinajeras y carretas tradicionales. La resina artística permite moldear relieves milimétricos en paredes agrietadas y maderas añejadas.',
    material: 'Resina sintética de colada densa con pigmentos orgánicos',
    dimensions: '18 cm alto x 24 cm ancho x 15 cm fondo',
    hasLedSupport: true,
    idealRoom: 'Corredores, salas rústicas, restaurantes típicos y oficinas',
    priceRange: '₡18.000 - ₡38.000',
    highlights: [
      'Pieza emblemática del folclore y la memoria campesina de Costa Rica',
      'Pátinas envejecidas imitación madera centenaria y teja de arcilla cocida',
      'Resistente a climas húmedos y cálidos sin deformarse',
      'Disponible en acabado natural o esmaltado protector semi-mate'
    ],
    image: '/images/gallery/WhatsApp Image 2026-10-20 at 12.05.49.jpeg',
    popularOccasions: ['Fiestas Patrias', 'Regalos corporativos para extranjeros', 'Decoración de quintas', 'Día del Padre'],
    searchIntentKeywords: [
      'casitas rusticas tipicas de resina',
      'casas campesinas costarricenses miniatura',
      'artesania de casitas de campo costa rica',
      'comprar casita rustica tica resina'
    ],
    details: {
      origin: 'Diseño original y elaboración artesanal Mary\'s Art Costa Rica',
      technique: 'Modelado escultórico matriz, vaciado al vacío y aplicación de 6 capas cromáticas estratificadas',
      careInstructions: 'Desempolvar con plumero o soplado de aire. Apto para ambientes interiores y terrazas techadas.',
      weight: '950 g - 1.8 kg'
    },
    faqs: [
      {
        q: '¿Se pueden personalizar los colores de la casita típica?',
        a: '¡Por supuesto! En Mary\'s Art personalizamos tonos de puertas, barandas y detalles de jardines o flores en fachada según tus recuerdos o la fotografía de la casa de tus abuelos.'
      },
      {
        q: '¿Se pueden colocar en jardines exteriores o balcones?',
        a: 'La resina es sumamente fuerte, pero para exteriores directos bajo sol y lluvia constante recomendamos solicitar el sellador de poliuretano UV marino que aplicamos bajo pedido.'
      }
    ]
  },
  {
    slug: 'pueblos-miniaturas-resina-coleccionables',
    name: 'Pueblos y Escenas en Miniatura de Resina',
    category: 'pueblo-miniatura',
    subtitle: 'Conjuntos modulares de molinos, panaderías, iglesias pueblerinas y puentes de resina',
    description: 'Para los apasionados de los dioramas y las maquetas vivas. Cada pieza compone un barrio histórico con ventanas caladas, faroles a escala, empedrados texturizados y vegetación modelada en resina perenne que no acumula hongos ni humedad.',
    material: 'Resina micro-rellena ultra-definición',
    dimensions: 'Conjuntos escalables de 12 cm a 30 cm de altura',
    hasLedSupport: true,
    idealRoom: 'Vitrinas iluminadas, repisas flotantes, bibliotecas y recepciones',
    priceRange: '₡15.000 - ₡65.000',
    highlights: [
      'Piezas modulares para armar poblados a medida año tras año',
      'Compatibilidad de escala estándar (1:32 a 1:48) para figuras adicionales',
      'Canales ocultos para cableado eléctrico de iluminación en serie',
      'Terminado mate y satinado que evita reflejos plásticos artificiales'
    ],
    image: '/images/gallery/WhatsApp Image 2026-09-25 at 14.35.58 (3).jpeg',
    popularOccasions: ['Coleccionismo', 'Regalo de Navidad de lujo', 'Decoración navideña institucional', 'Aniversarios'],
    searchIntentKeywords: [
      'pueblos en miniatura de resina costa rica',
      'diorama navideno casitas resina',
      'miniaturas de casas resina decoracion',
      'comprar villas miniatura coleccion marys art'
    ],
    details: {
      origin: 'Turrialba y San Carlos, Costa Rica',
      technique: 'Pintura a mano con pincel cero, sombreado en degradé y fijador acrílico termoestable',
      careInstructions: 'Limpiar con brocha de cerdas naturales suaves.',
      weight: '800 g - 3.2 kg según conjunto'
    },
    faqs: [
      {
        q: '¿Puedo comprar una sola casita y luego agrandar la villa?',
        a: 'Sí, manejamos un catálogo continuo que te permite iniciar con una casita central o iglesia e ir agregando comercios, cabañas y puentes en cada temporada o mes.'
      },
      {
        q: '¿Ofrecen talleres para aprender a pintar y patinar estas casitas?',
        a: 'Sí, en nuestros talleres de Turrialba y San Carlos impartimos clases de pintura sobre piezas de resina cruda donde aprendes a crear efectos de nieve, piedra y madera.'
      }
    ]
  },
  {
    slug: 'fachadas-coloniales-cuadros-resina',
    name: 'Fachadas y Portales Coloniales de Resina para Pared',
    category: 'fachada-campesina',
    subtitle: 'Relieves de casitas y puertas coloniales de resina enmarcadas en madera para colgar',
    description: 'Una alternativa elegante para espacios reducidos: casitas coloniales con balcones floridos, puertas de madera tallada y farolitos modelados en alto relieve de resina montados sobre base o listos para colgar en pared.',
    material: 'Resina fundida sobre bastidor o moldura de madera tratada',
    dimensions: '35 cm alto x 25 cm ancho x 7 cm profundidad',
    hasLedSupport: false,
    idealRoom: 'Pasillos de entrada, comedores, salas de estar y recibidores',
    priceRange: '₡20.000 - ₡42.000',
    highlights: [
      'Alto relieve tridimensional de hasta 7 cm de espesor',
      'Ideal para departamentos y paredes que buscan calidez rústica',
      'Acabados con detalles botánicos realistas en buganvilias y enredaderas',
      'Herraje posterior de alta resistencia para montaje seguro'
    ],
    image: '/images/gallery/WhatsApp Image 2026-09-25 at 14.35.58 (4).jpeg',
    popularOccasions: ['Inauguración de casa nueva', 'Día de la Madre', 'Regalo para amantes del arte colonial'],
    searchIntentKeywords: [
      'fachadas coloniales de resina pared',
      'cuadros de casitas tipicas resina',
      'decoracion de paredes rusticas costa rica',
      'portales coloniales artesanales marys art'
    ],
    details: {
      origin: 'Taller de Arte Mary\'s Art Costa Rica',
      technique: 'Modelado en arcilla polimérica matriz, fundición de resina y óleo sobre texturas',
      careInstructions: 'Limpieza con paño seco o plumero.',
      weight: '1.4 kg'
    },
    faqs: [
      {
        q: '¿Viene listo para colgar?',
        a: 'Sí, todas las fachadas para colgar incluyen aldaba o soporte metálico dentado reforzado para clavo o tarugo de fijación.'
      }
    ]
  }
];
