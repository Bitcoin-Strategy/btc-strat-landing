import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

const PulseDot = (
  <span className="size-1.5 rounded-full bg-btc animate-[pulse-dot_2.4s_ease-in-out_infinite]" />
);

export function Eyebrow({
  children,
  icon,
  variant = 'plain',
  className,
}: {
  children: ReactNode;
  icon?: ReactNode;
  variant?: 'plain' | 'pill';
  className?: string;
}) {
  if (variant === 'pill') {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-2 rounded-full border border-btc/25 bg-btc/8 px-3 py-1.5 font-mono text-xs text-btc-300',
          className,
        )}
      >
        {icon ? icon : PulseDot}
        {children}
      </span>
    );
  }

  return (
    <span className={cn('label-mono inline-flex items-center gap-2 text-btc', className)}>
      {icon}
      {children}
    </span>
  );
}
