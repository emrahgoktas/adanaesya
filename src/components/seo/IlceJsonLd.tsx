import { JsonLd } from '@/components/seo/JsonLd';
import type { Ilce } from '@/data/ilceler';
import type { SSSItem } from '@/data/sss';
import { generateFAQSchema, generateGraphSchema, generateSelfStorageSchema } from '@/lib/schema';

export interface IlceJsonLdProps {
  ilce: Ilce;
  path: string;
  faqs: SSSItem[];
}

export function IlceJsonLd({ ilce, faqs }: IlceJsonLdProps) {
  const nodes = [
    generateSelfStorageSchema(ilce),
    ...(faqs.length > 0 ? [generateFAQSchema(faqs)] : []),
  ];

  return <JsonLd id={`json-ld-ilce-${ilce.slug}`} data={generateGraphSchema(nodes)} />;
}
