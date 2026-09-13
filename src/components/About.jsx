import React from 'react';
import { Sparkles, HeartHandshake, ShieldCheck, Feather } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white/70 border-y border-amber-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative max-w-sm w-full">
              <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-amber-100 aspect-square">
                <img
                  src="/images/jacky-ueber-mich.jpg"
                  alt="Jacqueline Schmetzer"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = '/images/jacky-profil.jpeg';
                  }}
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-amber-50 border border-amber-200 p-4 rounded-2xl shadow-md flex items-center gap-3">
                <Feather className="w-6 h-6 text-amber-700 shrink-0" />
                <span className="text-xs font-serif text-stone-800 italic leading-snug">
                  „Höre auf deine Seele – <br />sie kennt deinen Weg.“
                </span>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/60 text-amber-900 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Über mich & meine Haltung</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900">
              Hallo, ich bin <span className="text-amber-800">Jacqueline</span>
            </h2>

            <div className="space-y-4 text-stone-600 leading-relaxed text-base">
              <p>
                Das Leben stellt uns immer wieder vor Phasen, in denen alte Sicherheiten wegbrechen, Entscheidungen schwerfallen oder innere Unruhe unseren Alltag bestimmt. Genau in solchen Momenten ist es heilsam, einen geschützten Raum zu haben.
              </p>
              <p>
                Als <strong>Seelenbegleiterin</strong> sehe ich meine Aufgabe darin, dir wertfrei und mit offenem Herzen zur Seite zu stehen. Ich unterstütze dich dabei, wieder in Kontakt mit deiner eigenen inneren Weisheit zu treten, blockierende Muster loszulassen und neuen Lebensmut zu schöpfen.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3.5 p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100">
                <HeartHandshake className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-stone-800 text-sm">Präsent & Herzlich</h3>
                  <p className="text-xs text-stone-600 mt-0.5">Echtes Zuhören und bedingungslose Akzeptanz deiner Gefühle.</p>
                </div>
              </div>

              <div className="flex gap-3.5 p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100">
                <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-stone-800 text-sm">Geschützter Raum</h3>
                  <p className="text-xs text-stone-600 mt-0.5">Deine Themen und Empfindungen sind bei mir in sicheren Händen.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
