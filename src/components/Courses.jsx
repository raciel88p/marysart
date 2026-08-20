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
      price: '₡25.000',
      currency: 'CRC por persona',
      duration: '3 horas',
      location: 'San José / Turrialba / San Carlos',
      badge: 'Nivel Principiante',
      description: 'Ideal para quienes nunca han tomado un pincel. Conocerás técnicas de degradado, manejo de agua y fijación de capas sobre lienzo.',
      highlights: [
        'Principios de teoría del color y círculo cromático',
        'Técnicas de pincelada limpia y degradados suaves',
        'Lienzo de 30x40cm listo para llevarte a casa',
        'Todos los insumos acrílicos y pinceles incluidos',
        'Merienda artesanal con café o té caliente'
      ],
      whatsappMsg: '¡Hola! Me interesa reservar un cupo para el Curso Básico de Pintura.'
    },
    {
      id: 'pintura-medio',
      category: 'pintura',
      title: 'Curso Medio de Pintura',
      subtitle: 'Domina técnicas de luces, sombras y composición para dar profundidad a tus obras.',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      price: '₡29.500',
      currency: 'CRC por persona',
      duration: '3 horas 30 minutos',
      location: 'San José / Turrialba / San Carlos',
      badge: 'Nivel Intermedio',
      description: 'Avanza en tu expresión artística profundizando en el volumen, contrastes y armonías complejas de color en bodegones y paisajes.',
      highlights: [
        'Manejo de contrastes luz/sombra en capas acrílicas',
        'Perspectiva atmosférica y planos de profundidad',
        'Lienzo sobre bastidor de madera de alta calidad',
        'Copa de vino de bienvenida o bebidas calientes',
        'Acompañamiento personalizado de la instructora'
      ],
      whatsappMsg: '¡Hola! Quisiera más detalles para el Curso Medio de Pintura.'
    },
    {
      id: 'pintura-avanzado',
      category: 'pintura',
      title: 'Curso Avanzado de Pintura',
      subtitle: 'Explora técnicas mixtas, texturas tridimensionales con espátula y acabado profesional.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
      price: '₡35.000',
      currency: 'CRC por persona',
      duration: '4 horas',
      location: 'San José / Turrialba / San Carlos',
      badge: 'Nivel Avanzado',
      description: 'Un taller intensivo enfocado en la técnica impasto con pasta de relieve, espátulas de metal y sellado con verniz de galería.',
      highlights: [
        'Uso de pastas de relieve y gesso estructural',
        'Técnica de espátula para flores y relieves botánicos',
        'Lienzo de gran formato con marco de madera',
        'Protección final con varniz satinado o brillante',
        'Copa de vino premium y tabla de bocadillos gourmet'
      ],
      whatsappMsg: '¡Hola! Deseo información e inscripción para el Curso Avanzado de Pintura.'
    },
    {
      id: 'patinas',
      category: 'patinas',
      title: 'Curso de Pátinas & Acabados Artísticos',
      subtitle: 'Aprende a transformar figuras de yeso y cerámica con técnicas metálicas envejecidas.',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80',
      price: '₡28.000',
      currency: 'CRC por persona',
      duration: '3 horas 30 minutos',
      location: 'San José / Turrialba / San Carlos',
      badge: 'Especialidad',
      description: 'Aprende el arte tradicional de las pátinas a la cera, bronces, cobres, pátinas oxidadas y decapados sobre superficies rígidas.',
      highlights: [
        'Preparación y sellado de figuras en yeso cerámico',
        'Aplicación de ceras metálicas, betún de Judea y pátina verde turquesa',
        'Técnica de pincel seco para resaltar relieves',
        '2 Figuras esculturales incluidas para llevar a casa',
        'Guía impresa de combinaciones de fórmulas'
      ],
      whatsappMsg: '¡Hola! Quisiera matricular el Curso de Pátinas & Acabados Artísticos.'
    },
    {
      id: 'velas-basico',
      category: 'velas',
      title: 'Curso Básico de Velas',
      subtitle: 'Iníciate en la cerería artesanal creando velas aromáticas de cera de soya en frasco.',
      image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
      price: '₡25.000',
      currency: 'CRC por persona',
      duration: '3 horas',
      location: 'San José / Turrialba / San Carlos',
      badge: 'Más Popular',
      description: 'Conoce los tipos de ceras ecológicas, puntos de fusión y el cálculo exacto de fragancia para elaborar velas perfectas.',
      highlights: [
        'Propiedades de la cera de soya 100% vegetal',
        'Cálculo de porcentaje de aromas e inserción de mechas de algodón',
        'Elaboración de 2 velas en vaso de vidrio ámbar y lata decorativa',
        'Guía básica impresa de formulación',
        'Merienda especial con bebidas calientes'
      ],
      whatsappMsg: '¡Hola! Me interesa inscribirme en el Curso Básico de Velas.'
    },
    {
      id: 'velas-medio',
      category: 'velas',
      title: 'Curso Medio de Velas',
      subtitle: 'Crea velas en moldes de silicona, incrustaciones de flores botánicas y efectos de color.',
      image: 'https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?auto=format&fit=crop&w=800&q=80',
      price: '₡29.500',
      currency: 'CRC por persona',
      duration: '3 horas 30 minutos',
      location: 'San José / Turrialba / San Carlos',
      badge: 'Recomendado',
      description: 'Aprende a trabajar con ceras de alto punto de fusión para desmolde perfecto de figuras geométricas y decoración con flores secas.',
      highlights: [
        'Uso de ceras duras para velas de molde sin contenedor',
        'Decoración de superficie con botánica y cuarzos naturales',
        'Pigmentación uniforme y técnica de capas de colores',
        '3 Velas de molde esculturales terminadas',
        'Manual intermedio de aditivos para mayor durabilidad'
      ],
      whatsappMsg: '¡Hola! Quisiera información para el Curso Medio de Velas.'
    },
    {
      id: 'velas-avanzado',
      category: 'velas',
      title: 'Curso Avanzado de Velas',
      subtitle: 'Formulación profesional de masajes, mechas de madera, velas de gel y proyectos para negocio.',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
      price: '₡38.000',
      currency: 'CRC por persona',
      duration: '4 horas',
      location: 'San José / Turrialba / San Carlos',
      badge: 'Profesional / Emprendedor',
      description: 'Diseñado para quienes buscan comercializar su propia marca. Incluye velas terapéuticas para masaje, mechas de cedro y etiquetado normativo.',
      highlights: [
        'Formulación de velas de masaje con mantecas de karité y coco',
        'Técnica de colocación de mechas de madera de cedro crepitante',
        'Creación de velas transparentes en cera de gel cristalina',
        'Costeo de materiales y guía de proveedores locales',
        'Asesoría personalizada para emprendimientos'
      ],
      whatsappMsg: '¡Hola! Me interesa inscribirme en el Curso Avanzado de Velas.'
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
            Desde niveles básicos para principiantes hasta módulos avanzados y pátinas artísticas. Impartidos en San José, Turrialba y San Carlos.
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

                {/* Card Action CTAs */}
                <div className="p-6 sm:p-8 pt-0 space-y-2.5">
                  {onSelectCourseDetail && (
                    <button
                      onClick={() => onSelectCourseDetail(course.id)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#3d2c29] hover:bg-[#2a1e1c] text-white py-3 px-6 rounded-2xl font-medium text-sm transition-all shadow-md"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Ver Ficha del Curso</span>
                    </button>
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
              Organizamos talleres personalizados para cumpleaños, despedidas de soltera, team building corporativo y reuniones de amigas en San José, Turrialba y San Carlos.
            </p>
          </div>
          <a
            href="https://wa.me/50688390436?text=Hola%20Resina%20Art%20%26%20Mary%2C%20quisiera%20cotizar%20un%20taller%20privado%20para%20un%20grupo."
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
