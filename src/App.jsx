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

export default function App() {
  const [activeModalPage, setActiveModalPage] = useState(null);

  const handleOpenModal = (pageType) => {
    setActiveModalPage(pageType);
  };

  const handleCloseModal = () => {
    setActiveModalPage(null);
  };

  return (
    <div className="min-h-screen bg-[#faf7f5] flex flex-col font-sans text-[#4a3e3d] selection:bg-[#f2dfd8] selection:text-[#8c483b]">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Hero />
        <Courses />
        <IncludesSection />
        <Gallery />
        <Testimonials />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

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
