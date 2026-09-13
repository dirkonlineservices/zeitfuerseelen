import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer({ onOpenLegal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-serif text-lg font-semibold">
              <Heart className="w-4 h-4 text-amber-500 fill-amber-500/20" />
              <span>Zeit für Seelen</span>
            </div>
            <p className="text-stone-400 mt-1">Jacqueline Schmetzer – Seelenbegleiterin</p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('impressum')}
              className="hover:text-amber-300 transition-colors"
            >
              Impressum
            </button>
            <span className="text-stone-700">•</span>
            <button
              onClick={() => onOpenLegal('datenschutz')}
              className="hover:text-amber-300 transition-colors"
            >
              Datenschutz
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400">
          <p>© {currentYear} Zeit für Seelen. Alle Rechte vorbehalten.</p>
          <p className="text-[11px] text-stone-400">
            Mit Achtsamkeit & Herz gestaltet.
          </p>
        </div>

      </div>
    </footer>
  );
}
