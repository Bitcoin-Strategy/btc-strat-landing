import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';
import { ICONS } from '@/lib/icons';
import { NETWORK } from '@/content/site';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { PanelHeader } from '@/components/ui/PanelHeader';

type RowTone = 'white' | 'btc' | 'mint' | 'amber' | 'muted';
const ROW_TONE: Record<RowTone, string> = {
  white: 'text-fg',
  btc: 'text-btc',
  mint: 'text-mint',
  amber: 'text-amber-400',
  muted: 'text-fg-muted',
};

function Lifecycle() {
  return (
    <div className="panel p-5 md:p-8">
      <PanelHeader
        label={NETWORK.lifecycleLabel}
        tag={NETWORK.lifecycleTag}
        dot
        className="mb-7"
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {NETWORK.lifecycle.map((step, i) => {
          const Icon = ICONS[step.icon];
          return (
            <Reveal key={step.step} delay={i * 80} className="h-full">
              <article
                className={cn(
                  'flex h-full flex-col p-4',
                  step.featured
                    ? 'panel-glow'
                    : 'panel bg-panel-2/50 panel-interactive',
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      'label-mono grid size-7 place-items-center rounded-lg border font-semibold',
                      step.featured
                        ? 'border-transparent bg-btc text-void'
                        : 'border-btc/30 bg-btc/10 text-btc',
                    )}
                  >
                    {step.step}
                  </span>
                  <Icon className={cn('size-4', step.featured ? 'text-btc' : 'text-fg-faint')} />
                </div>

                <h3 className="mt-4 text-body font-semibold">{step.title}</h3>
                <p className="mt-1.5 mb-4 text-meta leading-relaxed text-fg-muted">{step.body}</p>

                <span
                  className={cn(
                    'meta-mono mt-auto border-t border-line pt-3',
                    step.featured ? 'text-btc' : 'text-fg-faint',
                  )}
                >
                  {step.foot}
                </span>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={140}>
        <div className="mt-3 flex flex-col items-center gap-4 rounded-card border border-btc/25 bg-btc/6 p-4 text-center sm:flex-row sm:text-left">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-btc/30 bg-btc/10 text-btc">
            <ArrowRight className="size-4" />
          </span>
          <div className="sm:mr-auto">
            <p className="text-body font-semibold">{NETWORK.bridge.title}</p>
            <p className="mt-1 text-meta leading-relaxed text-fg-muted">{NETWORK.bridge.body}</p>
          </div>
          <span className="shrink-0 rounded-lg border border-btc/30 bg-btc/15 px-3 py-1.5 font-mono text-xs font-semibold text-btc">
            {NETWORK.bridge.tag}
          </span>
        </div>
      </Reveal>
    </div>
  );
}

function Architecture() {
  return (
    <div className="panel p-5 md:p-8">
      <PanelHeader label={NETWORK.archLabel} tag={NETWORK.archTag} className="mb-7" />

      <div className="grid gap-3 lg:grid-cols-3">
        {NETWORK.nodes.map((node, i) => (
          <Reveal key={node.title} delay={i * 100} className="h-full">
            <article
              className={cn(
                'relative flex h-full flex-col p-5 transition-all duration-400 hover:-translate-y-1',
                node.featured ? 'panel-glow' : 'panel bg-panel-2/50 hover:border-line-strong',
              )}
            >
              <span
                className={cn(
                  'label-mono absolute -top-2.5 right-4 rounded px-2.5 py-1',
                  node.featured
                    ? 'bg-btc font-bold text-[#140c02]'
                    : 'border border-line-strong bg-panel-3 text-fg-muted',
                )}
              >
                {node.badge}
              </span>

              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    'grid size-10 shrink-0 place-items-center rounded-full border text-lede font-bold',
                    node.featured
                      ? 'border-btc/40 bg-btc/15 text-btc'
                      : 'border-line-strong bg-white/4 text-fg-muted',
                  )}
                >
                  {node.symbol}
                </span>
                <div>
                  <h3 className="text-[15px] font-bold tracking-[-0.01em]">{node.title}</h3>
                  <p className="meta-mono mt-1 text-fg-muted">{node.sub}</p>
                </div>
              </div>

              <dl className="meta-mono mt-5 space-y-2 rounded-lg border border-line bg-void/40 p-3.5">
                {node.rows.map((row) => (
                  <div key={row.k} className="flex items-baseline justify-between gap-3">
                    <dt className="whitespace-nowrap text-fg-faint">{row.k}</dt>
                    <dd className={cn('text-right font-bold', ROW_TONE[row.tone])}>
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-4 mb-5 text-body leading-relaxed text-fg-muted">{node.body}</p>

              <div className="meta-mono mt-auto flex items-baseline justify-between gap-3 border-t border-line pt-3.5">
                {node.footLabel && (
                  <span className="whitespace-nowrap text-fg-faint">{node.footLabel}</span>
                )}
                <span className="ml-auto text-right text-btc">{node.footValue}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function CreatorEconomics() {
  const { creator } = NETWORK;
  return (
    <div className="flex flex-col gap-5 rounded-card border border-btc/25 bg-gradient-to-r from-btc-950 via-btc-950/40 to-panel p-5 md:flex-row md:items-center md:p-6">
      <div className="max-w-2xl">
        <span className="label-mono text-btc">{creator.eyebrow}</span>
        <h3 className="mt-2.5 text-xl font-bold tracking-[-0.02em]">{creator.title}</h3>
        <p className="mt-2 text-body leading-relaxed text-fg-muted">{creator.body}</p>
      </div>

      <dl className="flex shrink-0 flex-col gap-3 sm:flex-row md:ml-auto">
        {creator.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-line-strong bg-void/60 px-4 py-3"
          >
            <dt className="label-mono text-fg-faint">{stat.label}</dt>
            <dd
              className={cn(
                'mt-2 font-mono text-meta font-bold',
                stat.accent ? 'text-btc' : 'text-fg',
              )}
            >
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function StrategyNetwork() {
  return (
    <Section
      id="strategy-network"
      eyebrow={NETWORK.eyebrow}
      eyebrowVariant="pill"
      title={NETWORK.title}
      lede={NETWORK.lede}
    >
      <Reveal>
        <Lifecycle />
      </Reveal>

      <Reveal delay={100} className="mt-3">
        <Architecture />
      </Reveal>

      <Reveal delay={120} className="mt-3">
        <CreatorEconomics />
      </Reveal>

      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {NETWORK.guarantees.map((g, i) => {
          const Icon = ICONS[g.icon];
          return (
            <Reveal key={g.title} delay={i * 80} className="h-full">
              <div className="panel h-full p-5 panel-interactive">
                <p className="flex items-center gap-2.5 text-body font-semibold">
                  <Icon className="size-4 shrink-0 text-btc" />
                  {g.title}
                </p>
                <p className="mt-2.5 text-body leading-relaxed text-fg-muted">{g.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
