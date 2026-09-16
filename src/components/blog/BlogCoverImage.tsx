import { AppImage } from '@/components/ui/AppImage';
import { IMAGE_SIZES } from '@/lib/images';
import { cn } from '@/lib/utils';

export interface BlogCoverImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export function BlogCoverImage({
  src,
  alt,
  priority = false,
  sizes = IMAGE_SIZES.blogCard,
  className,
}: BlogCoverImageProps) {
  return (
    <AppImage
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={cn('object-cover', className)}
    />
  );
}
