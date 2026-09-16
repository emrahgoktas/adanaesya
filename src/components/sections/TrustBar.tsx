import { FileCheck, MapPin, ShieldCheck, Thermometer, type LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';

const DEFAULT_SIGNALS = [
  {
    icon: ShieldCheck,
    title: '7/24 Güvenlik',
    description: 'Kamera izleme ve alarm sistemi',
  },
  {
    icon: FileCheck,
    title: 'Sigortalı Depolama',
    description: 'Eşyalarınız güvence altında',
  },
  {
    icon: Thermometer,
    title: 'İklimlendirme',
    description: 'Nem ve sıcaklık kontrollü',
  },
  {
    icon: MapPin,
    title: '15 İlçede Hizmet',
    description: 'Adana’nın tamamında',
  },
] as const;

export interface TrustSignal {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TrustBarProps {
  items?: readonly TrustSignal[];
}

export function TrustBar({ items = DEFAULT_SIGNALS }: TrustBarProps) {
  return (
    <section className="bg-gray" aria-labelledby="guven-sinyalleri">
      <Container className="py-10 lg:py-12">
        <h2 id="guven-sinyalleri" className="sr-only">
          Güven unsurları
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.title}
              className="border-transparent p-5 shadow-card transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-light-blue text-red">
                <Icon aria-hidden className="size-6" />
              </span>
              <h3 className="text-base font-bold text-navy">{item.title}</h3>
              <p className="mt-1 text-sm text-dark-gray/80">{item.description}</p>
            </Card>
          );
        })}
        </div>
      </Container>
    </section>
  );
}
