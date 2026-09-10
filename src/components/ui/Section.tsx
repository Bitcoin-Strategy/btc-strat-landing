import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';

const TITLE_SIZE = {
  default: 'text-[clamp(1.875rem,3.2vw,2.25rem)]',
  feature: 'text-[clamp(1.875rem,4vw,3rem)]',
} as const;

const COLUMN = {
  full: '',
  prose: 'mx-auto max-w-4xl',
} as const;

type Props = {
  id: string;
  eyebrow?: string;
  eyebrowVariant?: 'plain' | 'pill';
  eyebrowIcon?: ReactNode;
  title?: ReactNode;
  titleSize?: keyof typeof TITLE_SIZE;
  lede?: ReactNode;
  children: ReactNode;
  width?: keyof typeof COLUMN;
  align?: 'left' | 'center';
  divided?: boolean;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  eyebrowVariant = 'plain',
  eyebrowIcon,
  title,
  titleSize = 'default',
  lede,
  children,
  width = 'full',
  align = 'left',
  divided = true,
  className,
}: Props) {
  const centered = align === 'center';

  return (
    <section id={id} className={cn('relative', className)}>
      {divided && (
        <div className="container-page">
          <div className="rule-fade" />
        </div>
      )}

      <div className={cn('container-page pt-16 pb-16 md:pt-24 md:pb-24')}>
        <div className={COLUMN[width]}>
          {(eyebrow || title || lede) && (
            <header className={cn('mb-8 max-w-3xl md:mb-10', centered && 'mx-auto text-center')}>
              {eyebrow && (
                <Reveal>
                  <Eyebrow variant={eyebrowVariant} icon={eyebrowIcon}>
                    {eyebrow}
                  </Eyebrow>
                </Reveal>
              )}
              {title && (
                <Reveal delay={70}>
                  <h2 className={cn('display mt-3', TITLE_SIZE[titleSize])}>{title}</h2>
                </Reveal>
              )}
              {lede && (
                <Reveal delay={130}>
                  <p
                    className={cn(
                      'mt-3 text-lede leading-relaxed text-fg-muted md:text-lg',
                      centered && 'mx-auto max-w-2xl',
                    )}
                  >
                    {lede}
                  </p>
                </Reveal>
              )}
            </header>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
