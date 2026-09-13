import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Startseite', href: '#hero' },
    { name: 'Philosophie', href: '#philosophie' },
    { name: 'Regressionshypnose', href: '#regressionshypnose' },
    { name: 'Rückführungen', href: '#rueckfuehrungen' },
    { name: 'Über mich', href: '#ueber-mich' },
    { name: 'Angebote & Preise', href: '#angebote' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f4f1ea]/95 backdrop-blur-md border-b border-[#b89065]/20 shadow-[0_2px_15px_rgba(61,74,62,0.03)] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        
        {/* Logo and Brand */}
        <a href="#hero" className="flex items-center gap-3.5 group">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-[0_4px_12px_rgba(61,74,62,0.08)] border border-[#b89065]/30 group-hover:scale-105 transition-transform bg-[#f4f1ea] shrink-0">
            <img
              src="/images/logo-zeitfuerseelen.png"
              alt="Zeit für Seelen Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="font-display text-xl sm:text-2xl font-normal tracking-wide text-[#3d4a3e] block leading-tight">
              Zeit für Seelen
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#b89065] font-medium block mt-0.5">
              Jacqueline Schmetzer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-sans font-medium text-[#2b2d2f]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#b89065] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#b89065] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="#kontakt"
            className="btn-premium-dark !py-2.5 !px-6 !text-xs !tracking-widest"
          >
            Kennenlernen
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#3d4a3e] hover:bg-[#3d4a3e]/5 rounded-lg"
          aria-label="Menü öffnen"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#f4f1ea] border-b border-[#b89065]/20 px-6 py-6 space-y-4 shadow-xl animate-in fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-[#2b2d2f] hover:text-[#b89065] py-1.5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#kontakt"
              onClick={() => setIsOpen(false)}
              className="w-full btn-premium-dark text-center !py-3"
            >
              Kennenlernen
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
