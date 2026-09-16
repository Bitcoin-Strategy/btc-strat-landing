import { ChevronRight, Layers } from 'lucide-react';
import { HERO, HERO_STATS } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { StatCard } from '@/components/ui/StatCard';

export function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="label-mono inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-panel-2 px-3.5 py-2 text-fg">
              <span className="size-2 rounded-full bg-btc" />
              {HERO.badge}
            </span>
          </Reveal>

          <Reveal delay={90}>
            {/* Overrides text-balance so the accent line fills before breaking. */}
            <h1 className="display mt-6 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.12] [text-wrap:wrap]">
              <span className="block">{HERO.titleTop}</span>
              <span className="block text-btc">{HERO.titleAccent}</span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-fg-muted sm:text-lg lg:text-xl">
              {HERO.lede}
            </p>
          </Reveal>

          <Reveal delay={230}>
            <p className="mt-6 font-mono text-sm font-semibold tracking-wide text-fg-muted sm:text-base">
              {HERO.kicker}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mx-auto mt-8 max-w-2xl rounded-2xl border-2 border-btc/50 bg-gradient-to-r from-btc-950 via-btc-900/50 to-btc-950 px-6 py-4 shadow-xl shadow-btc/5">
              <p className="text-lg font-extrabold tracking-wide sm:text-xl">
                {HERO.callout.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-fg-muted sm:text-sm">
                {HERO.callout.body}
              </p>
            </div>
          </Reveal>

          <Reveal delay={370}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href={HERO.primaryCta.href}
                variant="primary"
                icon={<Layers className="size-4" />}
                className="w-full sm:w-auto"
              >
                {HERO.primaryCta.label}
              </Button>
              <Button
                href={HERO.secondaryCta.href}
                icon={<ChevronRight className="size-[18px] text-fg-muted" />}
                className="w-full sm:w-auto"
              >
                {HERO.secondaryCta.label}
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <div className="rule-fade mb-8" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="h-full">
                <StatCard
                  label={s.label}
                  tag={s.tag}
                  unit={s.unit}
                  foot={s.foot}
                  accent={s.accent}
                  hint={s.hint}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
