import { Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';

function whatsappHref(): string {
  const digits = SITE_CONFIG.whatsapp.replace(/\D/g, '');
  const text = encodeURIComponent('Merhaba, eşya depolama hakkında bilgi almak istiyorum');
  const base = digits.length >= 11 ? `https://wa.me/${digits}` : 'https://wa.me/';
  return `${base}?text=${text}`;
}

export interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = 'Eşyanızı bugün güvenceye alın',
  subtitle = 'Adana’nın 15 ilçesine ücretsiz keşif. 7/24 kamera, sigorta ve iklimlendirme ile kısa veya uzun dönem depolama.',
}: CTASectionProps) {
  const phoneLabel = formatPhone(SITE_CONFIG.whatsapp);

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg, #0A2540 0%, #1B4F8A 100%)' }}
      aria-labelledby="cta-baslik"
    >
      <Container className="relative z-10 py-14 text-center lg:py-20">
        <h2
          id="cta-baslik"
          className="text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.2] font-bold"
          style={{ color: '#fff' }}
        >
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 md:text-lg">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="primary" size="lg">
            <Link href="/iletisim">Hemen Teklif Al</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-navy"
          >
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              WhatsApp ile yazın
            </a>
          </Button>
        </div>
        <a
          href={`tel:${SITE_CONFIG.whatsapp}`}
          className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-white hover:underline"
        >
          <Phone aria-hidden className="size-4" />
          {phoneLabel}
        </a>
      </Container>
    </section>
  );
}
