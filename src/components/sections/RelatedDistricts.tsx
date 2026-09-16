import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { getIlcePath, getNearbyIlceler } from '@/data/ilceler';

export interface RelatedDistrictsProps {
  currentSlug: string;
  count?: number;
}

export function RelatedDistricts({ currentSlug, count = 4 }: RelatedDistrictsProps) {
  const nearby = getNearbyIlceler(currentSlug, count);
  if (nearby.length === 0) return null;

  return (
    <section className="bg-white" aria-labelledby="yakin-ilceler">
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id="yakin-ilceler"
          title="Yakındaki İlçeler"
          subtitle="Coğrafi olarak en yakın ilçelerde aynı keşif ve güvenlik standardı geçerlidir."
          className="mb-8 lg:mb-10"
        />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {nearby.map((ilce) => (
            <li key={ilce.slug}>
              <Card className="group hover:border-red h-full p-0 transition-[border-color,box-shadow]">
                <Link href={getIlcePath(ilce.slug)} className="flex h-full flex-col p-5">
                  <span className="bg-red/10 text-red mb-3 inline-flex size-9 items-center justify-center rounded-lg">
                    <MapPin aria-hidden className="size-4" />
                  </span>
                  <h3 className="text-navy text-lg font-bold">{ilce.name} Eşya Depolama</h3>
                  <p className="text-dark-gray/75 mt-2 line-clamp-3 flex-1 text-sm">
                    {ilce.nedenler[0]}
                  </p>
                  <span className="text-red mt-4 inline-flex items-center gap-1 text-sm font-semibold">
                    İlçe sayfasına git
                    <ArrowRight
                      aria-hidden
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
