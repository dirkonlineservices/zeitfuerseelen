import React from 'react';
import { X } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  const titles = {
    impressum: 'Impressum',
    datenschutz: 'Datenschutzerklärung',
    agb: 'Allgemeine Geschäftsbedingungen (AGB)',
    widerruf: 'Widerrufsbelehrung',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-sm max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-[#3d4a3e]/10 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#3d4a3e]/10 bg-[#f4f1ea]">
          <h3 className="font-serif text-xl font-normal text-[#3d4a3e]">
            {titles[type] || 'Information'}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-black/5 text-[#3d4a3e] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#2b2d2f] leading-relaxed font-light">
          {type === 'impressum' && (
            <>
              <h4 className="font-serif text-base text-[#3d4a3e] font-semibold">Angaben gemäß § 5 TMG</h4>
              <p>
                <strong>Zeit für Seelen</strong><br />
                Jacqueline Schmetzer<br />
                E-Mail: kontakt@zeitfuerseelen.de<br />
                Website: www.zeitfuerseelen.de
              </p>
              <h4 className="font-serif text-base text-[#3d4a3e] font-semibold mt-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h4>
              <p>Jacqueline Schmetzer</p>
              <h4 className="font-serif text-base text-[#3d4a3e] font-semibold mt-4">Rechtlicher Hinweis zur Seelenbegleitung & Hypnose</h4>
              <p>
                Die angebotene Seelenbegleitung, Regressionshypnose und Rückführungen dienen der Selbstreflexion, Aktivierung der Selbstheilungskräfte und geistig-seelischen Klärung. Sie ersetzen keine ärztliche, psychotherapeutische oder heilkundliche Diagnose oder Behandlung. Es werden keine Heilversprechen abgegeben.
              </p>
            </>
          )}

          {type === 'datenschutz' && (
            <>
              <h4 className="font-serif text-base text-[#3d4a3e] font-semibold">1. Datenschutz auf einen Blick</h4>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung.
              </p>
              <h4 className="font-serif text-base text-[#3d4a3e] font-semibold mt-4">2. Datenerfassung auf dieser Website</h4>
              <p>
                Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, werden Ihre übermittelten Daten einschließlich Ihrer Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir niemals ohne Ihre ausdrückliche Einwilligung weiter.
              </p>
              <h4 className="font-serif text-base text-[#3d4a3e] font-semibold mt-4">3. Ihre Rechte</h4>
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
              </p>
            </>
          )}

          {type === 'agb' && (
            <>
              <h4 className="font-serif text-base text-[#3d4a3e] font-semibold">Allgemeine Geschäftsbedingungen</h4>
              <p>
                <strong>1. Geltungsbereich:</strong> Diese AGB gelten für alle Vereinbarungen und Einzelsitzungen im Rahmen von Seelenbegleitung, Regressionshypnose und Rückführungen zwischen Jacqueline Schmetzer (Zeit für Seelen) und dem Klienten.
              </p>
              <p>
                <strong>2. Eigenverantwortung:</strong> Die Teilnahme an den Sitzungen setzt normale psychische und physische Belastbarkeit voraus. Der Klient übernimmt die volle Eigenverantwortung für seine Erfahrungen und Entscheidungen.
              </p>
              <p>
                <strong>3. Terminabsagen:</strong> Vereinbarte Termine können bis zu 24 Stunden vor dem Termin kostenfrei abgesagt oder verschoben werden. Bei kurzfristigeren Absagen kann das Ausfallhonorar in Rechnung gestellt werden.
              </p>
            </>
          )}

          {type === 'widerruf' && (
            <>
              <h4 className="font-serif text-base text-[#3d4a3e] font-semibold">Widerrufsbelehrung</h4>
              <p>
                Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
              </p>
              <p>
                Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses. Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Jacqueline Schmetzer, E-Mail: kontakt@zeitfuerseelen.de) mittels einer eindeutigen Erklärung über Ihren Entschluss informieren.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#f4f1ea] border-t border-[#3d4a3e]/10 flex justify-end">
          <button
            onClick={onClose}
            className="btn-premium-dark !py-2 !px-5 !text-xs"
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
}
