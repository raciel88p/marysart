import React, { useState } from 'react';
import { Camera, Eye, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('todos');

  const galleryItems = [
    {
      id: 1,
      category: 'velas',
      title: 'Velas de Cera de Soya Botánicas',
      image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
      tag: 'Velas Artesanales'
    },
    {
      id: 2,
      category: 'pintura',
      title: 'Obras en Acrílico y Lienzo',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      tag: 'Pintura Creativa'
    },
    {
      id: 3,
      category: 'ambiente',
      title: 'Mesa de Trabajo & Insumos Naturales',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
      tag: 'Experiencia'
    },
    {
      id: 4,
      category: 'velas',
      title: 'Detalles de Flores Secas y Aromas',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
      tag: 'Velas Artesanales'
    },
    {
      id: 5,
      category: 'pintura',
      title: 'Mezcla de Colores & Pinceladas',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
      tag: 'Pintura Creativa'
    },
    {
      id: 6,
      category: 'ambiente',
      title: 'Compartiendo la Merienda y Vino',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
      tag: 'Momentos'
    }
  ];

  const filteredItems = filter === 'todos'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2dfd8] text-[#8c483b] text-xs font-bold uppercase tracking-wider">
            <Camera className="w-4 h-4" />
            <span>Nuestra Galería</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3d2c29] font-bold">
            Fotografías de Nuestros Talleres
          </h2>
          <p className="text-[#6b5852] text-lg font-light">
            Echa un vistazo a los momentos especiales, risas y hermosas creaciones que nacen en Resina Art & Mary.
          </p>

          {/* Gallery Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setFilter('todos')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'todos'
                  ? 'bg-[#c87563] text-white shadow-md'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter('velas')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'velas'
                  ? 'bg-[#c87563] text-white shadow-md'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              Velas Artesanales
            </button>
            <button
              onClick={() => setFilter('pintura')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'pintura'
                  ? 'bg-[#c87563] text-white shadow-md'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              Pintura
            </button>
            <button
              onClick={() => setFilter('ambiente')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'ambiente'
                  ? 'bg-[#c87563] text-white shadow-md'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              Ambiente & Merienda
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3d2c29]/80 via-[#3d2c29]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#e8a598]">
                  {item.tag}
                </span>
                <h3 className="font-serif text-xl font-bold mt-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Callout */}
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
          para ver más publicaciones en vivo y fotos de cada taller.
        </div>

      </div>
    </section>
  );
}
