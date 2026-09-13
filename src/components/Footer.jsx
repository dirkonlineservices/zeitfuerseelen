import React from 'react';
import { Mail } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Footer({ onOpenLegal }) {
  return (
    <footer className="bg-[#18181a] text-[#dadce0] py-16 border-t border-[#3d4a3e]/30 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-zeitfuerseelen.png"
                alt="Zeit für Seelen Logo"
                className="h-12 w-auto brightness-200 contrast-125"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <span className="font-display text-lg tracking-wide text-white block">
                  Zeit für Seelen
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#b89065] block">
                  Jacqueline Schmetzer
                </span>
              </div>
            </div>
            <p className="text-[#a0a3ad] text-xs leading-relaxed font-light">
              Ein geschützter Raum, um anzukommen, zu verstehen und mit neuer Leichtigkeit weiterzugehen.
            </p>
          </div>

          {/* Col 2: Legal links */}
          <div className="space-y-3 md:text-center">
            <h4 className="text-xs uppercase tracking-[2px] text-[#b89065] font-semibold mb-4">
              Rechtliches
            </h4>
            <div className="flex flex-col md:items-center space-y-2.5 text-xs text-[#d8dae0]">
              <button
                onClick={() => onOpenLegal('impressum')}
                className="hover:text-[#b89065] transition-colors"
              >
                Impressum
              </button>
              <button
                onClick={() => onOpenLegal('datenschutz')}
                className="hover:text-[#b89065] transition-colors"
              >
                Datenschutzerklärung
              </button>
              <button
                onClick={() => onOpenLegal('agb')}
                className="hover:text-[#b89065] transition-colors"
              >
                Allgemeine Geschäftsbedingungen (AGB)
              </button>
              <button
                onClick={() => onOpenLegal('widerruf')}
                className="hover:text-[#b89065] transition-colors"
              >
                Widerrufsbelehrung
              </button>
            </div>
          </div>

          {/* Col 3: Contact & Social */}
          <div className="space-y-3 md:text-right">
            <h4 className="text-xs uppercase tracking-[2px] text-[#b89065] font-semibold mb-4">
              Verbindung
            </h4>
            <div className="space-y-2 text-xs text-[#d8dae0]">
              <p>
                <a
                  href="mailto:kontakt@zeitfuerseelen.de"
                  className="hover:text-[#b89065] transition-colors inline-flex items-center gap-1.5 md:justify-end"
                >
                  <Mail className="w-3.5 h-3.5 text-[#b89065]" />
                  <span>kontakt@zeitfuerseelen.de</span>
                </a>
              </p>
              <div className="pt-2 flex md:justify-end">
                <a
                  href="https://www.instagram.com/zeit_fuer_die_seele"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 hover:border-[#b89065] text-[#d8dae0] hover:text-[#b89065] transition-colors"
                  title="Folge auf Instagram"
                >
                  <InstagramIcon className="w-4 h-4 text-[#b89065]" />
                  <span>@zeit_fuer_die_seele</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#727586] text-[11px]">
          <p>© 2026 Zeit für Seelen. All rights reserved.</p>
          <p>Regressionshypnose & Seelenbegleitung</p>
        </div>

      </div>
    </footer>
  );
}
