import type { Animal } from '../../types/seo-cms';

export const animalsData: Record<string, Animal> = {
  colibri: {
    id: 'ani-colibri',
    slug: 'colibri',
    name: 'Colibrí',
    pluralName: 'Colibríes',
    symbolism: 'Alegría, vitalidad, resiliencia y el puente espiritual con los seres queridos en el pensamiento ancestral.',
    costaRicanContext: 'Con más de 50 especies en Costa Rica, desde las faldas del Volcán Turrialba hasta Monteverde, el colibrí es emblema de gracia natural.',
    artisanDetail: 'Pintado a mano con veladuras tornasoladas en verde esmeralda, azul turquesa y violeta iridiscente para replicar el plumaje brillante bajo la luz.',
    popularFinishes: ['Pátina tornasol metálica', 'Esmalte satinado esmeralda', 'Detalles dorados en las alas', 'Base en tronco rústico']
  },
  buho: {
    id: 'ani-buho',
    slug: 'buho',
    name: 'Búho de la Sabiduría',
    pluralName: 'Búhos',
    symbolism: 'Conocimiento profundo, intuición, vigilancia serena y protección energética del hogar.',
    costaRicanContext: 'Habitante silencioso de los bosques nubosos de Cartago y la cordillera central costarricense.',
    artisanDetail: 'Plumaje texturizado esculpido pluma por pluma, con ojos lacados de gran vivacidad y tonos cobrizos combinados con marfil.',
    popularFinishes: ['Bronce envejecido con pátina turquesa', 'Tonalidad madera nogal con luces doradas', 'Blanco nórdico texturizado']
  },
  tucan: {
    id: 'ani-tucan',
    slug: 'tucan',
    name: 'Tucán Pico Iris',
    pluralName: 'Tucanes',
    symbolism: 'Comunicación, sociabilidad, abundancia y alegría caribeña.',
    costaRicanContext: 'El tucán pico iris (Ramphastos sulfuratus) es el embajador de la selva tropical de Turrialba, Sarapiquí y el Caribe costarricense.',
    artisanDetail: 'Pico policromado a pincel fino con degradados de amarillo solar, verde lima, naranja y azul cielo sellado con barniz cerámico reflectivo.',
    popularFinishes: ['Negro mate en plumaje y pico brillante policromado', 'Pátina vintage colonial', 'Acabado en biscocho pintado al óleo']
  },
  jaguar: {
    id: 'ani-jaguar',
    slug: 'jaguar',
    name: 'Jaguar Ancestral',
    pluralName: 'Jaguares',
    symbolism: 'Poder, liderazgo silencioso, valentía y la fuerza protectora de la Madre Tierra según la cosmovisión bribri.',
    costaRicanContext: 'El felino más imponente de las reservas de Talamanca y Parque Nacional Tortuguero.',
    artisanDetail: 'Modelado muscular de alta fidelidad anatómica, con manchas en roseta aplicadas con pincel de precisión sobre degradado ocre dorado.',
    popularFinishes: ['Pátina oro viejo con manchas en sombra tostada', 'Negro obsidiana con ojos esmeralda', 'Acabado arenisca prehispánica']
  },
  tortuga: {
    id: 'ani-tortuga',
    slug: 'tortuga',
    name: 'Tortuga Marina',
    pluralName: 'Tortugas',
    symbolism: 'Longevidad, paciencia, perseverancia y armonía con los ciclos del océano y la vida.',
    costaRicanContext: 'Símbolo del desove natural en Tortuguero, Playa Grande y Ostional en las costas de Costa Rica.',
    artisanDetail: 'Caparazón esculpido con escudos concéntricos y pátinas verde oliva con reflejos perlados que evocan la humedad marina.',
    popularFinishes: ['Efecto concha nácar y azul océano', 'Pátina de bronce marino envejecido', 'Verde jade con relieve marfil']
  },
  mariposa: {
    id: 'ani-mariposa',
    slug: 'mariposa',
    name: 'Mariposa Morpho Azul',
    pluralName: 'Mariposas Morpho',
    symbolism: 'Transformación del alma, esperanza, belleza efímera y renacimiento constante.',
    costaRicanContext: 'El vuelo eléctrico de la Morpho helenor es un espectáculo distintivo de los senderos y cafetales de Turrialba y Orosi.',
    artisanDetail: 'Pigmentación por capas con azul cobalto y mica brillante que genera destellos según el ángulo de incidencia de la luz solar.',
    popularFinishes: ['Azul cobalto perlado con bordes carbón', 'Dorado satinado con azul profundo', 'Efecto vitral traslúcido en resina']
  }
};
