import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { EmbedFrame } from '@/components/ui/EmbedFrame';
import { formatAddressLine, SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';

function whatsappHref(): string {
  const digits = SITE_CONFIG.whatsapp.replace(/\D/g, '');
  const text = encodeURIComponent('Merhaba, eşya depolama hakkında bilgi almak istiyorum');
  const base = digits.length >= 11 ? `https://wa.me/${digits}` : 'https://wa.me/';
  return `${base}?text=${text}`;
}

function FacebookIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-4 fill-current">
      <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v7h4v-7h3.1l.9-4H13V9c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-4 fill-current">
      <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm-4 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2ZM17.4 7.1a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-4 fill-current">
      <path d="M14.7 10.3 22 2h-2.2l-6.3 7.1L8.6 2H2l7.7 11L2 22h2.2l6.8-7.6L15.5 22H22l-7.3-11.7Zm-2.4 2.7-.8-1.1L5 3.6h2.6l4.7 6.7.8 1.1 6.4 9H16.9l-4.6-6.4Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-4 fill-current">
      <path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6ZM9.8 15.6V8.8l6.2 3.4-6.2 3.4Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-5 fill-current">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { name: 'Facebook', href: SITE_CONFIG.social.facebook, icon: FacebookIcon },
  { name: 'Instagram', href: SITE_CONFIG.social.instagram, icon: InstagramIcon },
  { name: 'X (Twitter)', href: SITE_CONFIG.social.twitter, icon: XIcon },
  { name: 'YouTube', href: SITE_CONFIG.social.youtube, icon: YouTubeIcon },
] as const;

export function IletisimSidebar() {
  const addressLine = formatAddressLine();
  const whatsappLabel = formatPhone(SITE_CONFIG.whatsapp);
  const mapSrc = `https://maps.google.com/maps?q=${SITE_CONFIG.geo.latitude},${SITE_CONFIG.geo.longitude}&z=15&hl=tr&output=embed`;

  return (
    <aside className="space-y-5 lg:sticky lg:top-24" aria-label="İletişim bilgileri">
      <Card>
        <h2 id="nap-baslik" className="text-lg font-bold text-navy">
          Adres ve iletişim
        </h2>
        <span aria-hidden className="mt-2 mb-4 block h-1 w-12 rounded-full bg-red" />
        <address className="not-italic">
          <ul className="space-y-4 text-sm text-dark-gray/85">
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-red" />
              <span>{addressLine}</span>
            </li>
            <li className="flex gap-3">
              <Phone aria-hidden className="mt-0.5 size-5 shrink-0 text-red" />
              <a href={`tel:${SITE_CONFIG.phone}`} className="font-medium text-navy hover:text-red">
                {SITE_CONFIG.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden className="mt-0.5 size-5 shrink-0 text-red" />
              <a href={`mailto:${SITE_CONFIG.email}`} className="font-medium text-navy hover:text-red">
                {SITE_CONFIG.email}
              </a>
            </li>
          </ul>
        </address>
      </Card>

      <Card>
        <h2 className="text-lg font-bold text-navy">Çalışma saatleri</h2>
        <span aria-hidden className="mt-2 mb-4 block h-1 w-12 rounded-full bg-red" />
        <p className="flex items-start gap-3 text-sm text-dark-gray/85">
          <Clock aria-hidden className="mt-0.5 size-5 shrink-0 text-red" />
          <span>
            <span className="block font-semibold text-navy">Her gün 00:00–23:59 (7/24)</span>
            Tesis güvenliği kesintisizdir. Keşif ve ünite ziyareti randevu ile planlanır.
          </span>
        </p>
      </Card>

      <EmbedFrame
        title="Adana Eşya Depolama konum haritası"
        src={mapSrc}
        width={600}
        height={450}
      />

      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#075E54] px-4 py-3 text-sm font-semibold text-white shadow-card transition-[transform,box-shadow] hover:scale-[1.02] hover:shadow-card-hover"
      >
        <WhatsAppIcon />
        WhatsApp: {whatsappLabel}
      </a>

      <Card>
        <h2 className="text-lg font-bold text-navy">Sosyal medya</h2>
        <span aria-hidden className="mt-2 mb-4 block h-1 w-12 rounded-full bg-red" />
        <ul className="flex flex-wrap gap-2" aria-label="Sosyal medya hesapları">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE_CONFIG.name} ${social.name} sayfası (yeni sekme)`}
                  className="inline-flex size-10 items-center justify-center rounded-full bg-navy text-white transition-colors hover:bg-red"
                >
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>
      </Card>
    </aside>
  );
}
