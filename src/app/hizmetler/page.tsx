import type { Metadata } from 'next';
import { CTASection } from '@/components/sections/CTASection';
import { HizmetIndexCards } from '@/components/sections/HizmetIndexCards';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { Container } from '@/components/ui/Container';
import { hizmetler } from '@/data/hizmetler';

const PAGE_TITLE = 'Adana Eşya Depolama Hizmetleri | 5 Farklı Depolama Çözümü';
const PAGE_DESCRIPTION =
  "Adana'da kişisel eşya, mobilya, kurumsal arşiv, e-ticaret stok ve öğrenci depolama. 7/24 kamera, sigorta ve ücretsiz keşif. 5 farklı depo çözümünü inceleyin.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/hizmetler' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://adanadepolama.com/hizmetler',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
};

export default function HizmetlerPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Hizmetler', href: '/hizmetler' },
        ]}
      />

      <header className="bg-gray">
        <Container className="py-12 text-center lg:py-16">
          <h1
            id="hizmetler-baslik"
            className="text-navy mx-auto max-w-4xl text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.2] font-extrabold"
          >
            Adana Eşya Depolama Hizmetlerimiz
          </h1>
          <span aria-hidden className="bg-red mx-auto mt-4 block h-1 w-16 rounded-full" />
          <p className="text-dark-gray/80 mx-auto mt-5 max-w-2xl text-base md:text-lg">
            İhtiyacınıza uygun 5 farklı depolama çözümü
          </p>
        </Container>
      </header>

      <HizmetIndexCards services={hizmetler} />
      <CTASection
        title="Size uygun depolama çözümünü seçin"
        subtitle="Kişisel eşyadan kurumsal arşive, 5 hizmet için ücretsiz keşif ve net teklif."
      />
    </>
  );
}
