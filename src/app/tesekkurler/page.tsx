import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Home, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';

const PAGE_TITLE = 'Teşekkürler | Adana Eşya Depolama';
const PAGE_DESCRIPTION =
  'Talebiniz alındı. Adana Eşya Depolama ekibi 1 saat içinde dönüş yapacak. WhatsApp veya telefonla da bize ulaşabilirsiniz.';

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  robots: { index: false, follow: false },
  alternates: { canonical: '/tesekkurler' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://adanadepolama.com/tesekkurler',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
};

function whatsappHref(): string {
  const digits = SITE_CONFIG.whatsapp.replace(/\D/g, '');
  const text = encodeURIComponent('Merhaba, az önce teklif formu gönderdim. Bilgi almak istiyorum.');
  const base = digits.length >= 11 ? `https://wa.me/${digits}` : 'https://wa.me/';
  return `${base}?text=${text}`;
}

export default function TesekkurlerPage() {
  const phoneLabel = formatPhone(SITE_CONFIG.whatsapp);

  return (
    <div className="bg-gray">
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center lg:py-24">
        <CheckCircle2 aria-hidden className="size-16 text-success" />
        <h1 className="mt-6 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.2] font-extrabold text-navy">
          Teşekkürler
        </h1>
        <span aria-hidden className="mx-auto mt-4 block h-1 w-16 rounded-full bg-red" />
        <p className="mt-5 max-w-xl text-lg font-semibold text-navy">
          Talebiniz alındı, 1 saat içinde dönüş yapacağız.
        </p>
        <p className="mt-3 max-w-xl text-base text-dark-gray/80">
          Formunuz Sarıçam OSB ekibimize ulaştı. Acil isterseniz WhatsApp veya telefonla da
          yazabilirsiniz.
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild variant="primary" size="lg" className="w-full sm:w-auto">
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              WhatsApp ile yazın
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href={`tel:${SITE_CONFIG.whatsapp}`}>
              <Phone aria-hidden className="size-4" />
              {phoneLabel}
            </a>
          </Button>
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-red"
        >
          <Home aria-hidden className="size-4" />
          Ana sayfaya dön
        </Link>
      </Container>
    </div>
  );
}
