import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

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
    <section id="contact" className="py-20 bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
                Kontakt & Terminvereinbarung
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-stone-900">
                Lass uns ins Gespräch kommen
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Du möchtest ein unverbindliches Kennenlerngespräch vereinbaren oder hast Fragen zu meinen Angeboten? Schreib mir gerne eine Nachricht oder ruf mich an.
              </p>
            </div>

            <div className="space-y-4 pt-4 text-sm text-stone-700">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60">
                <Mail className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">E-Mail</div>
                  <a href="mailto:kontakt@zeitfuerseelen.de" className="text-amber-900 hover:underline">
                    kontakt@zeitfuerseelen.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60">
                <MapPin className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">Ort & Beratung</div>
                  <div>Persönlich vor Ort & flexible Online-Sitzungen via Video</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-100/40 border border-amber-200/50 text-xs text-stone-600">
              🔒 Alle Gespräche und Anfragen werden streng vertraulich und mit größter Achtsamkeit behandelt.
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-amber-100 shadow-md">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-2xl font-serif text-stone-900 font-semibold">Vielen Dank für deine Nachricht!</h3>
                  <p className="text-stone-600 text-sm max-w-md mx-auto">
                    Dein E-Mail-Programm wurde geöffnet. Ich melde mich so schnell wie möglich persönlich bei dir.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block mt-4 text-xs font-medium text-amber-800 underline"
                  >
                    Neue Nachricht schreiben
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1.5">
                      Dein Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="z. B. Maria Musterfrau"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-sm bg-stone-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1.5">
                        E-Mail-Adresse *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="maria@beispiel.de"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-sm bg-stone-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1.5">
                        Telefon (optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+49 ..."
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-sm bg-stone-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1.5">
                      Deine Nachricht oder dein Anliegen *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Wobei darf ich dich begleiten?"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-sm bg-stone-50/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-900 text-amber-50 py-3.5 px-6 rounded-xl font-medium shadow-md hover:shadow-lg transition-all active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Nachricht absenden</span>
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
