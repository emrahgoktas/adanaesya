import { BlogCoverImage } from '@/components/blog/BlogCoverImage';
import type { BlogYazisi } from '@/data/blog';
import { getBlogKategoriLabel } from '@/data/blog';
import { IMAGE_SIZES } from '@/lib/images';

export function BlogPostCover({
  src,
  title,
  category,
  priority = true,
}: {
  src: string;
  title: string;
  category: BlogYazisi['kategori'];
  priority?: boolean;
}) {
  return (
    <figure className="relative overflow-hidden rounded-lg">
      <div className="relative aspect-[1200/630] min-h-[12rem]">
        <BlogCoverImage
          src={src}
          alt={`${title} — ${getBlogKategoriLabel(category)} kapak görseli`}
          priority={priority}
          sizes={IMAGE_SIZES.blogCover}
        />
      </div>
    </figure>
  );
}
