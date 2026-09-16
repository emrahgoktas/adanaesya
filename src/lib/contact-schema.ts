import { z } from 'zod';
import { hizmetler } from '@/data/hizmetler';
import { ilceler } from '@/data/ilceler';

const ILCE_SLUGS = ilceler.map((ilce) => ilce.slug) as [string, ...string[]];
const HIZMET_SLUGS = hizmetler.map((hizmet) => hizmet.slug) as [string, ...string[]];

export const HACIM_OPTIONS = ['1', '5', '10', '20+'] as const;

export const contactSchema = z.object({
  adSoyad: z.string().min(2, 'Ad soyad en az 2 karakter').max(80),
  telefon: z.string().regex(/^(\+90|0)?[5][0-9]{9}$/, 'Geçerli bir telefon numarası girin'),
  email: z.string().email('Geçerli bir e-posta girin').optional().or(z.literal('')),
  ilce: z.enum(ILCE_SLUGS, { message: 'İlçe seçin' }),
  hizmet: z.enum(HIZMET_SLUGS, { message: 'Hizmet seçin' }),
  hacim: z.enum(HACIM_OPTIONS, { message: 'Depo büyüklüğü seçin' }),
  mesaj: z.string().max(1000).optional(),
  kvkk: z.literal(true, { message: 'KVKK onayı gerekli' }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
