import {
  Armchair,
  ArrowRight,
  Boxes,
  CircleCheck,
  FolderArchive,
  GraduationCap,
  Package,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import type { Hizmet } from '@/data/hizmetler';
import { getHizmetPath } from '@/data/hizmetler';

const ICONS: Record<string, LucideIcon> = {
  Armchair,
  Boxes,
  FolderArchive,
  GraduationCap,
  Package,
};

export interface HizmetIndexCardsProps {
  services: Hizmet[];
}

export function HizmetIndexCards({ services }: HizmetIndexCardsProps) {
  return (
    <section className="bg-white" aria-label="Hizmet listesi">
      <Container className="py-10 pb-14 lg:py-12 lg:pb-20">
        <ul className="flex flex-col gap-6 lg:gap-8">
          {services.map((hizmet) => {
            const Icon = ICONS[hizmet.icon] ?? Package;
            const features = hizmet.ozellikler.slice(0, 5);
            const description = hizmet.icerik[0] ?? hizmet.ozet;

            return (
              <li key={hizmet.slug}>
                <Card className="border-navy/10 p-6 transition-[border-color,box-shadow] hover:border-red lg:p-8">
                  <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
                    <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-lg bg-red text-white">
                      <Icon aria-hidden className="size-8" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-[clamp(1.35rem,2.5vw,1.875rem)] leading-snug font-bold text-navy">
                        {hizmet.name}
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-dark-gray/85">{description}</p>
                      <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {features.map((ozellik) => (
                          <li key={ozellik} className="flex items-start gap-2 text-sm text-navy">
                            <CircleCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-red" />
                            <span>{ozellik}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Button asChild variant="primary">
                          <Link href={getHizmetPath(hizmet.slug)}>Detaylı Bilgi</Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link href="/iletisim">Teklif Al</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
