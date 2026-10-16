import { ICONS } from '@/lib/icons';
import { FINAL_CTA } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SocialLinks } from '@/components/ui/SocialLinks';

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[420px] -translate-y-1/2"
        style={{
          background:
            'radial-gradient(45% 60% at 50% 50%, rgba(247,147,26,0.13) 0%, transparent 70%)',
        }}
      />

      <div className="container-page relative">
        <div className="rule-fade mb-16 md:mb-20" />

        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-panel-2 px-3.5 py-2 font-mono text-xs text-fg">
              <span className="size-2 rounded-full bg-btc" />
              {FINAL_CTA.badge}
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="display mt-6 text-[clamp(1.875rem,4.4vw,3rem)]">{FINAL_CTA.title}</h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-lede leading-relaxed text-fg-muted">
              {FINAL_CTA.lede}
            </p>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {FINAL_CTA.ctas.map((cta) => {
                const Icon = ICONS[cta.icon];
                return (
                  <Button
                    key={cta.label}
                    href={cta.href}
                    variant={cta.primary ? 'primary' : 'ghost'}
                    icon={<Icon className="size-4" />}
                    className="w-full sm:w-auto"
                  >
                    {cta.label}
                  </Button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <SocialLinks variant="inline" className="mt-8 flex-wrap justify-center" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
