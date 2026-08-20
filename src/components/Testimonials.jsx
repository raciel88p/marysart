import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Valeria Castro',
      role: 'Asistió al Taller de Velas',
      location: 'San José, Costa Rica',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      comment: 'Una experiencia inolvidable. Fui con mi mamá para celebrar su cumpleaños y salimos felices. El aroma del lugar, la paciencia de Mary y la merienda deliciosa. ¡Nuestras velas quedaron hermosas!',
      rating: 5
    },
    {
      id: 2,
      name: 'Sofía Brenes',
      role: 'Asistió al Taller de Pintura',
      location: 'Cartago, Costa Rica',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      comment: 'Tenía años de no pintar y tenía miedo de no saber cómo empezar. El ambiente es super relajado, sin presiones y con una copa de vino deliciosa. Te llena de inspiración.',
      rating: 5
    },
    {
      id: 3,
      name: 'Carolina Monge',
      role: 'Taller Privado de Cumpleaños',
      location: 'Heredia, Costa Rica',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      comment: 'Organizamos el taller de velas para un grupo de 8 amigas y superó todas las expectativas. Todo super bien organizado, materiales de primera calidad y nos llevamos recuerdos preciosos.',
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-[#faf7f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2dfd8] text-[#8c483b] text-xs font-bold uppercase tracking-wider">
            <Heart className="w-4 h-4 fill-current" />
            <span>Opiniones Reales</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3d2c29] font-bold">
            Lo Que Dicen Nuestras Alumnas
          </h2>
          <p className="text-[#6b5852] text-lg font-light">
            La mejor recompensa es ver las sonrisas y las creaciones únicas que cada persona se lleva a casa.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-3xl border border-[#e8ded5] shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#f2dfd8]" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#e8a598]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-[#5c4a43] italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-[#e8ded5]">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#e8a598]"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-serif font-bold text-[#3d2c29] text-base">
                    {t.name}
                  </h3>
                  <p className="text-xs text-[#8c7a6b]">{t.role}</p>
                  <p className="text-[11px] text-[#b5a498]">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Summary Banner */}
        <div className="mt-12 text-center bg-[#f2dfd8]/50 rounded-2xl p-6 border border-[#e8ded5] max-w-xl mx-auto flex items-center justify-center gap-4">
          <span className="text-3xl font-serif font-bold text-[#3d2c29]">4.9 / 5</span>
          <div className="text-left text-xs text-[#6b5852]">
            <div className="flex text-[#c87563]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-medium">Basado en más de 300 valoraciones en Costa Rica</span>
          </div>
        </div>

      </div>
    </section>
  );
}
