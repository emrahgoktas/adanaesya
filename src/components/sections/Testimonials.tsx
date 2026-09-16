'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { fadeUpItem, staggerContainer } from '@/lib/motion';

const TESTIMONIALS = [
  {
    name: 'Elif K.',
    district: 'Seyhan',
    quote:
      'Tadilat süresince tüm eşyamızı teslim ettik. Envanter tutanağı ve kamera güveni sayesinde içimiz rahat kaldı.',
  },
  {
    name: 'Mert A.',
    district: 'Çukurova',
    quote:
      'Yazın yurttan çıkan oğlumuzun kolilerini uygun fiyata sakladık. Teslim ve iade günü planlı ve sorunsuzdu.',
  },
  {
    name: 'Selin D.',
    district: 'Yüreğir',
    quote:
      'Koltuk takımı nemden etkilenmeden durdu. Keşif ücretsizdi, fiyat da peşin netleşti; gizli masraf çıkmadı.',
  },
  {
    name: 'Hakan Y.',
    district: 'Sarıçam',
    quote:
      'Ofis arşivini OSB’deki depoya aldık. Yetkili listesi ve fatura düzeni kurumsal ihtiyaçlarımıza uydu.',
  },
] as const;

export function Testimonials() {
  const reduceMotion = useReducedMotion();
  const containerVariants = staggerContainer(reduceMotion, 0.06);
  const cardVariants = fadeUpItem(reduceMotion, 16);

  return (
    <section className="bg-gray" aria-labelledby="yorumlar-baslik">
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id="yorumlar-baslik"
          align="center"
          className="mb-10 lg:mb-12"
          title="Müşterilerimiz Ne Diyor?"
          subtitle="Adana’nın dört bir yanından sigortalı depolama deneyimleri"
        />

        <motion.ul
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {TESTIMONIALS.map((item) => (
            <motion.li key={item.name} variants={cardVariants} className="h-full">
              <Card className="flex h-full flex-col p-6">
                <div className="mb-3 flex gap-0.5" role="img" aria-label="5 üzerinden 5 yıldız">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      aria-hidden
                      className="size-4 fill-red text-red"
                    />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-dark-gray/80">
                  “{item.quote}”
                </blockquote>
                <p className="mt-4 text-sm font-bold text-navy">{item.name}</p>
                <p className="text-xs text-dark-gray/70">{item.district}</p>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
