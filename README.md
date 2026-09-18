# Adana Eşya Depolama

Adana'nın 15 ilçesinde hizmet veren eşya depolama firması için Next.js 16 ile geliştirilmiş kurumsal web sitesi.

## Teknolojiler

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion
- MDX (blog için)
- Vercel deployment

## Kurulum

```bash
git clone [repo-url]
cd adana-esya-depolama
npm install
cp .env.example .env.local
npm run dev
```

Geliştirme sunucusu varsayılan olarak [http://localhost:3000](http://localhost:3000) adresinde açılır. Ortam değişkenleri için `.env.example` dosyasına bakın.

## Proje Yapısı

```text
adana-esya-depolama/
├── content/blog/              # MDX blog yazıları
├── public/                    # Statik görseller (logo, OG, blog kapakları)
├── src/
│   ├── app/                   # App Router sayfaları ve metadata
│   │   ├── api/contact/       # İletişim formu API
│   │   ├── blog/              # Blog listesi ve [slug]
│   │   ├── bolgeler/          # 15 ilçe landing sayfası
│   │   ├── hizmetler/         # Hizmet landing sayfaları
│   │   ├── fiyatlar/
│   │   ├── hakkimizda/
│   │   ├── iletisim/
│   │   ├── tesekkurler/
│   │   ├── kvkk/              # Yasal sayfalar (noindex)
│   │   ├── sitemap.ts         # XML sitemap
│   │   └── robots.ts
│   ├── components/
│   │   ├── blog/              # Callout, kapak, paylaşım
│   │   ├── forms/             # ContactForm
│   │   ├── layout/            # Header, Footer
│   │   ├── sections/          # Hero, fiyat, SSS, ilçe grid
│   │   ├── seo/               # JSON-LD, breadcrumb
│   │   └── ui/                # Button, Logo, AppImage
│   ├── data/                  # İlçeler, hizmetler, blog, SSS, fiyatlar
│   ├── hooks/
│   └── lib/                   # metadata, schema, analytics, mdx
├── .env.example
└── next.config.ts
```

## SEO Stratejisi

- Her ilçe için ayrı landing page
- Her hizmet için ayrı landing page
- JSON-LD schema (LocalBusiness, SelfStorage, FAQPage, BreadcrumbList)
- Otomatik sitemap
- Optimize edilmiş metadata

## Deployment

Vercel'e deploy: GitHub'a push → Vercel otomatik deploy

## İletişim

- Adres: Yeni Mahalle 87005 Sokak No:30, Seyhan / Adana
- Telefon: 0549 215 13 15 / 0322 456 00 76
- E-posta: info@adanaesyadepo.com
- Site: https://adanaesyadepo.com
