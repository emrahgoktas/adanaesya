'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  Armchair,
  ArrowRight,
  Boxes,
  FolderArchive,
  GraduationCap,
  Package,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { fadeUpItem, staggerContainer } from '@/lib/motion';
import type { Hizmet } from '@/data/hizmetler';

const ICONS: Record<string, LucideIcon> = {
  Armchair,
  Boxes,
  FolderArchive,
  GraduationCap,
  Package,
};

export interface ServiceCardsProps {
  services: Hizmet[];
}

export function ServiceCards({ services }: ServiceCardsProps) {
  const reduceMotion = useReducedMotion();
  const containerVariants = staggerContainer(reduceMotion, 0.06);
  const cardVariants = fadeUpItem(reduceMotion, 16);

  return (
    <section className="bg-white" aria-labelledby="hizmetler-baslik">
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id="hizmetler-baslik"
          align="center"
          className="mb-10 lg:mb-12"
          title="Adana Eşya Depolama Hizmetlerimiz"
          subtitle="İhtiyacınıza uygun 5 farklı depolama çözümü"
        />

        <motion.ul
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {services.map((service) => {
            const Icon = ICONS[service.icon] ?? Package;

            return (
              <motion.li key={service.slug} variants={cardVariants} className="h-full">
                <Card className="group flex h-full flex-col border-navy/10 p-6 transition-[box-shadow,border-color] duration-200 hover:border-red hover:shadow-card-hover">
                  <span className="mb-5 inline-flex size-12 items-center justify-center rounded-lg bg-red text-white">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <h3 className="text-lg font-bold text-navy">{service.name}</h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-dark-gray/80">
                    {service.ozet}
                  </p>
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-red transition-colors hover:text-dark-red"
                  >
                    Detaylı Bilgi
                    <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </Card>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </section>
  );
}
