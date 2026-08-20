import React from 'react';
import { Heart, Sparkles, MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Hero() {
  const whatsappMessage = encodeURIComponent(
    "¡Hola Resina Art & Mary! Quisiera información sobre las próximas fechas para los talleres de Velas y Pintura."
  );
  const whatsappUrl = `https://wa.me/50688390436?text=${whatsappMessage}`;

  return (
    <section id="inicio" className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-[#faf7f5] via-[#f7eeea] to-[#faf7f5]">
      {/* Decorative Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#e8a598]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#d4a373]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f2dfd8] text-[#8c483b] text-xs sm:text-sm font-medium tracking-wide uppercase shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Talleres Presenciales en Costa Rica</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3d2c29] leading-tight font-bold">
              Taller de Velas Artesanales & <span className="text-[#c87563] italic">Pintura Creativa</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#6b5852] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Desconecta del estrés cotidiano y regálate una experiencia sensorial única. Aprende a crear tus propias velas aromáticas de cera de soya natural y a plasmar tu creatividad en lienzo en un ambiente relajante y acogedor.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs sm:text-sm text-[#5c4a43] pt-2">
              <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#e8ded5]">
                <MapPin className="w-4 h-4 text-[#c87563]" />
                <span>San José, Turrialba & San Carlos</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#e8ded5]">
                <Clock className="w-4 h-4 text-[#c87563]" />
                <span>Duración: 3h 30min</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#e8ded5]">
                <Heart className="w-4 h-4 text-[#c87563]" />
                <span>No se requiere experiencia</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#cursos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c87563] hover:bg-[#b56250] text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <span>Explorar Cursos</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f5eae4] text-[#3d2c29] border border-[#d8c5ba] px-8 py-4 rounded-full font-medium transition-all shadow-sm"
              >
                <span>Consultar Fechas Disponibles</span>
              </a>
            </div>

            {/* Social Trust */}
            <div className="pt-6 border-t border-[#e8ded5]/80 flex items-center justify-center lg:justify-start gap-6">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Participante"
                  loading="lazy"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                  alt="Participante"
                  loading="lazy"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                  alt="Participante"
                  loading="lazy"
                />
              </div>
              <div className="text-xs sm:text-sm text-[#6b5852] text-left">
                <span className="font-bold text-[#3d2c29]">Más de 350+ alumnas</span>
                <p>han vivido la experiencia Resina Art & Mary</p>
              </div>
            </div>

          </div>

          {/* Featured Visual Grid */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80"
                    alt="Velas artesanales de cera de soya"
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-3 text-white text-xs font-serif font-medium">
                    Velas Aromáticas
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80"
                    alt="Taller de pintura y arte"
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-3 text-white text-xs font-serif font-medium">
                    Expresión en Lienzo
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80"
                    alt="Detalles botánicos y mechas"
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-3 text-white text-xs font-serif font-medium">
                    Ingredientes 100% Naturales
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
                    alt="Ambiente del taller y amigas"
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-3 text-white text-xs font-serif font-medium">
                    Momentos de Conexión
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-[#e8ded5] hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f2dfd8] flex items-center justify-center text-[#c87563]">
                ☕
              </div>
              <div>
                <p className="text-xs font-bold text-[#3d2c29]">Merienda Incluida</p>
                <p className="text-[11px] text-[#8c7a6b]">Café, té y bocadillos dulces</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
