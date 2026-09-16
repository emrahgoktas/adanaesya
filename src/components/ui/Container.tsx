import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('mx-auto w-full max-w-[1200px] px-5 md:px-8', className)}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

export { Container };
