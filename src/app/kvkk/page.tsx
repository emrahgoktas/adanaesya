import { LegalDocument } from '@/components/legal/LegalDocument';
import { kvkkSections } from '@/data/yasal';
import { generatePageMetadata } from '@/lib/metadata';

const TITLE = 'KVKK Aydınlatma Metni';
const PATH = '/kvkk';

export const metadata = generatePageMetadata({
  title: TITLE,
  description:
    'Adana Eşya Depolama KVKK aydınlatma metni: işlenen veriler, hukuki sebepler, saklama, aktarım ve m.11 haklarınız. Veri sorumlusu iletişim bilgileri sayfadadır.',
  path: PATH,
  noIndex: true,
  follow: true,
});

export default function KvkkPage() {
  return (
    <LegalDocument
      title={TITLE}
      path={PATH}
      headingId="kvkk-baslik"
      intro="6698 sayılı KVKK kapsamında kişisel verilerinizin işlenmesine ilişkin taslak aydınlatma metni."
      sections={kvkkSections}
    />
  );
}
