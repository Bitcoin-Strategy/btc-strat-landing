import { useReveal } from '@/hooks/useReveal';
import { Background } from '@/components/layout/Background';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { WhyStrategy } from '@/components/sections/WhyStrategy';
import { NavStaircase } from '@/components/sections/NavStaircase';
import { DigitalCapital } from '@/components/sections/DigitalCapital';
import { AccumulationEngine } from '@/components/sections/AccumulationEngine';
import { PremiumCapture } from '@/components/sections/PremiumCapture';
import { Treasury } from '@/components/sections/Treasury';
import { StrategyNetwork } from '@/components/sections/StrategyNetwork';
import { FinalCta } from '@/components/sections/FinalCta';

export default function App() {
  useReveal();

  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero />
        <WhyStrategy />
        <NavStaircase />
        <DigitalCapital />
        <AccumulationEngine />
        <PremiumCapture />
        <Treasury />
        <StrategyNetwork />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
