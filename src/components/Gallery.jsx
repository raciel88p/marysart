import React, { useState } from 'react';
import { Camera } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('todos');

  const galleryItems = [
    {
      id: 1,
      category: 'talleres',
      title: 'Taller de Velas y Arte en Vivo',
      subtitle: 'Participantes compartiendo en nuestro espacio de trabajo',
      image: '/images/gallery/taller-6.webp',
      fallback: '/images/gallery/taller-6.jpg',
      alt: 'Grupo de alumnas en taller presencial de elaboración de velas artesanales y pintura de figuras de resina en Costa Rica',
      tag: 'Taller Presencial'
    },
    {
      id: 2,
      category: 'velas',
      title: 'Velas Botánicas y Aromáticas',
      subtitle: 'Técnicas de vertido, mechas y fragancias naturales',
      image: '/images/gallery/taller-3.webp',
      fallback: '/images/gallery/taller-3.jpg',
      alt: 'Pieza de vela artesanal con finos acabados elaborada en el taller de Resina Art & Mary',
      tag: 'Velas Artesanales'
    },
    {
      id: 3,
      category: 'pintura',
      title: 'Acabados y Pintura de Piezas de Resina',
      subtitle: 'Técnicas de sombreado, dorados y textura',
      image: '/images/gallery/taller-4.webp',
      fallback: '/images/gallery/taller-4.jpg',
      alt: 'Detalle de pinceladas y acabados dorados en figura de resina pintada a mano',
      tag: 'Pintura & Resina'
    },
    {
      id: 4,
      category: 'pintura',
      title: 'Creaciones Artísticas Exclusivas',
      subtitle: 'Crea hermosas piezas decorativas con tu toque personal',
      image: '/images/gallery/taller-5.webp',
      fallback: '/images/gallery/taller-5.jpg',
      alt: 'Exposición de figuras decorativas pintadas en el curso presencial de Resina Art & Mary',
      tag: 'Pintura & Resina'
    },
    {
      id: 5,
      category: 'talleres',
      title: 'Experiencia Práctica e Inclusiva',
      subtitle: 'Insumos incluidos y guía personalizada en cada paso',
      image: '/images/gallery/taller-1.webp',
      fallback: '/images/gallery/taller-1.jpg',
      alt: 'Alumnas concentradas pintando sus figuras de resina en mesa de trabajo con materiales',
      tag: 'Experiencia Taller'
    },
    {
      id: 6,
      category: 'talleres',
      title: 'Ambiente Cálido y Acogedor',
      subtitle: 'Aprende, relájate y disfruta con excelente compañía',
      image: '/images/gallery/taller-2.webp',
      fallback: '/images/gallery/taller-2.jpg',
      alt: 'Mesa de trabajo equipada para taller de manualidades con alumnas disfrutando de la clase',
      tag: 'Momentos Especiales'
    },
    {
      id: 11,
      category: 'talleres',
      title: 'Convivencia y Creatividad',
      subtitle: 'Espacios creados para aprender y compartir en armonía',
      image: '/images/gallery/taller-11.webp',
      fallback: '/images/gallery/taller-11.jpg',
      alt: 'Grupo de alumnas compartiendo ideas y técnicas en el espacio de trabajo',
      tag: 'Taller Presencial'
    },
    {
      id: 12,
      category: 'pintura',
      title: 'Orgullo en Cada Creación',
      subtitle: 'Piezas listas para decorar tu hogar o regalar',
      image: '/images/gallery/taller-12.webp',
      fallback: '/images/gallery/taller-12.jpg',
      alt: 'Participantes sonrientes sosteniendo sus piezas de resina pintadas a mano',
      tag: 'Pintura & Resina'
    },
    {
      id: 13,
      category: 'pintura',
      title: 'Técnicas de Acabado Profesional',
      subtitle: 'Uso de pátinas, pincel seco y brillos espectaculares',
      image: '/images/gallery/taller-13.webp',
      fallback: '/images/gallery/taller-13.jpg',
      alt: 'Detalle en primer plano de figura decorativa con pintura artística en resina',
      tag: 'Pintura & Resina'
    },
    {
      id: 14,
      category: 'velas',
      title: 'Velas Aromáticas Personalizadas',
      subtitle: 'Combinación perfecta de fragancias, formas y elegancia',
      image: '/images/gallery/taller-14.webp',
      fallback: '/images/gallery/taller-14.jpg',
      alt: 'Velas artesanales aromáticas terminadas y decoradas con elementos naturales',
      tag: 'Velas Artesanales'
    },
    {
      id: 16,
      category: 'velas',
      title: 'Velas Moldeadas y Botánicas',
      subtitle: 'Aprende a desmoldar y lograr acabados impecables',
      image: '/images/gallery/taller-16.webp',
      fallback: '/images/gallery/taller-16.jpg',
      alt: 'Proceso de desmoldeo y acabado de velas artesanales en el taller',
      tag: 'Velas Artesanales'
    },
    {
      id: 17,
      category: 'talleres',
      title: 'Celebrando Nuevos Logros',
      subtitle: 'Cada taller finaliza con hermosas obras de arte hechas por ti',
      image: '/images/gallery/taller-17.webp',
      fallback: '/images/gallery/taller-17.jpg',
      alt: 'Grupo de graduadas del taller presencial exhibiendo sus piezas terminadas',
      tag: 'Momentos Especiales'
    },
    {
      id: 18,
      category: 'talleres',
      title: 'Instructora Mary en Resina Art & Mary',
      subtitle: 'Pasión por el arte, la enseñanza y el detalle artesanal',
      image: '/images/gallery/taller-18.webp',
      fallback: '/images/gallery/taller-18.jpg',
      alt: 'Mary instructora de Resina Art Mary sonriendo con figura de resina artesanal',
      tag: 'Resina Art & Mary'
    },
    {
      id: 19,
      category: 'pintura',
      title: 'Galería de Obras Terminadas',
      subtitle: 'Resultados sorprendentes al finalizar cada sesión',
      image: '/images/gallery/taller-19.webp',
      fallback: '/images/gallery/taller-19.jpg',
      alt: 'Exposición final de obras en resina pintadas por los participantes del taller',
      tag: 'Pintura & Resina'
    }
  ];

  const filteredItems = filter === 'todos'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-white via-[#faf7f5] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2dfd8] text-[#8c483b] text-xs font-bold uppercase tracking-wider">
            <Camera className="w-4 h-4" />
            <span>Galería de Momentos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3d2c29] font-bold">
            Fotografías de Nuestros Talleres
          </h2>
          <p className="text-[#6b5852] text-base sm:text-lg font-light">
            Echa un vistazo a la calidez de nuestras clases presenciales, los detalles de las piezas terminadas y la alegría de nuestras participantes.
          </p>

          {/* Gallery Filters */}
          <div className="flex items-center justify-center pt-4 border-b border-[#ebdcd7] pb-6">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setFilter('todos')}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === 'todos'
                    ? 'bg-[#c87563] text-white shadow-md'
                    : 'bg-white text-[#5c4a43] hover:bg-[#f2dfd8]'
                }`}
              >
                Todos ({galleryItems.length})
              </button>
              <button
                onClick={() => setFilter('talleres')}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === 'talleres'
                    ? 'bg-[#c87563] text-white shadow-md'
                    : 'bg-white text-[#5c4a43] hover:bg-[#f2dfd8]'
                }`}
              >
                Talleres en Vivo
              </button>
              <button
                onClick={() => setFilter('velas')}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === 'velas'
                    ? 'bg-[#c87563] text-white shadow-md'
                    : 'bg-white text-[#5c4a43] hover:bg-[#f2dfd8]'
                }`}
              >
                Velas Artesanales
              </button>
              <button
                onClick={() => setFilter('pintura')}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === 'pintura'
                    ? 'bg-[#c87563] text-white shadow-md'
                    : 'bg-white text-[#5c4a43] hover:bg-[#f2dfd8]'
                }`}
              >
                Pintura & Resina
              </button>
            </div>
          </div>
        </div>

        {/* Grid View */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-[#3d2c29]"
            >
              <picture>
                <source srcSet={item.image} type="image/webp" />
                <img
                  src={item.fallback}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-[#3d2c29]/90 via-[#3d2c29]/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#e8a598]">
                  {item.tag}
                </span>
                <h3 className="font-serif text-lg font-bold mt-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 font-light mt-0.5 line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-12 text-center text-xs sm:text-sm text-[#8c7a6b]">
          Síguenos en Instagram{' '}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#c87563] underline hover:text-[#b56250]"
          >
            @resinaartmary.cr
          </a>{' '}
          para ver más historias en vivo y momentos de cada clase.
        </div>

      </div>
    </section>
  );
}
