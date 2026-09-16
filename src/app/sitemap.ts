import type { MetadataRoute } from 'next';
import { ilceler } from '@/data/ilceler';
import { hizmetler } from '@/data/hizmetler';
import { blogYazilari } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adanadepolama.com';
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/hizmetler`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/bolgeler`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/fiyatlar`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/hakkimizda`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/iletisim`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const hizmetUrls = hizmetler.map((h) => ({
    url: `${baseUrl}/hizmetler/${h.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const ilceUrls = ilceler.map((i) => ({
    url: `${baseUrl}/bolgeler/${i.slug}-esya-depolama`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: i.tier === 1 ? 0.9 : i.tier === 2 ? 0.8 : 0.7,
  }));

  const blogUrls = blogYazilari.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(b.yayinTarihi),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...hizmetUrls, ...ilceUrls, ...blogUrls];
}
