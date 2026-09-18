import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { cn } from '@/lib/utils';

const COLUMNS = ['Başlangıç', 'Standart', 'Premium', 'Kurumsal'] as const;

const ROWS: { feature: string; values: [string, string, string, string] }[] = [
  {
    feature: 'Depo alanı',
    values: ['1 m³', '5 m³', '10 m³ iklimlendirilmiş', '20 m³+ esnek hacim'],
  },
  {
    feature: 'Süre',
    values: ['Min. 1 ay', '1–12 ay, yıllık indirim', 'Esnek; yıllık avantaj', 'Sözleşmeli tarife'],
  },
  {
    feature: 'Sigorta',
    values: [
      'Temel sigorta dahil',
      'Sigorta dahil',
      'Fotoğraflı envanter + geniş teminat',
      'Sözleşmeli kapsam',
    ],
  },
  {
    feature: 'Paketleme',
    values: [
      'Ücretli',
      'İsteğe bağlı',
      'Battaniye ve köşe koruyucu',
      'Palet, raf ve barkod',
    ],
  },
  {
    feature: 'Taşıma',
    values: [
      'Ücretli',
      'İsteğe bağlı evden alım',
      'Keşif ve taşıma planı',
      'Periyodik sefer',
    ],
  },
  {
    feature: '7/24 erişim',
    values: [
      'Randevulu teslim',
      'Randevulu + kamera',
      'Öncelikli randevu',
      'Yetkili listesi, 7/24 güvenlik',
    ],
  },
];

export function FiyatComparisonTable() {
  return (
    <section className="bg-gray" aria-labelledby="karsilastirma-baslik">
      <Container className="py-14 lg:py-20">
        <SectionTitle
          id="karsilastirma-baslik"
          align="center"
          className="mb-8 lg:mb-12"
          title="Paket karşılaştırması"
          subtitle="Depo alanı, süre, sigorta, paketleme, taşıma ve erişim aynı satırda."
        />

        <div className="overflow-x-auto rounded-lg border border-navy/10 bg-white shadow-card">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="sr-only">
              Başlangıç, Standart, Premium ve Kurumsal paketlerin depo alanı, süre, sigorta,
              paketleme, taşıma ve 7/24 erişim karşılaştırması
            </caption>
            <thead>
              <tr className="border-b border-navy/10 bg-navy text-white">
                <th scope="col" className="sticky left-0 bg-navy px-4 py-3.5 font-semibold">
                  Özellik
                </th>
                {COLUMNS.map((col) => (
                  <th
                    key={col}
                    scope="col"
                    className={cn(
                      'px-4 py-3.5 font-semibold',
                      col === 'Standart' && 'bg-red'
                    )}
                  >
                    {col}
                    {col === 'Standart' ? (
                      <span className="mt-0.5 block text-[0.65rem] font-medium tracking-wide uppercase opacity-90">
                        Popüler
                      </span>
                    ) : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, rowIndex) => (
                <tr
                  key={row.feature}
                  className={cn(
                    'border-b border-navy/10 last:border-b-0',
                    rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray/60'
                  )}
                >
                  <th
                    scope="row"
                    className={cn(
                      'sticky left-0 px-4 py-3.5 font-semibold text-navy',
                      rowIndex % 2 === 0 ? 'bg-white' : 'bg-[#F5F7FA]'
                    )}
                  >
                    {row.feature}
                  </th>
                  {row.values.map((value, colIndex) => (
                    <td
                      key={`${row.feature}-${COLUMNS[colIndex]}`}
                      className={cn(
                        'px-4 py-3.5 text-dark-gray/85',
                        COLUMNS[colIndex] === 'Standart' && 'bg-red/5 font-medium text-navy'
                      )}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-sm text-dark-gray/70">
          Karşılaştırma paket içeriğine göredir; tutarlar ücretsiz keşif teklifinde yazılır.
        </p>
      </Container>
    </section>
  );
}
