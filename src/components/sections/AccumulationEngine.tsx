import { cn } from '@/lib/cn';
import { ICONS } from '@/lib/icons';
import { ENGINE } from '@/content/site';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Pill } from '@/components/ui/Pill';
import { MetaRow } from '@/components/ui/MetaRow';
import { PipelineDiagram } from './PipelineDiagram';

export function AccumulationEngine() {
  return (
    <Section id="how-it-works" eyebrow={ENGINE.eyebrow} title={ENGINE.title} lede={ENGINE.lede}>
      <div className="grid gap-3 md:grid-cols-3">
        {ENGINE.inflows.map((flow, i) => {
          const Icon = ICONS[flow.icon];
          const split = flow.split;

          return (
            <Reveal key={flow.title} delay={i * 100} className="h-full">
              <article
                className={cn(
                  'panel group flex h-full flex-col p-6 transition-all duration-400 hover:-translate-y-1',
                  flow.soon ? 'hover:border-btc/35' : 'hover:border-line-strong',
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-10 place-items-center rounded-xl border border-line-strong bg-white/4 text-btc transition-colors duration-300 group-hover:border-btc/30 group-hover:bg-btc/10">
                    <Icon className="size-4.5" />
                  </span>
                  <Pill tone={flow.soon ? 'btc' : 'neutral'}>{flow.tag}</Pill>
                </div>

                <h3 className="mt-4 text-lg font-bold tracking-[-0.02em]">{flow.title}</h3>
                <p className="mt-2 mb-5 text-sm leading-relaxed text-fg-muted">{flow.body}</p>

                {split ? (
                  <div className="mt-auto border-t border-line pt-3 font-mono text-xs">
                    <span className="label-mono text-fg-faint">{flow.metaLabel}</span>
                    <p className="mt-1.5 flex flex-wrap gap-x-2 font-semibold text-fg">
                      {split.map((part, j) => (
                        <span key={part.label} className="flex gap-x-2">
                          {j > 0 && <span className="text-fg-faint">•</span>}
                          <span>
                            {part.pct}% {part.label}
                          </span>
                        </span>
                      ))}
                    </p>
                  </div>
                ) : (
                  <MetaRow label={flow.metaLabel}>
                    <span className={flow.soon ? 'text-btc' : 'text-fg'}>{flow.metaValue}</span>
                  </MetaRow>
                )}
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={140} className="mt-4 block">
        <PipelineDiagram />
      </Reveal>
    </Section>
  );
}

