import React from 'react';
import { Star, Quote, Heart, Video } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Marleen Nájera',
      role: 'Alumna del Taller Presencial',
      location: 'Turrialba, Costa Rica',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      comment: 'Profe lo disfruté mucho el taller, gracias x enseñarnos también. Muchas bendiciones para usted y su familia.',
      rating: 5
    },
    {
      id: 2,
      name: 'Angie',
      role: 'Alumna del Taller Presencial',
      location: 'Turrialba, Costa Rica',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      comment: 'Muchas gracias fue un tiempo muy ameno, fue una terapia compartir con ustedes.',
      rating: 5
    },
    {
      id: 3,
      name: 'Mili',
      role: 'Alumna del Taller Presencial',
      location: 'Turrialba, Costa Rica',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      comment: 'Muchas gracias, Me encantó, Muchas gracias todo me quedó muy claro.',
      rating: 5
    },
    {
      id: 4,
      name: 'Ana Sánchez',
      role: 'Alumna del Taller de Velas',
      location: 'Turrialba, Costa Rica',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      comment: 'Sí muy lindo estuvo muy linda la clase, me costó un poquito, pero las velas están muy lindas, gracias a usted, bendiciones profe.',
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
            <span>Opiniones Reales de Nuestras Alumnas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3d2c29] font-bold">
            Lo Que Dicen Nuestras Participantes
          </h2>
          <p className="text-[#6b5852] text-lg font-light">
            La mejor recompensa es ver el entusiasmo y la gratitud con la que nuestras participantes disfrutan cada taller.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-3xl border border-[#e8ded5] shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-[#f2dfd8]" />

              <div className="space-y-3 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#e8a598]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#5c4a43] italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-3 pt-5 mt-5 border-t border-[#e8ded5]">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#e8a598] shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-serif font-bold text-[#3d2c29] text-sm leading-tight">
                    {t.name}
                  </h3>
                  <p className="text-[11px] text-[#8c7a6b] leading-tight">{t.role}</p>
                  <p className="text-[10px] text-[#b5a498] leading-tight">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Summary Banner */}
        <div className="mt-12 text-center bg-[#f2dfd8]/50 rounded-2xl p-6 border border-[#e8ded5] max-w-xl mx-auto flex items-center justify-center gap-4">
          <span className="text-3xl font-serif font-bold text-[#3d2c29]">5.0 / 5</span>
          <div className="text-left text-xs text-[#6b5852]">
            <div className="flex text-[#c87563]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-medium">Basado en testimonios de alumnas reales en Costa Rica</span>
          </div>
        </div>

        {/* Facebook Video Featured Section */}
        <div className="mt-16 max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2dfd8] text-[#8c483b] text-xs font-bold uppercase tracking-wider">
            <Video className="w-4 h-4" />
            <span>Video Destacado de los Talleres en Turrialba</span>
          </div>

          <p className="text-[#6b5852] text-sm sm:text-base font-light">
            Echa un vistazo a la experiencia en vivo grabada durante nuestras sesiones culturales y artísticas.
          </p>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#3d2c29] border border-[#e8ded5] max-w-[560px] mx-auto aspect-video flex items-center justify-center">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FCUTURALTURRIALBA%2Fvideos%2F2344413052968813%2F&show_text=false&width=560&t=0"
              width="560"
              height="314"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="w-full h-full object-cover rounded-3xl"
              title="Video de Talleres de Arte en Turrialba"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
