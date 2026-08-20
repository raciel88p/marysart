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
import CourseDetailPage from './components/CourseDetailPage';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'catalog', 'course-detail'
  const [selectedCourseId, setSelectedCourseId] = useState('velas');
  const [activeModalPage, setActiveModalPage] = useState(null);

  const handleNavigateHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateCatalog = () => {
    setCurrentView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCourseDetail = (courseId) => {
    setSelectedCourseId(courseId);
    setCurrentView('course-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        onNavigateHome={handleNavigateHome}
        onNavigateCatalog={handleNavigateCatalog}
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
          />
        )}

        {currentView === 'course-detail' && (
          <CourseDetailPage
            courseId={selectedCourseId}
            onNavigateHome={handleNavigateHome}
            onNavigateCatalog={handleNavigateCatalog}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenModal={handleOpenModal}
        onNavigateHome={handleNavigateHome}
        onNavigateCatalog={handleNavigateCatalog}
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
