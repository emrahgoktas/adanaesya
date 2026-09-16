import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full font-medium whitespace-nowrap',
  {
    variants: {
      variant: {
        red: 'bg-red/10 text-red',
        blue: 'bg-light-blue text-blue',
        gray: 'bg-gray text-dark-gray',
        success: 'bg-success/10 text-success',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'red',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  icon?: LucideIcon;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, icon: Icon, children, ...props }, ref) => {
    const iconPx = size === 'sm' ? 12 : 14;

    return (
      <span ref={ref} className={cn(badgeVariants({ variant, size, className }))} {...props}>
        {Icon ? <Icon aria-hidden size={iconPx} /> : null}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants };
