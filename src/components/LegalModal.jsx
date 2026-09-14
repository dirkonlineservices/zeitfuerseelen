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
              <h4 className="font-serif text-base text-[#3d4a3e] font-semibold">Angaben gemäß § 5 DDG</h4>
              <p>
                <strong>Zeit für Seelen</strong><br />
                Jacqueline Schmetzer<br />
                Riedgrasweg 30<br />
                70599 Stuttgart<br />
                E-Mail: kontakt@zeitfuerseelen.de<br />
                Website: www.zeitfuerseelen.de
              </p>
              
              <h4 className="font-serif text-base text-[#3d4a3e] font-semibold mt-4">Technische Betreuung & Webentwicklung</h4>
              <p>
                <strong>DS Online Services</strong><br />
                Dirk Schmetzer<br />
                Riedgrasweg 30<br />
                70599 Stuttgart
              </p>

              <h4 className="font-serif text-base text-[#3d4a3e] font-semibold mt-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h4>
              <p>
                Jacqueline Schmetzer<br />
                Riedgrasweg 30<br />
                70599 Stuttgart
              </p>

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
              <h4 className="font-serif text-base text-[#3d4a3e] font-semibold">Allgemeine Geschäfts- und Honorarbedingungen</h4>
              
              <h5 className="font-medium text-[#3d4a3e] mt-2">1. Geltungsbereich & Vertragsgegenstand</h5>
              <p>
                Diese Geschäftsbedingungen gelten für alle Vereinbarungen, Einzelsitzungen und Begleitungen im Rahmen von Seelenbegleitung, Regressionshypnose und Rückführungen zwischen Jacqueline Schmetzer (Zeit für Seelen) und dem Klienten. Die angebotenen Leistungen stellen einen reinen Dienstleistungsvertrag gemäß § 611 BGB dar. Ein bestimmter Erfolg oder ein Heilversprechen wird weder vertraglich geschuldet noch in Aussicht gestellt.
              </p>

              <h5 className="font-medium text-[#3d4a3e] mt-3">2. Eigenverantwortung & Gesundheitshinweis</h5>
              <p>
                Die Sitzungen setzen eine normale physische und psychische Belastbarkeit voraus. Sie stellen keine medizinische, psychiatrische oder psychotherapeutische Behandlung dar und ersetzen eine solche keinesfalls. Der Klient handelt in jeder Phase eigenverantwortlich und entscheidet selbst über die Annahme der angebotenen Impulse.
              </p>

              <h5 className="font-medium text-[#3d4a3e] mt-3">3. Terminvereinbarung & Absageregelung (Ausfallhonorar)</h5>
              <p>
                Da für jede Sitzung ein individueller, zeitlich ungestörter Zeitrahmen reserviert wird, sind vereinbarte Termine verbindlich. Eine kostenfreie Terminabsage oder -verschiebung ist bis zu <strong>24 Stunden vor dem vereinbarten Termin</strong> möglich. Bei Absagen unter 24 Stunden vor dem Termin oder bei unentschuldigtem Nichterscheinen behält sich die Inhaberin vor, ein Ausfallhonorar in Höhe des veranschlagten Mindestsatzes (1,5 Stunden zu 70 €/Std.) in Rechnung zu stellen, sofern der Termin nicht kurzfristig anderweitig vergeben werden kann.
              </p>

              <h5 className="font-medium text-[#3d4a3e] mt-3">4. Vergütung & Zahlungsmodalitäten</h5>
              <p>
                Der Ausgleich richtet sich nach dem aktuellen Stundensatz von <strong>70 € pro Zeitstunde</strong> und wird transparent nach dem tatsächlich in Anspruch genommenen zeitlichen Rahmen berechnet (üblicherweise zwischen 1,5 und 2 Stunden). Die Zahlung erfolgt unmittelbar im Anschluss an die Sitzung in bar oder nach Absprache gegen Rechnungsstellung per Überweisung.
              </p>

              <h5 className="font-medium text-[#3d4a3e] mt-3">5. Vertraulichkeit & Schweigepflicht</h5>
              <p>
                Alle im Rahmen der Vorgespräche und Sitzungen geteilten persönlichen Informationen, Erlebnisse und Daten des Klienten werden streng vertraulich behandelt und Dritten zu keinem Zeitpunkt zugänglich gemacht.
              </p>

              <h5 className="font-medium text-[#3d4a3e] mt-3">6. Urheberrechte an Meditationen & Werken</h5>
              <p>
                Sämtliche von Jacqueline Schmetzer verfassten Meditationstexte, Skripte, Audio-Aufnahmen und Hörbücher sind urheberrechtlich geschützt. Die Nutzung ist ausschließlich für den persönlichen Gebrauch gestattet.
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
