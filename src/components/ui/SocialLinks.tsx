import { cn } from '@/lib/cn';
import { SOCIAL } from '@/content/site';
import { BRAND_ICONS } from '@/lib/icons';

type Props = {
  /** `icon` is a compact square button; `inline` adds the call-to-action text. */
  variant?: 'icon' | 'inline';
  className?: string;
  onNavigate?: () => void;
};

export function SocialLinks({ variant = 'icon', className, onNavigate }: Props) {
  return (
    <ul className={cn('flex items-center gap-2', className)} aria-label="Community">
      {SOCIAL.map((social) => {
        const Icon = BRAND_ICONS[social.id];
        return (
          <li key={social.id}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              title={social.handle}
              aria-label={variant === 'icon' ? `${social.label}: ${social.handle}` : undefined}
              onClick={onNavigate}
              className={cn(
                'transition-colors hover:border-line-strong hover:text-fg',
                variant === 'icon'
                  ? 'grid size-9 place-items-center rounded-lg border border-line bg-panel text-fg-muted'
                  : 'inline-flex items-center gap-2 rounded-lg border border-line bg-panel-2 px-3.5 py-2 text-sm font-medium text-fg-muted',
              )}
            >
              <Icon className="size-4" />
              {variant === 'inline' && <span>{social.cta}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
