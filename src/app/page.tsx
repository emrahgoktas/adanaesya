import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { CTASection } from '@/components/sections/CTASection';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { JsonLd } from '@/components/seo/JsonLd';
import { hizmetler } from '@/data/hizmetler';
import { ilceler } from '@/data/ilceler';
import { genelSSS } from '@/data/sss';
import { SITE_CONFIG } from '@/lib/constants';
import {
  generateGraphSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from '@/lib/schema';

const ServiceCards = dynamic(() =>
  import('@/components/sections/ServiceCards').then((mod) => ({ default: mod.ServiceCards }))
);
const DistrictGrid = dynamic(() =>
  import('@/components/sections/DistrictGrid').then((mod) => ({ default: mod.DistrictGrid }))
);
const PricingTable = dynamic(() =>
  import('@/components/sections/PricingTable').then((mod) => ({ default: mod.PricingTable }))
);
const Testimonials = dynamic(() =>
  import('@/components/sections/Testimonials').then((mod) => ({ default: mod.Testimonials }))
);
const FAQAccordion = dynamic(() =>
  import('@/components/sections/FAQAccordion').then((mod) => ({ default: mod.FAQAccordion }))
);
const FacilityGallery = dynamic(() =>
  import('@/components/sections/FacilityGallery').then((mod) => ({ default: mod.FacilityGallery }))
);

export const metadata: Metadata = {
  title: 'Adana Eşya Depolama | Güvenli ve Sigortalı Depo Hizmeti',
  description:
    "Adana'da 7/24 kamera izlemeli, sigortalı ve iklimlendirilmiş eşya depolama. 15 ilçede ücretsiz keşif, taşıma desteği ve güvenli depo çözümleri sizi bekliyor.",
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        id="json-ld-home"
        data={generateGraphSchema([generateWebSiteSchema(), generateOrganizationSchema()])}
      />
      <Hero
        adHeadline="Adana Eşya Depolama"
        seoHeadline=" — Güvenli ve Sigortalı Depo Hizmeti"
        subtitle="Adana'nın 15 ilçesinde 7/24 kamera izlemeli, iklimlendirilmiş depolar. Ücretsiz keşif ve taşıma desteği."
        ctaPrimary={{ text: 'Hemen Teklif Al', href: '/iletisim' }}
        ctaSecondary={{ text: 'Fiyatları Gör', href: '/fiyatlar' }}
        phone={SITE_CONFIG.phone}
      />
      <TrustBar />
      <ServiceCards services={hizmetler} />
      <FacilityGallery />
      <DistrictGrid districts={ilceler} />
      <PricingTable />
      <Testimonials />
      <FAQAccordion items={genelSSS.filter((item) => item.kategori !== 'iletisim')} />
      <CTASection />
    </>
  );
}
