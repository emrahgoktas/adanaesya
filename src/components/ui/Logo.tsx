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
      className={cn(
        'inline-flex items-center gap-2',
        light ? 'text-white' : 'text-navy',
        className
      )}
    >
      <AppImage
        src={light ? '/logo-light.svg' : '/logo.svg'}
        alt=""
        aria-hidden
        width={40}
        height={40}
        priority={priority}
        unoptimized
        sizes={IMAGE_SIZES.logo}
        className="size-9 lg:size-10"
      />
      <span className="leading-tight">
        <span
          className={cn(
            'block text-sm font-extrabold tracking-tight lg:text-base',
            light && 'text-white'
          )}
        >
          Adana
        </span>
        <span className={cn('block text-[11px] font-semibold lg:text-xs', light ? 'text-white' : 'text-red')}>
          Eşya Depolama
        </span>
      </span>
      <span className="sr-only"> ana sayfa</span>
    </Link>
  );
}
