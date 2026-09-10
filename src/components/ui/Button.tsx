import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  icon?: ReactNode;
  className?: string;
};

export function Button({ href, children, variant = 'ghost', icon, className }: Props) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3.5 text-base font-semibold transition-all duration-300 ease-out active:translate-y-px';

  return (
    <a
      href={href}
      className={cn(
        base,
        variant === 'primary'
          ? 'bg-btc text-black shadow-lg shadow-btc/15 hover:bg-btc-300'
          : 'border border-line-strong bg-panel-2 text-fg hover:border-line-strong hover:bg-panel-3',
        className,
      )}
    >
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>
      )}
    </a>
  );
}
