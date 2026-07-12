import { LogoSquare } from './logo';

export function OnboardingLeftPanel() {
  return (
    <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden bg-[#19889d] p-10">
      <style>{`
        @keyframes komfour-drift {
          from { background-position: 0 0, 0 0; }
          to { background-position: 160px 160px, 160px 160px; }
        }
        @keyframes komfour-pulse {
          from { transform: scale(1); }
          to { transform: scale(1.06); }
        }
        .komfour-pattern {
          background-image:
            repeating-linear-gradient(45deg, rgba(255,255,255,0.07) 0 2px, transparent 2px 80px),
            repeating-linear-gradient(-45deg, rgba(255,255,255,0.07) 0 2px, transparent 2px 80px);
          animation: komfour-drift 18s linear infinite;
        }
        .komfour-logo-pulse {
          animation: komfour-pulse 4s ease-in-out infinite alternate;
        }
      `}</style>
      <div className="komfour-pattern pointer-events-none absolute inset-0" />
      <LogoSquare className="komfour-logo-pulse relative size-20 shadow-lg" />
      <h1 className="relative mt-8 text-center text-3xl font-medium text-white">
        komFOUR Analytics
      </h1>
      <p className="relative mt-3 max-w-md text-center text-white/90 font-medium">
        Web- und Produkt-Analytics
      </p>
      <p className="relative mt-2 max-w-md text-center text-white/70">
        Erfassung des Nutzerverhaltens auf Webseiten ohne die Speicherung von
        Cookies. Es dient dazu, Marketingdaten zu messen, wenn Nutzer Cookies
        ablehnen oder Browser sie blockieren, und hilft, die Anforderungen der
        DSGVO zu erfüllen.
      </p>
    </div>
  );
}
