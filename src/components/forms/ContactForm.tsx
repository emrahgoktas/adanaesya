'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useId, useRef, useState } from 'react';
import { useForm, type DefaultValues, type FieldErrors, type Resolver } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { hizmetler } from '@/data/hizmetler';
import { ilceler } from '@/data/ilceler';
import { AW_CONVERSION_SEND_TO, trackConversion, trackEvent } from '@/lib/analytics';
import { SITE_CONFIG } from '@/lib/constants';
import { contactSchema, HACIM_OPTIONS, type ContactFormValues } from '@/lib/contact-schema';
import { cn } from '@/lib/utils';

export { contactSchema, type ContactFormValues };

const HACIM_LABELS: Record<(typeof HACIM_OPTIONS)[number], string> = {
  '1': '1 m³',
  '5': '5 m³',
  '10': '10 m³',
  '20+': '20+ m³',
};

function whatsappHref(): string {
  const digits = SITE_CONFIG.whatsapp.replace(/\D/g, '');
  const text = encodeURIComponent('Merhaba, eşya depolama için teklif almak istiyorum.');
  const base = digits.length >= 11 ? `https://wa.me/${digits}` : 'https://wa.me/';
  return `${base}?text=${text}`;
}

export interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const kvkkId = useId();
  const kvkkErrorId = `${kvkkId}-error`;
  const formErrorId = `${kvkkId}-form-error`;
  const formErrorRef = useRef<HTMLParagraphElement>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema) as Resolver<ContactFormValues>,
    defaultValues: {
      adSoyad: '',
      telefon: '',
      email: '',
      mesaj: '',
      kvkk: false,
    } as unknown as DefaultValues<ContactFormValues>,
    mode: 'onSubmit',
  });

  const onInvalid = (formErrors: FieldErrors<ContactFormValues>) => {
    setFormError(null);
    const first = Object.keys(formErrors)[0] as keyof ContactFormValues | undefined;
    if (first) setFocus(first);
  };

  const onSubmit = async (values: ContactFormValues) => {
    setFormError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          telefon: values.telefon.replace(/[\s()-]/g, ''),
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (!response.ok || payload?.success === false) {
        throw new Error(payload?.message || 'Bir sorun oluştu, lütfen tekrar deneyin.');
      }

      trackEvent('form_submit', 'contact', 'Contact Form');
      trackConversion(AW_CONVERSION_SEND_TO, 100);
      router.push('/tesekkurler');
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Bir sorun oluştu, lütfen tekrar deneyin.';
      setFormError(message);
      queueMicrotask(() => formErrorRef.current?.focus());
    }
  };

  return (
    <Card className={cn('hover:shadow-card shadow-card p-6 md:p-8', className)}>
      <form
        noValidate
        aria-label="Ücretsiz teklif formu"
        aria-describedby={formError ? formErrorId : undefined}
        className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5"
        onSubmit={handleSubmit(onSubmit, onInvalid)}
      >
        <Input
          label="Ad Soyad"
          autoComplete="name"
          required
          error={errors.adSoyad?.message}
          {...register('adSoyad')}
        />
        <Input
          label="Telefon"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="05XXXXXXXXX"
          required
          error={errors.telefon?.message}
          {...register('telefon', {
            setValueAs: (value: string) => value.replace(/[\s()-]/g, ''),
          })}
        />
        <Input
          label="E-posta"
          type="email"
          autoComplete="email"
          placeholder="ornek@eposta.com"
          error={errors.email?.message}
          {...register('email')}
        />
        <Select label="İlçe" required error={errors.ilce?.message} {...register('ilce')}>
          <option value="">İlçe seçin</option>
          {ilceler.map((ilce) => (
            <option key={ilce.slug} value={ilce.slug}>
              {ilce.name}
            </option>
          ))}
        </Select>
        <Select label="Hizmet" required error={errors.hizmet?.message} {...register('hizmet')}>
          <option value="">Hizmet seçin</option>
          {hizmetler.map((hizmet) => (
            <option key={hizmet.slug} value={hizmet.slug}>
              {hizmet.name}
            </option>
          ))}
        </Select>
        <Select
          label="Depo büyüklüğü"
          required
          error={errors.hacim?.message}
          {...register('hacim')}
        >
          <option value="">Hacim seçin</option>
          {HACIM_OPTIONS.map((value) => (
            <option key={value} value={value}>
              {HACIM_LABELS[value]}
            </option>
          ))}
        </Select>
        <div className="md:col-span-2">
          <Textarea
            label="Mesaj"
            rows={4}
            maxLength={1000}
            placeholder="Eşya türü, taşınma tarihi veya özel notunuz…"
            error={errors.mesaj?.message}
            {...register('mesaj')}
          />
        </div>

        <div className="md:col-span-2">
          <div className="flex items-start gap-3">
            <input
              id={kvkkId}
              type="checkbox"
              className="accent-red border-navy/20 mt-1 size-4 shrink-0 rounded"
              aria-invalid={errors.kvkk ? true : undefined}
              aria-describedby={errors.kvkk ? kvkkErrorId : undefined}
              {...register('kvkk')}
            />
            <label htmlFor={kvkkId} className="text-dark-gray text-sm">
              <a
                href="/kvkk"
                className="text-navy hover:text-red font-medium underline-offset-2 hover:underline"
              >
                KVKK Aydınlatma Metni
              </a>
              ’ni okudum, kişisel verilerimin teklif amacıyla işlenmesini onaylıyorum.
              <span className="text-red" aria-hidden>
                {' '}
                *
              </span>
            </label>
          </div>
          {errors.kvkk ? (
            <p id={kvkkErrorId} role="alert" className="text-red mt-1.5 text-sm">
              {errors.kvkk.message}
            </p>
          ) : null}
        </div>

        {formError ? (
          <p
            ref={formErrorRef}
            id={formErrorId}
            role="alert"
            tabIndex={-1}
            className="bg-red/10 text-red rounded-lg px-4 py-3 text-sm font-medium md:col-span-2"
          >
            {formError}
          </p>
        ) : null}

        <div className="flex flex-col items-stretch gap-3 md:col-span-2">
          <Button
            type="submit"
            variant="primary"
            className="w-full md:w-auto md:self-start"
            loading={isSubmitting}
          >
            Teklif Gönder
          </Button>
          <p className="text-dark-gray/80 text-sm md:text-left">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:text-red font-medium underline-offset-2 hover:underline"
            >
              veya WhatsApp ile yazın
            </a>
          </p>
        </div>
      </form>
    </Card>
  );
}
