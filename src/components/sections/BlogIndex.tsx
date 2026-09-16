import { ArrowRight, CalendarDays, Clock, UserRound } from 'lucide-react';
import Link from 'next/link';
import { BlogCoverImage } from '@/components/blog/BlogCoverImage';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import {
  BLOG_KATEGORI_LABELS,
  BLOG_PAGE_SIZE,
  formatBlogDate,
  getBlogKategoriLabel,
  getBlogPath,
  getSortedBlogYazilari,
  isBlogKategori,
  type BlogYazisi,
} from '@/data/blog';
import { cn } from '@/lib/utils';

const FILTERS: { href: string; label: string; value: string | null }[] = [
  { href: '/blog', label: 'Tümü', value: null },
  { href: '/blog?kategori=rehber', label: 'Rehber', value: 'rehber' },
  { href: '/blog?kategori=ipuclari', label: 'İpuçları', value: 'ipuclari' },
  { href: '/blog?kategori=sektorel', label: 'Sektörel', value: 'sektorel' },
  { href: '/blog?kategori=yerel', label: 'Yerel', value: 'yerel' },
];

function blogListHref(kategori: string | null, page: number): string {
  const params = new URLSearchParams();
  if (kategori) params.set('kategori', kategori);
  if (page > 1) params.set('sayfa', String(page));
  const query = params.toString();
  return query ? `/blog?${query}` : '/blog';
}

function BlogCover({ yazi }: { yazi: BlogYazisi }) {
  return (
    <div className="relative aspect-[1200/630] overflow-hidden">
      <BlogCoverImage src={yazi.gorsel} alt={`${yazi.baslik} kapak görseli`} />
    </div>
  );
}

function BlogCard({ yazi }: { yazi: BlogYazisi }) {
  return (
    <Card className="hover:border-red h-full overflow-hidden p-0 transition-[border-color,box-shadow]">
      <Link href={getBlogPath(yazi.slug)} className="flex h-full flex-col">
        <BlogCover yazi={yazi} />
        <div className="flex flex-1 flex-col p-5">
          <Badge size="sm">{getBlogKategoriLabel(yazi.kategori)}</Badge>
          <h2 className="text-navy mt-3 text-lg leading-snug font-bold">{yazi.baslik}</h2>
          <p className="text-dark-gray/75 mt-2 line-clamp-3 flex-1 text-sm leading-relaxed">
            {yazi.ozet}
          </p>
          <p className="text-dark-gray/70 mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <span className="inline-flex items-center gap-1">
              <UserRound aria-hidden className="size-3.5" />
              {yazi.yazar}
            </span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays aria-hidden className="size-3.5" />
              <time dateTime={yazi.yayinTarihi}>{formatBlogDate(yazi.yayinTarihi)}</time>
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock aria-hidden className="size-3.5" />
              {yazi.okumaSuresi} dk
            </span>
          </p>
          <span className="text-red mt-4 inline-flex items-center gap-1 text-sm font-semibold">
            Devamını Oku
            <ArrowRight aria-hidden className="size-4" />
          </span>
        </div>
      </Link>
    </Card>
  );
}

export function BlogIndex({
  kategoriParam,
  sayfaParam,
}: {
  kategoriParam?: string;
  sayfaParam?: string;
}) {
  const kategori = isBlogKategori(kategoriParam) ? kategoriParam : null;
  const all = getSortedBlogYazilari();
  const filtered = kategori ? all.filter((yazi) => yazi.kategori === kategori) : all;
  const totalPages = Math.max(1, Math.ceil(filtered.length / BLOG_PAGE_SIZE));
  const requested = Number.parseInt(sayfaParam ?? '1', 10);
  const page = Number.isFinite(requested) ? Math.min(Math.max(1, requested), totalPages) : 1;
  const start = (page - 1) * BLOG_PAGE_SIZE;
  const posts = filtered.slice(start, start + BLOG_PAGE_SIZE);

  return (
    <section className="bg-white" aria-labelledby="blog-baslik">
      <Container className="py-10 lg:py-16">
        <nav aria-label="Blog kategorileri" className="mb-10">
          <ul className="flex flex-wrap justify-center gap-2">
            {FILTERS.map((filter) => {
              const active = filter.value === kategori;
              return (
                <li key={filter.label}>
                  <Link
                    href={filter.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'inline-flex rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                      active
                        ? 'bg-red text-white'
                        : 'bg-gray text-navy hover:bg-red/10 hover:text-red'
                    )}
                  >
                    {filter.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {posts.length === 0 ? (
          <p className="text-dark-gray/75 py-12 text-center">
            Bu kategoride henüz yazı yok. Tüm yazılara dönebilirsiniz.
          </p>
        ) : (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((yazi) => (
              <li key={yazi.slug}>
                <BlogCard yazi={yazi} />
              </li>
            ))}
          </ul>
        )}

        <nav
          aria-label="Blog sayfalama"
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {page > 1 ? (
            <Link
              href={blogListHref(kategori, page - 1)}
              className="border-navy/15 text-navy hover:border-red hover:text-red rounded-lg border px-4 py-2 text-sm font-semibold"
            >
              Önceki
            </Link>
          ) : (
            <span className="border-navy/10 text-dark-gray/40 rounded-lg border px-4 py-2 text-sm">
              Önceki
            </span>
          )}
          <p className="text-navy text-sm font-medium">
            Sayfa {page} / {totalPages}
          </p>
          {page < totalPages ? (
            <Link
              href={blogListHref(kategori, page + 1)}
              className="border-navy/15 text-navy hover:border-red hover:text-red rounded-lg border px-4 py-2 text-sm font-semibold"
            >
              Sonraki
            </Link>
          ) : (
            <span className="border-navy/10 text-dark-gray/40 rounded-lg border px-4 py-2 text-sm">
              Sonraki
            </span>
          )}
        </nav>

        <p className="text-dark-gray/70 mt-6 text-center text-sm">
          {filtered.length} yazı
          {kategori ? ` · ${BLOG_KATEGORI_LABELS[kategori]}` : ''}
        </p>
      </Container>
    </section>
  );
}
