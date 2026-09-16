import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';
import { NotFoundSearch } from '@/components/sections/NotFoundSearch';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { getHizmetPath, hizmetler } from '@/data/hizmetler';

export default function NotFound() {
  return (
    <div className="bg-gray">
      <Container className="py-16 text-center lg:py-24">
        <p className="text-sm font-bold tracking-[0.2em] text-red uppercase">404</p>
        <h1 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.2] font-extrabold text-navy">
          Sayfa bulunamadı
        </h1>
        <span aria-hidden className="mx-auto mt-4 block h-1 w-16 rounded-full bg-red" />
        <p className="mx-auto mt-5 max-w-xl text-base text-dark-gray/80 md:text-lg">
          Aradığınız adres taşınmış veya hiç var olmamış olabilir. Ana sayfadan, popüler
          hizmetlerden veya arama önerilerinden devam edebilirsiniz.
        </p>
        <div className="mt-8">
          <Button asChild variant="primary" size="lg">
            <Link href="/">
              <Home aria-hidden className="size-4" />
              Ana sayfaya dön
            </Link>
          </Button>
        </div>
      </Container>

      <section className="bg-white" aria-labelledby="populer-hizmetler">
        <Container className="py-12 lg:py-16">
          <h2 id="populer-hizmetler" className="text-center text-2xl font-bold text-navy">
            Popüler hizmetler
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-dark-gray/75">
            Adana’da en çok bakılan depolama sayfalarına buradan geçin.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hizmetler.map((hizmet) => (
              <li key={hizmet.slug}>
                <Card className="h-full p-0 transition-[border-color] hover:border-red">
                  <Link href={getHizmetPath(hizmet.slug)} className="flex h-full flex-col p-5 text-left">
                    <span className="text-base font-bold text-navy">{hizmet.name}</span>
                    <span className="mt-2 flex-1 text-sm leading-relaxed text-dark-gray/75">
                      {hizmet.ozet}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-red">
                      İncele
                      <ArrowRight aria-hidden className="size-4" />
                    </span>
                  </Link>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-gray" aria-labelledby="arama-oneri">
        <Container className="max-w-3xl py-12 lg:py-16">
          <NotFoundSearch />
        </Container>
      </section>
    </div>
  );
}
