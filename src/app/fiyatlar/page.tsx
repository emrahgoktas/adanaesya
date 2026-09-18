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

const PAGE_TITLE = 'Depo Paketleri | Ücretsiz Teklif | Adana Eşya Depolama';
const PAGE_DESCRIPTION =
  'Adana eşya depolama paketleri: Başlangıç, Standart, Premium ve Kurumsal. Fiyat sitede yayınlanmaz; ücretsiz keşif sonrası net teklif alın.';

const fiyatSSS = getSSSByKategori('fiyat');

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/fiyatlar' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://adanaesyadepo.com/fiyatlar',
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
          { label: 'Paketler', href: '/fiyatlar' },
        ]}
      />

      <header className="bg-gray">
        <Container className="py-12 text-center lg:py-16">
          <h1
            id="fiyatlar-baslik"
            className="text-navy mx-auto max-w-4xl px-2 text-[clamp(1.5rem,3.8vw,2.5rem)] leading-[1.2] font-extrabold"
          >
            Depo Paketleri
            <br />
            Ücretsiz Teklif
          </h1>
          <span aria-hidden className="bg-red mx-auto mt-4 block h-1 w-16 rounded-full" />
          <p className="text-dark-gray/80 mx-auto mt-5 max-w-2xl text-base md:text-lg">
            Fiyat için iletişime geçin; keşif sonrası net teklif yazılır
          </p>
        </Container>
      </header>

      <PricingTable hideTitle />
      <FiyatComparisonTable />
      <FiyatFactors />
      <FAQAccordion items={fiyatSSS} title="Teklif ve paketler hakkında SSS" />
      <CTASection
        title="Fiyat için ücretsiz keşif alın"
        subtitle="Hacim, süre ve taşıma keşifte ölçülür. Gizli kalem olmadan yazılı teklif iletiriz."
      />
      <FAQJsonLd items={fiyatSSS} />
    </>
  );
}
