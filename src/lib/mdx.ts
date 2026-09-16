import fs from 'node:fs';
import path from 'node:path';
import { evaluate } from '@mdx-js/mdx';
import GithubSlugger from 'github-slugger';
import matter from 'gray-matter';
import type { ComponentType } from 'react';
import * as jsxRuntime from 'react/jsx-runtime';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { isBlogKategori, type BlogYazisi } from '@/data/blog';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export type BlogSss = { soru: string; cevap: string };

export type BlogFrontmatter = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: BlogYazisi['kategori'];
  author: string;
  date: string;
  readingTime: number;
  image: string;
  keywords: string[];
  sss?: BlogSss[];
  authorBio?: string;
};

export type BlogHeading = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type BlogPostSource = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  headings: BlogHeading[];
};

export function getBlogMdxSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

function toIsoDate(value: unknown): string | null {
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value)) {
    return value.slice(0, 10);
  }
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  return null;
}

function parseFrontmatter(data: Record<string, unknown>): BlogFrontmatter | null {
  const title = typeof data.title === 'string' ? data.title : null;
  const metaTitle = typeof data.metaTitle === 'string' ? data.metaTitle : title;
  const description = typeof data.description === 'string' ? data.description : null;
  const metaDescription =
    typeof data.metaDescription === 'string' ? data.metaDescription : description;
  const excerpt = typeof data.excerpt === 'string' ? data.excerpt : metaDescription;
  const category =
    typeof data.category === 'string' && isBlogKategori(data.category)
      ? data.category
      : 'rehber';
  const author =
    typeof data.author === 'string' ? data.author : 'Adana Eşya Depolama';
  const date = toIsoDate(data.date);
  const parsedReadingTime = Number(data.readingTime);
  const readingTime =
    Number.isFinite(parsedReadingTime) && parsedReadingTime > 0 ? parsedReadingTime : 8;
  const image = typeof data.image === 'string' ? data.image : '/og.jpg';
  const keywords = Array.isArray(data.keywords)
    ? data.keywords.filter((item): item is string => typeof item === 'string')
    : [];
  const sss = Array.isArray(data.sss)
    ? data.sss.flatMap((item) => {
        if (!item || typeof item !== 'object') return [];
        const row = item as { soru?: unknown; cevap?: unknown };
        if (typeof row.soru !== 'string' || typeof row.cevap !== 'string') return [];
        return [{ soru: row.soru, cevap: row.cevap }];
      })
    : undefined;
  const authorBio = typeof data.authorBio === 'string' ? data.authorBio : undefined;

  if (!title || !metaDescription || !excerpt || !date) {
    return null;
  }

  return {
    title,
    metaTitle: metaTitle ?? title,
    metaDescription,
    excerpt,
    category,
    author,
    date,
    readingTime,
    image,
    keywords,
    sss,
    authorBio,
  };
}

export function extractHeadings(markdown: string): BlogHeading[] {
  const slugger = new GithubSlugger();
  const headings: BlogHeading[] = [];

  for (const line of markdown.split('\n')) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line.trim());
    if (!match) continue;
    const level = match[1].length as 2 | 3;
    const text = match[2]
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_`]/g, '')
      .trim();
    headings.push({ id: slugger.slug(text), text, level });
  }

  return headings;
}

export function getBlogPostSource(slug: string): BlogPostSource | null {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, 'utf8');
  const parsed = matter(raw);
  const frontmatter = parseFrontmatter(parsed.data);
  if (!frontmatter) return null;

  return {
    slug,
    frontmatter,
    content: parsed.content,
    headings: extractHeadings(parsed.content),
  };
}

export async function loadBlogMdx(source: string): Promise<ComponentType<{ components?: object }>> {
  const { default: Content } = await evaluate(source, {
    ...jsxRuntime,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  });

  return Content as ComponentType<{ components?: object }>;
}
