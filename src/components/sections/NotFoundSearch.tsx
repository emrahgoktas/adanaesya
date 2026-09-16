'use client';

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { getBlogPath, getSortedBlogYazilari } from '@/data/blog';
import { getHizmetPath, hizmetler } from '@/data/hizmetler';
import { getIlcePath, ilceler } from '@/data/ilceler';

const SUGGESTIONS = [
  { href: '/fiyatlar', label: 'Fiyatlar 2026' },
  { href: '/blog', label: 'Blog rehberleri' },
  { href: '/iletisim', label: 'Ücretsiz keşif' },
  { href: '/hizmetler/ogrenci-esya-depolama', label: 'Öğrenci deposu' },
  { href: '/bolgeler/seyhan-esya-depolama', label: 'Seyhan depolama' },
] as const;

function normalize(value: string): string {
  return value.toLocaleLowerCase('tr-TR').trim();
}

function resolveSearch(query: string): string {
  const q = normalize(query);
  if (!q) return '/blog';
  if (q.includes('fiyat') || q.includes('ücret') || q.includes('ucret')) return '/fiyatlar';
  if (q.includes('iletişim') || q.includes('iletisim') || q.includes('teklif') || q.includes('keşif') || q.includes('kesif')) {
    return '/iletisim';
  }
  if (q.includes('hakkımızda') || q.includes('hakkimizda')) return '/hakkimizda';
  if (q.includes('blog')) return '/blog';

  for (const hizmet of hizmetler) {
    const haystack = normalize(`${hizmet.name} ${hizmet.shortName} ${hizmet.slug.replaceAll('-', ' ')}`);
    if (haystack.includes(q) || q.includes(normalize(hizmet.shortName))) {
      return getHizmetPath(hizmet.slug);
    }
  }

  for (const ilce of ilceler) {
    if (q.includes(normalize(ilce.name)) || normalize(ilce.name).includes(q)) {
      return getIlcePath(ilce.slug);
    }
  }

  for (const yazi of getSortedBlogYazilari()) {
    if (normalize(yazi.baslik).includes(q) || yazi.anahtarKelimeler.some((kelime) => normalize(kelime).includes(q))) {
      return getBlogPath(yazi.slug);
    }
  }

  return '/blog';
}

export function NotFoundSearch() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(resolveSearch(query));
  }

  return (
    <div className="rounded-lg border border-navy/10 bg-white p-6 shadow-card">
      <h2 id="arama-oneri" className="text-lg font-bold text-navy">Arama önerisi</h2>
      <p className="mt-2 text-sm text-dark-gray/75">
        Depolama, ilçe veya fiyat yazın; sizi en yakın sayfaya götürelim.
      </p>
      <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row" role="search">
        <label className="sr-only" htmlFor="not-found-search">
          Site içi arama
        </label>
        <input
          id="not-found-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Örn. Seyhan, fiyat, öğrenci…"
          className="w-full rounded-lg border border-navy/20 bg-white px-3 py-2.5 text-dark-gray placeholder:text-dark-gray/50 focus-visible:border-red focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-red"
        />
        <Button type="submit" variant="primary" className="shrink-0">
          <Search aria-hidden className="size-4" />
          Ara
        </Button>
      </form>
      <ul className="mt-4 flex flex-wrap gap-2">
        {SUGGESTIONS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="inline-flex rounded-full bg-gray px-3 py-1.5 text-sm font-semibold text-navy hover:bg-red/10 hover:text-red"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
