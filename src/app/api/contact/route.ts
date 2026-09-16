import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  adSoyad: z.string().min(2),
  telefon: z.string(),
  email: z.string().email().optional().or(z.literal('')),
  ilce: z.string(),
  hizmet: z.string(),
  hacim: z.string(),
  mesaj: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // Rate limiting (basit in-memory, prod için Upstash önerilir)
    // Email gönderimi (Resend veya Nodemailer)
    // CRM entegrasyonu (opsiyonel)

    console.log('Yeni iletişim talebi:', data);

    return NextResponse.json({ success: true, message: 'Talebiniz alındı.' }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: 'Bir sorun oluştu.' }, { status: 500 });
  }
}
