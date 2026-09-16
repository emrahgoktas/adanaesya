export interface Hizmet {
  slug: string;
  name: string;
  shortName: string;
  icon: string; // lucide-react ikon adı
  metaTitle: string;
  metaDescription: string;
  h1: string;
  adHeadline: string; // MAX 30 karakter
  seoHeadline: string;
  ozet: string;
  icerik: string[]; // 3-4 paragraf
  ozellikler: string[]; // 6-8 madde
  senaryolar: {
    baslik: string;
    aciklama: string;
  }[]; // 4 senaryo
  fiyatAraligi: string;
  sss: { soru: string; cevap: string }[];
}

export const hizmetler: Hizmet[] = [
  {
    slug: 'kisisel-esya-depolama',
    name: 'Kişisel Eşya Depolama',
    shortName: 'Kişisel Depolama',
    icon: 'Package',
    metaTitle: 'Adana Kişisel Eşya Depolama | 1-12 Ay Geçici Depo',
    metaDescription:
      "Adana'da 1-12 ay arası kişisel eşya depolama hizmeti. 7/24 güvenlikli, iklimlendirilmiş depolar. Ücretsiz keşif ve taşıma desteği. Sigortalı depo sizi bekliyor.",
    h1: 'Adana Kişisel Depolama — 1-12 Ay Geçici Depo',
    adHeadline: 'Adana Kişisel Depolama',
    seoHeadline: ' — 1-12 Ay Geçici Depo',
    ozet: "Taşınma, tadilat veya geçici ayrılık döneminde kişisel eşyanızı Adana Sarıçam OSB'deki 7/24 kamera izlemeli, sigortalı ünitelerde 1–12 ay saklayın.",
    icerik: [
      "Kişisel eşya depolama, evdeki odayı koli ve koltukla doldurmadan hayatın akışını sürdürmek isteyenler içindir. Adana'da tadilat, kira kontratı boşluğu veya aile büyürken eşyanın bir kısmını güvenli bir adrese taşımak sık görülür. Sarıçam OSB'deki tesisimizde 1 m³'lük koli ünitesinden 30 m³'lük oda ölçeğine kadar esnek alan kiralanır.",
      'Teslimattan önce ücretsiz keşifte koli sayısı, büyük parça ölçüleri ve asansör kısıtları not edilir. Eşya etiketlenir, envanter tutanağı imzalanır ve 7/24 kamera, alarm ile yangın–su baskını önlemleri altında durur. İklimlendirilmiş koridorlar ahşap mobilya, tekstil ve ev aletlerini nemden korur.',
      'Süre 1 aydan 12 aya kadar uzatılabilir; erken boşaltmada kalan günler netleştirilir. İsterseniz paketleme ve taşıma ekibimiz Seyhan, Yüreğir, Çukurova ve Sarıçam adreslerinden yükler. Teslim gününde aynı listeyle eşyanızı eksiksiz geri alırsınız.',
      'Kısa dönem tadilat deposu ile uzun kiralık dönem aynı kapıdan yönetilir. Sözleşmede metrekare, başlangıç tarihi ve erişim kuralları yazılıdır; gizli masraf yoktur. İsteğe bağlı sigorta, yüksek değerli elektronik ve antika parçalar için önerilir.',
    ],
    ozellikler: [
      '1 m³ ile 30 m³ arası esnek depo seçenekleri',
      '7/24 kamera izleme ve alarm sistemi',
      'Yangın ve su baskını koruması',
      'Sigortalı depolama (opsiyonel)',
      'Ücretsiz keşif ve fiyat teklifi',
      'İsteğe bağlı paketleme ve taşıma hizmeti',
      'Etiketli envanter ve teslim tutanağı',
      '1–12 ay arası uzatılabilir kiralama',
    ],
    senaryolar: [
      {
        baslik: 'Taşınma Sürecinde',
        aciklama:
          'Eski evden çıktınız, yeni teslim henüz hazır değil. Eşyayı bir akraba evine yığmak yerine ünitede tutar, anahtar teslim gününde doğrudan yeni adrese taşırsınız.',
      },
      {
        baslik: 'Ev Tadilatı Sırasında',
        aciklama:
          'Boya, mutfak veya zemin işi toz ve darbe riski yaratır. Mobilya ve tekstili birkaç haftalığına depoya alıp ustaların serbest çalışmasını sağlarsınız.',
      },
      {
        baslik: 'Yurt Dışı Öncesi',
        aciklama:
          'Görev, eğitim veya aile ziyareti için ülke dışındaysanız evinizi boşaltmak zorunda kalabilirsiniz. Kişisel eşya 3–12 ay sigortalı ünitede bekler.',
      },
      {
        baslik: 'Askere Gitmeden Önce',
        aciklama:
          'Kışla döneminde ev kiralıktan çıkıyorsa koliler ve küçük ev aletleri aile yanında yer kaplamaz; dönüşte aynı envanterle teslim alınır.',
      },
    ],
    fiyatAraligi: "Aylık 750 TL'den başlayan fiyatlarla",
    sss: [
      {
        soru: 'Kişisel eşya depolama en az kaç ay kiralanır?',
        cevap:
          'Minimum süre 1 aydır. 3, 6 ve 12 aylık paketlerde birim fiyat düşer. Süre bitmeden uzatma talebi yazılı olarak alınır.',
      },
      {
        soru: 'Depoya kendi aracımla eşya bırakabilir miyim?',
        cevap:
          "Evet. Randevu saatinde Sarıçam OSB'deki tesise gelebilirsiniz. İsterseniz paketleme ve taşıma ekibimiz evinizden teslim alır.",
      },
      {
        soru: 'Eşyama ne zaman erişebilirim?',
        cevap:
          'Mesai saatlerinde randevulu erişim vardır. Acil durumlarda güvenlik kaydı tutularak aynı gün ziyaret planlanabilir.',
      },
      {
        soru: 'Hangi eşyalar kabul edilmez?',
        cevap:
          'Yanıcı madde, canlı, bozulabilir gıda, yasa dışı ürün ve açık sıvı kimyasal kabul edilmez. Beyaz eşya boş ve kuru teslim edilmelidir.',
      },
      {
        soru: 'Sigorta zorunlu mu?',
        cevap:
          'Zorunlu değildir; tesis kamera, alarm ve yangın önlemi sunar. Yüksek değerli elektronik ve antika için ayrı sigorta önerilir.',
      },
      {
        soru: 'Erken boşaltırsam ücret iade edilir mi?',
        cevap:
          'Kullanılmayan tam aylar, sözleşmedeki ihbar süresine göre mahsup edilir. Kısmi ay kuralı teklif formunda yazılıdır.',
      },
    ],
  },
  {
    slug: 'mobilya-depolama',
    name: 'Mobilya Depolama',
    shortName: 'Mobilya Depolama',
    icon: 'Armchair',
    metaTitle: 'Adana Mobilya Depolama | Sigortalı ve Güvenli Depo',
    metaDescription:
      "Adana'da koltuk, yatak ve dolap için sigortalı mobilya depolama. Nem kontrollü üniteler, battaniye ve taşıma. Ücretsiz keşif sizi bekliyor. 7/24 kamera izleme.",
    h1: 'Adana Mobilya Depolama — Nem Kontrollü Güvenli Depo',
    adHeadline: 'Adana Mobilya Depolama',
    seoHeadline: ' — Nem Kontrollü Güvenli Depo',
    ozet: 'Koltuk takımı, yatak, masa ve dolaplarınız Adana deposunda battaniyeli, nem kontrollü ve sigortalı ünitelerde dikey ve yatay olarak korunur.',
    icerik: [
      "Mobilya, koli eşyasından farklıdır: cila, kumaş ve menteşe nem, toz ve üst üste istifte bozulur. Adana'nın yaz nemi bodrum ve açık garajı riskli kılar. Sarıçam OSB'deki mobilya koridorlarında parçalar battaniye ve köşe koruyucu ile ayrılır; koltuk kolunun üzerine dolap basılmaz.",
      'Ücretsiz keşifte kapı genişliği, asansör kabini ve merdiven dönüşü ölçülür. Sökülebilir yatak başlığı, masa ayağı ve dolap kapağı numaralanır; kurulum notu teslim dosyasına eklenir. Taşıma ekibi site yasak saatlerine göre yükler.',
      'Kısa tadilat deposu ile uzun kiralık dönem aynı standarttadır. Deri koltuk ve masif masa iklimlendirilmiş alanda durur. Teslimde fotoğraflı envanter ile hasar kaydı tutulur; iade gününde aynı açıdan kontrol edilir.',
      'Çukurova ve Seyhan sitelerindeki dar asansörler için küçük kamyonet ve kayışlı indirme planlanır. İsterseniz yalnızca depolama, isterseniz paketleme + taşıma + yerleştirme tek faturada birleşir.',
    ],
    ozellikler: [
      'Battaniye, köşe koruyucu ve dikey istif düzeni',
      'Nem kontrollü, iklimlendirilmiş koridorlar',
      'Söküm, numaralama ve yeniden kurulum notu',
      '7/24 kamera, alarm ve yangın önlemi',
      'Fotoğraflı hasar envanteri',
      'Site asansörüne uygun araç seçimi',
      'Opsiyonel sigorta ve taşıma',
      'Kısa tadilat veya uzun dönem kiralama',
    ],
    senaryolar: [
      {
        baslik: 'Yeni Ev Teslimi Gecikince',
        aciklama:
          'Mobilya mağazadan geldi, ev boyası bitmedi. Kolileri salona yığmak yerine depoya alıp teslim gününde tek seferde yerleştirirsiniz.',
      },
      {
        baslik: 'Koltuk ve Yatak Yenilenirken',
        aciklama:
          'Eski takımı satana veya bağışlayana kadar saklamak istersiniz. İkinci el teslimine kadar sigortalı ünitede bekler.',
      },
      {
        baslik: 'Ofisten Eve Dönüş',
        aciklama:
          'Şirket mobilyasını evde tutmak istemezsiniz. Toplantı masası ve koltuklar ayrı koridorda, ev eşyasından ayrı durur.',
      },
      {
        baslik: 'Villada Sezonluk Kullanım',
        aciklama:
          'Yazlık veya yayla evindeki bahçe ve salon mobilyası kışın tuz ve neme kalmaz; sezon açılışında aynı listeyle iner.',
      },
    ],
    fiyatAraligi: "Aylık 1.200 TL'den başlayan fiyatlarla",
    sss: [
      {
        soru: 'Mobilyalar sökülmeden depolanır mı?',
        cevap:
          'Kapı ve asansör uygunsa sökülmeden taşınır. Aksi halde numaralı söküm yapılır; vidalar poşetlenip parçaya bağlanır.',
      },
      {
        soru: 'Deri koltuk çatlar mı?',
        cevap:
          'İklimlendirilmiş koridorda ani nem değişimi azaltılır. Yine de üretici bakım tavsiyesi (nemlendirici vs.) sizin sorumluluğunuzdadır.',
      },
      {
        soru: 'Yatak dikey konulur mu?',
        cevap:
          'Yaylı yataklar mümkün olduğunca yatay ve kuru zeminden yüksekte durur. Kılıf ve nem alıcı istek üzerine eklenir.',
      },
      {
        soru: 'Hasar çıkarsa ne olur?',
        cevap:
          'Teslim fotoğrafları esas alınır. Taşıma veya depolama kaynaklı hasar, seçtiğiniz sigorta ve tutanak kapsamında değerlendirilir.',
      },
      {
        soru: 'Beyaz eşya da mobilya fiyatına dahil mi?',
        cevap:
          'Buzdolabı, çamaşır makinesi ayrı hacim ve boşaltma kuralına tabidir. Teklifte mobilya ve beyaz eşya kalemleri ayrılır.',
      },
      {
        soru: 'Depodan tek parça alabilir miyim?',
        cevap:
          'Randevu ile tek parça çıkış mümkündür. Koridor güvenliği için eşlik eden personel bulunur; ek işçilik ücreti teklifte yazılır.',
      },
    ],
  },
  {
    slug: 'kurumsal-arsiv-depolama',
    name: 'Kurumsal Arşiv Depolama',
    shortName: 'Kurumsal Arşiv',
    icon: 'FolderArchive',
    metaTitle: 'Adana Kurumsal Arşiv Depolama | Güvenli Belge Deposu',
    metaDescription:
      "Adana'da şirket evrak ve arşiv kutuları için 7/24 güvenlikli depolama. Raf, etiket ve iade prosedürü. KVKK uyumlu teslim ve erişim kaydı Sarıçam OSB'de.",
    h1: 'Adana Kurumsal Arşiv — Güvenli Belge ve Kutu Deposu',
    adHeadline: 'Adana Kurumsal Arşiv',
    seoHeadline: ' — Güvenli Belge ve Kutu Deposu',
    ozet: "Muhasebe, hukuk ve insan kaynakları arşivini ofis dışına alın; Adana'da raf sistemli, erişim kayıtlı ve kamera izlemeli kurumsal depolama.",
    icerik: [
      'Ofis kirasının metrekare maliyeti arşiv odasını pahalı bir depo haline getirir. Adana’daki şirketler 10 yıllık fatura, sözleşme ve personel dosyasını Sarıçam OSB’de paletli veya raflı kutularda tutar. Her kutu barkod/etiket alır; oda planı teslim dosyasına işlenir.',
      'Erişim yetkili kişi listesine bağlıdır. Tesisten kutu çıkışı tutanak ve kamera kaydıyla yapılır; iade aynı kodla rafa döner. Yangın söndürme, su baskını eşiği ve 7/24 alarm ticari arşiv standardındadır.',
      'KVKK ve saklama süreleri sizin iç yönergenize aittir; biz fiziksel güvenlik, izlenebilirlik ve teslim zinciri sağlar. İmha talebi yazılı olur, tutanakla imha veya size iade edilir. Dijital medya (HDD, yedek kaset) ayrı nem kontrollü dolapta durabilir.',
      'Çukurova ve Seyhan ofislerinden periyodik kutu seferi planlanır. Yoğun dönem (vergi, denetim) öncesi acil kutu çağırma aynı gün veya ertesi iş günü hedeflenir.',
    ],
    ozellikler: [
      'Barkod/etiketli kutu ve raf yerleşim planı',
      'Yetkili kişi listesi ve erişim tutanağı',
      '7/24 kamera, alarm ve yangın önlemi',
      'Periyodik ofis–depo kutu seferi',
      'Denetim dönemine acil kutu çağırma',
      'Yazılı imha veya iade prosedürü',
      'HDD ve yedek medya için ayrı dolap',
      'Sözleşmeli ticari faturalandırma',
    ],
    senaryolar: [
      {
        baslik: 'Ofis Küçültme',
        aciklama:
          'Hibrit çalışma sonrası arşiv odasını kapatırsınız. 5–10 yıllık evrak raflı depoya geçer, aktif dosyalar ofiste kalır.',
      },
      {
        baslik: 'Denetim ve Vergi Dönemi',
        aciklama:
          'Müfettiş veya yeminli mali müşavir belirli yıl kutularını ister. Kod listesinden kutu çağrılır, tutanakla teslim edilir.',
      },
      {
        baslik: 'Şube Taşınması',
        aciklama:
          'Yeni ofis hazır değilken evrak ve kırtasiye paleti geçici depoya alınır; açılışta etiket sırasına göre yerleştirilir.',
      },
      {
        baslik: 'Dava ve Saklama Süresi',
        aciklama:
          'Hukuk dosyaları yasal süre dolana kadar ofis dışında, erişim kısıtlı koridorda bekler; süre bitince imha tutanağı kesilir.',
      },
    ],
    fiyatAraligi: "Aylık 2.000 TL'den başlayan fiyatlarla",
    sss: [
      {
        soru: 'Kutu boyutları standart mı?',
        cevap:
          'Standart arşiv kutusu önerilir; palet ve evrak klasörü de kabul edilir. Ölçü dışı koli için ek hacim ücreti çıkar.',
      },
      {
        soru: 'Çalışanım depoya tek başına girebilir mi?',
        cevap:
          'Yalnızca sözleşmede yetkili kayıtlı kişiler, kimlik ile randevulu girer. Refakatsiz dolaşım yoktur.',
      },
      {
        soru: 'KVKK uyumu kimin sorumluluğunda?',
        cevap:
          'Veri sorumlusu müşteridir. Tesis fiziksel güvenlik, kayıt ve yetkisiz erişimi engelleme sağlar; hukuki sınıflandırma size aittir.',
      },
      {
        soru: 'Yangın ve su hasarına karşı ne var?',
        cevap:
          'Alarm, söndürme ekipmanı ve zemin kotu önlemi vardır. Ek poliçe ticari eşya sigortası olarak ayrıca teklif edilir.',
      },
      {
        soru: 'Elektronik arşiv (sunucu) kabul eder misiniz?',
        cevap:
          'Çalışır sunucu salonu işletmiyoruz. Kapalı kutu HDD, kaset ve yedek disk nem kontrollü dolapta saklanabilir.',
      },
      {
        soru: 'Fatura nasıl kesilir?',
        cevap:
          'Aylık kira + kutu/palet adedi + sefer ücreti ticari fatura ile kesilir. Sözleşme ekinde birim fiyat listesi bulunur.',
      },
    ],
  },
  {
    slug: 'e-ticaret-stok-depolama',
    name: 'E-ticaret Stok Depolama',
    shortName: 'E-ticaret Stoğu',
    icon: 'Boxes',
    metaTitle: 'Adana E-ticaret Stok Depolama | Paletli Güvenli Depo',
    metaDescription:
      "Adana'da e-ticaret palet ve koli stoğu için 7/24 güvenlikli depolama. SKU etiket, forklift ve esnek hacim. Ücretsiz keşif ve net fiyat Sarıçam OSB'de.",
    h1: 'Adana E-ticaret Deposu — Paletli Stok ve Koli Alanı',
    adHeadline: 'Adana E-ticaret Deposu',
    seoHeadline: ' — Paletli Stok ve Koli Alanı',
    ozet: "Trendyol, Hepsiburada veya kendi siteniz için Adana'da paletli stok, koli ve iade ürünlerini kamera izlemeli depoda esnek hacimle saklayın.",
    icerik: [
      'Küçük ve orta e-ticaret işletmeleri tam kapsamlı 3PL’ye geçmeden önce palet ve sezon stoğunu güvenli bir adreste tutmak ister. Sarıçam OSB konumu kargo şubelerine ve şehir içi kuryeye yakındır. SKU veya parti koduyla palet yerleri planlanır; karışık koli ayrı koridorda durur.',
      'Forklift ve transpalet ile indirme yapılır. Yanıcı, bozulur gıda ve açık kimyasal kabul edilmez; tekstil, ev, kırtasiye ve ambalajlı tüketim ürünleri uygundur. 7/24 kamera ve alarm, gece teslimat penceresini de kapsar.',
      'Sezon kampanyası öncesi hacim büyütülür, sonrasında küçültülür. İade ürün paleti “karantina” alanında ayrılabilir. Tam fulfillment (tek tek sipariş toplama) bu paketin zorunlu parçası değildir; stok parkı ve toplu sevkiyat odaklıdır.',
      'Ücretsiz keşifte palet adedi, istif yüksekliği ve kargo araç tipi netleşir. Aylık m² veya palet başı fiyat, sözleşme ekinde yazılır. Çukurova ve Ceyhan üreticilerinden düzenli sefer bağlanabilir.',
    ],
    ozellikler: [
      'Palet ve koli için ayrı koridor planı',
      'Forklift / transpalet ile indirme',
      'SKU veya parti kodu etiketleme',
      'Sezonluk hacim büyütme–küçültme',
      '7/24 kamera, alarm ve OSB konumu',
      'İade ürün karantina alanı (opsiyonel)',
      'Kargo aracına yükleme randevusu',
      'Palet başı veya m² bazlı fiyat',
    ],
    senaryolar: [
      {
        baslik: 'Kampanya Stoğu',
        aciklama:
          '11.11 veya bayram öncesi paletler ofise sığmaz. Depoda bekler, kargo günü toptan çıkar; kampanya bitince hacim düşer.',
      },
      {
        baslik: 'Tedarikçi Erken Teslimi',
        aciklama:
          'Fabrika malı erken geldi, satış henüz açılmadı. Paletler fatura ve irsaliye ile depoya girer, satış günü kuryeye çıkar.',
      },
      {
        baslik: 'İade Yoğunluğu',
        aciklama:
          'Pazaryeri iadeleri evde birikmesin diye ayrı alanda toplanır; sayım sonrası tekrar stoğa veya imhaya ayrılır.',
      },
      {
        baslik: 'Çoklu Satış Kanalı',
        aciklama:
          'Site, pazaryeri ve toptan aynı SKU’yu paylaşır. Palet yer kodu ile kanal bazlı çıkış tutanağı tutulur.',
      },
    ],
    fiyatAraligi: "Aylık 1.500 TL'den başlayan fiyatlarla",
    sss: [
      {
        soru: 'Tek tek sipariş toplayıp kargolar mısınız?',
        cevap:
          'Bu paket stok parkı ve palet/koli sevkiyatı içindir. Tam pick & pack 3PL ayrıca teklif edilir, varsayılan hizmet değildir.',
      },
      {
        soru: 'Gıda ve kozmetik kabul eder misiniz?',
        cevap:
          'Kapalı, bozulmayan ve yasal etiketli ürünler değerlendirilir. Soğuk zincir ve açık numune kabul edilmez.',
      },
      {
        soru: 'Minimum palet adedi nedir?',
        cevap:
          'Tek paletten başlanabilir; birim fiyat adet arttıkça düşer. Küçük koli için m³ tarifesi uygulanır.',
      },
      {
        soru: 'Stok sayımı yapıyor musunuz?',
        cevap:
          'Giriş–çıkış tutanağı esastır. Periyodik sayım ek hizmettir ve iş günü bazlı ücretlendirilir.',
      },
      {
        soru: 'Gece kamyon gelebilir mi?',
        cevap:
          'Önceden randevu ve OSB giriş kurallarıyla sınırlı gece indirme planlanabilir. Güvenlik kaydı tutulur.',
      },
      {
        soru: 'Hasarlı palet kimin sorumluluğu?',
        cevap:
          'Giriş fotoğrafı ve irsaliye esas alınır. Taşıma hasarı taşıyıcıya, depo içi hasar tutanak ve sigorta kapsamına göre işlenir.',
      },
    ],
  },
  {
    slug: 'ogrenci-esya-depolama',
    name: 'Öğrenci Eşya Depolama',
    shortName: 'Öğrenci Depolama',
    icon: 'GraduationCap',
    metaTitle: 'Adana Öğrenci Eşya Depolama | Dönem Arası Güvenli Depo',
    metaDescription:
      "Adana'da yaz tatili ve dönem arası öğrenci eşya depolama. Valiz, koli ve küçük ev aleti için 7/24 güvenli depo. Uygun fiyatlı kısa dönem paketleri alın.",
    h1: 'Adana Öğrenci Depolama — Dönem Arası Güvenli Depo',
    adHeadline: 'Adana Öğrenci Depolama',
    seoHeadline: ' — Dönem Arası Güvenli Depo',
    ozet: 'Çukurova Üniversitesi ve yurt çevresindeki öğrenciler yazın odayı boşaltır; valiz, koli ve küçük ev aletleri Adana deposunda uygun fiyata bekler.',
    icerik: [
      'Dönem bitince yurt veya stüdyo teslimi çoğu öğrenciyi eşyayı memlekete kargolama veya sokağa bırakma ikilemine sokar. Balcalı, Çukurova ve Seyhan hattındaki öğrenciler için Sarıçam OSB’de küçük m³ üniteleri yaz tatiline göre fiyatlanır. Valiz, koli, lamba ve mini fırın etiketlenir.',
      'Teslimat kampüs veya yurt kapısından randevulu alınabilir; öğrenci kimliği ve iletişim bilgisi kayda geçer. 7/24 kamera ve alarm standardı kişisel depolama ile aynıdır. Yanıcı tüp, bozulur gıda ve yasa dışı madde kabul edilmez.',
      'Haziran–Eylül yaz paketi en sık tercih edilen süredir. Güz döneminde aynı gün iade hedeflenir; uzatma SMS/telefon ile yapılır. Oda arkadaşı adına teslim için yazılı yetki istenir.',
      'Bütçe dostu tarife, aile evine kargo maliyetinden çoğu zaman düşüktür. İsteğe bağlı streç ve koli satışı tesiste vardır; paketlemeyi kendiniz de yapabilirsiniz.',
    ],
    ozellikler: [
      'Yaz ve dönem arası kısa kiralama paketleri',
      'Valiz ve koli odaklı küçük m³ üniteler',
      'Kampüs / yurt kapısından randevulu alım',
      '7/24 kamera ve alarm',
      'Öğrenci kimliği ile kayıt',
      'Uygun fiyatlı tarife',
      'Yazılı yetki ile üçüncü kişi teslimi',
      'İsteğe bağlı koli ve streç satışı',
    ],
    senaryolar: [
      {
        baslik: 'Yaz Tatili',
        aciklama:
          'Yurt 15 Haziran’da kapanır, Eylül’de açılır. Valiz ve koliler yaz boyu depoda kalır; kayıt haftasında geri alınır.',
      },
      {
        baslik: 'Staj veya Erasmus',
        aciklama:
          'Bir dönem şehir dışındasınızdır. Mini fırın ve kışlıklar Adana’da bekler, dönüşte kargo derdi olmaz.',
      },
      {
        baslik: 'Oda Değiştirme',
        aciklama:
          'Yeni yurt veya ev birkaç gün sonra teslim. Eşya koridorda bekletilmez, kısa ünitede durur.',
      },
      {
        baslik: 'Mezuniyet Sonrası',
        aciklama:
          'İş ararken Adana’da kalmayacaksınız. Ev eşyasını 1–3 ay depoya alıp işe yerleşince memlekete veya yeni şehre taşırsınız.',
      },
    ],
    fiyatAraligi: "Aylık 500 TL'den başlayan fiyatlarla",
    sss: [
      {
        soru: 'Öğrenci indirimi nasıl uygulanır?',
        cevap:
          'Güncel öğrenci belgesi veya yurt kartı kayıtta gösterilir. Yaz paketi fiyatı teklifte ayrıca belirtilir.',
      },
      {
        soru: 'En küçük ünite ne kadar tutar?',
        cevap:
          'Birkaç valiz ve koli için 1–2 m³ yeterlidir. Aylık taban fiyat 500 TL’den başlar; hacim artınca birim düşer.',
      },
      {
        soru: 'Arkadaşım benim yerime teslim alabilir mi?',
        cevap:
          'Islak imzalı yetki ve T.C. kimlik fotokopisi ile üçüncü kişi teslimi yapılır. Sözlü talimat yeterli değildir.',
      },
      {
        soru: 'Buzdolabı ve çamaşır makinesi kabul mü?',
        cevap:
          'Boşaltılmış, kuru ve sızıntısız küçük ev aletleri kabul edilir. Büyük beyaz eşya öğrenci tarifesi dışındadır.',
      },
      {
        soru: 'Yaz paketini Ekim’e uzatabilir miyim?',
        cevap:
          'Evet. Uzatma, müsait ünite varsa günlük/aylık tarifeyle eklenir. Erken haber vermek yer garantisi sağlar.',
      },
      {
        soru: 'Ödeme taksitlenir mi?',
        cevap:
          'Yaz paketi peşin veya iki taksit (teslim ve iade) olarak alınabilir. Kredi kartı ve havale geçerlidir.',
      },
    ],
  },
];

export function getHizmetBySlug(slug: string): Hizmet | undefined {
  return hizmetler.find((hizmet) => hizmet.slug === slug);
}

export function getHizmetPath(slug: string): string {
  return `/hizmetler/${slug}`;
}

export function getRelatedHizmetler(excludeSlug?: string, count = 4): Hizmet[] {
  return hizmetler.filter((hizmet) => hizmet.slug !== excludeSlug).slice(0, count);
}
