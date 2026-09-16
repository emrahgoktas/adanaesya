import Link from 'next/link';
import { AppImage } from '@/components/ui/AppImage';
import { IMAGE_SIZES } from '@/lib/images';
import { cn } from '@/lib/utils';

export interface LogoProps {
  variant?: 'dark' | 'light';
  priority?: boolean;
  href?: string;
  className?: string;
}

export function Logo({ variant = 'dark', priority = false, href = '/', className }: LogoProps) {
  const light = variant === 'light';

  return (
    <Link
      href={href}
      className={cn('inline-flex items-center', className)}
      aria-label="01 Taşımacılık Adana Eşya Depolama ana sayfa"
    >
      <span
        className={cn(
          'inline-flex overflow-hidden rounded-md',
          light ? 'bg-black' : 'bg-black ring-1 ring-navy/10'
        )}
      >
        <AppImage
          src="/logo.png"
          alt="01 Taşımacılık Logo"
          width={240}
          height={80}
          priority={priority}
          sizes={IMAGE_SIZES.logoWide}
          className="h-9 w-auto lg:h-11"
        />
      </span>
      <span className="sr-only">01 Taşımacılık Adana Eşya Depolama</span>
    </Link>
  );
}
