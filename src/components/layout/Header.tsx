import { useEffect, useState } from 'react';
import { ArrowDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { BRAND, NAV } from '@/content/site';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { Logo } from './Logo';

const SECTION_IDS = NAV.map((n) => n.id);

export function Header() {
  const { progress, scrolled } = useScrollProgress();
  const active = useScrollSpy(SECTION_IDS);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#why"
        className="label-mono sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-lg focus:bg-btc focus:px-4 focus:py-2 focus:text-[#140c02]"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-void/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Logo withTagline className="shrink-0" />

          {/* Shown only where it fits without wrapping into the wordmark. */}
          <nav className="hidden items-center gap-5 xl:flex" aria-label="Sections">
            {NAV.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'flex items-center gap-1 py-1 text-center text-sm font-medium transition-colors duration-200',
                    isActive ? 'text-fg' : 'text-fg-soft hover:text-fg',
                  )}
                >
                  {item.label}
                  {item.soon && (
                    <span className="label-mono ml-1.5 rounded border border-btc/30 bg-btc/10 px-1 py-0.5 text-[9px] text-btc">
                      Soon
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <SocialLinks className="hidden md:flex" />

            <span className="hidden items-center gap-1.5 rounded-lg border border-line bg-panel px-2.5 py-1.5 font-mono text-xs leading-tight text-fg-muted sm:inline-flex">
              <span className="size-2 shrink-0 rounded-full bg-amber-500/80 animate-pulse" />
              <span className="block max-w-[5.5rem] text-center">{BRAND.status}</span>
            </span>

            <a
              href={BRAND.appUrl}
              className="group inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-btc px-3 py-1.5 text-xs leading-tight font-semibold text-black transition-colors hover:bg-btc-300 sm:px-4 sm:py-2 sm:text-sm"
            >
              <span className="block max-w-[3.4rem] text-center">Launch App</span>
              <ArrowDown className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-y-px" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid size-9 place-items-center rounded-lg border border-line bg-panel text-fg-muted transition-colors hover:text-fg xl:hidden"
            >
              {open ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
            </button>
          </div>
        </div>

        <div
          aria-hidden
          className="h-px origin-left bg-gradient-to-r from-btc-600 via-btc to-btc-300 transition-opacity duration-300"
          style={{ transform: `scaleX(${progress})`, opacity: scrolled ? 1 : 0 }}
        />
      </header>

      <div
        className={cn(
          'fixed inset-0 z-40 transition-opacity duration-300 xl:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-hidden
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-void/80 backdrop-blur-md"
        />
        <nav
          aria-label="Sections"
          className={cn(
            'absolute inset-x-0 top-16 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-ink/95 px-5 pt-4 pb-8 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-8',
            open ? 'translate-y-0' : '-translate-y-4',
          )}
        >
          {NAV.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-line/60 py-4 text-lede font-medium text-fg-muted transition-colors hover:text-fg"
            >
              <span className="flex items-center gap-3">
                <span className="label-mono w-6 text-btc/60">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </span>
              {item.soon && <span className="label-mono text-btc">Soon</span>}
            </a>
          ))}

          <SocialLinks
            variant="inline"
            className="mt-6 flex-wrap"
            onNavigate={() => setOpen(false)}
          />

          <div className="label-mono mt-6 flex items-center gap-2 text-fg-faint">
            <span className="size-1.5 rounded-full bg-btc" />
            {BRAND.status} · {BRAND.maxSupply} {BRAND.ticker}
          </div>
        </nav>
      </div>
    </>
  );
}
