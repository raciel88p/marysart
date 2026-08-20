import React from 'react';
import { X, FileText, ShieldCheck, RefreshCw, Info } from 'lucide-react';

export default function StaticPagesModal({ pageType, onClose }) {
  if (!pageType) return null;

  const getPageContent = () => {
    switch (pageType) {
      case 'terminos':
        return {
          title: 'Términos y Condiciones',
          icon: <FileText className="w-6 h-6 text-[#c87563]" />,
          content: (
            <div className="space-y-4 text-sm text-[#5c4a43] leading-relaxed">
              <p>
                Bienvenida/o a <strong>Resina Art & Mary</strong>. Al inscribirte o adquirir un cupo para nuestros talleres presenciales o virtuales de velas artesanales y pintura, aceptas los siguientes términos y condiciones:
              </p>
              <h4 className="font-serif font-bold text-[#3d2c29] text-base">1. Inscripciones y Reservas</h4>
              <p>
                Los cupos para cada taller son limitados para garantizar una atención personalizada. La reserva queda confirmada únicamente tras el envío del comprobante de pago vía SINPE Móvil o transferencia bancaria.
              </p>
              <h4 className="font-serif font-bold text-[#3d2c29] text-base">2. Uso de Insumos y Seguridad</h4>
              <p>
                Todos los insumos utilizados (cera de soya, aceites esenciales, mechas, pigmentos y pinturas) cumplen con normativas de seguridad e higiene. Resina Art & Mary provee delantales y equipo de protección adecuado.
              </p>
              <h4 className="font-serif font-bold text-[#3d2c29] text-base">3. Propiedad Intelectual</h4>
              <p>
                El material didáctico, guías de trabajo impresas/digitales y diseños de fórmulas entregadas son de uso personal y exclusivo para el participante.
              </p>
            </div>
          )
        };
      case 'privacidad':
        return {
          title: 'Política de Privacidad',
          icon: <ShieldCheck className="w-6 h-6 text-[#c87563]" />,
          content: (
            <div className="space-y-4 text-sm text-[#5c4a43] leading-relaxed">
              <p>
                En <strong>Resina Art & Mary</strong> respetamos tu privacidad y nos comprometemos a proteger tus datos personales.
              </p>
              <h4 className="font-serif font-bold text-[#3d2c29] text-base">1. Datos Recopilados</h4>
              <p>
                Solicitamos únicamente datos necesarios como tu nombre, número de teléfono (WhatsApp) y correo electrónico para la coordinación de fechas, envío de comprobantes e información del taller.
              </p>
              <h4 className="font-serif font-bold text-[#3d2c29] text-base">2. Uso de Fotografías</h4>
              <p>
                Durante los talleres se realizan toma de fotografías y breves videos para redes sociales. Si prefieres no aparecer en el contenido multimedia, puedes indicarlo al inicio del evento.
              </p>
              <h4 className="font-serif font-bold text-[#3d2c29] text-base">3. Protección de Datos</h4>
              <p>
                Tus datos no serán vendidos, alquilados ni compartidos con terceros bajo ninguna circunstancia.
              </p>
            </div>
          )
        };
      case 'reembolsos':
        return {
          title: 'Política de Reembolso y Reprogramación',
          icon: <RefreshCw className="w-6 h-6 text-[#c87563]" />,
          content: (
            <div className="space-y-4 text-sm text-[#5c4a43] leading-relaxed">
              <p>
                Entendemos que pueden surgir imprevistos. Para ofrecer la mejor experiencia posible, aplicamos las siguientes políticas:
              </p>
              <h4 className="font-serif font-bold text-[#3d2c29] text-base">1. Reprogramaciones Gratis</h4>
              <p>
                Si notificas tu inasistencia con un mínimo de <strong>15 días de anticipación</strong> a la fecha de tu taller, podrás reprogramar tu participación para cualquier fecha futura sin ningún costo adicional.
              </p>
              <h4 className="font-serif font-bold text-[#3d2c29] text-base">2. Transferencia de Cupo</h4>
              <p>
                Si no puedes asistir y el aviso es menor a 15 días, puedes transferir o regalar tu cupo a una amiga, familiar o persona de tu elección informándonos previamente.
              </p>
              <h4 className="font-serif font-bold text-[#3d2c29] text-base">3. Reembolsos Monetarios</h4>
              <p>
                Debido a la compra previa de insumos frescos e individuales para cada participante, las reservas no son reembolsables en dinero en efectivo, pero siempre contarán con la flexibilidad de reprogramación según los plazos establecidos.
              </p>
            </div>
          )
        };
      case 'nosotras':
        return {
          title: 'Quienes Somos - Resina Art & Mary',
          icon: <Info className="w-6 h-6 text-[#c87563]" />,
          content: (
            <div className="space-y-4 text-sm text-[#5c4a43] leading-relaxed">
              <p>
                <strong>Resina Art & Mary</strong> nació del amor por la creatividad, los aromas botánicos y la convicción de que todos necesitamos espacios para pausar en medio de la rutina diaria.
              </p>
              <p>
                En Costa Rica no tenemos estaciones marcadas, pero creemos firmemente en crear nuestros propios rituales de bienestar. Nuestros talleres de velas artesanales de cera de soya y pintura en lienzo son experiencias diseñadas para estimular tus sentidos, elevar tu autoestima y regalarte momentos de paz.
              </p>
              <p>
                Te esperamos con los brazos abiertos en nuestro taller en Concepción de Tres Ríos y San José para crear juntos momentos llenos de luz, color y buenas intenciones.
              </p>
            </div>
          )
        };
      default:
        return null;
    }
  };

  const page = getPageContent();
  if (!page) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#faf7f5] rounded-3xl border border-[#e8ded5] max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-5 bg-white border-b border-[#e8ded5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f2dfd8] flex items-center justify-center">
              {page.icon}
            </div>
            <h3 className="font-serif text-xl font-bold text-[#3d2c29]">
              {page.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#8c7a6b] hover:text-[#3d2c29] hover:bg-[#f2dfd8] rounded-full transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
          {page.content}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white border-t border-[#e8ded5] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#3d2c29] hover:bg-[#2a1e1c] text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
