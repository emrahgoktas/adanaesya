export const IMAGE_QUALITY = 85;

export const IMAGE_SIZES = {
  hero: '(max-width: 1023px) 100vw, (max-width: 1200px) 50vw, 560px',
  heroFull: '100vw',
  gallery: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  blogCover: '(max-width: 1200px) 100vw, 1200px',
  blogCard: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 384px',
  related: '(max-width: 768px) 100vw, 33vw',
  content: '(max-width: 768px) 100vw, 800px',
  logo: '44px',
  logoWide: '(max-width: 1023px) 160px, 200px',
} as const;

export const OG_IMAGE = {
  src: '/og.jpg',
  width: 1200,
  height: 630,
} as const;

export const BLOG_COVER_SIZE = {
  width: 1200,
  height: 630,
} as const;
