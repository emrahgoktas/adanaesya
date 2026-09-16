'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { fiyatPaketleri, type FiyatPaketi } from '@/data/fiyatlar';
import { fadeUpItem, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';

function formatAylikFiyat(paket: FiyatPaketi): string {
  return `${paket.aylikFiyat.toLocaleString('tr-TR')} TL`;
}

export interface PricingTableProps {
  packages?: FiyatPaketi[];
  className?: string;
  hideTitle?: boolean;
}

export function PricingTable({
  packages = fiyatPaketleri,
  className,
  hideTitle = false,
}: PricingTableProps) {
  const reduceMotion = useReducedMotion();
  const containerVariants = staggerContainer(reduceMotion, 0.06);
  const cardVariants = fadeUpItem(reduceMotion, 16);

  return (
    <section className={cn('bg-white', className)} aria-labelledby="fiyatlar-baslik">
      <Container className={cn('py-14 lg:py-20', hideTitle && 'pt-8 lg:pt-12')}>
        {hideTitle ? null : (
          <SectionTitle
            id="fiyatlar-baslik"
            align="center"
            className="mb-10 lg:mb-14"
            title="Adana Eşya Depolama Fiyatları 2026"
            subtitle="Şeffaf fiyatlandırma, gizli maliyet yok"
          />
        )}

        <motion.ul
          className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:pt-3"
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={containerVariants}
        >
          {packages.map((paket) => {
            const isPopular = paket.populer;
            const showQuote = Boolean(paket.teklifUzerine);

            return (
              <motion.li
                key={paket.id}
                variants={cardVariants}
                className={cn('h-full', isPopular && 'lg:z-10 lg:scale-105')}
              >
                <Card
                  className={cn(
                    'relative flex h-full flex-col p-6',
                    isPopular
                      ? 'border-2 border-red shadow-card-hover'
                      : 'border-navy/10'
                  )}
                >
                  {isPopular ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-red px-3 py-0.5 text-xs font-semibold tracking-wide text-white">
                      POPÜLER
                    </span>
                  ) : null}

                  <p className="text-lg font-bold text-navy">{paket.ad}</p>
                  <p className="mt-0.5 text-sm text-dark-gray/70">{paket.hacim}</p>

                  {showQuote ? (
                    <p className="mt-5 text-3xl leading-none font-extrabold text-red">Teklif Al</p>
                  ) : (
                    <p className="mt-5 text-3xl leading-none font-extrabold text-red">
                      {formatAylikFiyat(paket)}
                    </p>
                  )}
                  <p className="mt-1.5 text-sm text-dark-gray/70">aylık</p>

                  <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                    {paket.ozellikler.map((ozellik) => (
                      <li key={ozellik} className="flex items-start gap-2 text-sm text-dark-gray">
                        <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-success" />
                        <span>{ozellik}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="mt-8 w-full" variant="primary">
                    <Link href="/iletisim">Hemen Teklif Al</Link>
                  </Button>
                </Card>
              </motion.li>
            );
          })}
        </motion.ul>

        <p className="mt-8 text-center text-sm text-dark-gray/70">
          Fiyatlar örnektir; gerçek tutarlar keşif sonrası netleşir.
        </p>
      </Container>
    </section>
  );
}
