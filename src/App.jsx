import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import HomePage from './pages/HomePage';
import AboutAuthorPage from './pages/AboutAuthorPage';

function ScrollToAnchor() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [legalModal, setLegalModal] = useState({ isOpen: false, type: 'impressum' });

  const handleOpenLegal = (type) => {
    setLegalModal({ isOpen: true, type });
  };

  const handleCloseLegal = () => {
    setLegalModal({ isOpen: false, type: 'impressum' });
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#f4f1ea] text-[#2b2d2f]">
        <ScrollToAnchor />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ueber-mich" element={<AboutAuthorPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer onOpenLegal={handleOpenLegal} />

        <LegalModal
          isOpen={legalModal.isOpen}
          onClose={handleCloseLegal}
          type={legalModal.type}
        />
      </div>
    </BrowserRouter>
  );
}
