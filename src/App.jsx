import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import IncludesSection from './components/IncludesSection';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import StaticPagesModal from './components/StaticPagesModal';
import CatalogPage from './components/CatalogPage';
import PieceCatalogPage from './components/PieceCatalogPage';
import CourseDetailPage from './components/CourseDetailPage';
import ServicesPage from './components/ServicesPage';
import NotFoundPage from './components/NotFoundPage';
import SEOHead from './components/SEOHead';

export const VALID_COURSE_IDS = [
  'pintura-basico',
  'pintura-medio',
  'pintura-avanzado',
  'patinas',
  'velas-basico',
  'velas-medio',
  'velas-avanzado'
];

export function parseRoute(path) {
  const normalized = (path || '/').split('?')[0].split('#')[0];
  if (normalized === '/' || normalized === '') return { view: 'home', courseId: null, isNotFound: false };
  if (normalized === '/cursos' || normalized === '/cursos/') return { view: 'catalog', courseId: null, isNotFound: false };
  if (normalized === '/piezas' || normalized === '/piezas/') return { view: 'pieces', courseId: null, isNotFound: false };
  if (normalized === '/servicios' || normalized === '/servicios/') return { view: 'services', courseId: null, isNotFound: false };

  if (normalized.startsWith('/cursos/')) {
    const courseId = normalized.replace('/cursos/', '').replace(/\/$/, '');
    if (VALID_COURSE_IDS.includes(courseId)) {
      return { view: 'course-detail', courseId, isNotFound: false };
    }
  }

  return { view: '404', courseId: null, isNotFound: true };
}

export default function App({ initialPath = '/' }) {
  const [route, setRoute] = useState(() => parseRoute(initialPath));
  const [activeModalPage, setActiveModalPage] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Sync initial route with window.location.pathname on client mount
    setRoute(parseRoute(window.location.pathname));

    const handlePopState = () => {
      setRoute(parseRoute(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (url) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', url);
      setRoute(parseRoute(url));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateHome = () => navigateTo('/');
  const handleNavigateCatalog = () => navigateTo('/cursos');
  const handleNavigatePieces = () => navigateTo('/piezas');
  const handleNavigateServices = () => navigateTo('/servicios');
  const handleSelectCourseDetail = (courseId) => navigateTo(`/cursos/${courseId}`);

  const currentView = route.view;
  const selectedCourseId = route.courseId;

  const handleOpenModal = (pageType) => {
    setActiveModalPage(pageType);
  };

  const handleCloseModal = () => {
    setActiveModalPage(null);
  };

  return (
    <div className="min-h-screen bg-[#faf7f5] flex flex-col font-sans text-[#4a3e3d] selection:bg-[#f2dfd8] selection:text-[#8c483b]">
      {/* Dynamic SEO Head Management */}
      <SEOHead view={currentView} courseId={selectedCourseId} path={initialPath} />

      {/* Navigation Header */}
      <Navbar
        currentView={currentView}
        onNavigateHome={handleNavigateHome}
        onNavigateCatalog={handleNavigateCatalog}
        onNavigatePieces={handleNavigatePieces}
        onNavigateServices={handleNavigateServices}
      />

      {/* Main Page Content based on View */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero />
            <Courses onSelectCourseDetail={handleSelectCourseDetail} />
            <IncludesSection />
            <Gallery />
            <Testimonials />
            <FAQ />
          </>
        )}

        {currentView === 'catalog' && (
          <CatalogPage
            onNavigateHome={handleNavigateHome}
            onSelectCourseDetail={handleSelectCourseDetail}
            onNavigatePieces={handleNavigatePieces}
          />
        )}

        {currentView === 'pieces' && (
          <PieceCatalogPage
            onNavigateHome={handleNavigateHome}
            onNavigateCatalog={handleNavigateCatalog}
          />
        )}

        {currentView === 'services' && (
          <ServicesPage
            onNavigateHome={handleNavigateHome}
            onNavigateCatalog={handleNavigateCatalog}
            onNavigatePieces={handleNavigatePieces}
          />
        )}

        {currentView === 'course-detail' && (
          <CourseDetailPage
            courseId={selectedCourseId}
            onNavigateHome={handleNavigateHome}
            onNavigateCatalog={handleNavigateCatalog}
            onNavigatePieces={handleNavigatePieces}
          />
        )}

        {currentView === '404' && (
          <NotFoundPage
            onNavigateHome={handleNavigateHome}
            onNavigateCatalog={handleNavigateCatalog}
            onSelectCourseDetail={handleSelectCourseDetail}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenModal={handleOpenModal}
        onNavigateHome={handleNavigateHome}
        onNavigateCatalog={handleNavigateCatalog}
        onNavigatePieces={handleNavigatePieces}
        onNavigateServices={handleNavigateServices}
        onSelectCourseDetail={handleSelectCourseDetail}
      />

      {/* Floating Action Button */}
      <WhatsAppButton />

      {/* Static Information Modal */}
      <StaticPagesModal
        pageType={activeModalPage}
        onClose={handleCloseModal}
      />
    </div>
  );
}
