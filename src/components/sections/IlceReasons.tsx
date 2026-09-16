import { CircleCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import type { Ilce } from '@/data/ilceler';
import { locative } from '@/lib/turkish';

export interface IlceReasonsProps {
  ilce: Ilce;
}

export function IlceReasons({ ilce }: IlceReasonsProps) {
  const headingId = `${ilce.slug}-neden`;

  return (
    <section className="bg-gray" aria-labelledby={headingId}>
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id={headingId}
          title={`Neden ${locative(ilce.name)} Adana Eşya Depolama?`}
          subtitle="Keşif, taşıma ve sigortalı ünite aynı çatı altında."
          className="mb-8 lg:mb-10"
        />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ilce.nedenler.map((neden) => (
            <li
              key={neden}
              className="flex items-start gap-3 rounded-lg border border-navy/10 bg-white p-5 shadow-card"
            >
              <CircleCheck aria-hidden className="mt-0.5 size-6 shrink-0 text-red" />
              <span className="text-base font-medium text-navy">{neden}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
