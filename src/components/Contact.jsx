import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, HeartHandshake } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Anfrage Zeit für Seelen von ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone}\n\nNachricht:\n${formData.message}`
    );
    window.location.href = `mailto:kontakt@zeitfuerseelen.de?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-20 bg-[#f4f1ea] border-t border-[#3d4a3e]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xs uppercase tracking-[2px] text-[#b89065] font-semibold font-sans mb-2">
                Kontakt
              </h3>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#3d4a3e] font-normal mb-3">
                Schreibe mich an für ein erstes Kennenlernen
              </h2>
              <p className="text-sm text-[#5c6064] font-light leading-relaxed">
                Ich freue mich darauf, dich kennenzulernen. Sende mir einfach eine Nachricht über das Formular oder direkt per E-Mail.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-5 bg-white rounded-sm border-l-2 border-[#b89065] shadow-sm flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#b89065] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#b89065] font-semibold">E-Mail</div>
                  <a
                    href="mailto:kontakt@zeitfuerseelen.de"
                    className="text-sm font-medium text-[#3d4a3e] hover:text-[#b89065] transition-colors"
                  >
                    kontakt@zeitfuerseelen.de
                  </a>
                </div>
              </div>

              <div className="p-5 bg-white rounded-sm border-l-2 border-[#3d4a3e] shadow-sm flex items-start gap-4">
                <InstagramIcon className="w-5 h-5 text-[#3d4a3e] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#b89065] font-semibold">Instagram</div>
                  <a
                    href="https://www.instagram.com/zeit_fuer_die_seele"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#3d4a3e] hover:text-[#b89065] transition-colors"
                  >
                    @zeit_fuer_die_seele
                  </a>
                </div>
              </div>

              <div className="p-4 bg-[#3d4a3e]/5 rounded-sm text-xs text-[#5c6064] leading-relaxed flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-[#3d4a3e] shrink-0" />
                <span>Alle Termine und Anfragen finden in einem absolut geschützten und vertraulichen Rahmen statt.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-sm p-8 sm:p-10 shadow-[0_15px_35px_rgba(61,74,62,0.06)] border border-[#3d4a3e]/10">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#3d4a3e] mx-auto" />
                  <h3 className="text-2xl font-serif text-[#3d4a3e]">Herzlichen Dank!</h3>
                  <p className="text-sm text-[#5c6064] max-w-md mx-auto font-light">
                    Dein E-Mail-Programm wurde mit den vorausgefüllten Daten geöffnet. Ich freue mich auf unsere Verbindung.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-wider text-[#b89065] font-semibold underline mt-2"
                  >
                    Neue Nachricht senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#3d4a3e] font-semibold mb-1.5 font-sans">
                      Dein Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="z. B. Lisa Müller"
                      className="w-full px-4 py-3 text-sm bg-[#f4f1ea]/40 border border-[#3d4a3e]/20 rounded-sm focus:outline-none focus:border-[#b89065] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#3d4a3e] font-semibold mb-1.5 font-sans">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="deine@email.de"
                        className="w-full px-4 py-3 text-sm bg-[#f4f1ea]/40 border border-[#3d4a3e]/20 rounded-sm focus:outline-none focus:border-[#b89065] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#3d4a3e] font-semibold mb-1.5 font-sans">
                        Telefon (optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+49 ..."
                        className="w-full px-4 py-3 text-sm bg-[#f4f1ea]/40 border border-[#3d4a3e]/20 rounded-sm focus:outline-none focus:border-[#b89065] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#3d4a3e] font-semibold mb-1.5 font-sans">
                      Deine Nachricht *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Wobei darf ich dich begleiten?"
                      className="w-full px-4 py-3 text-sm bg-[#f4f1ea]/40 border border-[#3d4a3e]/20 rounded-sm focus:outline-none focus:border-[#b89065] focus:bg-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-premium-dark text-center !py-3.5 mt-2"
                  >
                    <span>Nachricht senden</span>
                    <Send className="w-4 h-4 ml-1" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
