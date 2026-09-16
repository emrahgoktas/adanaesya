import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { Fragment } from 'react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

const breadcrumbsVariants = cva('text-sm', {
  variants: {
    variant: {
      navy: 'bg-navy text-white',
      light: 'border-navy/10 bg-gray text-dark-gray/75 border-b',
      minimal: 'bg-transparent text-dark-gray/70',
    },
  },
  defaultVariants: {
    variant: 'navy',
  },
});

const linkVariants = cva('transition-colors', {
  variants: {
    variant: {
      navy: 'hover:text-white text-white underline-offset-2 hover:underline',
      light: 'text-dark-gray/75 hover:text-red',
      minimal: 'text-navy hover:text-red',
    },
  },
  defaultVariants: {
    variant: 'navy',
  },
});

const currentVariants = cva('font-medium', {
  variants: {
    variant: {
      navy: 'text-white',
      light: 'text-navy',
      minimal: 'text-navy',
    },
  },
  defaultVariants: {
    variant: 'navy',
  },
});

const separatorVariants = cva('', {
  variants: {
    variant: {
      navy: 'text-white/50',
      light: 'text-navy/30',
      minimal: 'text-dark-gray/40',
    },
  },
  defaultVariants: {
    variant: 'navy',
  },
});

export interface BreadcrumbsProps extends VariantProps<typeof breadcrumbsVariants> {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, variant = 'navy', className }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  const separator = variant === 'light' ? '/' : '>';

  return (
    <nav aria-label="breadcrumb" className={cn(breadcrumbsVariants({ variant }), className)}>
      <Container className="py-3">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <Fragment key={`${item.label}-${index}`}>
                {index > 0 ? (
                  <li aria-hidden="true" className={separatorVariants({ variant })}>
                    {separator}
                  </li>
                ) : null}
                <li>
                  {!isLast && item.href ? (
                    <Link href={item.href} className={linkVariants({ variant })}>
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className={isLast ? currentVariants({ variant }) : undefined}
                      aria-current={isLast ? 'page' : undefined}
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              </Fragment>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
