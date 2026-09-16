import { AppImage } from '@/components/ui/AppImage';
import { IMAGE_SIZES } from '@/lib/images';

export function HeroImage() {
  return (
    <div className="hero-media relative w-full max-w-lg overflow-hidden rounded-lg shadow-card">
      <AppImage
        src="/images/hero-depo.jpg"
        alt="Adana Sarıçam OSB’de güvenli eşya deposu ve koli üniteleri"
        fill
        priority
        sizes={IMAGE_SIZES.hero}
        className="object-cover"
      />
    </div>
  );
}
