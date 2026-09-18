export interface FiyatPaketi {
  id: string;
  ad: string;
  hacim: string;
  ozellikler: string[];
  populer: boolean;
  icon: string;
  /** Tüm paketlerde fiyat keşif sonrası netleşir */
  teklifUzerine: true;
}

export const fiyatPaketleri: FiyatPaketi[] = [
  {
    id: 'baslangic',
    ad: 'Başlangıç',
    hacim: '1 m³',
    ozellikler: ['1 m³ depo alanı', '7/24 güvenlik', 'Sigorta dahil', 'Ücretsiz keşif'],
    populer: false,
    icon: 'Package',
    teklifUzerine: true,
  },
  {
    id: 'standart',
    ad: 'Standart',
    hacim: '5 m³',
    ozellikler: [
      '5 m³ depo alanı',
      '7/24 kamera ve alarm',
      'Sigorta dahil',
      'Ücretsiz keşif',
      'Etiketli envanter tutanağı',
      'İsteğe bağlı evden alım',
    ],
    populer: true,
    icon: 'Boxes',
    teklifUzerine: true,
  },
  {
    id: 'premium',
    ad: 'Premium',
    hacim: '10 m³',
    ozellikler: [
      '10 m³ iklimlendirilmiş alan',
      'Mobilya battaniye ve köşe koruyucu',
      'Fotoğraflı hasar envanteri',
      '7/24 güvenlik ve sigorta',
      'Söküm / numaralama notu',
      'Ücretsiz keşif; taşıma planı (ücretli)',
    ],
    populer: false,
    icon: 'Warehouse',
    teklifUzerine: true,
  },
  {
    id: 'kurumsal',
    ad: 'Kurumsal',
    hacim: '20 m³+',
    ozellikler: [
      '20 m³ ve üzeri esnek hacim',
      'Palet, raf ve forklift desteği',
      'Barkodlu kutu / SKU yerleşimi',
      'Ticari fatura ve yetkili listesi',
      'Periyodik sefer ve acil kutu çağırma',
      '7/24 güvenlik ve sözleşmeli tarife',
    ],
    populer: false,
    icon: 'Building2',
    teklifUzerine: true,
  },
];

export function getFiyatPaketiById(id: string): FiyatPaketi | undefined {
  return fiyatPaketleri.find((paket) => paket.id === id);
}

export function getPopulerFiyatPaketi(): FiyatPaketi | undefined {
  return fiyatPaketleri.find((paket) => paket.populer);
}
