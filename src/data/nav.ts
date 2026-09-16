export const HIZMET_NAV = [
  { slug: 'kisisel-esya-depolama', name: 'Kişisel Eşya Depolama', shortName: 'Kişisel Depolama' },
  { slug: 'mobilya-depolama', name: 'Mobilya Depolama', shortName: 'Mobilya Depolama' },
  { slug: 'kurumsal-arsiv-depolama', name: 'Kurumsal Arşiv Depolama', shortName: 'Kurumsal Arşiv' },
  { slug: 'e-ticaret-stok-depolama', name: 'E-ticaret Stok Depolama', shortName: 'E-ticaret Stoğu' },
  { slug: 'ogrenci-esya-depolama', name: 'Öğrenci Eşya Depolama', shortName: 'Öğrenci Depolama' },
] as const;

export const ILCE_NAV = [
  { slug: 'seyhan', name: 'Seyhan' },
  { slug: 'yuregir', name: 'Yüreğir' },
  { slug: 'cukurova', name: 'Çukurova' },
  { slug: 'saricam', name: 'Sarıçam' },
  { slug: 'ceyhan', name: 'Ceyhan' },
  { slug: 'kozan', name: 'Kozan' },
  { slug: 'imamoglu', name: 'İmamoğlu' },
  { slug: 'karatas', name: 'Karataş' },
  { slug: 'karaisali', name: 'Karaisalı' },
  { slug: 'pozanti', name: 'Pozantı' },
  { slug: 'aladag', name: 'Aladağ' },
  { slug: 'feke', name: 'Feke' },
  { slug: 'saimbeyli', name: 'Saimbeyli' },
  { slug: 'tufanbeyli', name: 'Tufanbeyli' },
  { slug: 'yumurtalik', name: 'Yumurtalık' },
] as const;

export function getNavIlcePath(slug: string): string {
  return `/bolgeler/${slug}-esya-depolama`;
}
