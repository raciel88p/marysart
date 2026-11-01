import { materialsData } from '../data/seo/materials.js';
import { locationsData } from '../data/seo/locations.js';
import { animalsData } from '../data/seo/animals.js';
import { stylesData, roomsData } from '../data/seo/styles-rooms.js';
import { occasionsData } from '../data/seo/occasions.js';
import { restorationsData } from '../data/seo/restorations.js';
import { coursesData, testimonialsData } from '../data/seo/courses.js';
import type { ProgrammaticPageData } from '../types/seo-cms.js';

const BASE_URL = 'https://resinaartmary.cr';

/**
 * Genera el paquete de contenido SEO exhaustivo (800-1500 palabras) para Figuras por Material en Cantón / Provincia
 */
export function buildMaterialLocationPage(materialSlug: string, cantonSlug: string): ProgrammaticPageData {
  const mat = materialsData[materialSlug] || materialsData.yeso;
  const loc = locationsData[cantonSlug] || locationsData.cartago;

  const url = `${BASE_URL}/figuras-${mat.slug}/${loc.cantonSlug}`;
  const h1 = `Figuras de ${mat.shortName.charAt(0).toUpperCase() + mat.shortName.slice(1)} en ${loc.cantonName}, Costa Rica`;
  const metaTitle = `Figuras de ${mat.shortName.charAt(0).toUpperCase() + mat.shortName.slice(1)} en ${loc.cantonName} | Taller Mary's Art CR`;
  const metaDescription = `Adquiere y encarga figuras de ${mat.shortName} pintadas a mano en ${loc.cantonName}, ${loc.province}. Piezas sacras, decorativas y acabados de autor con envíos y entrega directa.`;

  const quickAnswer = `En Mary's Art ofrecemos figuras de ${mat.shortName} de alta calidad artesanal con entrega directa y envíos garantizados a todo ${loc.cantonName} (${loc.province}). Cada pieza es modelada o moldeada con ${mat.density}, pulida manualmente y pintada a pincel con pátinas al óleo, acrílicos profesionales y aplicaciones de pan de oro o barnices resistentes al clima local. El tiempo promedio de despacho hacia ${loc.cantonName} es de ${loc.deliveryEstimate}.`;

  const heroSummary = `Descubre la más selecta colección de figuras de ${mat.shortName} para hogares, altares y oficinas en ${loc.cantonName}. Obras artesanales creadas por la artista Maria en nuestro taller de Costa Rica con acabados perdurables diseñados para resistir el clima de ${loc.province}.`;

  const tableAttributes = [
    { key: 'Material Principal', value: mat.name },
    { key: 'Ubicación de Cobertura', value: `${loc.cantonName}, Provincia de ${loc.province}, Costa Rica` },
    { key: 'Tiempo de Entrega Estimado', value: loc.deliveryEstimate },
    { key: 'Técnica de Acabado', value: 'Pátina al óleo, pincel seco, policromía fina y sellado protector hidrófugo' },
    { key: 'Densidad y Resistencia', value: mat.density },
    { key: 'Canal de Compra / Cotización', value: 'Vía WhatsApp directo (+506 6036-7249) con fotos previas y asesoría de color' }
  ];

  const editorialContentHtml = `
    <article class="prose dark:prose-invert max-w-none space-y-6 text-stone-700 dark:text-stone-300 leading-relaxed">
      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">1. ¿Por qué elegir figuras de ${mat.shortName} para tu espacio en ${loc.cantonName}?</h2>
      <p>
        El arte escultórico en ${mat.shortName} es una tradición arraigada en las familias de ${loc.cantonName} y toda la provincia de ${loc.province}. En Mary's Art seleccionamos materias primas de pureza certificada que aseguran un secado idóneo, una superficie libre de porosidades indeseadas y un anclaje firme de los pigmentos.
      </p>
      <p>
        ${mat.description} Al vivir en ${loc.cantonName}, debes tomar en cuenta las condiciones atmosféricas de la zona: <em>${loc.climateConsiderations}</em>. Por esta razón, cada escultura que sale de nuestro taller recibe un tratamiento superficial específico formulado para garantizar que los colores se mantengan vívidos y sin decoloración a lo largo de las décadas.
      </p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">2. Propiedades técnicas y ventajas del ${mat.name}</h2>
      <p>
        Al comparar diferentes opciones del mercado costarricense, las piezas de ${mat.shortName} elaboradas en nuestro taller sobresalen por su consistencia estructural y su meticuloso trabajo a mano alzada. A continuación resumimos las ventajas primordiales:
      </p>
      <ul class="list-disc pl-6 space-y-2">
        ${mat.advantages.map(adv => `<li><strong>${adv.split(':')[0] || 'Ventaja'}:</strong> ${adv}</li>`).join('')}
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">3. Proceso artesanal de elaboración en Mary's Art Costa Rica</h2>
      <p>
        Desde nuestra sede en Turrialba y puntos de coordinación en Cartago y San Carlos, cada figura atraviesa un riguroso ciclo de creación de seis fases:
      </p>
      <ol class="list-decimal pl-6 space-y-2">
        <li><strong>Vaciado y fraguado de alta precisión:</strong> Uso de moldes de silicona vulcanizada para capturar hasta las más sutiles texturas de telas, plumas y expresiones faciales.</li>
        <li><strong>Desmolde cuidadoso y curado térmico:</strong> Tiempo de fraguado controlado para evitar microfracturas internas causadas por tensión de secado.</li>
        <li><strong>Lijado al agua y desbaste fino:</strong> Eliminación manual de líneas de partición y rebabas para lograr una piel suave y continua.</li>
        <li><strong>Imprimación selladora hidrófuga:</strong> Capa base que bloquea la humedad y prepara el sustrato para la absorción homogénea de color.</li>
        <li><strong>Policromía artística a pincel:</strong> La instructora y artista Maria aplica veladuras en degradé, sombras profundas con betún purificado y destellos dorados con pan de oro o purpurinas ricas en brillo.</li>
        <li><strong>Sellado con laca protectora UV:</strong> Aplicación de dos manos cruzadas de barniz de alta resistencia (en opciones mate, satinado o brillante según la pieza).</li>
      </ol>

      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">4. Usos recomendados en residencias y oficinas de ${loc.cantonName}</h2>
      <p>
        Nuestros clientes en ${loc.cantonName} incorporan estas obras principalmente en:
      </p>
      <ul class="list-disc pl-6 space-y-2">
        ${mat.recommendedUses.map(use => `<li>${use}</li>`).join('')}
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">5. Guía de conservación y limpieza profesional</h2>
      <p>
        Para que tu figura de ${mat.shortName} conserve su esplendor intacto como el primer día, nuestros maestros restauradores aconsejan:
      </p>
      <ul class="list-disc pl-6 space-y-2">
        ${mat.maintenanceTips.map(tip => `<li>${tip}</li>`).join('')}
      </ul>
    </article>
  `;

  const faqs = [
    {
      question: `¿Hacen envíos de figuras de ${mat.shortName} a todos los distritos de ${loc.cantonName}?`,
      answer: `Sí, contamos con envíos protegidos a todos los distritos de ${loc.cantonName} mediante Correos de Costa Rica o entrega directa coordinada con el taller. Cada figura se embala con burbuja anti-impacto, refuerzo perimetral y caja rígida.`
    },
    {
      question: `¿Puedo solicitar una figura de ${mat.shortName} con colores personalizados?`,
      answer: `¡Por supuesto! Puedes indicarnos la paleta de colores de tu sala, altar u oficina mediante fotos por WhatsApp. La artista Maria adaptará los tonos, metales (dorado, bronce, plata) y pátinas a tu preferencia.`
    },
    {
      question: `¿Cuánto tarda la entrega en ${loc.cantonName}?`,
      answer: `Para piezas disponibles en stock el despacho es de ${loc.deliveryEstimate}. Para encargos con policromía a medida, el tiempo de elaboración y secado es de 5 a 8 días hábiles.`
    },
    {
      question: `¿Qué cuidados especiales requiere el ${mat.shortName} en ${loc.cantonName}?`,
      answer: `${loc.climateConsiderations} Por ello, nuestras piezas ya salen selladas de taller. Se recomienda retirar el polvo con paño seco de microfibra y no utilizar productos químicos de limpieza doméstica.`
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#localbusiness`,
        name: "Mary's Art Costa Rica",
        url: BASE_URL,
        telephone: '+50660367249',
        priceRange: '₡₡',
        address: {
          '@type': 'PostalAddress',
          addressLocality: loc.cantonName,
          addressRegion: loc.province,
          addressCountry: 'CR'
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: `${loc.cantonName}, ${loc.province}`
        }
      },
      {
        '@type': 'Product',
        name: `Figuras de ${mat.name} en ${loc.cantonName}`,
        description: metaDescription,
        category: 'Arte decorativo y figuras escultóricas',
        material: mat.name,
        brand: {
          '@type': 'Brand',
          name: "Mary's Art"
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'CRC',
          lowPrice: 15000,
          highPrice: 200000,
          availability: 'https://schema.org/InStock',
          areaServed: `${loc.cantonName}, Costa Rica`
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: `Figuras de ${mat.name}`, item: `${BASE_URL}/catalogo` },
          { '@type': 'ListItem', position: 3, name: loc.cantonName, item: url }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer
          }
        }))
      }
    ]
  };

  return {
    slug: `${mat.slug}-${loc.cantonSlug}`,
    url,
    h1,
    metaTitle,
    metaDescription,
    canonical: url,
    breadcrumb: [
      { name: 'Inicio', url: '/' },
      { name: 'Catálogo', url: '/catalogo' },
      { name: `Figuras en ${mat.shortName}`, url: `/figuras-${mat.slug}/cartago` },
      { name: loc.cantonName, url }
    ],
    heroSummary,
    quickAnswer,
    tableAttributes,
    editorialContentHtml,
    faqs,
    testimonials: testimonialsData.slice(0, 3),
    relatedLinks: [
      { label: `Figuras de yeso en ${loc.cantonName}`, url: `/figuras-yeso/${loc.cantonSlug}`, category: 'Materiales' },
      { label: `Figuras de resina en ${loc.cantonName}`, url: `/figuras-resina/${loc.cantonSlug}`, category: 'Materiales' },
      { label: `Restauración en ${loc.cantonName}`, url: `/restauracion/${loc.cantonSlug}`, category: 'Servicios' },
      { label: `Clases de pintura en ${loc.cantonName}`, url: `/clases-pintura/${loc.cantonSlug}`, category: 'Cursos' }
    ],
    cta: {
      title: `¿Buscas una figura de ${mat.shortName} única para tu espacio en ${loc.cantonName}?`,
      subtitle: `Contáctanos por WhatsApp para enviarte el catálogo en tiempo real con precios, tamaños y opciones de colores personalizados.`,
      whatsappMessage: `¡Hola Mary's Art! Me interesa consultar por figuras de ${mat.shortName} con entrega en ${loc.cantonName}.`,
      buttonText: `Consultar por WhatsApp en ${loc.cantonName}`
    },
    schema
  };
}

/**
 * Genera el paquete de contenido para combinatoria Figura de Animal en Material
 */
export function buildAnimalMaterialPage(animalSlug: string, materialSlug: string): ProgrammaticPageData {
  const ani = animalsData[animalSlug] || animalsData.colibri;
  const mat = materialsData[materialSlug] || materialsData.resina;

  const url = `${BASE_URL}/figura-${ani.slug}-${mat.slug}`;
  const h1 = `Figura de ${ani.name} en ${mat.shortName.charAt(0).toUpperCase() + mat.shortName.slice(1)} Pintada a Mano`;
  const metaTitle = `Figura de ${ani.name} en ${mat.name} | Mary's Art Costa Rica`;
  const metaDescription = `Figura artesanal de ${ani.name} elaborada en ${mat.shortName} de alta resistencia. Pintura artística a mano, simbolismo costarricense y acabados de autor. Envíos nacionales.`;

  const quickAnswer = `La figura de ${ani.name} en ${mat.shortName} de Mary's Art es una escultura decorativa creada por artesanos costarricenses que destaca por su detalle minucioso y su profunda carga simbólica (${ani.symbolism}). Fabricada en ${mat.name} (${mat.density}), cuenta con ${ani.artisanDetail}. Se entrega con sellado impermeable apto para interiores y terrazas protegidas, con despacho a todo Costa Rica en 24 a 48 horas.`;

  const heroSummary = `Llena tu hogar con la magia de la fauna costarricense con esta exclusiva figura de ${ani.name} en ${mat.shortName}. Una pieza que rinde tributo a nuestra biodiversidad con técnicas de pátina y policromía de autor.`;

  const tableAttributes = [
    { key: 'Animal Representado', value: ani.name },
    { key: 'Material Base', value: mat.name },
    { key: 'Simbolismo Energético', value: ani.symbolism },
    { key: 'Técnica de Pintura', value: ani.artisanDetail },
    { key: 'Acabados Más Populares', value: ani.popularFinishes.join(', ') },
    { key: 'Origen', value: "Taller Artesanal Mary's Art (Turrialba, Costa Rica)" }
  ];

  const editorialContentHtml = `
    <article class="prose dark:prose-invert max-w-none space-y-6 text-stone-700 dark:text-stone-300 leading-relaxed">
      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">1. Significado y simbolismo del ${ani.name} en el hogar</h2>
      <p>
        El ${ani.name} ocupa un lugar preponderante en la imaginación y la cultura costarricense. ${ani.costaRicanContext} En la decoración de interiores contemporánea, incorporar una escultura de ${ani.name} va más allá de un gusto estético: representa <em>${ani.symbolism}</em>.
      </p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">2. Por qué fabricarlo en ${mat.name}</h2>
      <p>
        Para modelar el dinamismo y la textura del ${ani.name}, el ${mat.shortName} es una opción idónea. ${mat.description}
      </p>
      <ul class="list-disc pl-6 space-y-2">
        ${mat.advantages.map(adv => `<li>${adv}</li>`).join('')}
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">3. El trabajo artesanal paso a paso</h2>
      <p>
        ${ani.artisanDetail} Cada pluma, músculo o rasgo es acentuado con pinceles ultrafinos número 000 y pigmentos de máxima resistencia a la luz. Los acabados más solicitados por nuestros coleccionistas incluyen:
      </p>
      <ul class="list-disc pl-6 space-y-2">
        ${ani.popularFinishes.map(fin => `<li><strong>${fin}:</strong> Aplicado a mano con técnicas de pátina por capas superpuestas.</li>`).join('')}
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">4. Consejos de ubicación para armonizar tu ambiente</h2>
      <p>
        Coloca la figura de ${ani.name} sobre repisas bien iluminadas, mesas esquineras o en el recibidor principal donde la luz natural matinal realce las veladuras metálicas y tornasoladas de su cuerpo. Si se ubica en terraza, asegúrate de que sea bajo techo para proteger el barniz contra la lluvia directa.
      </p>
    </article>
  `;

  const faqs = [
    {
      question: `¿La figura de ${ani.name} se puede pedir en otros colores o tamaños?`,
      answer: `Sí. En Mary's Art ofrecemos personalización completa: puedes elegir los tonos del ${ani.name} para que combinen con tus cortinas, paredes o muebles.`
    },
    {
      question: `¿Qué resistencia tiene el ${mat.shortName} ante golpes fortuitos?`,
      answer: `El ${mat.name} cuenta con una densidad equilibrada de ${mat.density}, brindando una excelente rigidez estructural para uso decorativo en interiores y terrazas.`
    },
    {
      question: `¿Hacen envíos a todo Costa Rica?`,
      answer: `Sí, enviamos mediante Correos de Costa Rica y encomiendas directas de taller con empaque a prueba de impactos.`
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Figura de ${ani.name} en ${mat.name}`,
    description: metaDescription,
    image: `${BASE_URL}/images/gallery/taller-19.jpg`,
    material: mat.name,
    brand: { '@type': 'Brand', name: "Mary's Art" },
    offers: {
      '@type': 'Offer',
      price: 25000,
      priceCurrency: 'CRC',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: "Mary's Art Costa Rica" }
    }
  };

  return {
    slug: `${ani.slug}-${mat.slug}`,
    url,
    h1,
    metaTitle,
    metaDescription,
    canonical: url,
    breadcrumb: [
      { name: 'Inicio', url: '/' },
      { name: 'Catálogo de Animales', url: '/catalogo' },
      { name: `${ani.name} en ${mat.shortName}`, url }
    ],
    heroSummary,
    quickAnswer,
    tableAttributes,
    editorialContentHtml,
    faqs,
    testimonials: testimonialsData.slice(1, 4),
    relatedLinks: [
      { label: `Figura de ${ani.name} en yeso`, url: `/figura-${ani.slug}-yeso`, category: 'Variantes de Material' },
      { label: `Figura de ${ani.name} en resina`, url: `/figura-${ani.slug}-resina`, category: 'Variantes de Material' },
      { label: `Figuras de resina en San José`, url: `/figuras-resina/san-jose`, category: 'Ubicaciones' },
      { label: `Figuras de yeso en Cartago`, url: `/figuras-yeso/cartago`, category: 'Ubicaciones' }
    ],
    cta: {
      title: `Lleva la belleza del ${ani.name} en ${mat.shortName} a tu hogar hoy`,
      subtitle: `Solicita tu cotización o encargo por WhatsApp con opciones de color personalizadas.`,
      whatsappMessage: `¡Hola Mary's Art! Deseo consultar el precio y disponibilidad de la figura de ${ani.name} en ${mat.shortName}.`,
      buttonText: `Pedir Figura de ${ani.name} por WhatsApp`
    },
    schema
  };
}

/**
 * Genera el paquete de contenido para Decoración por Estilo y Habitación
 */
export function buildStyleRoomPage(styleSlug: string, roomSlug: string): ProgrammaticPageData {
  const sty = stylesData[styleSlug] || stylesData.rustico;
  const rm = roomsData[roomSlug] || roomsData.sala;

  const url = `${BASE_URL}/decoracion-${sty.slug}-${rm.slug}`;
  const h1 = `Decoración ${sty.name.split('&')[0].trim()} para ${rm.name}`;
  const metaTitle = `Decoración ${sty.name.split('&')[0].trim()} para ${rm.name} | Mary's Art`;
  const metaDescription = `Guía completa y catálogo de piezas de arte y figuras para una decoración ${sty.name.split('&')[0].trim()} en ${rm.name}. Paletas de color, feng shui y piezas artesanales costarricenses.`;

  const quickAnswer = `Para lograr una decoración ${sty.name.split('&')[0].trim()} armónica en tu ${rm.name}, se combinan piezas artesanales esculpidas en yeso o resina con tonos ${sty.colorPalette.slice(0, 3).join(', ')}. Los puntos focales estratégicos son: ${rm.focalPoints.join(', ')}. En Mary's Art creamos figuras de escala recomendada (${rm.recommendedScale}) personalizadas al estilo de tu hogar en Costa Rica.`;

  const heroSummary = `Transforma tu ${rm.name} con la calidez del estilo ${sty.name.split('&')[0].trim()}. Te mostramos cómo integrar figuras de autor, pátinas elegantes y balance espacial para crear un ambiente memorable.`;

  const tableAttributes = [
    { key: 'Estilo Decorativo', value: sty.name },
    { key: 'Estancia / Espacio', value: rm.name },
    { key: 'Paleta Cromática Recomendada', value: sty.colorPalette.join(' • ') },
    { key: 'Materiales Complementarios', value: sty.pairingMaterials.join(', ') },
    { key: 'Consejo de Iluminación', value: sty.lightingAdvice },
    { key: 'Escala Recomendada de Piezas', value: rm.recommendedScale }
  ];

  const editorialContentHtml = `
    <article class="prose dark:prose-invert max-w-none space-y-6 text-stone-700 dark:text-stone-300 leading-relaxed">
      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">1. Fundamentos del estilo ${sty.name} en el hogar actual</h2>
      <p>
        ${sty.aestheticDescription} Al implementarlo en la ${rm.name}, el objetivo es crear una atmósfera coherente que respete la función del espacio: <em>${rm.functionality}</em>.
      </p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">2. Puntos focales clave en la ${rm.name}</h2>
      <p>
        Una de las equivocaciones más habituales en la ambientación es saturar las superficies. En Mary's Art recomendamos seleccionar uno o máximo dos puntos de atracción:
      </p>
      <ul class="list-disc pl-6 space-y-2">
        ${rm.focalPoints.map(point => `<li><strong>${point}:</strong> Perfecto para colocar una escultura de autor con volumen y presencia.</li>`).join('')}
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">3. Materiales, texturas e iluminación que multiplican el encanto</h2>
      <p>
        Combina las piezas de arte en yeso o resina con: ${sty.pairingMaterials.join(', ')}. Respecto a la luz: <em>${sty.lightingAdvice}</em>. Una iluminación cálida y bien direccionada resalta los relieves esculpidos a mano y las veladuras en sombra.
      </p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">4. Balance energético y Feng Shui</h2>
      <p>
        ${rm.fengShuiAdvice}
      </p>
    </article>
  `;

  const faqs = [
    {
      question: `¿Qué piezas de Mary's Art combinan mejor con una decoración ${sty.name.split('&')[0].trim()} en la ${rm.name}?`,
      answer: `Recomendamos nuestros candelabros clásicos, sagradas familias en relieve y figuras de animales de monte o ángeles con pátinas envejecidas o acabados mate.`
    },
    {
      question: `¿Pueden pintar una figura para que coincida exactamente con el tono de mis muebles?`,
      answer: `Sí. Envíanos por WhatsApp fotos del espacio de tu ${rm.name} e igualaremos la paleta cromática con pigmentos personalizados.`
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: h1,
    description: metaDescription,
    author: { '@type': 'Person', name: "Maria - Mary's Art" },
    publisher: { '@type': 'Organization', name: "Mary's Art Costa Rica" }
  };

  return {
    slug: `${sty.slug}-${rm.slug}`,
    url,
    h1,
    metaTitle,
    metaDescription,
    canonical: url,
    breadcrumb: [
      { name: 'Inicio', url: '/' },
      { name: 'Guías de Decoración', url: '/blog' },
      { name: `${sty.name.split('&')[0].trim()} en ${rm.name}`, url }
    ],
    heroSummary,
    quickAnswer,
    tableAttributes,
    editorialContentHtml,
    faqs,
    testimonials: testimonialsData.slice(0, 2),
    relatedLinks: [
      { label: `Decoración ${sty.slug} en Sala`, url: `/decoracion-${sty.slug}-sala`, category: 'Estilos' },
      { label: `Decoración ${sty.slug} en Dormitorio`, url: `/decoracion-${sty.slug}-dormitorio`, category: 'Estilos' },
      { label: `Figuras de yeso en San José`, url: `/figuras-yeso/san-jose`, category: 'Catálogo Local' },
      { label: `Catálogo de Piezas`, url: `/piezas`, category: 'Revistas' }
    ],
    cta: {
      title: `Asesórate gratis para decorar tu ${rm.name}`,
      subtitle: `Escríbenos para recibir sugerencias de piezas y tonalidades a la medida de tu espacio.`,
      whatsappMessage: `¡Hola Mary's Art! Deseo asesoría de piezas para mi ${rm.name} con estilo ${sty.name.split('&')[0].trim()}.`,
      buttonText: `Solicitar Asesoría por WhatsApp`
    },
    schema
  };
}

/**
 * Genera el paquete de contenido para Regalos por Ocasión
 */
export function buildOccasionGiftPage(occasionSlug: string): ProgrammaticPageData {
  const occ = occasionsData[occasionSlug] || occasionsData['dia-de-la-madre'];

  const url = `${BASE_URL}/regalo-${occ.slug}`;
  const h1 = `Regalos Artesanales para ${occ.name}`;
  const metaTitle = `Regalo para ${occ.name} | Figuras Hechas a Mano Mary's Art CR`;
  const metaDescription = `Encuentra el regalo artesanal perfecto para ${occ.name}. Piezas de arte en yeso y resina pintadas a mano con empaque de regalo premium y dedicatoria personalizada.`;

  const quickAnswer = `El mejor regalo para ${occ.name} en Costa Rica es una pieza artesanal de autor que perdure en el tiempo. En Mary's Art preparamos esculturas sacras, figuras decorativas de animales y candelabros pintados a mano, acompañados de: ${occ.packagingSuggestion}. Ofrecemos personalización con: ${occ.customizationIdeas[0]} y despacho puntual a cualquier rincón del país.`;

  const heroSummary = `Celebra ${occ.name} con un detalle que conmueva el corazón. Piezas elaboradas con dedicación, alma y materiales de alta calidad en nuestro taller costarricense.`;

  const tableAttributes = [
    { key: 'Ocasión Festiva', value: occ.name },
    { key: 'Intención Emocional', value: occ.emotionalIntent },
    { key: 'Significado del Obsequio', value: occ.giftSignificance },
    { key: 'Ideas de Personalización', value: occ.customizationIdeas.join(' • ') },
    { key: 'Presentación de Empaque', value: occ.packagingSuggestion },
    { key: 'Tiempo de Preparación', value: '48 a 72 horas con tarjeta caligráfica incluida' }
  ];

  const editorialContentHtml = `
    <article class="prose dark:prose-invert max-w-none space-y-6 text-stone-700 dark:text-stone-300 leading-relaxed">
      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">1. ¿Por qué regalar arte hecho a mano en ${occ.name}?</h2>
      <p>
        ${occ.emotionalIntent} En una época donde los regalos masivos e impersonales son olvidados con rapidez, regalar una figura esculpida y pintada minuciosamente a mano en Costa Rica transmite un mensaje claro: <em>este regalo fue concebido exclusivamente para ti</em>.
      </p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">2. Significado del obsequio</h2>
      <p>
        ${occ.giftSignificance} Cada capa de pátina, cada pincelada de óleo y cada detalle en pan de oro refleja horas de dedicación en nuestro taller de Turrialba.
      </p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">3. Opciones exclusivas de personalización</h2>
      <p>
        Haz que tu regalo sea aún más especial mediante nuestras alternativas de encargo:
      </p>
      <ul class="list-disc pl-6 space-y-2">
        ${occ.customizationIdeas.map(idea => `<li>${idea}</li>`).join('')}
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">4. Empaque premium listo para sorprender</h2>
      <p>
        Nos encargamos de que la experiencia comience desde el primer contacto visual: ${occ.packagingSuggestion}.
      </p>
    </article>
  `;

  const faqs = [
    {
      question: `¿Pueden enviar el regalo directamente a la persona homenajeada en Costa Rica?`,
      answer: `¡Sí! Nos encargamos de empacar la pieza en presentación de regalo de lujo, añadir tu mensaje personal escrito a mano en pergamino y despacharlo directamente a la dirección del destinatario.`
    },
    {
      question: `¿Con cuánta anticipación debo hacer el encargo para ${occ.name}?`,
      answer: `Recomendamos realizarlo con 4 a 6 días de anticipación para garantizar la personalización exacta y la coordinación logística de entrega.`
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Regalo Artesanal para ${occ.name}`,
    description: metaDescription,
    category: 'Regalos artesanales y figuras decorativas',
    brand: { '@type': 'Brand', name: "Mary's Art" },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'CRC',
      price: 35000,
      availability: 'https://schema.org/InStock'
    }
  };

  return {
    slug: occ.slug,
    url,
    h1,
    metaTitle,
    metaDescription,
    canonical: url,
    breadcrumb: [
      { name: 'Inicio', url: '/' },
      { name: 'Ocasiones y Regalos', url: '/campanas/navidad' },
      { name: occ.name, url }
    ],
    heroSummary,
    quickAnswer,
    tableAttributes,
    editorialContentHtml,
    faqs,
    testimonials: testimonialsData.slice(0, 3),
    relatedLinks: [
      { label: 'Regalo para Día de la Madre', url: '/regalo-dia-de-la-madre', category: 'Ocasiones' },
      { label: 'Regalo para Bautizo', url: '/regalo-bautizo-primera-comunion', category: 'Ocasiones' },
      { label: 'Regalo para Inauguración de Casa', url: '/regalo-inauguracion-casa', category: 'Ocasiones' },
      { label: 'Catálogo de Piezas', url: '/catalogo', category: 'Colecciones' }
    ],
    cta: {
      title: `Prepara el regalo perfecto para ${occ.name}`,
      subtitle: `Coordina por WhatsApp el modelo, la tarjeta escrita a mano y el envío seguro.`,
      whatsappMessage: `¡Hola Mary's Art! Me gustaría encargar un regalo especial para ${occ.name}.`,
      buttonText: `Encargar Regalo por WhatsApp`
    },
    schema
  };
}

/**
 * Genera el paquete de contenido para Páginas Especializadas de Restauración
 */
export function buildRestorationPage(slug: string): ProgrammaticPageData {
  // Maneja tanto servicios por tipo de objeto como páginas locales de restauración
  if (restorationsData[slug]) {
    const rest = restorationsData[slug];
    const url = `${BASE_URL}/restauracion/${rest.slug}`;
    const h1 = `${rest.name} en Costa Rica`;
    const metaTitle = `${rest.name} | Taller Profesional Mary's Art CR`;
    const metaDescription = `Servicio experto de ${rest.name.toLowerCase()} en Costa Rica. Reparación de fracturas, recuperación de policromía, pan de oro y conservación de patrimonio familiar.`;

    const quickAnswer = `El servicio de ${rest.name.toLowerCase()} de Mary's Art en Costa Rica repara patologías severas como ${rest.commonProblems[0].toLowerCase()} y ${rest.commonProblems[1].toLowerCase()}. El proceso dura ${rest.estimatedTurnaround} e incluye: diagnóstico histórico, desinfección, anclaje estructural con espigas inoxidables, reconstrucción anatómica con masillas reversibles de conservación y reintegración cromática al óleo o acrílico con sellado de filtro UV.`;

    const heroSummary = `Devolvemos la dignidad, el color y el esplendor a tus obras más preciadas con técnicas de conservación de grado museo en Costa Rica.`;

    const tableAttributes = [
      { key: 'Servicio', value: rest.name },
      { key: 'Categoría Técnica', value: rest.category.toUpperCase() },
      { key: 'Tiempo de Entrega Promedio', value: rest.estimatedTurnaround },
      { key: 'Materiales Profesionales Empleados', value: rest.materialsUsed.slice(0, 3).join(', ') },
      { key: 'Puntos de Recepción', value: 'Taller central Turrialba, punto Cartago y San Carlos; envíos a todo Costa Rica' },
      { key: 'Modalidad de Cotización', value: 'Diagnóstico previo gratuito enviando fotos detalladas por WhatsApp' }
    ];

    const editorialContentHtml = `
      <article class="prose dark:prose-invert max-w-none space-y-6 text-stone-700 dark:text-stone-300 leading-relaxed">
        <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">1. Diagnóstico de patologías frecuentes</h2>
        <p>
          Las piezas de arte familiar y devocional están expuestas al paso del tiempo y a contingencias domésticas. En nuestro taller resolvemos con regularidad:
        </p>
        <ul class="list-disc pl-6 space-y-2">
          ${rest.commonProblems.map(prob => `<li>${prob}</li>`).join('')}
        </ul>

        <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">2. Proceso técnico de restauración paso a paso</h2>
        <p>
          Tratamos cada escultura con profundo respeto devocional y rigor conservador:
        </p>
        <ol class="list-decimal pl-6 space-y-3">
          ${rest.stepByStepProcess.map(step => `
            <li>
              <strong>Paso ${step.step} - ${step.title}:</strong> ${step.detail}
            </li>
          `).join('')}
        </ol>

        <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">3. Materiales de grado conservación utilizados</h2>
        <p>
          No empleamos pegamentos domésticos o masillas industriales corrosivas que amarillean o deterioran la pieza con los años. Utilizamos:
        </p>
        <ul class="list-disc pl-6 space-y-2">
          ${rest.materialsUsed.map(mat => `<li>${mat}</li>`).join('')}
        </ul>

        <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">4. Consejos para la preservación preventiva</h2>
        <p>
          Una vez entregada la pieza restaurada, te recomendamos:
        </p>
        <ul class="list-disc pl-6 space-y-2">
          ${rest.preservationTips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
      </article>
    `;

    const beforeAfterCase = {
      caseTitle: `Restauración Patrimonial Real: Imagen de ${rest.name.replace('Restauración de ', '')}`,
      problem: `Pieza familiar con más de 45 años con fractura completa en ambas manos, desprendimiento generalizado de estuco y velo ennegrecido por hollín de cirios.`,
      solution: `Desinfección físico-química con hisopado controlado, ensamble con espigas de acero inoxidable, reconstrucción milimétrica de dedos y reintegración cromática puntillista al óleo.`,
      result: `La imagen recuperó su policromía original sin perder la nobleza de su antigüedad, protegida con barniz mate hidrófugo por las próximas décadas.`
    };

    const faqs = [
      {
        question: `¿Cómo solicito una cotización para ${rest.name.toLowerCase()}?`,
        answer: `Envíanos por WhatsApp fotografías nítidas de la pieza (vista general de frente, lados y acercamientos a las fracturas o manchas), indicando su altura aproximada en centímetros. Te responderemos con el diagnóstico y presupuesto estimado en menos de 2 horas.`
      },
      {
        question: `¿Cuánto tiempo tarda el trabajo?`,
        answer: `El tiempo estimado es de ${rest.estimatedTurnaround}, indispensable para asegurar el curado completo de las resinas estructurales y el secado de las capas pictóricas.`
      },
      {
        question: `¿Se nota la unión donde estaba quebrado?`,
        answer: `No. Nuestro proceso incluye nivelación micrométrica con masilla de grano fino y reintegración tonal con veladuras cruzadas que hacen la intervención prácticamente imperceptible a simple vista.`
      }
    ];

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: rest.name,
          description: metaDescription,
          provider: {
            '@type': 'LocalBusiness',
            name: "Mary's Art Costa Rica",
            telephone: '+50660367249',
            url: BASE_URL
          },
          areaServed: 'Costa Rica'
        },
        {
          '@type': 'HowTo',
          name: `Proceso de ${rest.name}`,
          step: rest.stepByStepProcess.map(s => ({
            '@type': 'HowToStep',
            position: s.step,
            name: s.title,
            text: s.detail
          }))
        }
      ]
    };

    return {
      slug: rest.slug,
      url,
      h1,
      metaTitle,
      metaDescription,
      canonical: url,
      breadcrumb: [
        { name: 'Inicio', url: '/' },
        { name: 'Servicios de Restauración', url: '/servicios' },
        { name: rest.name, url }
      ],
      heroSummary,
      quickAnswer,
      tableAttributes,
      editorialContentHtml,
      processSteps: rest.stepByStepProcess,
      materialsInfo: rest.materialsUsed,
      beforeAfterCase,
      faqs,
      testimonials: [testimonialsData[0], testimonialsData[3]],
      relatedLinks: [
        { label: 'Restauración de Imágenes Religiosas', url: '/restauracion/restauracion-imagenes-religiosas', category: 'Especialidades' },
        { label: 'Restauración de Santos', url: '/restauracion/restauracion-santos', category: 'Especialidades' },
        { label: 'Restauración de Vírgenes', url: '/restauracion/restauracion-virgenes', category: 'Especialidades' },
        { label: 'Restauración en Cartago', url: '/restauracion/cartago', category: 'SEO Local' },
        { label: 'Restauración en Turrialba', url: '/restauracion/turrialba', category: 'SEO Local' },
        { label: 'Restauración en San José', url: '/restauracion/san-jose', category: 'SEO Local' }
      ],
      cta: {
        title: `¿Tienes una pieza que necesita ${rest.name.toLowerCase()}?`,
        subtitle: `Envíanos tus fotos por WhatsApp y recibe asesoría y presupuesto formal hoy mismo.`,
        whatsappMessage: `¡Hola Mary's Art! Deseo solicitar una cotización para ${rest.name.toLowerCase()}.`,
        buttonText: `Cotizar Restauración por WhatsApp`
      },
      schema
    };
  }

  // Si el slug corresponde a una ubicación local de restauración (ej. /restauracion/turrialba, /restauracion/cartago)
  const loc = locationsData[slug] || locationsData.cartago;
  const url = `${BASE_URL}/restauracion/${loc.cantonSlug}`;
  const h1 = `Taller de Restauración Artística y Religiosa en ${loc.cantonName}`;
  const metaTitle = `Restauración de Figuras y Arte Sacro en ${loc.cantonName} | Mary's Art`;
  const metaDescription = `Restauración profesional de imágenes religiosas, santos, vírgenes, porcelana y esculturas con cobertura en ${loc.cantonName}, ${loc.province}. Recepción en taller y envíos protegidos.`;

  const quickAnswer = `Mary's Art brinda servicio de restauración artística y sacra para familias, templos y coleccionistas en ${loc.cantonName} (${loc.province}). Reparamos piezas de yeso, resina, cerámica y madera con técnicas de conservación patrimonial. ${loc.workshopDistanceNote} Coordinación ágil por WhatsApp con diagnóstico fotográfico sin costo.`;

  const heroSummary = `Servicio técnico de restauración conservadora para ${loc.cantonName} y toda la provincia de ${loc.province}. Rescatamos tus tesoros familiares con maestría artesanal.`;

  const tableAttributes = [
    { key: 'Cobertura Territorial', value: `${loc.cantonName}, ${loc.province}` },
    { key: 'Especialidades', value: 'Imágenes sacras, santos, vírgenes, porcelanas finas, relieves y cuadros' },
    { key: 'Recepción y Entrega', value: loc.localPickupAvailable ? 'Punto de entrega en taller o envío' : 'Envío asegurado o ruta programada' },
    { key: 'Tiempo Estimado', value: loc.deliveryEstimate },
    { key: 'Contacto de Taller', value: 'WhatsApp directo +506 6036-7249' }
  ];

  const editorialContentHtml = `
    <article class="prose dark:prose-invert max-w-none space-y-6 text-stone-700 dark:text-stone-300 leading-relaxed">
      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">1. Cobertura de restauración en ${loc.cantonName}</h2>
      <p>
        Atendemos a residentes de todos los distritos de ${loc.cantonName}. ${loc.workshopDistanceNote} Gracias a nuestra metodología de recepción segura y diagnóstico previo por WhatsApp, no tienes que desplazarte sin antes conocer el plan de restauración, los materiales necesarios y el costo estimado.
      </p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">2. Tipos de piezas restauradas para clientes de ${loc.cantonName}</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Imágenes devocionales y del santoral:</strong> San Judas Tadeo, Vírgenes de Los Ángeles, Guadalupe y Carmen, Niños Dios antiguos y crucifijos.</li>
        <li><strong>Porcelana y vajillas decorativas:</strong> Jarrones europeos, figuras alemanas o inglesas y platos conmemorativos.</li>
        <li><strong>Esculturas contemporáneas y arte en resina:</strong> Reparación de roturas de alas, dedos y repintado con colores personalizados.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">3. Tratamiento contra la humedad de ${loc.province}</h2>
      <p>
        ${loc.climateConsiderations} Al culminar la restauración, aplicamos selladores antihumedad y fungicidas que evitan la proliferación de hongos o eflorescencias salinas en el yeso o arcilla.
      </p>
    </article>
  `;

  const faqs = [
    {
      question: `¿Cómo entrego mi pieza desde ${loc.cantonName}?`,
      answer: `Puedes coordinar la entrega física en nuestros puntos en Turrialba o San Carlos, o enviarla mediante encomienda certificada o Correos de Costa Rica con las indicaciones de embalaje que te brindamos.`
    },
    {
      question: `¿Ofrecen garantía en los trabajos de restauración para ${loc.cantonName}?`,
      answer: `Sí, todos nuestros trabajos cuentan con garantía de adherencia estructural y estabilidad del color.`
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Mary's Art - Restauración en ${loc.cantonName}`,
    telephone: '+50660367249',
    areaServed: `${loc.cantonName}, Costa Rica`,
    url
  };

  return {
    slug: loc.cantonSlug,
    url,
    h1,
    metaTitle,
    metaDescription,
    canonical: url,
    breadcrumb: [
      { name: 'Inicio', url: '/' },
      { name: 'Restauración', url: '/servicios' },
      { name: loc.cantonName, url }
    ],
    heroSummary,
    quickAnswer,
    tableAttributes,
    editorialContentHtml,
    faqs,
    testimonials: [testimonialsData[0], testimonialsData[2]],
    relatedLinks: [
      { label: `Restauración de imágenes religiosas`, url: '/restauracion/restauracion-imagenes-religiosas', category: 'Especialidades' },
      { label: `Restauración de Santos`, url: '/restauracion/restauracion-santos', category: 'Especialidades' },
      { label: `Restauración en Cartago`, url: '/restauracion/cartago', category: 'Local' },
      { label: `Restauración en San José`, url: '/restauracion/san-jose', category: 'Local' }
    ],
    cta: {
      title: `Cotiza la restauración de tu pieza en ${loc.cantonName}`,
      subtitle: `Envíanos fotos por WhatsApp y te brindamos respuesta inmediata.`,
      whatsappMessage: `¡Hola Mary's Art! Deseo consultar sobre restauración de una figura en ${loc.cantonName}.`,
      buttonText: `Consultar por WhatsApp desde ${loc.cantonName}`
    },
    schema
  };
}

/**
 * Genera el paquete de contenido para Clases de Pintura y Cursos Locales
 */
export function buildCourseLocationPage(cantonSlug: string): ProgrammaticPageData {
  const loc = locationsData[cantonSlug] || locationsData.turrialba;
  const course = coursesData['clases-pintura'];
  const hasLocalStudio = loc.cantonSlug === 'turrialba' || loc.cantonSlug === 'san-carlos';

  const url = `${BASE_URL}/clases-pintura/${loc.cantonSlug}`;
  const h1 = hasLocalStudio
    ? `Taller Presencial de Pintura en Yeso y Resina en ${loc.cantonName}, Costa Rica`
    : `Clases de Pintura en Yeso y Resina para Residentes de ${loc.cantonName}`;
  const metaTitle = hasLocalStudio
    ? `Clases de Pintura en Yeso y Resina en ${loc.cantonName} | Taller Mary's Art`
    : `Clases de Pintura para Residentes de ${loc.cantonName} | Mary's Art CR`;
  const metaDescription = hasLocalStudio
    ? `Aprende técnicas profesionales de pintura en resina, yeso y pátinas en nuestra sede presencial de ${loc.cantonName}. Materiales incluidos y clase gratis al comprar tu pieza.`
    : `Atención a residentes de ${loc.cantonName}: Nuestros talleres presenciales se imparten en las sedes centrales de Turrialba y San Carlos, con jornadas intensivas de fin de semana y kits con asesoría virtual.`;

  const quickAnswer = hasLocalStudio
    ? `En nuestra sede física de ${loc.cantonName} impartimos clases presenciales de pintura en yeso y resina los miércoles, viernes y sábados. La clase es 100% gratuita con la compra de tu pieza de catálogo, e incluye el uso libre de pinturas profesionales, pinceles, pátinas al óleo, selladores y refrigerio artesanal.`
    : `Importante para alumnos de ${loc.cantonName}: Mary's Art no cuenta con sede física en ${loc.cantonName}. Nuestras clases presenciales se imparten exclusivamente en nuestros talleres centrales de Turrialba (Cartago) y San Carlos (Alajuela). Para alumnos que se desplazan desde ${loc.cantonName}, ofrecemos jornadas intensivas de sábado de un solo día o kits de pintura guiados paso a paso por WhatsApp.`;

  const heroSummary = hasLocalStudio
    ? `Sede presencial en ${loc.cantonName}: Un espacio de arteterapia, creatividad y aprendizaje guiado por la instructora Maria.`
    : `Información de clases para participantes de ${loc.cantonName}: Te explicamos cómo participar en nuestros talleres en las sedes de Turrialba y San Carlos.`;

  const tableAttributes = [
    { key: 'Dirigido a', value: `Residentes de ${loc.cantonName} y zonas aledañas (principiantes y avanzados)` },
    { key: 'Horarios', value: course.schedule },
    { key: 'Modelo de Precios', value: 'Clase sin costo de matrícula con la compra de tu pieza de catálogo' },
    { key: 'Materiales Incluidos', value: 'Pinturas al óleo, acrílicos, pátinas, pinceles y selladores de taller' },
    { key: 'Beneficio Emocional', value: course.benefitPsychological }
  ];

  const editorialContentHtml = `
    <article class="prose dark:prose-invert max-w-none space-y-6 text-stone-700 dark:text-stone-300 leading-relaxed">
      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">1. ¿En qué consisten nuestras clases de pintura artística?</h2>
      <p>
        En Mary's Art creemos que todo ser humano lleva un artista en su interior. Nuestros talleres están diseñados tanto para quienes nunca han tomado un pincel como para entusiastas que desean perfeccionar sus acabados. Al acompañarnos desde ${loc.cantonName}, experimentarás un ambiente cálido de desconexión y aprendizaje guiado paso a paso por la artista Maria.
      </p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">2. Temario y técnicas que dominarás</h2>
      <ul class="list-disc pl-6 space-y-2">
        ${course.curriculum.map(curr => `<li>${curr}</li>`).join('')}
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">3. El valor terapéutico del arte</h2>
      <p>
        ${course.benefitPsychological} Muchas de nuestras alumnas que viajan desde ${loc.cantonName} consideran este taller su momento favorito de la semana: un espacio para dejar atrás el estrés cotidiano, compartir historias y llevarse a casa una pieza única admirada por toda su familia.
      </p>
    </article>
  `;

  const faqs = [
    {
      question: `¿Necesito tener experiencia previa en pintura?`,
      answer: `Para nada. El 80% de nuestros estudiantes comienzan sin experiencia. La instructora Maria te enseña desde el agarre del pincel hasta las mezclas cromáticas.`
    },
    {
      question: `¿Cómo viajo desde ${loc.cantonName} al taller?`,
      answer: `Nuestro taller se encuentra en una ubicación céntrica y de fácil acceso en Turrialba, con parqueo seguro. También organizamos talleres intensivos de un solo día (intensivos de sábado) ideales para quienes se trasladan desde ${loc.cantonName}.`
    },
    {
      question: `¿Cómo reservo mi lugar?`,
      answer: `Escríbenos por WhatsApp con anticipación para consultar las fechas disponibles y apartar la pieza que deseas pintar.`
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: metaDescription,
    provider: {
      '@type': 'Organization',
      name: "Mary's Art Costa Rica",
      url: BASE_URL
    }
  };

  return {
    slug: loc.cantonSlug,
    url,
    h1,
    metaTitle,
    metaDescription,
    canonical: url,
    breadcrumb: [
      { name: 'Inicio', url: '/' },
      { name: 'Cursos y Talleres', url: '/club-vip' },
      { name: loc.cantonName, url }
    ],
    heroSummary,
    quickAnswer,
    tableAttributes,
    editorialContentHtml,
    faqs,
    testimonials: [testimonialsData[2]],
    relatedLinks: [
      { label: `Clases de pintura en Turrialba`, url: '/clases-pintura/turrialba', category: 'Talleres' },
      { label: `Clases de pintura en Cartago`, url: '/clases-pintura/cartago', category: 'Talleres' },
      { label: `Clases de pintura en San José`, url: '/clases-pintura/san-jose', category: 'Talleres' },
      { label: `Membresía VIP`, url: '/club-vip', category: 'Comunidad' }
    ],
    cta: {
      title: `Reserva tu cupo para la próxima clase desde ${loc.cantonName}`,
      subtitle: `Cupos limitados por sesión para asegurar atención personalizada.`,
      whatsappMessage: `¡Hola Mary's Art! Me gustaría inscribirme en las clases de pintura desde ${loc.cantonName}.`,
      buttonText: `Apartar Mi Cupo por WhatsApp`
    },
    schema
  };
}
