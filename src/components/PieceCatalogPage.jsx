import React, { useState } from 'react';
import { Search, Filter, ArrowLeft, Sparkles, MessageCircle, Eye, CheckCircle2, ShieldAlert, Heart, X, Tag } from 'lucide-react';

export default function PieceCatalogPage({ onNavigateHome, onNavigateCatalog }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPieceModal, setSelectedPieceModal] = useState(null);

  const pieces = [
    {
      id: 'pieza-1',
      category: 'velas',
      title: 'Vela Botánica en Vaso de Vidrio Ámbar',
      subtitle: 'Cera de soya natural infusionada con lavanda, flores secas y mecha de madera crepitante.',
      image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
      price: '₡12.500',
      status: 'Disponible',
      dimensions: '250g - 8.5 x 9 cm',
      materials: 'Cera de soya 100% vegetal, esencias botánicas puras, lavanda orgánica, mecha de cedro.',
      care: 'Cortar la mecha a 0.5 cm antes de encender. Primera encendida mínima de 2 horas.',
      description: 'Hermosa pieza artesanal creada a mano en nuestro taller. Perfecta para ambientar espacios de meditación, salas o como regalo especial.'
    },
    {
      id: 'pieza-2',
      category: 'resina',
      title: 'Bandeja Ovalada Decorativa de Resina & Pan de Oro',
      subtitle: 'Plato organizador con pigmentos perlados en tono rosa cuarzo y hojuelas doradas.',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
      price: '₡18.000',
      status: 'Por Encargo',
      dimensions: '18 x 10 cm - Espesor 1.2 cm',
      materials: 'Resina epóxica de alta transparencia, pigmentos micas perlados, hojuela de pan de oro.',
      care: 'Limpiar con paño suave húmedo. No apto para microondas ni lavavajillas.',
      description: 'Ideal para colocar joyas, perfumes, llaves o como base protectora para velas aromáticas. Pieza única e irrepetible.'
    },
    {
      id: 'pieza-3',
      category: 'patinas',
      title: 'Busto Escultural de Yeso con Pátina Bronce Antiguo',
      subtitle: 'Figura artística acabada a mano con técnica tradicional de ceras envejecidas.',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
      price: '₡24.000',
      status: 'Disponible',
      dimensions: '22 cm alto x 12 cm ancho',
      materials: 'Escultura en yeso cerámico denso, pátina metálica a la cera, sellador satinado.',
      care: 'Manejar con cuidado. Despolvar con pincel suave de cerda natural.',
      description: 'Una pieza clásica con toque contemporáneo. La técnica de pátina le otorga sombras profundas y un brillo metálico sutil muy elegante.'
    },
    {
      id: 'pieza-4',
      category: 'cuadros',
      title: 'Cuadro Botánico Texturizado en Acrílico',
      subtitle: 'Lienzo original pintado a mano con relieve en espátula y tonos pastel relajantes.',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80',
      price: '₡35.000',
      status: 'Disponible',
      dimensions: '30 x 40 cm (Bastidor de madera)',
      materials: 'Acrílicos profesionales de alta densidad, pasta de relieve impasto, verniz mate.',
      care: 'Mantener alejado de humedad directa y luz solar extrema prolongada.',
      description: 'Obra de arte original lista para colgar. Sus capas tridimensionales aportan dinamismo y calma a la decoración de cualquier espacio.'
    },
    {
      id: 'pieza-5',
      category: 'velas',
      title: 'Set Trío de Velas Cónicas Esculturales',
      subtitle: 'Conjunto de tres velas decorativas geométricas en tonos terracota y crema.',
      image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80',
      price: '₡15.000',
      status: 'Disponible',
      dimensions: '3 alturas: 15cm, 18cm, 22cm',
      materials: 'Cera de soya dura de alto punto de fusión, pigmentos liposolubles orgánicos.',
      care: 'Usar siempre plato o portavelas resistente al calor al encender.',
      description: 'Diseño arquitectónico moderno para centros de mesa o repisas. Quemado uniforme y libre de humo tóxico.'
    },
    {
      id: 'pieza-6',
      category: 'resina',
      title: 'Set de 4 Posavasos Geoda de Resina & Cuarzo',
      subtitle: 'Bordes en dorado hoja y centro cristalino transparente con incrustaciones.',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      price: '₡22.000',
      status: 'Por Encargo',
      dimensions: '10 cm diámetro c/u',
      materials: 'Resina resistente al calor hasta 70°C, bordes en pintura metálica líquida.',
      care: 'Lavar a mano con agua fría y jabón neutro suave.',
      description: 'Inspirados en las geodas naturales. Protegen tus superficies al mismo tiempo que visten la mesa con distinción.'
    }
  ];

  const filteredPieces = pieces.filter(piece => {
    const matchesCategory = selectedCategory === 'all' || piece.category === selectedCategory;
    const matchesSearch = piece.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          piece.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          piece.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#faf7f5] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#8c7a6b] hover:text-[#3d2c29] transition-colors bg-white px-4 py-2 rounded-full border border-[#e8ded5] shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al Inicio</span>
            </button>
            {onNavigateCatalog && (
              <button
                onClick={onNavigateCatalog}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#8c7a6b] hover:text-[#3d2c29] transition-colors bg-white px-4 py-2 rounded-full border border-[#e8ded5] shadow-sm"
              >
                <span>Ver Cursos</span>
              </button>
            )}
          </div>

          <span className="text-xs font-bold text-[#c87563] uppercase tracking-wider">
            Catálogo de Piezas & Creaciones Artesanales
          </span>
        </div>

        {/* Page Banner Header */}
        <div className="bg-gradient-to-r from-[#2c211f] via-[#3d2c29] to-[#2c211f] rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#c87563] text-white">
              <Sparkles className="w-3.5 h-3.5" /> Piezas Únicas Hechas a Mano
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              Catálogo de Piezas & Obras de Arte
            </h1>
            <p className="text-[#d8c8bf] text-base font-light leading-relaxed">
              Descubre nuestras creaciones exclusivas en velas botánicas, accesorios en resina, esculturas en pátinas y lienzos originales. Todas las piezas son elaboradas una a una con amor e insumos premium.
            </p>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-white rounded-2xl p-6 border border-[#e8ded5] shadow-sm mb-10 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">

            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-[#8c7a6b] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar pieza por nombre, material o estilo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#e8ded5] text-sm text-[#3d2c29] focus:outline-none focus:ring-2 focus:ring-[#c87563] bg-[#faf7f5]"
              />
            </div>

            <div className="text-xs text-[#8c7a6b] font-medium">
              Mostrando <span className="font-bold text-[#3d2c29]">{filteredPieces.length}</span> piezas artesanales
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
              Todas las Piezas ({pieces.length})
            </button>
            <button
              onClick={() => setSelectedCategory('velas')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'velas'
                  ? 'bg-[#c87563] text-white'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              Velas Decorativas
            </button>
            <button
              onClick={() => setSelectedCategory('resina')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'resina'
                  ? 'bg-[#c87563] text-white'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              Resina & Accesorios
            </button>
            <button
              onClick={() => setSelectedCategory('patinas')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'patinas'
                  ? 'bg-[#c87563] text-white'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              Yeso & Pátinas
            </button>
            <button
              onClick={() => setSelectedCategory('cuadros')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'cuadros'
                  ? 'bg-[#c87563] text-white'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              Cuadros en Lienzo
            </button>
          </div>
        </div>

        {/* Pieces Grid View (Non Drag-and-Drop) */}
        {filteredPieces.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#e8ded5]">
            <p className="text-lg font-semibold text-[#3d2c29]">No encontramos piezas coincidentes</p>
            <p className="text-sm text-[#8c7a6b] mt-1">Prueba cambiando los términos de búsqueda.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              className="mt-4 px-4 py-2 bg-[#c87563] text-white rounded-xl text-xs font-semibold"
            >
              Ver Todas las Piezas
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPieces.map((piece) => {
              const whatsappMsg = `¡Hola Maria! Me interesa encargar/comprar la pieza: "${piece.title}" (${piece.price}) para la clase de pintura.`;
              const whatsappUrl = `https://wa.me/50660367249?text=${encodeURIComponent(whatsappMsg)}`;

              return (
                <div
                  key={piece.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#e8ded5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={piece.image}
                        alt={piece.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                        piece.status === 'Disponible'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-amber-100 text-amber-800 border border-amber-300'
                      }`}>
                        {piece.status}
                      </span>
                      <span className="absolute bottom-4 right-4 bg-[#3d2c29]/90 backdrop-blur-md text-white px-4 py-1.5 rounded-2xl text-sm font-bold">
                        {piece.price}
                      </span>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 space-y-3">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#c87563]">
                        {piece.dimensions}
                      </div>

                      <h3 className="font-serif text-xl font-bold text-[#3d2c29] leading-tight">
                        {piece.title}
                      </h3>

                      <p className="text-xs text-[#6b5852] leading-relaxed">
                        {piece.subtitle}
                      </p>

                      <p className="text-xs text-[#5c4a43] line-clamp-2 pt-1 border-t border-[#f2dfd8]">
                        {piece.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 pt-0 space-y-2">
                    <button
                      onClick={() => setSelectedPieceModal(piece)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#3d2c29] hover:bg-[#2a1e1c] text-white py-2.5 px-4 rounded-xl font-medium text-xs transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Ver Ficha & Cuidados</span>
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-xl font-medium text-xs transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Solicitar por WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Piece Detail Modal */}
        {selectedPieceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative border border-[#e8ded5] shadow-2xl">

              <button
                onClick={() => setSelectedPieceModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#faf7f5] hover:bg-[#f2dfd8] text-[#3d2c29] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
                <img
                  src={selectedPieceModal.image}
                  alt={selectedPieceModal.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-4 right-4 bg-[#3d2c29] text-white text-lg font-serif font-bold px-4 py-1.5 rounded-xl">
                  {selectedPieceModal.price}
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-[#c87563]" />
                  <span className="text-xs font-bold text-[#c87563] uppercase tracking-wider">
                    {selectedPieceModal.status} • {selectedPieceModal.dimensions}
                  </span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-[#3d2c29]">
                  {selectedPieceModal.title}
                </h2>

                <p className="text-sm text-[#5c4a43] leading-relaxed">
                  {selectedPieceModal.description}
                </p>

                <div className="bg-[#faf7f5] p-4 rounded-2xl border border-[#e8ded5] space-y-2 text-xs text-[#5c4a43]">
                  <p className="font-bold text-[#3d2c29]">Materiales e Insumos:</p>
                  <p>{selectedPieceModal.materials}</p>
                </div>

                <div className="bg-[#faf7f5] p-4 rounded-2xl border border-[#e8ded5] space-y-2 text-xs text-[#5c4a43]">
                  <p className="font-bold text-[#3d2c29]">Recomendaciones de Cuidado:</p>
                  <p>{selectedPieceModal.care}</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/50660367249?text=${encodeURIComponent(`¡Hola Maria! Quisiera encargar la pieza: ${selectedPieceModal.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-2xl font-bold text-sm transition-all shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Encargar esta Pieza por WhatsApp</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
