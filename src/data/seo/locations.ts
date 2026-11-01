import type { Location } from '../../types/seo-cms';

export const locationsData: Record<string, Location> = {
  cartago: {
    id: 'loc-cartago',
    cantonSlug: 'cartago',
    cantonName: 'Cartago Central',
    province: 'Cartago',
    deliveryEstimate: '24 a 48 horas mediante ruta directa del taller o Correos de Costa Rica',
    workshopDistanceNote: 'Zona de entrega prioritaria directa desde nuestro taller en Turrialba cada 22 días o despacho express semanal.',
    localPickupAvailable: true,
    climateConsiderations: 'Clima fresco y templado; ideal para figuras de yeso y resina con sellado satinado que prevenga absorción de humedad.'
  },
  turrialba: {
    id: 'loc-turrialba',
    cantonSlug: 'turrialba',
    cantonName: 'Turrialba',
    province: 'Cartago',
    deliveryEstimate: 'Mismo día o 24 horas con retiro directo en taller y entrega a domicilio',
    workshopDistanceNote: 'Sede principal de nuestro taller artesanal y escuela de pintura. Retiro inmediato y atención directa con la artista Maria.',
    localPickupAvailable: true,
    climateConsiderations: 'Zona de alta pluviosidad; todas nuestras piezas para Turrialba llevan triple sellado anti-humedad hidrófugo.'
  },
  'san-jose': {
    id: 'loc-san-jose',
    cantonSlug: 'san-jose',
    cantonName: 'San José Central',
    province: 'San José',
    deliveryEstimate: '24 a 48 horas por Correos de Costa Rica o entrega programada ruta mensual de taller',
    workshopDistanceNote: 'Punto estratégico de entrega en la capital; envíos protegidos con embalaje de alta amortiguación.',
    localPickupAvailable: false,
    climateConsiderations: 'Clima urbano moderado; excelente durabilidad en interiores para cualquier tipo de pátina o pan de oro.'
  },
  alajuela: {
    id: 'loc-alajuela',
    cantonSlug: 'alajuela',
    cantonName: 'Alajuela Central',
    province: 'Alajuela',
    deliveryEstimate: '24 a 48 horas vía mensajería certificada Correos de Costa Rica',
    workshopDistanceNote: 'Envíos regulares al Valle Central occidental con embalaje reforzado anti-impacto.',
    localPickupAvailable: false,
    climateConsiderations: 'Clima cálido en el valle; nuestras resinas con filtro UV previenen cualquier alteración en piezas ubicadas cerca de ventanales.'
  },
  heredia: {
    id: 'loc-heredia',
    cantonSlug: 'heredia',
    cantonName: 'Heredia Central',
    province: 'Heredia',
    deliveryEstimate: '24 a 48 horas a cualquier distrito herediano',
    workshopDistanceNote: 'Despacho frecuente para residencias y parroquias del cantón de las flores.',
    localPickupAvailable: false,
    climateConsiderations: 'Ambiente fresco de montaña; acabado en barniz satinado de alta protección.'
  },
  'san-carlos': {
    id: 'loc-san-carlos',
    cantonSlug: 'san-carlos',
    cantonName: 'San Carlos',
    province: 'Alajuela',
    deliveryEstimate: '24 a 48 horas con punto de coordinación en Ciudad Quesada y La Fortuna',
    workshopDistanceNote: 'Segundo punto de enlace y coordinación de Mary\'s Art para la zona norte del país.',
    localPickupAvailable: true,
    climateConsiderations: 'Zona tropical húmeda; tratamiento sellador especial con barniz de poliuretano flexible para garantizar permanencia total de las policromías.'
  },
  escazu: {
    id: 'loc-escazu',
    cantonSlug: 'escazu',
    cantonName: 'Escazú',
    province: 'San José',
    deliveryEstimate: '24 a 48 horas con entrega a domicilio en San Rafael, San Antonio y Guachipelín',
    workshopDistanceNote: 'Zona de alta demanda para piezas decorativas de gran formato y restauración sacra patrimonial.',
    localPickupAvailable: false,
    climateConsiderations: 'Microclima seco en verano; óptimo para piezas con detalles en hojilla de oro y barnices mate.'
  },
  'santa-ana': {
    id: 'loc-santa-ana',
    cantonSlug: 'santa-ana',
    cantonName: 'Santa Ana',
    province: 'San José',
    deliveryEstimate: '24 a 48 horas con servicio prioritario a residenciales y oficinas',
    workshopDistanceNote: 'Despacho coordinado directo a Pozos, Piedades y Santa Ana Centro.',
    localPickupAvailable: false,
    climateConsiderations: 'Zona cálida y ventilada; idóneo para decoración de interiores minimalista y contemporánea.'
  },
  'perez-zeledon': {
    id: 'loc-perez-zeledon',
    cantonSlug: 'perez-zeledon',
    cantonName: 'Pérez Zeledón',
    province: 'San José',
    deliveryEstimate: '48 a 72 horas mediante encomienda de confianza o Correos de Costa Rica',
    workshopDistanceNote: 'Servicio continuo para San Isidro de El General y comunidades aledañas del sur.',
    localPickupAvailable: false,
    climateConsiderations: 'Variedad de pisos altitudinales; piezas reforzadas térmicamente para máxima estabilidad.'
  },
  paraiso: {
    id: 'loc-paraiso',
    cantonSlug: 'paraiso',
    cantonName: 'Paraíso',
    province: 'Cartago',
    deliveryEstimate: '24 horas desde nuestro taller o entrega directa programada',
    workshopDistanceNote: 'Cantón vecino de Turrialba; envíos directos muy rápidos con costo mínimo de entrega.',
    localPickupAvailable: true,
    climateConsiderations: 'Clima fresco y agradable del Valle de Ujarrás y Orosi.'
  }
};
