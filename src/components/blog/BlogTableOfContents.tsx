'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import type { BlogHeading } from '@/lib/mdx';

export function BlogTableOfContents({ headings }: { headings: BlogHeading[] }) {
  const [activeId, setActiveId] = useState(headings[0]?.id);

  useEffect(() => {
    if (headings.length === 0) return undefined;

    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 1] }
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="İçindekiler" className="rounded-lg border border-navy/10 bg-white p-5 shadow-card">
      <p className="text-sm font-bold tracking-wide text-navy uppercase">İçindekiler</p>
      <ol className="mt-3 space-y-2">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? 'pl-3' : undefined}>
            <a
              href={`#${heading.id}`}
              className={cn(
                'block text-sm leading-snug hover:text-red',
                activeId === heading.id ? 'font-semibold text-red' : 'text-dark-gray/75'
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
