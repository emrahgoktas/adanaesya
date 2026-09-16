import { CircleCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import type { Hizmet } from '@/data/hizmetler';

export interface HizmetFeaturesProps {
  hizmet: Hizmet;
}

export function HizmetFeatures({ hizmet }: HizmetFeaturesProps) {
  const headingId = `${hizmet.slug}-ozellikler`;

  return (
    <section className="bg-gray" aria-labelledby={headingId}>
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id={headingId}
          title={`${hizmet.shortName} Özellikleri`}
          subtitle="Teslimattan iadeye kadar sözleşmede yazılan standartlar."
          className="mb-8 lg:mb-10"
        />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {hizmet.ozellikler.map((ozellik) => (
            <li
              key={ozellik}
              className="flex items-start gap-3 rounded-lg border border-navy/10 bg-white p-5 shadow-card"
            >
              <CircleCheck aria-hidden className="mt-0.5 size-6 shrink-0 text-red" />
              <span className="text-base font-medium text-navy">{ozellik}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
