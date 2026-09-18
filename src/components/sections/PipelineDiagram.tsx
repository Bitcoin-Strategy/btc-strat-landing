import { Building2, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/cn';
import { ENGINE } from '@/content/site';
import { Pill } from '@/components/ui/Pill';
import { useInView } from '@/hooks/useInView';
import { PanelHeader } from '@/components/ui/PanelHeader';

const { pipeline } = ENGINE;

// non-scaling-stroke keeps hairlines crisp under the non-uniform scale.
function Converge({ animate }: { animate: boolean }) {
  const paths = [
    'M 150 0 C 150 46, 450 44, 450 90',
    'M 450 0 L 450 90',
    'M 750 0 C 750 46, 450 44, 450 90',
  ];
  return (
    <svg
      viewBox="0 0 900 90"
      preserveAspectRatio="none"
      className="h-[70px] w-full md:h-[90px]"
      aria-hidden
    >
      {paths.map((d, i) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="rgba(247,147,26,0.45)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          vectorEffect="non-scaling-stroke"
          style={
            animate
              ? { animation: `dash-flow 1.1s linear infinite`, animationDelay: `${i * 0.18}s` }
              : undefined
          }
        />
      ))}
      <circle cx="450" cy="85" r="4.5" fill="#f7931a" opacity="0.9" />
    </svg>
  );
}

function Connector({ animate }: { animate: boolean }) {
  return (
    <svg viewBox="0 0 24 48" className="mx-auto h-11 w-6" aria-hidden>
      <line
        x1="12"
        y1="0"
        x2="12"
        y2="38"
        stroke="rgba(247,147,26,0.45)"
        strokeWidth="1.5"
        strokeDasharray="6 8"
        style={animate ? { animation: 'dash-flow 1.1s linear infinite' } : undefined}
      />
      <path d="M 12 48 l -5 -9 h 10 Z" fill="rgba(247,147,26,0.75)" />
    </svg>
  );
}

export function PipelineDiagram() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <div ref={ref} className="panel overflow-hidden p-5 md:p-8">
      <PanelHeader label={pipeline.label} tag={pipeline.tag} className="mb-6" />

      <div className="grid gap-3 md:grid-cols-3">
        {pipeline.sources.map((s) => (
          <div
            key={s.title}
            className="panel bg-panel-2/60 px-4 py-4 text-center panel-interactive"
          >
            <p className="text-body font-semibold">{s.title}</p>
            <p
              className={cn(
                'label-mono mt-2',
                'soon' in s && s.soon ? 'text-btc' : 'text-fg-faint',
              )}
            >
              {s.sub}
            </p>
          </div>
        ))}
      </div>

      <Converge animate={inView} />

      <div className="panel-glow relative px-5 py-6 text-center">
        <Pill tone="btc" className="absolute -top-2.5 right-4">
          {pipeline.core.tag}
        </Pill>
        <p className="text-lg font-bold tracking-[-0.015em]">{pipeline.core.title}</p>
        <p className="mx-auto mt-2 max-w-xl text-body leading-relaxed text-fg-muted">
          {pipeline.core.body}
        </p>
      </div>

      <Connector animate={inView} />

      <div className="panel bg-panel-2/60 px-5 py-5 text-center">
        <p className="flex items-center justify-center gap-2.5 text-base font-bold">
          <Building2 className="size-4.5 text-btc" />
          {pipeline.vault.title}
        </p>
        <p className="mx-auto mt-2 max-w-xl text-body leading-relaxed text-fg-muted">
          {pipeline.vault.body}
        </p>
      </div>

      <Connector animate={inView} />

      <div className="rounded-card border border-mint/25 bg-mint/6 px-5 py-5 text-center">
        <p className="label-mono flex items-center justify-center gap-2.5 text-mint">
          <TrendingUp className="size-4" />
          {pipeline.output.title}
        </p>
        <p className="mx-auto mt-2.5 max-w-xl text-body leading-relaxed text-fg-muted">
          {pipeline.output.body}
        </p>
      </div>
    </div>
  );
}
