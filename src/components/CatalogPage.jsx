import React, { useState } from 'react';
import { Search, Flame, Palette, Package, Filter, ArrowLeft, Clock, MapPin, CheckCircle, MessageCircle, Eye, Sparkles } from 'lucide-react';

export default function CatalogPage({ onNavigateHome, onSelectCourseDetail }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const catalogItems = [
    {
      id: 'velas',
      category: 'velas',
      type: 'Taller Presencial',
      title: 'Taller de Velas Artesanales & Rituales de Bienestar',
      subtitle: 'Aprende a formular y verter velas aromáticas de cera de soya natural con flores botánicas.',
      image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
      price: 29500,
      priceFormatted: '₡29.500',
      duration: '3h 30m',
      location: 'Tres Ríos / San José',
      badge: 'Más Vendido',
      popularity: 10,
      description: 'Elaboración paso a paso de 2 velas completas en envase de vidrio y lata decorativa. Selección de fragancias botánicas, colocación de mechas de algodón y acabado en flores secas.',
      included: ['Ceras vegetales 100% naturales', 'Fragancias esenciales puras', 'Merienda y bebidas incluidas', 'Manual impreso de fórmulas']
    },
    {
      id: 'pintura',
      category: 'pintura',
      type: 'Taller Presencial',
      title: 'Taller de Pintura Creativa & Pinta y Vino',
      subtitle: 'Expresa tu creatividad en lienzo con acrílicos y técnicas de espátula relajantes.',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      price: 29500,
      priceFormatted: '₡29.500',
      duration: '3h 30m',
      location: 'Tres Ríos / San José',
      badge: 'Novedad',
      popularity: 8,
      description: 'Una velada relajante para soltar el estrés mediante pinceladas libres. No requieres saber pintar: la guía te acompaña en cada trazo.',
      included: ['Lienzo 30x40cm', 'Acrílicos y pinceles profesionales', 'Copa de vino o café gourmet', 'Obra lista para colgar']
    },
    {
      id: 'combo',
      category: 'combo',
      title: 'Experiencia Completa: Combo Velas + Pintura Artística',
      subtitle: 'Sumérgete en un día entero de creación, velas aromáticas y pintura sobre lienzo.',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
      price: 52000,
      priceFormatted: '₡52.000',
      duration: '6h (Jornada Doble)',
      location: 'Tres Ríos / San José',
      badge: 'Ahorra ₡7.000',
      popularity: 9,
      description: 'La experiencia definitiva para los amantes de las manualidades y el bienestar. Incluye los dos módulos completos con un descuento especial.',
      included: ['Ambos talleres incluidos', 'Almuerzo / merienda especial', 'Empaque de regalo para creaciones', 'Asesoría para emprendimiento']
    },
    {
      id: 'kit-velas',
      category: 'kits',
      type: 'Kit en Casa',
      title: 'Kit Inicial DIY: Haz tu Vela Artesanal en Casa',
      subtitle: 'Todo lo que necesitas empaquetado en una hermosa caja con guía en video.',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80',
      price: 18500,
      priceFormatted: '₡18.500',
      duration: 'A tu propio ritmo',
      location: 'Envío a todo Costa Rica',
      badge: 'Para Regalo',
      popularity: 7,
      description: 'Disfruta la experiencia desde la comodidad de tu hogar. Incluye cera de soya, mechas, esencias concentradas, contenedor e instrucciones ilustradas.',
      included: ['500g Cera de soya ecológica', 'Esencia de Lavanda & Vainilla', '2 Frascos de vidrio ambar', 'Acceso a tutorial en video']
    },
    {
      id: 'kit-pintura',
      category: 'kits',
      type: 'Kit en Casa',
      title: 'Kit de Pintura Acrílica & Set de Pinceles',
      subtitle: 'Caja con bastidor de tela, paleta de mezclas y tubos de pintura de alta pigmentación.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
      price: 16000,
      priceFormatted: '₡16.000',
      duration: 'A tu propio ritmo',
      location: 'Envío a todo Costa Rica',
      badge: 'Kit Creativo',
      popularity: 6,
      description: 'Perfecto para tardes lluviosas o proyectos de fin de semana. Todo el material necesario para soltar la imaginación.',
      included: ['1 Lienzo con bastidor de madera', 'Set de 12 pinturas acrílicas', 'Set de 5 pinceles variados', 'Paleta y delantal protector']
    }
  ];

  const filteredItems = catalogItems
    .filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return b.popularity - a.popularity; // Default: popular
    });

  return (
    <div className="bg-[#faf7f5] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Breadcrumb & Return button */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#c87563] hover:text-[#a85848] transition-colors bg-white px-4 py-2 rounded-full border border-[#e8ded5] shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </button>
          <span className="text-xs text-[#8c7a6b] font-medium uppercase tracking-wider">
            Catálogo Completo de Experiencias & Kits
          </span>
        </div>

        {/* Catalog Banner Header */}
        <div className="bg-gradient-to-r from-[#3d2c29] to-[#5c4a43] rounded-3xl p-8 sm:p-12 text-white shadow-lg mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#c87563]/30 text-[#f2dfd8] border border-[#c87563]/40">
              <Sparkles className="w-3.5 h-3.5" /> Catálogo 2025
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              Catálogo de Talleres Presenciales y Kits Creativos
            </h1>
            <p className="text-[#e8ded5] text-base font-light">
              Explora nuestra oferta completa de talleres de arte botánico, elaboración de velas y kits DIY para regalar o disfrutar en casa.
            </p>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white rounded-2xl p-6 border border-[#e8ded5] shadow-sm mb-10 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">

            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-[#8c7a6b] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar talleres, técnicas, kits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#e8ded5] text-sm text-[#3d2c29] focus:outline-none focus:ring-2 focus:ring-[#c87563] bg-[#faf7f5]"
              />
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <span className="text-xs font-bold text-[#8c7a6b] uppercase tracking-wider whitespace-nowrap flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Ordenar por:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-2.5 px-4 rounded-xl border border-[#e8ded5] text-sm text-[#3d2c29] bg-[#faf7f5] focus:outline-none focus:ring-2 focus:ring-[#c87563]"
              >
                <option value="popular">Más Populares</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#f2dfd8]">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#3d2c29] text-white'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              Todos ({catalogItems.length})
            </button>
            <button
              onClick={() => setSelectedCategory('velas')}
              className={`inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'velas'
                  ? 'bg-[#c87563] text-white'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              <Flame className="w-3.5 h-3.5" /> Velas Artesanales
            </button>
            <button
              onClick={() => setSelectedCategory('pintura')}
              className={`inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'pintura'
                  ? 'bg-[#c87563] text-white'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              <Palette className="w-3.5 h-3.5" /> Pintura & Arte
            </button>
            <button
              onClick={() => setSelectedCategory('combo')}
              className={`inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'combo'
                  ? 'bg-[#c87563] text-white'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" /> Combos Especiales
            </button>
            <button
              onClick={() => setSelectedCategory('kits')}
              className={`inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'kits'
                  ? 'bg-[#c87563] text-white'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              <Package className="w-3.5 h-3.5" /> Kits DIY en Casa
            </button>
          </div>
        </div>

        {/* Catalog Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#e8ded5]">
            <p className="text-lg font-semibold text-[#3d2c29]">No se encontraron resultados</p>
            <p className="text-sm text-[#8c7a6b] mt-1">Prueba cambiando la búsqueda o seleccionando otra categoría.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              className="mt-4 px-4 py-2 bg-[#c87563] text-white rounded-xl text-xs font-semibold"
            >
              Limpiar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => {
              const whatsappUrl = `https://wa.me/50688390436?text=${encodeURIComponent(`¡Hola! Quisiera más detalles sobre: ${item.title}`)}`;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#e8ded5] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Item Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#c87563]">
                        {item.badge}
                      </span>
                      <span className="absolute bottom-4 right-4 bg-[#3d2c29]/90 text-white px-3 py-1 rounded-xl text-sm font-bold">
                        {item.priceFormatted}
                      </span>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-[#8c7a6b]">
                        <span className="flex items-center gap-1 font-semibold text-[#c87563]">
                          <Clock className="w-3.5 h-3.5" /> {item.duration}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {item.location}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-[#3d2c29] leading-tight">
                        {item.title}
                      </h3>

                      <p className="text-xs text-[#6b5852] leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-1.5 pt-2">
                        {item.included.map((inc, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs text-[#5c4a43]">
                            <CheckCircle className="w-3.5 h-3.5 text-[#c87563] shrink-0" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-6 pt-0 space-y-2">
                    {item.category !== 'kits' && onSelectCourseDetail && (
                      <button
                        onClick={() => onSelectCourseDetail(item.id)}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#3d2c29] hover:bg-[#2a1e1c] text-white py-2.5 px-4 rounded-xl font-medium text-xs transition-all"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Ver Ficha Completa</span>
                      </button>
                    )}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-xl font-medium text-xs transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Consultar Disponibilidad</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
