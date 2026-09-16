import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CalendarDays, Clock, UserRound } from 'lucide-react';
import { BlogArticleJsonLd } from '@/components/blog/BlogArticleJsonLd';
import { BlogAuthorBox } from '@/components/blog/BlogAuthorBox';
import { BlogPostCover } from '@/components/blog/BlogPostCover';
import { BlogShareButtons } from '@/components/blog/BlogShareButtons';
import { BlogTableOfContents } from '@/components/blog/BlogTableOfContents';
import { CTASection } from '@/components/sections/CTASection';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { InternalLinks } from '@/components/sections/InternalLinks';
import { RelatedBlogPosts } from '@/components/sections/RelatedBlogPosts';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { FAQJsonLd } from '@/components/seo/FAQJsonLd';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { formatBlogDate, getBlogKategoriLabel, getBlogPath } from '@/data/blog';
import type { SSSItem } from '@/data/sss';
import { SITE_CONFIG } from '@/lib/constants';
import { getBlogMdxSlugs, getBlogPostSource, loadBlogMdx } from '@/lib/mdx';
import { useMDXComponents } from '@/mdx-components';

export const runtime = 'nodejs';

type Props = { params: Promise<{ slug: string }> };

function toFaqItems(slug: string, items: { soru: string; cevap: string }[]): SSSItem[] {
  return items.map((item, index) => ({
    id: `${slug}-sss-${index + 1}`,
    soru: item.soru,
    cevap: item.cevap,
    kategori: 'hizmet',
  }));
}

export async function generateStaticParams() {
  return getBlogMdxSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostSource(slug);
  if (!post) return {};

  const { frontmatter } = post;
  const path = getBlogPath(slug);
  const canonical = `${SITE_CONFIG.url}${path}`;

  return {
    title: { absolute: frontmatter.metaTitle },
    description: frontmatter.metaDescription,
    keywords: frontmatter.keywords,
    authors: [{ name: frontmatter.author }],
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      locale: 'tr_TR',
      url: canonical,
      siteName: SITE_CONFIG.name,
      title: frontmatter.metaTitle,
      description: frontmatter.metaDescription,
      publishedTime: frontmatter.date,
      modifiedTime: frontmatter.date,
      authors: [frontmatter.author],
      tags: frontmatter.keywords,
      images: [
        {
          url: frontmatter.image,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.metaTitle,
      description: frontmatter.metaDescription,
      images: [frontmatter.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const source = getBlogPostSource(slug);
  if (!source) {
    notFound();
  }

  const Content = await loadBlogMdx(source.content);
  const mdxComponents = useMDXComponents({});

  const { frontmatter, headings } = source;
  const faqs = frontmatter.sss?.length ? toFaqItems(slug, frontmatter.sss) : [];
  const shareUrl = `${SITE_CONFIG.url}${getBlogPath(slug)}`;

  return (
    <>
      <BlogArticleJsonLd slug={slug} frontmatter={frontmatter} />
      {faqs.length > 0 ? <FAQJsonLd items={faqs} /> : null}
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: frontmatter.title, href: getBlogPath(slug) },
        ]}
      />

      <article>
        <header className="bg-gray">
          <Container className="py-10 lg:py-14">
            <Badge>{getBlogKategoriLabel(frontmatter.category)}</Badge>
            <h1 className="text-navy mt-4 max-w-4xl text-[clamp(1.5rem,3.4vw,2.35rem)] leading-[1.25] font-extrabold">
              {frontmatter.title}
            </h1>
            <p className="text-dark-gray/75 mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="inline-flex items-center gap-1.5">
                <UserRound aria-hidden className="size-4" />
                {frontmatter.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays aria-hidden className="size-4" />
                <time dateTime={frontmatter.date}>{formatBlogDate(frontmatter.date)}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock aria-hidden className="size-4" />
                {frontmatter.readingTime} dk okuma
              </span>
            </p>
            <div className="mt-8">
              <BlogPostCover
                src={frontmatter.image}
                title={frontmatter.title}
                category={frontmatter.category}
              />
            </div>
          </Container>
        </header>

        <Container className="py-10 lg:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_17.5rem]">
            <div className="blog-prose min-w-0">
              <Content components={mdxComponents} />
            </div>
            <aside className="order-first lg:sticky lg:top-24 lg:order-none lg:self-start">
              <BlogTableOfContents headings={headings} />
            </aside>
          </div>

          <div className="mt-12 space-y-8">
            <BlogAuthorBox frontmatter={frontmatter} />
            <BlogShareButtons url={shareUrl} title={frontmatter.title} />
          </div>
        </Container>
      </article>

      <RelatedBlogPosts
        currentSlug={slug}
        kategori={frontmatter.category}
        anahtarKelimeler={frontmatter.keywords}
      />
      {faqs.length > 0 ? (
        <FAQAccordion items={faqs} title="Bu yazı hakkında sık sorulanlar" />
      ) : null}
      <InternalLinks excludeBlogSlug={slug} />
      <CTASection
        title="Bu rehberi keşifte uygulayalım"
        subtitle="Yazıdaki maddeleri Adana’daki ünitenizde birlikte ölçelim. 15 ilçede ücretsiz keşif."
      />
    </>
  );
}
