import React, { useState } from 'react';
import { Flame, Palette, CheckCircle, Clock, MapPin, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState('all');

  const courses = [
    {
      id: 'velas',
      category: 'velas',
      title: 'Taller de Velas Artesanales & Rituales de Bienestar',
      subtitle: 'Crea tu propia vela aromática con cera de soya natural y aceites esenciales.',
      image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
      price: '₡29.500',
      currency: 'CRC por persona',
      duration: '3 horas 30 minutos',
      location: 'Concepción de Tres Ríos / San José',
      badge: 'Más Popular',
      description: 'Un ritual de calma y aprendizaje para conectar con tus sentidos. Elabora una vela personalizada desde cero utilizando ceras vegetales ecológicas, flores secas y aromas relajantes.',
      highlights: [
        'Derretido y pigmentación de cera de soya 100% vegetal',
        'Creación de mezclas aromáticas personalizadas',
        'Decoración de la base y acabado botánico con flores secas',
        'Guía de trabajo física e impresa + plantilla digital de fórmulas',
        'Todos los materiales y herramientas incluidos',
        'Merienda especial con bebidas calientes y refrigerios'
      ],
      whatsappMsg: '¡Hola! Me interesa reservar un cupo para el Taller de Velas Artesanales de Marys Art.'
    },
    {
      id: 'pintura',
      category: 'pintura',
      title: 'Taller de Pintura Creativa & Pinta y Vino',
      subtitle: 'Expresa tu arte sobre lienzo mientras disfrutas de una tarde de relajación.',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
      price: '₡29.500',
      currency: 'CRC por persona',
      duration: '3 horas 30 minutos',
      location: 'Concepción de Tres Ríos / San José',
      badge: 'Novedad',
      description: 'Aprende técnicas básicas y avanzadas de pintura en acrílico y texturas sobre lienzo. Libera tu mente sin presión en un entorno alegre, lleno de colores y buena compañía.',
      highlights: [
        'Paso a paso de técnicas en acrílico, espátula y pincel',
        'Lienzo de alta calidad (te llevas tu obra terminada a casa)',
        'Copa de vino de bienvenida o bebidas calientes/frías',
        'Acompañamiento personalizado de la instructora',
        'Todos los pinceles, pinturas y delantal incluidos',
        'Bocadillos y merienda artesanal'
      ],
      whatsappMsg: '¡Hola! Quisiera más detalles para inscribirme al Taller de Pintura Creativa de Marys Art.'
    },
    {
      id: 'combo',
      category: 'combo',
      title: 'Experiencia Completa: Combo Velas + Pintura Artística',
      subtitle: 'Pasa un día completo creativo con ambas experiencias sensoriales.',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
      price: '₡52.000',
      currency: 'CRC por persona',
      duration: 'Jornada doble (6 horas total)',
      location: 'Concepción de Tres Ríos / San José',
      badge: 'Ahorra ₡7.000',
      description: 'La combinación perfecta para regalarte un fin de semana lleno de arte, velas, aromas y excelente compañía. Incluye certificado simbólico y regalo sorpresa.',
      highlights: [
        'Participación completa en ambos talleres (Velas + Pintura)',
        'Almuerzo o merienda ampliada incluida',
        'Cajas de regalo especiales para transportar tus creaciones',
        'Descuento exclusivo en insumos para seguir creando en casa',
        'Asesoría para iniciar tu propio emprendimiento'
      ],
      whatsappMsg: '¡Hola! Me interesa solicitar información sobre la Experiencia Completa Combo Velas + Pintura.'
    }
  ];

  const filteredCourses = selectedCourse === 'all'
    ? courses
    : courses.filter(c => c.category === selectedCourse);

  return (
    <section id="cursos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#c87563] font-semibold text-sm uppercase tracking-wider">
            Nuestros Talleres
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3d2c29] font-bold">
            Elige Tu Experiencia Creativa
          </h2>
          <p className="text-[#6b5852] text-lg font-light">
            Nuestros talleres están diseñados para principiantes y entusiastas del arte. No requieres conocimientos previos, solo tus ganas de conectar y crear.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setSelectedCourse('all')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCourse === 'all'
                  ? 'bg-[#3d2c29] text-white shadow-md'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              Todos los Cursos
            </button>
            <button
              onClick={() => setSelectedCourse('velas')}
              className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCourse === 'velas'
                  ? 'bg-[#c87563] text-white shadow-md'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>Velas Artesanales</span>
            </button>
            <button
              onClick={() => setSelectedCourse('pintura')}
              className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCourse === 'pintura'
                  ? 'bg-[#c87563] text-white shadow-md'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Pintura & Arte</span>
            </button>
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const whatsappUrl = `https://wa.me/50688390436?text=${encodeURIComponent(course.whatsappMsg)}`;

            return (
              <div
                key={course.id}
                className="bg-[#faf7f5] rounded-3xl overflow-hidden border border-[#e8ded5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image & Badge */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#c87563] shadow-sm">
                      {course.badge}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-[#3d2c29]/90 backdrop-blur-md text-white px-4 py-1.5 rounded-2xl text-sm font-bold shadow-md">
                      {course.price}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center gap-4 text-xs text-[#8c7a6b] font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#c87563]" />
                        {course.duration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#c87563]" />
                        {course.location}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#3d2c29] leading-tight">
                      {course.title}
                    </h3>

                    <p className="text-sm text-[#6b5852] leading-relaxed">
                      {course.description}
                    </p>

                    <hr className="border-[#e8ded5]" />

                    {/* Includes List */}
                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#3d2c29]">
                        Lo que incluye tu cupo:
                      </p>
                      <ul className="space-y-2">
                        {course.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#5c4a43]">
                            <CheckCircle className="w-4 h-4 text-[#c87563] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Action CTA */}
                <div className="p-6 sm:p-8 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-2xl font-medium transition-all shadow-md hover:shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Inscribirme por WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Private Groups Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#f2dfd8] via-[#f7eeea] to-[#f2dfd8] rounded-3xl p-8 sm:p-12 border border-[#e8ded5] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[#8c483b]">
              <Sparkles className="w-4 h-4" />
              <span>Eventos Especiales</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3d2c29]">
              ¿Buscas un Taller Privado para tu Grupo o Empresa?
            </h3>
            <p className="text-sm sm:text-base text-[#6b5852] max-w-2xl">
              Organizamos talleres personalizados para cumpleaños, despedidas de soltera, team building corporativo y reuniones de amigas. Nos adaptamos a tu horario y lugar.
            </p>
          </div>
          <a
            href="https://wa.me/50688390436?text=Hola%20Marys%20Art%2C%20quisiera%20cotizar%20un%20taller%20privado%20para%20un%20grupo."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#3d2c29] hover:bg-[#2a1e1c] text-white px-8 py-4 rounded-full text-sm font-medium transition-all shadow-md inline-flex items-center gap-2"
          >
            <span>Cotizar Evento Privado</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
