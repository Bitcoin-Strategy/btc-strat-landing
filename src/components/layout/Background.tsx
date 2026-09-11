// Grain keeps large dark areas from banding on cheap panels.
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-void" />

      <div
        className="absolute -top-[22vh] left-1/2 h-[70vh] w-[130vw] -translate-x-1/2 opacity-70"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(247,147,26,0.16) 0%, rgba(247,147,26,0.05) 42%, transparent 72%)',
        }}
      />

      <div
        className="absolute top-[120vh] left-[8%] h-[60vh] w-[60vw] opacity-45 animate-[float-slow_18s_ease-in-out_infinite]"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(247,147,26,0.10) 0%, transparent 70%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage:
            'radial-gradient(120% 80% at 50% 0%, black 0%, rgba(0,0,0,0.55) 45%, transparent 85%)',
          WebkitMaskImage:
            'radial-gradient(120% 80% at 50% 0%, black 0%, rgba(0,0,0,0.55) 45%, transparent 85%)',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 40%, transparent 40%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.16] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
