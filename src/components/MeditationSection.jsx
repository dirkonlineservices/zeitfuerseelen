import React, { useState } from 'react';
import { Play, Pause, Sparkles, Volume2 } from 'lucide-react';

export default function MeditationSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="meditation" className="py-20 bg-stone-900 text-amber-50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-800/40 text-amber-300 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Klang & Stille</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white">
            Ein Moment für deine Seele
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Schließe für einen kurzen Moment die Augen, atme tief ein und schenke dir ein paar Sekunden bewusster Achtsamkeit.
          </p>
        </div>

        {/* Meditation Card */}
        <div className="bg-stone-800/80 border border-stone-700/80 rounded-3xl p-6 sm:p-10 backdrop-blur-sm max-w-3xl mx-auto shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center justify-center shrink-0 shadow-lg hover:scale-105 active:scale-95 transition-all"
              aria-label={isPlaying ? 'Pause' : 'Abspielen'}
            >
              {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-1" />}
            </button>

            <div className="space-y-1 flex-1">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-medium">Kurz-Impuls</span>
              <h3 className="text-xl font-serif font-semibold text-white">
                Verbindung mit der inneren Natur
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm">
                „Atme tief in deinen Herzraum ein. Spüre, wie mit jedem Atemzug mehr Weite und Frieden einziehen darf.“
              </p>
            </div>

            <div className="flex items-center gap-2 text-stone-400 text-xs bg-stone-900/60 px-3 py-1.5 rounded-full border border-stone-700">
              <Volume2 className="w-4 h-4 text-amber-400" />
              <span>Achtsamkeit</span>
            </div>
          </div>

          {isPlaying && (
            <div className="mt-6 pt-6 border-t border-stone-700/60 text-xs text-amber-200/80 text-center animate-in fade-in">
              🌿 Nimm dir drei tiefe, bewusste Atemzüge. Lass die Schultern sinken und sei ganz im Jetzt.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
