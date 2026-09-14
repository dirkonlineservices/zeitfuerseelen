import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Headphones, BookOpen, ArrowRight, ExternalLink } from 'lucide-react';

export default function AuthorTeaser() {
  return (
    <section className="py-20 bg-[#fbf9f4] border-t border-[#3d4a3e]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm w-full">
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-[#b89065]/15 rounded-full -z-0" />
              <div className="relative z-10 rounded-[4px_60px_4px_60px] overflow-hidden border-2 border-[#b89065]/30 shadow-[0_15px_35px_rgba(61,74,62,0.08)] bg-white aspect-[3/4]">
                <img
                  src="/images/jacky-profil.jpeg"
                  alt="Jacqueline Schmetzer – Autorin & Seelenbegleiterin"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/jacky-ueber-mich.webp';
                  }}
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-sm border-l-2 border-[#b89065] shadow-xs">
                  <span className="font-serif text-[#3d4a3e] font-semibold text-sm block">Jacqueline Schmetzer</span>
                  <span className="text-xs uppercase tracking-wider text-[#b89065] font-sans font-medium block">Seelenbegleiterin & Coach</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Teaser Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b89065]/15 border border-[#b89065]/30 text-[#3d4a3e] text-xs uppercase tracking-[2px] font-semibold font-sans">
              <Sparkles className="w-3.5 h-3.5 text-[#b89065]" />
              <span>Autorin & Schöpfungsraum</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display text-[#3d4a3e] font-normal leading-snug">
              Meditationen, Selbsthypnosen & Hörbücher
            </h2>

            <p className="font-serif italic text-lg text-[#3d4a3e] leading-relaxed">
              Sprache, die berührt und das Unterbewusstsein sanft öffnet.
            </p>

            <p className="text-sm sm:text-base text-[#2b2d2f] font-light leading-relaxed">
              Neben ihrer persönlichen 1:1 Seelenbegleitung verfasst Jacqueline Schmetzer wirkungsvolle <strong>geführte Meditationen</strong>, transformative <strong>Selbsthypnosen</strong> und berührende <strong>Hörbücher</strong>.
            </p>

            {/* Small Pill Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 bg-white rounded-sm border-l-2 border-[#b89065] shadow-xs flex items-center gap-2.5">
                <Headphones className="w-4 h-4 text-[#b89065] shrink-0" />
                <span className="text-xs font-medium text-[#3d4a3e]">Meditationen</span>
              </div>
              <div className="p-3 bg-white rounded-sm border-l-2 border-[#3d4a3e] shadow-xs flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#3d4a3e] shrink-0" />
                <span className="text-xs font-medium text-[#3d4a3e]">Selbsthypnosen</span>
              </div>
              <div className="p-3 bg-white rounded-sm border-l-2 border-[#b89065] shadow-xs flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-[#b89065] shrink-0" />
                <span className="text-xs font-medium text-[#3d4a3e]">Hörbücher</span>
              </div>
            </div>

            {/* Flow der Stille Reference */}
            <div className="p-4 bg-white rounded-sm border border-[#b89065]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#5c6064]">
              <div className="flex items-center gap-3">
                <img
                  src="/images/flow-der-stille-logo.png"
                  alt="Flow der Stille Logo"
                  className="h-9 w-auto object-contain shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div>
                  <span className="font-semibold text-[#3d4a3e] block">Kooperation mit „Flow der Stille“</span>
                  <span className="text-[11px] text-[#5c6064]">Offizielle Autorin für Meditationen, Selbsthypnosen & Hörbücher</span>
                </div>
              </div>
              <a
                href="https://www.flow-der-stille.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#b89065] font-semibold hover:underline shrink-0"
              >
                <span>flow-der-stille.de</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* CTA Button to dedicated page */}
            <div className="pt-2">
              <Link
                to="/ueber-mich"
                className="btn-premium-dark !py-3 !px-7 inline-flex items-center gap-2"
              >
                <span>Mehr über Jacqueline & ihre Werke erfahren</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
