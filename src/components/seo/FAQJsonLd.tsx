import { JsonLd } from '@/components/seo/JsonLd';
import type { SSSItem } from '@/data/sss';
import { generateFAQSchema } from '@/lib/schema';

export interface FAQJsonLdProps {
  items: SSSItem[];
}

export function FAQJsonLd({ items }: FAQJsonLdProps) {
  if (items.length === 0) {
    return null;
  }

  return <JsonLd data={generateFAQSchema(items)} />;
}
