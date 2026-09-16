import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { getIlcePath, getIlcelerByTier, type Ilce } from '@/data/ilceler';
import { cn } from '@/lib/utils';

function formatPopulation(population: number): string {
  return `${population.toLocaleString('tr-TR')} nüfus`;
}

function DistrictCard({
  ilce,
  size,
}: {
  ilce: Ilce;
  size: 'lg' | 'md' | 'sm';
}) {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  return (
    <Card
      className={cn(
        'group h-full border-navy/10 p-0 transition-[border-color,box-shadow] hover:border-red',
        isLarge && 'lg:p-0'
      )}
    >
      <div
        className={cn(
          'flex h-full flex-col',
          isLarge && 'p-6 lg:p-8',
          size === 'md' && 'p-5 lg:p-6',
          isSmall && 'p-4'
        )}
      >
        <div className="flex items-start justify-between gap-2">
          <h3
            className={cn(
              'font-bold text-navy',
              isLarge && 'text-[clamp(1.35rem,2.2vw,1.75rem)]',
              size === 'md' && 'text-xl',
              isSmall && 'text-base'
            )}
          >
            {ilce.name}
          </h3>
          {ilce.tier === 1 ? (
            <Badge size="sm">Popüler</Badge>
          ) : null}
        </div>
        <p className={cn('mt-1 text-dark-gray/70', isSmall ? 'text-xs' : 'text-sm')}>
          {formatPopulation(ilce.population)}
        </p>
        <p
          className={cn(
            'mt-2 font-medium text-navy',
            isSmall ? 'text-sm' : 'text-base'
          )}
        >
          Eşya Depolama
        </p>
        <div className="mt-auto pt-4">
          {isSmall ? (
            <Link
              href={getIlcePath(ilce.slug)}
              className="inline-flex items-center gap-1 text-sm font-semibold text-red hover:text-dark-red"
            >
              Detaylı Bilgi
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          ) : (
            <Button asChild variant={isLarge ? 'primary' : 'outline'} size={isLarge ? 'md' : 'sm'}>
              <Link href={getIlcePath(ilce.slug)}>Detaylı Bilgi</Link>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

export function BolgelerIndexCards() {
  const large = getIlcelerByTier(1);
  const remaining = [...getIlcelerByTier(2), ...getIlcelerByTier(3)];
  const medium = remaining.slice(0, 2);
  const small = remaining.slice(2);

  return (
    <section className="bg-white" aria-label="İlçe listesi">
      <Container className="space-y-12 py-10 pb-14 lg:space-y-16 lg:py-12 lg:pb-20">
        <div>
          <h2 className="mb-6 text-lg font-bold text-navy lg:text-xl">Merkez ilçeler</h2>
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {large.map((ilce) => (
              <li key={ilce.slug}>
                <DistrictCard ilce={ilce} size="lg" />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-lg font-bold text-navy lg:text-xl">Bölge ilçeleri</h2>
          <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
            {medium.map((ilce) => (
              <li key={ilce.slug}>
                <DistrictCard ilce={ilce} size="md" />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-lg font-bold text-navy lg:text-xl">Diğer ilçeler</h2>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {small.map((ilce) => (
              <li key={ilce.slug}>
                <DistrictCard ilce={ilce} size="sm" />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
