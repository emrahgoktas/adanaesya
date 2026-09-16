import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SkipToContent } from '@/components/a11y/SkipToContent';
import { GoogleAdsTag } from '@/components/analytics/GoogleAdsTag';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { JsonLd } from '@/components/seo/JsonLd';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { SITE_CONFIG } from '@/lib/constants';
import { CRITICAL_CSS } from '@/lib/critical-css';
import { inter, jakarta } from '@/lib/fonts';
import {
  generateGraphSchema,
  generateLocalBusinessSchema,
  generateSelfStorageSchema,
} from '@/lib/schema';
import './globals.css';

const DEFAULT_TITLE = 'Adana Eşya Depolama | Güvenli ve Sigortalı Depo Hizmeti';
const DEFAULT_DESCRIPTION =
  'Adana genelinde 7/24 kamera izlemeli, sigortalı, iklimlendirilmiş eşya depolama hizmeti. 15 ilçede güvenli depo çözümleri.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | Adana Eşya Depolama',
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    'Adana eşya depolama',
    'eşya deposu Adana',
    'sigortalı depo',
    'mobilya depolama Adana',
    'self storage Adana',
    'öğrenci eşya depolama',
    'kurumsal arşiv depolama',
    'e-ticaret stok depolama',
    'Seyhan eşya depolama',
    'Yüreğir eşya depolama',
    'Çukurova eşya depolama',
    'Sarıçam eşya depolama',
    'iklimlendirilmiş depo',
    '7/24 güvenlikli depo',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: { telephone: true, address: true, email: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: DEFAULT_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.png',
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const awId = process.env.NEXT_PUBLIC_AW_ID;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${jakarta.variable} min-h-full antialiased`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: CRITICAL_CSS }} />
        <JsonLd
          id="json-ld-global"
          data={generateGraphSchema([generateLocalBusinessSchema(), generateSelfStorageSchema()])}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <SkipToContent />
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
        {awId ? <GoogleAdsTag awId={awId} /> : null}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
