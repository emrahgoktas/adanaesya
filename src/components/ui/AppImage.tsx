import Image, { type ImageProps } from 'next/image';
import { IMAGE_QUALITY } from '@/lib/images';

export type AppImageProps = ImageProps;

export function AppImage({
  quality = IMAGE_QUALITY,
  priority = false,
  loading,
  fetchPriority,
  decoding,
  ...props
}: AppImageProps) {
  if (priority) {
    return (
      <Image
        {...props}
        quality={quality}
        priority
        fetchPriority={fetchPriority ?? 'high'}
        decoding={decoding ?? 'sync'}
      />
    );
  }

  return (
    <Image
      {...props}
      quality={quality}
      loading={loading ?? 'lazy'}
      fetchPriority={fetchPriority}
      decoding={decoding ?? 'async'}
    />
  );
}
