import type { Metadata } from 'next';
import { AdanaMap } from '@/components/sections/AdanaMap';
import { BolgelerIndexCards } from '@/components/sections/BolgelerIndexCards';
import { CTASection } from '@/components/sections/CTASection';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { Container } from '@/components/ui/Container';

const PAGE_TITLE = 'Adana Eşya Depolama Bölgeleri | 15 İlçede Hizmet';
const PAGE_DESCRIPTION =
  "Seyhan, Yüreğir, Çukurova, Sarıçam ve Adana'nın 15 ilçesinde eşya depolama. 7/24 kamera, sigorta ve ücretsiz keşif. İlçenize özel depo çözümünü hemen seçin.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/bolgeler' },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://adanaesyadepo.com/bolgeler',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
};

export default function BolgelerPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Bölgeler', href: '/bolgeler' },
        ]}
      />

      <header className="bg-gray">
        <Container className="py-12 text-center lg:py-16">
          <h1
            id="bolgeler-baslik"
            className="text-navy mx-auto max-w-3xl px-2 text-[clamp(1.5rem,3.8vw,2.35rem)] leading-[1.2] font-extrabold"
          >
            Adana&apos;nın Tüm İlçelerinde
            <br />
            Eşya Depolama
          </h1>
          <span aria-hidden className="bg-red mx-auto mt-4 block h-1 w-16 rounded-full" />
          <p className="text-dark-gray/80 mx-auto mt-5 max-w-2xl text-base md:text-lg">
            15 ilçede güvenli depolama hizmeti
          </p>
        </Container>
      </header>

      <BolgelerIndexCards />
      <AdanaMap />
      <CTASection
        title="15 ilçede eşyanızı güvenceye alın"
        subtitle="Merkezden yaylalara, Adana’nın tüm ilçelerine ücretsiz keşif ve sigortalı depolama."
      />
    </>
  );
}
