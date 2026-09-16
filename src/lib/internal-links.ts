import { getRelatedBlogPosts, getBlogPath, type BlogYazisi } from '@/data/blog';
import { getRelatedHizmetler, getHizmetPath, type Hizmet } from '@/data/hizmetler';
import { getIlceBySlug, getNearbyIlceler, getIlcePath, type Ilce } from '@/data/ilceler';

export type InternalLinkKind = 'hizmet' | 'ilce' | 'blog';

export interface InternalLinkItem {
  href: string;
  label: string;
  kind: InternalLinkKind;
}

export interface InternalLinkOptions {
  excludeHizmetSlug?: string;
  excludeIlceSlug?: string;
  excludeBlogSlug?: string;
  count?: number;
}

const KIND_LABEL: Record<InternalLinkKind, string> = {
  hizmet: 'Hizmet',
  ilce: 'İlçe',
  blog: 'Blog',
};

export function getInternalLinkKindLabel(kind: InternalLinkKind): string {
  return KIND_LABEL[kind];
}

export function getInternalLinks({
  excludeHizmetSlug,
  excludeIlceSlug,
  excludeBlogSlug,
  count = 8,
}: InternalLinkOptions = {}): InternalLinkItem[] {
  const services = getRelatedHizmetler(excludeHizmetSlug, 3).map((hizmet: Hizmet) => ({
    href: getHizmetPath(hizmet.slug),
    label: hizmet.name,
    kind: 'hizmet' as const,
  }));

  const districts = getNearbyIlceler(excludeIlceSlug ?? 'saricam', 3).map((ilce: Ilce) => ({
    href: getIlcePath(ilce.slug),
    label: `${ilce.name} Eşya Depolama`,
    kind: 'ilce' as const,
  }));

  const ilce = excludeIlceSlug ? getIlceBySlug(excludeIlceSlug) : undefined;
  const posts = getRelatedBlogPosts({
    excludeSlug: excludeBlogSlug,
    hizmetSlug: excludeHizmetSlug,
    kategori: ilce ? 'yerel' : undefined,
    anahtarKelimeler: ilce ? [ilce.name, 'adana'] : undefined,
    count: 2,
  }).map((yazi: BlogYazisi) => ({
    href: getBlogPath(yazi.slug),
    label: yazi.baslik,
    kind: 'blog' as const,
  }));

  const mixed: InternalLinkItem[] = [];
  const maxLen = Math.max(services.length, districts.length, posts.length);
  for (let i = 0; i < maxLen; i += 1) {
    if (services[i]) mixed.push(services[i]);
    if (districts[i]) mixed.push(districts[i]);
    if (posts[i]) mixed.push(posts[i]);
  }

  return mixed.slice(0, count);
}
