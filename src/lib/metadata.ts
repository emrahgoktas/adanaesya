import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

type OpenGraphType = 'website' | 'article';

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: OpenGraphType;
  noIndex?: boolean;
  follow?: boolean;
};

function getCanonicalUrl(path = '/'): string {
  const pathname = path.startsWith('/') ? path : `/${path}`;
  return pathname === '/' ? SITE_CONFIG.url : `${SITE_CONFIG.url}${pathname}`;
}

export function generatePageMetadata({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  noIndex = false,
  follow = true,
}: PageMetadataInput): Metadata {
  const canonical = getCanonicalUrl(path);
  const ogImage = image ?? `${SITE_CONFIG.url}/og.jpg`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_CONFIG.name,
      locale: 'tr_TR',
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow,
    },
  };
}
