import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/cn';
import { ICONS } from '@/lib/icons';
import { WHY } from '@/content/site';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Pill } from '@/components/ui/Pill';
import { MetaRow } from '@/components/ui/MetaRow';

export function WhyStrategy() {
  return (
    <Section
      id="why"
      eyebrow={WHY.eyebrow}
      eyebrowVariant="pill"
      eyebrowIcon={<Sparkles className="size-3.5" />}
      title={WHY.title}
      lede={WHY.lede}
      align="center"
      width="prose"
      divided={false}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {WHY.cards.map((card, i) => {
          const Icon = ICONS[card.icon];
          return (
            <Reveal key={card.title} delay={i * 110} className="h-full">
              <article
                className={cn(
                  'group relative flex h-full flex-col overflow-hidden p-7 transition-all duration-400',
                  card.featured
                    ? 'panel-glow border-2 border-btc/40 hover:-translate-y-1 hover:border-btc/60 hover:shadow-[var(--shadow-glow)]'
                    : 'panel hover:-translate-y-1 hover:border-line-strong',
                )}
              >
                {card.featured && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-btc to-transparent"
                  />
                )}

                <div className="flex items-start justify-between gap-4">
                  <span
                    className={cn(
                      'grid size-11 place-items-center rounded-xl border transition-colors duration-300',
                      card.featured
                        ? 'border-btc/30 bg-btc/12 text-btc'
                        : 'border-line-strong bg-white/4 text-fg-muted',
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <Pill tone={card.featured ? 'btc' : 'neutral'}>{card.tag}</Pill>
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-[-0.02em]">{card.title}</h3>
                <p className="mt-2.5 mb-8 text-sm leading-relaxed text-fg-muted">{card.body}</p>

                <MetaRow label={card.metaLabel}>
                  <span className={card.featured ? 'text-btc' : 'text-fg'}>{card.metaValue}</span>
                </MetaRow>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={220}>
        <div className="mt-4 rounded-card border-2 border-btc/50 bg-gradient-to-r from-btc-950 via-btc-900/50 to-btc-950 px-6 py-5 text-center shadow-xl shadow-btc/5">
          <p className="text-[15px] font-semibold tracking-[-0.01em] md:text-base">
            {WHY.footnote}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
