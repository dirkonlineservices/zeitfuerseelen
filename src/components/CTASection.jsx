import React from 'react';

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-[#3d4a3e] to-[#252e26] py-20 px-4 sm:px-6 lg:px-8 text-center text-white relative overflow-hidden">
      {/* Decorative ambient aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#b89065]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto space-y-5 relative z-10">
        <h3 className="text-xs uppercase tracking-[2px] text-[#b89065] font-semibold font-sans">
          Dein Weg beginnt hier
        </h3>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white">
          Möchtest du dir diese Zeit nehmen?
        </h2>

        <p className="text-white/85 text-sm sm:text-base leading-relaxed font-light">
          Jede große Veränderung beginnt mit einem kleinen, mutigen Schritt. Wenn du das Bedürfnis nach Klärung spürst, laden wir dich herzlich zu einem unverbindlichen Kennenlernen ein. Wir freuen uns darauf, dir zuzuhören.
        </p>

        <div className="pt-4">
          <a
            href="#kontakt"
            className="btn-premium"
          >
            Unverbindlich anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
