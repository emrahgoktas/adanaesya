import type { ReactNode } from 'react';
import { JsonLd } from '@/components/seo/JsonLd';
import type { BreadcrumbItem } from '@/components/seo/Breadcrumbs';
import { generateBreadcrumbSchema } from '@/lib/schema';

export interface StructuredBreadcrumbProps {
  items: BreadcrumbItem[];
  children?: ReactNode;
  id?: string;
}

export function StructuredBreadcrumb({
  items,
  children,
  id = 'json-ld-breadcrumb',
}: StructuredBreadcrumbProps) {
  const schema =
    items.length > 0
      ? generateBreadcrumbSchema(
          items.map((item) => ({
            name: item.label,
            ...(item.href ? { url: item.href } : {}),
          }))
        )
      : null;

  return (
    <>
      {children}
      {schema ? <JsonLd id={id} data={schema} /> : null}
    </>
  );
}
