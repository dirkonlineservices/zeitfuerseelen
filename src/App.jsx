import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import MeditationSection from './components/MeditationSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';

export default function App() {
  const [legalModal, setLegalModal] = useState({ isOpen: false, type: 'impressum' });

  const handleOpenLegal = (type) => {
    setLegalModal({ isOpen: true, type });
  };

  const handleCloseLegal = () => {
    setLegalModal({ isOpen: false, type: 'impressum' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/30 text-stone-800">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <MeditationSection />
        <Contact />
      </main>

      <Footer onOpenLegal={handleOpenLegal} />

      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={handleCloseLegal}
        type={legalModal.type}
      />
    </div>
  );
}
