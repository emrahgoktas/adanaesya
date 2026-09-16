export interface FiyatPaketi {
  id: string;
  ad: string;
  hacim: string;
  aylikFiyat: number;
  yillikFiyat: number;
  ozellikler: string[];
  populer: boolean;
  icon: string;
  teklifUzerine?: boolean;
}

export const fiyatPaketleri: FiyatPaketi[] = [
  {
    id: 'baslangic',
    ad: 'Başlangıç',
    hacim: '1 m³',
    aylikFiyat: 750,
    yillikFiyat: 7500,
    ozellikler: ['1 m³ depo alanı', '7/24 güvenlik', 'Sigorta dahil', 'Ücretsiz keşif'],
    populer: false,
    icon: 'Package',
  },
  {
    id: 'standart',
    ad: 'Standart',
    hacim: '5 m³',
    aylikFiyat: 2250,
    yillikFiyat: 22500,
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
  },
  {
    id: 'premium',
    ad: 'Premium',
    hacim: '10 m³',
    aylikFiyat: 4000,
    yillikFiyat: 40000,
    ozellikler: [
      '10 m³ iklimlendirilmiş alan',
      'Mobilya battaniye ve köşe koruyucu',
      'Fotoğraflı hasar envanteri',
      '7/24 güvenlik ve sigorta',
      'Söküm / numaralama notu',
      'Ücretsiz keşif ve taşıma planı',
    ],
    populer: false,
    icon: 'Warehouse',
  },
  {
    id: 'kurumsal',
    ad: 'Kurumsal',
    hacim: '20 m³+',
    aylikFiyat: 8000,
    yillikFiyat: 80000,
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
