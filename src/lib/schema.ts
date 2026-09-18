import type { BlogYazisi } from '@/data/blog';
import { getBlogPath } from '@/data/blog';
import type { FiyatPaketi } from '@/data/fiyatlar';
import { fiyatPaketleri } from '@/data/fiyatlar';
import type { Hizmet } from '@/data/hizmetler';
import { getHizmetPath } from '@/data/hizmetler';
import type { Ilce } from '@/data/ilceler';
import { getIlcePath, ilceler } from '@/data/ilceler';
import { SITE_CONFIG } from '@/lib/constants';

export type JsonLdObject = Record<string, unknown>;

export interface SchemaFaqItem {
  soru: string;
  cevap: string;
}

export interface SchemaBreadcrumbItem {
  name: string;
  url?: string;
}

export type SchemaBlog = Pick<
  BlogYazisi,
  'slug' | 'baslik' | 'metaDescription' | 'yazar' | 'yayinTarihi' | 'gorsel' | 'anahtarKelimeler'
> & {
  guncellemeTarihi?: string;
};

const DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;

const LOCAL_BUSINESS_ID = `${SITE_CONFIG.url}/#localbusiness`;
const SELF_STORAGE_ID = `${SITE_CONFIG.url}/#selfstorage`;
const ORGANIZATION_ID = `${SITE_CONFIG.url}/#organization`;
const WEBSITE_ID = `${SITE_CONFIG.url}/#website`;

function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.url}${normalized}`;
}

function postalAddress(): JsonLdObject {
  return {
    '@type': 'PostalAddress',
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.district,
    addressRegion: SITE_CONFIG.address.city,
    ...(SITE_CONFIG.address.postalCode ? { postalCode: SITE_CONFIG.address.postalCode } : {}),
    addressCountry: SITE_CONFIG.address.country,
  };
}

function geoCoordinates(): JsonLdObject {
  return {
    '@type': 'GeoCoordinates',
    latitude: SITE_CONFIG.geo.latitude,
    longitude: SITE_CONFIG.geo.longitude,
  };
}

function openingHours(): JsonLdObject {
  return {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [...DAYS],
    opens: '00:00',
    closes: '23:59',
  };
}

function allDistrictsServed(): JsonLdObject[] {
  return ilceler.map((ilce) => ({
    '@type': 'AdministrativeArea',
    name: `${ilce.name}, Adana`,
  }));
}

function localBusinessRef(): JsonLdObject {
  return {
    '@type': 'LocalBusiness',
    '@id': LOCAL_BUSINESS_ID,
    name: SITE_CONFIG.name,
  };
}

function organizationRef(): JsonLdObject {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE_CONFIG.name,
  };
}

function personId(name: string): string {
  const slug = name
    .toLocaleLowerCase('tr-TR')
    .replaceAll('ç', 'c')
    .replaceAll('ğ', 'g')
    .replaceAll('ı', 'i')
    .replaceAll('ö', 'o')
    .replaceAll('ş', 's')
    .replaceAll('ü', 'u')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return `${SITE_CONFIG.url}/#person-${slug || 'yazar'}`;
}

function withoutContext(node: JsonLdObject): JsonLdObject {
  return Object.fromEntries(Object.entries(node).filter(([key]) => key !== '@context'));
}

export function generateGraphSchema(nodes: JsonLdObject[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.map(withoutContext),
  };
}

export function generateLocalBusinessSchema(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': LOCAL_BUSINESS_ID,
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/og.jpg`,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.whatsapp,
    email: SITE_CONFIG.email,
    priceRange: 'Teklif üzerine',
    address: postalAddress(),
    geo: geoCoordinates(),
    openingHoursSpecification: openingHours(),
    areaServed: allDistrictsServed(),
    sameAs: Object.values(SITE_CONFIG.social),
  };
}

export function generateSelfStorageSchema(): JsonLdObject;
export function generateSelfStorageSchema(ilce: Ilce): JsonLdObject;
export function generateSelfStorageSchema(ilce?: Ilce): JsonLdObject {
  if (!ilce) {
    return {
      '@context': 'https://schema.org',
      '@type': 'SelfStorage',
      '@id': SELF_STORAGE_ID,
      name: SITE_CONFIG.name,
      description:
        'Adana genelinde 7/24 kamera izlemeli, sigortalı ve iklimlendirilmiş eşya depolama tesisi. 15 ilçede ücretsiz keşif; teslimat teklifte planlanır.',
      url: SITE_CONFIG.url,
      image: `${SITE_CONFIG.url}/og.jpg`,
      telephone: SITE_CONFIG.whatsapp,
      email: SITE_CONFIG.email,
      priceRange: 'Teklif üzerine',
      address: postalAddress(),
      geo: geoCoordinates(),
      openingHoursSpecification: openingHours(),
      areaServed: allDistrictsServed(),
      parentOrganization: localBusinessRef(),
    };
  }

  const pageUrl = absoluteUrl(getIlcePath(ilce.slug));

  return {
    '@context': 'https://schema.org',
    '@type': 'SelfStorage',
    '@id': `${pageUrl}#selfstorage`,
    name: `${ilce.name} Eşya Depolama`,
    description: ilce.metaDescription,
    url: pageUrl,
    image: `${SITE_CONFIG.url}/og/${ilce.slug}.jpg`,
    telephone: SITE_CONFIG.whatsapp,
    email: SITE_CONFIG.email,
    priceRange: 'Teklif üzerine',
    address: {
      ...postalAddress(),
      name: `${ilce.name} hizmet adresi`,
    },
    geo: geoCoordinates(),
    areaServed: {
      '@type': 'AdministrativeArea',
      name: `${ilce.name}, Adana`,
    },
    parentOrganization: localBusinessRef(),
  };
}

export function generateOrganizationSchema(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/logo.png`,
    },
    image: `${SITE_CONFIG.url}/og.jpg`,
    telephone: SITE_CONFIG.whatsapp,
    email: SITE_CONFIG.email,
    address: postalAddress(),
    sameAs: Object.values(SITE_CONFIG.social),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.whatsapp,
      contactType: 'customer service',
      areaServed: 'TR',
      availableLanguage: ['Turkish'],
    },
  };
}

export function generateWebSiteSchema(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    inLanguage: 'tr-TR',
    publisher: organizationRef(),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateServiceSchema(hizmet: Hizmet): JsonLdObject {
  const pageUrl = absoluteUrl(getHizmetPath(hizmet.slug));
  const offer = generateOfferSchema(hizmet);

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: hizmet.name,
    serviceType: hizmet.name,
    description: hizmet.metaDescription,
    url: pageUrl,
    image: `${SITE_CONFIG.url}/og/${hizmet.slug}.jpg`,
    provider: {
      ...localBusinessRef(),
      telephone: SITE_CONFIG.whatsapp,
    },
    areaServed: allDistrictsServed(),
    offers: withoutContext(offer),
  };
}

export function generateOfferSchema(hizmet: Hizmet): JsonLdObject {
  const pageUrl = absoluteUrl(getHizmetPath(hizmet.slug));

  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    '@id': `${pageUrl}#offer`,
    name: `${hizmet.name} teklifi`,
    description: 'Ücretsiz keşif sonrası net teklif. Fiyat sitede yayınlanmaz.',
    url: `${SITE_CONFIG.url}/iletisim`,
    priceCurrency: 'TRY',
    availability: 'https://schema.org/InStock',
    itemOffered: {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: hizmet.name,
    },
    seller: localBusinessRef(),
  };
}

export function generateFAQSchema(items: SchemaFaqItem[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.soru,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.cevap,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: SchemaBreadcrumbItem[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const entry: JsonLdObject = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
      };
      if (item.url) {
        entry.item = item.url.startsWith('http') ? item.url : absoluteUrl(item.url);
      }
      return entry;
    }),
  };
}

export function generatePersonSchema(name: string, jobTitle = 'Yazar'): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId(name),
    name,
    jobTitle,
    url: `${SITE_CONFIG.url}/blog`,
    worksFor: organizationRef(),
  };
}

export function generateArticleSchema(blog: SchemaBlog): JsonLdObject {
  const url = absoluteUrl(getBlogPath(blog.slug));
  const image = blog.gorsel.startsWith('http') ? blog.gorsel : absoluteUrl(blog.gorsel);
  const dateModified = blog.guncellemeTarihi ?? blog.yayinTarihi;
  const author = generatePersonSchema(blog.yazar);

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.baslik,
    description: blog.metaDescription,
    image: [image],
    datePublished: blog.yayinTarihi,
    dateModified,
    author: withoutContext(author),
    publisher: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: blog.anahtarKelimeler.join(', '),
    inLanguage: 'tr-TR',
  };
}

export function generateContactPageSchema(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_CONFIG.url}/iletisim#contactpage`,
    name: 'İletişim | Adana Eşya Depolama',
    description: 'Adana Eşya Depolama iletişim, adres, telefon ve ücretsiz keşif formu.',
    url: `${SITE_CONFIG.url}/iletisim`,
    inLanguage: 'tr-TR',
    mainEntity: localBusinessRef(),
  };
}

export function generatePackageOfferSchema(paket: FiyatPaketi): JsonLdObject {
  const productId = `${SITE_CONFIG.url}/fiyatlar#${paket.id}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    '@id': `${productId}-offer`,
    name: `${paket.ad} paketi`,
    url: `${SITE_CONFIG.url}/iletisim`,
    priceCurrency: 'TRY',
    availability: 'https://schema.org/InStock',
    description: 'Ücretsiz keşif sonrası teklif üzerine fiyatlandırılır.',
    itemOffered: {
      '@type': 'Product',
      '@id': productId,
      name: `${paket.ad} Eşya Depolama Paketi`,
    },
    seller: localBusinessRef(),
  };
}

export function generateProductSchema(paket: FiyatPaketi): JsonLdObject {
  const productId = `${SITE_CONFIG.url}/fiyatlar#${paket.id}`;
  const offer = generatePackageOfferSchema(paket);

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': productId,
    name: `${paket.ad} Eşya Depolama Paketi`,
    description: `${paket.hacim} eşya depolama paketi. ${paket.ozellikler.join(', ')}.`,
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.name,
    },
    category: 'SelfStorage',
    image: `${SITE_CONFIG.url}/og.jpg`,
    sku: paket.id,
    offers: withoutContext(offer),
  };
}

export function generateFiyatlarSchemas(paketler: FiyatPaketi[] = fiyatPaketleri): JsonLdObject[] {
  return paketler.flatMap((paket) => [
    generateProductSchema(paket),
    generatePackageOfferSchema(paket),
  ]);
}
