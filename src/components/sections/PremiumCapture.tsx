import { ShieldCheck } from 'lucide-react';
import { PREMIUM } from '@/content/site';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { PanelHeader } from '@/components/ui/PanelHeader';

export function PremiumCapture() {
  return (
    <Section
      id="premium-capture"
      eyebrow={PREMIUM.eyebrow}
      title={PREMIUM.title}
      lede={PREMIUM.paragraphs.map((p) => (
        <span key={p} className="mb-4 block last:mb-0">
          {p}
        </span>
      ))}
    >
      <Reveal>
        <div className="panel p-5 md:p-8">
          <PanelHeader label={PREMIUM.cycleLabel} tag={PREMIUM.cycleTag} className="mb-8" />

          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {PREMIUM.stages.map((stage, i) => (
              <Reveal key={stage.n} delay={i * 90} as="li" className="block h-full">
                <div className="panel h-full bg-panel-2/50 p-4 panel-interactive">
                  <span className="label-mono block text-btc">{stage.n}</span>
                  <h3 className="mt-2.5 text-sm font-bold tracking-[-0.01em]">{stage.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-fg-muted">{stage.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="panel mt-3 flex flex-col gap-3 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="flex items-start gap-2.5 text-meta leading-relaxed text-fg-muted">
            <ShieldCheck className="mt-px size-4 shrink-0 text-btc/70" />
            {PREMIUM.footer}
          </p>
          <span className="label-mono shrink-0 text-fg-faint">{PREMIUM.footerAside}</span>
        </div>
      </Reveal>
    </Section>
  );
}
