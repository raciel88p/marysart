import React from 'react';
import { ArrowLeft, Clock, MapPin, CheckCircle2, Calendar, ShieldCheck, Heart, Sparkles, MessageCircle, User, Award, BookOpen } from 'lucide-react';

const COURSES_DATA = {
  'pintura-basico': {
    id: 'pintura-basico',
    title: 'Curso Básico de Pintura',
    subtitle: 'Aprende los fundamentos del pincel, teoría del color y mezcla de tonos acrílicos desde cero.',
    badge: 'Nivel Principiante',
    price: '₡25.000',
    currency: 'CRC por persona (Todo incluido)',
    duration: '3 horas',
    location: 'Sedes en San José (Tres Ríos), Turrialba (Sede CATIE/Centro) y San Carlos (Ciudad Quesada)',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1000&q=80',
    description: `El punto de partida ideal si nunca has agarrado un pincel. En este curso aprenderás la postura correcta, tipos de pincel, soltura de trazo, mezcla en paleta y aplicación de capas base sobre lienzo.`,
    syllabus: [
      { time: '30 mins', title: 'Módulo 1: Tipos de Pinceles y Lienzos', desc: 'Introducción a fibras sintéticas y cerda dura, preparación del lienzo y boceto.' },
      { time: '45 mins', title: 'Módulo 2: Círculo Cromático y Mezclas', desc: 'Creación de matices secundarios y terciarios a partir de colores primarios.' },
      { time: '60 mins', title: 'Módulo 3: Primeras Pinceladas y Bloques de Color', desc: 'Pintado del fondo y formas principales con técnica acrílica fluida.' },
      { time: '45 mins', title: 'Módulo 4: Cierre, Firma y Merienda', desc: 'Detalles finales, firma de autoría y espacio de relajación con bebidas calientes.' }
    ],
    materials: [
      'Lienzo 30x40cm sobre bastidor de madera',
      'Set de 12 acrílicos de alta concentración',
      'Set de 5 pinceles para nivel principiante',
      'Paleta de mezclas y delantal protector',
      'Merienda artesanal con café o té'
    ],
    instructor: {
      name: 'Mary Rodríguez',
      role: 'Fundadora & Instructora Principal',
      bio: 'Apasionada por enseñar a personas sin conocimientos previos a perder el miedo al lienzo.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    dates: [
      'Sábado 15 de Marzo - 9:00 AM a 12:00 PM',
      'Domingo 23 de Marzo - 2:00 PM a 5:00 PM'
    ],
    whatsappMsg: '¡Hola Mary! Quisiera reservar un cupo para el Curso Básico de Pintura.'
  },
  'pintura-medio': {
    id: 'pintura-medio',
    title: 'Curso Medio de Pintura',
    subtitle: 'Domina técnicas de luces, sombras y composición para dar profundidad a tus obras.',
    badge: 'Nivel Intermedio',
    price: '₡29.500',
    currency: 'CRC por persona (Todo incluido)',
    duration: '3 horas 30 minutos',
    location: 'Sedes en San José (Tres Ríos), Turrialba (Sede CATIE/Centro) y San Carlos (Ciudad Quesada)',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
    description: `Avanza en tu técnica estudiando la incidencia de la luz, reflejos, sombras proyectadas y contraste para dar volumen tridimensional a figuras y paisajes.`,
    syllabus: [
      { time: '30 mins', title: 'Módulo 1: Estudio de Puntos de Luz', desc: 'Análisis de claroscuro y valores tonales en la composición.' },
      { time: '60 mins', title: 'Módulo 2: Veladuras y Degradados', desc: 'Aplicación de transparencias acrílicas para efectos de atmósfera.' },
      { time: '60 mins', title: 'Módulo 3: Detallado y Volumen', desc: 'Uso de pinceles finos y perfilado de bordes suaves vs duros.' },
      { time: '60 mins', title: 'Módulo 4: Pinta y Vino & Convivencia', desc: 'Degustación de vino o té artesanal mientras se seca la obra.' }
    ],
    materials: [
      'Lienzo 30x40cm de grano fino',
      'Pinturas acrílicas profesionales',
      'Pinceles abanico, biselados y linners',
      'Copa de vino de bienvenida o refresco',
      'Tabla de aperitivos'
    ],
    instructor: {
      name: 'Mary Rodríguez',
      role: 'Fundadora & Artista de Resina Art & Mary',
      bio: 'Especialista en guiar a los estudiantes a encontrar su propio estilo compositivo.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    dates: [
      'Sábado 22 de Marzo - 2:00 PM a 5:30 PM',
      'Sábado 12 de Abril - 2:00 PM a 5:30 PM'
    ],
    whatsappMsg: '¡Hola Mary! Quisiera reservar un cupo para el Curso Medio de Pintura.'
  },
  'pintura-avanzado': {
    id: 'pintura-avanzado',
    title: 'Curso Avanzado de Pintura',
    subtitle: 'Explora técnicas mixtas, texturas tridimensionales con espátula y acabado profesional.',
    badge: 'Nivel Avanzado',
    price: '₡35.000',
    currency: 'CRC por persona (Todo incluido)',
    duration: '4 horas',
    location: 'Sedes en San José (Tres Ríos), Turrialba (Sede CATIE/Centro) y San Carlos (Ciudad Quesada)',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80',
    description: `Una inmersión profunda para artistas que desean incorporar volúmenes con pastas impasto, espátulas metálicas de precisión y barnices protectores de alta durabilidad.`,
    syllabus: [
      { time: '45 mins', title: 'Módulo 1: Aplicación de Pastas de Relieve', desc: 'Modelado con gesso denso sobre lienzo de gran formato.' },
      { time: '75 mins', title: 'Módulo 2: Carga y Trazo con Espátula', desc: 'Creación de pétalos, texturas orgánicas y capas gruesas de acrílico.' },
      { time: '60 mins', title: 'Módulo 3: Pátinas de Sombra y Brillos', desc: 'Incorporación de pigmentos metalizados y toques dorados.' },
      { time: '60 mins', title: 'Módulo 4: Barnizado y Degustación Gourmet', desc: 'Sellado protector mate/brillante y tiempo de degustación.' }
    ],
    materials: [
      'Lienzo de gran formato 40x50cm',
      'Pasta de relieve impasto y gesso denso',
      'Set de 3 espátulas metálicas de artista',
      'Barniz acrílico de protección UV',
      'Copa de vino premium y merienda gourmet'
    ],
    instructor: {
      name: 'Mary Rodríguez',
      role: 'Fundadora & Artista Plastica',
      bio: 'Acompaña a creadores avanzados a potenciar obras con impacto tridimensional.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    dates: [
      'Sábado 29 de Marzo - 1:00 PM a 5:00 PM',
      'Sábado 26 de Abril - 1:00 PM a 5:00 PM'
    ],
    whatsappMsg: '¡Hola Mary! Quisiera reservar mi cupo para el Curso Avanzado de Pintura.'
  },
  'patinas': {
    id: 'patinas',
    title: 'Curso de Pátinas & Acabados Artísticos',
    subtitle: 'Aprende a transformar figuras de yeso y cerámica con técnicas metálicas envejecidas.',
    badge: 'Especialidad',
    price: '₡28.000',
    currency: 'CRC por persona (Todo incluido)',
    duration: '3 horas 30 minutos',
    location: 'Sedes en San José (Tres Ríos), Turrialba (Sede CATIE/Centro) y San Carlos (Ciudad Quesada)',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80',
    description: `Aprende el arte clásico de las pátinas decorativas sobre yeso cerámico. Dominarás el envejecido con betún de Judea, aplicación de ceras de cobre, bronce y oro, así como el efecto verde óxido.`,
    syllabus: [
      { time: '45 mins', title: 'Módulo 1: Sellado de Yeso Cerámico', desc: 'Aplicación de imprimantes impermeabilizantes para fijación de pigmento.' },
      { time: '60 mins', title: 'Módulo 2: Pátinas Metálicas a la Cera', desc: 'Aplicación de ceras con los dedos y trapo suave para relucir bordes.' },
      { time: '60 mins', title: 'Módulo 3: Envejecidos y Verde Óxido', desc: 'Técnica de lavado con betún y acrílico turquesa para óxido real.' },
      { time: '45 mins', title: 'Módulo 4: Sellado Final y Merienda', desc: 'Aplicación de laca mate de fijación y receso ameno.' }
    ],
    materials: [
      '2 Figuras esculturales de yeso cerámico denso',
      'Set de ceras metálicas (oro, bronce, cobre)',
      'Betún de Judea y pátina azul/verde turquesa',
      'Trapos de algodón, pinceles de estarcido y delantal',
      'Merienda completa y bebidas'
    ],
    instructor: {
      name: 'Mary Rodríguez',
      role: 'Especialista en Pátinas & Restauración',
      bio: 'Especialista en acabados de época y conservación de piezas en yeso y resina.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    dates: [
      'Domingo 16 de Marzo - 9:00 AM a 12:30 PM',
      'Sábado 5 de Abril - 2:00 PM a 5:30 PM'
    ],
    whatsappMsg: '¡Hola Mary! Deseo información e inscripción para el Curso de Pátinas.'
  },
  'velas-basico': {
    id: 'velas-basico',
    title: 'Curso Básico de Velas',
    subtitle: 'Iníciate en la cerería artesanal creando velas aromáticas de cera de soya en frasco.',
    badge: 'Más Popular',
    price: '₡25.000',
    currency: 'CRC por persona (Todo incluido)',
    duration: '3 horas',
    location: 'Sedes en San José (Tres Ríos), Turrialba (Sede CATIE/Centro) y San Carlos (Ciudad Quesada)',
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
      name: 'Mary Rodríguez',
      role: 'Crafter Principal en Velas Botánicas',
      bio: 'Ha enseñado la alquimia de la cera de soya a cientos de alumnas en todo Costa Rica.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    dates: [
      'Sábado 15 de Marzo - 9:00 AM a 12:00 PM',
      'Sábado 22 de Marzo - 9:00 AM a 12:00 PM'
    ],
    whatsappMsg: '¡Hola Mary! Quisiera reservar un cupo para el Curso Básico de Velas.'
  },
  'velas-medio': {
    id: 'velas-medio',
    title: 'Curso Medio de Velas',
    subtitle: 'Crea velas en moldes de silicona, incrustaciones de flores botánicas y efectos de color.',
    badge: 'Nivel Intermedio',
    price: '₡29.500',
    currency: 'CRC por persona (Todo incluido)',
    duration: '3 horas 30 minutos',
    location: 'Sedes en San José (Tres Ríos), Turrialba (Sede CATIE/Centro) y San Carlos (Ciudad Quesada)',
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
      name: 'Mary Rodríguez',
      role: 'Fundadora & Crafter Principal',
      bio: 'Especialista en estética escultural de velas para decoración de interiores.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    dates: [
      'Domingo 23 de Marzo - 2:00 PM a 5:30 PM',
      'Sábado 12 de Abril - 9:00 AM a 12:30 PM'
    ],
    whatsappMsg: '¡Hola Mary! Quisiera información para el Curso Medio de Velas.'
  },
  'velas-avanzado': {
    id: 'velas-avanzado',
    title: 'Curso Avanzado de Velas',
    subtitle: 'Formulación profesional de masajes, mechas de madera, velas de gel y proyectos para negocio.',
    badge: 'Profesional / Emprendedor',
    price: '₡38.000',
    currency: 'CRC por persona (Todo incluido)',
    duration: '4 horas',
    location: 'Sedes en San José (Tres Ríos), Turrialba (Sede CATIE/Centro) y San Carlos (Ciudad Quesada)',
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
      name: 'Mary Rodríguez',
      role: 'Fundadora & Asesora de Emprendimientos',
      bio: 'Ha asesorado a decenas de alumnas para lanzar con éxito su propia marca de velas en Costa Rica.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    dates: [
      'Sábado 29 de Marzo - 9:00 AM a 1:00 PM',
      'Sábado 26 de Abril - 9:00 AM a 1:00 PM'
    ],
    whatsappMsg: '¡Hola Mary! Quisiera matricularme en el Curso Avanzado de Velas.'
  }
};

export default function CourseDetailPage({ courseId, onNavigateHome, onNavigateCatalog, onNavigatePieces }) {
  const course = COURSES_DATA[courseId] || COURSES_DATA['velas-basico'];
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
