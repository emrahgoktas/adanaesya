export interface SSSItem {
  id: string;
  soru: string;
  cevap: string;
  kategori: 'genel' | 'fiyat' | 'guvenlik' | 'hizmet' | 'lojistik' | 'iletisim';
}

export const genelSSS: SSSItem[] = [
  {
    id: 'sss-1',
    soru: 'Adana eşya depolama fiyatları ne kadar?',
    cevap:
      "Adana'da eşya depolama fiyatları depo büyüklüğüne ve süreye göre değişir. 1 m³ depo aylık 750 TL'den başlar. Detaylı fiyat için ücretsiz keşif talep edebilirsiniz.",
    kategori: 'fiyat',
  },
  {
    id: 'sss-2',
    soru: 'Yıllık kiralama yaparsam indirim var mı?',
    cevap:
      'Evet. Yıllık paketlerde yaklaşık iki ay ücretsiz olacak şekilde tarife düşer. Örneğin Başlangıç paketi aylık 750 TL iken yıllık 7.500 TL’dir. Güncel oran keşif teklifinde yazılır.',
    kategori: 'fiyat',
  },
  {
    id: 'sss-3',
    soru: 'Fiyata sigorta, keşif ve taşıma dahil mi?',
    cevap:
      'Paket fiyatına ünite kirası ve 7/24 güvenlik dahildir. Başlangıç paketinde temel sigorta kapsamı vardır. Keşif ücretsizdir. Paketleme ve evden alma ayrı kalem olarak teklifte görünür.',
    kategori: 'fiyat',
  },
  {
    id: 'sss-4',
    soru: 'Öğrenci ve kısa dönem tadilat tarifesi farklı mı?',
    cevap:
      'Öğrenci yaz paketleri küçük m³ için 500 TL’den başlar. Tadilat gibi 1–3 aylık kullanımlarda aylık tarife geçerlidir; 6 ve 12 ayda birim fiyat düşer.',
    kategori: 'fiyat',
  },
  {
    id: 'sss-5',
    soru: 'Depo tesisiniz nerede, hangi ilçelere hizmet veriyorsunuz?',
    cevap:
      'Tesisimiz Sarıçam OSB Mah. 1. Cadde No:1 adresindedir. Seyhan, Yüreğir, Çukurova ve Sarıçam başta olmak üzere Adana’nın 15 ilçesine keşif ve teslim planlarız.',
    kategori: 'genel',
  },
  {
    id: 'sss-6',
    soru: 'Minimum kiralama süresi nedir?',
    cevap:
      'Minimum süre 1 aydır. 3, 6 ve 12 aylık paketler daha avantajlıdır. Süre bitmeden uzatma yazılı veya telefonla kayda alınır.',
    kategori: 'genel',
  },
  {
    id: 'sss-7',
    soru: 'Hangi eşyalar kabul edilmez?',
    cevap:
      'Yanıcı madde, canlı, bozulabilir gıda, yasa dışı ürün ve açık sıvı kimyasal kabul edilmez. Beyaz eşya boş ve kuru teslim edilmelidir. Soğuk zincir ürünü alınmaz.',
    kategori: 'genel',
  },
  {
    id: 'sss-8',
    soru: 'Sözleşme ve fatura nasıl düzenlenir?',
    cevap:
      'Bireysel kiralamada sözleşme ve dekont, kurumsalda ticari fatura kesilir. Metrekare, başlangıç tarihi, yetkili kişi ve erişim kuralları yazılıdır; gizli masraf yoktur.',
    kategori: 'genel',
  },
  {
    id: 'sss-9',
    soru: 'Depo 7/24 kamera ve alarm ile izleniyor mu?',
    cevap:
      'Evet. Tesis 7/24 kamera, alarm ve kontrollü giriş altındadır. Koridorlar personel refakati olmadan dolaşıma kapalıdır. Ziyaret randevu ile kayda geçer.',
    kategori: 'guvenlik',
  },
  {
    id: 'sss-10',
    soru: 'Yangın, su baskını ve nem riski nasıl yönetiliyor?',
    cevap:
      'Yangın söndürme ekipmanı, zemin kotu ve su baskını eşiği önlemi vardır. Mobilya ve tekstil iklimlendirilmiş koridorlarda durur. Ek poliçe yüksek değerli eşya için önerilir.',
    kategori: 'guvenlik',
  },
  {
    id: 'sss-11',
    soru: 'Eşyama başkası benim yerime ulaşabilir mi?',
    cevap:
      'Yalnızca sözleşmede yetkili kayıtlı kişiler kimlik ile teslim alabilir. Öğrenci ve kurumsal kayıtlarda ıslak imzalı yetki belgesi istenir; sözlü talimat yeterli değildir.',
    kategori: 'guvenlik',
  },
  {
    id: 'sss-12',
    soru: 'Hasar çıkarsa sigorta nasıl işler?',
    cevap:
      'Teslim fotoğrafı ve envanter tutanağı esas alınır. Taşıma hasarı taşıyıcıya, depo içi hasar seçtiğiniz sigorta kapsamına göre değerlendirilir. Paketlerdeki “sigorta dahil” temel teminattır.',
    kategori: 'guvenlik',
  },
  {
    id: 'sss-13',
    soru: 'Kişisel eşya, mobilya ve arşiv aynı tesiste mi durur?',
    cevap:
      'Aynı kampüstedir; koridorlar ayrılır. Ev eşyası, paletli stok ve evrak kutusu karışmaz. Kurumsal arşiv yetkili listesi ve barkod/etiket ile rafa işlenir.',
    kategori: 'hizmet',
  },
  {
    id: 'sss-14',
    soru: 'Ücretsiz keşif nasıl talep edilir?',
    cevap:
      'Telefon, WhatsApp veya form ile adres ve yaklaşık hacim iletilir. Keşifte koli sayısı, asansör ve yasak saatler not edilir; aynı gün veya ertesi iş günü net teklif çıkar.',
    kategori: 'hizmet',
  },
  {
    id: 'sss-15',
    soru: 'E-ticaret stoğu için sipariş toplayıp kargoluyor musunuz?',
    cevap:
      'Varsayılan paket stok parkı ve palet/koli sevkiyatıdır. Tam pick & pack 3PL ayrıca teklif edilir. SKU etiket, forklift ve iade karantina alanı stok paketinde vardır.',
    kategori: 'hizmet',
  },
  {
    id: 'sss-16',
    soru: 'Erken boşaltır veya hacim küçültürsem ne olur?',
    cevap:
      'Kullanılmayan tam aylar, sözleşmedeki ihbar süresine göre mahsup edilir. Sezonluk e-ticaret ve tadilat müşterilerinde hacim büyütme–küçültme teklifte yazılır.',
    kategori: 'hizmet',
  },
  {
    id: 'sss-17',
    soru: 'Evimden alım ve depoya teslim nasıl planlanır?',
    cevap:
      'Randevulu ekip site yasak saatlerine göre gelir. Dar sokak ve asansör için küçük kamyonet seçilir. İsterseniz kendi aracınızla Sarıçam OSB’ye bırakabilirsiniz.',
    kategori: 'lojistik',
  },
  {
    id: 'sss-18',
    soru: 'Ceyhan, Kozan veya kıyı ilçelerinden de alım yapıyor musunuz?',
    cevap:
      'Evet. Ceyhan ve Kozan’a planlı sefer, Karataş–Yumurtalık yazlıkları ile Pozantı–Karaisalı yayla evlerine randevulu yükleme yapılır. Uzak ilçelerde sefer ücreti teklifte ayrı satırdır.',
    kategori: 'lojistik',
  },
  {
    id: 'sss-19',
    soru: 'Tek parça veya tek palet çıkışı mümkün mü?',
    cevap:
      'Randevu ile kısmi çıkış yapılır. Koridor güvenliği için personel eşlik eder; ek işçilik ücreti teklifte belirtilir. Kurumsal kutular barkod ile iade edilir.',
    kategori: 'lojistik',
  },
  {
    id: 'sss-20',
    soru: 'Gece veya hafta sonu teslimat var mı?',
    cevap:
      'Mesai saatlerinde randevu esastır. OSB giriş kurallarına uygun sınırlı gece indirme önceden planlanabilir. Acil erişim güvenlik kaydı tutularak aynı gün ayarlanır.',
    kategori: 'lojistik',
  },
  {
    id: 'sss-21',
    soru: 'Telefon ve WhatsApp’tan ne zaman ulaşabilirim?',
    cevap:
      'Tesis 7/24 güvenlik altındadır. Keşif ve teklif için form, telefon veya WhatsApp 0549 215 13 15 üzerinden yazın; mesai içinde 1 saat, akşam ve hafta sonu en geç ertesi iş günü dönüş yapılır.',
    kategori: 'iletisim',
  },
  {
    id: 'sss-22',
    soru: 'Tesisinizi ziyaret etmek için randevu gerekir mi?',
    cevap:
      'Evet. Sarıçam OSB Mah. 1. Cadde No:1 adresindeki üniteler kontrollü giriştedir. Koridor gezisi personel refakati ve kimlik kaydı ile randevuya bağlanır; kapıdan rastgele giriş yoktur.',
    kategori: 'iletisim',
  },
  {
    id: 'sss-23',
    soru: 'Formu gönderince ne kadar sürede dönüş alırım?',
    cevap:
      'Teklif formu iletilince hedefimiz 1 saat içinde aramaktır. İlçe, hacim ve hizmet seçiliyse aynı gün net tarife çıkar. Yoğunlukta WhatsApp’tan da teyit mesajı gider.',
    kategori: 'iletisim',
  },
  {
    id: 'sss-24',
    soru: 'Adresiniz neresi, nasıl gelirim?',
    cevap:
      'Tesis Sarıçam OSB Mah. 1. Cadde No:1, Sarıçam / Adana 01350 adresindedir. Harita bu sayfadadır. Kendi aracınızla bırakma veya randevulu evden alım planlanır; OSB giriş kurallarına uyulur.',
    kategori: 'iletisim',
  },
  {
    id: 'sss-25',
    soru: 'Sözleşme ve faturayı nasıl teslim alırım?',
    cevap:
      'Bireysel kiralamada sözleşme ve dekont, kurumsalda ticari fatura kesilir. E-posta info@adanadepolama.com ve kayıtlı telefon üzerinden PDF iletilir; ıslak imza randevuda da alınabilir.',
    kategori: 'iletisim',
  },
];

export function getSSSById(id: string): SSSItem | undefined {
  return genelSSS.find((item) => item.id === id);
}

export function getSSSByKategori(kategori: SSSItem['kategori']): SSSItem[] {
  return genelSSS.filter((item) => item.kategori === kategori);
}
