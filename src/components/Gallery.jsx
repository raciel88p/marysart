import React, { useState, useEffect, useRef } from 'react';
import { Camera, ChevronLeft, ChevronRight, Pause, Play, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('todos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'

  const galleryItems = [
    {
      id: 1,
      category: 'talleres',
      title: 'Taller de Velas y Arte en Vivo',
      subtitle: 'Participantes compartiendo en nuestro espacio de trabajo',
      image: '/images/gallery/taller-6.webp',
      fallback: '/images/gallery/taller-6.jpg',
      alt: 'Grupo de alumnas y alumnas en taller presencial de elaboración de velas artesanales y pintura de figuras de resina en Costa Rica',
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
    }
  ];

  const filteredItems = filter === 'todos'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  // Reset slider index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  // Auto-play interval effect for carousel
  useEffect(() => {
    if (!isPlaying || filteredItems.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying, filteredItems.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
  };

  const currentItem = filteredItems[currentIndex] || filteredItems[0];

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

          {/* Gallery Filters & View Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-b border-[#ebdcd7] pb-6">
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

            {/* View mode toggle */}
            <div className="inline-flex items-center bg-white p-1 rounded-xl shadow-sm border border-[#ebdcd7]">
              <button
                onClick={() => setViewMode('carousel')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  viewMode === 'carousel'
                    ? 'bg-[#f2dfd8] text-[#8c483b] font-semibold'
                    : 'text-[#8c7a6b] hover:text-[#3d2c29]'
                }`}
                title="Modo carrusel rotativo"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Carrusel
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#f2dfd8] text-[#8c483b] font-semibold'
                    : 'text-[#8c7a6b] hover:text-[#3d2c29]'
                }`}
                title="Modo cuadrícula"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                Cuadrícula
              </button>
            </div>
          </div>
        </div>

        {/* Carousel View */}
        {viewMode === 'carousel' && (
          <div className="mt-8 relative max-w-5xl mx-auto">
            <div
              className="relative rounded-3xl overflow-hidden bg-[#3d2c29] shadow-2xl group min-h-[400px] sm:min-h-[500px] flex items-center justify-center"
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              {/* Active Image */}
              <picture>
                <source srcSet={currentItem.image} type="image/webp" />
                <img
                  src={currentItem.fallback}
                  alt={currentItem.alt}
                  className="w-full h-[450px] sm:h-[550px] object-cover transition-all duration-700 ease-in-out"
                />
              </picture>

              {/* Gradient Overlay & Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a1d1a]/95 via-[#2a1d1a]/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
                <div className="max-w-2xl space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-[#c87563] text-white text-[11px] font-bold uppercase tracking-widest rounded-full shadow">
                      {currentItem.tag}
                    </span>
                    <span className="text-xs text-white/80 font-mono">
                      {currentIndex + 1} / {filteredItems.length}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white drop-shadow">
                    {currentItem.title}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base font-light">
                    {currentItem.subtitle}
                  </p>
                </div>
              </div>

              {/* Prev / Next Controls */}
              <button
                onClick={handlePrev}
                aria-label="Imagen anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center transition-all backdrop-blur-xs opacity-90 hover:scale-110 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Siguiente imagen"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center transition-all backdrop-blur-xs opacity-90 hover:scale-110 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Play / Pause Toggle Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pausar reproducción' : 'Iniciar reproducción'}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center transition-all backdrop-blur-xs cursor-pointer"
                title={isPlaying ? 'Pausar galería' : 'Reproducir galería'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
            </div>

            {/* Slide Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {filteredItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ir a foto ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-[#c87563]'
                      : 'w-2.5 bg-[#ebdcd7] hover:bg-[#c87563]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setViewMode('carousel');
                }}
                className="group relative h-80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-[#3d2c29]"
              >
                <picture>
                  <source srcSet={item.image} type="image/webp" />
                  <img
                    src={item.fallback}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
                </div>
              </div>
            ))}
          </div>
        )}

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
