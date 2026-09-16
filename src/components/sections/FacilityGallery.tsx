import { AppImage } from '@/components/ui/AppImage';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SITE_IMAGES } from '@/data/site-images';
import { IMAGE_SIZES } from '@/lib/images';

const FEATURED = [
  {
    ...SITE_IMAGES.facilityUnit,
    caption: 'Kişiye özel oda sistemli depo',
  },
  {
    ...SITE_IMAGES.packing,
    caption: 'Profesyonel paketleme',
  },
  {
    ...SITE_IMAGES.stored,
    caption: 'Paletli güvenli istif',
  },
  {
    ...SITE_IMAGES.furniture,
    caption: 'Mobilya saklama',
  },
  {
    ...SITE_IMAGES.archive,
    caption: 'Arşiv ve evrak',
  },
  {
    ...SITE_IMAGES.facilitySign,
    caption: 'Adana tesisimiz',
  },
] as const;

export function FacilityGallery() {
  return (
    <section className="bg-gray" aria-labelledby="tesis-galeri-baslik">
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id="tesis-galeri-baslik"
          align="center"
          className="mb-10 lg:mb-12"
          title="Tesisimizden kareler"
          subtitle="Oda sistemli üniteler, paketleme ve Adana’daki gerçek depo alanımız."
        />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {FEATURED.map((item) => (
            <li key={item.src} className="group overflow-hidden rounded-xl bg-white shadow-card">
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <AppImage
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={IMAGE_SIZES.gallery}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm font-semibold text-navy">
                  {item.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
