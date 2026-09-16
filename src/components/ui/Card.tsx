import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export type CardProps = HTMLAttributes<HTMLDivElement>;

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border border-navy/10 bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover',
        className
      )}
      {...props}
    />
  );
});

Card.displayName = 'Card';

export { Card };
