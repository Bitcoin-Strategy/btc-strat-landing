import { cn } from '@/lib/cn';

export function PanelHeader({
  label,
  tag,
  dot = false,
  className,
}: {
  label: string;
  tag: string;
  dot?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-wrap items-center justify-between gap-3', className)}>
      <span className="label-mono flex items-center gap-2 text-fg-muted">
        {dot && <span className="size-1.5 rounded-full bg-btc" />}
        {label}
      </span>
      <span className="label-mono text-btc">{tag}</span>
    </div>
  );
}
