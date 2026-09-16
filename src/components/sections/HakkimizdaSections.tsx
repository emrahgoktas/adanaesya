import {
  Award,
  CircleCheck,
  Clock,
  Compass,
  Eye,
  FileBadge,
  Heart,
  Leaf,
  MapPin,
  ShieldCheck,
  Target,
  UserRound,
  Users,
  Warehouse,
  type LucideIcon,
} from 'lucide-react';
import { AppImage } from '@/components/ui/AppImage';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SITE_IMAGES } from '@/data/site-images';
import { IMAGE_SIZES } from '@/lib/images';

const VALUES: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'Güvenlik',
    body: '7/24 kamera, alarm ve kontrollü giriş. Koridorlar personel refakati olmadan dolaşıma kapalıdır.',
    icon: ShieldCheck,
  },
  {
    title: 'Şeffaflık',
    body: 'Ünite kirası, sigorta ve sefer ücreti teklifte ayrı satırdır. Gizli kalem eklenmez.',
    icon: Eye,
  },
  {
    title: 'Müşteri Odaklılık',
    body: 'Ücretsiz keşif, randevulu teslim ve yetkili listesi ile eşyanıza planlı ulaşır; ihtiyaca göre esnek süre.',
    icon: Heart,
  },
  {
    title: 'Sürdürülebilirlik',
    body: 'İklimlendirme ile eşya ömrünü uzatır, tekrar kullanılabilir koli ve palet düzeniyle israfı azaltırız.',
    icon: Leaf,
  },
];

const REASONS = [
  '7/24 kamera, alarm ve kontrollü tesis girişi',
  'Paketlerde temel sigorta kapsamı dahildir',
  'İklimlendirilmiş koridor; nem ve sıcaklık takibi',
  'Adana’nın 15 ilçesine ücretsiz keşif',
  'Şeffaf tarife: gizli maliyet yok',
  'Envanter tutanağı ve randevulu taşıma planı',
];

const TEAM: { role: string; note: string }[] = [
  { role: 'Operasyon', note: 'Ünite yerleşimi, envanter ve güvenlik vardiyası' },
  { role: 'Müşteri hizmetleri', note: 'Keşif randevusu, sözleşme ve yetkili listesi' },
  { role: 'Lojistik', note: 'İlçe seferleri, kısmi çıkış ve palet sevkiyatı' },
];

const CERTIFICATES: { title: string; status: string; icon: LucideIcon }[] = [
  { title: 'ISO 9001 kalite yönetimi', status: 'Belge kopyası yakında', icon: Award },
  { title: 'Yangın ve iş güvenliği', status: 'Tesis dosyası yakında', icon: FileBadge },
  { title: 'Depo sigorta poliçesi', status: 'Özet belge yakında', icon: ShieldCheck },
  { title: 'OSB giriş ve işletme kaydı', status: 'Kayıt belgesi yakında', icon: Warehouse },
];

const STATS: { value: string; label: string; icon: LucideIcon }[] = [
  { value: '15', label: 'İlçede Hizmet', icon: MapPin },
  { value: '500+', label: 'Mutlu Müşteri', icon: Users },
  { value: '10.000 m²', label: 'Depo Alanı', icon: Warehouse },
  { value: '7/24', label: 'Kesintisiz Hizmet', icon: Clock },
];

export function HakkimizdaStory() {
  return (
    <section className="bg-white" aria-labelledby="hikaye-baslik">
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id="hikaye-baslik"
          title="Şirket hikâyemiz"
          subtitle="2018’den beri Sarıçam OSB’den Adana’nın 15 ilçesine kurumsal depolama."
          className="mb-8 lg:mb-10"
        />
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-dark-gray/85 md:text-lg">
            <p>
              Adana Eşya Depolama, 2018 yılında Adana’da kurulmuş, 15 ilçede hizmet veren kurumsal bir
              depolama firmasıdır. Sarıçam OSB’deki iklimlendirilmiş tesisimizde ev eşyası, mobilya,
              ofis arşivi, öğrenci kolisi ve e-ticaret stoğunu 7/24 kamera izleme, alarm ve kontrollü
              giriş altında saklarız. Kuruluşumuzdan bu yana tadilat, taşınma, yurt dönemi ve sezonluk
              stok gibi kısa süreli ihtiyaçlarla yıllık kiralamayı aynı güvenlik standardında
              birleştirerek Adana’nın dört bir yanına ulaştık.
            </p>
            <p>
              Seyhan, Yüreğir, Çukurova ve Sarıçam başta olmak üzere Ceyhan’dan Yumurtalık’a kadar
              keşif ücretsizdir. Koli sayısı, asansör ve site yasak saatleri yerinde not edilir; aynı
              gün veya ertesi iş günü net teklif çıkar. Tesiste koridorlar personel refakati olmadan
              dolaşıma kapalıdır. Teslim fotoğrafı ve envanter tutanağı hasar değerlendirmesinin
              esasını oluşturur. Temel sigorta paketlerde dahildir; yüksek değerli eşya için ek poliçe
              önerilir.
            </p>
            <p>
              Tarifeyi şeffaf tutarız: ünite kirası ve temel sigorta pakette yazılır, paketleme ile
              uzak ilçe seferi ayrı satırdır. Müşterilerimiz eşyalarına randevu ve yetkili listesi ile
              ulaşır. Amacımız, Adana’daki bireysel ve kurumsal müşterilere güvenli, ekonomik ve esnek
              depolama sunmak; gizli maliyet olmadan sözleşmede yazılanı sahada uygulamaktır.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-card sm:aspect-[3/4] lg:aspect-[4/5]">
              <AppImage
                src={SITE_IMAGES.facilityExterior.src}
                alt={SITE_IMAGES.facilityExterior.alt}
                fill
                sizes={IMAGE_SIZES.gallery}
                className="object-cover"
              />
            </figure>
            <figure className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-card sm:aspect-[3/4] lg:aspect-[4/5]">
              <AppImage
                src={SITE_IMAGES.facilityUnit.src}
                alt={SITE_IMAGES.facilityUnit.alt}
                fill
                sizes={IMAGE_SIZES.gallery}
                className="object-cover"
              />
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HakkimizdaMission() {
  return (
    <section className="bg-gray" aria-labelledby="misyon-baslik">
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id="misyon-baslik"
          align="center"
          title="Misyon ve vizyon"
          subtitle="Ölçülebilir güvenlik, yazılı sözleşme, 15 ilçede aynı standart."
          className="mb-8 lg:mb-12"
        />
        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <li>
            <Card className="h-full p-8">
              <span className="inline-flex size-12 items-center justify-center rounded-lg bg-red text-white">
                <Target aria-hidden className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy">Misyon</h3>
              <p className="mt-3 text-base leading-relaxed text-dark-gray/80">
                Adana’daki bireysel ve kurumsal müşterilere güvenli, ekonomik ve esnek depolama
                çözümleri sunmak.
              </p>
            </Card>
          </li>
          <li>
            <Card className="h-full p-8">
              <span className="inline-flex size-12 items-center justify-center rounded-lg bg-navy text-white">
                <Compass aria-hidden className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy">Vizyon</h3>
              <p className="mt-3 text-base leading-relaxed text-dark-gray/80">
                Adana’nın en güvenilir ve en çok tercih edilen eşya depolama markası olmak.
              </p>
            </Card>
          </li>
        </ul>
      </Container>
    </section>
  );
}

export function HakkimizdaValues() {
  return (
    <section className="bg-white" aria-labelledby="degerler-baslik">
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id="degerler-baslik"
          align="center"
          title="Değerlerimiz"
          subtitle="Sözleşmede yazılan, sahada uygulanan ilkeler."
          className="mb-8 lg:mb-12"
        />
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <li key={value.title}>
                <Card className="h-full">
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-red text-white">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-navy">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-dark-gray/80">{value.body}</p>
                </Card>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export function HakkimizdaWhy() {
  return (
    <section className="bg-gray" aria-labelledby="neden-baslik">
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id="neden-baslik"
          title="Neden biz?"
          subtitle="Keşif, taşıma ve sigortalı ünite aynı çatı altında."
          className="mb-8 lg:mb-10"
        />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {REASONS.map((reason) => (
            <li
              key={reason}
              className="flex items-start gap-3 rounded-lg border border-navy/10 bg-white p-5 shadow-card"
            >
              <CircleCheck aria-hidden className="mt-0.5 size-6 shrink-0 text-red" />
              <span className="text-base font-medium text-navy">{reason}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function HakkimizdaTeam() {
  return (
    <section className="bg-white" aria-labelledby="ekip-baslik">
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id="ekip-baslik"
          align="center"
          title="Ekibimiz"
          subtitle="İsim ve fotoğraflar yakında; roller sahada bugün de aynı."
          className="mb-8 lg:mb-12"
        />
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {TEAM.map((member) => (
            <li key={member.role}>
              <Card className="h-full text-center">
                <span className="mx-auto flex size-20 items-center justify-center rounded-full bg-gray text-navy">
                  <UserRound aria-hidden className="size-10" />
                </span>
                <p className="mt-4 text-xs font-semibold tracking-wide text-red uppercase">
                  Yakında
                </p>
                <h3 className="mt-1 text-lg font-bold text-navy">{member.role}</h3>
                <p className="mt-2 text-sm text-dark-gray/75">{member.note}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function HakkimizdaCertificates() {
  return (
    <section className="bg-gray" aria-labelledby="belgeler-baslik">
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id="belgeler-baslik"
          align="center"
          title="Sertifikalar ve belgeler"
          subtitle="Taranmış kopyalar eklenecek; talep halinde keşifte özet gösterilir."
          className="mb-8 lg:mb-12"
        />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATES.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.title}>
                <Card className="flex h-full flex-col items-center p-6 text-center">
                  <span className="inline-flex size-12 items-center justify-center rounded-lg border border-dashed border-navy/25 bg-gray text-navy">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-dark-gray/70">{item.status}</p>
                </Card>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export function HakkimizdaStats() {
  return (
    <section className="bg-white" aria-labelledby="rakamlar-baslik">
      <Container className="py-14 lg:py-20">
        <h2
          id="rakamlar-baslik"
          className="text-center text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-navy"
        >
          Rakamlarla biz
        </h2>
        <span aria-hidden className="mx-auto mt-3 mb-10 block h-1 w-16 rounded-full bg-red" />
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <li key={stat.label}>
                <Card className="h-full p-6 text-center">
                  <span className="mx-auto mb-3 inline-flex size-12 items-center justify-center rounded-full bg-light-blue text-red">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <p className="text-[clamp(1.75rem,4vw,2.75rem)] leading-none font-extrabold text-navy">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-dark-gray/80">{stat.label}</p>
                </Card>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
