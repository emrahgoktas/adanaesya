import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { Container } from '@/components/ui/Container';
import { LEGAL_UPDATED_AT, type LegalSection } from '@/data/yasal';
import { formatAddressLine, SITE_CONFIG } from '@/lib/constants';

const LEGAL_LINKS = [
  { href: '/kvkk', label: 'KVKK Aydınlatma Metni' },
  { href: '/gizlilik-politikasi', label: 'Gizlilik Politikası' },
  { href: '/cerez-politikasi', label: 'Çerez Politikası' },
  { href: '/kullanim-kosullari', label: 'Kullanım Koşulları' },
] as const;

export interface LegalDocumentProps {
  title: string;
  path: string;
  headingId: string;
  intro: string;
  sections: LegalSection[];
}

export function LegalDocument({ title, path, headingId, intro, sections }: LegalDocumentProps) {
  const addressLine = formatAddressLine();

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: title, href: path },
        ]}
      />

      <header className="bg-gray">
        <Container className="py-12 lg:py-16">
          <h1
            id={headingId}
            className="text-[clamp(1.5rem,3.8vw,2.5rem)] leading-[1.2] font-extrabold text-navy"
          >
            {title}
          </h1>
          <span aria-hidden className="mt-4 block h-1 w-16 rounded-full bg-red" />
          <p className="mt-5 max-w-3xl text-base text-dark-gray/80 md:text-lg">{intro}</p>
          <p className="mt-4 text-sm font-medium text-navy">
            Son güncelleme: {LEGAL_UPDATED_AT}
          </p>
        </Container>
      </header>

      <article aria-labelledby={headingId} className="bg-white">
        <Container className="py-14 lg:py-20">
          <p className="mb-10 rounded-lg border border-navy/10 bg-gray px-4 py-3 text-sm text-dark-gray/80">
            Bu sayfa hukuki bir yer tutucudur (taslak). Avukat onayı ve güncel mevzuat kontrolü
            yapılmadan bağlayıcı metin olarak kullanılmamalıdır.
          </p>

          <div className="max-w-3xl space-y-8">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-bold text-navy">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-base leading-relaxed text-dark-gray/85">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <LegalContact addressLine={addressLine} />

          <nav aria-label="Diğer yasal metinler" className="mt-10 max-w-3xl border-t border-navy/10 pt-8">
            <p className="text-sm font-semibold text-navy">Diğer yasal sayfalar</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {LEGAL_LINKS.filter((link) => link.href !== path).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-gray/80 hover:text-red hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </article>
    </>
  );
}

function LegalContact({ addressLine }: { addressLine: string }) {
  return (
    <section className="mt-12 max-w-3xl rounded-lg border border-navy/10 bg-gray p-6" aria-labelledby="yasal-iletisim">
      <h2 id="yasal-iletisim" className="text-xl font-bold text-navy">
        İletişim
      </h2>
      <p className="mt-2 text-sm text-dark-gray/80">
        Başvuru, şikâyet ve bilgi talepleriniz için veri sorumlusu / işletmeci iletişim bilgileri:
      </p>
      <address className="mt-4 not-italic">
        <ul className="space-y-3 text-sm text-dark-gray/85">
          <li className="flex gap-3">
            <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-red" />
            <span>
              {SITE_CONFIG.name}
              <br />
              {addressLine}
            </span>
          </li>
          <li className="flex gap-3">
            <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-red" />
            <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-red hover:underline">
              {SITE_CONFIG.phoneDisplay}
            </a>
          </li>
          <li className="flex gap-3">
            <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-red" />
            <a
              href={`tel:${SITE_CONFIG.phoneLandline}`}
              className="hover:text-red hover:underline"
            >
              {SITE_CONFIG.phoneLandlineDisplay}
            </a>
          </li>
          <li className="flex gap-3">
            <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-red" />
            <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-red hover:underline">
              {SITE_CONFIG.email}
            </a>
          </li>
        </ul>
      </address>
    </section>
  );
}
