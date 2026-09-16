import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { getIlcePath, type Ilce } from '@/data/ilceler';

export interface NearbyDistrictsProps {
  current: Ilce;
  nearby: Ilce[];
}

export function NearbyDistricts({ current, nearby }: NearbyDistrictsProps) {
  if (nearby.length === 0) return null;

  const headingId = `${current.slug}-yakin`;

  return (
    <section className="bg-white" aria-labelledby={headingId}>
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id={headingId}
          title={`${current.name} Yakınındaki İlçeler`}
          subtitle="Komşu ilçelerde de aynı güvenlik ve keşif standardı geçerli."
          className="mb-8 lg:mb-10"
        />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {nearby.map((ilce) => (
            <li key={ilce.slug}>
              <Card className="h-full p-0 transition-[border-color,box-shadow] hover:border-red">
                <Link href={getIlcePath(ilce.slug)} className="flex h-full flex-col p-5">
                  <h3 className="text-lg font-bold text-navy">{ilce.name} Eşya Depolama</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-dark-gray/75">
                    {ilce.nedenler[0]}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-red">
                    İlçe sayfasına git
                    <ArrowRight aria-hidden className="size-4" />
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
