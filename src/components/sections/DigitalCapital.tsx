import { ArrowDown, Sparkles } from 'lucide-react';
import { cn } from '@/lib/cn';
import { DIGITAL_CAPITAL as DC } from '@/content/site';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { PanelHeader } from '@/components/ui/PanelHeader';

export function DigitalCapital() {
  return (
    <Section
      id="digital-capital"
      eyebrow={DC.eyebrow}
      eyebrowVariant="pill"
      eyebrowIcon={<Sparkles className="size-3.5" />}
      titleSize="feature"
      title={DC.title}
      width="prose"
    >
      <div>
        {DC.paragraphs.map((p, i) => (
          <Reveal key={p} delay={i * 90}>
            <p className="mb-4 text-base leading-relaxed text-fg-muted sm:text-lg">{p}</p>
          </Reveal>
        ))}

        <Reveal delay={200}>
          <blockquote className="mt-8 rounded-2xl border-2 border-btc bg-gradient-to-r from-btc-950 via-btc-900/60 to-btc-950 px-6 py-7 text-center shadow-xl shadow-btc/10">
            <p className="text-[clamp(1.25rem,2.6vw,1.875rem)] font-extrabold tracking-[-0.02em] text-btc">
              {DC.quote}
            </p>
            <p className="mt-2 font-mono text-xs text-fg-muted sm:text-sm">{DC.quoteSub}</p>
          </blockquote>
        </Reveal>

        <Reveal delay={260}>
          <PanelHeader
            label={DC.roadmapEyebrow}
            tag={DC.roadmapLabel}
            className="mt-12 mb-6"
          />
        </Reveal>

        <ol>
          {DC.phases.map((phase, i) => (
            <Reveal key={phase.n} delay={i * 110} as="li" className="block">
              <article
                className={cn(
                  'rounded-2xl p-6 transition-colors duration-300',
                  phase.live
                    ? 'border-2 border-btc/60 bg-btc-950 shadow-lg shadow-btc/5'
                    : 'panel hover:border-line-strong',
                )}
              >
                <div className="mb-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xl font-extrabold text-btc sm:text-2xl">
                      {phase.n}
                    </span>
                    <span className="label-mono font-bold text-fg-muted">{phase.kicker}</span>
                  </div>
                  <span
                    className={cn(
                      'label-mono w-fit rounded px-2.5 py-1',
                      phase.live
                        ? 'bg-btc font-bold text-[#140c02]'
                        : 'border border-line-strong bg-panel-2 text-fg-faint',
                    )}
                  >
                    {phase.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold tracking-[-0.015em] sm:text-xl">{phase.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-fg-muted sm:text-sm">{phase.body}</p>
              </article>

              {i < DC.phases.length - 1 && (
                <div className="flex items-center justify-center py-2 text-btc" aria-hidden>
                  <ArrowDown className="size-[18px]" />
                </div>
              )}
            </Reveal>
          ))}
        </ol>

        <Reveal delay={140}>
          <div className="panel mt-6 flex flex-col justify-between gap-3 p-4 font-mono text-xs text-fg-muted sm:flex-row sm:items-center">
            <span>{DC.disclaimer}</span>
            <span className="whitespace-nowrap text-fg-faint">{DC.disclaimerAside}</span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
