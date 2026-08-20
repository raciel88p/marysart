import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: '¿Necesito experiencia previa en elaboración de velas o pintura?',
      answer: '¡Para nada! Nuestros talleres están 100% diseñados para principiantes. La instructora te guiara paso a paso durante todo el proceso, desde la mezcla de insumos hasta los detalles finales.'
    },
    {
      question: '¿Qué incluye la inversión del taller?',
      answer: 'Incluye absolutamente todos los materiales (cera de soya, fragancias, moldes/recipientes, lienzo, pinturas acrílicas, delantal), guía impresa y digital, una deliciosa merienda con bebidas y te llevas tus creaciones listas a casa.'
    },
    {
      question: '¿Dónde están ubicados los talleres y cuál es el horario?',
      answer: 'Nuestras clases presenciales se imparten en Concepción de Tres Ríos y San José centro, Costa Rica. Impartimos talleres los sábados y domingos en horarios matutinos (9:00 am) y vespertinos (2:00 pm).'
    },
    {
      question: '¿Cómo reservo mi lugar y qué políticas de reprogramación tienen?',
      answer: 'Puedes reservar tu cupo con el 50% o la totalidad vía SINPE Móvil o transferencia bancaria coordinando por WhatsApp. Los cupos son limitados. Si notificas con 15 días de anticipación, puedes reprogramar tu fecha sin costo adicional.'
    },
    {
      question: '¿Organizan talleres privados para cumpleaños o eventos corporativos?',
      answer: '¡Sí! Es una de nuestras actividades más solicitadas. Organizamos eventos privados para grupos a partir de 6 personas, con la posibilidad de llevar el taller a tu domicilio o local privado.'
    },
    {
      question: '¿A partir de qué edad pueden asistir los participantes?',
      answer: 'El taller está diseñado para jóvenes y adultos a partir de los 10 años en adelante. Los menores deben asistir acompañados de un adulto responsable.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2dfd8] text-[#8c483b] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Resuelve tus Dudas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3d2c29] font-bold">
            Preguntas Frecuentes
          </h2>
          <p className="text-[#6b5852] text-lg font-light">
            Aquí encontrarás respuesta a las preguntas habituales antes de asistir a nuestros cursos.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#e8ded5] rounded-2xl overflow-hidden bg-[#faf7f5] transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold text-[#3d2c29] hover:text-[#c87563] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#c87563] shrink-0 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#6b5852] leading-relaxed border-t border-[#e8ded5]/60 pt-4 bg-white/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help CTA */}
        <div className="mt-12 text-center p-8 bg-[#f7eeea] rounded-3xl border border-[#e8ded5] space-y-4">
          <h3 className="font-serif text-xl font-bold text-[#3d2c29]">
            ¿Tienes alguna otra consulta personalizada?
          </h3>
          <p className="text-sm text-[#6b5852]">
            Estamos disponibles en WhatsApp para ayudarte con cualquier detalle adicional sobre fechas o reservas.
          </p>
          <a
            href="https://wa.me/50688390436?text=Hola%20Marys%20Art%2C%20tengo%20una%20pregunta%20sobre%20los%20talleres."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-sm py-3 px-6 rounded-full shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Preguntar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
