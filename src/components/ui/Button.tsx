'use client';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2, type LucideIcon } from 'lucide-react';
import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap transition-[color,background-color,box-shadow] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red disabled:pointer-events-none disabled:opacity-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-red text-white hover:bg-dark-red',
        secondary: 'bg-blue text-white hover:bg-navy',
        outline: 'border-2 border-navy bg-transparent text-navy hover:bg-light-blue',
        ghost: 'bg-transparent text-navy hover:bg-gray',
      },
      size: {
        sm: 'h-9 rounded-md px-3 text-sm',
        md: 'h-11 rounded-lg px-5 text-base',
        lg: 'h-14 rounded-lg px-7 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

const iconSizeMap = {
  sm: 16,
  md: 18,
  lg: 20,
} as const;

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      icon: Icon,
      iconPosition = 'left',
      disabled,
      children,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const resolvedSize = size ?? 'md';
    const iconPx = iconSizeMap[resolvedSize];
    const isDisabled = disabled || loading;

    const spinner = loading ? (
      <Loader2 aria-hidden className="animate-spin" size={iconPx} />
    ) : null;

    const leadingIcon =
      !loading && Icon && iconPosition === 'left' ? (
        <Icon aria-hidden size={iconPx} />
      ) : null;

    const trailingIcon =
      !loading && Icon && iconPosition === 'right' ? (
        <Icon aria-hidden size={iconPx} />
      ) : null;

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={asChild ? undefined : isDisabled}
        aria-busy={loading || undefined}
        aria-disabled={asChild && isDisabled ? true : undefined}
        data-disabled={isDisabled ? '' : undefined}
        type={asChild ? undefined : type}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {spinner}
            {leadingIcon}
            {children}
            {trailingIcon}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
