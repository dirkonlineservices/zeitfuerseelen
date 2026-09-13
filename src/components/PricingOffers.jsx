import React from 'react';
import { Check, Sparkles, Compass } from 'lucide-react';

export default function PricingOffers() {
  return (
    <section id="angebote" className="py-20 bg-[#f4f1ea] border-t border-[#3d4a3e]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h3 className="text-xs uppercase tracking-[2px] text-[#b89065] font-semibold font-sans">
            Klarheit & Begleitung
          </h3>
          <h2 className="text-3xl sm:text-4xl font-display text-[#3d4a3e] font-normal">
            Angebote & Preise
          </h2>
          <p className="font-serif italic text-lg text-[#5c6064] leading-relaxed">
            Jeder Mensch trägt seine eigene Geschichte in sich. Wir bieten dir den sicheren Rahmen, um hinzusehen, zu verstehen und emotionalen Ballast achtsam loszulassen.
          </p>
        </div>

        {/* 2 Main Offer Cards */}
        <div id="rueckfuehrungen" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Regressionshypnose */}
          <div className="bg-white rounded-sm p-8 sm:p-10 shadow-[0_15px_35px_rgba(61,74,62,0.05)] border-t-3 border-[#b89065] flex flex-col justify-between hover:-translate-y-1 transition-all">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#b89065]/10 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-[#b89065]" />
              </div>

              <h3 className="text-2xl font-serif text-[#3d4a3e] font-normal mb-3">
                Regressionshypnose
              </h3>
              
              <p className="text-sm text-[#2b2d2f] font-light leading-relaxed mb-4">
                Manchmal merkst du, dass unsichtbare Hürden dich im Alltag immer wieder ausbremsen. Das reine rationale Nachdenken reicht dann oft nicht aus, um diese Knoten zu lösen.
              </p>

              <div className="w-10 h-[2px] bg-[#b89065]/50 my-4" />

              <p className="text-xs text-[#5c6064] font-light leading-relaxed mb-6">
                In einer sanften und sicheren Tiefenentspannung reisen wir behutsam an die Wurzel dieser Blockaden. Wir betrachten prägende Momente aus einer schützenden Distanz neu, um sie friedlich in die Gegenwart zu integrieren und echte emotionale Leichtigkeit zu finden.
              </p>
            </div>

            <a
              href="#kontakt"
              className="text-xs uppercase tracking-wider text-[#3d4a3e] font-semibold hover:text-[#b89065] inline-flex items-center gap-2 pt-4 border-t border-[#3d4a3e]/10"
            >
              <span>Termin vereinbaren</span>
              <span>→</span>
            </a>
          </div>

          {/* Card 2: Rückführungen */}
          <div className="bg-white rounded-sm p-8 sm:p-10 shadow-[0_15px_35px_rgba(61,74,62,0.05)] border-t-3 border-[#3d4a3e] flex flex-col justify-between hover:-translate-y-1 transition-all">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#3d4a3e]/10 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-[#3d4a3e]" />
              </div>

              <h3 className="text-2xl font-serif text-[#3d4a3e] font-normal mb-3">
                Rückführungen
              </h3>
              
              <p className="text-sm text-[#2b2d2f] font-light leading-relaxed mb-4">
                Es gibt tiefe Verbindungen, scheinbar grundlose Ängste oder wiederkehrende Träume, die sich anfühlen, als stammten sie aus einer anderen Zeit. Eine Rückführung bietet die Möglichkeit, diese Phänomene ernst zu nehmen.
              </p>

              <div className="w-10 h-[2px] bg-[#3d4a3e]/30 my-4" />

              <p className="text-xs text-[#5c6064] font-light leading-relaxed mb-6">
                Wir betreten die innere Bibliothek deines Unterbewusstseins und betrachten die Bilder, die sich zeigen, völlig wertfrei. Durch dieses achtsame Beobachten können alte Echos der Vergangenheit endlich verstanden werden, sodass du deinen heutigen Weg freier gehen kannst.
              </p>
            </div>

            <a
              href="#kontakt"
              className="text-xs uppercase tracking-wider text-[#3d4a3e] font-semibold hover:text-[#b89065] inline-flex items-center gap-2 pt-4 border-t border-[#3d4a3e]/10"
            >
              <span>Termin vereinbaren</span>
              <span>→</span>
            </a>
          </div>

        </div>

        {/* Pricing Box: Wert & Investition */}
        <div className="bg-white rounded-sm p-8 sm:p-12 shadow-[0_15px_35px_rgba(61,74,62,0.05)] border-t-3 border-[#b89065] max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-xs uppercase tracking-[2px] text-[#b89065] font-semibold font-sans">
                Wert & Investition
              </h3>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#3d4a3e] font-normal">
                Klarheit von Anfang an
              </h2>
              <p className="text-sm text-[#2b2d2f] font-light leading-relaxed">
                Eine intensive Reise in das eigene Unterbewusstsein lässt sich nicht in ein starres Minutentakt-Schema pressen. Jede Seele bringt ihr eigenes Tempo und ihre ganz eigene Geschichte mit.
              </p>
              <p className="text-xs text-[#5c6064] font-light leading-relaxed">
                Eine tiefe Sitzung – sei es eine Regressionshypnose oder eine Rückführung – dauert in der Regel zwischen <strong className="text-[#3d4a3e] font-semibold">1,5 und 2 Stunden</strong>. Der endgültige Ausgleich richtet sich ganz transparent nach der tatsächlich genutzten Zeit vor Ort, damit du genau den Freiraum hast, den du brauchst.
              </p>
            </div>

            <div className="md:col-span-5 bg-[#3d4a3e]/[0.03] p-8 rounded-sm text-center border border-[#3d4a3e]/5">
              <div className="font-serif text-5xl text-[#3d4a3e] font-normal mb-1">
                70 €
              </div>
              <div className="text-xs uppercase tracking-widest text-[#b89065] font-semibold mb-4">
                pro Stunde
              </div>

              <div className="w-10 h-[1px] bg-[#b89065] mx-auto mb-6" />

              <ul className="space-y-3 text-xs text-[#2b2d2f] text-left">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#b89065] shrink-0" />
                  <span>Ausführliches Vorgespräch inklusive</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#b89065] shrink-0" />
                  <span>Achtsame Nachbereitung inklusive</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#b89065] shrink-0" />
                  <span>Geschützter, zeitloser Rahmen</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
