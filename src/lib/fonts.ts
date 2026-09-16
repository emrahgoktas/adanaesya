import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  adjustFontFallback: true,
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
  preload: false,
  adjustFontFallback: true,
});
