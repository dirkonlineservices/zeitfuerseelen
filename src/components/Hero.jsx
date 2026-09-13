import React from 'react';
import { Sparkles, Heart, Sun, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-amber-200/40 via-rose-100/30 to-amber-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/60 text-amber-900 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Einfühlsame Seelenbegleitung & Herzensraum</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif text-stone-900 leading-[1.2]">
              Finde deinen Weg zu <span className="text-amber-800 italic">innerer Ruhe</span>, Klarheit und neuer Kraft.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Herzlich willkommen bei <strong>Zeit für Seelen</strong>. Ich begleite dich achtsam und einfühlsam durch Lebensumbrüche, emotionale Herausforderungen und Momente der Neuorientierung. Schenke dir selbst die Zeit, die deine Seele braucht.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-900 text-amber-50 px-7 py-3.5 rounded-full font-medium shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <span>Persönliches Erstgespräch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-stone-700 border border-stone-300/80 px-6 py-3.5 rounded-full font-medium hover:border-amber-400 transition-all"
              >
                <span>Über mich erfahren</span>
              </a>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-amber-200/60 text-stone-700 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Ohne Wertung</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Individuell</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Achtsamer Raum</span>
              </div>
            </div>
          </div>

          {/* Profile Picture & Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-amber-300/50 via-rose-200/40 to-amber-200/30 blur-lg opacity-75 group-hover:opacity-100 transition-all duration-700" />
              
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white aspect-[4/5]">
                <img
                  src="/images/jacky-profil.jpeg"
                  alt="Jacqueline Schmetzer - Seelenbegleiterin"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to about photo if profil photo fails
                    e.currentTarget.src = '/images/jacky-ueber-mich.jpg';
                  }}
                />
                
                {/* Floating caption card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-amber-100 shadow-md">
                  <p className="font-serif text-stone-900 font-semibold text-base">Jacqueline Schmetzer</p>
                  <p className="text-xs text-amber-800 font-medium">Seelenbegleiterin & Wegweiserin</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
