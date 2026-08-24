import React from 'react';
import { ArrowLeft, Clock, MapPin, CheckCircle2, Calendar, ShieldCheck, Heart, Sparkles, MessageCircle, User, Award, BookOpen } from 'lucide-react';

export const coursesData = {
  'pintura-basico': {
    id: 'pintura-basico',
    title: 'Curso Básico de Pintura',
    subtitle: '¡Al comprar tu pieza, la clase es totalmente GRATIS! Aprende desde cero con Maria.',
    badge: 'Clase Gratis con tu Pieza',
    price: 'Clase GRATIS',
    currency: 'Al comprar tu pieza (Insumos incluidos)',
    duration: '3 - 4 horas',
    location: 'Turrialba, Urbanización Jorge Debravo',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1000&q=80',
    description: `¡Crea, pinta y disfruta una experiencia única! 🎨☕
Reserva tu pieza con un 50% de adelanto y cancela el 50% restante al finalizar en nuestro taller, o realiza tu pedido por encargo.

Al adquirir tu pieza, recibirás una clase de pintura acrílica completamente GRATIS. María te acompañará paso a paso en el manejo de pinceles, teoría del color y técnicas de acabado para que puedas crear una pieza única con tus propias manos.

Además, compartiremos un momento especial en nuestra comunidad disfrutando de un cafecito y un quequito, creando un espacio lleno de creatividad, aprendizaje y conexión. ✨🎨☕`,
    syllabus: [
      { time: '30 mins', title: 'Módulo 1: Selección de Pieza y Preparación', desc: 'Sella y prepara tu pieza o lienzo para recibir la pintura.' },
      { time: '45 mins', title: 'Módulo 2: Teoría del Color y Mezclas', desc: 'Mezcla paletas armoniosas para darle vida a tu diseño.' },
      { time: '90 mins', title: 'Módulo 3: Pintado Guiado con Maria', desc: 'Paso a paso para aplicar sombras, volumen y pincelada limpia.' },
      { time: '45 mins', title: 'Módulo 4: Acabado Protector y Firma', desc: 'Protección final de tu pieza lista para lucir en tu hogar.' }
    ],
    materials: [
      'Pieza o lienzo de tu elección',
      'Todos los insumos acrílicos y selladores',
      'Set de pinceles de precisión y paletas',
      'Delantal protector durante la clase',
      'Merienda y atención personalizada'
    ],
    instructor: {
      name: 'Maria',
      role: 'Artistas & Instructora Principal',
      bio: 'Instructora de Resina Art & Mary en Turrialba. Apasionada por guiarte en el arte de pintar piezas únicas.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    dates: [
      'Miércoles: 9:00 AM - 1:00 PM / 2:00 PM - 5:00 PM',
      'Viernes: 2:00 PM - 5:00 PM',
      'Sábados: 9:00 AM - 1:00 PM'
    ],
    whatsappMsg: '¡Hola Maria! Quisiera comprar mi pieza y reservar mi clase gratis de Pintura Básica.'
  },
  'pintura-medio': {
    id: 'pintura-medio',
    title: 'Curso Medio de Pintura',
    subtitle: 'Domina técnicas de luces, sombras y profundidad. Clase GRATIS al comprar tu pieza.',
    badge: 'Clase Gratis con tu Pieza',
    price: 'Clase GRATIS',
    currency: 'Al comprar tu pieza (Insumos incluidos)',
    duration: '3 - 4 horas',
    location: 'Turrialba, Urbanización Jorge Debravo',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
    description: `Eleva el acabado de tus figuras y cuadros. Adquiere la pieza de tu preferencia y la lección técnica con Maria es totalmente GRATIS.`,
    syllabus: [
      { time: '30 mins', title: 'Módulo 1: Puntos de Luz y Sombra', desc: 'Análisis de volúmenes en figuras esculturales o lienzos.' },
      { time: '60 mins', title: 'Módulo 2: Degradados y Capas', desc: 'Técnicas de difuminado suave para efectos realistas.' },
      { time: '90 mins', title: 'Módulo 3: Detallado de Alta Precisión', desc: 'Perfilado de bordes y realce de texturas.' },
      { time: '30 mins', title: 'Módulo 4: Sellado Final', desc: 'Aplicación de laca satinada para máxima durabilidad.' }
    ],
    materials: [
      'Pieza seleccionada',
      'Pinturas acrílicas y pigmentos especiales',
      'Pinceles de detalle y difuminado',
      'Acompañamiento personalizado de Maria',
      'Bebidas y bocadillos'
    ],
    instructor: {
      name: 'Maria',
      role: 'Artistas & Instructora Principal',
      bio: 'Especialista en guiar técnicas de detalle, luces y volumen sobre yeso, cerámica y lienzo.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    dates: [
      'Miércoles: 9:00 AM - 1:00 PM / 2:00 PM - 5:00 PM',
      'Viernes: 2:00 PM - 5:00 PM',
      'Sábados: 9:00 AM - 1:00 PM'
    ],
    whatsappMsg: '¡Hola Maria! Quisiera consultar sobre las piezas para el Curso Medio de Pintura.'
  },
  'pintura-avanzado': {
    id: 'pintura-avanzado',
    title: 'Curso Avanzado de Pintura',
    subtitle: 'Relieves tridimensionales y espátulas. Clase GRATIS al comprar tu pieza.',
    badge: 'Clase Gratis con tu Pieza',
    price: 'Clase GRATIS',
    currency: 'Al comprar tu pieza (Insumos incluidos)',
    duration: '3 - 4 horas',
    location: 'Turrialba, Urbanización Jorge Debravo',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80',
    description: `Explora el uso de pastas de relieve y espátula. Compra tu pieza o encárgala con 50% de anticipación y recibe la clase sin costo adicional.`,
    syllabus: [
      { time: '45 mins', title: 'Módulo 1: Pastas de Relieve', desc: 'Aplicación de textura tridimensional impasto.' },
      { time: '75 mins', title: 'Módulo 2: Carga de Espátula', desc: 'Efectos orgánicos y pinceladas gruesas de relieve.' },
      { time: '60 mins', title: 'Módulo 3: Destellos Metálicos', desc: 'Aplicación de pan de oro o toques metalizados.' },
      { time: '30 mins', title: 'Módulo 4: Sellado de Galería', desc: 'Barniz de protección profesional.' }
    ],
    materials: [
      'Pieza o lienzo seleccionado',
      'Pastas impasto de relieve',
      'Espátulas metálicas y pinceles',
      'Barnices y acabados mate/brillante',
      'Atención personalizada'
    ],
    instructor: {
      name: 'Maria',
      role: 'Artistas & Instructora Principal',
      bio: 'Apasionada por la textura tridimensional y acabados de lujo.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    dates: [
      'Miércoles: 9:00 AM - 1:00 PM / 2:00 PM - 5:00 PM',
      'Viernes: 2:00 PM - 5:00 PM',
      'Sábados: 9:00 AM - 1:00 PM'
    ],
    whatsappMsg: '¡Hola Maria! Quisiera información para la clase de Pintura Avanzada.'
  },
  'patinas': {
    id: 'patinas',
    title: 'Curso de Pátinas & Acabados Artísticos',
    subtitle: 'Transforma figuras de yeso y cerámica. Clase GRATIS al comprar tu figura.',
    badge: 'Clase Gratis con tu Figura',
    price: 'Clase GRATIS',
    currency: 'Al comprar tu figura (Insumos incluidos)',
    duration: '3 - 4 horas',
    location: 'Turrialba, Urbanización Jorge Debravo',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
    description: `Aprende el arte de las pátinas a la cera, bronces, betún de Judea y envejecidos. Al comprar tu figura en el taller, la lección es GRATIS.`,
    syllabus: [
      { time: '45 mins', title: 'Módulo 1: Sellado de Superficie', desc: 'Preparación de yeso o cerámica.' },
      { time: '60 mins', title: 'Módulo 2: Ceras Metálicas', desc: 'Aplicación de ceras oro, bronce y cobre.' },
      { time: '60 mins', title: 'Módulo 3: Envejecidos y Óxido', desc: 'Betún de Judea y efectos de sombras profundas.' },
      { time: '35 mins', title: 'Módulo 4: Fijación Final', desc: 'Sellador protector satinado.' }
    ],
    materials: [
      'Figura escultural elegida',
      'Set de ceras metálicas y betún de Judea',
      'Trapos de algodón y pinceles de estarcido',
      'Todos los insumos incluidos',
      'Merienda amena'
    ],
    instructor: {
      name: 'Maria',
      role: 'Instructora de Pátinas & Arte',
      bio: 'Especialista en acabados metálicos y técnicas envejecidas sobre esculturas.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    dates: [
      'Miércoles: 9:00 AM - 1:00 PM / 2:00 PM - 5:00 PM',
      'Viernes: 2:00 PM - 5:00 PM',
      'Sábados: 9:00 AM - 1:00 PM'
    ],
    whatsappMsg: '¡Hola Maria! Deseo elegir una figura y reservar clase gratis de Pátinas.'
  },
  'velas-basico': {
    id: 'velas-basico',
    title: 'Curso Básico de Velas Artesanales',
    subtitle: 'Iníciate en la cerería artesanal creando velas aromáticas de cera de soya en frasco.',
    badge: 'Más Popular',
    price: '₡25.000',
    currency: 'CRC por persona (Todo incluido)',
    duration: '3 horas',
    location: 'Turrialba, Urbanización Jorge Debravo',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80',
    description: `Aprende las bases fundamentales de la cerería botánica. Domina las temperaturas de fusión, porcentajes de esencias aromáticas y colocado de mecha para velas de soya en contenedor.`,
    syllabus: [
      { time: '30 mins', title: 'Módulo 1: Tipos de Ceras Ecológicas', desc: 'Diferencia entre cera de soya, coco y parafinas sintéticas.' },
      { time: '45 mins', title: 'Módulo 2: Cálculo de Esencias Aromáticas', desc: 'Punto de vertido ideal y porcentaje óptimo de fragancia.' },
      { time: '60 mins', title: 'Módulo 3: Vertido y Curado', desc: 'Fijación de mechas de algodón y vertido en vaso ámbar y lata.' },
      { time: '45 mins', title: 'Módulo 4: Decora tu Vela & Merienda', desc: 'Decoración con lavanda seca y retiro de burbujas.' }
    ],
    materials: [
      'Cera de soya 100% natural',
      'Esencias puras cosméticas (Lavanda, Vainilla, Bergamota)',
      '1 Vaso de vidrio ámbar + 1 lata decorativa',
      'Mechas de algodón ecológico no blanqueado',
      'Manual de fórmulas impreso y merienda'
    ],
    instructor: {
      name: 'Maria',
      role: 'Instructora en Cerería Botánica',
      bio: 'Experta en cerería vegetal y formulaciones de aromas naturales.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    dates: [
      'Miércoles: 9:00 AM - 1:00 PM / 2:00 PM - 5:00 PM',
      'Viernes: 2:00 PM - 5:00 PM',
      'Sábados: 9:00 AM - 1:00 PM'
    ],
    whatsappMsg: '¡Hola Maria! Quisiera reservar un cupo para el Curso Básico de Velas.'
  },
  'velas-medio': {
    id: 'velas-medio',
    title: 'Curso Medio de Velas Artesanales',
    subtitle: 'Crea velas en moldes de silicona, incrustaciones de flores botánicas y efectos de color.',
    badge: 'Nivel Intermedio',
    price: '₡29.500',
    currency: 'CRC por persona (Todo incluido)',
    duration: '3 horas 30 minutos',
    location: 'Turrialba, Urbanización Jorge Debravo',
    image: 'https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?auto=format&fit=crop&w=1000&q=80',
    description: `Diseñado para quienes desean ir más allá de los envases. Aprenderás a usar ceras de soya de mayor dureza para desmolde limpio de figuras geométricas, cuarzos y flores encapsuladas.`,
    syllabus: [
      { time: '30 mins', title: 'Módulo 1: Ceras de Alto Punto de Fusión', desc: 'Formulación para velas rígidas sin contenedor.' },
      { time: '60 mins', title: 'Módulo 2: Uso de Moldes de Silicona', desc: 'Técnica de vertido, aireación y desmolde impecable.' },
      { time: '60 mins', title: 'Módulo 3: Encapsulado Botánico', desc: 'Incrustaciones de flores prensadas y cuarzos energéticos.' },
      { time: '30 mins', title: 'Módulo 4: Acabado y Merienda', desc: 'Limpieza de imperfecciones con pistola de calor y café.' }
    ],
    materials: [
      'Ceras de soya duras para molde',
      'Uso de moldes de silicona variados',
      'Flores deshidratadas, musgo y cuarzos decorativos',
      'Pigmentos orgánicos liposolubles',
      '3 Velas esculturales terminadas para llevarte'
    ],
    instructor: {
      name: 'Maria',
      role: 'Instructora en Cerería Botánica',
      bio: 'Especialista en velas esculturales de diseño.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    dates: [
      'Miércoles: 9:00 AM - 1:00 PM / 2:00 PM - 5:00 PM',
      'Viernes: 2:00 PM - 5:00 PM',
      'Sábados: 9:00 AM - 1:00 PM'
    ],
    whatsappMsg: '¡Hola Maria! Quisiera información para el Curso Medio de Velas.'
  },
  'velas-avanzado': {
    id: 'velas-avanzado',
    title: 'Curso Avanzado de Velas Artesanales',
    subtitle: 'Formulación profesional de masajes, mechas de madera, velas de gel y proyectos para negocio.',
    badge: 'Profesional / Emprendedor',
    price: '₡38.000',
    currency: 'CRC por persona (Todo incluido)',
    duration: '4 horas',
    location: 'Turrialba, Urbanización Jorge Debravo',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=80',
    description: `El programa más completo para quienes aspiran a vender sus creaciones. Dominarás velas terapéuticas para cuerpo con manteca de karité, mechas crepitantes de cedro, cera de gel cristalina y estructura de costos.`,
    syllabus: [
      { time: '60 mins', title: 'Módulo 1: Velas Terapéuticas de Masaje', desc: 'Formulación cosmetológica con mantecas vegetales y vitamina E.' },
      { time: '60 mins', title: 'Módulo 2: Mechas de Madera de Cedro', desc: 'Análisis de sonido crepitante, grosor de madera y quemado parejo.' },
      { time: '60 mins', title: 'Módulo 3: Velas de Gel Cristalino', desc: 'Transparencia total, burbujas decorativas y encapsulado subacuático.' },
      { time: '60 mins', title: 'Módulo 4: Costeo, Marcas y Merienda', desc: 'Estructura de precios, permisos, etiquetas y asesoría de negocio.' }
    ],
    materials: [
      'Mantecas de karité, coco y cera de soya de masaje',
      'Mechas de madera de cedro importada con base metálica',
      'Cera de gel cristalina transparente',
      'Frascos de cerámica y cristal borosilicato',
      'Plantilla Excel de costeo + Guía de proveedores'
    ],
    instructor: {
      name: 'Maria',
      role: 'Instructora & Asesora',
      bio: 'Asesora a alumnas para lanzar con éxito su propia marca de velas artesanales.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    dates: [
      'Miércoles: 9:00 AM - 1:00 PM / 2:00 PM - 5:00 PM',
      'Viernes: 2:00 PM - 5:00 PM',
      'Sábados: 9:00 AM - 1:00 PM'
    ],
    whatsappMsg: '¡Hola Maria! Quisiera matricularme en el Curso Avanzado de Velas.'
  }
};

export default function CourseDetailPage({ courseId, onNavigateHome, onNavigateCatalog, onNavigatePieces }) {
  const course = coursesData[courseId] || coursesData['velas-basico'];
  const whatsappUrl = `https://wa.me/50660367249?text=${encodeURIComponent(course.whatsappMsg)}`;

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
              Cursos
            </button>
            {onNavigatePieces && (
              <>
                <span className="text-[#8c7a6b] text-xs">/</span>
                <button
                  onClick={onNavigatePieces}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8c7a6b] hover:text-[#3d2c29] transition-colors"
                >
                  Piezas
                </button>
              </>
            )}
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

            <div className="text-sm text-[#5c4a43] leading-relaxed pt-2 space-y-4">
              {course.description.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
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
