export const SITE_CONFIG = {
  name: 'Adana Eşya Depolama',
  url: 'https://adanaesyadepo.com',
  phone: '+905492151315',
  phoneDisplay: '0549 215 13 15',
  phoneLandline: '+903224560076',
  phoneLandlineDisplay: '0322 456 00 76',
  email: 'info@adanaesyadepo.com',
  whatsapp: '+905492151315',
  address: {
    street: 'Yeni Mahalle 87005 Sokak No:30',
    district: 'Seyhan',
    city: 'Adana',
    postalCode: '01000',
    country: 'TR',
  },
  geo: {
    latitude: 37.0164,
    longitude: 35.249,
  },
  social: {
    facebook: 'https://facebook.com/adanadepolama',
    instagram: 'https://instagram.com/adanadepolama',
    twitter: 'https://twitter.com/adanadepolama',
    youtube: 'https://youtube.com/@adanadepolama',
  },
  openingHours: 'Mo-Su 00:00-23:59',
} as const;

export function formatAddressLine(
  address: typeof SITE_CONFIG.address = SITE_CONFIG.address
): string {
  const cityPart = `${address.district} / ${address.city}`;
  const withPostal = address.postalCode ? `${cityPart} ${address.postalCode}` : cityPart;
  return `${address.street}, ${withPostal}`;
}
