import React, { useState } from 'react';
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

export default function App() {
  const parsePath = () => {
    const path = window.location.pathname;
    if (path === '/' || path === '') return { view: 'home', courseId: null };
    if (path === '/cursos' || path === '/cursos/') return { view: 'catalog', courseId: null };
    if (path === '/piezas' || path === '/piezas/') return { view: 'pieces', courseId: null };
    if (path.startsWith('/cursos/')) {
      const courseId = path.replace('/cursos/', '').replace(/\/$/, '');
      if (courseId) return { view: 'course-detail', courseId };
    }
    return { view: 'home', courseId: null };
  };

  const [route, setRoute] = useState(parsePath());
  const [activeModalPage, setActiveModalPage] = useState(null);

  React.useEffect(() => {
    const handlePopState = () => {
      setRoute(parsePath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (url) => {
    window.history.pushState({}, '', url);
    setRoute(parsePath());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => navigateTo('/');
  const handleNavigateCatalog = () => navigateTo('/cursos');
  const handleNavigatePieces = () => navigateTo('/piezas');
  const handleSelectCourseDetail = (courseId) => navigateTo(`/cursos/${courseId}`);

  const currentView = route.view;
  const selectedCourseId = route.courseId || 'pintura-basico';

  const handleOpenModal = (pageType) => {
    setActiveModalPage(pageType);
  };

  const handleCloseModal = () => {
    setActiveModalPage(null);
  };

  return (
    <div className="min-h-screen bg-[#faf7f5] flex flex-col font-sans text-[#4a3e3d] selection:bg-[#f2dfd8] selection:text-[#8c483b]">
      {/* Navigation Header */}
      <Navbar
        currentView={currentView}
        onNavigateHome={handleNavigateHome}
        onNavigateCatalog={handleNavigateCatalog}
        onNavigatePieces={handleNavigatePieces}
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

        {currentView === 'course-detail' && (
          <CourseDetailPage
            courseId={selectedCourseId}
            onNavigateHome={handleNavigateHome}
            onNavigateCatalog={handleNavigateCatalog}
            onNavigatePieces={handleNavigatePieces}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenModal={handleOpenModal}
        onNavigateHome={handleNavigateHome}
        onNavigateCatalog={handleNavigateCatalog}
        onNavigatePieces={handleNavigatePieces}
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
