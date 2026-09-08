import {
  Activity,
  Bitcoin,
  ChevronRight,
  Coins,
  Layers,
  Lock,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react';

export const ICONS = {
  activity: Activity,
  bitcoin: Bitcoin,
  chevronRight: ChevronRight,
  coins: Coins,
  layers: Layers,
  lock: Lock,
  network: Network,
  rocket: Rocket,
  shield: ShieldCheck,
  sparkles: Sparkles,
  trending: TrendingUp,
  zap: Zap,
} as const;

export type IconName = keyof typeof ICONS;
