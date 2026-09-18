import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import type { Ilce } from '@/data/ilceler';
import { locative } from '@/lib/turkish';

export interface IlceAboutProps {
  ilce: Ilce;
}

export function IlceAbout({ ilce }: IlceAboutProps) {
  const paragraphs = ilce.aciklama
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const headingId = `${ilce.slug}-hakkinda`;

  return (
    <section className="bg-white" aria-labelledby={headingId}>
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id={headingId}
          title={`${ilce.name} Eşya Depolama Hakkında`}
          subtitle={`${locative(ilce.name)} ev, ofis ve tadilat kaynaklı eşyayı Seyhan Yeni Mahalle’deki iklim kontrollü ünitelerde saklıyoruz.`}
          className="mb-8 lg:mb-10"
        />
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-dark-gray/85 md:text-lg">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
