import React from 'react';
import { Compass, Sparkles, Moon, Sun, Flower2, MessageCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Compass,
      title: 'Individuelle Seelenbegleitung',
      description: 'Einfühlsame 1:1 Gespräche zur Klärung deiner Lebenssituation, Bewältigung von Krisen und Stärkung deines Selbstvertrauens.',
      highlight: '60 - 90 Minuten',
      tag: 'Kernangebot'
    },
    {
      icon: Sparkles,
      title: 'Intuitive Impulse & Orientierung',
      description: 'Klarheit für deine nächsten Schritte durch intuitive Kartenlegungen und tiefes Reflektieren deiner inneren Prozesse.',
      highlight: 'Klarheit & Perspektive',
      tag: 'Impuls-Session'
    },
    {
      icon: Moon,
      title: 'Achtsamkeit & geführte Meditationen',
      description: 'Lerne abzuschalten, das Gedankenkarussell anzuhalten und dich in deinem eigenen Körper wieder geborgen und ruhig zu fühlen.',
      highlight: 'Tiefe Entspannung',
      tag: 'Seelenruhe'
    },
    {
      icon: Flower2,
      title: 'Energetischer Seelenraum',
      description: 'Sanfte Harmonisierung deiner Energiezentren und das Lösen seelischer Blockaden in einer geschützten, warmen Atmosphäre.',
      highlight: 'Balance & Harmonie',
      tag: 'Wohlbefinden'
    }
  ];

  return (
    <section id="services" className="py-20 bg-amber-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-medium">
            <Sun className="w-3.5 h-3.5 text-amber-700" />
            <span>Für deinen persönlichen Weg</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900">
            Meine Begleitungsangebote
          </h2>
          <p className="text-stone-600 text-base">
            Jede Seele und jeder Mensch ist einzigartig. Deshalb passe ich meine Unterstützung ganz individuell an deine aktuellen Bedürfnisse an.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-amber-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100/70 text-amber-800 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-stone-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-amber-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="font-medium text-amber-900">{item.highlight}</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-amber-800 font-semibold hover:text-amber-950"
                  >
                    <span>Anfragen</span>
                    <MessageCircle className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
