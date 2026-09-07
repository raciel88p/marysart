import React, { useState } from 'react';
import { Sparkles, Menu, X, MessageCircle, Grid, Package, ShieldCheck, ChevronDown } from 'lucide-react';

export default function Navbar({
  currentView,
  onNavigateHome,
  onNavigateCatalog,
  onNavigatePieces,
  onNavigateServices,
  onSelectServiceDetail
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);

  const whatsappMessage = encodeURIComponent(
    "¡Hola Resina Art & Mary! Deseo recibir información sobre los servicios de restauración de imágenes y arte en resina."
  );
  const whatsappUrl = `https://wa.me/50660367249?text=${whatsappMessage}`;

  const handleServiceClick = (serviceId) => {
    if (onSelectServiceDetail) {
      onSelectServiceDetail(serviceId);
    } else if (onNavigateServices) {
      onNavigateServices();
    }
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleAllServicesClick = () => {
    if (onNavigateServices) onNavigateServices();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#faf7f5]/90 backdrop-blur-md border-b border-[#e8ded5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); onNavigateHome(); }}
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
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-medium text-[#5c4a43]">
            {/* Servicios Dropdown */}
            <div
              className="relative py-4"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <a
                href="/servicios"
                onClick={(e) => {
                  e.preventDefault();
                  handleAllServicesClick();
                }}
                className={`inline-flex items-center gap-1.5 hover:text-[#e8a598] transition-colors cursor-pointer ${
                  currentView === 'services' || currentView === 'service-detail' ? 'text-[#c87563] font-bold' : ''
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-[#c87563]" />
                <span>Servicios Especiales</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </a>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-96 bg-white rounded-2xl shadow-2xl border border-[#e8ded5] py-3 px-3 z-50 max-h-[80vh] overflow-y-auto">
                  <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#8c7a6b] border-b border-[#f3ece6] mb-2 flex items-center justify-between">
                    <span>Restauración Sacra & Especialidades</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#c87563]" />
                  </div>

                  <div className="space-y-0.5">
                    {[
                      { id: 'restauracion-sacra', label: 'Restauración de Imágenes Religiosas' },
                      { id: 'restauracion-imagenes-religiosas-costa-rica', label: 'Restauración de Imágenes Religiosas en Costa Rica' },
                      { id: 'restauracion-santos-resina', label: 'Restauración de Santos de Resina' },
                      { id: 'reparacion-virgenes-yeso', label: 'Reparación de Vírgenes de Yeso' },
                      { id: 'restauracion-esculturas-religiosas', label: 'Restauración de Esculturas Religiosas' },
                      { id: 'pintar-imagen-virgen', label: 'Pintar Imagen de la Virgen' },
                      { id: 'restauracion-figuras-religiosas-antiguas', label: 'Restauración de Figuras Religiosas Antiguas' },
                      { id: 'reparar-cristo-resina', label: 'Reparar Cristo de Resina' },
                      { id: 'restauracion-imagenes-catolicas', label: 'Restauración de Imágenes Católicas' },
                      { id: 'restauracion-imagenes-iglesias', label: 'Restauración de Imágenes para Iglesias' },
                      { id: 'restauracion-profesional-esculturas', label: 'Restauración Profesional de Esculturas' }
                    ].map((item) => (
                      <a
                        key={item.id}
                        href={`/servicios/${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleServiceClick(item.id);
                        }}
                        className="group flex items-center gap-2.5 p-2 rounded-lg hover:bg-[#faf4f0] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c87563] shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="text-xs font-medium text-[#3d2c29] group-hover:text-[#c87563] transition-colors">
                          {item.label}
                        </span>
                      </a>
                    ))}
                  </div>

                  <div className="px-3 pt-3 pb-1.5 text-xs font-semibold uppercase tracking-wider text-[#8c7a6b] border-b border-[#f3ece6] mb-1 mt-2 flex items-center justify-between">
                    <span>Arte Personalizado</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#c87563]" />
                  </div>
                  <a
                    href="/servicios/arte-resina-personalizado"
                    onClick={(e) => {
                      e.preventDefault();
                      handleServiceClick('arte-resina-personalizado');
                    }}
                    className="group flex items-center gap-2.5 p-2 rounded-lg hover:bg-[#faf4f0] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c87563] shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-xs font-medium text-[#3d2c29] group-hover:text-[#c87563] transition-colors">
                      Arte Personalizado en Resina
                    </span>
                  </a>
                </div>
              )}
            </div>

            <a
              href="/cursos"
              onClick={(e) => { e.preventDefault(); onNavigateCatalog(); }}
              className={`inline-flex items-center gap-1 hover:text-[#e8a598] transition-colors ${
                currentView === 'catalog' ? 'text-[#c87563] font-bold' : ''
              }`}
            >
              <Grid className="w-4 h-4 text-[#c87563]" />
              <span>Catálogo Cursos</span>
            </a>
            <a
              href="/piezas"
              onClick={(e) => { e.preventDefault(); onNavigatePieces(); }}
              className={`inline-flex items-center gap-1 hover:text-[#e8a598] transition-colors ${
                currentView === 'pieces' ? 'text-[#c87563] font-bold' : ''
              }`}
            >
              <Package className="w-4 h-4 text-[#c87563]" />
              <span>Catálogo Piezas</span>
            </a>
            <a
              href="#cursos"
              onClick={currentView !== 'home' ? onNavigateHome : undefined}
              className="hover:text-[#e8a598] transition-colors"
            >
              Talleres
            </a>
            <a
              href="#galeria"
              onClick={currentView !== 'home' ? onNavigateHome : undefined}
              className="hover:text-[#e8a598] transition-colors"
            >
              Galería
            </a>
            <a
              href="#testimonios"
              onClick={currentView !== 'home' ? onNavigateHome : undefined}
              className="hover:text-[#e8a598] transition-colors font-medium text-[#3d2c29]"
            >
              Testimonios
            </a>
            <a
              href="#faqs"
              onClick={currentView !== 'home' ? onNavigateHome : undefined}
              className="hover:text-[#e8a598] transition-colors"
            >
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
              className="text-[#3d2c29] p-2 rounded-lg hover:bg-[#eedcd5] transition-colors cursor-pointer"
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
          <div>
            <div
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between py-2 text-[#c87563] font-bold cursor-pointer border-b border-[#e8ded5]/60"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c87563]" />
                Servicios Especiales
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </div>

            {mobileServicesOpen && (
              <div className="pl-3 pr-2 py-2 space-y-1 bg-[#f8ece9]/50 rounded-lg text-xs sm:text-sm mt-2 max-h-60 overflow-y-auto">
                {[
                  { id: 'restauracion-sacra', label: '✝️ Restauración de Imágenes Religiosas' },
                  { id: 'restauracion-imagenes-religiosas-costa-rica', label: '🇨🇷 Restauración de Imágenes Religiosas en CR' },
                  { id: 'restauracion-santos-resina', label: '✨ Restauración de Santos de Resina' },
                  { id: 'reparacion-virgenes-yeso', label: '🌹 Reparación de Vírgenes de Yeso' },
                  { id: 'restauracion-esculturas-religiosas', label: '🏛️ Restauración de Esculturas Religiosas' },
                  { id: 'pintar-imagen-virgen', label: '🎨 Pintar Imagen de la Virgen' },
                  { id: 'restauracion-figuras-religiosas-antiguas', label: '🏺 Restauración de Figuras Antiguas' },
                  { id: 'reparar-cristo-resina', label: '✝️ Reparar Cristo de Resina' },
                  { id: 'restauracion-imagenes-catolicas', label: '🙏 Restauración de Imágenes Católicas' },
                  { id: 'restauracion-imagenes-iglesias', label: '⛪ Restauración de Imágenes para Iglesias' },
                  { id: 'restauracion-profesional-esculturas', label: '🛠️ Restauración Profesional de Esculturas' },
                  { id: 'arte-resina-personalizado', label: '✨ Arte Personalizado en Resina' }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`/servicios/${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleServiceClick(item.id);
                    }}
                    className="block py-1.5 text-[#3d2c29] font-medium hover:text-[#c87563] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => { onNavigateCatalog(); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-[#3d2c29] font-medium hover:text-[#c87563] cursor-pointer"
          >
            Catálogo de Cursos
          </button>
          <button
            onClick={() => { onNavigatePieces(); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-[#3d2c29] font-medium hover:text-[#c87563] cursor-pointer"
          >
            Catálogo de Piezas
          </button>
          <a
            href="#cursos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#3d2c29] font-medium hover:text-[#e8a598]"
          >
            Talleres Presenciales
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
