import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function MetaRow({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mt-auto border-t border-line pt-4', className)}>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 font-mono text-[11.5px]">
        <span className="text-fg-faint">{label}</span>
        <span className="text-right font-semibold">{children}</span>
      </div>
    </div>
  );
}
