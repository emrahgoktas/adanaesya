import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
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

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
