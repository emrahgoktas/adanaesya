import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { hizmetler } from '@/data/hizmetler';
import { getIlcePath, ilceler } from '@/data/ilceler';
import { formatAddressLine, SITE_CONFIG } from '@/lib/constants';

const linkClass =
  'text-sm text-white/90 transition-colors hover:text-white hover:underline focus-visible:outline-red';

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: SITE_CONFIG.social.facebook,
    icon: FacebookIcon,
  },
  {
    name: 'Instagram',
    href: SITE_CONFIG.social.instagram,
    icon: InstagramIcon,
  },
  {
    name: 'X (Twitter)',
    href: SITE_CONFIG.social.twitter,
    icon: XIcon,
  },
  {
    name: 'YouTube',
    href: SITE_CONFIG.social.youtube,
    icon: YouTubeIcon,
  },
] as const;

function FacebookIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-4 fill-current">
      <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v7h4v-7h3.1l.9-4H13V9c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-4 fill-current">
      <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm-4 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2ZM17.4 7.1a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-4 fill-current">
      <path d="M14.7 10.3 22 2h-2.2l-6.3 7.1L8.6 2H2l7.7 11L2 22h2.2l6.8-7.6L15.5 22H22l-7.3-11.7Zm-2.4 2.7-.8-1.1L5 3.6h2.6l4.7 6.7.8 1.1 6.4 9H16.9l-4.6-6.4Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-4 fill-current">
      <path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6ZM9.8 15.6V8.8l6.2 3.4-6.2 3.4Z" />
    </svg>
  );
}

export function Footer() {
  const addressLine = formatAddressLine();

  return (
    <footer className="bg-navy text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Site alt bilgisi
      </h2>
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8 lg:py-16">
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed text-white/90">
            Adana&apos;nın tüm ilçelerinde 7/24 kamera izlemeli, sigortalı eşya depolama. Ücretsiz
            keşif ve esnek kiralama.
          </p>
          <Link href="/hakkimizda" className={`${linkClass} mt-3 inline-block`}>
            Hakkımızda
          </Link>
          <ul className="mt-5 flex gap-2" aria-label="Sosyal medya">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${SITE_CONFIG.name} ${social.name} sayfası (yeni sekme)`}
                    className="hover:bg-red inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:text-white"
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-labelledby="footer-hizmetler">
          <h3 id="footer-hizmetler" className="mb-4 text-sm font-bold tracking-wide uppercase">
            Hizmetler
          </h3>
          <ul className="space-y-2">
            {hizmetler.map((hizmet) => (
              <li key={hizmet.slug}>
                <Link href={`/hizmetler/${hizmet.slug}`} className={linkClass}>
                  {hizmet.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-bolgeler">
          <h3 id="footer-bolgeler" className="mb-4 text-sm font-bold tracking-wide uppercase">
            Bölgeler
          </h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {ilceler.map((ilce) => (
              <li key={ilce.slug}>
                <Link
                  href={getIlcePath(ilce.slug)}
                  className={linkClass}
                  aria-label={`${ilce.name} eşya depolama`}
                >
                  {ilce.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 id="footer-iletisim" className="mb-4 text-sm font-bold tracking-wide uppercase">
            İletişim
          </h3>
          <address className="not-italic">
            <ul className="space-y-3 text-sm text-white/90" aria-labelledby="footer-iletisim">
              <li className="flex gap-3">
                <MapPin aria-hidden className="text-red mt-0.5 size-4 shrink-0" />
                <span>{addressLine}</span>
              </li>
              <li className="flex gap-3">
                <Phone aria-hidden className="text-red mt-0.5 size-4 shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className={linkClass}>
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone aria-hidden className="text-red mt-0.5 size-4 shrink-0" />
                <a href={`tel:${SITE_CONFIG.phoneLandline}`} className={linkClass}>
                  {SITE_CONFIG.phoneLandlineDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail aria-hidden className="text-red mt-0.5 size-4 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className={linkClass}>
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock aria-hidden className="text-red mt-0.5 size-4 shrink-0" />
                <span>Her gün 00:00–23:59 (7/24)</span>
              </li>
            </ul>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-5 py-6 text-sm text-white/90 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Copyright © 2026 {SITE_CONFIG.name}</p>
          <nav aria-label="Yasal sayfalar">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              <li>
                <Link href="/kvkk" className={linkClass}>
                  KVKK Aydınlatma Metni
                </Link>
              </li>
              <li>
                <Link href="/gizlilik-politikasi" className={linkClass}>
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/cerez-politikasi" className={linkClass}>
                  Çerez Politikası
                </Link>
              </li>
              <li>
                <Link href="/kullanim-kosullari" className={linkClass}>
                  Kullanım Koşulları
                </Link>
              </li>
            </ul>
          </nav>
          <p className="text-white/90">Tasarım &amp; Geliştirme</p>
        </div>
      </div>
    </footer>
  );
}
