import type { IconName } from '@/lib/icons';

export const BRAND = {
  name: 'Bitcoin Strategy',
  tagline: 'Onchain Treasury Protocol',
  ticker: 'STRAT',
  maxSupply: '50,000,000',
  maxSupplyShort: '50M',
  status: 'Preparing for Mainnet',
  appUrl: 'https://app.btc-strategy.org',
  copyright: '© 2026 Bitcoin Strategy. Non-custodial protocol.',
  footerNote: 'Rules-Based Treasury Coordination',
} as const;

export type NavItem = { id: string; label: string; soon?: boolean };

export const NAV: readonly NavItem[] = [
  { id: 'why', label: 'Why Bitcoin Strategy' },
  { id: 'nav-staircase', label: 'NAV Staircase' },
  { id: 'digital-capital', label: 'Digital Capital' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'premium-capture', label: 'Premium Capture' },
  { id: 'treasury', label: 'Treasury' },
  { id: 'strategy-network', label: 'Strategy Network', soon: true },
];

export const HERO = {
  badge: '50,000,000 STRAT · FIXED SUPPLY',
  titleTop: '50 Million STRAT.',
  titleAccent: 'Fixed-Supply Bitcoin Treasury Protocol.',
  lede: 'Bitcoin Strategy is a rules-based accumulation engine designed to convert capital formation, market premiums and protocol revenue into Bitcoin while STRAT’s maximum supply remains fixed.',
  kicker: 'Fixed supply. Expanding treasury. Growing BTC backing per STRAT.',
  callout: {
    title: 'More treasury Bitcoin. Same 50M STRAT.',
    body: 'As the treasury grows across a fixed supply, BTC backing and NAV per STRAT can grow with it.',
  },
  primaryCta: { label: 'Explore Treasury', href: '#treasury' },
  secondaryCta: { label: 'How It Works', href: '#how-it-works' },
} as const;

export type Metric = {
  label: string;
  tag: string;
  unit?: string;
  foot: string;
  accent?: boolean;
  hint?: string;
};

export const HERO_STATS: readonly Metric[] = [
  { label: 'BTC Treasury', tag: 'Placeholder', unit: 'BTC', foot: 'Onchain Reserve' },
  { label: 'STRAT Price', tag: 'Placeholder', foot: 'Secondary Market' },
  {
    label: 'NAV per STRAT',
    tag: '50M Supply',
    foot: 'Treasury / 50M STRAT',
    accent: true,
    hint: 'Treasury value divided across the fixed 50,000,000 STRAT supply.',
  },
  {
    label: 'Price / NAV',
    tag: 'Ratio',
    foot: 'Valuation Multiple',
    hint: 'Secondary market price relative to treasury backing.',
  },
];

export const WHY = {
  eyebrow: 'Capital Architecture',
  title: 'Why Bitcoin Strategy?',
  lede: 'Holding Bitcoin gives direct exposure to Bitcoin. Bitcoin Strategy is designed to use capital formation and protocol activity to increase the amount of Bitcoin backing a fixed supply of STRAT.',
  cards: [
    {
      icon: 'bitcoin',
      tag: 'Direct Digital Capital',
      title: 'Hold Bitcoin',
      body: 'Own BTC directly. Your exposure rises and falls with Bitcoin itself.',
      metaLabel: 'Exposure:',
      metaValue: '1 BTC = 1 BTC',
      featured: false,
    },
    {
      icon: 'layers',
      tag: 'Rules-Based Treasury Exposure',
      title: 'Bitcoin Strategy',
      body: 'Hold a fixed-supply token whose NAV is measured against a Bitcoin treasury designed to accumulate more BTC over time.',
      metaLabel: 'Objective:',
      metaValue: 'Rules-Based Accumulation',
      featured: true,
    },
  ],
  footnote: '50M STRAT stays fixed. If the treasury grows, BTC backing and NAV per STRAT grow with it.',
} as const;

export const STAIRCASE = {
  eyebrow: 'Mathematical Model',
  title: 'The NAV Staircase',
  subtitle: '50M STRAT stays fixed. The Bitcoin treasury does not have to.',
  body: 'Bonding, Premium Capture and future protocol revenue are designed to add Bitcoin to the treasury. As treasury value grows across the same fixed supply, NAV per STRAT can rise step by step.',
  chartLabel: 'NAV model: total Bitcoin treasury / 50,000,000 STRAT',
  chartTag: 'Illustrative Protocol Model',
  chartTitle: 'STRAT Net Asset Value (NAV) Ascension',
  axisY: 'NAV per STRAT (BTC / STRAT)',
  axisX: 'Time periods (e.g. Epoch 1 → Epoch 6)',
  steps: [
    { epoch: 'Epoch 1', value: 0.0021 },
    { epoch: 'Epoch 2', value: 0.0024 },
    { epoch: 'Epoch 3', value: 0.0028 },
    { epoch: 'Epoch 4', value: 0.0033 },
    { epoch: 'Epoch 5', value: 0.0039 },
    { epoch: 'Epoch 6', value: 0.0046 },
  ],
  mechanism: {
    label: 'The Accretion Mechanism',
    inputs: ['Bonding', 'Premium Capture', 'Strategy Network Revenue'],
    chain: [
      { label: 'More Bitcoin', tone: 'btc' },
      { label: 'Higher BTC Backing per STRAT', tone: 'mint' },
      { label: 'Higher NAV', tone: 'strong' },
    ],
  },
  pillars: [
    { title: 'Fixed Supply', body: '50,000,000 STRAT maximum.', tone: 'btc', icon: 'lock' },
    {
      title: 'Treasury Accumulation',
      body: 'Protocol activity is designed to add BTC.',
      tone: 'btc',
      icon: 'trending',
    },
    {
      title: 'NAV Staircase',
      body: 'Treasury growth can increase BTC backing per STRAT over time.',
      tone: 'mint',
      icon: 'sparkles',
    },
  ],
} as const;

export const DIGITAL_CAPITAL = {
  eyebrow: 'DIGITAL CAPITAL → DIGITAL CREDIT',
  title: 'Preserve the Asset. Build on Top of It.',
  paragraphs: [
    'If a wealthy family owned a block of Manhattan, they wouldn’t sell off pieces every time they needed cash. They would collateralize the asset and borrow against it, preserving the thing that continues to appreciate.',
    'Bitcoin Strategy follows the same principle: accumulate the Bitcoin, preserve the treasury, then build credit around it.',
  ],
  quote: '“Preserve the Bitcoin. Build the Capital Stack.”',
  quoteSub: 'Digital Capital first. Digital Credit next.',
  roadmapEyebrow: 'Long-term protocol progression',
  roadmapLabel: 'Phase Roadmap',
  phases: [
    {
      n: '01',
      kicker: 'Digital Capital',
      tag: 'Foundation • Phase 1',
      title: 'Accumulate Bitcoin',
      body: 'Accumulate onchain Bitcoin reserves through Bonding, Premium Capture and protocol revenue without expanding STRAT’s fixed 50M supply.',
      live: true,
    },
    {
      n: '02',
      kicker: 'Digital Credit',
      tag: 'Future Architecture',
      title: 'Build financing around the treasury',
      body: 'At sufficient scale, explore Bitcoin-backed credit and liquidity structures to provide financing without requiring the protocol to continually sell its underlying Bitcoin.',
      live: false,
    },
    {
      n: '03',
      kicker: 'Digital Yield / Future Financial Infrastructure',
      tag: 'Future Architecture',
      title: 'Create additional products on top of the capital base',
      body: 'Create additional income-oriented products, liquidity tools, and protocol modules developed on top of the preserved capital base.',
      live: false,
    },
  ],
  // Hidden at the client's request; kept so the block can be restored.
  disclaimer:
    'Future Architecture: Digital Credit and Digital Yield represent conceptual design roadmaps and are not currently live.',
  disclaimerAside: 'No loans offered • No tax determinations',
} as const;

export type Inflow = {
  icon: IconName;
  tag: string;
  title: string;
  body: string;
  metaLabel: string;
  metaValue?: string;
  split?: readonly { pct: number; label: string }[];
  soon: boolean;
};

export const ENGINE: {
  eyebrow: string;
  title: string;
  lede: string;
  inflows: readonly Inflow[];
  pipeline: {
    label: string;
    tag: string;
    sources: readonly { title: string; sub: string; soon?: boolean }[];
    core: { tag: string; title: string; body: string };
    vault: { title: string; body: string };
    output: { title: string; body: string };
  };
} = {
  eyebrow: 'The Accumulation Engine',
  title: 'How the Treasury Grows',
  lede: 'Bonding, Premium Capture, and future Strategy Network revenue are designed to channel Bitcoin directly into the treasury without expanding STRAT’s fixed 50M supply.',
  inflows: [
    {
      icon: 'coins',
      tag: 'Inflow 01',
      title: 'Bonding',
      body: 'Limited Bond Series allow long-term participants to contribute approved assets in exchange for vesting STRAT exposure. Most contributed capital is designed to flow toward Bitcoin accumulation.',
      metaLabel: 'Target Routing:',
      split: [
        { pct: 92, label: 'BTC Accumulation' },
        { pct: 6, label: 'Protocol-Owned Liquidity' },
        { pct: 2, label: 'Development' },
      ],
      soon: false,
    },
    {
      icon: 'zap',
      tag: 'Inflow 02',
      title: 'Premium Capture',
      body: 'When STRAT trades at a sustained market premium, limited protocol reserve supply can be released into genuine demand and the proceeds converted into additional Bitcoin.',
      metaLabel: 'Execution Rule:',
      metaValue: 'TWAP Banded Sales',
      soon: false,
    },
    {
      icon: 'network',
      tag: 'Coming Soon',
      title: 'Strategy Network Revenue',
      body: 'Future independent Strategy deployments can route a predefined share of protocol revenue back to Bitcoin Strategy.',
      metaLabel: 'Revenue Share:',
      metaValue: '1% Intended Revenue Routing',
      soon: true,
    },
  ],
  pipeline: {
    label: 'Deterministic inflow pipeline',
    tag: 'Rules-Based Treasury Routing',
    sources: [
      { title: 'Bonding', sub: '92% BTC / 6% POL / 2% Dev' },
      { title: 'Premium Capture', sub: 'Demand Conversion' },
      { title: 'Strategy Network Revenue', sub: 'Coming Soon', soon: true },
    ],
    core: {
      tag: 'Core Engine',
      title: 'Bitcoin Strategy',
      body: 'Rules-based onchain treasury coordination contracts converting inbound proceeds into Bitcoin.',
    },
    vault: {
      title: 'Bitcoin Treasury',
      body: 'Dedicated onchain vault custodying physical BTC-denominated reserves.',
    },
    output: {
      title: 'BTC Backing / NAV per STRAT',
      body: 'Treasury value divided across STRAT’s fixed 50,000,000 maximum supply.',
    },
  },
};

export const PREMIUM = {
  eyebrow: 'Capital Formation',
  title: 'Turn Market Premium Into Bitcoin',
  paragraphs: [
    'When market demand values STRAT above its treasury backing, Bitcoin Strategy is designed to convert a controlled portion of that premium into additional Bitcoin.',
    'Instead of allowing all elevated market valuation to remain purely secondary speculation, the protocol can use limited reserve supply to capitalize the treasury.',
  ],
  cycleLabel: 'Dynamic capitalization cycle',
  cycleTag: 'Monetizing Secondary Demand',
  stages: [
    {
      n: 'Stage 01',
      title: 'STRAT Demand ↑',
      body: 'Market valuation trades at a sustained premium above treasury backing',
    },
    {
      n: 'Stage 02',
      title: 'Controlled Premium Capture',
      body: 'Limited reserve supply released into genuine demand via TWAP',
    },
    {
      n: 'Stage 03',
      title: 'Bitcoin Acquisition',
      body: 'Captured proceeds systematically routed into physical Bitcoin',
    },
    {
      n: 'Stage 04',
      title: 'Treasury ↑',
      body: 'Total Bitcoin reserves in the vault permanently expand',
    },
    {
      n: 'Stage 05',
      title: 'NAV ↑',
      body: 'Higher Bitcoin backing divided across the fixed 50M supply',
    },
  ],
  footer:
    'Execution Parameters: Governed by TWAP windows, valuation thresholds, and capacity limits.',
  footerAside: 'Governance-defined parameters • STRAT Max Supply: 50,000,000 Hard Cap',
} as const;

const TREASURY_METRICS: readonly Metric[] = [
    { label: 'Treasury BTC', tag: 'Placeholder', unit: 'BTC', foot: 'Onchain Bitcoin Custody' },
    { label: 'Treasury USD Value', tag: 'Placeholder', unit: 'USD', foot: 'Mark-to-Market Reserves' },
    { label: 'BTC per STRAT', tag: 'Backing', unit: 'BTC', foot: 'Bitcoin per 1 STRAT', accent: true },
    { label: 'NAV per STRAT', tag: 'USD', unit: 'USD', foot: 'Treasury / 50M Max Supply' },
];

export const TREASURY = {
  eyebrow: 'Onchain Transparency',
  title: 'Transparent Bitcoin Treasury',
  lede: 'NAV represents the value of the Bitcoin treasury divided across STRAT’s fixed 50,000,000 maximum supply.',
  metrics: TREASURY_METRICS,
  sourcesLabel: 'Treasury accumulation sources',
  sourcesTag: 'Source Attribution',
  sources: [
    {
      icon: 'coins',
      title: 'BTC Added Through Bonding',
      sub: 'Capital Formation',
      unit: 'BTC',
      foot: '92% directed into Bitcoin',
      soon: false,
    },
    {
      icon: 'zap',
      title: 'BTC Added Through Premium Capture',
      sub: 'Demand Monetization',
      unit: 'BTC',
      foot: 'Converted from sustained premiums',
      soon: false,
    },
    {
      icon: 'network',
      title: 'BTC Added Through Strategy Network Revenue',
      sub: 'Ecosystem Fee Routing',
      unit: 'BTC',
      foot: '1% intended fee routing from future deployments',
      soon: true,
    },
  ],
} as const;

export const NETWORK = {
  eyebrow: 'TREASURY LAUNCHER · COMING SOON',
  title: 'One Treasury Engine. A Network of Strategies.',
  lede: 'Bitcoin Strategy is the flagship implementation of a reusable treasury engine. Treasury Launcher is designed to let new Strategies build around their own target assets while onchain activity creates creator revenue and contributes Strategy Network Revenue back to Bitcoin Strategy.',
  lifecycleLabel: 'Treasury lifecycle & revenue routing',
  lifecycleTag: 'Future Infrastructure',
  lifecycle: [
    {
      icon: 'rocket',
      step: '01',
      title: 'Launch a Strategy',
      body: 'Creators deploy a dedicated treasury around a supported target asset with isolated smart contracts.',
      foot: 'Independent Vault',
      featured: false,
    },
    {
      icon: 'coins',
      step: '02',
      title: 'Accumulate Target Asset',
      body: 'The strategy applies rules-based accumulation to compound its own separate treasury reserve.',
      foot: 'Asset-Specific Reserve',
      featured: false,
    },
    {
      icon: 'activity',
      step: '03',
      title: 'Generate Onchain Revenue',
      body: 'Onchain strategy interactions and protocol operations generate sustainable fee capture.',
      foot: 'Activity-Based Fees',
      featured: false,
    },
    {
      icon: 'network',
      step: '04',
      title: 'Dual Revenue Share',
      body: 'Creator Revenue rewards the strategy builder, while Strategy Network Revenue routes to the network.',
      foot: 'Creator + Protocol Alignment',
      featured: true,
    },
  ],
  bridge: {
    title: 'Strategy Network Revenue Feeds Bitcoin Strategy',
    body: 'A defined share of Strategy network activity feeds Bitcoin Strategy’s engine to accumulate additional Bitcoin.',
    tag: 'Feeds BTC Accumulation Engine',
  },
  archLabel: 'Network architecture',
  archTag: 'Modular Treasury Framework',
  nodes: [
    {
      badge: 'Flagship',
      symbol: '₿',
      title: 'Bitcoin Strategy',
      sub: 'Flagship Protocol',
      rows: [
        { k: 'Strategy:', v: 'Bitcoin Strategy', tone: 'white' },
        { k: 'Target Asset:', v: 'Bitcoin (BTC)', tone: 'btc' },
        { k: 'Status:', v: 'Flagship · Live', tone: 'mint' },
        { k: 'Creator Revenue:', v: 'Protocol Origin', tone: 'muted' },
        { k: 'Network Role:', v: 'Primary Accumulation Hub', tone: 'btc' },
      ],
      body: 'The flagship treasury implementation. Focuses exclusively on accumulating Bitcoin and serves as the recipient hub for Strategy Network Revenue.',
      footLabel: '',
      footValue: 'Central Accumulation Hub',
      featured: true,
    },
    {
      badge: 'Planned Strategy',
      symbol: 'ⓩ',
      title: 'ZEC Strategy',
      sub: 'Planned Deployment',
      rows: [
        { k: 'Strategy:', v: 'ZEC Strategy', tone: 'white' },
        { k: 'Target Asset:', v: 'Zcash (ZEC)', tone: 'amber' },
        { k: 'Status:', v: 'Planned Concept', tone: 'amber' },
        { k: 'Creator Revenue:', v: 'Onchain Creator Share', tone: 'mint' },
        { k: 'Contribution:', v: 'Feeds Bitcoin Strategy', tone: 'btc' },
      ],
      body: 'Planned independent accumulation engine for privacy asset reserves. Maintains its own segregated treasury while contributing network revenue to Bitcoin Strategy.',
      footLabel: 'Network contribution:',
      footValue: 'Feeds Bitcoin Strategy',
      featured: false,
    },
    {
      badge: 'Future Strategy',
      symbol: '+',
      title: 'Future Strategy',
      sub: 'Reusable Deployment',
      rows: [
        { k: 'Strategy:', v: 'New Strategy', tone: 'white' },
        { k: 'Target Asset:', v: 'Supported Target Asset', tone: 'white' },
        { k: 'Status:', v: 'Future Infrastructure', tone: 'muted' },
        { k: 'Creator Revenue:', v: 'Onchain Creator Share', tone: 'mint' },
        { k: 'Contribution:', v: 'Feeds Bitcoin Strategy', tone: 'btc' },
      ],
      body: 'Any supported asset can anchor a new treasury strategy via Treasury Launcher, with isolated custody, creator fee participation, and network routing.',
      footLabel: 'Network contribution:',
      footValue: 'Feeds Bitcoin Strategy',
      featured: false,
    },
  ],
  creator: {
    eyebrow: 'Creator Economics',
    title: 'Build the Strategy. Participate in its Revenue.',
    body: 'Onchain creator fees can reward Strategy creators while a protocol share strengthens the wider Strategy network.',
    stats: [
      { label: 'Creator Revenue', value: 'Onchain Activity Share', accent: false },
      { label: 'Network Contribution', value: 'Feeds Bitcoin Strategy', accent: true },
    ],
  },
  guarantees: [
    {
      icon: 'lock',
      title: 'Separate Treasuries',
      body: 'Each treasury is completely separate. Assets are not pooled, cross-collateralized, or co-mingled. Each Strategy owns its own treasury.',
    },
    {
      icon: 'shield',
      title: 'Bitcoin Exclusivity',
      body: 'Bitcoin Strategy remains focused exclusively on accumulating and holding physical Bitcoin reserves as the flagship protocol.',
    },
    {
      icon: 'network',
      title: 'Network Contribution',
      body: 'A share of Strategy revenue feeds Bitcoin Strategy. Exact revenue percentages will be defined by protocol governance and smart contracts.',
    },
    {
      icon: 'sparkles',
      title: 'Future Infrastructure',
      body: 'Treasury Launcher is planned future infrastructure. It represents the planned evolution of the reusable treasury accumulation framework.',
    },
  ],
} as const;

export const FINAL_CTA = {
  badge: '50,000,000 STRAT Fixed Maximum Supply',
  title: 'More Treasury Bitcoin. Same 50M STRAT.',
  lede: 'Bitcoin Strategy is a rules-based Bitcoin treasury accumulation protocol designed to grow BTC backing across a fixed 50,000,000 supply.',
  ctas: [
    { label: 'Explore Treasury', href: '#treasury', primary: true, icon: 'layers' },
    { label: 'How It Works', href: '#how-it-works', primary: false, icon: 'chevronRight' },
    { label: 'NAV Staircase', href: '#nav-staircase', primary: false, icon: 'trending' },
  ],
} as const;

export const FOOTER = {
  blurb:
    'Rules-based Bitcoin treasury accumulation protocol operating across a fixed 50,000,000 STRAT supply.',
  columns: [
    {
      title: 'Architecture',
      links: [
        { label: 'Why Bitcoin Strategy', href: '#why' },
        { label: 'NAV Staircase', href: '#nav-staircase' },
        { label: 'Digital Capital', href: '#digital-capital' },
        { label: 'Accumulation Engine', href: '#how-it-works' },
        { label: 'Premium Capture', href: '#premium-capture' },
        { label: 'Transparent Treasury', href: '#treasury' },
        { label: 'Strategy Network', href: '#strategy-network', soon: true },
      ],
    },
    {
      title: 'Transparency',
      links: [
        { label: 'Treasury Vault Assets', href: '#treasury' },
        { label: 'NAV per Token Model', href: '#nav-staircase' },
        { label: 'Timelock: 48 Hours', href: '', muted: true },
        { label: 'Rules-Based Parameters', href: '', muted: true },
      ],
    },
  ],
  status: {
    title: 'Network Status',
    rows: [
      ['Environment:', 'Preparing for Mainnet'],
      ['Fixed Supply:', '50,000,000 STRAT'],
      ['Network Share:', '1% Intended (Soon)'],
    ],
  },
  disclaimer:
    'Bitcoin Strategy is experimental decentralized software. STRAT represents fixed supply exposure to the treasury’s growth. Holding STRAT does not guarantee commercial profit, fixed yield, or contractual asset redemption. Treasury growth can increase NAV per STRAT, but secondary market prices remain subject to volatility and market conditions.',
} as const;
