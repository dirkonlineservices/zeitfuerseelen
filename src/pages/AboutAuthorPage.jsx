import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Headphones, BookOpen, Sparkles, Award, ShieldCheck, Heart, ExternalLink, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function AboutAuthorPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const qualityStandards = [
    {
      icon: Award,
      title: 'Gelebte Praxis & Erfahrung',
      desc: 'Langjährige Erfahrung in der einfühlsamen Klientenbegleitung, fundiertes Wissen über Trance-Zustände und tägliche eigene Meditationspraxis.',
    },
    {
      icon: BookOpen,
      title: 'Fachliche Expertise',
      desc: 'Gezielte Spezialisierung auf hypnotische Sprachmuster, suggestive Bildreisen, Neuro-Entspannung und achtsamkeitsbasierte Prozessbegleitung.',
    },
    {
      icon: Sparkles,
      title: 'Etablierte Urheberschaft',
      desc: 'Verfasserin zahlreicher Audio-Werke und offizielle Schöpferin der Meditations- & Hypnoseinhalte für die Plattform Flow der Stille.',
    },
    {
      icon: ShieldCheck,
      title: 'Ethisches Vertrauen',
      desc: 'Verantwortungsvoller, sicherer Umgang mit Trance-Techniken, transparente Kommunikation auf Augenhöhe und strikter Verzicht auf Heilversprechen.',
    },
  ];

  return (
    <div className="bg-[#f4f1ea] py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumb Back Link */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#b89065] font-semibold hover:text-[#3d4a3e] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zur Startseite</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#b89065]/15 border border-[#b89065]/30 text-[#3d4a3e] text-xs uppercase tracking-[2px] font-semibold font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#b89065]" />
            <span>Über mich & Autorenprofil</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-[#3d4a3e] font-normal leading-tight">
            Jacqueline Schmetzer
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-[#3d4a3e] leading-relaxed">
            Seelenbegleiterin & Autorin für geführte Meditationen, Hörbücher und Selbsthypnosen
          </p>
        </div>

        {/* Bio Card Grid */}
        <div className="bg-white rounded-sm p-8 sm:p-12 shadow-[0_15px_35px_rgba(61,74,62,0.05)] border border-[#b89065]/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Left */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-xs sm:max-w-sm w-full">
                <div className="absolute -top-3 -right-3 w-32 h-32 bg-[#b89065]/15 rounded-full -z-0" />
                <div className="absolute -bottom-3 -left-3 w-40 h-40 bg-[#3d4a3e]/10 rounded-full -z-0" />
                
                <img
                  src="/images/jacky-ueber-mich.webp"
                  alt="Jacqueline Schmetzer"
                  className="relative z-10 w-full h-auto rounded-[4px_60px_4px_60px] shadow-[0_15px_35px_rgba(61,74,62,0.1)] border-2 border-[#b89065]/30 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/jacky-profil.jpeg';
                  }}
                />
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#3d4a3e] font-normal leading-snug">
                Willkommen in deinem sicheren Hafen
              </h2>

              <p className="font-serif italic text-base sm:text-lg text-[#5c6064] leading-relaxed">
                „Du musst hier nichts leisten. Du darfst einfach sein.“
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[#2b2d2f] font-light leading-relaxed">
                <p>
                  Vielleicht bist du gerade hier, weil die Welt da draußen laut ist. Weil dein Kopf nicht zur Ruhe kommt, alte Muster dich festhalten oder du den tiefen Wunsch verspürst, dich selbst wieder spüren zu wollen.
                </p>
                <p>
                  Mein Name ist <strong>Jacqueline</strong>, und ich sehe mich nicht nur als Coach, sondern vor allem als Weg- und Seelenbegleiterin. Meine Berufung ist es, dir einen geschützten, urteilsfreien Raum zu kreieren, in dem alles sein darf, was ist: deine Sorgen, deine Tränen, aber auch deine verborgene Kraft und deine Visionen.
                </p>
                <p>
                  Ich halte diesen Raum für dich – mit absoluter Präsenz, Empathie und tiefer Ruhe.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Creative Works */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xs uppercase tracking-[2px] text-[#b89065] font-semibold font-sans">
              Schwerpunkte der Autorenschaft
            </h3>
            <h2 className="text-3xl font-serif text-[#3d4a3e] font-normal">
              Ihre Werke & Schöpfungsbereiche
            </h2>
            <p className="text-sm text-[#5c6064] font-light">
              Wie Worte, Klang und Trance zusammenwirken, um emotionale Knoten sanft zu lösen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {authorWorks.map((work, idx) => {
              const Icon = work.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-sm p-8 border-t-3 border-[#b89065] shadow-[0_10px_30px_rgba(61,74,62,0.04)] hover:-translate-y-1 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-[#f4f1ea] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-[#b89065]" />
                    </div>

                    <span className="text-[11px] uppercase tracking-wider text-[#b89065] font-semibold block mb-1">
                      {work.tag}
                    </span>

                    <h4 className="text-xl font-serif text-[#3d4a3e] font-medium mb-3">
                      {work.title}
                    </h4>

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

        {/* Flow der Stille Collaboration Box */}
        <div className="bg-gradient-to-br from-[#fbf9f4] to-[#f4f1ea] rounded-sm p-8 sm:p-12 border-2 border-[#b89065]/30 shadow-[0_15px_35px_rgba(61,74,62,0.06)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Logo Left */}
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

            {/* Text Right */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#b89065] font-semibold">
                <Heart className="w-4 h-4" />
                <span>Schöpfungsraum & Partnerschaft</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-serif text-[#3d4a3e] font-normal">
                Verbindung mit „Flow der Stille“
              </h3>

              <p className="text-sm sm:text-base text-[#2b2d2f] font-light leading-relaxed">
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

        {/* Quality Standards (Without EEAT acronym) */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-xs uppercase tracking-[2px] text-[#b89065] font-semibold font-sans">
              Qualitätsversprechen & Haltung
            </h3>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#3d4a3e] font-normal">
              Transparenz, Kompetenz & Achtsamkeit
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStandards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-sm border border-[#b89065]/20 shadow-xs hover:border-[#3d4a3e] transition-colors"
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

        {/* Philosophy Blockquote */}
        <div className="max-w-3xl mx-auto text-center py-6">
          <blockquote className="font-serif italic text-xl sm:text-2xl text-[#3d4a3e] leading-relaxed px-6 sm:px-12 mb-8">
            „Erst wenn wir den Mut haben, die Augen zu schließen und nach innen zu blicken, finden wir die Antworten, die wir im Außen so verzweifelt gesucht haben.“
          </blockquote>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#kontakt"
              className="btn-premium-dark"
            >
              Kennenlerngespräch anfragen
            </a>

            <Link
              to="/"
              className="inline-flex items-center justify-center py-3.5 px-7 border border-[#b89065] text-[#b89065] hover:bg-[#b89065] hover:text-white transition-all text-xs uppercase tracking-[2px] font-semibold rounded-sm"
            >
              Zur Startseite
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
