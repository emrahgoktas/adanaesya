import { JsonLd } from '@/components/seo/JsonLd';
import type { BlogFrontmatter } from '@/lib/mdx';
import { generateArticleSchema, generateGraphSchema, generatePersonSchema } from '@/lib/schema';

export function BlogArticleJsonLd({
  slug,
  frontmatter,
}: {
  slug: string;
  frontmatter: BlogFrontmatter;
}) {
  const nodes = [
    generateArticleSchema({
      slug,
      baslik: frontmatter.title,
      metaDescription: frontmatter.metaDescription,
      yazar: frontmatter.author,
      yayinTarihi: frontmatter.date,
      gorsel: frontmatter.image,
      anahtarKelimeler: frontmatter.keywords,
    }),
    generatePersonSchema(frontmatter.author),
  ];

  return <JsonLd id={`json-ld-article-${slug}`} data={generateGraphSchema(nodes)} />;
}
