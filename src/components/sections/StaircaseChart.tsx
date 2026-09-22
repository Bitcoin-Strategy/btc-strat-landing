import { useState } from 'react';
import { STAIRCASE } from '@/content/site';
import { useInView } from '@/hooks/useInView';

const W = 1376;
const H = 768;
const PLOT_L = 160;
const PLOT_R = 1250;
const PLOT_TOP = 130;
const BASE_Y = 658;
const PLOT_W = PLOT_R - PLOT_L;
const PLOT_H = BASE_Y - PLOT_TOP;

const steps = STAIRCASE.steps;
const STEP_W = PLOT_W / steps.length;

// Truncated y-axis; the panel is labelled as an illustrative model.
const DOMAIN_MIN = 0.001574;
const DOMAIN_MAX = 0.004863;

const yFor = (v: number) => BASE_Y - ((v - DOMAIN_MIN) / (DOMAIN_MAX - DOMAIN_MIN)) * PLOT_H;
const xLeft = (i: number) => PLOT_L + i * STEP_W;
const xMid = (i: number) => xLeft(i) + STEP_W / 2;

const linePath = steps
  .map((s, i) => {
    const y = yFor(s.value);
    return i === 0 ? `M ${xLeft(i)} ${y} H ${xLeft(i + 1)}` : `V ${y} H ${xLeft(i + 1)}`;
  })
  .join(' ');

const areaPath = `${linePath} V ${BASE_Y} H ${PLOT_L} Z`;

const gridLines = [155, 262, 368, 475];

const PANEL = {
  x: 726,
  y: 430,
  w: 510,
  h: 210,
  padX: 14,
  titleY: 28,
  ruleY: 44,
  clusterX: 28,
  clusterY: 132,
  linkFromX: 108,
  linkToX: 182,
  badgeX: 208,
  textX: 236,
  rowY: [508, 560, 612],
} as const;
const SOURCES = [
  { title: 'BONDING', sub: 'Accumulating BTC from asset sales' },
  { title: 'PREMIUM CAPTURE', sub: 'Capturing market value above floor' },
  { title: 'STRATEGY NETWORK REVENUE', sub: 'Network fees & yields' },
];

type BadgeKind = 'btc' | 'usd' | 'bars';

function Badge({ cx, cy, r, kind }: { cx: number; cy: number; r: number; kind: BadgeKind }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#0d0a06" stroke="#f7931a" strokeWidth="2" />
      {kind === 'bars' ? (
        <g fill="#f7931a">
          <rect x={cx - r * 0.42} y={cy - r * 0.04} width={r * 0.22} height={r * 0.44} rx="1" />
          <rect x={cx - r * 0.11} y={cy - r * 0.32} width={r * 0.22} height={r * 0.72} rx="1" />
          <rect x={cx + r * 0.2} y={cy - r * 0.52} width={r * 0.22} height={r * 0.92} rx="1" />
        </g>
      ) : (
        <text
          x={cx}
          y={cy + r * 0.37}
          fill="#f7931a"
          fontSize={r * 1.3}
          fontWeight="700"
          textAnchor="middle"
        >
          {kind === 'btc' ? '₿' : '$'}
        </text>
      )}
    </g>
  );
}

const STEP_BADGES: BadgeKind[] = ['btc', 'bars', 'btc', 'bars', 'bars', 'btc'];
const ROW_BADGES: BadgeKind[] = ['btc', 'usd', 'bars'];

function TrendArrow({ x, y }: { x: number; y: number }) {
  return (
    <g stroke="#f7931a" strokeWidth="2.5" fill="none" strokeLinecap="round">
      <path d={`M ${x} ${y + 26} C ${x + 14} ${y + 20}, ${x + 20} ${y + 8}, ${x + 34} ${y}`} />
      <path d={`M ${x + 26} ${y} h 9 v 9`} strokeLinejoin="round" />
    </g>
  );
}

const COIN_GAP = 4;

function linkPath(rowY: number) {
  const from = PANEL.y + PANEL.clusterY - 4;
  return `M ${PANEL.x + PANEL.linkFromX} ${from} C ${PANEL.x + 150} ${from}, ${PANEL.x + 160} ${rowY}, ${PANEL.x + PANEL.linkToX} ${rowY}`;
}

function layoutCoins(x: number, sizes: readonly number[]) {
  const coins: { cx: number; r: number }[] = [];
  let cursor = x;
  for (const r of sizes) {
    coins.push({ cx: cursor + r, r });
    cursor += r * 2 + COIN_GAP;
  }
  return { coins, midX: (x + cursor - COIN_GAP) / 2 };
}

function TreasuryCluster({ x, y, sizes }: { x: number; y: number; sizes: readonly number[] }) {
  const { coins, midX } = layoutCoins(x, sizes);

  return (
    <g>
      <TrendArrow x={midX - 12} y={y - 58} />
      {coins.map(({ cx, r }) => (
        <Badge key={cx} cx={cx} cy={y - r * 0.2} r={r} kind="btc" />
      ))}
      <text y={y + 42} fill="#ffffff" fontSize="11.5" fontWeight="700" textAnchor="middle">
        <tspan x={midX}>TOTAL BITCOIN</tspan>
        <tspan x={midX} dy="14">
          TREASURY
        </tspan>
      </text>
    </g>
  );
}

export function StaircaseChart() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div ref={ref} className="relative">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        role="img"
        aria-label={`${STAIRCASE.chartTitle}. NAV per STRAT rising from ${steps[0].value} BTC in ${steps[0].epoch} to ${steps[steps.length - 1].value} BTC in ${steps[steps.length - 1].epoch}.`}
      >
        <defs>
          <linearGradient id="sc-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffa93a" stopOpacity="0.9" />
            <stop offset="26%" stopColor="#f0870f" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#a55c07" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#5c3305" stopOpacity="0.1" />
          </linearGradient>

          <filter id="sc-glow" x="-25%" y="-45%" width="150%" height="200%">
            <feGaussianBlur stdDeviation="10" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <marker
            id="sc-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f7931a" />
          </marker>

          <clipPath id="sc-sweep">
            <rect
              x={PLOT_L}
              y={0}
              height={H}
              style={{
                width: inView ? PLOT_W + 2 : 0,
                transition: 'width 1900ms cubic-bezier(0.16,1,0.3,1)',
              }}
            />
          </clipPath>
        </defs>

        <text
          x={W / 2}
          y={64}
          textAnchor="middle"
          fontSize="40"
          fontWeight="800"
          letterSpacing="-0.005em"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 700ms ease 150ms' }}
        >
          <tspan fill="#f7931a">STRAT</tspan>
          <tspan fill="#ffffff"> NET ASSET VALUE (NAV) ASCENSION</tspan>
        </text>

        <g stroke="rgba(255,255,255,0.07)" strokeWidth="1">
          {gridLines.map((y) => (
            <line key={y} x1={PLOT_L} x2={PLOT_R} y1={y} y2={y} />
          ))}
          {steps.map((s, i) => (
            <line key={s.epoch} x1={xLeft(i + 1)} x2={xLeft(i + 1)} y1={PLOT_TOP} y2={BASE_Y} />
          ))}
        </g>

        <g stroke="rgba(255,255,255,0.45)" strokeWidth="1.5">
          <line x1={PLOT_L} x2={PLOT_L} y1={PLOT_TOP - 8} y2={BASE_Y} />
          <line x1={PLOT_L} x2={PLOT_R + 18} y1={BASE_Y} y2={BASE_Y} />
        </g>
        <path d={`M ${PLOT_L} ${PLOT_TOP - 18} l -6 12 h 12 Z`} fill="rgba(255,255,255,0.55)" />
        <path d={`M ${PLOT_R + 28} ${BASE_Y} l -12 -6 v 12 Z`} fill="rgba(255,255,255,0.55)" />
        <text x={PLOT_R + 40} y={BASE_Y + 6} fill="#ffffff" fontSize="17" fontWeight="700">
          X
        </text>

        <g pointerEvents="none">
          {steps.map((s, i) => (
            <rect
              key={s.epoch}
              x={xLeft(i)}
              y={PLOT_TOP}
              width={STEP_W}
              height={PLOT_H}
              fill={hovered === i ? 'rgba(247,147,26,0.10)' : 'transparent'}
              style={{ transition: 'fill 220ms ease' }}
            />
          ))}
        </g>

        <g clipPath="url(#sc-sweep)">
          <path d={areaPath} fill="url(#sc-area)" />
          <path
            d={linePath}
            fill="none"
            stroke="#ffdca6"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#sc-glow)"
          />
        </g>

        {steps.map((s, i) => {
          const y = yFor(s.value);
          const cx = xMid(i);
          const isHot = hovered === i;
          return (
            <g
              key={s.epoch}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(10px)',
                transition: `opacity 500ms ease ${400 + i * 180}ms, transform 500ms cubic-bezier(0.16,1,0.3,1) ${400 + i * 180}ms`,
              }}
            >
              <Badge cx={cx} cy={y - 68} r={isHot ? 21 : 19} kind={STEP_BADGES[i]} />

              <text
                x={cx}
                y={y - 29}
                fill={isHot ? '#ffd39a' : '#ffffff'}
                fontSize="19"
                fontWeight="700"
                textAnchor="middle"
                style={{ transition: 'fill 200ms ease' }}
              >
                {s.value.toFixed(4)} BTC
              </text>

              <text
                x={cx}
                y={y + 36}
                fill="#ffffff"
                fontSize="28"
                fontWeight="700"
                textAnchor="middle"
              >
                {i + 1}
              </text>

              <text
                x={cx}
                y={BASE_Y + 34}
                fill={isHot ? '#f7931a' : '#cfcfd6'}
                fontSize="16"
                textAnchor="middle"
                style={{ transition: 'fill 200ms ease' }}
              >
                {s.epoch}
              </text>
            </g>
          );
        })}

        <g style={{ opacity: inView ? 1 : 0, transition: 'opacity 700ms ease 900ms' }}>
          <text x={192} y={209} fill="#ffffff" fontSize="19" fontWeight="700">
            NAV PER STRAT =
          </text>
          <text x={480} y={194} fill="#ffffff" fontSize="18" textAnchor="middle">
            TOTAL BTC TREASURY
          </text>
          <line x1={372} y1={205} x2={588} y2={205} stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" />
          <text x={480} y={227} fill="#ffffff" fontSize="18" textAnchor="middle">
            FIXED STRAT SUPPLY
          </text>
          <line
            x1={614}
            x2={872}
            y1={205}
            y2={205}
            stroke="#f7931a"
            strokeWidth="1.5"
            markerEnd="url(#sc-arrow)"
          />
        </g>

        <text
          x={848}
          y={408}
          fontSize="17"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 700ms ease 1000ms' }}
        >
          <tspan fill="#ffffff">FIXED STRAT SUPPLY: </tspan>
          <tspan fill="#ffffff" fontWeight="700">
            50,000,000 STRAT
          </tspan>
        </text>

        <g style={{ opacity: inView ? 1 : 0, transition: 'opacity 700ms ease 1150ms' }}>
          <TreasuryCluster x={565} y={570} sizes={[13, 17, 23]} />
          <line
            x1={686}
            x2={716}
            y1={558}
            y2={558}
            stroke="#f7931a"
            strokeWidth="1.5"
            markerEnd="url(#sc-arrow)"
          />
        </g>

        <g style={{ opacity: inView ? 1 : 0, transition: 'opacity 700ms ease 1250ms' }}>
          <rect
            x={PANEL.x}
            y={PANEL.y}
            width={PANEL.w}
            height={PANEL.h}
            rx="12"
            fill="rgba(10,8,5,0.92)"
            stroke="rgba(247,147,26,0.55)"
            strokeWidth="1.5"
          />
          <text
            x={PANEL.x + PANEL.w / 2}
            y={PANEL.y + PANEL.titleY}
            fill="#ffffff"
            fontSize="17"
            fontWeight="700"
            textAnchor="middle"
          >
            STRAT TREASURY ACQUISITION &amp; GROWTH
          </text>
          <line
            x1={PANEL.x + PANEL.padX}
            x2={PANEL.x + PANEL.w - PANEL.padX}
            y1={PANEL.y + PANEL.ruleY}
            y2={PANEL.y + PANEL.ruleY}
            stroke="rgba(247,147,26,0.35)"
          />

          <TreasuryCluster
            x={PANEL.x + PANEL.clusterX}
            y={PANEL.y + PANEL.clusterY}
            sizes={[15, 22]}
          />

          {SOURCES.map((src, i) => (
            <g key={src.title}>
              <path
                d={linkPath(PANEL.rowY[i])}
                fill="none"
                stroke="#f7931a"
                strokeWidth="1.5"
                markerEnd="url(#sc-arrow)"
              />
              <Badge cx={PANEL.x + PANEL.badgeX} cy={PANEL.rowY[i]} r={17} kind={ROW_BADGES[i]} />
              <text
                x={PANEL.x + PANEL.textX}
                y={PANEL.rowY[i] - 4}
                fill="#ffffff"
                fontSize="14.5"
                fontWeight="700"
              >
                {src.title}
              </text>
              <text x={PANEL.x + PANEL.textX} y={PANEL.rowY[i] + 15} fill="#b6b6be" fontSize="12">
                {src.sub}
              </text>
            </g>
          ))}
        </g>

        <text
          transform={`translate(133 ${PLOT_TOP + PLOT_H / 2}) rotate(-90)`}
          fontSize="15"
          textAnchor="middle"
        >
          <tspan fill="#ffffff" fontWeight="700">
            NAV PER STRAT
          </tspan>
          <tspan fill="#b6b6be"> (BTC / STRAT)</tspan>
        </text>
        <text x={PLOT_L + PLOT_W / 2} y={H - 46} fontSize="15" textAnchor="middle">
          <tspan fill="#ffffff" fontWeight="700">
            TIME PERIODS
          </tspan>
          <tspan fill="#b6b6be"> (e.g., Epoch 1, Epoch 6)</tspan>
        </text>

        {/* Painted last: anything drawn above them would swallow the pointer. */}
        <g>
          {steps.map((s, i) => (
            <rect
              key={s.epoch}
              x={xLeft(i)}
              y={PLOT_TOP}
              width={STEP_W}
              height={BASE_Y + 44 - PLOT_TOP}
              fill="transparent"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            />
          ))}
        </g>
      </svg>

      {/* sr-only cannot collapse a <table>, so it goes on a wrapping div. */}
      <div className="sr-only">
        <table>
          <caption>{STAIRCASE.chartTitle}</caption>
          <thead>
            <tr>
              <th scope="col">Epoch</th>
              <th scope="col">NAV per STRAT (BTC)</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((s) => (
              <tr key={s.epoch}>
                <th scope="row">{s.epoch}</th>
                <td>{s.value.toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
