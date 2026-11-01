import type { Occasion } from '../../types/seo-cms';

export const occasionsData: Record<string, Occasion> = {
  'dia-de-la-madre': {
    id: 'occ-madre',
    slug: 'dia-de-la-madre',
    name: 'Día de la Madre en Costa Rica',
    emotionalIntent: 'Rendir homenaje al amor incondicional, la entrega y la ternura materna con un regalo perdurable que escape de lo desechable y se convierta en una joya familiar.',
    giftSignificance: 'Una figura artesanal pintada a mano con dedicatoria personalizada evoca cuidado paciente, belleza serena y la permanencia del afecto.',
    customizationIdeas: [
      'Inscripción caligráfica en la base con la fecha y nombre de la madre',
      'Selección de colores favoritos de su sala o altar personal',
      'Inclusión de flores esculpidas en resina o mariposas de bendición'
    ],
    packagingSuggestion: 'Caja rígida artesanal con lazo de satén terracota, viruta ecológica protectora y tarjeta en papel pergamino escrita con pluma caligráfica.'
  },
  'bautizo-primera-comunion': {
    id: 'occ-bautizo',
    slug: 'bautizo-primera-comunion',
    name: 'Bautizo & Primera Comunión',
    emotionalIntent: 'Celebrar el inicio del camino de fe y la pureza espiritual de los pequeños de la casa, dejando un recuerdo tangible bendecido.',
    giftSignificance: 'Los ángeles custodios y las Vírgenes de la Dulce Espera en yeso o resina fina son reliquias que acompañarán al niño durante todo su crecimiento.',
    customizationIdeas: [
      'Fecha del sacramento y nombre del ahijado grabado en bajorrelieve en la peana',
      'Acabados en blanco nácar, celeste cielo o rosa pastel con sutiles toques dorados',
      'Rosario miniatura entrelazado en las manos de la figura'
    ],
    packagingSuggestion: 'Cofre blanco con detalles dorados, tarjeta de oración consagrada y aroma tenue a lavanda y vainilla.'
  },
  'inauguracion-casa': {
    id: 'occ-inauguracion',
    slug: 'inauguracion-casa',
    name: 'Inauguración de Casa Nueva (Housewarming)',
    emotionalIntent: 'Desechar las energías de mudanza y bendecir las nuevas paredes con luz, abundancia, unión y protección perenne para los nuevos propietarios.',
    giftSignificance: 'Regalar una Sagrada Familia, una pieza de fauna costarricense o un candelabro clásico otorga de inmediato el alma cálida que transforma una casa en un verdadero hogar.',
    customizationIdeas: [
      'Paleta tonal coordinada con los nuevos acabados de paredes y pisos',
      'Detalle conmemorativo: "Bendición para el hogar Familia [Apellido]"',
      'Certificado de pieza única de autor firmada por la artista Maria'
    ],
    packagingSuggestion: 'Bolsa de tela de lino ecológica Mary\'s Art con lazo rústico y rama de romero o canela natural para bendición aromática.'
  },
  navidad: {
    id: 'occ-navidad',
    slug: 'navidad',
    name: 'Navidad & Fiestas de Fin de Año',
    emotionalIntent: 'Reunir a la familia en torno a la mesa y el portal, compartiendo la alegría del nacimiento y la esperanza de un nuevo ciclo venturoso.',
    giftSignificance: 'Los pasitos navideños y los árboles drapeados esculpidos en resina son piezas patrimoniales que pasan de madres a hijos durante generaciones en Costa Rica.',
    customizationIdeas: [
      'Mantos con pan de oro legítimo y tonalidades litúrgicas clásicas',
      'Incorporación de luz LED microcálida integrada en la base o gruta',
      'Piezas complementarias para expandir el portal año tras año'
    ],
    packagingSuggestion: 'Caja con motivos festivos tradicionales, campana de cascabel dorado y certificado de autenticidad decembrina.'
  },
  aniversario: {
    id: 'occ-aniversario',
    slug: 'aniversario',
    name: 'Aniversario de Bodas & Pareja',
    emotionalIntent: 'Conmemorar los años compartidos, la solidez del compromiso y la creación de un espacio de vida común enriquecido por el arte.',
    giftSignificance: 'Piezas emparejadas (como aves en cortejo, árboles de vida o figuras de amor fiel) simbolizan la complicidad y el crecimiento conjunto.',
    customizationIdeas: [
      'Grabado de los años celebrados (Bodas de Yeso, Madera o Resina)',
      'Combinación de tonos cálidos y metálicos que simbolicen la unión',
      'Diseño en relieve con los nombres de la pareja entrelazados'
    ],
    packagingSuggestion: 'Estuche de lujo negro mate con cinta dorada y dedicatoria personalizada para la pareja.'
  }
};
