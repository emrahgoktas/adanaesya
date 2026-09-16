import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { IletisimSidebar } from '@/components/sections/IletisimSidebar';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { FAQJsonLd } from '@/components/seo/FAQJsonLd';
import { JsonLd } from '@/components/seo/JsonLd';
import { Container } from '@/components/ui/Container';
import { getSSSByKategori } from '@/data/sss';
import {
  generateContactPageSchema,
  generateGraphSchema,
  generateLocalBusinessSchema,
} from '@/lib/schema';

const PAGE_TITLE = 'İletişim | Adana Eşya Depolama';
const PAGE_DESCRIPTION =
  'Adana Eşya Depolama iletişim: Yeni Mahalle 87005 Sokak No:30, Seyhan / Adana. Form, WhatsApp 0549 215 13 15 ve info@adanaesyadepo.com ile ücretsiz keşif alın.';

const iletisimSSS = getSSSByKategori('iletisim');

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/iletisim' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://adanaesyadepo.com/iletisim',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
};

export default function IletisimPage() {
  return (
    <>
      <JsonLd
        id="json-ld-contact"
        data={generateGraphSchema([generateContactPageSchema(), generateLocalBusinessSchema()])}
      />
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'İletişim', href: '/iletisim' },
        ]}
      />

      <header className="bg-gray">
        <Container className="py-12 text-center lg:py-16">
          <h1
            id="iletisim-baslik"
            className="text-navy mx-auto max-w-4xl px-2 text-[clamp(1.5rem,3.8vw,2.5rem)] leading-[1.2] font-extrabold"
          >
            İletişim | <span className="block">Adana Eşya Depolama</span>
          </h1>
          <span aria-hidden className="bg-red mx-auto mt-4 block h-1 w-16 rounded-full" />
          <p className="text-dark-gray/80 mx-auto mt-5 max-w-2xl text-base md:text-lg">
            Form, telefon ve WhatsApp ile ücretsiz keşif
          </p>
        </Container>
      </header>

      <section className="bg-white" aria-labelledby="iletisim-baslik">
        <Container className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-5 lg:gap-10 lg:py-16">
          <div className="lg:col-span-3">
            <h2 className="text-navy mb-4 text-lg font-bold lg:text-xl">Ücretsiz teklif formu</h2>
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <IletisimSidebar />
          </div>
        </Container>
      </section>

      <FAQAccordion items={iletisimSSS} title="İletişim Hakkında Sıkça Sorulan Sorular" />
      <FAQJsonLd items={iletisimSSS} />
    </>
  );
}
