import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import type { Hizmet } from '@/data/hizmetler';

export interface HizmetAboutProps {
  hizmet: Hizmet;
}

export function HizmetAbout({ hizmet }: HizmetAboutProps) {
  const headingId = `${hizmet.slug}-hakkinda`;

  return (
    <section className="bg-white" aria-labelledby={headingId}>
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id={headingId}
          title={`${hizmet.name} Hakkında`}
          subtitle={hizmet.ozet}
          className="mb-8 lg:mb-10"
        />
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-dark-gray/85 md:text-lg">
          {hizmet.icerik.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
