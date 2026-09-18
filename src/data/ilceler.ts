export interface Ilce {
  slug: string;
  name: string;
  tier: 1 | 2 | 3;
  population: number;
  mahalleler: string[];
  metaTitle: string; // 50-60 karakter
  metaDescription: string; // 150-160 karakter
  h1: string;
  adHeadline: string; // MAX 30 karakter
  seoHeadline: string; // adHeadline'ı tamamlayan kısım
  aciklama: string; // 2-3 paragraf özgün açıklama
  nedenler: string[]; // En az 4 madde
  landmarks: string[]; // İlçedeki önemli noktalar
}

export const ilceler: Ilce[] = [
  {
    slug: 'seyhan',
    name: 'Seyhan',
    tier: 1,
    population: 786931,
    mahalleler: [
      'Reşatbey',
      'Kurtuluş',
      'Ziyapaşa',
      'Gürselpaşa',
      'Yeşilyurt',
      'Döşeme',
      'Sucuzade',
      'Kayalıbağ',
    ],
    metaTitle: 'Seyhan Eşya Depolama | Güvenli ve Sigortalı Depo Hizmeti',
    metaDescription:
      "Seyhan'da 7/24 kamera izlemeli, sigortalı eşya depolama hizmeti. Ücretsiz keşif; taşıma teklifte ayrıca planlanır. Adana'nın merkezinde güvenli depo çözümleri sizi bekliyor.",
    h1: 'Seyhan Eşya Depolama — Güvenli ve Sigortalı Depo Hizmeti',
    adHeadline: 'Seyhan Eşya Depolama',
    seoHeadline: ' — Güvenli ve Sigortalı Depo Hizmeti',
    aciklama: `Seyhan, Adana'nın ticari ve kültürel kalbi; Reşatbey, Kurtuluş ve Ziyapaşa gibi mahallelerde apartman ve işyeri yoğunluğu yüksek. Tadilat, ev değişikliği veya ofis taşımasında eşyaların güvenli bir yerde durması, merkezdeki çoğu aile ve esnaf için ilk ihtiyaç haline geliyor. Depomuz Seyhan Yeni Mahalle’de konumlanıyor; Seyhan merkeze kısa sürede ulaşılabiliyor.

Merkezdeki dar sokaklar ve site otoparkları büyük hacimli eşyayı evde tutmayı zorlaştırır. 7/24 kamera, alarm ve sigorta ile mobilya, ev tekstili ve arşiv kutularını düzenli ünitelerde saklıyoruz. İsteyen müşterilere ücretsiz keşif veriyoruz; Seyhan içi taşıma teklifte planlanır. Teslimat gününü sizin takviminize göre ayarlıyoruz.

Gürselpaşa, Yeşilyurt ve Döşeme hattındaki aileler ile Sucuzade–Kayalıbağ çevresindeki işyerleri aynı günde teslim alabiliyor. Kısa süreli tadilat deposundan uzun dönem kiralığa kadar esnek süreler sunuyor; Taşköprü ve Adana Merkez Camii çevresindeki tarihi dokuya zarar vermeden, kontrollü yükleme yapıyoruz.`,
    nedenler: [
      'Seyhan merkeze 5 dakika mesafede konum',
      'Reşatbey ve Kurtuluş mahallelerine ücretsiz servis',
      '7/24 kamera izleme ve alarm sistemi',
      'Sigortalı depolama garantisi',
      'Tadilat ve ofis taşımasına özel kısa dönem kiralama',
    ],
    landmarks: ['Seyhan Barajı', 'Adana Merkez Camii', 'Taşköprü'],
  },
  {
    slug: 'yuregir',
    name: 'Yüreğir',
    tier: 1,
    population: 399910,
    mahalleler: [
      'Kazım Karabekir',
      'Yavuzlar',
      'Cumhuriyet',
      'Sinanpaşa',
      'Koza',
      'Haydaroğlu',
      'Dervişler',
      'Anadolu',
    ],
    metaTitle: 'Yüreğir Eşya Depolama | Sigortalı Güvenli Depo Alanı',
    metaDescription:
      "Yüreğir'de 7/24 kamera izlemeli, sigortalı eşya depolama. Taşköprü ve Misis hattına yakın konum; ücretsiz keşif ve güvenli depo çözümleri sunuyoruz.",
    h1: 'Yüreğir Eşya Depolama — Taşköprü Yakını Güvenli Depo',
    adHeadline: 'Yüreğir Eşya Depolama',
    seoHeadline: ' — Taşköprü Yakını Güvenli Depo',
    aciklama: `Yüreğir, Seyhan Nehri'nin doğu yakasında Adana'nın en kalabalık ikinci ilçesi. Kazım Karabekir, Yavuzlar ve Haydaroğlu gibi mahallelerde aile konutu ile küçük imalathane yan yana durur; eşya depolama talebi hem ev hem iş kaynaklıdır. Seyhan Yeni Mahalle’deki tesisimiz Yüreğir köprü ve çevre yolu bağlantılarıyla dakikalar içinde ulaşılır.

Taşköprü hattından Yakapınar–Misis yönüne uzanan güzergâhta, antik kent ve kervansaray çevresindeki mahallelerde de aynı gün keşif yapıyoruz. 7/24 kamera, alarm ve sigorta kapsamı mobilya, tarım ekipmanı ve ticari stok için geçerlidir. Dar sokaklarda vinç veya küçük kamyonetle kontrollü yükleme planlarız.

Koza, Dervişler ve Anadolu mahallelerindeki sitelerde bodrum depolarının rutubet riski yüksektir. İklimden korunan ünitelerimizde eşyayı raflı ve etiketli tutuyor; kısa tadilat süresi veya uzun kiralık dönem için net fiyat veriyoruz. Ücretsiz keşif sonrası yalnızca ihtiyacınız kadar metrekare kiralarsınız.`,
    nedenler: [
      'Taşköprü ve Yüreğir merkeze hızlı erişim',
      'Haydaroğlu ve Yavuzlar hattına ücretsiz keşif',
      '7/24 kamera, alarm ve sigortalı üniteler',
      'Ev ve küçük imalathane stokları için esnek metrekare',
      'Misis–Yakapınar yönüne aynı gün teslimat planı',
    ],
    landmarks: ['Taşköprü', 'Misis Ören Yeri', 'Misis Köprüsü', 'Misis Kervansarayı'],
  },
  {
    slug: 'cukurova',
    name: 'Çukurova',
    tier: 1,
    population: 378650,
    mahalleler: [
      'Toros',
      'Belediye Evleri',
      'Mahfesığmaz',
      'Güzelyalı',
      'Yüzüncüyıl',
      'Beyazevler',
      'Huzurevleri',
      'Karslılar',
    ],
    metaTitle: 'Çukurova Eşya Depolama | Güvenli ve Sigortalı Depo',
    metaDescription:
      "Çukurova'da 7/24 izlemeli, sigortalı eşya depolama. Toros, Güzelyalı ve Mahfesığmaz'a ücretsiz keşif. Modern siteler için güvenli depo alanı sizi bekliyor.",
    h1: 'Çukurova Eşya Depolama — Modern Siteler İçin Güvenli Depo',
    adHeadline: 'Çukurova Eşya Depolama',
    seoHeadline: ' — Modern Siteler İçin Güvenli Depo',
    aciklama: `Çukurova, Adana'nın yeni konut stoğunun yoğunlaştığı ilçedir. Toros, Belediye Evleri, Güzelyalı ve Mahfesığmaz'daki sitelerde depo odaları dar, otoparklar ise büyük kamyona kapalıdır. Ev yenileme, üniversite dönemi veya yurt dışına çıkışta eşyayı evde yığmak yerine sigortalı ünitede tutmak hem site yönetmeliğine hem aile düzenine uyar.

Seyhan Baraj Gölü ve kuzey orman kuşakına komşu bu mahallelerde nem ve toz, açık depoları riskli kılar. Tesisimizde 7/24 kamera, alarm ve sigorta standarttır; koltuk takımı, beyaz eşya ve arşiv kutuları ayrı koridorlarda yer alır. Ücretsiz keşifte asansör ölçüleri ve yasak saatleri not eder, site yönetimine uygun saatte yükleme yaparız.

Yüzüncüyıl, Beyazevler, Huzurevleri ve Karslılar'dan Seyhan tesisimize gidiş çevre yolu üzerinden kısadır. Kısa dönem tadilat deposu ile yıllık kiralama aynı kapıdan yönetilir; sözleşmeyi net metrekare ve teslim tarihiyle imzalarsınız. Kurttepe ve Esentepe hattındaki villalarda bahçe mobilyası ve mevsimlik eşya için de ayrı ünite öneririz.`,
    nedenler: [
      'Toros ve Güzelyalı sitelerine ücretsiz keşif',
      'Site asansör ve yasak saatlerine uygun yükleme',
      '7/24 kamera izleme ve sigortalı üniteler',
      'Tadilat ve uzun dönem kiralama seçenekleri',
      'Çevre yoluyla Seyhan Yeni Mahalle’ye kısa erişim',
    ],
    landmarks: [
      'Seyhan Baraj Gölü',
      'Süleyman Demirel Arboretumu',
      'Çukurova Üniversitesi Kampüsü',
    ],
  },
  {
    slug: 'saricam',
    name: 'Sarıçam',
    tier: 1,
    population: 251259,
    mahalleler: [
      'Yıldırım Beyazıt',
      'Mehmet Akif Ersoy',
      'Remzi Oğuz Arık',
      'İstiklal',
      'Sofulu',
      'Balcalı',
      'Beyceli',
      'İncirlik',
    ],
    metaTitle: 'Sarıçam Eşya Depolama | Sigortalı Güvenli Depo',
    metaDescription:
      "Sarıçam'da 7/24 kamera izlemeli sigortalı eşya depolama. Ücretsiz keşif; taşıma teklifte ayrıca planlanır. İncirlik, Balcalı ve üniversite çevresine aynı gün teslimat alın.",
    h1: 'Sarıçam Eşya Depolama — Sigortalı Güvenli Depo',
    adHeadline: 'Sarıçam Eşya Depolama',
    seoHeadline: ' — Sigortalı Güvenli Depo',
    aciklama: `Sarıçam, Adana'nın sanayi, üniversite ve yeni konut büyümesinin kesiştiği ilçedir. Tesisimiz Yeni Mahalle 87005 Sokak No:30, Seyhan’dadır; Yıldırım Beyazıt, Mehmet Akif Ersoy ve Sofulu’daki konutlara randevulu keşif ve aynı gün yükleme planlarız. İncirlik ve Balcalı hattında görev, eğitim veya şantiye nedeniyle sık taşınanlar için kısa ve uzun dönem üniteler hazırdır.

Organize sanayi içindeki üreticiler yarı mamul, kalıp ve sezonluk stoku sahada bırakmak yerine kamera izlemeli, sigortalı depoda tutmayı tercih eder. Ev eşyası ile ticari palet aynı tesiste, ayrı koridorlarda saklanır; karışma ve hasar riski etiketli raf sistemiyle düşer. Ücretsiz keşifte forklift ihtiyacı ve palet ölçüsü de netleşir.

Beyceli, Remzi Oğuz Arık ve İstiklal mahallelerindeki yeni sitelerde depo odası çoğu zaman yetersiz kalır. Çukurova Üniversitesi kampüsüne yakın öğrenci ve akademik personel, dönem aralarında eşyayı evde bırakmadan kiralayabilir. Sarıçam ormanları ve Çatalan Barajı yönündeki mahallelerden de aynı gün teslim planlıyoruz.`,
    nedenler: [
      'Seyhan tesisimizden Sarıçam’a randevulu sefer',
      'İncirlik, Balcalı ve Sofulu’ya aynı gün teslimat',
      'Ev eşyası ve sanayi paleti için ayrı koridorlar',
      '7/24 kamera, alarm ve sigortalı saklama',
      'Ücretsiz keşif ve forklift destekli indirme',
    ],
    landmarks: [
      'Adana Organize Sanayi Bölgesi',
      'Çukurova Üniversitesi Kampüsü',
      'İncirlik',
      'Sarıçam Ormanları',
      'Çatalan Baraj Gölü',
    ],
  },
  {
    slug: 'ceyhan',
    name: 'Ceyhan',
    tier: 2,
    population: 155965,
    mahalleler: [
      'Namık Kemal',
      'Cumhuriyet',
      'Burhaniye',
      'Konakoğlu',
      'Türlü',
      'Mercimek',
      'Koruklu',
      'Hürriyet',
    ],
    metaTitle: 'Ceyhan Eşya Depolama | Güvenli Sigortalı Depo Alanı',
    metaDescription:
      "Ceyhan'da 7/24 kamera izlemeli, sigortalı eşya depolama. Ücretsiz keşif; liman ve sanayi bölgesine yakın güvenli depo. Aynı hafta teslimat sizi bekliyor.",
    h1: 'Ceyhan Eşya Depolama — Liman ve Sanayiye Yakın Depo',
    adHeadline: 'Ceyhan Eşya Depolama',
    seoHeadline: ' — Liman ve Sanayiye Yakın Depo',
    aciklama: `Ceyhan, enerji, tarım ve lojistik hatlarının kesiştiği bir ilçedir. Namık Kemal, Cumhuriyet ve Burhaniye'deki konutların yanı sıra liman ve sanayi çevresindeki vardiyalı çalışanlar, ev eşyasını geçici olarak Adana merkez deposunda tutmak ister. Seyhan tesisimizden Ceyhan'a D-400 ve çevre yolu ile düzenli sefer planlıyoruz.

Ceyhan Nehri kıyısı ve ova nemi, ev deposunu ve açık sundurmayı riskli kılar. 7/24 kamera ve sigorta ile koltuk, beyaz eşya ve ticari koli aynı standartta korunur. Ücretsiz keşifte merdiven, asansör ve palet ihtiyacını yerinde ölçer; Tumlu Kalesi–Yılan Kalesi hattındaki mahallelere de aynı randevuda uğrarız.

Konakoğlu, Mercimek ve Koruklu'daki aileler hasat sonrası ev düzenlemesi veya taşınma döneminde yalnızca ihtiyaç kadar metrekare kiralar. Kısa dönem ve yıllık sözleşmeler şeffaf fiyatlıdır; Ceyhan'dan yüklenen eşya aynı gün Sarıçam'daki ünitesine iner.`,
    nedenler: [
      'D-400 üzerinden Ceyhan’a düzenli taşıma seferi',
      'Liman ve sanayi çalışanlarına esnek kiralama',
      '7/24 kamera izleme ve sigortalı üniteler',
      'Ücretsiz keşif, palet ve koli ile teslim',
      'Nehir nemine karşı kapalı ve kontrollü depo',
    ],
    landmarks: ['Tumlu Kalesi', 'Yılan Kalesi', 'Tatarlı Höyük', 'Ceyhan Nehri'],
  },
  {
    slug: 'kozan',
    name: 'Kozan',
    tier: 2,
    population: 132911,
    mahalleler: [
      'Tufanpaşa',
      'Arslanpaşa',
      'Mahmutlu',
      'Çanaklı',
      'Karacaoğlan',
      'Aslanlı',
      'Şerif Vural',
      'Bağlar',
    ],
    metaTitle: 'Kozan Eşya Depolama | Güvenli ve Sigortalı Depo Alanı',
    metaDescription:
      "Kozan'da 7/24 kamera izlemeli, sigortalı eşya depolama. Anavarza ve ilçe merkezine ücretsiz keşif. Tarım ve konut eşyası için güvenli depo çözümleri alın.",
    h1: 'Kozan Eşya Depolama — Anavarza Hattına Güvenli Depo',
    adHeadline: 'Kozan Eşya Depolama',
    seoHeadline: ' — Anavarza Hattına Güvenli Depo',
    aciklama: `Kozan, Sis Kalesi ve Anavarza ören yerinin gölgesinde hem tarım hem kent yaşamının sürdüğü bir ilçedir. Tufanpaşa, Arslanpaşa ve Mahmutlu'da ev yenileme, düğün evi hazırlığı veya merkeze taşınma sık görülür. Adana Seyhan Yeni Mahalle’deki sigortalı depomuz, Kozan'dan planlı seferlerle bağlanır.

Ova sıcağı ve kış rutubeti ahşap mobilyayı ev deposunda yıpratır. 7/24 kamera, alarm ve sigorta ile ev eşyası, tarım aleti ve sezonluk ürün paletleri ayrı tutulur. Ücretsiz keşifte Dağılcak ve tarihi çarşı çevresindeki dar sokaklara uygun araç seçeriz.

Çanaklı, Karacaoğlan ve Aslanlı mahallelerinden yükleme genellikle aynı gün tamamlanır. Kısa dönem tadilat deposu veya hasat sonrası stok için metrekareyi siz belirlersiniz; sözleşme ve teslim tutanağı şeffaftır.`,
    nedenler: [
      'Kozan merkeze planlı taşıma seferi',
      'Anavarza ve kale çevresine ücretsiz keşif',
      '7/24 kamera ve sigortalı saklama',
      'Tarım ekipmanı ve ev eşyası için ayrı üniteler',
      'Hasat ve tadilat dönemine özel kısa kiralama',
    ],
    landmarks: [
      'Kozan (Sis) Kalesi',
      'Anavarza Antik Kenti',
      'Dağılcak Mesire Alanı',
      'Hoşkadem Camii',
    ],
  },
  {
    slug: 'imamoglu',
    name: 'İmamoğlu',
    tier: 2,
    population: 27071,
    mahalleler: [
      'Cumhuriyet',
      'Hürriyet',
      'Sayca',
      'Alaybeyi',
      'Ağzıkaraca',
      'Ufacıkören',
      'Otluk',
      'Saygeçit',
    ],
    metaTitle: 'İmamoğlu Eşya Depolama | Güvenli ve Sigortalı Depo',
    metaDescription:
      "İmamoğlu'nda 7/24 kamera izlemeli, sigortalı eşya depolama. Adana–Kozan hattına ücretsiz keşif. Tarım ve konut eşyası için güvenli depo alanı sunuyoruz.",
    h1: 'İmamoğlu Eşya Depolama — Adana–Kozan Hattında Depo',
    adHeadline: 'İmamoğlu Eşya Depolama',
    seoHeadline: ' — Adana–Kozan Hattında Depo',
    aciklama: `İmamoğlu, Adana merkez ile Kozan arasında, tarım ve küçük sanayinin iç içe geçtiği bir duraktır. Cumhuriyet ve Hürriyet mahallelerindeki konutlar ile Sayca, Alaybeyi çevresindeki evlerde depo alanı sınırlıdır. Seyhan Yeni Mahalle’deki tesisimiz ilçeye araçla yaklaşık bir saatlik mesafededir; randevulu yükleme ile eşya aynı gün üniteye iner.

Kazangölü Şelalesi ve Ağzıkaraca kaya mezarları yönündeki mahallelerde yazlık ve köy evi kullanımı mevsimliktir. Kışın boşalan evlerin eşyasını 7/24 kamera ve sigorta altında tutmak, rutubet ve hırsızlık riskini düşürür. Ücretsiz keşifte koli sayısı ve büyük parça listesi çıkarılır.

Kısa dönem (tadilat, düğün evi) ve yıllık kiralama aynı fiyat tarifesinden şeffaf ilerler. Paletli tarım malzemesi ile koltuk takımı ayrı koridorlarda saklanır; teslimde etiketli envanter teslim edilir.`,
    nedenler: [
      'Adana–Kozan yolu üzerinde planlı sefer',
      'Köy evi ve mevsimlik eşya için esnek süre',
      '7/24 kamera izleme ve sigorta',
      'Ücretsiz keşif ve envanter listesi',
      'Tarım paleti ile ev eşyasını ayrı saklama',
    ],
    landmarks: ['Kazangölü Şelalesi', 'Altınini Mağarası', 'Ağzıkaraca Kaya Mezarları'],
  },
  {
    slug: 'karatas',
    name: 'Karataş',
    tier: 2,
    population: 24304,
    mahalleler: [
      'Karşıyaka',
      'Yeni',
      'Ataköy',
      'Helvacı',
      'Tuzla',
      'Yemişli',
      'Bahçe',
      'İsahacılı',
    ],
    metaTitle: 'Karataş Eşya Depolama | Güvenli Sigortalı Depo Alanı',
    metaDescription:
      "Karataş'ta 7/24 kamera izlemeli, sigortalı eşya depolama. Yazlık ve kıyı evlerine ücretsiz keşif. Akyatan hattı için mevsimlik güvenli depo çözümleri.",
    h1: 'Karataş Eşya Depolama — Yazlık ve Kıyı Evleri İçin Depo',
    adHeadline: 'Karataş Eşya Depolama',
    seoHeadline: ' — Yazlık ve Kıyı Evleri İçin Depo',
    aciklama: `Karataş, Magarsus Antik Kenti, plajlar ve Akyatan–Tuzla lagünleriyle Adana'nın deniz kapısıdır. Karşıyaka, Yeni ve Ataköy'deki yazlıklar kışın kapanır; eşyayı evde bırakmak tuz, nem ve uzun boşluk riski taşır. Seyhan Yeni Mahalle’deki kapalı, sigortalı ünitelerimiz mevsimlik mobilya ve ev tekstili için uygundur.

Helvacı, Tuzla ve Yemişli mahallelerine ücretsiz keşif planlarız. 7/24 kamera ve alarm ile teslim alınan eşya etiketlenir; sezon açılışında aynı listeyle iade edilir. Küçük kamyonet, kıyı sitelerindeki dar girişlere göre seçilir.

Kısa yaz sezonu için üç–altı aylık kiralama, kışın Adana merkezde oturanlar için yıllık kiralama mümkündür. Deniz feneri ve Kumluk Tabiat Parkı çevresindeki evlerden yükleme, randevu gününde tamamlanır.`,
    nedenler: [
      'Yazlık kapanışına özel mevsimlik kiralama',
      'Tuz ve neme karşı kapalı, sigortalı üniteler',
      'Karataş merkez ve Tuzla’ya ücretsiz keşif',
      '7/24 kamera izleme ve envanter iadesi',
      'Dar site girişine uygun küçük araç',
    ],
    landmarks: [
      'Magarsus Antik Kenti',
      'Karataş Plajı',
      'Akyatan Gölü',
      'Tuzla Gölü',
      'Tuzla Deniz Feneri',
    ],
  },
  {
    slug: 'karaisali',
    name: 'Karaisalı',
    tier: 2,
    population: 22997,
    mahalleler: [
      'Çevlik',
      'Kızıldağ',
      'Nergizlik',
      'Bucak',
      'Çatalan',
      'Karakılıç',
      'Selampınar',
      'Barakdağı',
    ],
    metaTitle: 'Karaisalı Eşya Depolama | Güvenli ve Sigortalı Depo',
    metaDescription:
      "Karaisalı'da 7/24 kamera izlemeli, sigortalı eşya depolama. Varda ve yayla evlerine ücretsiz keşif. Köy ve yayla eşyası için güvenli depo çözümleri alın.",
    h1: 'Karaisalı Eşya Depolama — Varda ve Yayla Evleri İçin Depo',
    adHeadline: 'Karaisalı Eşya Depolama',
    seoHeadline: ' — Varda ve Yayla Evleri İçin Depo',
    aciklama: `Karaisalı, Varda (Alman) Köprüsü, Kapıkaya Kanyonu ve Kızıldağ Yaylası ile Adana'nın Toros eteklerindeki merkez ilçesidir. Çevlik ve ilçe merkezindeki konutların yanında yayla evleri yazın dolar, kışın boşalır. Seyhan Yeni Mahalle’deki depomuz, yayla mobilyası ve kışlık eşyayı nemden uzak, sigortalı tutar.

Nergizlik, Bucak ve Çatalan mahallelerine ücretsiz keşif yapılır. Dağ yolu ve dar köy sokaklarına uygun araç seçilir; 7/24 kamera ve alarm standardı yayla eşyası için de geçerlidir. Yerköprü Şelalesi ve Dokuzoluk hattındaki evlerden yükleme randevulu yürütülür.

Kısa yaz sezonu veya uzun kış kiralama aynı sözleşmede net metrekareyle yazılır. Teslimde koli ve büyük parça listesi imzalanır; sezon sonunda eksiksiz iade hedeflenir.`,
    nedenler: [
      'Yayla evi kapanışına özel mevsimlik depo',
      'Varda–Kapıkaya hattına ücretsiz keşif',
      '7/24 kamera, alarm ve sigorta',
      'Dağ yoluna uygun araç ve kontrollü yükleme',
      'Kış ve yaz dönemi için esnek süre',
    ],
    landmarks: [
      'Varda Köprüsü',
      'Kapıkaya Kanyonu',
      'Yerköprü Şelalesi',
      'Kızıldağ Yaylası',
      'Dokuzoluk Kanyonu',
    ],
  },
  {
    slug: 'pozanti',
    name: 'Pozantı',
    tier: 2,
    population: 20235,
    mahalleler: [
      'Cumhuriyet',
      'Akçatekir',
      'Kamışlı',
      'Aşar',
      'Armutoğlu',
      'Belemedik',
      'Yazıcık',
      'Hamidiye',
    ],
    metaTitle: 'Pozantı Eşya Depolama | Güvenli Sigortalı Depo Alanı',
    metaDescription:
      "Pozantı'da 7/24 kamera izlemeli, sigortalı eşya depolama. Otoyol ve yayla evlerine ücretsiz keşif. Akçatekir hattı için güvenli depo çözümü sizi bekliyor.",
    h1: 'Pozantı Eşya Depolama — Otoyol ve Yayla Evleri İçin Depo',
    adHeadline: 'Pozantı Eşya Depolama',
    seoHeadline: ' — Otoyol ve Yayla Evleri İçin Depo',
    aciklama: `Pozantı, Adana–Ankara otoyolunun Toros geçidinde; Akçatekir, Aşar ve Armutoğlu yaylaları yazın dolar. Cumhuriyet mahallesi ve belde konutlarında depo alanı dardır; kışın boşalan yayla evlerinin eşyası merkeze indirilmek ister. Seyhan Yeni Mahalle’deki sigortalı tesisimiz otoyol bağlantısıyla Pozantı'ya planlı sefer düzenler.

Belemedik Tabiat Parkı ve Çakıt Vadisi çevresindeki evlerde nem ve don, açık depoları bozar. 7/24 kamera ve sigorta ile mobilya, soba ve mevsimlik tekstil kapalı ünitede durur. Ücretsiz keşifte kar zinciri dönemi ve dar virajlar dikkate alınarak araç seçilir.

Kısa yaz sezonu kiralama ve kışın Adana'da oturanlara yıllık kiralama sunulur. Teslim envanteri sezon açılışında birebir iade için saklanır.`,
    nedenler: [
      'Otoyol güzergâhında planlı Pozantı seferi',
      'Akçatekir ve yayla evlerine ücretsiz keşif',
      '7/24 kamera ve sigortalı kapalı üniteler',
      'Kış koşullarına uygun yükleme planı',
      'Mevsimlik eşya için esnek kiralama süresi',
    ],
    landmarks: [
      'Belemedik Tabiat Parkı',
      'Çakıt Vadisi',
      'Akçatekir Yaylası',
      'Aşar Yaylası',
      'Şeker Pınarı',
    ],
  },
  {
    slug: 'aladag',
    name: 'Aladağ',
    tier: 3,
    population: 16190,
    mahalleler: [
      'Mansurlu',
      'Akören',
      'Eğner',
      'Kıcak',
      'Büyüksofulu',
      'Mazılık',
      'Kökez',
      'Posyağbasan',
    ],
    metaTitle: 'Aladağ Eşya Depolama | Güvenli Sigortalı Depo Alanı',
    metaDescription:
      "Aladağ'da 7/24 kamera izlemeli, sigortalı eşya depolama. Yayla ve köy evlerine ücretsiz keşif. Küp Şelalesi hattı için güvenli depo hizmeti sizi bekliyor.",
    h1: 'Aladağ Eşya Depolama — Yayla ve Köy Evleri İçin Depo',
    adHeadline: 'Aladağ Eşya Depolama',
    seoHeadline: ' — Yayla ve Köy Evleri İçin Depo',
    aciklama: `Aladağ (Karsantı), Küp Şelaleleri ve Meydan Yaylası ile Adana'nın yüksek kesimidir. Mansurlu, Akören ve Eğner'deki evler yazın kullanılır, kışın kapanır. Seyhan Yeni Mahalle’deki kapalı depomuz, yayla mobilyası ve kışlık eşyayı don ve rutubetten uzak tutar.

7/24 kamera, alarm ve sigorta köy evi eşyası için de geçerlidir. Ücretsiz keşifte dağ yolu ve kar dönemi dikkate alınır; randevulu yükleme ile eşya aynı güzergâhta Adana'ya iner. Kısa sezon veya yıllık kiralama, net metrekare ve envanter listesiyle yürür.`,
    nedenler: [
      'Yayla evi kapanışına özel mevsimlik depo',
      'Akören ve Eğner hattına ücretsiz keşif',
      '7/24 kamera ve sigortalı üniteler',
      'Dağ yoluna uygun planlı yükleme',
    ],
    landmarks: ['Küp Şelaleleri', 'Meydan Yaylası', 'Akören Kiliseleri', 'Mazılık Ören Yeri'],
  },
  {
    slug: 'feke',
    name: 'Feke',
    tier: 3,
    population: 16116,
    mahalleler: [
      'İslam',
      'Gökçeli',
      'Sülemişli',
      'Belenköy',
      'Akkaya',
      'Paşalı',
      'Karacaoğlan',
      'Tortulu',
    ],
    metaTitle: 'Feke Eşya Depolama | Güvenli ve Sigortalı Depo Alanı',
    metaDescription:
      "Feke'de 7/24 kamera izlemeli, sigortalı eşya depolama. İlçe merkez ve Sülemişli'ye ücretsiz keşif. Köy evleri için güvenli, kapalı depo alanı sizi bekliyor.",
    h1: 'Feke Eşya Depolama — Toros Köy Evleri İçin Güvenli Depo',
    adHeadline: 'Feke Eşya Depolama',
    seoHeadline: ' — Toros Köy Evleri İçin Güvenli Depo',
    aciklama: `Feke, Feke Kalesi ve Sülemişli'deki Karakilise (Kastalawn) ile Adana'nın doğu Toroslarındaki sakin ilçesidir. İslam ve Gökçeli mahallelerindeki konutlarda depo dar, kış koşulları serttir. Eşyayı ilçede açık sundurmada bırakmak yerine Seyhan Yeni Mahalle’de kamera izlemeli, sigortalı ünitede tutmak hasar riskini düşürür.

Ücretsiz keşif randevulu yapılır; dağ yolu ve hava durumuna göre araç seçilir. Kısa veya yıllık kiralama, koli ve büyük parça envanteri ile teslim alınır. Belenköy ve Akkaya hattındaki evlerden yükleme aynı seferde birleştirilebilir.`,
    nedenler: [
      'Feke merkez ve Sülemişli’ye randevulu keşif',
      '7/24 kamera, alarm ve sigorta',
      'Kış koşullarına uygun yükleme planı',
      'Köy evi eşyası için esnek kiralama süresi',
    ],
    landmarks: ['Feke Kalesi', 'Karakilise (Kastalawn Manastırı)', 'Sülemişli (Eski Feke)'],
  },
  {
    slug: 'saimbeyli',
    name: 'Saimbeyli',
    tier: 3,
    population: 13451,
    mahalleler: [
      'Fatih',
      'Cumhuriyet',
      'Değirmenciuşağı',
      'Obruk',
      'Gökmenler',
      'Beypınarı',
      'Kandilli',
      'Yeşilova',
    ],
    metaTitle: 'Saimbeyli Eşya Depolama | Güvenli ve Sigortalı Depo',
    metaDescription:
      "Saimbeyli'de 7/24 kamera izlemeli, sigortalı eşya depolama. İlçe ve yayla evlerine ücretsiz keşif. Toros hattı için güvenli, kapalı depo hizmeti alın.",
    h1: 'Saimbeyli Eşya Depolama — Toros Yayla Evleri İçin Depo',
    adHeadline: 'Saimbeyli Eşya Depolama',
    seoHeadline: ' — Toros Yayla Evleri İçin Depo',
    aciklama: `Saimbeyli, Adana'nın en az nüfuslu ilçesi; Fatih ve Cumhuriyet mahalleleri ile yayla yerleşimleri yazın canlanır. Saimbeyli Kalesi (Kara Kilise) çevresindeki evlerde kışın ısınma ve nem sorunu eşyayı yıpratır. Seyhan Yeni Mahalle’deki kapalı, sigortalı depo kışlık ve yazlık eşyayı ayrı tutar.

7/24 kamera ve ücretsiz keşif ile Değirmenciuşağı, Obruk ve Gökmenler hattından randevulu yükleme yapılır. Kısa sezon kiralama, merkeze taşınma veya uzun kış dönemi için metrekare ihtiyaca göre belirlenir.`,
    nedenler: [
      'Saimbeyli merkez ve yaylalara randevulu keşif',
      '7/24 kamera ve sigortalı kapalı üniteler',
      'Kış ve yaz eşyası için ayrı saklama',
      'Esnek süre ve net metrekare fiyatı',
    ],
    landmarks: ['Saimbeyli Kalesi (Kara Kilise)', 'Göksu Vadisi'],
  },
  {
    slug: 'tufanbeyli',
    name: 'Tufanbeyli',
    tier: 3,
    population: 16524,
    mahalleler: [
      'Cumhuriyet',
      'Yamanlı',
      'Şar',
      'Tozlu',
      'Pınarlar',
      'Kayapınar',
      'Hanyeri',
      'Doğanbeyli',
    ],
    metaTitle: 'Tufanbeyli Eşya Depolama | Güvenli ve Sigortalı Depo',
    metaDescription:
      "Tufanbeyli'de 7/24 kamera izlemeli, sigortalı eşya depolama. Şar ve ilçe merkezine ücretsiz keşif. Yüksekova evleri için güvenli kapalı depo çözümleri.",
    h1: 'Tufanbeyli Eşya Depolama — Şar ve Yüksekova Evleri İçin Depo',
    adHeadline: 'Tufanbeyli Eşya Depolama',
    seoHeadline: ' — Şar ve Yüksekova Evleri İçin Depo',
    aciklama: `Tufanbeyli, Şar (Comana/Hieropolis) ören yeri, Alakapı ve antik tiyatrosuyla Adana'nın kuzey ucundadır. Cumhuriyet ve Yamanlı'daki konutlar ile Şar mahallesindeki evler kışın sert iklimle karşılaşır. Eşyayı Seyhan Yeni Mahalle’de 7/24 kamera ve sigorta altında tutmak, don ve rutubet hasarını azaltır.

Ücretsiz keşif Tozlu, Pınarlar ve Kayapınar hattını da kapsar. Randevulu yükleme, koli envanteri ve esnek kiralama süresi ile yüksekova evlerinin mevsimlik döngüsüne uyum sağlanır.`,
    nedenler: [
      'Tufanbeyli merkez ve Şar’a randevulu keşif',
      '7/24 kamera izleme ve sigorta',
      'Yüksekova kışına karşı kapalı üniteler',
      'Mevsimlik eşya için esnek kiralama',
    ],
    landmarks: ['Şar Ören Yeri', 'Alakapı', 'Antik Tiyatro', 'Kırık Kilise'],
  },
  {
    slug: 'yumurtalik',
    name: 'Yumurtalık',
    tier: 3,
    population: 17970,
    mahalleler: [
      'Merkez',
      'Ayas',
      'Zeytinli',
      'Kalemli',
      'Demirtaş',
      'Sugözü',
      'Kırmızıdam',
      'Haylazlı',
    ],
    metaTitle: 'Yumurtalık Eşya Depolama | Güvenli ve Sigortalı Depo',
    metaDescription:
      "Yumurtalık'ta 7/24 kamera izlemeli, sigortalı eşya depolama. Ayas ve kıyı evlerine ücretsiz keşif. Liman hattı için mevsimlik güvenli depo çözümleri alın.",
    h1: 'Yumurtalık Eşya Depolama — Ayas ve Kıyı Evleri İçin Depo',
    adHeadline: 'Yumurtalık Eşya Depolama',
    seoHeadline: ' — Ayas ve Kıyı Evleri İçin Depo',
    aciklama: `Yumurtalık, antik Ayas (Aigeai) kenti, Süleyman Kulesi ve lagünleriyle Adana'nın doğu kıyısıdır. Merkez, Ayas ve Zeytinli'deki yazlıklar sezon dışında boş kalır; tuzlu nem eşyayı bozar. Seyhan Yeni Mahalle’deki kapalı, sigortalı üniteler mevsimlik mobilya ve ev tekstili için uygundur.

Kalemli, Demirtaş ve Sugözü hattına ücretsiz keşif verilir. 7/24 kamera, envanter listesi ve sezon açılışında birebir iade ile kıyı evlerinin kış uykusu güvence altına alınır. Liman ve enerji tesisleri çevresindeki geçici görevli konutları için de kısa dönem kiralama vardır.`,
    nedenler: [
      'Ayas ve kıyı yazlıklarına mevsimlik depo',
      'Tuz ve neme karşı kapalı, sigortalı üniteler',
      '7/24 kamera ve ücretsiz keşif',
      'Sugözü–Demirtaş hattına randevulu teslimat',
    ],
    landmarks: ['Ayas Antik Kenti', 'Ayas Kalesi', 'Süleyman Kulesi', 'Yumurtalık Lagünü'],
  },
];

export const ILCE_PATH_SUFFIX = '-esya-depolama';

export function getIlceBySlug(slug: string): Ilce | undefined {
  return ilceler.find((ilce) => ilce.slug === slug);
}

export function getIlcelerByTier(tier: 1 | 2 | 3): Ilce[] {
  return ilceler.filter((ilce) => ilce.tier === tier);
}

export function getIlcePath(slug: string): string {
  return `/bolgeler/${slug}${ILCE_PATH_SUFFIX}`;
}

export function parseIlceParam(param: string): string {
  return param.endsWith(ILCE_PATH_SUFFIX) ? param.slice(0, -ILCE_PATH_SUFFIX.length) : param;
}

/** İlçe merkezlerine yaklaşık koordinat (coğrafi yakınlık sıralaması). */
const ILCE_COORDINATES: Record<string, { lat: number; lng: number }> = {
  seyhan: { lat: 36.987, lng: 35.324 },
  yuregir: { lat: 36.985, lng: 35.354 },
  cukurova: { lat: 37.056, lng: 35.284 },
  saricam: { lat: 37.032, lng: 35.419 },
  ceyhan: { lat: 37.028, lng: 35.813 },
  kozan: { lat: 37.456, lng: 35.815 },
  imamoglu: { lat: 37.259, lng: 35.661 },
  karatas: { lat: 36.562, lng: 35.383 },
  karaisali: { lat: 37.253, lng: 35.062 },
  pozanti: { lat: 37.428, lng: 34.872 },
  aladag: { lat: 37.549, lng: 35.396 },
  feke: { lat: 37.815, lng: 35.913 },
  saimbeyli: { lat: 37.983, lng: 36.091 },
  tufanbeyli: { lat: 38.263, lng: 36.221 },
  yumurtalik: { lat: 36.769, lng: 35.793 },
};

function haversineKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
}

export function getNearbyIlceler(slug: string, count = 4): Ilce[] {
  const origin = ILCE_COORDINATES[slug] ?? ILCE_COORDINATES.saricam;
  if (!origin) return ilceler.filter((ilce) => ilce.slug !== slug).slice(0, count);

  return ilceler
    .filter((ilce) => ilce.slug !== slug)
    .map((ilce) => ({
      ilce,
      distance: haversineKm(origin, ILCE_COORDINATES[ilce.slug] ?? origin),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, count)
    .map(({ ilce }) => ilce);
}
