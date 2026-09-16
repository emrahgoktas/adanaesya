import type { Metadata } from 'next';
import { CTASection } from '@/components/sections/CTASection';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { FiyatComparisonTable } from '@/components/sections/FiyatComparisonTable';
import { FiyatFactors } from '@/components/sections/FiyatFactors';
import { PricingTable } from '@/components/sections/PricingTable';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { FAQJsonLd } from '@/components/seo/FAQJsonLd';
import { JsonLd } from '@/components/seo/JsonLd';
import { Container } from '@/components/ui/Container';
import { fiyatPaketleri } from '@/data/fiyatlar';
import { getSSSByKategori } from '@/data/sss';
import { generateFiyatlarSchemas, generateGraphSchema } from '@/lib/schema';

const PAGE_TITLE = 'Adana Eşya Depolama Fiyatları 2026 | Güncel Fiyat Listesi';
const PAGE_DESCRIPTION =
  "Adana eşya depolama fiyatları 2026: 1 m³ aylık 750 TL'den başlar. Standart 2.250 TL, Premium 4.000 TL. Sigorta dahil, gizli maliyet yok; ücretsiz keşif alın.";

const fiyatSSS = getSSSByKategori('fiyat');

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/fiyatlar' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://adanadepolama.com/fiyatlar',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
};

export default function FiyatlarPage() {
  return (
    <>
      <JsonLd
        id="json-ld-fiyatlar"
        data={generateGraphSchema(generateFiyatlarSchemas(fiyatPaketleri))}
      />
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Fiyatlar', href: '/fiyatlar' },
        ]}
      />

      <header className="bg-gray">
        <Container className="py-12 text-center lg:py-16">
          <h1
            id="fiyatlar-baslik"
            className="text-navy mx-auto max-w-4xl px-2 text-[clamp(1.5rem,3.8vw,2.5rem)] leading-[1.2] font-extrabold"
          >
            Adana Eşya Depolama
            <br />
            Fiyatları 2026
          </h1>
          <span aria-hidden className="bg-red mx-auto mt-4 block h-1 w-16 rounded-full" />
          <p className="text-dark-gray/80 mx-auto mt-5 max-w-2xl text-base md:text-lg">
            Şeffaf fiyatlandırma, gizli maliyet yok
          </p>
        </Container>
      </header>

      <PricingTable hideTitle />
      <FiyatComparisonTable />
      <FiyatFactors />
      <FAQAccordion items={fiyatSSS} title="Fiyatlar Hakkında Sıkça Sorulan Sorular" />
      <CTASection
        title="Net fiyat için ücretsiz keşif alın"
        subtitle="Hacim ve süre keşifte ölçülür; teklifte gizli kalem olmaz. 2026 tarifesini ilçenize göre netleştirelim."
      />
      <FAQJsonLd items={fiyatSSS} />
    </>
  );
}
