import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import {
  getInternalLinkKindLabel,
  getInternalLinks,
  type InternalLinkOptions,
} from '@/lib/internal-links';

export type InternalLinksProps = InternalLinkOptions;

export function InternalLinks({
  excludeHizmetSlug,
  excludeIlceSlug,
  excludeBlogSlug,
  count = 8,
}: InternalLinksProps) {
  const links = getInternalLinks({
    excludeHizmetSlug,
    excludeIlceSlug,
    excludeBlogSlug,
    count,
  });

  if (links.length === 0) return null;

  return (
    <section className="bg-gray" aria-labelledby="ilgili-sayfalar">
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id="ilgili-sayfalar"
          title="İlgili Sayfalar"
          subtitle="Hizmet, ilçe ve blog sayfalarından seçilmiş iç bağlantılar."
          className="mb-8 lg:mb-10"
        />
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group border-navy/10 hover:border-red hover:shadow-card flex h-full items-start gap-3 rounded-lg border bg-white p-4 transition-[border-color,box-shadow]"
              >
                <span className="bg-red/10 text-red mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold tracking-wide uppercase">
                  {getInternalLinkKindLabel(link.kind)}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="text-navy group-hover:text-red block text-sm font-semibold">
                    {link.label}
                  </span>
                  <span className="text-red mt-1 inline-flex items-center gap-1 text-xs font-medium">
                    Sayfaya git
                    <ArrowRight
                      aria-hidden
                      className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
