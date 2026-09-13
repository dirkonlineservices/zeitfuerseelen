import React from 'react';
import { X } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
          <h3 className="font-serif text-xl font-bold text-stone-900">
            {type === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-stone-600 leading-relaxed">
          {type === 'impressum' ? (
            <>
              <h4 className="font-semibold text-stone-900">Angaben gemäß § 5 TMG</h4>
              <p>
                <strong>Zeit für Seelen</strong><br />
                Jacqueline Schmetzer<br />
                E-Mail: kontakt@zeitfuerseelen.de<br />
              </p>
              <h4 className="font-semibold text-stone-900 mt-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h4>
              <p>Jacqueline Schmetzer</p>
              <h4 className="font-semibold text-stone-900 mt-4">Haftung für Inhalte und Links</h4>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
              <h4 className="font-semibold text-stone-900 mt-4">Rechtlicher Hinweis zur Seelenbegleitung</h4>
              <p>
                Die angebotene Seelenbegleitung, Beratung und Meditationen dienen der Aktivierung der Selbstheilungskräfte, Persönlichkeitsentfaltung und geistigen Neuorientierung. Sie ersetzen keine ärztliche, psychotherapeutische oder heilkundliche Diagnose oder Behandlung.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-semibold text-stone-900">1. Datenschutz auf einen Blick</h4>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein großes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <h4 className="font-semibold text-stone-900 mt-4">2. Datenerfassung auf dieser Website</h4>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben zur Bearbeitung der Anfrage zweckgebunden gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <h4 className="font-semibold text-stone-900 mt-4">3. Ihre Rechte</h4>
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-stone-800 hover:bg-stone-900 text-white text-xs font-medium"
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
}
