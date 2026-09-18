import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import type { Hizmet } from '@/data/hizmetler';
import { SITE_CONFIG } from '@/lib/constants';

function whatsappHref(hizmetName: string): string {
  const digits = SITE_CONFIG.whatsapp.replace(/\D/g, '');
  const text = encodeURIComponent(`Merhaba, ${hizmetName} hakkında ücretsiz keşif ve teklif almak istiyorum`);
  const base = digits.length >= 11 ? `https://wa.me/${digits}` : 'https://wa.me/';
  return `${base}?text=${text}`;
}

export interface HizmetPricingProps {
  hizmet: Hizmet;
}

export function HizmetPricing({ hizmet }: HizmetPricingProps) {
  const headingId = `${hizmet.slug}-teklif`;

  return (
    <section className="bg-gray" aria-labelledby={headingId}>
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id={headingId}
          align="center"
          title="Teklif alın"
          subtitle="Fiyat sitede yayınlanmaz; hacim, süre ve taşıma keşif sonrası net yazılır."
          className="mb-8 lg:mb-10"
        />
        <div className="mx-auto max-w-2xl rounded-lg border border-navy/10 bg-white p-8 text-center shadow-card lg:p-10">
          <p className="text-sm font-semibold tracking-wide text-red uppercase">{hizmet.shortName}</p>
          <p className="mt-3 text-[clamp(1.5rem,3.5vw,2.25rem)] leading-tight font-extrabold text-navy">
            {hizmet.fiyatAraligi}
          </p>
          <p className="mt-3 text-sm text-dark-gray/70">
            Ücretsiz keşif için formu doldurun veya WhatsApp’tan yazın.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="primary" size="lg">
              <Link href="/iletisim">Hemen Teklif Al</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={whatsappHref(hizmet.name)} target="_blank" rel="noopener noreferrer">
                WhatsApp ile yazın
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
