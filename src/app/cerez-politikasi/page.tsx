import { LegalDocument } from '@/components/legal/LegalDocument';
import { cerezSections } from '@/data/yasal';
import { generatePageMetadata } from '@/lib/metadata';

const TITLE = 'Çerez Politikası';
const PATH = '/cerez-politikasi';

export const metadata = generatePageMetadata({
  title: TITLE,
  description:
    'Adana Eşya Depolama çerez politikası: zorunlu, analitik ve pazarlama çerezleri, Google–Vercel izleme, saklama süreleri ve tarayıcıdan yönetim. Taslak metindir.',
  path: PATH,
  noIndex: true,
  follow: true,
});

export default function CerezPolitikasiPage() {
  return (
    <LegalDocument
      title={TITLE}
      path={PATH}
      headingId="cerez-baslik"
      intro="Sitede kullanılan çerez ve benzeri izleme teknolojilerine ilişkin taslak politika."
      sections={cerezSections}
    />
  );
}
