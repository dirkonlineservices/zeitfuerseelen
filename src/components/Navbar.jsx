import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Start', to: '/', isRoute: true },
    { name: 'Über mich', to: '/ueber-mich', isRoute: true },
    { name: 'Philosophie', href: isHome ? '#philosophie' : '/#philosophie' },
    { name: 'Regressionshypnose', href: isHome ? '#regressionshypnose' : '/#regressionshypnose' },
    { name: 'Rückführungen', href: isHome ? '#rueckfuehrungen' : '/#rueckfuehrungen' },
    { name: 'Angebote & Preise', href: isHome ? '#angebote' : '/#angebote' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f4f1ea]/95 backdrop-blur-md border-b border-[#b89065]/20 shadow-[0_2px_15px_rgba(61,74,62,0.03)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between gap-6">
        
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3.5 sm:gap-4 group shrink-0 mr-4 lg:mr-8">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-[0_3px_10px_rgba(61,74,62,0.08)] border border-[#b89065]/30 group-hover:scale-105 transition-transform bg-[#f4f1ea] shrink-0 p-0.5">
            <img
              src="/images/logo-zeitfuerseelen.png"
              alt="Zeit für Seelen Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <span className="font-display text-xl sm:text-2xl font-normal tracking-[0.06em] text-[#3d4a3e] leading-tight whitespace-nowrap">
              Zeit für Seelen
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#b89065] font-medium whitespace-nowrap mt-1">
              Jacqueline Schmetzer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-7 text-xs xl:text-sm font-sans font-medium text-[#2b2d2f] flex-1">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.to}
                className="hover:text-[#b89065] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#b89065] hover:after:w-full after:transition-all whitespace-nowrap"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#b89065] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#b89065] hover:after:w-full after:transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            )
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center shrink-0 ml-2">
          <a
            href={isHome ? '#kontakt' : '/#kontakt'}
            className="btn-premium-dark !py-2.5 !px-5 sm:!px-6 !text-xs !tracking-widest whitespace-nowrap"
          >
            Kennenlernen
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#3d4a3e] hover:bg-[#3d4a3e]/5 rounded-lg shrink-0"
          aria-label="Menü öffnen"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#f4f1ea] border-b border-[#b89065]/20 px-6 py-6 space-y-4 shadow-xl animate-in fade-in">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-[#2b2d2f] hover:text-[#b89065] py-1.5"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-[#2b2d2f] hover:text-[#b89065] py-1.5"
              >
                {link.name}
              </a>
            )
          ))}
          <div className="pt-2">
            <a
              href={isHome ? '#kontakt' : '/#kontakt'}
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
