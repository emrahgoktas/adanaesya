import type { Ilce } from '@/data/ilceler';
import type { SSSItem } from '@/data/sss';
import { ablative, genitive, locative, locativeAdj } from '@/lib/turkish';

export function getIlceSSS(ilce: Ilce): SSSItem[] {
  const mahalleler = ilce.mahalleler;
  const m0 = mahalleler[0] ?? ilce.name;
  const m1 = mahalleler[1] ?? m0;
  const m2 = mahalleler[2] ?? m1;
  const landmark = ilce.landmarks[0] ?? `${ilce.name} merkezi`;
  const digerNoktalar = ilce.landmarks.slice(1, 3).join(', ');
  const neden = ilce.nedenler[0] ?? `${locative(ilce.name)} düzenli teslimat yapılır.`;
  const sure =
    ilce.tier === 1 ? 'aynı gün içinde' : ilce.tier === 2 ? 'planlanan seferle aynı gün' : 'randevulu seferle';
  const loc = locative(ilce.name);
  const gen = genitive(ilce.name);

  return [
    {
      id: `${ilce.slug}-sss-1`,
      soru: `${loc} eşya depolama fiyatları ne kadar?`,
      cevap: `${loc} eşya depolama ücreti ünite hacmine ve süreye göre değişir. 1 m³ aylık 750 TL’den başlar; Standart paket 5 m³ için 2.250 TL’dir. ${m0} ve ${m1} mahallelerine ücretsiz keşif sonrası net teklif yazılır.`,
      kategori: 'fiyat',
    },
    {
      id: `${ilce.slug}-sss-2`,
      soru: `${ablative(ilce.name)} depoya teslimat ne kadar sürer?`,
      cevap: `Sarıçam OSB’deki tesisimiz ${ilce.name} merkezine ${sure} ulaşır. ${neden} Keşif gününde yükleme saati netleşir; dar sokaklarda kamyonet planlanır.`,
      kategori: 'lojistik',
    },
    {
      id: `${ilce.slug}-sss-3`,
      soru: `${m0}, ${m1} ve ${m2} mahallelerine hizmet var mı?`,
      cevap: `Evet. ${gen} ${mahalleler.slice(0, 4).join(', ')} başta olmak üzere listedeki tüm mahallelere keşif ve taşıma desteği veriyoruz. Site otoparkı veya dar sokak için uygun araç seçilir.`,
      kategori: 'hizmet',
    },
    {
      id: `${ilce.slug}-sss-4`,
      soru: `${loc} tadilat veya kısa dönem depo kiralanır mı?`,
      cevap: `Kısa dönem kiralama ${ilce.name} müşterileri için uygundur. Boya, mutfak yenileme veya ofis taşımasında birkaç haftalık ünite açılır; eşya nem kontrollü alanda bekler. Süre uzarsa tarife güncellenir.`,
      kategori: 'hizmet',
    },
    {
      id: `${ilce.slug}-sss-5`,
      soru: `${landmark} çevresinden eşya nasıl alınır?`,
      cevap: `${landmark}${digerNoktalar ? ` ile ${digerNoktalar}` : ''} hattında yükleme, sokak genişliği ve site yönetimine göre planlanır. Fotoğraflı envanter tutulur; kırılgan parçalar ayrı paketlenir.`,
      kategori: 'lojistik',
    },
    {
      id: `${ilce.slug}-sss-6`,
      soru: `${ilce.name} müşterileri için sigorta ve kamera geçerli mi?`,
      cevap: `7/24 kamera, alarm ve sigorta ${ilce.name} dahil 15 ilçedeki tüm müşteriler için geçerlidir. Teslim tutanağı ve ünite etiketi yükleme gününde imzalanır; erişim kaydı tutulur.`,
      kategori: 'guvenlik',
    },
    {
      id: `${ilce.slug}-sss-7`,
      soru: `${loc} öğrenci veya mevsimlik eşya depolanır mı?`,
      cevap: `Evet. ${locativeAdj(ilce.name)} öğrenciler, mevsimlik çalışanlar ve yazlığa çıkan aileler valiz, koli ve küçük mobilyayı yaz veya kış paketiyle saklayabilir. Yetki belgesi ile üçüncü kişi teslimi mümkündür.`,
      kategori: 'hizmet',
    },
    {
      id: `${ilce.slug}-sss-8`,
      soru: `${ilce.name} için ücretsiz keşif nasıl planlanır?`,
      cevap: `İletişim formundan veya WhatsApp’tan ${ilce.name} ve mahallenizi yazmanız yeter. Aynı gün veya ertesi gün keşif planlanır; yalnızca ihtiyacınız kadar m³ için fiyat çıkarılır. Minimum süre bir aydır.`,
      kategori: 'genel',
    },
  ];
}
