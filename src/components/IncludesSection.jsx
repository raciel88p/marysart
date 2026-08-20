import React from 'react';
import { PackageCheck, Coffee, BookOpen, Users, Smile, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function IncludesSection() {
  const features = [
    {
      icon: <PackageCheck className="w-7 h-7 text-[#c87563]" />,
      title: 'Materiales 100% Incluidos',
      description: 'No necesitas traer absolutamente nada extra. Proveemos cera de soya natural, mechas de algodón, pigmentos, aceites esenciales de grado terapéutico, lienzos, pinceles y delantales.'
    },
    {
      icon: <Coffee className="w-7 h-7 text-[#c87563]" />,
      title: 'Delicious Merienda & Bebidas',
      description: 'Disfruta de una pausa dulce con café gourmet recién colado, selección de tés, jugos y bocadillos artesanales para endulzar tu jornada creativa.'
    },
    {
      icon: <BookOpen className="w-7 h-7 text-[#c87563]" />,
      title: 'Guía Digital e Impresa Paso a Paso',
      description: 'Te entregamos un manual ilustrado con las temperaturas de vertido, porcentajes de fragancia y consejos técnicos para que puedas seguir practicando en casa.'
    },
    {
      icon: <Users className="w-7 h-7 text-[#c87563]" />,
      title: 'Atención 100% Personalizada',
      description: 'Trabajamos en grupos reducidos para acompañarte en cada paso, resolver tus dudas en el momento y garantizar que te lleves un producto impecable.'
    },
    {
      icon: <Smile className="w-7 h-7 text-[#c87563]" />,
      title: 'Espacio de Bienestar & Desconexión',
      description: 'Música suave, aromaterapia ambiental y un ambiente libre de juicios diseñado para soltar el estrés, reír y conectar con personas afines.'
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#c87563]" />,
      title: 'Garantía de Reprogramación',
      description: 'Entendemos que los planes cambian. Si no puedes asistir y nos avisas con 15 días de anticipación, reprogramamos tu taller sin cargos adicionales.'
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-[#f7eeea] relative overflow-hidden">
      {/* Decorative SVG Patterns */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-[#e8a598]/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-[#d4a373]/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2dfd8] text-[#8c483b] text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4" />
            <span>Cuidamos Cada Detalle</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3d2c29] font-bold">
            ¿Qué Hace Especial la Experiencia Resina Art & Mary?
          </h2>
          <p className="text-[#6b5852] text-lg font-light">
            Más que un curso tradicional, creamos un verdadero ritual para consentirte, recargar energías y descubrir tu capacidad creadora.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-[#e8ded5] shadow-sm hover:shadow-md transition-all space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#faf7f5] border border-[#e8ded5] flex items-center justify-center shadow-inner">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3d2c29]">
                {feature.title}
              </h3>
              <p className="text-sm text-[#6b5852] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Callout */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-white/60 border border-[#e8ded5] italic text-[#6b5852] text-sm">
          "Crear con las manos es una de las formas más efectivas y gratificantes de calmar la mente y reinterpretar el tiempo para uno mismo."
        </div>

      </div>
    </section>
  );
}
