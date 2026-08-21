import React, { useState } from 'react';
import { Flame, Palette, CheckCircle, Clock, MapPin, Sparkles, MessageCircle, ArrowRight, Eye, Layers } from 'lucide-react';

export default function Courses({ onSelectCourseDetail }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 'pintura-basico',
      category: 'pintura',
      title: 'Curso Básico de Pintura',
      subtitle: 'Aprende los fundamentos del pincel, teoría del color y mezcla de tonos acrílicos desde cero.',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80',
      price: 'Clase GRATIS',
      currency: 'Al comprar tu pieza (Insumos incluidos)',
      duration: '3 - 4 horas',
      location: 'Turrialba, Urb. Jorge Debravo',
      badge: 'Clase Gratis con tu Pieza',
      description: '¡Al comprar tu pieza, la clase es totalmente GRATIS! Aprende técnicas de degradado, mezcla de acrílicos y soltura de trazo guiada por Maria.',
      highlights: [
        '¡Clase totalmente GRATIS al comprar tu pieza!',
        'Todos los materiales e insumos incluidos',
        'Principios de teoría del color y pincelada',
        'Encargos de figuras todas las semanas (Reserva con 50%)',
        'Horarios: Miércoles (9am-1pm/2pm-5pm), Viernes (2pm-5pm), Sábados (9am-1pm)'
      ],
      whatsappMsg: '¡Hola Maria! Quisiera comprar mi pieza y reservar cupo para la clase gratis de Pintura Básica.'
    },
    {
      id: 'pintura-medio',
      category: 'pintura',
      title: 'Curso Medio de Pintura',
      subtitle: 'Domina técnicas de luces, sombras y composición para dar profundidad a tus obras.',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      price: 'Clase GRATIS',
      currency: 'Al comprar tu pieza (Insumos incluidos)',
      duration: '3 - 4 horas',
      location: 'Turrialba, Urb. Jorge Debravo',
      badge: 'Clase Gratis con tu Pieza',
      description: 'Avanza en tu expresión artística profundizando en volumen y contrastes. La clase es totalmente GRATIS al adquirir tu pieza con Maria.',
      highlights: [
        '¡Clase GRATIS al comprar tu pieza de pintura!',
        'Manejo de contrastes luz/sombra y volumen',
        'Materiales completos y acompañamiento de Maria',
        'Reserva tu pieza con el 50% de adelanto',
        'Horarios: Miércoles, Viernes y Sábados'
      ],
      whatsappMsg: '¡Hola Maria! Quisiera consultar las piezas disponibles para la clase de Pintura Nivel Medio.'
    },
    {
      id: 'pintura-avanzado',
      category: 'pintura',
      title: 'Curso Avanzado de Pintura',
      subtitle: 'Explora técnicas mixtas, texturas tridimensionales con espátula y acabado profesional.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
      price: 'Clase GRATIS',
      currency: 'Al comprar tu pieza (Insumos incluidos)',
      duration: '3 - 4 horas',
      location: 'Turrialba, Urb. Jorge Debravo',
      badge: 'Clase Gratis con tu Pieza',
      description: 'Un taller intensivo con pasta de relieve y espátulas. Adquiere tu pieza y la lección personalizada es totalmente GRATIS.',
      highlights: [
        '¡Clase GRATIS al comprar tu pieza artística!',
        'Pastas de relieve impasto y técnicas de espátula',
        'Encargos semanales de figuras especiales',
        'Atención personalizada en grupos reducidos',
        'Horarios flexibles los Miércoles, Viernes y Sábados'
      ],
      whatsappMsg: '¡Hola Maria! Deseo información sobre las piezas para la clase de Pintura Avanzada.'
    },
    {
      id: 'patinas',
      category: 'patinas',
      title: 'Curso de Pátinas & Acabados Artísticos',
      subtitle: 'Aprende a transformar figuras de yeso y cerámica con técnicas metálicas envejecidas.',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
      price: 'Clase GRATIS',
      currency: 'Al comprar tu figura (Insumos incluidos)',
      duration: '3 - 4 horas',
      location: 'Turrialba, Urb. Jorge Debravo',
      badge: 'Especialidad',
      description: 'Elige tu figura de yeso o cerámica en nuestro catálogo y la clase de pátinas metálicas y envejecidos es totalmente GRATIS.',
      highlights: [
        '¡Clase GRATIS al adquirir tu figura en taller!',
        'Ceras metálicas, betún de Judea y efectos oxidados',
        'Todos los insumos de aplicación incluidos',
        'Encargos de figuras todas las semanas (Reserva con 50%)',
        'Horarios: Miércoles (9-1 / 2-5), Viernes (2-5), Sábados (9-1)'
      ],
      whatsappMsg: '¡Hola Maria! Quisiera elegir una figura de yeso/cerámica y matricular la clase gratis de Pátinas.'
    },
    {
      id: 'velas-basico',
      category: 'velas',
      title: 'Curso Básico de Velas Artesanales',
      subtitle: 'Iníciate en la cerería artesanal creando velas aromáticas de cera de soya en frasco.',
      image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
      price: '₡25.000',
      currency: 'CRC por persona (Todo incluido)',
      duration: '3 horas',
      location: 'Turrialba, Urb. Jorge Debravo',
      badge: 'Más Popular',
      description: 'Conoce los tipos de ceras ecológicas, puntos de fusión y el cálculo exacto de fragancia para elaborar velas perfectas.',
      highlights: [
        'Propiedades de la cera de soya 100% vegetal',
        'Cálculo de porcentaje de aromas e inserción de mechas de algodón',
        'Elaboración de 2 velas en vaso de vidrio ámbar y lata decorativa',
        'Guía básica impresa de formulación',
        'Merienda especial con bebidas calientes'
      ],
      whatsappMsg: '¡Hola Maria! Me interesa inscribirme en el Curso Básico de Velas.'
    },
    {
      id: 'velas-medio',
      category: 'velas',
      title: 'Curso Medio de Velas Artesanales',
      subtitle: 'Crea velas en moldes de silicona, incrustaciones de flores botánicas y efectos de color.',
      image: 'https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?auto=format&fit=crop&w=800&q=80',
      price: '₡29.500',
      currency: 'CRC por persona (Todo incluido)',
      duration: '3 horas 30 minutos',
      location: 'Turrialba, Urb. Jorge Debravo',
      badge: 'Recomendado',
      description: 'Aprende a trabajar con ceras de alto punto de fusión para desmolde perfecto de figuras geométricas y decoración con flores secas.',
      highlights: [
        'Uso de ceras duras para velas de molde sin contenedor',
        'Decoración de superficie con botánica y cuarzos naturales',
        'Pigmentación uniforme y técnica de capas de colores',
        '3 Velas de molde esculturales terminadas',
        'Manual intermedio de aditivos para mayor durabilidad'
      ],
      whatsappMsg: '¡Hola Maria! Quisiera información para el Curso Medio de Velas.'
    },
    {
      id: 'velas-avanzado',
      category: 'velas',
      title: 'Curso Avanzado de Velas Artesanales',
      subtitle: 'Formulación profesional de masajes, mechas de madera, velas de gel y proyectos para negocio.',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
      price: '₡38.000',
      currency: 'CRC por persona (Todo incluido)',
      duration: '4 horas',
      location: 'Turrialba, Urb. Jorge Debravo',
      badge: 'Profesional / Emprendedor',
      description: 'Diseñado para quienes buscan comercializar su propia marca. Incluye velas terapéuticas para masaje, mechas de cedro y etiquetado normativo.',
      highlights: [
        'Formulación de velas de masaje con mantecas de karité y coco',
        'Técnica de colocación de mechas de madera de cedro crepitante',
        'Creación de velas transparentes en cera de gel cristalina',
        'Costeo de materiales y guía de proveedores locales',
        'Asesoría personalizada con Maria'
      ],
      whatsappMsg: '¡Hola Maria! Me interesa inscribirme en el Curso Avanzado de Velas.'
    }
  ];

  const filteredCourses = selectedCategory === 'all'
    ? courses
    : courses.filter(c => c.category === selectedCategory);

  return (
    <section id="cursos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#c87563] font-semibold text-sm uppercase tracking-wider">
            Nuestros 7 Cursos Especializados
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3d2c29] font-bold">
            Elige Tu Nivel & Experiencia Creativa
          </h2>
          <p className="text-[#6b5852] text-lg font-light">
            ¡Al comprar tu pieza, la clase de pintura es totalmente GRATIS con todos los materiales incluidos! Impartidos por Maria en Turrialba (Urbanización Jorge Debravo).
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#3d2c29] text-white shadow-md'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              Todos los 7 Cursos
            </button>
            <button
              onClick={() => setSelectedCategory('pintura')}
              className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'pintura'
                  ? 'bg-[#c87563] text-white shadow-md'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Cursos de Pintura</span>
            </button>
            <button
              onClick={() => setSelectedCategory('velas')}
              className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'velas'
                  ? 'bg-[#c87563] text-white shadow-md'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>Cursos de Velas</span>
            </button>
            <button
              onClick={() => setSelectedCategory('patinas')}
              className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'patinas'
                  ? 'bg-[#c87563] text-white shadow-md'
                  : 'bg-[#faf7f5] text-[#5c4a43] hover:bg-[#f2dfd8]'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Curso de Pátinas</span>
            </button>
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const whatsappUrl = `https://wa.me/50660367249?text=${encodeURIComponent(course.whatsappMsg)}`;

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

                {/* Card Action CTAs */}
                <div className="p-6 sm:p-8 pt-0 space-y-2.5">
                  {onSelectCourseDetail && (
                    <a
                      href={`/cursos/${course.id}`}
                      onClick={(e) => { e.preventDefault(); onSelectCourseDetail(course.id); }}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#3d2c29] hover:bg-[#2a1e1c] text-white py-3 px-6 rounded-2xl font-medium text-sm transition-all shadow-md"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Ver Ficha del Curso</span>
                    </a>
                  )}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-2xl font-medium text-sm transition-all shadow-md hover:shadow-lg"
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
            Organizamos talleres personalizados para cumpleaños, despedidas de soltera, team building corporativo y reuniones de amigas en Turrialba y zonas aledañas.
            </p>
          </div>
          <a
          href="https://wa.me/50660367249?text=Hola%20Maria%2C%20quisiera%20cotizar%20un%20taller%20privado%20para%20un%20grupo."
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
