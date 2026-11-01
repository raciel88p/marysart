import type { Material } from '../../types/seo-cms';

export const materialsData: Record<string, Material> = {
  yeso: {
    id: 'mat-yeso',
    slug: 'yeso',
    name: 'Yeso Cerámico Escultural',
    shortName: 'yeso',
    description: 'El yeso cerámico de alta densidad empleado en Mary\'s Art es seleccionado por su porosidad controlada y pureza mineral, lo que permite lograr relieves definidos con suma nitidez y fijar policromías al óleo y acrílico con fidelidad cromática absoluta.',
    density: '1.25 - 1.40 g/cm³ tras curado completo',
    advantages: [
      'Acabado sedoso y mate de máxima absorción para pátinas al óleo',
      'Definición microscópica en rostros, túnicas y pliegues escultóricos',
      'Material 100% ecológico, libre de emisiones y amigable con el hogar',
      'Excelente peso base que brinda estabilidad en repisas y mesas'
    ],
    recommendedUses: [
      'Figuras de interior en salas, altares familiares y dormitorios',
      'Esculturas religiosas con pan de oro y acabados renacentistas',
      'Candelabros y centros de mesa decorativos'
    ],
    maintenanceTips: [
      'Limpiar en seco con brocha suave de cerdas naturales o paño de microfibra',
      'No exponer a humedad directa ni exteriores descubiertos',
      'Aplicar cera microcristalina incolora cada dos años para conservar el lustre'
    ],
    tactileFeel: 'Superficie lisa, aterciopelada y de temperatura fresca al tacto.',
    averageWeight: 'De 1.2 kg a 4.5 kg según tamaño de la pieza'
  },
  resina: {
    id: 'mat-resina',
    slug: 'resina',
    name: 'Resina Polimérica de Alta Resistencia',
    shortName: 'resina',
    description: 'Nuestra resina técnica polimérica combina ligereza estructural con extraordinaria resistencia al impacto. Es el soporte preferido para piezas con detalles finos volados (alas, ramas, dedos) y para ambientes que requieren durabilidad superior.',
    density: '1.10 - 1.18 g/cm³ con aditivos anti-degradación UV',
    advantages: [
      'Alta resistencia a caídas fortuitas y golpes en bordes finos',
      'Excelente retención de pigmentos metálicos y pátinas acrílicas',
      'Tolerancia notable a variaciones de temperatura y humedad ambiental',
      'Permite piezas de gran formato con peso cómodo para manipular'
    ],
    recommendedUses: [
      'Esculturas modernas y contemporáneas para salas y recibidores',
      'Nacimientos y figuras navideñas manipuladas con frecuencia',
      'Figuras de animales y arte botánico para terrazas techadas'
    ],
    maintenanceTips: [
      'Limpiar con paño levemente humedecido con agua destilada',
      'Evitar disolventes químicos agresivos como acetona o tíner',
      'Proteger de luz solar directa prolongada para evitar fatiga térmica'
    ],
    tactileFeel: 'Textura sólida, compacta y ligeramente satinada con gran sensación de firmeza.',
    averageWeight: 'De 0.8 kg a 3.2 kg según dimensiones'
  },
  ceramica: {
    id: 'mat-ceramica',
    slug: 'ceramica',
    name: 'Cerámica Decorativa Horneada y Esmaltada',
    shortName: 'cerámica',
    description: 'Elaborada a base de arcillas refinadas y horneada a temperatura media, la cerámica decorativa de Mary\'s Art destaca por su resonancia mineral, su peso noble y la profundidad de sus esmaltes y pinturas artísticas.',
    density: '2.10 - 2.30 g/cm³',
    advantages: [
      'Inalterabilidad química frente a la luz y el paso de los años',
      'Superficie vítrea o porosa según el acabado deseado',
      'Aporte artesanal de tradición alfarera con gran valor de coleccionista',
      'Apta para jarrones, fuentes decorativas y figuras conmemorativas'
    ],
    recommendedUses: [
      'Centros de mesa en comedores formales y salas de té',
      'Piedras de altar, bases de lámpara y piezas de colección',
      'Decoración de oficinas ejecutivas y estudios de lectura'
    ],
    maintenanceTips: [
      'Lavar suavemente con agua y jabón neutro si no posee pátinas al óleo descubiertas',
      'Secar de inmediato con paño suave de algodón',
      'Proteger la base con fieltros adhesivos para evitar roces con muebles finos'
    ],
    tactileFeel: 'Densidad sólida, resonante, fría y con textura mineral pulida.',
    averageWeight: 'De 1.5 kg a 5.0 kg'
  },
  madera: {
    id: 'mat-madera',
    slug: 'madera',
    name: 'Madera Curada y Cincelada',
    shortName: 'madera',
    description: 'Maderas nobles de Costa Rica tratadas contra xilófagos y selladas para evitar alabeos. Constituyen la base y el soporte de esculturas clásicas donde la veta natural complementa los acabados en resina y yeso.',
    density: '0.65 - 0.85 g/cm³ según especie forestal certificada',
    advantages: [
      'Calidez visual inigualable con vetas y nudos naturales irrepetibles',
      'Aroma tenue a maderas nobles y selladores artesanales de cera de abejas',
      'Envejecimiento armónico que adquiere pátina y carácter con las décadas',
      'Aporta peso visual orgánico a cualquier espacio interior'
    ],
    recommendedUses: [
      'Bases y peanas para esculturas sacras y piezas de colección',
      'Tallas de relieve colonial y marcos barrocos para cuadros',
      'Elementos de decoración rústica y estilo granja contemporánea'
    ],
    maintenanceTips: [
      'Nutrir periódicamente con aceite mineral o cera natural de abeja',
      'Mantener alejada de fuentes de calor directo y corrientes de aire seco',
      'Retirar el polvo con gamuza de algodón suave'
    ],
    tactileFeel: 'Tacto orgánico, suavemente satinado con relieve sutil de las fibras leñosas.',
    averageWeight: 'De 1.0 kg a 6.0 kg según volumen'
  }
};
