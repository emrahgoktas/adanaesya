import type { Metadata } from 'next';
import { CTASection } from '@/components/sections/CTASection';
import {
  HakkimizdaCertificates,
  HakkimizdaMission,
  HakkimizdaStats,
  HakkimizdaStory,
  HakkimizdaTeam,
  HakkimizdaValues,
  HakkimizdaWhy,
} from '@/components/sections/HakkimizdaSections';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { Container } from '@/components/ui/Container';
import { SITE_CONFIG } from '@/lib/constants';

const PAGE_TITLE = 'Hakkımızda | Adana Eşya Depolama';
const PAGE_DESCRIPTION =
  'Adana Eşya Depolama; Sarıçam OSB’de 10.000 m² depo alanı ve 7/24 güvenlik. 15 ilçede 500+ müşteriye sigortalı saklama. Misyon, vizyon ve değerlerimizi okuyun.';

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/hakkimizda' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://adanaesyadepo.com/hakkimizda',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: PAGE_TITLE,
  url: `${SITE_CONFIG.url}/hakkimizda`,
  description: PAGE_DESCRIPTION,
  isPartOf: {
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
  },
};

export default function HakkimizdaPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Hakkımızda', href: '/hakkimizda' },
        ]}
      />

      <header className="bg-gray">
        <Container className="py-12 text-center lg:py-16">
          <h1
            id="hakkimizda-baslik"
            className="text-navy mx-auto max-w-4xl px-2 text-[clamp(1.5rem,3.8vw,2.5rem)] leading-[1.2] font-extrabold"
          >
            Adana Eşya Depolama
            <br />
            Hakkında
          </h1>
          <span aria-hidden className="bg-red mx-auto mt-4 block h-1 w-16 rounded-full" />
          <p className="text-dark-gray/80 mx-auto mt-5 max-w-2xl text-base md:text-lg">
            Sarıçam OSB’den 15 ilçeye sigortalı, iklimlendirilmiş depolama
          </p>
        </Container>
      </header>

      <HakkimizdaStory />
      <HakkimizdaMission />
      <HakkimizdaValues />
      <HakkimizdaWhy />
      <HakkimizdaTeam />
      <HakkimizdaCertificates />
      <HakkimizdaStats />
      <CTASection
        title="Eşyanızı güvenceye alın"
        subtitle="Ücretsiz keşif, sigortalı ünite ve 15 ilçede aynı kamera standardı. Sarıçam OSB’den randevu alın."
      />
      <JsonLd data={aboutJsonLd} />
    </>
  );
}
