import { JsonLd } from '@/components/seo/JsonLd';
import type { Hizmet } from '@/data/hizmetler';
import type { SSSItem } from '@/data/sss';
import {
  generateFAQSchema,
  generateGraphSchema,
  generateOfferSchema,
  generateServiceSchema,
} from '@/lib/schema';

export interface HizmetJsonLdProps {
  hizmet: Hizmet;
  path: string;
  faqs: SSSItem[];
}

export function HizmetJsonLd({ hizmet, faqs }: HizmetJsonLdProps) {
  const nodes = [
    generateServiceSchema(hizmet),
    generateOfferSchema(hizmet),
    ...(faqs.length > 0 ? [generateFAQSchema(faqs)] : []),
  ];

  return <JsonLd id={`json-ld-hizmet-${hizmet.slug}`} data={generateGraphSchema(nodes)} />;
}
