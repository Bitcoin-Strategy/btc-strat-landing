import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Pill({
  children,
  tone = 'neutral',
  className,
}: {
  children: ReactNode;
  tone?: 'neutral' | 'btc' | 'mint';
  className?: string;
}) {
  return (
    <span
      className={cn(
        'label-mono inline-flex shrink-0 items-center gap-1.5 rounded-md border px-2 py-1',
        tone === 'btc' && 'border-btc/30 bg-btc/10 text-btc-300',
        tone === 'mint' && 'border-mint/30 bg-mint/10 text-mint',
        tone === 'neutral' && 'border-line-strong bg-white/4 text-fg-faint',
        className,
      )}
    >
      {children}
    </span>
  );
}
