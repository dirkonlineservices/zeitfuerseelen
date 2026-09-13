import React from 'react';
import { BookOpen, Headphones, Sparkles, Award, ShieldCheck, Heart, ExternalLink } from 'lucide-react';

export default function AuthorProfile() {
  const authorWorks = [
    {
      icon: Headphones,
      title: 'Geführte Meditationen',
      tag: 'Achtsamkeit & Atem',
      desc: 'Feinfühlig geschriebene und gesprochene Meditationen, die das vegetative Nervensystem beruhigen, tiefe Erdung schenken und das Gedankenkarussell sanft zum Stillstand bringen.',
      examples: 'Naturreisen, Herzraum-Meditationen, Abend-Rituale',
    },
    {
      icon: BookOpen,
      title: 'Hörbücher & Seelenreisen',
      tag: 'Tiefgang & Inspiration',
      desc: 'Geschichten und auditive Reflexionen, die berühren. Sie laden dazu ein, innezuhalten, die eigene Lebensgeschichte mit Mitgefühl zu betrachten und neue seelische Weite zu erfahren.',
      examples: 'Geschichten für die Seele, auditive Rückzugsorte',
    },
    {
      icon: Sparkles,
      title: 'Transformative Selbsthypnosen',
      tag: 'Unterbewusstsein & Trance',
      desc: 'Präzise konzipierte Autosuggestionen und Trancetexte, die tief im Unterbewusstsein ansetzen. Entwickelt, um limitierende Glaubenssätze aufzulösen und innere Kraftquellen zu aktivieren.',
      examples: 'Glaubenssatz-Transformation, Resilienz, Urvertrauen',
    },
  ];

  const eeatSignals = [
    {
      icon: Award,
      title: 'Echte Erfahrung (Experience)',
      desc: 'Gelebte Praxis durch kontinuierliche Klientenbegleitung, fundiertes Wissen über Trance-Zustände und tägliche Meditationspraxis.',
    },
    {
      icon: BookOpen,
      title: 'Fachliche Expertise (Expertise)',
      desc: 'Spezialisierung auf hypnotische Sprachmuster, suggestive Bildreisen und achtsamkeitsbasierte Tiefenentspannung.',
    },
    {
      icon: Sparkles,
      title: 'Autorenschaft & Autorität (Authoritativeness)',
      desc: 'Verfasserin zahlreicher Audio-Werke und offizielle Schöpferin der Meditations- & Hypnoseinhalte für Flow der Stille.',
    },
    {
      icon: ShieldCheck,
      title: 'Ethisches Vertrauen (Trustworthiness)',
      desc: 'Verantwortungsvoller Umgang mit Trance-Techniken, transparente Kommunikation auf Augenhöhe und Verzicht auf Heilversprechen.',
    },
  ];

  return (
    <section id="autorin" className="py-20 bg-white border-t border-[#3d4a3e]/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#b89065]/15 border border-[#b89065]/30 text-[#3d4a3e] text-xs uppercase tracking-[2px] font-semibold font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#b89065]" />
            <span>E-E-A-T Autorenprofil</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-[#3d4a3e] font-normal">
            Über die Autorin
          </h2>
          <p className="font-serif italic text-lg text-[#5c6064] leading-relaxed">
            Jacqueline Schmetzer – Worte, die berühren, Klänge, die heilen, und Räume, die transformieren.
          </p>
        </div>

        {/* Author Bio & Identity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Portrait Left */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm w-full">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#b89065]/15 rounded-full -z-0" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-[#3d4a3e]/10 rounded-full -z-0" />
              
              <div className="relative z-10 rounded-[4px_60px_4px_60px] overflow-hidden border-2 border-[#b89065]/30 shadow-[0_15px_35px_rgba(61,74,62,0.08)] bg-white aspect-[3/4]">
                <img
                  src="/images/jacky-profil.jpeg"
                  alt="Jacqueline Schmetzer – Autorin für Meditationen, Hörbücher und Selbsthypnosen"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = '/images/jacky-ueber-mich.webp';
                  }}
                />
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-sm border-l-2 border-[#b89065] shadow-sm">
                  <span className="font-serif text-[#3d4a3e] font-semibold text-base block">
                    Jacqueline Schmetzer
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#b89065] font-sans font-medium block mt-0.5">
                    Autorin & Seelenbegleiterin
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Right */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-2xl sm:text-3xl font-serif text-[#3d4a3e] font-normal leading-snug">
              Worte als Brücke zwischen Verstand und Seele
            </h3>

            <div className="space-y-4 text-[#2b2d2f] text-base font-light leading-relaxed">
              <p>
                Hinter jeder Meditation und jedem Hypnosetext steht die Überzeugung, dass Sprache eine heilsame Schwingung besitzt. Als Autorin widmet sich <strong>Jacqueline Schmetzer</strong> der Kunst, durch präzise gewählte Worte, rhythmische Sprechpausen und bildhafte Metaphern einen direkten Zugang zum Unterbewusstsein zu schaffen.
              </p>
              <p>
                Ihre Texte entstehen aus einer tiefen Verbindung zur menschlichen Psyche und praktischer Erfahrung in der Begleitungsarbeit. Sie schreibt keine abstrakten Ratgeber, sondern <strong>lebendige, fühlbare Seelenreisen</strong>, die den Hörer an die Hand nehmen – weg vom Leistungsdruck, hin zu innerer Sicherheit und Gelassenheit.
              </p>
              <p>
                Neben der individuellen 1:1 Arbeit in ihrer Praxis bringt sie ihre Leidenschaft in Audioformate ein, die täglich von Menschen für ihre persönliche Auszeit und Transformation genutzt werden.
              </p>
            </div>

            {/* Core Competency Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-sm bg-[#f4f1ea] border border-[#b89065]/30 text-xs text-[#3d4a3e] font-medium">
                Geführte Meditationen
              </span>
              <span className="px-3 py-1 rounded-sm bg-[#f4f1ea] border border-[#b89065]/30 text-xs text-[#3d4a3e] font-medium">
                Hörbücher & Seelenreisen
              </span>
              <span className="px-3 py-1 rounded-sm bg-[#f4f1ea] border border-[#b89065]/30 text-xs text-[#3d4a3e] font-medium">
                Transformative Selbsthypnosen
              </span>
              <span className="px-3 py-1 rounded-sm bg-[#f4f1ea] border border-[#b89065]/30 text-xs text-[#3d4a3e] font-medium">
                Trance- & Suggestionstexte
              </span>
            </div>
          </div>

        </div>

        {/* The 3 Works Cards */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-xs uppercase tracking-[2px] text-[#b89065] font-semibold font-sans mb-2">
              Schwerpunkte der Autorenschaft
            </h3>
            <h2 className="text-3xl font-serif text-[#3d4a3e] font-normal">
              Ihre Werke & Schöpfungen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {authorWorks.map((work, idx) => {
              const Icon = work.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f4f1ea] rounded-sm p-8 border-t-3 border-[#b89065] shadow-[0_10px_30px_rgba(61,74,62,0.04)] hover:-translate-y-1 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-xs">
                      <Icon className="w-6 h-6 text-[#b89065]" />
                    </div>

                    <span className="text-[11px] uppercase tracking-wider text-[#b89065] font-semibold block mb-1">
                      {work.tag}
                    </span>

                    <h3 className="text-xl font-serif text-[#3d4a3e] font-medium mb-3">
                      {work.title}
                    </h3>

                    <p className="text-sm text-[#2b2d2f] font-light leading-relaxed mb-4">
                      {work.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#3d4a3e]/10 text-xs text-[#5c6064] italic">
                    Themen: {work.examples}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partnership / Integration Box with Flow der Stille */}
        <div className="bg-gradient-to-br from-[#fbf9f4] to-[#f4f1ea] rounded-sm p-8 sm:p-12 border-2 border-[#b89065]/30 shadow-[0_15px_35px_rgba(61,74,62,0.06)] mb-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Logo / Badge Left */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 bg-white rounded-sm border border-[#b89065]/20 shadow-xs">
              <img
                src="/images/flow-der-stille-logo.png"
                alt="Flow der Stille Logo"
                className="h-16 w-auto object-contain mb-4"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-serif text-lg text-[#3d4a3e] font-semibold block">
                Flow der Stille
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#b89065] block mt-0.5 font-sans">
                Meditation & Seelenruhe
              </span>
              <a
                href="https://www.flow-der-stille.de"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#3d4a3e] hover:text-[#b89065] underline"
              >
                <span>flow-der-stille.de</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#b89065] font-semibold">
                <Heart className="w-4 h-4" />
                <span>Schöpfungsraum & Partnerschaft</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-serif text-[#3d4a3e] font-normal">
                Verbindung mit „Flow der Stille“
              </h3>

              <p className="text-sm text-[#2b2d2f] font-light leading-relaxed">
                Jacqueline Schmetzer ist die kreative Autorin hinter zahlreichen geführten Meditationen, beruhigenden Hörbüchern und Selbsthypnosen auf der Plattform <strong>Flow der Stille</strong> (<a href="https://www.flow-der-stille.de" target="_blank" rel="noopener noreferrer" className="text-[#3d4a3e] font-semibold underline hover:text-[#b89065]">flow-der-stille.de</a>).
              </p>
              
              <p className="text-sm text-[#5c6064] font-light leading-relaxed">
                Hier fließen ihre Seelentexte mit beruhigenden Klanglandschaften zusammen, um Menschen zu jeder Tages- und Nachtzeit einen sicheren Raum zum Durchatmen, Loslassen und Heilen zu schenken.
              </p>

              <div className="pt-2">
                <a
                  href="https://www.flow-der-stille.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium-dark !py-2.5 !px-6 !text-xs inline-flex items-center gap-2"
                >
                  <span>Zu Flow der Stille wechseln</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* E-E-A-T Quality Standards Grid */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xs uppercase tracking-[2px] text-[#b89065] font-semibold font-sans mb-1.5">
              Qualitätsversprechen & E-E-A-T Kriterien
            </h3>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#3d4a3e] font-normal">
              Transparenz, Kompetenz & Vertrauen
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eeatSignals.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-[#f4f1ea]/60 rounded-sm border border-[#b89065]/20 hover:bg-[#f4f1ea] transition-colors"
                >
                  <Icon className="w-6 h-6 text-[#b89065] mb-3" />
                  <h4 className="font-serif text-sm text-[#3d4a3e] font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5c6064] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
