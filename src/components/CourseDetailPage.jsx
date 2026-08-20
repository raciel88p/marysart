import React from 'react';
import { ArrowLeft, Clock, MapPin, CheckCircle2, Calendar, ShieldCheck, Heart, Sparkles, MessageCircle, User, Award, BookOpen } from 'lucide-react';

const COURSES_DATA = {
  velas: {
    id: 'velas',
    title: 'Taller de Velas Artesanales & Rituales de Bienestar',
    subtitle: 'Aprende a formular y verter velas aromáticas de cera de soya natural con flores botánicas.',
    badge: 'Más Popular',
    price: '₡29.500',
    currency: 'CRC por persona (Todo incluido)',
    duration: '3 horas 30 minutos',
    location: 'Taller Resina Art & Mary, Concepción de Tres Ríos / San José',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80',
    description: `Sumérgete en un espacio de paz y desconexión donde aprenderás la alquimia de la cerería botánica. En este taller teórico-práctico dominarás la temperatura de vertido, cálculo de fragancias y técnicas de fijado de mechas ecológicas para crear velas limpias, duraderas y libres de parafinas contaminantes.`,
    syllabus: [
      {
        time: '30 mins',
        title: 'Módulo 1: Introducción a las Ceras Vegetales',
        desc: 'Tipos de ceras (soya, coco, palma), propiedades térmicas, punto de fusión y diferencia contra ceras de parafina sintética.'
      },
      {
        time: '45 mins',
        title: 'Módulo 2: Formulación y Porcentaje de Fragancia',
        desc: 'Cálculo de densidad y porcentaje de fragancias esenciales. Medición exacta de temperatura de adición y vertido.'
      },
      {
        time: '60 mins',
        title: 'Módulo 3: Armado, Vertido y Fijación de Mecha',
        desc: 'Selección del grosor de mecha de algodón ecológico. Proceso de vertido en contenedores de vidrio ambar y lata decorativa.'
      },
      {
        time: '45 mins',
        title: 'Módulo 4: Decoración Botánica y Acabados',
        desc: 'Diseño estético en superficie utilizando lavanda, manzanilla, pétalos de rosa secos y cuarzos naturales.'
      },
      {
        time: '30 mins',
        title: 'Módulo 5: Merienda y Cierre Sensorial',
        desc: 'Espacio de convivencia con café gourmet, bebidas calientes y refrigerios mientras las velas completan su proceso inicial de curado.'
      }
    ],
    materials: [
      'Cera de soya 100% natural libre de toxinas',
      'Esencias aromáticas puras de grado cosmético',
      '2 Contenedores (1 vaso de vidrio y 1 lata metálica artesanal)',
      'Mechas de algodón no blanqueado y soportes',
      'Variedad de flores botánicas secas y cuarzos decorativos',
      'Guía impresa paso a paso + Hoja de fórmulas para repetir en casa',
      'Delantal protector durante el taller',
      'Caja de empaque especial para llevarte tus obras'
    ],
    instructor: {
      name: 'Mary Rodríguez',
      role: 'Fundadora & Crafter Principal de Resina Art & Mary',
      bio: 'Con más de 6 años de experiencia en artes manuales y formulación botánica, Mary ha guiado a más de 350 personas en el aprendizaje de velas artesanales y resina.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    dates: [
      'Sábado 15 de Marzo - 9:00 AM a 12:30 PM (Últimos 3 cupos)',
      'Domingo 23 de Marzo - 2:00 PM a 5:30 PM (Cupos disponibles)',
      'Sábado 5 de Abril - 9:00 AM a 12:30 PM (Cupos disponibles)'
    ],
    whatsappMsg: '¡Hola Mary! Quisiera reservar un cupo para el Taller de Velas Artesanales.'
  },
  pintura: {
    id: 'pintura',
    title: 'Taller de Pintura Creativa & Pinta y Vino',
    subtitle: 'Expresa tu creatividad en lienzo con acrílicos y técnicas de espátula en una velada alegre y relajante.',
    badge: 'Novedad',
    price: '₡29.500',
    currency: 'CRC por persona (Todo incluido)',
    duration: '3 horas 30 minutos',
    location: 'Taller Resina Art & Mary, Concepción de Tres Ríos / San José',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
    description: `Libera tu mente y descubre el placer de pintar sin miedo al lienzo en blanco. Un taller diseñado para conectar con tu lado artístico mediante capas de pintura acrílica, mezclas de color y texturas con espátula, todo acompañado de buena música y copa de vino.`,
    syllabus: [
      {
        time: '30 mins',
        title: 'Módulo 1: Teoría del Color y Boceto Inicial',
        desc: 'Comprensión de paletas armónicas, contraste de sombras y transferencia del diseño base al lienzo.'
      },
      {
        time: '60 mins',
        title: 'Módulo 2: Primeras Capas y Fondos con Pincel',
        desc: 'Aplicación de acrílicos en capas ligeras para crear degradados suaves y sensación de profundidad.'
      },
      {
        time: '60 mins',
        title: 'Módulo 3: Textura Impasto y Detalles con Espátula',
        desc: 'Uso de la espátula para dar relieve, relieve botánico y trazos expresivos a la obra.'
      },
      {
        time: '60 mins',
        title: 'Módulo 4: Firma, Verniz y Degustación',
        desc: 'Toques finales, aplicación de sellador protector, copa de vino o bebidas calientes con tabla de aperitivos.'
      }
    ],
    materials: [
      'Lienzo de tela sobre bastidor de madera 30x40cm',
      'Pinturas acrílicas de alta concentración pigmentaria',
      'Set de pinceles de fibra sintética y espátulas de pintura',
      'Paleta de mezclas y caballete de mesa',
      'Delantal protector de tela',
      'Copa de vino de bienvenida o bebidas calientes/frías',
      'Aperitivos y bocadillos artesanales'
    ],
    instructor: {
      name: 'Mary Rodríguez',
      role: 'Fundadora & Artista de Resina Art & Mary',
      bio: 'Apasionada por transmitir la pintura como una herramienta de mindfulness y descompresión del estrés cotidiano.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    dates: [
      'Sábado 22 de Marzo - 2:00 PM a 5:30 PM (Cupos disponibles)',
      'Domingo 30 de Marzo - 9:00 AM a 12:30 PM (Últimos 2 cupos)',
      'Sábado 12 de Abril - 2:00 PM a 5:30 PM (Cupos disponibles)'
    ],
    whatsappMsg: '¡Hola Mary! Quisiera reservar un cupo para el Taller de Pintura Creativa.'
  },
  combo: {
    id: 'combo',
    title: 'Experiencia Completa: Combo Velas + Pintura Artística',
    subtitle: 'Sumérgete en una jornada creativa completa donde aprenderás tanto velas artesanales como pintura en lienzo.',
    badge: 'Ahorra ₡7.000',
    price: '₡52.000',
    currency: 'CRC por persona (Jornada Doble)',
    duration: '6 horas (Dividido en 2 sesiones o 1 día completo)',
    location: 'Taller Resina Art & Mary, Concepción de Tres Ríos / San José',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80',
    description: `La opción preferida de quienes buscan una inmersión completa de fin de semana. Combina el taller de velas aromáticas y el taller de pintura acrílica con un descuento exclusivo, almuerzo/merienda especial y caja de regalos.`,
    syllabus: [
      {
        time: '3.5 Horas',
        title: 'Módulo Matutino: Taller Completo de Velas Artesanales',
        desc: 'Elaboración de 2 velas completas con cera de soya, fragancias y flores botánicas.'
      },
      {
        time: '1 Hora',
        title: 'Receso & Almuerzo Gourmet Incluido',
        desc: 'Tiempo para descansar, disfrutar del jardín y compartir con las compañeras de taller.'
      },
      {
        time: '3.5 Horas',
        title: 'Módulo Vespertino: Taller de Pintura & Pinta y Vino',
        desc: 'Creación de tu obra de arte en lienzo con técnica acrílica y espátula.'
      }
    ],
    materials: [
      'Todos los materiales de Velas + Todos los materiales de Pintura',
      'Almuerzo o merienda ejecutiva completa',
      'Certificado simbólico de participación',
      'Kit sorpresa con muestras de esencias y regalito artesanal',
      'Descuento del 10% en tu próxima compra de materiales'
    ],
    instructor: {
      name: 'Mary Rodríguez',
      role: 'Fundadora & Artista de Resina Art & Mary',
      bio: 'Guía experimentada que te acompañará paso a paso para asegurar que disfrutes cada minuto de la experiencia.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    dates: [
      'Sábado 29 de Marzo - 9:00 AM a 4:30 PM (Cupos disponibles)',
      'Sábado 26 de Abril - 9:00 AM a 4:30 PM (Cupos disponibles)'
    ],
    whatsappMsg: '¡Hola Mary! Quisiera información y reserva para el Combo Completo Velas + Pintura.'
  }
};

export default function CourseDetailPage({ courseId, onNavigateHome, onNavigateCatalog }) {
  const course = COURSES_DATA[courseId] || COURSES_DATA.velas;
  const whatsappUrl = `https://wa.me/50688390436?text=${encodeURIComponent(course.whatsappMsg)}`;

  return (
    <div className="bg-[#faf7f5] min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8c7a6b] hover:text-[#3d2c29] transition-colors"
            >
              Inicio
            </button>
            <span className="text-[#8c7a6b] text-xs">/</span>
            <button
              onClick={onNavigateCatalog}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8c7a6b] hover:text-[#3d2c29] transition-colors"
            >
              Catálogo
            </button>
            <span className="text-[#8c7a6b] text-xs">/</span>
            <span className="text-xs font-bold text-[#c87563] truncate max-w-xs sm:max-w-md">
              {course.title}
            </span>
          </div>

          <button
            onClick={onNavigateCatalog}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#3d2c29] bg-white border border-[#e8ded5] px-4 py-2 rounded-full shadow-sm hover:bg-[#f2dfd8] transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Volver al Catálogo
          </button>
        </div>

        {/* Hero Banner Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c87563]/10 text-[#c87563] font-bold text-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{course.badge}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3d2c29] leading-tight">
              {course.title}
            </h1>

            <p className="text-base text-[#6b5852] leading-relaxed">
              {course.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-medium text-[#5c4a43] pt-2">
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-[#e8ded5]">
                <Clock className="w-4 h-4 text-[#c87563]" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-[#e8ded5]">
                <MapPin className="w-4 h-4 text-[#c87563]" />
                <span>{course.location}</span>
              </div>
            </div>

            <p className="text-sm text-[#5c4a43] leading-relaxed pt-2">
              {course.description}
            </p>
          </div>

          {/* Pricing & Booking Sidebar Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#e8ded5] shadow-lg space-y-6 sticky top-28">
            <div className="relative h-56 rounded-2xl overflow-hidden mb-4">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <div className="text-xs text-[#8c7a6b] uppercase font-bold tracking-wider">Inversión por participante</div>
              <div className="text-4xl font-serif font-bold text-[#3d2c29] mt-1">{course.price}</div>
              <div className="text-xs text-[#8c7a6b] mt-0.5">{course.currency}</div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-4 px-6 rounded-2xl font-bold text-sm shadow-md transition-all hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Reservar Cupo por WhatsApp</span>
            </a>

            <div className="space-y-2 pt-2 border-t border-[#f2dfd8]">
              <div className="flex items-center gap-2 text-xs text-[#6b5852]">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                <span>Reserva garantizada con 50% de adelanto (SINPE Móvil)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#6b5852]">
                <Heart className="w-4 h-4 text-[#c87563]" />
                <span>Grupos reducidos (Máximo 8 alumnas por sesión)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Main Info Columns */}
          <div className="lg:col-span-8 space-y-12">

            {/* Hour-by-Hour Syllabus */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e8ded5] shadow-sm space-y-6">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#c87563]" />
                <h2 className="font-serif text-2xl font-bold text-[#3d2c29]">
                  Programa del Taller (Paso a Paso)
                </h2>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#f2dfd8] before:-z-0">
                {course.syllabus.map((item, idx) => (
                  <div key={idx} className="relative z-10 flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-[#c87563] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="space-y-1 bg-[#faf7f5] p-4 rounded-2xl border border-[#e8ded5] w-full">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-sm text-[#3d2c29]">{item.title}</h3>
                        <span className="text-xs font-semibold text-[#c87563] bg-white px-2.5 py-0.5 rounded-full border border-[#e8ded5]">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-xs text-[#6b5852] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Included Materials List */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e8ded5] shadow-sm space-y-6">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#c87563]" />
                <h2 className="font-serif text-2xl font-bold text-[#3d2c29]">
                  Materiales e Insumos Incluidos
                </h2>
              </div>
              <p className="text-xs text-[#8c7a6b]">
                No tienes que traer nada. Nosotros ponemos todos los insumos de primera calidad para que te enfoques en disfrutar:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.materials.map((mat, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-[#faf7f5] p-3 rounded-xl text-xs text-[#5c4a43] border border-[#e8ded5]">
                    <CheckCircle2 className="w-4 h-4 text-[#c87563] shrink-0 mt-0.5" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-8">

            {/* Instructor Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#e8ded5] shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c87563]">
                <User className="w-4 h-4" /> Instructor del Taller
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#c87563]"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-bold text-base text-[#3d2c29]">{course.instructor.name}</h3>
                  <p className="text-xs text-[#8c7a6b]">{course.instructor.role}</p>
                </div>
              </div>
              <p className="text-xs text-[#6b5852] leading-relaxed">
                {course.instructor.bio}
              </p>
            </div>

            {/* Next Dates Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#e8ded5] shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3d2c29]">
                <Calendar className="w-4 h-4 text-[#c87563]" /> Próximas Fechas
              </div>
              <div className="space-y-2">
                {course.dates.map((dateStr, idx) => (
                  <div key={idx} className="p-3 bg-[#faf7f5] rounded-xl text-xs text-[#5c4a43] font-medium border border-[#e8ded5]">
                    {dateStr}
                  </div>
                ))}
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-[#c87563] hover:text-[#a85848] pt-2"
              >
                <span>Consultar por fechas privadas o personalizadas &rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
