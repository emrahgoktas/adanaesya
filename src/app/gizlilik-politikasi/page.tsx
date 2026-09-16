import { LegalDocument } from '@/components/legal/LegalDocument';
import { gizlilikSections } from '@/data/yasal';
import { generatePageMetadata } from '@/lib/metadata';

const TITLE = 'Gizlilik Politikası';
const PATH = '/gizlilik-politikasi';

export const metadata = generatePageMetadata({
  title: TITLE,
  description:
    'Adana Eşya Depolama gizlilik politikası: toplanan verilerin kullanımı, paylaşımı, saklanması ve güvenlik tedbirleri. İletişim bilgileri sayfanın sonundadır.',
  path: PATH,
  noIndex: true,
  follow: true,
});

export default function GizlilikPolitikasiPage() {
  return (
    <LegalDocument
      title={TITLE}
      path={PATH}
      headingId="gizlilik-baslik"
      intro="Web sitesi ve müşteri süreçlerinde kişisel verilerin nasıl korunduğuna dair taslak gizlilik politikası."
      sections={gizlilikSections}
    />
  );
}
