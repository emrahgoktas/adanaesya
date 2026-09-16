import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CTASection } from '@/components/sections/CTASection';
import { DistrictGrid } from '@/components/sections/DistrictGrid';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { Hero } from '@/components/sections/Hero';
import { HizmetAbout } from '@/components/sections/HizmetAbout';
import { HizmetFeatures } from '@/components/sections/HizmetFeatures';
import { HizmetPricing } from '@/components/sections/HizmetPricing';
import { HizmetScenarios } from '@/components/sections/HizmetScenarios';
import { RelatedBlogPosts } from '@/components/sections/RelatedBlogPosts';
import { RelatedServices } from '@/components/sections/RelatedServices';
import { InternalLinks } from '@/components/sections/InternalLinks';
import { TrustBar } from '@/components/sections/TrustBar';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { HizmetJsonLd } from '@/components/seo/HizmetJsonLd';
import { getHizmetBySlug, getHizmetPath, hizmetler } from '@/data/hizmetler';
import { ilceler } from '@/data/ilceler';
import type { SSSItem } from '@/data/sss';
import { SITE_CONFIG } from '@/lib/constants';

type Props = { params: Promise<{ slug: string }> };

function toSSSItems(slug: string, items: { soru: string; cevap: string }[]): SSSItem[] {
  return items.map((item, index) => ({
    id: `${slug}-sss-${index + 1}`,
    soru: item.soru,
    cevap: item.cevap,
    kategori: 'hizmet',
  }));
}

export async function generateStaticParams() {
  return hizmetler.map((hizmet) => ({ slug: hizmet.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getHizmetBySlug(slug);
  if (!data) return {};
  return {
    title: { absolute: data.metaTitle },
    description: data.metaDescription,
    alternates: { canonical: getHizmetPath(data.slug) },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://adanaesyadepo.com${getHizmetPath(data.slug)}`,
      images: [{ url: `/og/${data.slug}.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default async function HizmetPage({ params }: Props) {
  const { slug } = await params;
  const data = getHizmetBySlug(slug);

  if (!data) {
    notFound();
  }

  const path = getHizmetPath(data.slug);
  const faqs = toSSSItems(data.slug, data.sss);

  return (
    <>
      <HizmetJsonLd hizmet={data} path={path} faqs={faqs} />
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Hizmetler', href: '/hizmetler' },
          { label: data.name, href: path },
        ]}
      />

      <Hero
        adHeadline={data.adHeadline}
        seoHeadline={data.seoHeadline}
        subtitle={data.ozet}
        ctaPrimary={{ text: 'Hemen Teklif Al', href: '/iletisim' }}
        ctaSecondary={{ text: 'Fiyatları Gör', href: '/fiyatlar' }}
        phone={SITE_CONFIG.whatsapp}
        badge={data.shortName}
      />

      <TrustBar />
      <HizmetAbout hizmet={data} />
      <HizmetFeatures hizmet={data} />
      <HizmetScenarios hizmet={data} />
      <HizmetPricing hizmet={data} />
      <DistrictGrid
        districts={ilceler}
        headingId="hizmet-ilceler"
        className="bg-white"
        title="Bu Hizmeti Sunduğumuz İlçeler"
        subtitle={`${data.shortName} Adana’nın 15 ilçesinde geçerlidir.`}
      />
      <RelatedServices excludeSlug={data.slug} />
      <RelatedBlogPosts hizmetSlug={data.slug} anahtarKelimeler={[data.name, data.shortName]} />
      <FAQAccordion items={faqs} title={`${data.shortName} SSS`} />
      <InternalLinks excludeHizmetSlug={data.slug} />
      <CTASection
        title={`${data.name} için teklif alın`}
        subtitle={`${data.ozet} Ücretsiz keşif ve 15 ilçede teslimat.`}
      />
    </>
  );
}
