import { LegalDocument } from '@/components/legal/LegalDocument';
import { kullanimSections } from '@/data/yasal';
import { generatePageMetadata } from '@/lib/metadata';

const TITLE = 'Kullanım Koşulları';
const PATH = '/kullanim-kosullari';

export const metadata = generatePageMetadata({
  title: TITLE,
  description:
    'Adana Eşya Depolama kullanım koşulları: teklif niteliği, yükümlülükler, fikri mülkiyet, sorumluluk sınırı ve uygulanacak hukuk. Depolama sözleşmesi imzalanır.',
  path: PATH,
  noIndex: true,
  follow: true,
});

export default function KullanimKosullariPage() {
  return (
    <LegalDocument
      title={TITLE}
      path={PATH}
      headingId="kosullar-baslik"
      intro="adanadepolama.com sitesinin kullanımına ilişkin taslak koşullar. Fiziksel depolama ayrı sözleşmeye tabidir."
      sections={kullanimSections}
    />
  );
}
