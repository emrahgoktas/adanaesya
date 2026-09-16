import { Container } from '@/components/ui/Container';
import { EmbedFrame } from '@/components/ui/EmbedFrame';
import { SITE_CONFIG } from '@/lib/constants';

export function AdanaMap() {
  const { latitude, longitude } = SITE_CONFIG.geo;
  const src = `https://maps.google.com/maps?q=${latitude},${longitude}&z=10&hl=tr&output=embed`;

  return (
    <section className="bg-gray" aria-labelledby="harita-baslik">
      <Container className="py-14 lg:py-20">
        <h2
          id="harita-baslik"
          className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-navy"
        >
          Adana hizmet haritası
        </h2>
        <span aria-hidden className="mt-3 mb-4 block h-1 w-16 rounded-full bg-red" />
        <p className="mb-8 max-w-2xl text-base text-dark-gray/80">
          Tesisimiz Sarıçam OSB’de; Seyhan, Yüreğir, Çukurova ve 12 ilçeye keşif ve teslimat
          planlıyoruz.
        </p>
        <EmbedFrame
          title="Adana eşya depolama konum haritası"
          src={src}
          width={800}
          height={500}
        />
      </Container>
    </section>
  );
}
