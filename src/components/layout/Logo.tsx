import { cn } from '@/lib/cn';
import { BRAND } from '@/content/site';

export function Logo({ withTagline = false, className }: { withTagline?: boolean; className?: string }) {
  return (
    <a href="#top" className={cn('group flex items-center gap-3', className)} aria-label={BRAND.name}>
      <span className="relative grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-b from-btc-300 to-btc-600 shadow-[0_6px_20px_-6px_rgba(247,147,26,0.8)] transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="size-4 text-[#120a01]" fill="currentColor" aria-hidden>
          <path d="M17 10.2c.25-1.7-1.05-2.6-2.83-3.2l.58-2.32-1.41-.35-.56 2.26c-.37-.09-.75-.18-1.13-.27l.57-2.27-1.41-.35-.58 2.32-2.9-.72-.37 1.51s1.06.24 1.04.25c.58.15.68.53.66.83l-1.57 6.3c-.07.17-.25.43-.65.33.01.02-1.04-.26-1.04-.26l-.7 1.62 2.73.68-.58 2.35 1.41.35.58-2.32c.39.1.76.2 1.13.29l-.58 2.31 1.41.35.58-2.34c2.41.46 4.22.27 4.98-1.9.61-1.75-.03-2.76-1.29-3.42.92-.21 1.61-.82 1.79-2.07Zm-3.2 4.52c-.44 1.75-3.39.8-4.35.56l.78-3.12c.96.24 4.03.71 3.57 2.56Zm.44-4.55c-.4 1.59-2.86.78-3.66.58l.71-2.83c.8.2 3.37.57 2.95 2.25Z" />
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span className="flex items-center gap-2">
          <span className="text-base leading-tight font-bold tracking-tight">
            <span className="block">BITCOIN</span>
            <span className="block">STRATEGY</span>
          </span>
          <span className="label-mono hidden rounded border border-line-strong bg-panel-2 px-1.5 py-0.5 text-[9px] text-btc sm:inline">
            {BRAND.ticker}
          </span>
        </span>
        {withTagline && (
          <span className="label-mono mt-1 block text-[10px] text-fg-muted">
            {BRAND.tagline}
          </span>
        )}
      </span>
    </a>
  );
}
