import {
  Box,
  CalendarDays,
  Package,
  ShieldCheck,
  ThermometerSun,
  Truck,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

const FACTORS: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'Depo hacmi',
    body: 'Teklif m³ ihtiyacına göre yazılır. 1 m³ Başlangıç, 5 m³ Standart, 10 m³ Premium ve 20 m³ üzeri Kurumsal paketleri vardır.',
    icon: Box,
  },
  {
    title: 'Kiralama süresi',
    body: 'Minimum süre 1 aydır. 6 ve 12 aylık kiralamada birim tarife avantajlıdır; güncel oran keşif teklifinde netleşir.',
    icon: CalendarDays,
  },
  {
    title: 'Taşıma ve mesafe',
    body: 'Merkez ilçelerde randevulu sefer planlanır. Ceyhan, Kozan ve kıyı–yayla ilçelerinde sefer ücreti teklifte ayrı satırdır.',
    icon: Truck,
  },
  {
    title: 'Paketleme ve söküm',
    body: 'Koli, battaniye, köşe koruyucu ve mobilya sökümü pakete göre dahil veya ücretlidir. Kalemler teklifte görünür.',
    icon: Package,
  },
  {
    title: 'İklimlendirme',
    body: 'Ahşap, tekstil ve arşiv için nem kontrollü koridor Premium ve Kurumsal tarifede öne çıkar; temel ünitelerde standart iklim yeterlidir.',
    icon: ThermometerSun,
  },
  {
    title: 'Sigorta bedeli',
    body: 'Paketlerde temel teminat dahildir. Yüksek değerli eşya için ek poliçe, fotoğraflı envanter ve hasar tutanağı teklifte yazılır.',
    icon: ShieldCheck,
  },
];

export function FiyatFactors() {
  return (
    <section className="bg-white" aria-labelledby="faktorler-baslik">
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id="faktorler-baslik"
          align="center"
          className="mb-8 lg:mb-12"
          title="Fiyatları etkileyen faktörler"
          subtitle="Keşifte hacim, süre, taşıma ve sigorta netleşir; gizli kalem eklenmez."
        />

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FACTORS.map((factor) => {
            const Icon = factor.icon;
            return (
              <li
                key={factor.title}
                className="rounded-lg border border-navy/10 bg-white p-6 shadow-card"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-red text-white">
                  <Icon aria-hidden className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy">{factor.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-gray/80">{factor.body}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
