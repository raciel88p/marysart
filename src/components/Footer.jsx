import React from 'react';
import { Heart, MapPin, Phone, Mail, Rss, Grid } from 'lucide-react';

export default function Footer({ onOpenModal, onNavigateHome, onNavigateCatalog, onSelectCourseDetail }) {
  const whatsappMessage = encodeURIComponent(
    "¡Hola Resina Art & Mary! Deseo recibir información sobre los cursos de Velas Artesanales y Pintura."
  );
  const whatsappUrl = `https://wa.me/50688390436?text=${whatsappMessage}`;

  return (
    <footer className="bg-[#2c211f] text-[#d8c8bf] pt-16 pb-8 border-t border-[#3d2c29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#3d2c29]">

          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e8a598] text-white flex items-center justify-center font-serif text-xl font-bold">
                R
              </div>
              <span className="font-serif text-2xl font-bold text-white">
                Resina Art & Mary
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#a8988e] leading-relaxed">
              Taller de Velas Artesanales de Cera de Soya y Pintura Creativa en Costa Rica. Un espacio diseñado para reconectar con tu esencia, relajarte y crear belleza con tus manos.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3d2c29] hover:bg-[#e8a598] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3d2c29] hover:bg-[#e8a598] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="/rss.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3d2c29] hover:bg-[#e8a598] text-white flex items-center justify-center transition-colors"
                title="Suscripción RSS"
                aria-label="RSS Feed"
              >
                <Rss className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Catalog & Courses Subpages */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white">Talleres & Subpáginas</h3>
            <ul className="space-y-2.5 text-sm text-[#a8988e]">
              <li>
                <button
                  onClick={onNavigateCatalog}
                  className="hover:text-[#e8a598] transition-colors text-left flex items-center gap-1.5 font-bold text-[#e8a598]"
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span>Ver Catálogo General</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourseDetail && onSelectCourseDetail('velas')}
                  className="hover:text-[#e8a598] transition-colors text-left"
                >
                  Subpágina: Velas Artesanales
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourseDetail && onSelectCourseDetail('pintura')}
                  className="hover:text-[#e8a598] transition-colors text-left"
                >
                  Subpágina: Pintura & Vino
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourseDetail && onSelectCourseDetail('combo')}
                  className="hover:text-[#e8a598] transition-colors text-left"
                >
                  Subpágina: Combo Completo
                </button>
              </li>
            </ul>
          </div>

          {/* Static Pages Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white">Información & Políticas</h3>
            <ul className="space-y-2.5 text-sm text-[#a8988e]">
              <li>
                <button
                  onClick={() => onOpenModal && onOpenModal('nosotras')}
                  className="hover:text-[#e8a598] transition-colors text-left"
                >
                  Sobre Nosotras (Resina Art & Mary)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal && onOpenModal('reembolsos')}
                  className="hover:text-[#e8a598] transition-colors text-left"
                >
                  Política de Reembolso & Reprogramación
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal && onOpenModal('terminos')}
                  className="hover:text-[#e8a598] transition-colors text-left"
                >
                  Términos y Condiciones
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal && onOpenModal('privacidad')}
                  className="hover:text-[#e8a598] transition-colors text-left"
                >
                  Política de Privacidad
                </button>
              </li>
              <li>
                <a
                  href="/rss.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e8a598] transition-colors inline-flex items-center gap-1.5 text-xs"
                >
                  <Rss className="w-3.5 h-3.5" />
                  <span>Canal RSS Novedades</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white">Contacto & Ubicación</h3>
            <ul className="space-y-3 text-sm text-[#a8988e]">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#e8a598] shrink-0 mt-0.5" />
                <span>San José, Turrialba & San Carlos, Costa Rica</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#e8a598] shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: +506 8839-0436
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#e8a598] shrink-0" />
                <a href="mailto:info@resinaartmary.cr" className="hover:text-white transition-colors">
                  info@resinaartmary.cr
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8c7a6b] gap-4">
          <p>© {new Date().getFullYear()} Resina Art & Mary Costa Rica. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-[#e8a598] fill-current" />
            <span>para amantes del arte y el bienestar</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
