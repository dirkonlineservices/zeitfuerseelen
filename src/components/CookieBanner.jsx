import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

const STORAGE_KEY = 'zeitfuerseelen_cookie_consent';

export default function CookieBanner({ onOpenLegal, forceOpen, onCloseForce }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    externalMedia: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem(STORAGE_KEY);
    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent);
        setPreferences(parsed);
        if (forceOpen) {
          setIsVisible(true);
          setShowDetails(true);
        }
      } catch (e) {
        setIsVisible(true);
      }
    } else {
      const timer = setTimeout(() => setIsVisible(true), 400);
      return () => clearTimeout(timer);
    }
  }, [forceOpen]);

  const saveConsent = (prefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
    setShowDetails(false);
    if (onCloseForce) onCloseForce();
  };

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      externalMedia: true,
      timestamp: new Date().toISOString(),
    });
  };

  const handleAcceptEssential = () => {
    saveConsent({
      essential: true,
      analytics: false,
      externalMedia: false,
      timestamp: new Date().toISOString(),
    });
  };

  const handleSaveCustom = () => {
    saveConsent({
      ...preferences,
      essential: true,
      timestamp: new Date().toISOString(),
    });
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      aria-modal="true"
      className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-5 flex justify-center pointer-events-none"
    >
      <div className="w-full max-w-2xl bg-[#212822] text-[#d8d2c4] rounded-lg shadow-2xl border border-[#b89065]/40 backdrop-blur-md p-5 sm:p-6 pointer-events-auto transition-all duration-300">
        
        {/* Header */}
        <div className="flex items-start gap-3.5 mb-3">
          <div className="w-9 h-9 rounded-full bg-[#b89065]/20 flex items-center justify-center shrink-0 text-[#b89065] border border-[#b89065]/30">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-display tracking-wide text-white">
              Privatsphäre & Cookie-Einstellungen
            </h3>
            <p className="text-xs text-[#a5aba5] mt-1 leading-relaxed">
              Wir nutzen Cookies und ähnliche Technologien, um unsere Website für dich optimal zu gestalten, die Sicherheit zu gewährleisten und die Funktionalität bereitzustellen. Du entscheidest selbst, welche Kategorien du erlauben möchtest.
            </p>
          </div>
        </div>

        {/* Detailed Options Accordion */}
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-white/10 space-y-3.5 text-xs">
            
            {/* 1. Essential */}
            <div className="flex items-start justify-between gap-3 p-2.5 rounded bg-white/5 border border-white/10">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 font-medium text-white">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#b89065]" />
                  <span>Technisch notwendig (essenziell)</span>
                  <span className="text-[10px] px-1.5 py-0.5 bg-[#3d4a3e] text-[#d8d2c4] rounded uppercase tracking-wider">Immer aktiv</span>
                </div>
                <p className="text-[11px] text-[#a5aba5] leading-relaxed">
                  Erforderlich für grundlegende Funktionen der Website wie Navigation, Sicherheitsfunktionen und die Speicherung deiner Datenschutzeinstellungen.
                </p>
              </div>
              <input
                type="checkbox"
                checked={true}
                disabled
                className="mt-1 accent-[#b89065] cursor-not-allowed opacity-80"
              />
            </div>

            {/* 2. Analytics */}
            <div className="flex items-start justify-between gap-3 p-2.5 rounded bg-white/5 border border-white/10 hover:border-[#b89065]/30 transition-colors">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 font-medium text-white">
                  <span>Komfort & Analyse</span>
                </div>
                <p className="text-[11px] text-[#a5aba5] leading-relaxed">
                  Ermöglicht uns, die Nutzung der Website anonymisiert zu verstehen, um Inhalte und Benutzerfreundlichkeit kontinuierlich zu verbessern.
                </p>
              </div>
              <input
                type="checkbox"
                id="analytics-toggle"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="mt-1 w-4 h-4 accent-[#b89065] cursor-pointer"
              />
            </div>

            {/* 3. External Media */}
            <div className="flex items-start justify-between gap-3 p-2.5 rounded bg-white/5 border border-white/10 hover:border-[#b89065]/30 transition-colors">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 font-medium text-white">
                  <span>Externe Medien & Dienste</span>
                </div>
                <p className="text-[11px] text-[#a5aba5] leading-relaxed">
                  Ermöglicht die Anzeige von Inhalten externer Plattformen (z. B. interaktive Karten, Audio-Player oder Instagram-Inhalte).
                </p>
              </div>
              <input
                type="checkbox"
                id="external-toggle"
                checked={preferences.externalMedia}
                onChange={(e) => setPreferences({ ...preferences, externalMedia: e.target.checked })}
                className="mt-1 w-4 h-4 accent-[#b89065] cursor-pointer"
              />
            </div>

          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          
          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="text-xs text-[#b89065] hover:text-[#d3ad83] transition-colors inline-flex items-center gap-1 self-start sm:self-center order-3 sm:order-1"
          >
            <span>{showDetails ? 'Details ausblenden' : 'Einstellungen anpassen'}</span>
            {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto order-1 sm:order-2 justify-end">
            {showDetails ? (
              <button
                type="button"
                onClick={handleSaveCustom}
                className="w-full sm:w-auto px-4 py-2 text-xs rounded border border-[#b89065] text-[#b89065] hover:bg-[#b89065]/10 font-medium transition-colors"
              >
                Auswahl speichern
              </button>
            ) : (
              <button
                type="button"
                onClick={handleAcceptEssential}
                className="w-full sm:w-auto px-3.5 py-2 text-xs rounded border border-white/20 text-[#d8d2c4] hover:border-white/40 hover:text-white transition-colors"
              >
                Nur essenzielle
              </button>
            )}

            <button
              type="button"
              onClick={handleAcceptAll}
              className="w-full sm:w-auto px-4 py-2 text-xs rounded bg-[#b89065] text-[#212822] font-semibold hover:bg-[#c9a377] transition-colors shadow-sm"
            >
              Alle akzeptieren
            </button>
          </div>

        </div>

        {/* Legal links footer note */}
        <div className="mt-3 text-[10px] text-[#7a827a] flex items-center gap-3">
          <span>Weitere Informationen in unserer</span>
          <button
            type="button"
            onClick={() => onOpenLegal && onOpenLegal('datenschutz')}
            className="underline hover:text-[#b89065] transition-colors"
          >
            Datenschutzerklärung
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => onOpenLegal && onOpenLegal('impressum')}
            className="underline hover:text-[#b89065] transition-colors"
          >
            Impressum
          </button>
        </div>

      </div>
    </div>
  );
}
