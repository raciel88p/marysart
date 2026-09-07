import React from 'react';
import { ArrowLeft, ShieldCheck, Sparkles, MessageCircle, CheckCircle, Package, ArrowRight, HeartHandshake, Palette, HelpCircle } from 'lucide-react';

export const servicesData = {
  'restauracion-sacra': {
    id: 'restauracion-sacra',
    tag: 'Restauración Especializada',
    title: 'Restauración de Imágenes Sacras y Religiosas',
    subtitle: 'Devolvemos la belleza, el esplendor y la dignidad a tus figuras devocionales y familiares',
    description: 'En Resina Art & Mary tratamos cada figura religiosa con sumo respeto, delicadeza y técnica profesional. Ya sea un santo de familia heredado, un pesebre con historia o una escultura de templo en yeso, resina o madera, aplicamos procesos de restauración conservadora para devolverle su colorido original sin alterar su carácter devocional.',
    badgeIcon: <ShieldCheck className="w-5 h-5 text-[#c87563]" />,
    bannerImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1200',
    whatsappMessage: '¡Hola Resina Art & Mary! Deseo solicitar una cotización para restaurar una imagen sacra/religiosa.',
    processSteps: [
      {
        title: '1. Diagnóstico e Inspección Técnica',
        desc: 'Evaluamos el estado de conservación, grietas, faltantes de masa, capas de pintura posteriores y tipo de soporte (yeso, resina o madera).'
      },
      {
        title: '2. Limpieza y Consolidación de Estructura',
        desc: 'Removemos suciedad acumulada y estabilizamos la estructura para evitar desprendimientos futuros.'
      },
      {
        title: '3. Resane y Reconstrucción Escultórica',
        desc: 'Modelamos artesanalmente los dedos, rostros o atributos faltantes utilizando pastas y resinas de conservación.'
      },
      {
        title: '4. Reintegración Cromática y Policromía',
        desc: 'Aplicamos la paleta de color correspondiente con pigmentos finos y técnicas tradicionales de pincel en frío y sombras.'
      },
      {
        title: '5. Aplicación de Pan de Oro y Acabados Finos',
        desc: 'Renovamos aureolas, mantos y bordes con dorados metálicos, hojilla de oro y pátinas envejecidas según el estilo de la obra.'
      },
      {
        title: '6. Barniz Protector de Larga Duración',
        desc: 'Sellamos la pieza con capas protectoras mate o satinadas para protegerla contra el polvo y la humedad.'
      }
    ],
    materialsHandled: [
      'Imágenes en Yeso Tradicional',
      'Figuras en Resina y Fibra de Vidrio',
      'Esculturas Religiosas en Madera',
      'Pasos de Pesebre y Naims',
      'Aureolas, Coronas y Atributos Metálicos'
    ],
    faqs: [
      {
        q: '¿Cómo obtengo un presupuesto de restauración?',
        a: 'Envíanos fotografías claras por WhatsApp showing la figura completa y los detalles con grietas o faltantes, junto con la altura en centímetros. Te brindaremos un estimado inicial.'
      },
      {
        q: '¿Dónde se reciben las piezas?',
        a: 'Contamos con puntos de recepción en Turrialba y San Carlos, Costa Rica, previa coordinación.'
      },
      {
        q: '¿Cuánto tiempo tarda la restauración?',
        a: 'El tiempo promedio varía entre 1 y 3 semanas según la complejidad y el secado de las capas de pintura y resane.'
      }
    ]
  },
  'arte-resina-personalizado': {
    id: 'arte-resina-personalizado',
    tag: 'Encargos Exclusivos',
    title: 'Servicio de Arte en Resina Personalizado',
    subtitle: 'Piezas decorativas confeccionadas a mano con la paleta de colores y acabados de tu preferencia',
    description: 'Creamos obras de arte únicas diseñadas exclusivamente para tu hogar, oficina o evento especial. Elige el modelo de nuestro catálogo (figuras sacras, africanas, duendes, animales, elementos de hogar o navideños) y nosotros la pintamos a mano ajustándonos exactamente a tu estilo de decoración.',
    badgeIcon: <Palette className="w-5 h-5 text-[#c87563]" />,
    bannerImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=1200',
    whatsappMessage: '¡Hola Resina Art & Mary! Me interesa encargar una pieza de arte en resina personalizada a mi gusto.',
    processSteps: [
      {
        title: '1. Selección del Diseño y Figura',
        desc: 'Elige la pieza de nuestro catálogo digital o solicita un modelo especial de tu preferencia.'
      },
      {
        title: '2. Definición de Paleta de Colores y Estilo',
        desc: 'Coordinamos los tonos, metálicos (dorado, bronce, cobre, plata) y efectos (pátina envejecida, mate o brillo pulido).'
      },
      {
        title: '3. Preparación de la Pieza en Resina',
        desc: 'Inspeccionamos, pulimos y sellamos la figura para asegurar una adherencia perfecta de los pigmentos.'
      },
      {
        title: '4. Pintura Artística a Mano',
        desc: 'Nuestra instructora Maria aplica cuidadosamente pinceladas, degradados y luces para dar vida y dimensión a la pieza.'
      },
      {
        title: '5. Sellado Profesional y Acabado',
        desc: 'Protegemos la obra con barnices especiales de alta resistencia que aseguran la durabilidad del color.'
      },
      {
        title: '6. Empaque Especial y Entrega',
        desc: 'Preparamos la pieza con empaque de regalo y protección especial lista para lucir o entregar.'
      }
    ],
    materialsHandled: [
      'Piezas Sacras y Nacimientos Navideños',
      'Esculturas Africanas y Étnicas',
      'Duendes, Hadas y Fantasía',
      'Animales Decorativos y Naturaleza',
      'Piezas para Hogar y Regalos Corporativos'
    ],
    faqs: [
      {
        q: '¿Puedo enviar fotos de mi espacio para que me sugieran colores?',
        a: '¡Por supuesto! Nos encanta asesorarte para que la pieza combine armónicamente con tus paredes, muebles y cortinas.'
      },
      {
        q: '¿Hacen envíos a todo Costa Rica?',
        a: 'Sí, coordinamos entregas en Turrialba y San Carlos, así como envíos seguros por encomienda o Correos de Costa Rica.'
      },
      {
        q: '¿Tienen pedidos para eventos o recuerdos corporativos?',
        a: 'Ofrecemos precios especiales al por mayor para bodas, bautizos, recuerdos empresariales y regalos navideños.'
      }
    ]
  }
};

export default function ServiceDetailPage({ serviceId, onNavigateHome, onNavigateServices, onNavigatePieces, onNavigateCatalog }) {
  const service = servicesData[serviceId] || servicesData['restauracion-sacra'];
  const whatsappUrl = `https://wa.me/50660367249?text=${encodeURIComponent(service.whatsappMessage)}`;

  return (
    <div className="bg-[#faf7f5] min-h-screen pb-20">

      {/* Banner Top */}
      <div className="bg-gradient-to-r from-[#3d2c29] via-[#4a3531] to-[#2a1d1a] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c87563]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#e8ded5] mb-6 flex-wrap">
            <button
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Inicio
            </button>
            <span>/</span>
            <button
              onClick={onNavigateServices}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Servicios
            </button>
            <span>/</span>
            <span className="text-[#e8a598] font-semibold">{service.title}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#f2dfd8] text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/10">
              {service.badgeIcon}
              <span>{service.tag}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              {service.title}
            </h1>
            <p className="text-[#d8c8bf] text-base sm:text-lg font-light leading-relaxed">
              {service.subtitle}
            </p>
          </div>

        </div>
      </div>

      {/* Main Content Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-12">

        {/* Main Details & CTA Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-[#ebdcd7] space-y-8">

          {/* Description */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#3d2c29] font-bold">
              Descripción del Servicio
            </h2>
            <p className="text-[#6b5852] text-sm sm:text-base leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 border-t border-[#ebdcd7]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Consultar / Cotizar por WhatsApp (+506 6036-7249)</span>
            </a>
            <button
              onClick={onNavigateServices}
              className="inline-flex items-center justify-center gap-1.5 bg-[#f2dfd8] hover:bg-[#ebd0c7] text-[#8c483b] px-6 py-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Ver Todos los Servicios</span>
            </button>
          </div>

        </div>

        {/* Step-by-step process */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-md border border-[#ebdcd7] space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c87563]">
              Paso a Paso
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#3d2c29] font-bold">
              Proceso y Metodología de Trabajo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#faf7f5] p-6 rounded-2xl border border-[#ebdcd7] space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-[#3d2c29] text-base">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6b5852] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Materials & Scope Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          <div className="md:col-span-6 bg-white p-8 rounded-3xl border border-[#ebdcd7] shadow-sm space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#3d2c29] flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#c87563]" />
              <span>Tipos de Piezas y Materiales</span>
            </h3>
            <ul className="space-y-2 text-sm text-[#5c4a43]">
              {service.materialsHandled.map((mat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e8a598]" />
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-6 bg-[#f7eeea] p-8 rounded-3xl border border-[#ebdcd7] shadow-sm space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#3d2c29] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#c87563]" />
              <span>Preguntas Frecuentes</span>
            </h3>
            <div className="space-y-3">
              {service.faqs.map((faq, i) => (
                <div key={i} className="space-y-1">
                  <h4 className="text-xs font-bold text-[#8c483b]">{faq.q}</h4>
                  <p className="text-xs text-[#6b5852] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-br from-[#3d2c29] to-[#2a1d1a] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            ¿Tienes alguna consulta sobre tu pieza o idea de regalo?
          </h2>
          <p className="text-[#d8c8bf] text-sm sm:text-base font-light max-w-2xl mx-auto">
            Estamos disponibles por WhatsApp para resolver tus dudas, asesorarte con imágenes y brindarte atención personalizada en Costa Rica.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-md"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Hablar con la Instructora por WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
