'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { AppImage } from '@/components/ui/AppImage';
import { SITE_IMAGES } from '@/data/site-images';
import { IMAGE_SIZES } from '@/lib/images';
import { formatPhone } from '@/lib/utils';
import type { HeroCta, HeroProps } from '@/components/sections/HeroContent';

export type { HeroCta, HeroProps };

const SLIDES = [SITE_IMAGES.heroPrimary, SITE_IMAGES.heroSecondary] as const;

export function Hero({
  adHeadline,
  seoHeadline,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  phone,
}: HeroProps) {
  const phoneLabel = formatPhone(phone);
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section
      className="hero relative isolate min-h-[min(92svh,44rem)] overflow-hidden text-white lg:min-h-[min(88svh,48rem)]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence initial={false} mode="sync">
          {SLIDES.map((slide, i) =>
            i === index ? (
              <motion.div
                key={slide.src}
                className="absolute inset-0"
                initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <AppImage
                  src={slide.src}
                  alt=""
                  fill
                  priority={i === 0}
                  sizes={IMAGE_SIZES.heroFull}
                  className="object-cover object-center"
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,37,64,0.9)_0%,rgba(10,37,64,0.72)_34%,rgba(10,37,64,0.38)_58%,rgba(10,37,64,0.5)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,37,64,0.5)_0%,transparent_40%)]" />
      </div>

      <Container className="relative z-10 flex min-h-[min(92svh,44rem)] flex-col justify-center py-16 lg:min-h-[min(88svh,48rem)] lg:py-24">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold tracking-[0.18em] text-white/80 uppercase">
            01 Taşımacılık · Adana
          </p>
          <h1
            id="hero-heading"
            className="font-heading mt-4 text-[clamp(2.35rem,6vw,4.25rem)] leading-[1.05] font-extrabold text-white drop-shadow-[0_2px_12px_rgba(10,37,64,0.55)]"
          >
            <span className="ad-headline block">{adHeadline}</span>
            <span className="seo-headline mt-2 block text-[clamp(1.15rem,2.6vw,1.65rem)] font-semibold text-white/95">
              {seoHeadline.replace(/^\s*—\s*/, '')}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/92 md:text-lg drop-shadow-sm">{subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild variant="primary" size="lg">
              <Link href={ctaPrimary.href}>{ctaPrimary.text}</Link>
            </Button>
            {ctaSecondary ? (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-navy"
              >
                <Link href={ctaSecondary.href}>{ctaSecondary.text}</Link>
              </Button>
            ) : null}
          </div>
          <a
            href={`tel:${phone}`}
            className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-white hover:underline"
            aria-label={`Hemen ara: ${phoneLabel}`}
          >
            <Phone aria-hidden className="size-5" />
            {phoneLabel}
          </a>
        </div>

        <div className="mt-10 flex gap-2" aria-label="Hero görselleri">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Görsel ${i + 1}: ${slide.alt}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                i === index ? 'w-10 bg-red' : 'w-5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </Container>

      <svg
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-10 w-full text-white md:h-14"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path fill="currentColor" d="M0 48c240 32 480-32 720 0s480 32 720 0v32H0V48Z" />
      </svg>
    </section>
  );
}
