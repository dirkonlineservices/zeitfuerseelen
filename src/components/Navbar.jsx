import React, { useState } from 'react';
import { Menu, X, Heart, Sparkles, Calendar } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Start', href: '#hero' },
    { name: 'Über mich', href: '#about' },
    { name: 'Angebote', href: '#services' },
    { name: 'Meditation & Impulse', href: '#meditation' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-amber-50/85 backdrop-blur-md border-b border-amber-200/50 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 shadow-inner group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 fill-amber-500/20 text-amber-700" />
          </div>
          <div>
            <span className="block font-serif text-xl sm:text-2xl font-semibold tracking-wide text-stone-800">
              Zeit für Seelen
            </span>
            <span className="block text-xs uppercase tracking-widest text-amber-800/70 font-medium">
              Jacqueline Schmetzer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-amber-800 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-600 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 bg-stone-800 text-amber-50 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-amber-900 transition-all shadow-sm hover:shadow-md active:scale-95"
          >
            <Calendar className="w-4 h-4 text-amber-300" />
            <span>Termin anfragen</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-stone-700 hover:bg-amber-100/50 transition-colors"
          aria-label="Menü umschalten"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-amber-50 border-b border-amber-200 px-6 py-5 space-y-4 shadow-lg animate-in fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-stone-700 hover:text-amber-800 py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => {
                setIsOpen(false);
                if (onOpenContact) onOpenContact();
              }}
              className="w-full inline-flex justify-center items-center gap-2 bg-stone-800 text-amber-50 px-5 py-3 rounded-xl text-sm font-medium hover:bg-amber-900"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Termin anfragen</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
