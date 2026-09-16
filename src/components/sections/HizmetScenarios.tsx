import { Briefcase, Home, Package, Paintbrush } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import type { Hizmet } from '@/data/hizmetler';

const SCENARIO_ICONS = [Home, Paintbrush, Briefcase, Package];

export interface HizmetScenariosProps {
  hizmet: Hizmet;
}

export function HizmetScenarios({ hizmet }: HizmetScenariosProps) {
  const headingId = `${hizmet.slug}-senaryolar`;

  return (
    <section className="bg-white" aria-labelledby={headingId}>
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id={headingId}
          align="center"
          title="Kullanım Senaryoları"
          subtitle={`${hizmet.shortName} hangi durumda işinize yarar?`}
          className="mb-10 lg:mb-12"
        />
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hizmet.senaryolar.map((senaryo, index) => {
            const Icon = SCENARIO_ICONS[index] ?? Package;
            return (
              <li key={senaryo.baslik}>
                <Card className="h-full border-navy/10 p-6">
                  <span className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-red text-white">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <h3 className="text-lg font-bold text-navy">{senaryo.baslik}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-dark-gray/80">{senaryo.aciklama}</p>
                </Card>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
