import { MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import type { Ilce } from '@/data/ilceler';

export interface IlceNeighborhoodsProps {
  ilce: Ilce;
}

export function IlceNeighborhoods({ ilce }: IlceNeighborhoodsProps) {
  const headingId = `${ilce.slug}-mahalleler`;

  return (
    <section className="bg-white" aria-labelledby={headingId}>
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id={headingId}
          title={`${ilce.name} Mahallelerinde Eşya Depolama`}
          subtitle="Aşağıdaki mahallelere ücretsiz keşif ve randevulu taşıma planlıyoruz."
          className="mb-8 lg:mb-10"
        />
        <ul className="flex flex-wrap gap-3">
          {ilce.mahalleler.map((mahalle) => (
            <li key={mahalle}>
              <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-gray px-4 py-2 text-sm font-medium text-navy">
                <MapPin aria-hidden className="size-4 text-red" />
                {mahalle}
              </span>
            </li>
          ))}
        </ul>
        {ilce.landmarks.length > 0 ? (
          <p className="mt-8 text-sm text-dark-gray/70">
            Yakın noktalar: {ilce.landmarks.join(', ')}.
          </p>
        ) : null}
      </Container>
    </section>
  );
}
