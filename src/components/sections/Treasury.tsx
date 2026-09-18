import { ICONS } from '@/lib/icons';
import { TREASURY } from '@/content/site';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Pill } from '@/components/ui/Pill';
import { StatCard } from '@/components/ui/StatCard';
import { PanelHeader } from '@/components/ui/PanelHeader';

export function Treasury() {
  return (
    <Section id="treasury" eyebrow={TREASURY.eyebrow} title={TREASURY.title} lede={TREASURY.lede}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {TREASURY.metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 80} className="h-full">
            <StatCard
              label={m.label}
              tag={m.tag}
              unit={m.unit}
              foot={m.foot}
              accent={m.accent}
              tagAccent={m.accent}
            />
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="panel mt-4 p-5 md:p-7">
          <PanelHeader label={TREASURY.sourcesLabel} tag={TREASURY.sourcesTag} className="mb-6" />

          <div className="grid gap-3 md:grid-cols-3">
            {TREASURY.sources.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <div
                  key={s.title}
                  className="panel flex h-full flex-col bg-panel-2/60 p-5 panel-interactive"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-line-strong bg-white/4 text-btc">
                      <Icon className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-body leading-snug font-bold">{s.title}</h3>
                      <p className="meta-mono mt-1 text-fg-muted">{s.sub}</p>
                    </div>
                  </div>

                  <div className="mt-3 mb-3 flex items-baseline gap-2">
                    {s.soon ? (
                      <Pill tone="btc">Coming Soon</Pill>
                    ) : (
                      <>
                        <span className="font-mono text-[24px] leading-none font-bold tabular-nums">
                          —
                        </span>
                        <span className="font-mono text-[22px] font-bold">{s.unit}</span>
                      </>
                    )}
                  </div>

                  <p className="meta-mono mt-auto border-t border-line pt-3 text-fg-muted">
                    {s.foot}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
