export interface BlogYazisi {
  slug: string;
  baslik: string;
  metaTitle: string;
  metaDescription: string;
  ozet: string;
  kategori: 'rehber' | 'ipuclari' | 'sektorel' | 'yerel';
  yazar: string;
  yayinTarihi: string; // ISO format
  okumaSuresi: number; // dakika
  gorsel: string;
  anahtarKelimeler: string[];
}

export const blogYazilari: BlogYazisi[] = [
  {
    slug: 'adana-esya-depolama-fiyatlari-2026',
    baslik: 'Adana Eşya Depolama Teklif Rehberi 2026',
    metaTitle: 'Adana Eşya Depolama Teklif Rehberi 2026 | Ücretsiz Keşif',
    metaDescription:
      "Adana'da eşya depolama teklifi nasıl okunur? Hacim, süre, taşıma ve sigorta kalemleri. Fiyat sitede yayınlanmaz; ücretsiz keşif sonrası net teklif alın.",
    ozet: "2026'da Adana'da eşya depolama teklifini m³, süre ve taşıma kalemlerine göre nasıl okuyacağınızı anlatıyoruz. Paket hacimleri ve gizli masraftan kaçınma notları bu rehberde.",
    kategori: 'rehber',
    yazar: 'Adana Eşya Depolama',
    yayinTarihi: '2026-01-15',
    okumaSuresi: 8,
    gorsel: '/blog/fiyatlar-2026.jpg',
    anahtarKelimeler: [
      'adana eşya depolama teklif',
      'depo kiralama',
      'ücretsiz keşif',
    ],
  },
  {
    slug: 'esya-deposu-secerken-7-kriter',
    baslik: 'Eşya Deposu Seçerken Dikkat Edilecek 7 Kriter',
    metaTitle: 'Eşya Deposu Seçerken 7 Kriter | Adana Rehberi',
    metaDescription:
      'Adana’da eşya deposu seçerken güvenlik, sigorta, nem, erişim ve sözleşme. 7 kriterlik kontrol listesiyle doğru ünitede saklayın. Ücretsiz keşif listesi burada.',
    ozet: 'Kamera, alarm ve sigorta tek başına yetmez. Konum, nem kontrolü, envanter tutanağı, erişim saatleri ve yazılı fiyat — Adana’da depo seçerken bakmanız gereken yedi madde.',
    kategori: 'rehber',
    yazar: 'Adana Eşya Depolama',
    yayinTarihi: '2026-02-03',
    okumaSuresi: 7,
    gorsel: '/blog/depo-secim-kriterleri.jpg',
    anahtarKelimeler: [
      'eşya deposu nasıl seçilir',
      'güvenli depo kriterleri',
      'adana depo kiralama',
    ],
  },
  {
    slug: 'adana-tasinma-gecici-depolama',
    baslik: 'Adana’da Taşınırken Geçici Eşya Depolama',
    metaTitle: 'Adana Taşınma Depolama | Geçici Eşya Saklama',
    metaDescription:
      'Adana’da ev teslimi gecikince eşyayı nereye koyacaksınız? Seyhan, Yüreğir ve Çukurova taşınmalarında geçici depolama adımları ve ücretsiz keşif rehberi.',
    ozet: 'Yeni ev anahtarı geciktiğinde koliler merdiven boşluğunda kalmasın. Adana merkez ilçelerinde taşınma takvimi, kısa dönem kiralama ve aynı gün yükleme nasıl planlanır?',
    kategori: 'yerel',
    yazar: 'Adana Eşya Depolama',
    yayinTarihi: '2026-03-12',
    okumaSuresi: 6,
    gorsel: '/blog/tasinma-gecici-depolama.jpg',
    anahtarKelimeler: ['adana taşınma depolama', 'geçici eşya saklama', 'ev taşıma ara depo'],
  },
  {
    slug: 'kurumsal-arsiv-kvkk-rehberi',
    baslik: 'Kurumsal Arşiv Depolama ve KVKK Rehberi',
    metaTitle: 'Kurumsal Arşiv ve KVKK | Adana Depolama Rehberi',
    metaDescription:
      'Şirket evrakını ofis dışında saklarken KVKK, erişim kaydı ve imha tutanağı. Adana’da kurumsal arşiv depolama için yasal ve pratik rehber Seyhan Yeni Mahalle’de.',
    ozet: 'Veri sorumlusu sizsiniz; fiziksel güvenlik ve izlenebilir teslim zinciri depoya aittir. Saklama süreleri, yetkili kişi listesi ve yazılı imha Adana arşiv deposunda nasıl işler?',
    kategori: 'sektorel',
    yazar: 'Adana Eşya Depolama',
    yayinTarihi: '2026-04-08',
    okumaSuresi: 9,
    gorsel: '/blog/kurumsal-arsiv-kvkk.jpg',
    anahtarKelimeler: ['kurumsal arşiv depolama', 'kvkk evrak saklama', 'şirket arşivi adana'],
  },
  {
    slug: 'e-ticaret-stok-depolama-adana',
    baslik: 'Adana’da E-ticaret Stok Depolama Nasıl Planlanır?',
    metaTitle: 'Adana E-ticaret Stok Depolama | Palet ve Koli',
    metaDescription:
      'Trendyol ve site stoğunu Adana’da paletli saklamak. SKU etiket, sezon hacmi, iade alanı ve 3PL farkı. Seyhan konumlu stok parkı rehberi ve net fiyat alın.',
    ozet: 'Kampanya öncesi paletler ofise sığmaz. Seyhan Yeni Mahalle’de stok parkı, kargo çıkışı ve iade karantinası — tam fulfillment olmadan e-ticaret deposunu nasıl büyütürsünüz?',
    kategori: 'sektorel',
    yazar: 'Adana Eşya Depolama',
    yayinTarihi: '2026-05-20',
    okumaSuresi: 8,
    gorsel: '/blog/e-ticaret-stok-adana.jpg',
    anahtarKelimeler: [
      'e-ticaret stok depolama adana',
      'palet depo kiralama',
      'pazaryeri stok saklama',
    ],
  },
  {
    slug: 'ev-tadilati-esya-saklama',
    baslik: 'Ev Tadilatında Eşyalar Nereye Konur?',
    metaTitle: 'Ev Tadilatında Eşya Saklama | Adana İpuçları',
    metaDescription:
      'Boya, mutfak ve zemin işinde koltuk tozlanmasın. Adana’da tadilat süresince eşya saklama, paketleme ve kısa dönem depo kiralama ipuçları sizi bekliyor.',
    ozet: 'Usta evdeyken salon depo olmasın. Tadilat takvimine göre hangi eşya önce çıkar, nasıl paketlenir ve birkaç haftalık üniteden nasıl geri alınır — pratik liste.',
    kategori: 'ipuclari',
    yazar: 'Adana Eşya Depolama',
    yayinTarihi: '2026-06-18',
    okumaSuresi: 6,
    gorsel: '/blog/tadilat-esya-saklama.jpg',
    anahtarKelimeler: [
      'tadilat sırasında eşya saklama',
      'boya badana depo',
      'kısa dönem eşya depolama',
    ],
  },
  {
    slug: 'mobilya-depolama-ipuclari',
    baslik: 'Mobilya Depolama İpuçları: Nem, Hasar ve Taşıma',
    metaTitle: 'Mobilya Depolama İpuçları | Nem, Hasar, Taşıma',
    metaDescription:
      'Koltuk, yatak ve dolabı nemden koruyarak saklamak. Battaniye, söküm numarası ve fotoğraflı envanter. Adana mobilya depolama ipuçları ve ücretsiz keşif.',
    ozet: 'Ahşap cila ve deri koltuk üst üste istifte bozulur. Söküm, battaniye, yatay yatak ve teslim fotoğrafı — mobilyayı Adana deposuna vermeden önce uygulayın.',
    kategori: 'ipuclari',
    yazar: 'Adana Eşya Depolama',
    yayinTarihi: '2026-07-09',
    okumaSuresi: 7,
    gorsel: '/blog/mobilya-depolama-ipuclari.jpg',
    anahtarKelimeler: [
      'mobilya nasıl depolanır',
      'koltuk depolama ipuçları',
      'nem kontrollü mobilya deposu',
    ],
  },
  {
    slug: 'ogrenci-esya-depolama',
    baslik: 'Adana’da Öğrenci Eşya Depolama: Yaz Tatili Rehberi',
    metaTitle: 'Adana Öğrenci Eşya Depolama | Yaz Tatili Rehberi',
    metaDescription:
      'Çukurova Üniversitesi ve yurt kapanınca valiz nereye gider? Adana’da yaz tatili öğrenci depolama, yetki belgesi ve kısa dönem paket teklifi burada sizi bekliyor.',
    ozet: 'Yurt 15 Haziran’da kapanır, Eylül’de açılır. Balcalı ve Seyhan hattındaki öğrenciler valiz ve koliyi memlekete kargolamak yerine yaz paketiyle saklayabilir.',
    kategori: 'yerel',
    yazar: 'Adana Eşya Depolama',
    yayinTarihi: '2026-08-25',
    okumaSuresi: 5,
    gorsel: '/blog/ogrenci-esya-depolama.jpg',
    anahtarKelimeler: [
      'öğrenci eşya depolama adana',
      'yaz tatili yurt deposu',
      'çukurova üniversitesi eşya saklama',
    ],
  },
];

export const BLOG_PAGE_SIZE = 9;

export const BLOG_KATEGORI_LABELS: Record<BlogYazisi['kategori'], string> = {
  rehber: 'Rehber',
  ipuclari: 'İpuçları',
  sektorel: 'Sektörel',
  yerel: 'Yerel',
};

export function getBlogPath(slug: string): string {
  return `/blog/${slug}`;
}

export function getBlogKategoriLabel(kategori: BlogYazisi['kategori']): string {
  return BLOG_KATEGORI_LABELS[kategori];
}

export function isBlogKategori(value: string | undefined): value is BlogYazisi['kategori'] {
  return Boolean(value && value in BLOG_KATEGORI_LABELS);
}

export function getSortedBlogYazilari(): BlogYazisi[] {
  return [...blogYazilari].sort(
    (a, b) => new Date(b.yayinTarihi).getTime() - new Date(a.yayinTarihi).getTime()
  );
}

export function getBlogYazisiBySlug(slug: string): BlogYazisi | undefined {
  return blogYazilari.find((yazi) => yazi.slug === slug);
}

const AYLAR = [
  'Ocak',
  'Şubat',
  'Mart',
  'Nisan',
  'Mayıs',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylül',
  'Ekim',
  'Kasım',
  'Aralık',
] as const;

export function formatBlogDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  const ay = AYLAR[(month ?? 1) - 1] ?? '';
  return `${day} ${ay} ${year}`;
}

export function getBlogYazilariByKategori(kategori: BlogYazisi['kategori']): BlogYazisi[] {
  return blogYazilari.filter((yazi) => yazi.kategori === kategori);
}

const HIZMET_BLOG_SLUGS: Record<string, string[]> = {
  'kisisel-esya-depolama': [
    'adana-tasinma-gecici-depolama',
    'ev-tadilati-esya-saklama',
    'esya-deposu-secerken-7-kriter',
  ],
  'mobilya-depolama': [
    'mobilya-depolama-ipuclari',
    'ev-tadilati-esya-saklama',
    'esya-deposu-secerken-7-kriter',
  ],
  'kurumsal-arsiv-depolama': [
    'kurumsal-arsiv-kvkk-rehberi',
    'esya-deposu-secerken-7-kriter',
    'adana-esya-depolama-fiyatlari-2026',
  ],
  'e-ticaret-stok-depolama': [
    'e-ticaret-stok-depolama-adana',
    'adana-esya-depolama-fiyatlari-2026',
    'kurumsal-arsiv-kvkk-rehberi',
  ],
  'ogrenci-esya-depolama': [
    'ogrenci-esya-depolama',
    'adana-tasinma-gecici-depolama',
    'adana-esya-depolama-fiyatlari-2026',
  ],
};

function normalizeToken(value: string): string {
  return value.toLocaleLowerCase('tr-TR');
}

function blogMatchScore(
  yazi: BlogYazisi,
  kategori?: BlogYazisi['kategori'],
  keywords: string[] = []
): number {
  let score = 0;
  if (kategori && yazi.kategori === kategori) score += 10;

  const haystack = normalizeToken(`${yazi.baslik} ${yazi.ozet} ${yazi.anahtarKelimeler.join(' ')}`);
  for (const raw of keywords) {
    const keyword = normalizeToken(raw).trim();
    if (keyword.length < 3) continue;
    if (yazi.anahtarKelimeler.some((item) => normalizeToken(item) === keyword)) {
      score += 5;
      continue;
    }
    if (haystack.includes(keyword)) score += 2;
  }

  return score;
}

export function getRelatedBlogPosts(
  options: {
    excludeSlug?: string;
    kategori?: BlogYazisi['kategori'];
    anahtarKelimeler?: string[];
    hizmetSlug?: string;
    count?: number;
  } = {}
): BlogYazisi[] {
  const { excludeSlug, kategori, anahtarKelimeler = [], hizmetSlug, count = 3 } = options;

  const picked: BlogYazisi[] = [];
  const used = new Set<string>();

  if (hizmetSlug) {
    for (const slug of HIZMET_BLOG_SLUGS[hizmetSlug] ?? []) {
      if (slug === excludeSlug) continue;
      const yazi = getBlogYazisiBySlug(slug);
      if (!yazi || used.has(yazi.slug)) continue;
      picked.push(yazi);
      used.add(yazi.slug);
      if (picked.length >= count) return picked;
    }
  }

  const ranked = getSortedBlogYazilari()
    .filter((yazi) => yazi.slug !== excludeSlug && !used.has(yazi.slug))
    .map((yazi) => ({
      yazi,
      score: blogMatchScore(yazi, kategori, anahtarKelimeler),
    }))
    .sort((a, b) => b.score - a.score || b.yazi.yayinTarihi.localeCompare(a.yazi.yayinTarihi));

  for (const item of ranked) {
    picked.push(item.yazi);
    if (picked.length >= count) break;
  }

  return picked.slice(0, count);
}

export function getRelatedBlogYazilari(slug: string, count = 3): BlogYazisi[] {
  const current = getBlogYazisiBySlug(slug);
  return getRelatedBlogPosts({
    excludeSlug: slug,
    kategori: current?.kategori,
    anahtarKelimeler: current?.anahtarKelimeler,
    count,
  });
}

export function getRelatedBlogPostsForHizmet(hizmetSlug: string, count = 3): BlogYazisi[] {
  return getRelatedBlogPosts({ hizmetSlug, count });
}
