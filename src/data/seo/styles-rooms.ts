import type { DecorationStyle, Room } from '../../types/seo-cms';

export const stylesData: Record<string, DecorationStyle> = {
  rustico: {
    id: 'sty-rustico',
    slug: 'rustico',
    name: 'Rústico Artesanal & Campo Costarricense',
    aestheticDescription: 'Honra las texturas naturales, los tonos tierra y la autenticidad de los materiales nobles sin artificios. Transmite la calidez de los hogares de montaña y haciendas costarricenses.',
    colorPalette: ['Marrón corteza', 'Ocre tostado', 'Terracota cálido', 'Verde bosque musgo', 'Blanco crudo'],
    pairingMaterials: ['Madera de teca o cenízaro', 'Fibras naturales de cabuya o yute', 'Hierro forjado envejecido', 'Barro cocido'],
    lightingAdvice: 'Luz cálida de 2700K con lámparas de pantalla de lino o apliques de forja para resaltar las texturas y relieves artesanales.'
  },
  vintage: {
    id: 'sty-vintage',
    slug: 'vintage',
    name: 'Vintage Romántico & Pátina Colonial',
    aestheticDescription: 'Piezas que cuentan historias a través de pátinas envejecidas, craquelados sutiles, dorados a la hoja desgastados y detalles ornamentales renacentistas o barrocos.',
    colorPalette: ['Oro viejo amortiguado', 'Verde cardenillo', 'Rosa empolvado', 'Marfil envejecido', 'Bronce florentino'],
    pairingMaterials: ['Espejos con marco moldurado', 'Muebles decapados en tonos tiza', 'Vidrio prensado y cristal tallado'],
    lightingAdvice: 'Luz tenue y focalizada con candelabros de cera o focos cálidos dirigidos a cornisas y molduras decorativas.'
  },
  minimalista: {
    id: 'sty-minimalista',
    slug: 'minimalista',
    name: 'Minimalista Sereno & Líneas Puras',
    aestheticDescription: 'Menos es más: figuras esculturales de siluetas depuradas que actúan como piezas de acento sin sobrecargar la visión, creando atmósferas de respiración y serenidad.',
    colorPalette: ['Blanco hueso mate', 'Gris mineral suave', 'Negro carbón satinado', 'Arena cálida'],
    pairingMaterials: ['Mármol travertino', 'Hormigón pulido', 'Maderas claras de roble o haya', 'Vidrio templado'],
    lightingAdvice: 'Luz indirecta lineal empotrada o focos dimerizables que perfilan las siluetas volumétricas de la figura.'
  },
  'boho-chic': {
    id: 'sty-boho-chic',
    slug: 'boho-chic',
    name: 'Boho Chic & Conexión Tropical',
    aestheticDescription: 'Fusión desenfadada de artesanía tradicional, elementos botánicos exuberantes, espiritualidad y capas táctiles llenas de vitalidad y libertad creadora.',
    colorPalette: ['Mostaza intenso', 'Turquesa suave', 'Coral empolvado', 'Verde esmeralda', 'Beige macramé'],
    pairingMaterials: ['Ratán trenzado', 'Cojines bordados étnicos', 'Plantas de interior tipo Monstera o Helechos', 'Cerámica de barro'],
    lightingAdvice: 'Luz natural diurna abundante complementada de noche con guirnaldas cálidas o lámparas de fibras vegetales.'
  },
  clasico: {
    id: 'sty-clasico',
    slug: 'clasico',
    name: 'Clásico Elegante & Tradición Señorial',
    aestheticDescription: 'Simetría equilibrada, proporciones áureas y un respeto reverencial por la nobleza del arte clásico, ideal para ambientes de gran jerarquía arquitectónica.',
    colorPalette: ['Borgoña real', 'Azul marino zafiro', 'Pan de oro brillante', 'Marfil perlado', 'Verde malaquita'],
    pairingMaterials: ['Maderas oscuras de caoba o cedro amargo', 'Molduras de yeso perimetrales', 'Mármol blanco de Carrara'],
    lightingAdvice: 'Lámparas colgantes de bronce y apliques de pared con tulipa de cristal esmerilado para un bañado de luz uniforme.'
  }
};

export const roomsData: Record<string, Room> = {
  sala: {
    id: 'room-sala',
    slug: 'sala',
    name: 'Sala de Estar Principal',
    functionality: 'El epicentro de encuentro social y familiar de la casa; debe proyectar identidad, acogida y la hospitalidad característica costarricense.',
    focalPoints: ['Mesa de centro principal', 'Repisa sobre la chimenea o consola de recibidor', 'Mueble de biblioteca o estantería esquinera'],
    recommendedScale: 'Piezas medianas a grandes (de 30 a 60 cm de altura) que capturen la mirada sin obstruir el campo visual de conversación.',
    fengShuiAdvice: 'Ubicar piezas inspiradoras en el cuadrante noreste para cultivar la sabiduría y armonía en las conversaciones del hogar.'
  },
  jardin: {
    id: 'room-jardin',
    slug: 'jardin',
    name: 'Jardín, Balcón & Terraza Techada',
    functionality: 'Espacio de transición hacia la exuberancia natural exterior donde la decoración dialoga con el follaje, las orquídeas y el canto de las aves.',
    focalPoints: ['Pedestales entre macetas florales', 'Mesas de té de hierro o madera rústica', 'Nicho de pared en la terraza'],
    recommendedScale: 'Esculturas compactas con bases anchas y estables que resistan corrientes de aire y manipulación.',
    fengShuiAdvice: 'Colocar figuras que representen la fauna y los elementos de agua para dinamizar la energía chi positiva y la prosperidad en el entorno familiar.'
  },
  oficina: {
    id: 'room-oficina',
    slug: 'oficina',
    name: 'Oficina, Despacho & Estudio de Trabajo',
    functionality: 'Área dedicada a la concentración intelectual, la creatividad profesional y el bienestar mental durante largas jornadas.',
    focalPoints: ['Lateral del escritorio ejecutivo', 'Repisa superior detrás de la silla de trabajo (fondo de cámara para videollamadas)', 'Mesa auxiliar'],
    recommendedScale: 'Piezas medianas (de 20 a 35 cm) de perfil sereno que inspiren claridad mental sin generar dispersión visual.',
    fengShuiAdvice: 'Ubicar símbolos de constancia y discernimiento (búhos, figuras geométricas o ángeles protectores) detrás del usuario para brindar respaldo y seguridad.'
  },
  dormitorio: {
    id: 'room-dormitorio',
    slug: 'dormitorio',
    name: 'Dormitorio & Rincón de Descanso',
    functionality: 'Santuario íntimo de desconexión, regeneración del sueño, intimidad de pareja o devoción espiritual personal.',
    focalPoints: ['Mesa de noche lateral', 'Cómoda principal frente a la cama', 'Rincón de oración o lectura con sillón orejero'],
    recommendedScale: 'Figuras de escala íntima (de 15 a 30 cm) con acabados suaves al tacto y cromatismo en tonos relajantes.',
    fengShuiAdvice: 'Optar por piezas emparejadas para armonizar las relaciones afectivas o imágenes sacras protectoras que infundan serenidad nocturna.'
  }
};
