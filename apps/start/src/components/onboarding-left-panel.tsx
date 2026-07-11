import { LogoSquare } from './logo';

export function OnboardingLeftPanel() {
  return (
    <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#083344] p-10">
      <LogoSquare className="size-20 shadow-lg" />
      <h1 className="mt-8 text-center text-3xl font-medium text-white">
        komFOUR Analytics
      </h1>
      <p className="mt-3 max-w-sm text-center text-white/60">
        Web- und Produkt-Analytics, selbst gehostet und unter eigener
        Kontrolle.
      </p>
    </div>
  );
}
