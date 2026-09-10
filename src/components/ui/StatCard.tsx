import { Info } from 'lucide-react';
import { cn } from '@/lib/cn';

type Props = {
  label: string;
  tag?: string;
  /** Undefined renders an em dash. */
  value?: string;
  unit?: string;
  foot?: string;
  accent?: boolean;
  hint?: string;
  tagAccent?: boolean;
  className?: string;
};

export function StatCard({
  label,
  tag,
  value,
  unit,
  foot,
  accent,
  hint,
  tagAccent,
  className,
}: Props) {
  return (
    <div
      className={cn(
        'panel panel-interactive h-full p-5',
        className,
      )}
    >
      <div className="mb-1.5 flex items-start justify-between gap-3 font-mono text-xs text-fg-muted">
        <span className="flex items-center gap-1.5">
          {label}
          {hint && <Info className="size-3.5 shrink-0 text-fg-faint" aria-label={hint} />}
        </span>
        {tag && (
          <span
            className={cn(
              'shrink-0 rounded bg-panel-3 px-1.5 py-0.5 text-[10px]',
              tagAccent ? 'text-btc' : 'text-fg-faint',
            )}
          >
            {tag}
          </span>
        )}
      </div>

      <p
        className={cn(
          'font-mono text-2xl font-bold tracking-tight tabular-nums sm:text-3xl',
          accent ? 'text-btc' : 'text-fg',
        )}
      >
        {value ?? '—'}
        {unit && <span className="ml-2">{unit}</span>}
      </p>

      {foot && <p className="mt-2 font-mono text-xs text-fg-muted">{foot}</p>}
    </div>
  );
}
