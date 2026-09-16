import { HeroContent, type HeroProps } from '@/components/sections/HeroContent';
import { HeroImage } from '@/components/sections/HeroImage';

export type { HeroCta, HeroProps } from '@/components/sections/HeroContent';

export function Hero(props: HeroProps) {
  return <HeroContent {...props} illustration={<HeroImage />} />;
}
