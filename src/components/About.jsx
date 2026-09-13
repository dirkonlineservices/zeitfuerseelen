import React from 'react';

export default function About() {
  const methods = [
    {
      title: 'Achtsamkeit & Entspannung',
      desc: 'Wir beruhigen dein Nervensystem. Du lernst, im Hier und Jetzt anzukommen, den Atem als deinen Anker zu nutzen und Stress nicht nur zu bewältigen, sondern tiefgreifend zu lösen.',
    },
    {
      title: 'Hypnose & Unterbewusstsein',
      desc: 'Manchmal liegen die Blockaden tiefer, als unser Verstand reicht. In sicherer Trance reisen wir an die Wurzel deiner Themen, um alte Glaubenssätze sanft aufzulösen und neue, heilsame Impulse zu verankern.',
    },
    {
      title: 'Seelenbegleitung',
      desc: 'Wir blicken hinter die Fassade des Alltags. Gemeinsam finden wir heraus, was deine Seele gerade braucht, um wieder in ihre eigene Kraft, Klarheit und Lebensfreude zu kommen.',
    },
  ];

  return (
    <section id="ueber-mich" className="py-20 bg-[#f4f1ea] border-t border-[#3d4a3e]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Text Left */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-xs uppercase tracking-[2px] text-[#b89065] font-semibold font-sans">
              Mein Weg ist es, dir den Raum zu halten
            </h3>
            
            <h2 className="text-3xl sm:text-4xl font-display text-[#3d4a3e] font-normal leading-tight">
              Willkommen in deinem sicheren Hafen
            </h2>

            <p className="font-serif italic text-lg text-[#3d4a3e] leading-relaxed">
              Vielleicht bist du gerade hier, weil die Welt da draußen laut ist. Weil dein Kopf nicht zur Ruhe kommt, alte Muster dich festhalten oder du den tiefen Wunsch verspürst, dich selbst wieder spüren zu wollen.
            </p>

            <div className="space-y-4 text-[#2b2d2f] text-base font-light leading-relaxed">
              <p>
                Ich möchte dir eines vorab sagen: <strong className="font-semibold text-[#3d4a3e]">Du musst hier nichts leisten. Du darfst einfach sein.</strong>
              </p>
              <p>
                Mein Name ist <strong className="font-semibold text-[#3d4a3e]">Jacqueline</strong>, und ich sehe mich nicht nur als Coach, sondern vor allem als Weg- und Seelenbegleiterin. Meine Berufung ist es, dir einen geschützten, urteilsfreien Raum zu kreieren, in dem alles sein darf, was ist: deine Sorgen, deine Tränen, aber auch deine verborgene Kraft und deine Visionen.
              </p>
              <p>
                Ich halte diesen Raum für dich – mit absoluter Präsenz, Empathie und tiefer Ruhe.
              </p>
            </div>
          </div>

          {/* Image Right */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-xs sm:max-w-sm w-full">
              <div className="absolute -bottom-4 -left-4 w-36 h-36 bg-[#b89065]/15 rounded-full -z-0" />
              <img
                src="/images/jacky-ueber-mich.webp"
                alt="Portrait Jacqueline Schmetzer"
                className="relative z-10 w-full h-auto rounded-[4px_60px_4px_60px] shadow-[0_15px_35px_rgba(61,74,62,0.1)] border-2 border-[#b89065]/20 object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/images/jacky-profil.jpeg';
                }}
              />
            </div>
          </div>

        </div>

        {/* Methods Section */}
        <div className="bg-white rounded-sm p-8 sm:p-12 shadow-[0_15px_35px_rgba(61,74,62,0.05)] border border-[#3d4a3e]/5 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xs uppercase tracking-[2px] text-[#b89065] font-semibold mb-2 font-sans">
              Ganzheitlich, tief und nahbar
            </h3>
            <h2 className="text-3xl font-serif text-[#3d4a3e] font-normal">
              Wie ich arbeite
            </h2>
            <p className="text-sm text-[#5c6064] mt-2 font-light">
              Jeder Mensch bringt seine eigene, ganz persönliche Melodie mit. Deshalb kombiniere ich wissenschaftlich fundierte Methoden mit intuitiver, seelischer Arbeit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methods.map((method, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#f4f1ea] rounded-sm border-t-2 border-[#b89065] hover:-translate-y-1 transition-all"
              >
                <h4 className="font-serif text-lg text-[#3d4a3e] font-medium mb-3">
                  {method.title}
                </h4>
                <p className="text-sm text-[#2b2d2f] font-light leading-relaxed">
                  {method.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Blockquote */}
        <div className="max-w-3xl mx-auto text-center py-6">
          <h3 className="text-xs uppercase tracking-[2px] text-[#b89065] font-semibold mb-6 font-sans">
            Warum ich tue, was ich tue
          </h3>
          
          <blockquote className="font-serif italic text-xl sm:text-2xl text-[#3d4a3e] leading-relaxed relative px-6 sm:px-12 mb-8">
            „Erst wenn wir den Mut haben, die Augen zu schließen und nach innen zu blicken, finden wir die Antworten, die wir im Außen so verzweifelt gesucht haben.“
          </blockquote>

          <p className="text-sm text-[#5c6064] leading-relaxed font-light max-w-2xl mx-auto mb-8">
            Mein eigener Weg hat mich gelehrt, wie essenziell es ist, in stürmischen Zeiten jemanden an der Seite zu haben, der die Taschenlampe hält, wenn es dunkel scheint. Ich bin hier, um dich daran zu erinnern, wer du in deiner reinsten Essenz bist: wertvoll, stark und heil.
          </p>

          <a
            href="#kontakt"
            className="btn-premium-dark"
          >
            Kennenlerngespräch vereinbaren
          </a>
        </div>

      </div>
    </section>
  );
}
