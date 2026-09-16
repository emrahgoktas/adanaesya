import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FileCheck, MapPin, ShieldCheck, Thermometer } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { Hero } from '@/components/sections/Hero';
import { IlceAbout } from '@/components/sections/IlceAbout';
import { IlceNeighborhoods } from '@/components/sections/IlceNeighborhoods';
import { IlceReasons } from '@/components/sections/IlceReasons';
import { InternalLinks } from '@/components/sections/InternalLinks';
import { PricingTable } from '@/components/sections/PricingTable';
import { RelatedBlogPosts } from '@/components/sections/RelatedBlogPosts';
import { RelatedDistricts } from '@/components/sections/RelatedDistricts';
import { ServiceCards } from '@/components/sections/ServiceCards';
import { TrustBar } from '@/components/sections/TrustBar';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { IlceJsonLd } from '@/components/seo/IlceJsonLd';
import { hizmetler } from '@/data/hizmetler';
import { getIlceSSS } from '@/data/ilce-sss';
import { getIlceBySlug, getIlcePath, ilceler, parseIlceParam } from '@/data/ilceler';
import { SITE_CONFIG } from '@/lib/constants';
import { locative } from '@/lib/turkish';

type Props = { params: Promise<{ ilce: string }> };

function firstParagraph(text: string): string {
  return (
    text
      .split(/\n\s*\n/)[0]
      ?.replace(/\s+/g, ' ')
      .trim() ?? ''
  );
}

export async function generateStaticParams() {
  return ilceler.map((i) => ({ ilce: `${i.slug}-esya-depolama` }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ilce } = await params;
  const slug = ilce.replace('-esya-depolama', '');
  const data = ilceler.find((i) => i.slug === slug);
  if (!data) return {};
  return {
    title: { absolute: data.metaTitle },
    description: data.metaDescription,
    alternates: { canonical: `/bolgeler/${ilce}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://adanadepolama.com/bolgeler/${ilce}`,
      images: [{ url: `/og/${slug}.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default async function IlcePage({ params }: Props) {
  const { ilce: ilceParam } = await params;
  const slug = parseIlceParam(ilceParam);
  const data = getIlceBySlug(slug);

  if (!data || ilceParam !== `${data.slug}-esya-depolama`) {
    notFound();
  }

  const path = getIlcePath(data.slug);
  const faqs = getIlceSSS(data);

  return (
    <>
      <IlceJsonLd ilce={data} path={path} faqs={faqs} />
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Bölgeler', href: '/bolgeler' },
          { label: `${data.name} Eşya Depolama`, href: path },
        ]}
      />

      <Hero
        adHeadline={data.adHeadline}
        seoHeadline={data.seoHeadline}
        subtitle={firstParagraph(data.aciklama)}
        ctaPrimary={{ text: 'Hemen Teklif Al', href: '/iletisim' }}
        ctaSecondary={{ text: 'Fiyatları Gör', href: '/fiyatlar' }}
        phone={SITE_CONFIG.whatsapp}
        badge={`${locative(data.name)} Hizmet`}
      />

      <TrustBar
        items={[
          {
            icon: ShieldCheck,
            title: `${locative(data.name)} 7/24 Güvenlik`,
            description: 'Kamera izleme ve alarm sistemi',
          },
          {
            icon: FileCheck,
            title: 'Sigortalı Depolama',
            description: `${data.name} eşyalarınız güvence altında`,
          },
          {
            icon: Thermometer,
            title: 'İklimlendirme',
            description: `${data.name} teslimatlarında nem ve sıcaklık kontrolü`,
          },
          {
            icon: MapPin,
            title: `${data.name} Teslimatı`,
            description: `${data.mahalleler[0] ?? data.name} ve çevre mahallelere keşif`,
          },
        ]}
      />

      <IlceAbout ilce={data} />
      <IlceReasons ilce={data} />
      <ServiceCards services={hizmetler} />
      <PricingTable className="bg-gray" />
      <IlceNeighborhoods ilce={data} />
      <FAQAccordion items={faqs} title={`${data.name} Eşya Depolama SSS`} />
      <RelatedDistricts currentSlug={data.slug} />
      <RelatedBlogPosts
        kategori="yerel"
        anahtarKelimeler={[data.name, ...data.mahalleler.slice(0, 3), 'adana']}
      />
      <InternalLinks excludeIlceSlug={data.slug} />
      <CTASection
        title={`${locative(data.name)} eşyanızı güvenceye alın`}
        subtitle={`${data.name} ve Adana’nın diğer 14 ilçesine ücretsiz keşif. 7/24 kamera, sigorta ve iklimlendirme.`}
      />
    </>
  );
}
