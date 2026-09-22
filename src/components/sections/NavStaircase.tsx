import { ArrowRight, Plus } from 'lucide-react';
import { cn } from '@/lib/cn';
import { ICONS } from '@/lib/icons';
import { STAIRCASE } from '@/content/site';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { StaircaseChart } from './StaircaseChart';

export function NavStaircase() {
  const { mechanism } = STAIRCASE;

  return (
    <Section
      id="nav-staircase"
      eyebrow={STAIRCASE.eyebrow}
      eyebrowVariant="pill"
      titleSize="feature"
      title={STAIRCASE.title}
      lede={
        <>
          <span className="font-medium text-fg">{STAIRCASE.subtitle}</span>
          <span className="mt-4 block">{STAIRCASE.body}</span>
        </>
      }
    >
      <Reveal>
        <figure className="panel overflow-hidden">
          <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 md:px-7">
            <span className="label-mono text-fg-muted">{STAIRCASE.chartLabel}</span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-btc/40 bg-btc/8 px-3 py-1.5 text-meta font-medium text-btc">
              <span className="size-1.5 rounded-full bg-btc" />
              {STAIRCASE.chartTag}
            </span>
          </figcaption>

          <div className="relative px-2 py-5 md:px-6 md:py-8">
            {/* A lone overflow-x: auto turns overflow-y into auto as well. */}
            <div className="no-scrollbar overflow-x-auto overflow-y-hidden">
              <div className="min-w-[680px] rounded-xl border border-line-strong bg-ink p-2 md:p-3">
                <StaircaseChart />
              </div>
            </div>

            <p className="label-mono mt-3 text-center text-fg-faint md:hidden">
              Illustrative model — not a forecast
            </p>
          </div>
        </figure>
      </Reveal>

      <Reveal delay={120}>
        <div className="panel mt-4 px-5 py-6 md:px-7">
          <p className="label-mono text-center text-fg-faint">{mechanism.label}</p>

          <div className="mt-5 flex flex-col items-center gap-3 lg:flex-row lg:justify-center">
            <div className="flex flex-wrap items-center justify-center gap-2 rounded-xl border border-line bg-panel-2/70 px-4 py-3">
              {mechanism.inputs.map((input, i) => (
                <span key={input} className="flex items-center gap-2">
                  {i > 0 && <Plus className="size-3.5 text-btc/70" />}
                  <span className="text-body font-bold whitespace-nowrap">{input}</span>
                </span>
              ))}
            </div>

            {mechanism.chain.map((node) => (
              <span key={node.label} className="flex items-center gap-3">
                <ArrowRight className="size-4 shrink-0 rotate-90 text-btc lg:rotate-0" />
                <span
                  className={cn(
                    'rounded-xl px-4 py-3 text-body whitespace-nowrap',
                    node.tone === 'btc' && 'border border-btc/40 bg-panel-2/70 font-bold',
                    node.tone === 'mint' &&
                      'border border-mint/40 bg-panel-2/70 font-bold text-mint',
                    node.tone === 'strong' &&
                      'border-2 border-btc bg-btc-950 font-extrabold text-btc',
                  )}
                >
                  {node.label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {STAIRCASE.pillars.map((p, i) => {
          const Icon = ICONS[p.icon];
          return (
            <Reveal key={p.title} delay={i * 90} className="h-full">
              <div className="panel h-full p-5 panel-interactive">
                <div className="flex items-center gap-2.5">
                  <Icon
                    className={cn('size-[18px] shrink-0', p.tone === 'mint' ? 'text-mint' : 'text-btc')}
                  />
                  <h3 className="text-base font-bold">{p.title}</h3>
                </div>
                <p className="mt-2.5 text-body leading-relaxed text-fg-muted">{p.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
