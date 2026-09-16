import {
  Breadcrumbs,
  type BreadcrumbItem,
  type BreadcrumbsProps,
} from '@/components/seo/Breadcrumbs';
import { StructuredBreadcrumb } from '@/components/seo/StructuredBreadcrumb';

export type { BreadcrumbItem };

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: BreadcrumbsProps['variant'];
  className?: string;
}

export function Breadcrumb({ items, variant = 'navy', className }: BreadcrumbProps) {
  if (items.length === 0) return null;

  return (
    <StructuredBreadcrumb items={items}>
      <Breadcrumbs items={items} variant={variant} className={className} />
    </StructuredBreadcrumb>
  );
}
