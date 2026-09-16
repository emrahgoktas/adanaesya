import type { Metadata } from 'next';
import { BlogIndex } from '@/components/sections/BlogIndex';
import { CTASection } from '@/components/sections/CTASection';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { Container } from '@/components/ui/Container';

const PAGE_TITLE = 'Blog | Adana Eşya Depolama Rehberi';
const PAGE_DESCRIPTION =
  'Adana eşya depolama blog: fiyat rehberi, depo seçimi, tadilat, mobilya, öğrenci ve e-ticaret stok yazıları. Güncel ipuçları ve yerel rehberler bu sayfada.';

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/blog' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://adanaesyadepo.com/blog',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
};

type Props = {
  searchParams: Promise<{ kategori?: string; sayfa?: string }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Blog', href: '/blog' },
        ]}
      />

      <header className="bg-gray">
        <Container className="py-12 text-center lg:py-16">
          <h1
            id="blog-baslik"
            className="text-navy mx-auto max-w-4xl px-2 text-[clamp(1.5rem,3.8vw,2.5rem)] leading-[1.2] font-extrabold"
          >
            Adana Eşya Depolama
            <br />
            Blog
          </h1>
          <span aria-hidden className="bg-red mx-auto mt-4 block h-1 w-16 rounded-full" />
          <p className="text-dark-gray/80 mx-auto mt-5 max-w-2xl text-base md:text-lg">
            Depolama hakkında güncel rehberler ve ipuçları
          </p>
        </Container>
      </header>

      <BlogIndex kategoriParam={params.kategori} sayfaParam={params.sayfa} />
      <CTASection
        title="Depolama rehberini uygulamaya geçirin"
        subtitle="Yazıdaki kriterleri keşifte birlikte ölçelim. 15 ilçede ücretsiz keşif ve net teklif."
      />
    </>
  );
}
