import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { Container } from '@/components/ui/Container';
import { getBlogPath, getSortedBlogYazilari } from '@/data/blog';
import { getHizmetPath, hizmetler } from '@/data/hizmetler';
import { getIlcePath, ilceler } from '@/data/ilceler';

const PAGE_TITLE = 'Site Haritası | Adana Eşya Depolama';
const PAGE_DESCRIPTION =
  'Adana Eşya Depolama site haritası: hizmetler, 15 ilçe, blog yazıları ve kurumsal sayfalar. Aradığınız depolama sayfasına buradan geçin.';

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/sitemap' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://adanaesyadepo.com/sitemap',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
};

const linkClass = 'text-sm text-dark-gray/80 hover:text-red';

const KURUMSAL = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/fiyatlar', label: 'Fiyatlar' },
  { href: '/iletisim', label: 'İletişim' },
  { href: '/blog', label: 'Blog' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/bolgeler', label: 'Bölgeler' },
  { href: '/kvkk', label: 'KVKK Aydınlatma Metni' },
  { href: '/gizlilik-politikasi', label: 'Gizlilik Politikası' },
  { href: '/cerez-politikasi', label: 'Çerez Politikası' },
  { href: '/kullanim-kosullari', label: 'Kullanım Koşulları' },
] as const;

export default function SitemapPage() {
  const yazilar = getSortedBlogYazilari();

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Site Haritası', href: '/sitemap' },
        ]}
      />

      <header className="bg-gray">
        <Container className="py-12 text-center lg:py-16">
          <h1 className="text-navy text-[clamp(1.5rem,3.8vw,2.5rem)] leading-[1.2] font-extrabold">
            Site Haritası
          </h1>
          <span aria-hidden className="bg-red mx-auto mt-4 block h-1 w-16 rounded-full" />
          <p className="text-dark-gray/80 mx-auto mt-5 max-w-2xl text-base md:text-lg">
            Tüm hizmet, bölge, blog ve kurumsal sayfaların listesi.
          </p>
        </Container>
      </header>

      <Container className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:py-16">
        <section aria-labelledby="harita-hizmetler">
          <h2 id="harita-hizmetler" className="text-navy text-xl font-bold">
            Hizmetler
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/hizmetler" className={linkClass}>
                Tüm hizmetler
              </Link>
            </li>
            {hizmetler.map((hizmet) => (
              <li key={hizmet.slug}>
                <Link href={getHizmetPath(hizmet.slug)} className={linkClass}>
                  {hizmet.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="harita-bolgeler">
          <h2 id="harita-bolgeler" className="text-navy text-xl font-bold">
            Bölgeler
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <li className="sm:col-span-2">
              <Link href="/bolgeler" className={linkClass}>
                Tüm ilçeler
              </Link>
            </li>
            {ilceler.map((ilce) => (
              <li key={ilce.slug}>
                <Link href={getIlcePath(ilce.slug)} className={linkClass}>
                  {ilce.name} eşya depolama
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="harita-blog">
          <h2 id="harita-blog" className="text-navy text-xl font-bold">
            Blog
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/blog" className={linkClass}>
                Tüm yazılar
              </Link>
            </li>
            {yazilar.map((yazi) => (
              <li key={yazi.slug}>
                <Link href={getBlogPath(yazi.slug)} className={linkClass}>
                  {yazi.baslik}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="harita-kurumsal">
          <h2 id="harita-kurumsal" className="text-navy text-xl font-bold">
            Kurumsal
          </h2>
          <ul className="mt-4 space-y-2">
            {KURUMSAL.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
}
