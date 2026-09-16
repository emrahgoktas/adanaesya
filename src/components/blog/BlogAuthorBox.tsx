import { UserRound } from 'lucide-react';
import type { BlogFrontmatter } from '@/lib/mdx';

export function BlogAuthorBox({ frontmatter }: { frontmatter: BlogFrontmatter }) {
  const bio =
    frontmatter.authorBio ??
    'Adana Eşya Depolama içerik ekibi; 15 ilçede sigortalı depolama, keşif ve taşıma planı üzerine yazar.';

  return (
    <aside
      aria-label="Yazar"
      className="flex gap-4 rounded-lg border border-navy/10 bg-white p-5 shadow-card"
    >
      <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-light-blue text-blue">
        <UserRound aria-hidden className="size-7" />
      </span>
      <div>
        <p className="text-xs font-semibold tracking-wide text-red uppercase">Yazar</p>
        <p className="mt-1 text-lg font-bold text-navy">{frontmatter.author}</p>
        <p className="mt-2 text-sm leading-relaxed text-dark-gray/75">{bio}</p>
      </div>
    </aside>
  );
}
