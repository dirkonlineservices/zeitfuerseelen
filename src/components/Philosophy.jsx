import React from 'react';
import { Check } from 'lucide-react';

export default function Philosophy() {
  const steps = [
    {
      num: '1.',
      title: 'Ankommen & Annehmen',
      desc: 'Im ersten Schritt geht es darum, dem aktuellen Gefühl Raum zu geben. Egal ob Unsicherheit, Trauer oder das Gefühl, festzustecken – wir nehmen es wahr, ohne es sofort verändern zu müssen.',
    },
    {
      num: '2.',
      title: 'Verstehen & Erkunden',
      desc: 'Durch Methoden wie die Regressionshypnose betrachten wir die tieferen Ursprünge. Wir erforschen das "Warum" hinter den Mustern in einem sicheren, entspannten Rahmen.',
    },
    {
      num: '3.',
      title: 'Befreien & Integrieren',
      desc: 'Sobald alte emotionale Knoten verstanden wurden, dürfen sie sich lösen. Wir unterstützen dich dabei, diese neu gewonnene Leichtigkeit stabil in deinen Alltag zu tragen.',
    },
  ];

  return (
    <section id="philosophie" className="py-20 bg-[#f4f1ea] border-t border-[#3d4a3e]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Philosophy Card Box */}
        <div className="bg-white rounded-sm p-8 sm:p-12 lg:p-16 shadow-[0_15px_35px_rgba(61,74,62,0.05)] border border-[#3d4a3e]/5 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Col */}
            <div>
              <h3 className="text-xs uppercase tracking-[2px] text-[#b89065] font-semibold mb-3 font-sans">
                Unsere Philosophie
              </h3>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#3d4a3e] font-normal mb-4">
                Wenn das Außen leiser werden darf
              </h2>
              <div className="w-16 h-[2px] bg-[#b89065] my-6" />
              
              <div className="space-y-4 text-base text-[#2b2d2f] font-light leading-relaxed">
                <p>
                  Wir beobachten oft, dass in einer Welt, die ständige Erreichbarkeit und Leistung fordert, die eigene innere Stimme leiser wird. Viele Menschen spüren eine tiefe Erschöpfung oder laufen immer wieder gegen unsichtbare emotionale Mauern, ohne zu wissen, warum.
                </p>
                <p>
                  <strong className="font-semibold text-[#3d4a3e]">Zeit für Seelen</strong> ist genau dafür da: Es ist eine bewusste Pause. Ein Ort ohne Erwartungen und ohne Bewertung. Wir glauben daran, dass in jedem Menschen bereits alle Ressourcen liegen, um emotional frei zu sein – manchmal braucht es nur jemanden, der den Raum hält, während man den Weg dorthin wiederfindet.
                </p>
              </div>
            </div>

            {/* Right Col: Unser Versprechen */}
            <div className="bg-[#3d4a3e]/[0.03] p-8 sm:p-10 rounded-sm border-l-2 border-[#b89065]">
              <h3 className="text-base font-serif font-medium text-[#3d4a3e] mb-6">
                Unser Versprechen an dich
              </h3>

              <ul className="space-y-6 text-sm text-[#2b2d2f]">
                <li className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#b89065]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#b89065]" />
                  </div>
                  <span>
                    <strong className="text-[#3d4a3e] font-semibold">Beobachten, nicht werten:</strong> Wir schauen uns deine Themen an, ohne zu urteilen. Alles darf da sein.
                  </span>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#b89065]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#b89065]" />
                  </div>
                  <span>
                    <strong className="text-[#3d4a3e] font-semibold">Auf Augenhöhe:</strong> Du behältst jederzeit die Regie. Wir sind Impulsgeber, du bist der Experte für dein Leben.
                  </span>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#b89065]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#b89065]" />
                  </div>
                  <span>
                    <strong className="text-[#3d4a3e] font-semibold">Ursachen finden:</strong> Wir arbeiten nicht nur an den Symptomen, sondern suchen behutsam nach der Wurzel.
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Values: Drei Schritte zu mehr Klarheit */}
        <div className="mb-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-xs uppercase tracking-[2px] text-[#b89065] font-semibold font-sans mb-2">
              Wie wir dich begleiten
            </h3>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#3d4a3e] font-normal">
              Drei Schritte zu mehr Klarheit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-transparent border-l-2 border-[#b89065]/40 hover:border-[#3d4a3e] pl-6 pr-4 py-4 transition-all duration-300 hover:translate-x-1 hover:bg-white/40"
              >
                <div className="text-xs uppercase tracking-[2px] text-[#b89065] font-semibold mb-1">
                  Schritt {idx + 1}
                </div>
                <h4 className="text-lg font-serif text-[#3d4a3e] font-medium mb-3">
                  {step.title}
                </h4>
                <p className="text-sm text-[#2b2d2f] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
