import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import type { BlogYazisi } from '@/data/blog';
import type { Hizmet } from '@/data/hizmetler';

export interface RelatedArticlesProps {
  posts: BlogYazisi[];
  services: Hizmet[];
  ilceName: string;
}

export function RelatedArticles({ posts, services, ilceName }: RelatedArticlesProps) {
  return (
    <section className="bg-gray" aria-labelledby="ilgili-icerikler">
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id="ilgili-icerikler"
          title={`${ilceName} için ilgili içerikler`}
          subtitle="Hizmet sayfaları ve rehber yazılarla depolama sürecini netleştirin."
          className="mb-8 lg:mb-10"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-bold text-navy">İlgili hizmetler</h3>
            <ul className="space-y-3">
              {services.map((hizmet) => (
                <li key={hizmet.slug}>
                  <Card className="p-0 transition-[border-color] hover:border-red">
                    <Link href={`/hizmetler/${hizmet.slug}`} className="flex items-center justify-between gap-3 p-4">
                      <span>
                        <span className="block font-semibold text-navy">{hizmet.name}</span>
                        <span className="mt-1 block text-sm text-dark-gray/70">{hizmet.ozet}</span>
                      </span>
                      <ArrowRight aria-hidden className="size-4 shrink-0 text-red" />
                    </Link>
                  </Card>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-navy">Blog yazıları</h3>
            <ul className="space-y-3">
              {posts.map((yazi) => (
                <li key={yazi.slug}>
                  <Card className="p-0 transition-[border-color] hover:border-red">
                    <Link href={`/blog/${yazi.slug}`} className="block p-4">
                      <span className="text-xs font-semibold tracking-wide text-red uppercase">
                        {yazi.kategori}
                      </span>
                      <span className="mt-1 block font-semibold text-navy">{yazi.baslik}</span>
                      <span className="mt-1 block text-sm text-dark-gray/70">{yazi.ozet}</span>
                    </Link>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
