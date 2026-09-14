import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-[#f4f1ea]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <h3 className="text-xs sm:text-sm font-sans uppercase tracking-[3px] text-[#b89065] font-semibold">
              Herzlich Willkommen
            </h3>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal text-[#3d4a3e] leading-[1.15]">
              Zeit für Seelen
            </h1>

            <p className="text-xl sm:text-2xl font-serif italic text-[#3d4a3e] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Ein geschützter Raum, um anzukommen, zu verstehen und mit neuer Leichtigkeit weiterzugehen.
            </p>

            <p className="text-[#5c6064] text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Wir begleiten dich achtsam dabei, innere Blockaden an der Wurzel zu erkennen und eigene, tiefe Bedürfnisse wieder wahrzunehmen.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#kontakt"
                className="w-full sm:w-auto btn-premium-dark"
              >
                Unverbindlich anfragen
              </a>

              <a
                href="#philosophie"
                className="w-full sm:w-auto inline-flex items-center justify-center py-4 px-8 border border-[#b89065] text-[#b89065] hover:bg-[#b89065] hover:text-white transition-all text-xs uppercase tracking-[2px] font-semibold rounded-sm"
              >
                Mehr erfahren
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm w-full">
              {/* Subtle organic decorative background shape */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#b89065]/15 rounded-full -z-0 pointer-events-none" />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#3d4a3e]/10 rounded-full -z-0 pointer-events-none" />

              <div className="relative z-10 rounded-[4px_60px_4px_60px] overflow-hidden border-2 border-[#b89065]/30 shadow-xl bg-white aspect-[3/4]">
                <img
                  src="/images/jacky-ueber-mich.webp"
                  alt="Jacqueline Schmetzer - Seelenbegleiterin"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = '/images/jacky-profil.jpeg';
                  }}
                />
                
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-3.5 rounded-sm border-l-2 border-[#b89065] shadow-sm">
                  <p className="font-serif text-[#3d4a3e] font-semibold text-sm">Jacqueline Schmetzer</p>
                  <p className="text-xs text-[#b89065] uppercase tracking-wider font-sans font-medium">Seelenbegleiterin & Coach</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
