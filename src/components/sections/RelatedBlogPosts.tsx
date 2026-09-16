import Link from 'next/link';
import { BlogCoverImage } from '@/components/blog/BlogCoverImage';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import {
  getBlogKategoriLabel,
  getBlogPath,
  getRelatedBlogPosts,
  type BlogYazisi,
} from '@/data/blog';
import { IMAGE_SIZES } from '@/lib/images';

export interface RelatedBlogPostsProps {
  posts?: BlogYazisi[];
  currentSlug?: string;
  kategori?: BlogYazisi['kategori'];
  anahtarKelimeler?: string[];
  hizmetSlug?: string;
  count?: number;
  title?: string;
}

export function RelatedBlogPosts({
  posts,
  currentSlug,
  kategori,
  anahtarKelimeler,
  hizmetSlug,
  count = 3,
  title = 'İlgili Blog Yazıları',
}: RelatedBlogPostsProps) {
  const items =
    posts ??
    getRelatedBlogPosts({
      excludeSlug: currentSlug,
      kategori,
      anahtarKelimeler,
      hizmetSlug,
      count,
    });

  if (items.length === 0) return null;

  return (
    <section className="bg-white" aria-labelledby="ilgili-yazilar">
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id="ilgili-yazilar"
          title={title}
          subtitle="Kategori ve anahtar kelime eşleşmesine göre seçilen rehber yazılar."
          className="mb-8 lg:mb-10"
        />
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((yazi) => (
            <li key={yazi.slug}>
              <Card className="hover:border-red h-full p-0 transition-[border-color]">
                <Link href={getBlogPath(yazi.slug)} className="flex h-full flex-col">
                  <div className="relative aspect-[1200/630] overflow-hidden">
                    <BlogCoverImage
                      src={yazi.gorsel}
                      alt={`${yazi.baslik} kapak görseli`}
                      sizes={IMAGE_SIZES.related}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-red text-xs font-semibold tracking-wide uppercase">
                      {getBlogKategoriLabel(yazi.kategori)}
                    </span>
                    <h3 className="text-navy mt-2 text-lg font-bold">{yazi.baslik}</h3>
                    <p className="text-dark-gray/75 mt-2 flex-1 text-sm leading-relaxed">
                      {yazi.ozet}
                    </p>
                    <span className="text-red mt-4 text-sm font-semibold">Yazıyı oku</span>
                  </div>
                </Link>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
