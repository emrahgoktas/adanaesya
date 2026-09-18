import { Phone } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { formatPhone } from '@/lib/utils';

export interface HeroCta {
  text: string;
  href: string;
}

export interface HeroProps {
  adHeadline: string;
  seoHeadline: string;
  subtitle: string;
  ctaPrimary: HeroCta;
  ctaSecondary?: HeroCta;
  phone?: string;
  badge?: string;
}

export function HeroContent({
  adHeadline,
  seoHeadline,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  phone,
  badge,
  illustration,
}: HeroProps & { illustration: ReactNode }) {
  const phoneLabel = phone ? formatPhone(phone) : null;

  return (
    <section
      className="hero relative min-h-[28rem] overflow-hidden text-white lg:min-h-[36rem]"
      style={{ background: 'linear-gradient(135deg, #0A2540 0%, #1B4F8A 100%)' }}
      aria-labelledby="hero-heading"
    >
      <Container className="relative z-10 grid items-center gap-10 pt-12 pb-24 lg:grid-cols-2 lg:gap-16 lg:pt-16 lg:pb-28">
        <div>
          {badge ? (
            <Badge className="mb-4 border border-white/20 bg-white/10 text-white" variant="red">
              {badge}
            </Badge>
          ) : null}
          <h1
            id="hero-heading"
            className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] font-extrabold"
            style={{ color: '#fff' }}
          >
            <span className="ad-headline">{adHeadline}</span>
            <span className="seo-headline">{seoHeadline}</span>
          </h1>
          <p
            className="mt-5 max-w-xl text-base md:text-lg"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="primary" size="lg">
              <Link href={ctaPrimary.href}>{ctaPrimary.text}</Link>
            </Button>
            {ctaSecondary ? (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:text-navy border-white text-white hover:bg-white"
              >
                <Link href={ctaSecondary.href}>{ctaSecondary.text}</Link>
              </Button>
            ) : null}
          </div>
          {phone && phoneLabel ? (
            <a
              href={`tel:${phone}`}
              className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-white hover:underline"
              aria-label={`Hemen ara: ${phoneLabel}`}
            >
              <Phone aria-hidden className="size-5" />
              {phoneLabel}
            </a>
          ) : null}
        </div>

        <div className="flex justify-center lg:justify-end">{illustration}</div>
      </Container>

      <svg
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-12 w-full text-white md:h-16"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path fill="currentColor" d="M0 40c240 40 480-40 720 0s480 40 720 0v40H0V40Z" />
      </svg>
    </section>
  );
}
