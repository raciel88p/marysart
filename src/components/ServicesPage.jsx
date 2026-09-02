import React from 'react';
import { ArrowLeft, Sparkles, HeartHandshake, ShieldCheck, Palette, MessageCircle, CheckCircle, Package, ArrowRight } from 'lucide-react';

export default function ServicesPage({ onNavigateHome, onNavigateCatalog, onNavigatePieces }) {
  const sacraMessage = encodeURIComponent(
    "¡Hola Resina Art & Mary! Deseo consultar sobre el servicio de Restauración de Imágenes Sacras y Religiosas."
  );
  const sacraWhatsappUrl = `https://wa.me/50660367249?text=${sacraMessage}`;

  const resinaMessage = encodeURIComponent(
    "¡Hola Resina Art & Mary! Me interesa cotizar un servicio de Arte en Resina Personalizado a mi gusto."
  );
  const resinaWhatsappUrl = `https://wa.me/50660367249?text=${resinaMessage}`;

  return (
    <div className="bg-[#faf7f5] min-h-screen pb-20">

      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-[#3d2c29] via-[#4a3531] to-[#2a1d1a] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c87563]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#e8ded5] mb-6">
            <button
              onClick={onNavigateHome}
              className="hover:text-white transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al Inicio</span>
            </button>
            <span>/</span>
            <span className="text-[#e8a598] font-semibold">Servicios Especializados</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#f2dfd8] text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/10">
              <Sparkles className="w-4 h-4 text-[#e8a598]" />
              <span>Trabajos de Taller & Encargos Especiales</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              Servicios de Arte Personalizado y Restauración
            </h1>
            <p className="text-[#d8c8bf] text-base sm:text-lg font-light leading-relaxed">
              Damos nueva vida a tus piezas sacras familiares y creamos obras de arte exclusivas en resina personalizadas según tu visión, colores y acabado deseado.
            </p>
          </div>

        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-16">

        {/* Service 1: Restauración de Imágenes Sacras */}
        <section id="restauracion-sacra" className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-[#ebdcd7] overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2dfd8] text-[#8c483b] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Restauración Especializada</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-[#3d2c29] font-bold leading-snug">
                Restauración de Imágenes Sacras y Religiosas
              </h2>

              <p className="text-[#6b5852] text-sm sm:text-base leading-relaxed">
                Conservamos y restauramos el valor espiritual y sentimental de tus santos, vírgenes, pesebres y piezas de culto. Tratamos cada figura con sumo respeto, delicadeza y rigor técnico para devolverle su esplendor original sin perder su devoción histórica.
              </p>

              {/* Technical Features Checklist */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#8c483b]">Proceso y Técnicas de Restauración:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4a3e3d]">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#c87563] shrink-0 mt-0.5" />
                    <span>Diagnóstico previo e inspección de daños</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#c87563] shrink-0 mt-0.5" />
                    <span>Resane de grietas, fisuras y partes faltantes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#c87563] shrink-0 mt-0.5" />
                    <span>Policromía artesanal y reintegración cromática</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#c87563] shrink-0 mt-0.5" />
                    <span>Aplicación de pan de oro, plata y pátinas finas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#c87563] shrink-0 mt-0.5" />
                    <span>Consolidación estructural en yeso, madera y resina</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#c87563] shrink-0 mt-0.5" />
                    <span>Capas protectoras de conservación de larga duración</span>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={sacraWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Cotizar Restauración por WhatsApp</span>
                </a>
                <span className="text-xs text-[#8c7a6b] text-center sm:text-left">
                  📍 Atención en Turrialba y San Carlos con opción de recepción de piezas.
                </span>
              </div>
            </div>

            {/* Visual Callout Box */}
            <div className="lg:col-span-5 bg-[#f7eeea] p-8 rounded-3xl border border-[#ebdcd7] space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#c87563] text-white flex items-center justify-center shadow-md">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#3d2c29]">
                  ¿Tienes una imagen dañada o despintada?
                </h3>
                <p className="text-xs sm:text-sm text-[#6b5852] leading-relaxed">
                  Envíanos fotografías claras de la figura, sus medidas aproximadas y el tipo de daño por WhatsApp. Te daremos un diagnóstico sin compromiso.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#e8ded5] text-xs text-[#8c483b] font-medium italic">
                "Trabajamos con devoción y profesionalismo para preservar las tradiciones de tu hogar."
              </div>
            </div>

          </div>
        </section>

        {/* Service 2: Servicio de Arte en Resina Personalizado */}
        <section id="arte-resina-personalizado" className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-[#ebdcd7] overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Visual Card */}
            <div className="lg:col-span-5 bg-[#faf2ef] p-8 rounded-3xl border border-[#ebdcd7] space-y-6 order-2 lg:order-1">
              <div className="w-12 h-12 rounded-2xl bg-[#3d2c29] text-white flex items-center justify-center shadow-md">
                <Palette className="w-6 h-6 text-[#e8a598]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3d2c29]">
                Obra Única Creada a Tu Gusto
              </h3>
              <p className="text-xs sm:text-sm text-[#6b5852] leading-relaxed">
                Tú eliges el motivo, las tonalidades, los dorados o acabados en envejecido. Nos encargamos de plasmar cada detalle artesanal con pigmentos y selladores de máxima calidad.
              </p>

              <div className="space-y-2 pt-2 border-t border-[#ebdcd7] text-xs text-[#5c4a43]">
                <div className="font-bold uppercase tracking-wider text-[#8c483b]">Ideal para:</div>
                <ul className="space-y-1 list-disc list-inside text-[#6b5852]">
                  <li>Regalos especiales y recuerdos personalizados</li>
                  <li>Decoración exclusiva para salas, altares y oficinas</li>
                  <li>Recuerdos para eventos y celebraciones</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2dfd8] text-[#8c483b] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Encargos Exclusivos</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-[#3d2c29] font-bold leading-snug">
                Servicio de Arte en Resina Personalizado
              </h2>

              <p className="text-[#6b5852] text-sm sm:text-base leading-relaxed">
                ¿Buscas una pieza única que armonice perfectamente con la paleta de colores de tu hogar o un regalo lleno de significado? Confeccionamos y pintamos a mano figuras en resina con las técnicas decorativas más elegantes de Costa Rica.
              </p>

              {/* Features List */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#8c483b]">Opciones de Personalización:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4a3e3d]">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#c87563] shrink-0 mt-0.5" />
                    <span>Selección de colores personalizados y combinaciones</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#c87563] shrink-0 mt-0.5" />
                    <span>Acabados en metálicos, hojilla de oro, pátina o brillante</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#c87563] shrink-0 mt-0.5" />
                    <span>Variedad de temas: Sacros, Africanas, Hadas, Hogar y Navidad</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#c87563] shrink-0 mt-0.5" />
                    <span>Empaque especial y entrega personalizada</span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={resinaWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Encargar Pieza Personalizada</span>
                </a>
                <button
                  onClick={onNavigatePieces}
                  className="inline-flex items-center justify-center gap-1.5 bg-[#f2dfd8] hover:bg-[#ebd0c7] text-[#8c483b] px-5 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  <Package className="w-4 h-4" />
                  <span>Ver Catálogo de Diseños</span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Section 3: Navigation Shortcut to Courses & Workshops */}
        <section className="bg-gradient-to-br from-[#3d2c29] to-[#2a1d1a] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="px-3 py-1 bg-[#c87563] text-white text-xs font-bold uppercase tracking-widest rounded-full">
              Aprende a Crear Tú Misma
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold">
              ¿Prefieres Aprender las Técnicas de Pintura y Velas?
            </h2>
            <p className="text-[#d8c8bf] text-sm sm:text-base font-light">
              Ofrecemos clases presenciales semanales con todos los materiales incluidos y grupos reducidos para guiarte en cada paso.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onNavigateCatalog}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c87563] hover:bg-[#b56250] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-md cursor-pointer"
            >
              <span>Explorar Cursos Presenciales</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onNavigatePieces}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all border border-white/20 cursor-pointer"
            >
              <span>Ver Piezas en Bizcocho</span>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
