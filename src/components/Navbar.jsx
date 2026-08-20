import React, { useState } from 'react';
import { Sparkles, Menu, X, MessageCircle, Grid, Home } from 'lucide-react';

export default function Navbar({ currentView, onNavigateHome, onNavigateCatalog }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "¡Hola Resina Art & Mary! Deseo recibir información sobre los cursos de Velas Artesanales y Pintura."
  );
  const whatsappUrl = `https://wa.me/50688390436?text=${whatsappMessage}`;

  return (
    <header className="sticky top-0 z-50 bg-[#faf7f5]/90 backdrop-blur-md border-b border-[#e8ded5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-11 h-11 rounded-full bg-[#e8a598] text-white flex items-center justify-center font-serif text-xl font-bold shadow-md group-hover:bg-[#d98a7b] transition-colors">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#3d2c29] group-hover:text-[#e8a598] transition-colors">
                Resina Art & Mary
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#8c7a6b] font-medium">
                Velas & Arte Botánico
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5c4a43]">
            <button
              onClick={onNavigateHome}
              className={`hover:text-[#e8a598] transition-colors ${
                currentView?.type === 'home' ? 'text-[#c87563] font-bold' : ''
              }`}
            >
              Inicio
            </button>
            <button
              onClick={onNavigateCatalog}
              className={`inline-flex items-center gap-1 hover:text-[#e8a598] transition-colors ${
                currentView?.type === 'catalog' ? 'text-[#c87563] font-bold' : ''
              }`}
            >
              <Grid className="w-4 h-4 text-[#c87563]" />
              <span>Ver Catálogo Completo</span>
            </button>
            <a href="#cursos" onClick={currentView?.type !== 'home' ? onNavigateHome : undefined} className="hover:text-[#e8a598] transition-colors">
              Talleres
            </a>
            <a href="#galeria" onClick={currentView?.type !== 'home' ? onNavigateHome : undefined} className="hover:text-[#e8a598] transition-colors">
              Galería
            </a>
            <a href="#testimonios" onClick={currentView?.type !== 'home' ? onNavigateHome : undefined} className="hover:text-[#e8a598] transition-colors">
              Testimonios
            </a>
            <a href="#faqs" onClick={currentView?.type !== 'home' ? onNavigateHome : undefined} className="hover:text-[#e8a598] transition-colors">
              FAQs
            </a>
          </nav>

          {/* WhatsApp CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Reservar Cupo</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#3d2c29] p-2 rounded-lg hover:bg-[#eedcd5] transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf7f5] border-b border-[#e8ded5] px-4 pt-2 pb-6 space-y-3">
          <button
            onClick={() => { onNavigateHome(); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-[#3d2c29] font-medium hover:text-[#e8a598]"
          >
            Inicio
          </button>
          <button
            onClick={() => { onNavigateCatalog(); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-[#c87563] font-bold"
          >
            Ver Catálogo de Cursos
          </button>
          <a
            href="#cursos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#3d2c29] font-medium hover:text-[#e8a598]"
          >
            Talleres
          </a>
          <a
            href="#galeria"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#3d2c29] font-medium hover:text-[#e8a598]"
          >
            Galería
          </a>
          <a
            href="#testimonios"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#3d2c29] font-medium hover:text-[#e8a598]"
          >
            Testimonios
          </a>
          <a
            href="#faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#3d2c29] font-medium hover:text-[#e8a598]"
          >
            FAQs
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-medium shadow-md mt-4"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Reservar por WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
