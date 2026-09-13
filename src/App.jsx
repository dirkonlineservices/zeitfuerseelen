import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import RegressionshypnoseSection from './components/RegressionshypnoseSection';
import AuthorProfile from './components/AuthorProfile';
import About from './components/About';
import PricingOffers from './components/PricingOffers';
import CTASection from './components/CTASection';
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
    <div className="min-h-screen flex flex-col bg-[#f4f1ea] text-[#2b2d2f]">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <RegressionshypnoseSection />
        <AuthorProfile />
        <About />
        <PricingOffers />
        <CTASection />
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
