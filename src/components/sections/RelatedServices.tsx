import {
  Armchair,
  ArrowRight,
  Boxes,
  FolderArchive,
  GraduationCap,
  Package,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { getRelatedHizmetler, getHizmetPath } from '@/data/hizmetler';

const ICONS: Record<string, LucideIcon> = {
  Armchair,
  Boxes,
  FolderArchive,
  GraduationCap,
  Package,
};

export interface RelatedServicesProps {
  excludeSlug?: string;
  count?: number;
}

export function RelatedServices({ excludeSlug, count = 4 }: RelatedServicesProps) {
  const services = getRelatedHizmetler(excludeSlug, count);
  if (services.length === 0) return null;

  return (
    <section className="bg-gray" aria-labelledby="diger-hizmetler">
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id="diger-hizmetler"
          title="Diğer Hizmetlerimiz"
          subtitle="Aynı güvenlik ve keşif standardıyla sunulan diğer depolama çözümleri."
          className="mb-8 lg:mb-10"
        />
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((hizmet) => {
            const Icon = ICONS[hizmet.icon] ?? Package;
            return (
              <li key={hizmet.slug}>
                <Card className="group hover:border-red h-full p-0 transition-[border-color,box-shadow]">
                  <Link href={getHizmetPath(hizmet.slug)} className="flex h-full flex-col p-5">
                    <span className="bg-red mb-4 inline-flex size-10 items-center justify-center rounded-lg text-white">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <h3 className="text-navy text-lg font-bold">{hizmet.name}</h3>
                    <p className="text-dark-gray/75 mt-2 line-clamp-3 flex-1 text-sm leading-relaxed">
                      {hizmet.ozet}
                    </p>
                    <span className="text-red mt-4 inline-flex items-center gap-1 text-sm font-semibold">
                      Detaylı Bilgi
                      <ArrowRight
                        aria-hidden
                        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </Card>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
