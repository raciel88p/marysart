import type { RestorationType } from '../../types/seo-cms';

export const restorationsData: Record<string, RestorationType> = {
  'restauracion-imagenes-religiosas': {
    id: 'rest-img-religiosas',
    slug: 'restauracion-imagenes-religiosas',
    name: 'Restauración de Imágenes Religiosas',
    category: 'sacra',
    commonProblems: [
      'Desprendimiento de policromía por cambios bruscos de humedad ambiental',
      'Fracturas severas en extremidades, dedos y coronas por caídas accidentales',
      'Capas de barnices sintéticos oxidados y oscurecidos por el humo de velas',
      'Ataque de carcoma en piezas de soporte de madera o descascarado de yeso antiguo'
    ],
    stepByStepProcess: [
      { step: 1, title: 'Inspección organoléptica y diagnóstico histórico', detail: 'Analizamos la antigüedad, el tipo de soporte (yeso, escayola, resina o madera) y las intervenciones anteriores inadecuadas.' },
      { step: 2, title: 'Limpieza físico-química controlada', detail: 'Retiramos con solventes suaves el hollín de cera, polvo adherido y repintes defectuosos sin dañar la capa pictórica original.' },
      { step: 3, title: 'Consolidación estructural y anclaje con espigas', detail: 'Fijamos fisuras y unimos extremidades fracturadas mediante pernos internos de acero inoxidable o varillas de fibra.' },
      { step: 4, title: 'Reintegración volumétrica y modelado artesanal', detail: 'Reconstruimos faltantes anatómicos (dedos, narices, pliegues de túnicas) utilizando masillas de conservación reversibles.' },
      { step: 5, title: 'Policromía diferenciada y dorados al agua/mixtión', detail: 'Aplicamos pigmentos de alta resistencia a la luz con técnica de puntillismo o rigatino para una reintegración cromática imperceptible.' },
      { step: 6, title: 'Capa de protección final con filtro UV', detail: 'Sellamos con barniz de resina natural dammar o microcristalino mate para proteger la imagen por décadas.' }
    ],
    materialsUsed: [
      'Masillas de restauración epóxicas y de sulfato cálcico de pH neutro',
      'Pigmentos puros al barniz y acrílicos de bellas artes libres de ácido',
      'Hojilla de oro fino y pan de bronce importado',
      'Espigas de refuerzo estructural en acero quirúrgico inoxidable',
      'Barnices satinados con filtro UV antimicrobiano'
    ],
    estimatedTurnaround: '1 a 3 semanas según la complejidad y el tiempo requerido para el fraguado y secado entre capas.',
    preservationTips: [
      'Evitar encender velas a menos de 40 cm de la escultura sacra',
      'No usar limpiadores domésticos con cloro, alcohol o amoniaco',
      'Ubicar la imagen lejos de la corriente directa de aires acondicionados o sol poniente'
    ]
  },
  'restauracion-santos': {
    id: 'rest-santos',
    slug: 'restauracion-santos',
    name: 'Restauración de Santos',
    category: 'sacra',
    commonProblems: [
      'Pérdida de atributos iconográficos (báculos, llaves, lirios, crucifijos de mano)',
      'Desgaste en aureolas doradas por contacto repetido de los devotos',
      'Decoloración por exposición a la luz solar en ventanas o nichos',
      'Rajaduras en la peana o base por peso desbalanceado'
    ],
    stepByStepProcess: [
      { step: 1, title: 'Revisión iconográfica canónica', detail: 'Verificamos los atributos correctos de la advocación del santo (San Judas, San Antonio, San José, San Miguel).' },
      { step: 2, title: 'Fijación de capas sueltas de estuco', detail: 'Inyectamos consolidantes acrílicos acuosos para evitar que el estuco se desprenda al manipular la pieza.' },
      { step: 3, title: 'Moldeado y reintegración de atributos', detail: 'Esculpimos en resina o madera los báculos, aureolas y libros sagrados faltantes con exactitud histórica.' },
      { step: 4, title: 'Policromía de carnaciones y ropajes', detail: 'Recuperamos los tonos sonrosados de los rostros y los mantos profundos con veladuras sucesivas.' },
      { step: 5, title: 'Aplicación de pátina de veneración', detail: 'Entonamos los dorados y sombras para conservar la atmósfera de antigüedad respetada.' }
    ],
    materialsUsed: ['Resinas de conservación de baja retracción', 'Óleos de linaza refinados', 'Pan de oro 22k y mixtión rápido', 'Cera de carnauba microfina'],
    estimatedTurnaround: '7 a 15 días hábiles.',
    preservationTips: ['Limpiar con plumero de plumas naturales una vez por quincena', 'No frotar con fuerza sobre las zonas doradas']
  },
  'restauracion-virgenes': {
    id: 'rest-virgenes',
    slug: 'restauracion-virgenes',
    name: 'Restauración de Vírgenes',
    category: 'sacra',
    commonProblems: [
      'Brazos y manos del Niño Jesús o de la Virgen fracturados tras traslados',
      'Rostros manchados por lágrimas de cera caliente o humo de veladoras',
      'Coronas desgarradas o desprendidas del anclaje superior',
      'Descamación del manto azul cobalto o blanco nácar'
    ],
    stepByStepProcess: [
      { step: 1, title: 'Limpieza enzimática de residuos grasos', detail: 'Disolvemos suavemente los restos de parafina y hollín con emulsiones que respetan la policromía.' },
      { step: 2, title: 'Consolidación de soporte y unión milimétrica', detail: 'Ensamblamos extremidades con resinas poliméricas transparentes de nula expansión.' },
      { step: 3, title: 'Recreación de mantos drapeados', detail: 'Modelamos los vuelos de las vestiduras marianas respetando el movimiento original de la escultura.' },
      { step: 4, title: 'Pintura artística con pigmentos de luz', detail: 'Recreamos los celestes, oros y matices marfileños con pinceladas al aire de alta fidelidad.' },
      { step: 5, title: 'Sellado hidrófugo satinado', detail: 'Protección contra la condensación y la humedad típica de las zonas montañosas de Costa Rica.' }
    ],
    materialsUsed: ['Acrílicos profesionales Liquitex & Golden', 'Gesso de estuco tradicional', 'Resina epoxi estructural de grado conservación', 'Barniz dammar satinado'],
    estimatedTurnaround: '10 a 20 días hábiles.',
    preservationTips: ['Mantener en nicho de cristal si es posible para resguardarla del polvo', 'Nunca rociar agua bendita directamente sobre la policromía']
  },
  'restauracion-porcelana': {
    id: 'rest-porcelana',
    slug: 'restauracion-porcelana',
    name: 'Restauración de Porcelana',
    category: 'ceramica',
    commonProblems: [
      'Fracturas limpias o esquirlas desprendidas por impacto súbito',
      'Pérdida de asas, pétalos florales decorativos y remates',
      'Pegaduras amarillentas antiguas hechas con pegamentos domésticos inapropiados',
      'Rayaduras superficiales en el vidriado brillante'
    ],
    stepByStepProcess: [
      { step: 1, title: 'Decapado térmico de adhesivos antiguos', detail: 'Removemos pegantes de contacto o cianoacrilato degradado que manchan la porcelana sin erosionar el biscocho.' },
      { step: 2, title: 'Ensamble invisible con resina óptica', detail: 'Alineamos las piezas con resinas epóxicas transparentes de índice de refracción igual al de la porcelana.' },
      { step: 3, title: 'Relleno de faltantes y pulido micrométrico', detail: 'Reconstruimos fragmentos perdidos con pastas vítreas formuladas en frío y pulidas hasta grano 8000.' },
      { step: 4, title: 'Igualación de tono y brillo vítreo', detail: 'Aplicamos aerógrafo con esmaltes de curado UV para clonar la profundidad del vidriado original.' }
    ],
    materialsUsed: ['Resinas epóxicas ópticas Hxtal NYL-1', 'Pigmentos inorgánicos en polvo', 'Pulidores de diamante micrograno', 'Lacas cerámicas de alto brillo'],
    estimatedTurnaround: '10 a 18 días hábiles.',
    preservationTips: ['Las piezas restauradas son exclusivamente de exhibición estética, no aptas para uso culinario o microondas', 'Lavar solo en seco con paño suave']
  },
  'restauracion-ceramica': {
    id: 'rest-ceramica',
    slug: 'restauracion-ceramica',
    name: 'Restauración de Cerámica',
    category: 'ceramica',
    commonProblems: [
      'Grietas capilares por estrés térmico o golpes de transporte',
      'Pérdida de bordes en vasijas, platos de colección o esculturas de barro',
      'Eflorescencias salinas por absorción de humedad en tiestos porosos',
      'Pinturas decorativas desgastadas por limpieza abrasiva previa'
    ],
    stepByStepProcess: [
      { step: 1, title: 'Desalinización y limpieza de poros', detail: 'Baños de agua desionizada para extraer sales acumuladas que provocan descascarados internos.' },
      { step: 2, title: 'Consolidación de la matriz arcillosa', detail: 'Impregnación con silicato de etilo o polímeros acrílicos que devuelven la cohesión a la arcilla debilitada.' },
      { step: 3, title: 'Reintegración con masilla de arcilla enriquecida', detail: 'Modelado del faltante con textura idéntica al grano cerámico de la pieza.' },
      { step: 4, title: 'Pátina matizada y sellado cerámico', detail: 'Aplicación de pigmentos minerales que replican el envejecimiento natural del barro horneado.' }
    ],
    materialsUsed: ['Paraloid B-72 en solvente controlado', 'Polvo de cerámica molida y microbalones', 'Pigmentos óxidos de hierro y manganeso', 'Consolidantes minerales'],
    estimatedTurnaround: '7 a 14 días hábiles.',
    preservationTips: ['No mojar con líquidos calientes', 'Exhibir sobre bases acolchadas con corcho o fieltro']
  },
  'restauracion-esculturas': {
    id: 'rest-esculturas',
    slug: 'restauracion-esculturas',
    name: 'Restauración de Esculturas',
    category: 'escultura',
    commonProblems: [
      'Inestabilidad estructural por rotura en tobillos o anclajes a la peana',
      'Pérdida de volúmenes anatómicos en piezas de resina, yeso o madera',
      'Despigmentación por luz artificial continua o humedad',
      'Rayones profundos y astillamientos en relieves frontales'
    ],
    stepByStepProcess: [
      { step: 1, title: 'Estudio de baricentro y tensiones', detail: 'Calculamos el punto de gravedad para reforzar la estructura interna antes de cualquier retoque estético.' },
      { step: 2, title: 'Estructuración interna con varillas', detail: 'Taladrado milimétrico e inserción de espigas de refuerzo que resistirán movimientos futuros.' },
      { step: 3, title: 'Modelado escultórico por capas', detail: 'Reconstrucción anatómica fiel siguiendo proporciones artísticas de la obra.' },
      { step: 4, title: 'Aplicación de policromía artística a pincel', detail: 'Integración cromática completa con veladuras que funden la restauración con el original.' },
      { step: 5, title: 'Sellado de alta durabilidad', detail: 'Capas de acabado satinado o mate de grado museo.' }
    ],
    materialsUsed: ['Varillas de acero inoxidable', 'Masillas epóxicas bicomponente de alta carga mineral', 'Pinturas acrílicas profesionales', 'Barnices poliuretánicos al agua'],
    estimatedTurnaround: '12 a 24 días hábiles.',
    preservationTips: ['Manipular siempre sujetando la base con ambas manos, nunca de los brazos o cabeza', 'Mantener en entornos entre 45% y 65% de humedad relativa']
  },
  'restauracion-cuadros': {
    id: 'rest-cuadros',
    slug: 'restauracion-cuadros',
    name: 'Restauración de Cuadros y Relieves',
    category: 'cuadros',
    commonProblems: [
      'Craquelado con desprendimiento de película pictórica en relieves sobre madera',
      'Hollín y grasa adherida a la superficie por décadas en comedores o capillas',
      'Roturas en marcos de moldura de yeso con pan de oro desgarrado',
      'Deformación del soporte por humedad o ataque biológico'
    ],
    stepByStepProcess: [
      { step: 1, title: 'Fijación de la capa pictórica levantada', detail: 'Aplicamos calor controlado y adhesivos de esturión o metilcelulosa para reasentar las escamas sueltas.' },
      { step: 2, title: 'Desbarnizado y remoción de velos blanquecinos', detail: 'Retiramos barnices oxidados con hisopos de algodón y soluciones calibradas de pH.' },
      { step: 3, title: 'Estucado y nivelación de lagunas', detail: 'Rellenamos pérdidas con gesso fino y enrasamos a nivel de la pintura circundante.' },
      { step: 4, title: 'Reintegración cromática al barniz', detail: 'Pintura reversible punto por punto que mimetiza el original sin falsear la obra.' },
      { step: 5, title: 'Barnizado protector final y dorado de marco', detail: 'Restauramos las molduras de yeso con hojilla de oro y sellamos el lienzo o relieve con barniz UV.' }
    ],
    materialsUsed: ['Gesso a la creta de Bolonia', 'Colas de conejo de origen tradicional', 'Pigmentos al barniz Maimeri / Gamblin', 'Pan de oro fino al mixtión'],
    estimatedTurnaround: '15 a 30 días hábiles.',
    preservationTips: ['No colgar sobre chimeneas activas ni en paredes con filtración de humedad', 'Ventilar periódicamente la estancia']
  }
};
