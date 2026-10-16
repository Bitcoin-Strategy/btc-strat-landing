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
import { GitHubIcon, XIcon } from '@/components/ui/BrandIcon';
import type { SocialLink } from '@/content/site';

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

export const BRAND_ICONS = {
  x: XIcon,
  github: GitHubIcon,
} as const satisfies Record<SocialLink['id'], typeof XIcon>;
