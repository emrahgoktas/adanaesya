'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { cn } from '@/lib/utils';
import { fadeUpItem, staggerContainer } from '@/lib/motion';
import { getIlcePath, type Ilce } from '@/data/ilceler';

function sortByTier(districts: Ilce[]): Ilce[] {
  return [...districts].sort((a, b) => a.tier - b.tier);
}

function formatPopulation(population: number): string {
  return `${population.toLocaleString('tr-TR')} nüfus`;
}

export interface DistrictGridProps {
  districts: Ilce[];
  title?: string;
  subtitle?: string;
  className?: string;
  headingId?: string;
}

export function DistrictGrid({
  districts,
  title = 'Adana’nın Tüm İlçelerinde Eşya Depolama',
  subtitle = '15 ilçede güvenli depolama hizmeti',
  className,
  headingId = 'bolgeler-baslik',
}: DistrictGridProps) {
  const reduceMotion = useReducedMotion();
  const ordered = sortByTier(districts);
  const containerVariants = staggerContainer(reduceMotion, 0.03);
  const cardVariants = fadeUpItem(reduceMotion, 12);

  return (
    <section className={cn('bg-gray', className)} aria-labelledby={headingId}>
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id={headingId}
          align="center"
          className="mb-10 lg:mb-12"
          title={title}
          subtitle={subtitle}
        />

        <motion.ul
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 lg:grid-cols-5"
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={containerVariants}
        >
          {ordered.map((district) => (
            <motion.li key={district.slug} variants={cardVariants} className="h-full">
              <Card className="group h-full border-navy/10 p-0 transition-[background-color,color,border-color,box-shadow] duration-200 hover:border-red hover:bg-red hover:text-white hover:shadow-card-hover">
                <Link
                  href={getIlcePath(district.slug)}
                  className="flex h-full flex-col p-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-navy transition-colors duration-200 group-hover:text-white">
                      {district.name}
                    </h3>
                    {district.tier === 1 ? (
                      <Badge
                        size="sm"
                        className="transition-colors duration-200 group-hover:bg-white group-hover:text-red"
                      >
                        Popüler
                      </Badge>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm text-dark-gray/70 transition-colors duration-200 group-hover:text-white/90">
                    Eşya Depolama
                  </p>
                  {district.population ? (
                    <p className="mt-2 text-xs text-dark-gray/70 transition-colors duration-200 group-hover:text-white/80">
                      {formatPopulation(district.population)}
                    </p>
                  ) : null}
                </Link>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
