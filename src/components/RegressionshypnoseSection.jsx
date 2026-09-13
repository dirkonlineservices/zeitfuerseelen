import React from 'react';
import { Sparkles, Compass, Shield, Sun } from 'lucide-react';

export default function RegressionshypnoseSection() {
  return (
    <section id="regressionshypnose" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h3 className="text-xs font-sans uppercase tracking-[2px] text-[#b89065] font-semibold">
            Tiefgehende Innenreise
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-[#3d4a3e] font-normal">
            Regressions­hypnose
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#5c6064] leading-relaxed">
            Eine achtsame Reise in dein Unterbewusstsein.<br />
            Den Ursprung verstehen, um die Gegenwart friedvoll zu befreien.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1 */}
          <div className="p-8 bg-[#f4f1ea] rounded-sm border-t-3 border-[#b89065] shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#b89065] font-semibold mb-2">
              <Compass className="w-4 h-4" />
              <span>Die Ausgangslage</span>
            </div>
            <h3 className="text-xl font-serif text-[#3d4a3e] font-medium mb-3">
              Muster erkennen
            </h3>
            <p className="text-sm text-[#2b2d2f] font-light leading-relaxed mb-3">
              Hast du dich jemals gefragt, warum bestimmte Gefühle oder Reaktionen in deinem Leben immer wiederkehren, als gäbe es ein unsichtbares Drehbuch?
            </p>
            <p className="text-sm text-[#5c6064] font-light leading-relaxed">
              Oft stoßen wir mit rein rationalem Nachdenken an unsere Grenzen, weil die Ursachen für innere Blockaden oder Selbstzweifel tief im Unterbewusstsein verborgen liegen.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-[#f4f1ea] rounded-sm border-t-3 border-[#3d4a3e] shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#b89065] font-semibold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Der Ansatz</span>
            </div>
            <h3 className="text-xl font-serif text-[#3d4a3e] font-medium mb-3">
              Was passiert in der Hypnose?
            </h3>
            <p className="text-sm text-[#2b2d2f] font-light leading-relaxed mb-3">
              In einem angenehmen, tief entspannten Zustand – der Trance – betrachten wir behutsam die Ereignisse, die deine heutigen Themen geformt haben.
            </p>
            <p className="text-sm text-[#5c6064] font-light leading-relaxed">
              <strong className="font-medium text-[#3d4a3e]">Wichtig:</strong> Es geht nicht darum, alte Verletzungen schmerzhaft neu zu durchleben. Wir betrachten Vergangenes aus der geschützten Distanz des heutigen Erwachsenen, um es emotional neu zu bewerten.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-[#f4f1ea] rounded-sm border-t-3 border-[#3d4a3e] shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#b89065] font-semibold mb-2">
              <Sun className="w-4 h-4" />
              <span>Deine Entwicklung</span>
            </div>
            <h3 className="text-xl font-serif text-[#3d4a3e] font-medium mb-3">
              Raum für neue Energie
            </h3>
            <div className="space-y-3 pt-2">
              <div>
                <strong className="block text-sm text-[#3d4a3e] font-semibold">Blockaden lösen</strong>
                <p className="text-xs text-[#5c6064] mt-0.5">Transformiere einschränkende Glaubenssätze nachhaltig.</p>
              </div>
              <div>
                <strong className="block text-sm text-[#3d4a3e] font-semibold">Klarheit gewinnen</strong>
                <p className="text-xs text-[#5c6064] mt-0.5">Erkenne den roten Faden und richte dich selbstbestimmt aus.</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-8 bg-[#f4f1ea] rounded-sm border-t-3 border-[#b89065] shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#b89065] font-semibold mb-2">
              <Shield className="w-4 h-4" />
              <span>Vertrauen</span>
            </div>
            <h3 className="text-xl font-serif text-[#3d4a3e] font-medium mb-3">
              Du behältst die Kontrolle
            </h3>
            <p className="text-sm text-[#2b2d2f] font-light leading-relaxed mb-3">
              Ein weit verbreiteter Mythos ist der Kontrollverlust in der Hypnose. Die moderne Regressionsarbeit basiert jedoch auf absoluter Autonomie.
            </p>
            <p className="text-sm text-[#5c6064] font-light leading-relaxed">
              Du bist zu jeder Zeit ansprechbar, sicher und steuerst das Tempo aktiv mit. Wir agieren lediglich als achtsame Impulsgeber an deiner Seite.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
