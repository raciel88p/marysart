import React, { useState } from 'react';
import { Search, Flame, Palette, Package, Filter, ArrowLeft, Clock, MapPin, CheckCircle, MessageCircle, Eye, Sparkles, Layers } from 'lucide-react';

export default function CatalogPage({ onNavigateHome, onSelectCourseDetail, onNavigatePieces }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const catalogItems = [
    {
      id: 'pintura-basico',
      category: 'pintura',
      type: 'Taller Presencial',
      title: 'Curso Básico de Pintura',
      subtitle: 'Al comprar tu pieza, la clase es totalmente GRATIS. Aprende desde cero con Maria.',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80',
      price: 0,
      priceFormatted: 'Clase GRATIS',
      duration: '3h - 4h',
      location: 'Turrialba, Urb. Jorge Debravo',
      badge: 'Clase Gratis',
      popularity: 10,
      description: '¡Al comprar tu pieza, la clase es totalmente GRATIS! Incluye todos los materiales e insumos de pintura.',
      included: ['Clase GRATIS al comprar la pieza', 'Insumos acrílicos y pinceles incluidos', 'Atención personalizada de Maria', 'Reserva de pieza con el 50%']
    },
    {
      id: 'pintura-medio',
      category: 'pintura',
      type: 'Taller Presencial',
      title: 'Curso Medio de Pintura',
      subtitle: 'Domina técnicas de luces y sombras. Clase GRATIS al adquirir tu pieza.',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      price: 0,
      priceFormatted: 'Clase GRATIS',
      duration: '3h 30m',
      location: 'Turrialba, Urb. Jorge Debravo',
      badge: 'Clase Gratis',
      popularity: 8,
      description: 'Profundiza en volumen y contrastes. La lección impartida por Maria es totalmente GRATIS al comprar tu pieza.',
      included: ['Clase GRATIS al comprar la pieza', 'Estudio de luces y sombras', 'Materiales y herramientas incluidos', 'Encargos de figuras semanales']
    },
    {
      id: 'pintura-avanzado',
      category: 'pintura',
      type: 'Taller Presencial',
      title: 'Curso Avanzado de Pintura',
      subtitle: 'Técnicas mixtas y relieve con espátula. Clase GRATIS con la compra de tu pieza.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
      price: 0,
      priceFormatted: 'Clase GRATIS',
      duration: '4h',
      location: 'Turrialba, Urb. Jorge Debravo',
      badge: 'Clase Gratis',
      popularity: 7,
      description: 'Taller de técnica impasto y espátula. Compra tu pieza y la clase con Maria es 100% GRATIS.',
      included: ['Clase GRATIS al comprar tu pieza', 'Uso de pastas de relieve impasto', 'Insumos y barnizado protector', 'Reserva de piezas con 50%']
    },
    {
      id: 'patinas',
      category: 'patinas',
      type: 'Taller Presencial',
      title: 'Curso de Pátinas & Acabados Artísticos',
      subtitle: 'Transforma figuras de yeso y cerámica. Clase GRATIS al comprar tu figura.',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      price: 0,
      priceFormatted: 'Clase GRATIS',
      duration: '3h 30m',
      location: 'Turrialba, Urb. Jorge Debravo',
      badge: 'Clase Gratis',
      popularity: 10,
      description: 'Ceras metálicas, betún de Judea y efectos de envejecido. La clase es totalmente GRATIS al elegir tu figura.',
      included: ['Clase GRATIS con tu figura', 'Ceras metálicas y betún de Judea', 'Insumos de aplicación incluidos', 'Horarios flexibles Mié, Vie, Sáb']
    },
    {
      id: 'velas-basico',
      category: 'velas',
      type: 'Taller Presencial',
      title: 'Curso Básico de Velas Artesanales',
      subtitle: 'Iníciate en la cerería artesanal creando velas aromáticas de cera de soya en frasco.',
      image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
      price: 25000,
      priceFormatted: '₡25.000',
      duration: '3h',
      location: 'Turrialba, Urb. Jorge Debravo',
      badge: 'Principiante',
      popularity: 10,
      description: 'Conoce los tipos de ceras ecológicas, puntos de fusión y el cálculo exacto de fragancia para elaborar velas perfectas.',
      included: ['Cera de soya 100% vegetal', 'Medición de aromas y mechas', '2 Velas terminadas en frasco', 'Guía impresa paso a paso']
    },
    {
      id: 'velas-medio',
      category: 'velas',
      type: 'Taller Presencial',
      title: 'Curso Medio de Velas Artesanales',
      subtitle: 'Crea velas en moldes de silicona, incrustaciones de flores botánicas y efectos de color.',
      image: 'https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?auto=format&fit=crop&w=800&q=80',
      price: 29500,
      priceFormatted: '₡29.500',
      duration: '3h 30m',
      location: 'Turrialba, Urb. Jorge Debravo',
      badge: 'Intermedio',
      popularity: 8,
      description: 'Aprende a trabajar con ceras de alto punto de fusión para desmolde perfecto de figuras geométricas y decoración con flores secas.',
      included: ['Ceras duras para moldes', 'Botánica y cuarzos naturales', 'Pigmentación uniforme', '3 Velas de molde hechas por ti']
    },
    {
      id: 'velas-avanzado',
      category: 'velas',
      type: 'Taller Presencial',
      title: 'Curso Avanzado de Velas Artesanales',
      subtitle: 'Formulación profesional de masajes, mechas de madera, velas de gel y proyectos para negocio.',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
      price: 38000,
      priceFormatted: '₡38.000',
      duration: '4h',
      location: 'Turrialba, Urb. Jorge Debravo',
      badge: 'Profesional',
      popularity: 9,
      description: 'Diseñado para quienes buscan comercializar su propia marca. Incluye velas terapéuticas para masaje, mechas de cedro y etiquetado normativo.',
      included: ['Velas de masaje con karité', 'Mechas de madera crepitante', 'Velas transparentes en gel', 'Guía de proveedores y costeo']
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
      return b.popularity - a.popularity;
    });

  return (
    <div className="bg-[#faf7f5] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Breadcrumb & Return button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#8c7a6b] hover:text-[#3d2c29] transition-colors bg-white px-4 py-2 rounded-full border border-[#e8ded5] shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al Inicio</span>
            </button>
            {onNavigatePieces && (
              <button
                onClick={onNavigatePieces}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#8c7a6b] hover:text-[#3d2c29] transition-colors bg-white px-4 py-2 rounded-full border border-[#e8ded5] shadow-sm"
              >
                <span>Ver Catálogo de Piezas</span>
              </button>
            )}
          </div>
          <span className="text-xs text-[#8c7a6b] font-medium uppercase tracking-wider">
            Catálogo de Cursos & Niveles
          </span>
        </div>

        {/* Catalog Banner Header */}
        <div className="bg-gradient-to-r from-[#3d2c29] to-[#5c4a43] rounded-3xl p-8 sm:p-12 text-white shadow-lg mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#c87563]/30 text-[#f2dfd8] border border-[#c87563]/40">
              <Sparkles className="w-3.5 h-3.5" /> 7 Cursos Disponibles
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              Catálogo de Cursos Presenciales por Nivel
            </h1>
            <p className="text-[#e8ded5] text-base font-light">
              Explora nuestros 7 cursos estructurados en Pintura (Básico, Medio, Avanzado), Velas (Básico, Medio, Avanzado) y Pátinas Artísticas.
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
                placeholder="Buscar cursos por nivel, técnica o insumos..."
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
              Todos los Cursos ({catalogItems.length})
            </button>
            <button
              onClick={() => setSelectedCategory('pintura')}
              className={`inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'pintura'
                  ? 'bg-[#c87563] text-white'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              <Palette className="w-3.5 h-3.5" /> Pintura (3 Niveles)
            </button>
            <button
              onClick={() => setSelectedCategory('velas')}
              className={`inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'velas'
                  ? 'bg-[#c87563] text-white'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              <Flame className="w-3.5 h-3.5" /> Velas (3 Niveles)
            </button>
            <button
              onClick={() => setSelectedCategory('patinas')}
              className={`inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'patinas'
                  ? 'bg-[#c87563] text-white'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" /> Pátinas
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
              const whatsappUrl = `https://wa.me/50660367249?text=${encodeURIComponent(`¡Hola Maria! Quisiera más detalles para matricular: ${item.title}`)}`;

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
                    {onSelectCourseDetail && (
                      <a
                        href={`/cursos/${item.id}`}
                        onClick={(e) => { e.preventDefault(); onSelectCourseDetail(item.id); }}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#3d2c29] hover:bg-[#2a1e1c] text-white py-2.5 px-4 rounded-xl font-medium text-xs transition-all"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Ver Ficha Completa</span>
                      </a>
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
