export const LEGAL_UPDATED_AT = '16 Eylül 2026';

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export const kvkkSections: LegalSection[] = [
  {
    heading: '1. Veri sorumlusu',
    paragraphs: [
      'Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında veri sorumlusu sıfatıyla Adana Eşya Depolama (“Şirket”) tarafından hazırlanmış bir taslaktır. Metin avukat onayı bekleyen yer tutucudur; yürürlükteki nihai metin noter veya hukuk müşaviri onayı sonrasında güncellenecektir.',
      'Veri sorumlusu unvanı: Adana Eşya Depolama. Tesis adresi: Sarıçam OSB Mah. 1. Cadde No:1, Sarıçam / Adana 01350. Elektronik posta: info@adanadepolama.com. Telefon: 0850 XXX XX XX.',
    ],
  },
  {
    heading: '2. İşlenen kişisel veriler',
    paragraphs: [
      'Hizmet talebi, keşif, sözleşme, fatura, teslimat ve müşteri ilişkileri süreçlerinde kimlik (ad soyad), iletişim (telefon, e-posta, adres), işlem güvenliği (IP, çerez kimlikleri), müşteri işlem (depo hacmi, ilçe, hizmet türü, mesaj içeriği), finans (fatura ve ödeme kayıtları) ve fiziksel mekân güvenliği (tesis kamera görüntüleri) kategorilerindeki veriler işlenebilir.',
      'Özel nitelikli kişisel veri talep edilmez. Formlarda sağlık, sendika, din veya benzeri veri alanları yer almaz. Yanlışlıkla iletilen özel nitelikli veri silinir veya anonimleştirilir.',
    ],
  },
  {
    heading: '3. Toplama yöntemi ve hukuki sebep',
    paragraphs: [
      'Veriler web sitesi formları, telefon, WhatsApp, e-posta, yüz yüze keşif, sözleşme evrakı, kamera sistemleri ve çerezler aracılığıyla otomatik veya otomatik olmayan yollarla toplanır.',
      'Hukuki sebepler KVKK m.5 kapsamında; sözleşmenin kurulması ve ifası, hukuki yükümlülüğün yerine getirilmesi, meşru menfaat ve açık rıza (pazarlama iletişimi ve isteğe bağlı çerezler) olabilir. Zorunlu çerezler ve tesis güvenliği kamerası meşru menfaat ve hukuki yükümlülük çerçevesinde değerlendirilir.',
    ],
  },
  {
    heading: '4. İşleme amaçları',
    paragraphs: [
      'Amaçlar: teklif ve keşif planlamak, depolama sözleşmesini kurmak ve ifa etmek, ünite erişimi ve yetkili listesini yönetmek, fatura kesmek, müşteri taleplerine cevap vermek, tesis güvenliğini sağlamak, yasal saklama yükümlülüklerini yerine getirmek, site performansını ölçmek ve (rıza varsa) ticari elektronik ileti göndermektir.',
      'Google Analytics 4, Google Ads dönüşüm ölçümü ve Vercel Analytics / Speed Insights ancak ilgili çerez veya ölçüm aracının yasal dayanağı oluştuğunda kullanılır. Ayrıntı Çerez Politikası’ndadır.',
    ],
  },
  {
    heading: '5. Aktarım',
    paragraphs: [
      'Veriler, hizmetin ifası için barındırma, e-posta, muhasebe, sigorta, kargo/taşıma ve hukuk danışmanlığı sağlayıcılarına; yasal zorunluluk halinde yetkili kamu kurumlarına aktarılabilir. Yurt dışı aktarım yalnızca KVKK’daki aktarım şartları sağlandığında yapılır. Google ve Vercel altyapıları yurt dışı sunucu içerebilir; bu durumda açık rıza veya standart sözleşme maddeleri gibi uygun hukuki mekanizma aranır.',
    ],
  },
  {
    heading: '6. Saklama süresi',
    paragraphs: [
      'Sözleşme ve fatura kayıtları vergi ve ticari mevzuattaki asgari süreler boyunca; iletişim kayıtları talebin sonuçlanmasına ve zamanaşımına kadar; kamera kayıtları tesis güvenlik politikasındaki süreyle; çerezler tarayıcı ayarlarınıza ve Çerez Politikası’ndaki ömüre göre saklanır. Süre bitiminde veri silinir, yok edilir veya anonimleştirilir.',
    ],
  },
  {
    heading: '7. Haklarınız (KVKK m.11)',
    paragraphs: [
      'Kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, KVKK m.7 çerçevesinde silinmesini veya yok edilmesini isteme, bu işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme, münhasıran otomatik sistemlerle analiz edilmesi nedeniyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme ve kanuna aykırı işleme nedeniyle zararın giderilmesini talep etme haklarına sahipsiniz.',
    ],
  },
  {
    heading: '8. Başvuru usulü',
    paragraphs: [
      'Başvurularınızı yazılı olarak tesis adresine, info@adanadepolama.com adresine veya KVKK ve Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ’deki diğer yöntemlerle iletebilirsiniz. Kimlik teyidi için gerekli bilgileri ekleyiniz. Başvurular kural olarak 30 gün içinde sonuçlandırılır. Ücretsizdir; işlemin ayrıca bir maliyet gerektirmesi halinde tebliğdeki tarife uygulanabilir.',
      'Şikâyet hakkınız saklıdır: Kişisel Verileri Koruma Kurulu, www.kvkk.gov.tr.',
    ],
  },
];

export const gizlilikSections: LegalSection[] = [
  {
    heading: '1. Politikanın kapsamı',
    paragraphs: [
      'Bu Gizlilik Politikası, adanadepolama.com alan adı ve bağlı alt sayfalar üzerinden toplanan kişisel veriler ile çevrimdışı (telefon, keşif, sözleşme) kanallarda toplanan müşteri verilerinin nasıl korunduğunu açıklar. Metin hukuki yer tutucudur; KVKK Aydınlatma Metni ile birlikte okunmalıdır.',
      'Siteyi kullanarak burada özetlenen işleme faaliyetlerinden haberdar olduğunuzu kabul edersiniz. Rıza gerektiren işlemler ayrıca onay kutusu veya çerez paneli ile toplanır.',
    ],
  },
  {
    heading: '2. Topladığımız bilgiler',
    paragraphs: [
      'Doğrudan verdiğiniz bilgiler: ad soyad, telefon, e-posta, ilçe, hizmet türü, depo hacmi, mesaj metni ve KVKK onay kaydı. Otomatik toplanan bilgiler: IP adresi, tarayıcı türü, cihaz, ziyaret edilen sayfalar, yönlendiren URL, oturum süresi ve çerez kimlikleri.',
      'Tesis kamerası görüntüleri fiziksel güvenlik içindir; web sitesi üzerinden canlı yayın yapılmaz. Ödeme kartı verisi sitede saklanmaz; tahsilat yüz yüze, havale/EFT veya ileride eklenecek PCI uyumlu sağlayıcı üzerinden yürür.',
    ],
  },
  {
    heading: '3. Bilgilerin kullanımı',
    paragraphs: [
      'Bilgiler teklif hazırlamak, keşif randevusu planlamak, sözleşmeyi ifa etmek, fatura kesmek, destek taleplerini yanıtlamak, dolandırıcılığı önlemek, yasal yükümlülükleri yerine getirmek ve (açık rıza varsa) kampanya iletmek için kullanılır.',
      'İstatistiksel raporlar mümkün olduğunca toplu ve kimliksiz üretilir. Google Analytics 4 ve Vercel Analytics sayfa görüntüleme ve Core Web Vitals ölçümü için yapılandırılabilir.',
    ],
  },
  {
    heading: '4. Paylaşım ve üçüncü taraflar',
    paragraphs: [
      'Hizmetin ifası için barındırma (Vercel), analiz (Google, Vercel), reklam ölçümü (Google Ads), e-posta, muhasebe, sigorta ve lojistik iş ortaklarıyla sınırlı paylaşım yapılabilir. Bu taraflar veriyi yalnızca talimatımız ve kendi gizlilik taahhütleri çerçevesinde işler.',
      'Yasal zorunluluk, mahkeme kararı veya meşru hakkın korunması halinde kamu kurumlarıyla paylaşım yapılabilir. Verilerinizi satmayız.',
    ],
  },
  {
    heading: '5. Saklama ve güvenlik',
    paragraphs: [
      'Teknik ve idari tedbirler: HTTPS, erişim yetkilendirme, yedekleme, kamera ve kontrollü tesis girişi, personel gizlilik taahhüdü. Hiçbir yöntem %100 güvenlik vaat etmez; ihlal şüphesinde yasal bildirim süreçleri işletilir.',
      'Saklama süreleri KVKK Aydınlatma Metni ve ilgili mevzuattaki asgari sürelerle sınırlıdır. Süre sonunda silme, yok etme veya anonimleştirme uygulanır.',
    ],
  },
  {
    heading: '6. Çocuklar',
    paragraphs: [
      'Hizmetler 18 yaşından küçükler için tasarlanmamıştır. 18 yaş altı kişilere ait veri bilerek toplanmaz. Yanlışlıkla iletilmesi halinde silinmesini info@adanadepolama.com üzerinden talep ediniz.',
    ],
  },
  {
    heading: '7. Haklar ve iletişim',
    paragraphs: [
      'KVKK m.11 haklarınız ve başvuru usulü KVKK Aydınlatma Metni’ndedir. Gizlilik talepleriniz için info@adanadepolama.com ve Sarıçam OSB Mah. 1. Cadde No:1, Sarıçam / Adana 01350 adreslerini kullanabilirsiniz.',
    ],
  },
  {
    heading: '8. Değişiklikler',
    paragraphs: [
      'Politika, mevzuat veya iş süreçlerindeki değişikliklerle güncellenebilir. Yayım tarihi “Son güncelleme” satırında belirtilir. Önemli değişikliklerde sitede duyuru veya e-posta ile bilgilendirme yapılabilir.',
    ],
  },
];

export const cerezSections: LegalSection[] = [
  {
    heading: '1. Çerez nedir?',
    paragraphs: [
      'Çerezler, tarayıcınızda saklanan küçük metin dosyalarıdır. Oturum çerezleri tarayıcı kapanınca silinir; kalıcı çerezler belirlenen süre boyunca durur. Piksel, yerel depolama ve benzeri teknolojiler de bu politikadaki “çerez” kapsamına girer. Bu metin hukuki yer tutucudur.',
    ],
  },
  {
    heading: '2. Kullandığımız çerez türleri',
    paragraphs: [
      'Zorunlu çerezler: sitenin güvenli çalışması, formun gönderilmesi, tercihlerin hatırlanması ve yük dengeleme için gereklidir. Rıza aranmaz.',
      'Performans / analitik çerezler: Vercel Analytics, Vercel Speed Insights ve Google Analytics 4 sayfa görüntüleme, hata ve Core Web Vitals ölçümü için kullanılabilir. Bunlar rıza veya meşru menfaat değerlendirmenize göre etkinleştirilir.',
      'Pazarlama çerezleri: Google Ads dönüşüm ve yeniden pazarlama etiketleri (AW- kimliği) tıklama ve form gönderimini ölçmek için kullanılabilir. Bu çerezler açık rıza olmadan reklam profili oluşturmak için kullanılmamalıdır.',
    ],
  },
  {
    heading: '3. Üçüncü taraf çerezleri',
    paragraphs: [
      'Google Ireland Limited / Google LLC (Analytics, Ads, Tag Manager altyapısı) ve Vercel Inc. (Analytics, Speed Insights) tarayıcınıza kendi çerezlerini veya benzer tanımlayıcıları yerleştirebilir. Bu sağlayıcıların gizlilik politikaları kendi sitelerinde yayımlanır.',
      'Yerleşik harita (Google Maps) iletişim sayfasında iframe olarak yüklenirse Google çerezleri devreye girebilir. Harita, sayfa etkileşiminden sonra veya rıza sonrası yüklenecek şekilde yapılandırılabilir.',
    ],
  },
  {
    heading: '4. Saklama süreleri',
    paragraphs: [
      'Zorunlu oturum çerezleri tarayıcı oturumuyla sınırlıdır. Analitik ve reklam çerezlerinin ömrü sağlayıcı varsayılanına (ör. 1–24 ay) göre değişir. Kesin süreler çerez yönetim tablosu eklendiğinde bu sayfada listelenecektir. Placeholder: _ga (en fazla 24 ay), _gid (24 saat), Ads dönüşüm çerezleri (kampanya ayarına göre).',
    ],
  },
  {
    heading: '5. Çerezleri yönetme',
    paragraphs: [
      'Tarayıcı ayarlarından çerezleri silebilir, engelleyebilir veya yalnızca birinci taraf çerezlere izin verebilirsiniz. Engelleme bazı form ve oturum özelliklerini bozabilir.',
      'Chrome, Firefox, Safari ve Edge için çerez yönetimi ilgili tarayıcının yardım sayfalarındadır. Mobil cihazlarda uygulama izinleri de analitik SDK’larını etkiler; bu sitede yerli mobil uygulama yoktur.',
      'Çerez yönetim paneli (CMP) eklendiğinde tercihlerinizi bu sayfadaki düğmeden değiştirebileceksiniz. Panel gelene kadar tarayıcı ayarları geçerlidir.',
    ],
  },
  {
    heading: '6. Rıza ve geri alma',
    paragraphs: [
      'Zorunlu olmayan çerezler için açık rıza esas alınır. Rızanızı tarayıcı ayarları veya (eklendiğinde) çerez paneli ile geri alabilirsiniz. Geri alma, geri alma öncesi meşru işlenen ölçüm kayıtlarını geçmişe dönük silmez.',
    ],
  },
  {
    heading: '7. İletişim',
    paragraphs: [
      'Çerez ve izleme sorularınız için info@adanadepolama.com ve Sarıçam OSB Mah. 1. Cadde No:1, Sarıçam / Adana 01350 üzerinden bize ulaşın. Kişisel veri haklarınız KVKK Aydınlatma Metni’ndedir.',
    ],
  },
];

export const kullanimSections: LegalSection[] = [
  {
    heading: '1. Taraflar ve kabul',
    paragraphs: [
      'Bu Kullanım Koşulları, adanadepolama.com sitesini ziyaret eden veya form gönderen kullanıcı ile Adana Eşya Depolama arasındaki site kullanımına ilişkindir. Depolama hizmetinin kendisi ayrıca imzalanacak kira / saklama sözleşmesi ve keşif tutanağına tabidir. Bu sayfa hukuki yer tutucudur.',
      'Siteyi kullanarak koşulları okuduğunuzu kabul etmiş sayılırsınız. Kabul etmiyorsanız siteyi kullanmayı bırakın.',
    ],
  },
  {
    heading: '2. Hizmetin niteliği',
    paragraphs: [
      'Sitede sunulan fiyatlar örnektir; gerçek tutar hacim, süre, ilçe, kat/asansör, paketleme ve sigorta seçeneklerine göre keşif sonrası netleşir. “Hemen teklif al” formu bağlayıcı sipariş değildir; teklif niteliğindedir.',
      'Fiziksel depolama Sarıçam OSB Mah. 1. Cadde No:1 adresindeki tesiste, 7/24 kamera ve kontrollü giriş koşullarıyla yürütülür. Koridorlara refakatsiz giriş yoktur.',
    ],
  },
  {
    heading: '3. Kullanıcı yükümlülükleri',
    paragraphs: [
      'Formlarda doğru ve güncel bilgi vermek, başkası adına işlemde yetki belgesi sunmak, yasaklı eşya (yanıcı, patlayıcı, yasa dışı, bozulabilir gıda, canlı hayvan, nakit vb.) bırakmamak ve tesis kurallarına uymak yükümlülüğünüzdür.',
      'Siteyi tersine mühendislik, aşırı istek, zararlı yazılım veya sahte kimlikle kullanmak yasaktır. İhlalde erişim engellenebilir ve yasal yollara başvurulabilir.',
    ],
  },
  {
    heading: '4. Fikri mülkiyet',
    paragraphs: [
      'Metin, logo, fotoğraf, düzen ve yazılım Adana Eşya Depolama veya lisans verenlerine aittir. İzinsiz kopyalama, tarama (kötüye kullanımlı bot) ve ticari yeniden yayın yasaktır. Basın ve atıf amaçlı kısa alıntılar kaynak gösterilerek yapılabilir.',
    ],
  },
  {
    heading: '5. Sorumluluğun sınırlandırılması',
    paragraphs: [
      'Sitedeki içerik “olduğu gibi” sunulur. Keşif öncesi fiyat, stok ve müsaitlik bilgisi değişebilir. İnternet kesintisi, barındırma arızası veya üçüncü taraf harita/analiz kesintisinden doğan dolaylı zararlardan, kanunun emredici hükümleri saklı kalmak kaydıyla, sorumluluk kabul edilmez.',
      'Depolanan eşyaya ilişkin sorumluluk, imzalanacak saklama sözleşmesi, envanter tutanağı ve sigorta poliçesi kapsamıyla sınırlıdır. Bu web koşulları o sözleşmenin yerine geçmez.',
    ],
  },
  {
    heading: '6. Dış bağlantılar',
    paragraphs: [
      'WhatsApp, Google Haritalar, sosyal medya ve ödeme yönlendirmeleri üçüncü taraf siteleridir. Bu sitelerin içerik ve gizlilik uygulamalarından Şirket sorumlu değildir.',
    ],
  },
  {
    heading: '7. Değişiklik, fesih ve uygulanacak hukuk',
    paragraphs: [
      'Koşullar önceden duyuru ile güncellenebilir. “Son güncelleme” tarihi bağlayıcı yayım tarihidir. Site kullanımı Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda Adana mahkemeleri ve icra daireleri yetkilidir; tüketiciler için 6502 sayılı Kanun’daki haklar saklıdır.',
      'Şikâyet ve bildirimler info@adanadepolama.com, 0850 XXX XX XX ve Sarıçam OSB Mah. 1. Cadde No:1, Sarıçam / Adana 01350 adresine iletilir.',
    ],
  },
];
