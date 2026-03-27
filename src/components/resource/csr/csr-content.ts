/**
 * csr-content.ts
 *
 * CSR Oluşturma Rehberi sayfasının (CsrRehberiPage) içerik verilerini tutar.
 * UI bileşenlerinden bağımsız olarak tablo alanları, sekme tanımları,
 * adım listeleri ve sidebar bilgilerini tek bir yerde düzenlemeyi kolaylaştırır.
 *
 * İçerik değişikliği gerektiğinde yalnızca bu dosyayı düzenlemek yeterlidir;
 * CsrRehberiPage.tsx'e dokunmaya gerek kalmaz.
 /

CSR alanları tablosu — "CSR'da Hangi Bilgiler Yer Alır?" bölümünde kullanılır
// Icon referansları string olarak tutulur; bileşen tarafında ICONS nesnesine
// çevrilir (UI katmanı ile veri katmanını ayırt etmek için).
*/ 
export const CSR_FIELDS = [
  {
    iconKey: "globe" as const,
    field: "Common Name (CN)",
    desc: "SSL korunacak domain adı.",
    example: "www.siteniz.com",
    required: true,
  },
  {
    iconKey: "building" as const,
    field: "Organization (O)",
    desc: "Şirket veya kurumun tam yasal adı.",
    example: "LSG Teknoloji A.Ş.",
    required: true,
  },
  {
    iconKey: "hash" as const,
    field: "Organizational Unit (OU)",
    desc: "Departman veya birim adı.",
    example: "Bilgi İşlem",
    required: false,
  },
  {
    iconKey: "mapPin" as const,
    field: "City / Locality (L)",
    desc: "Kuruluşun bulunduğu şehir.",
    example: "İstanbul",
    required: true,
  },
  {
    iconKey: "mapPin" as const,
    field: "State / Province (ST)",
    desc: "Kuruluşun bulunduğu il veya bölge.",
    example: "İstanbul",
    required: true,
  },
  {
    iconKey: "globe" as const,
    field: "Country (C)",
    desc: "ISO 3166-1 alpha-2 ülke kodu (2 harf).",
    example: "TR",
    required: true,
  },
  {
    iconKey: "shieldCheck" as const,
    field: "Key Size",
    desc: "Şifreleme gücü. Minimum 2048 bit tavsiye edilir.",
    example: "2048 veya 4096 bit",
    required: true,
  },
];


export const SERVER_TABS = [
  { id: "openssl", label: "Linux" },
  { id: "macos", label: "macOS" },
  { id: "iis", label: "Windows (IIS)" },
  { id: "cpanel", label: "cPanel" },
  { id: "plesk", label: "Plesk" },
];

export const PANEL_STEPS: Record<string, string[]> = {
  cpanel: [
    "cPanel hesabınıza giriş yapın.",
    '"Güvenlik" → "SSL/TLS" seçeneğine tıklayın.',
    '"Sertifika İmzalama Talepleri (CSR)" bölümüne gidin.',
    '"Yeni bir CSR Oluştur" butonuna tıklayın.',
    "Domain, şirket ve konum bilgilerini doldurun.",
    '"Oluştur"a tıklayın ve CSR kodunu kopyalayın.',
  ],
  iis: [
    'IIS Manager\'ı açın → sunucu adını seçin → "Sunucu Sertifikaları".',
    '"Sertifika İsteği Oluştur..." bağlantısına tıklayın.',
    "CN, O, OU, L, ST, C bilgilerini doldurun.",
    "Anahtar bit uzunluğunu 2048 veya üstü seçin.",
    'Dosya konumunu belirtin ve "Son"a basın.',
    "Oluşturulan .txt dosyasını metin editörüyle açıp kopyalayın.",
  ],
  plesk: [
    "Plesk Paneli'ne giriş yapın → ilgili domain'i seçin.",
    '"SSL/TLS Sertifikaları" → "Sertifika Ekle"ye tıklayın.',
    "Organizasyon ve domain bilgilerini doldurun.",
    '"CSR ve Özel Anahtar Oluştur"a tıklayın.',
    "Oluşturulan CSR'ı kopyalayıp bize gönderin.",
  ],
};

// ---------------------------------------------------------------------------
// Sık yapılan hatalar listesi
// ---------------------------------------------------------------------------
export const COMMON_ERRORS = [
  {
    title: "Özel anahtarın kaybolması",
    desc: "CSR ile üretilen .key dosyası silinirse sertifika yüklenemez. Her zaman yedeğini alın.",
  },
  {
    title: "Yanlış Common Name",
    desc: "'www' ile erişilecekse 'www.siteniz.com' yazın. Her iki versiyonda çalışması için SAN sertifikası tercih edin.",
  },
  {
    title: "Kısa anahtar uzunluğu",
    desc: "1024 bit güvensizdir. Minimum 2048, mümkünse 4096 bit seçin.",
  },
  {
    title: "Organizasyon adının kısaltılması",
    desc: "OV/EV sertifikalar için ticaret sicilindeki tam yasal ad ile birebir eşleşmeli.",
  },
  {
    title: "CSR'ın eksik kopyalanması",
    desc: "BEGIN ve END satırları dahil tüm blok kopyalanmalı. Boş satır eklenmesi hataya neden olur.",
  },
];

// ---------------------------------------------------------------------------
// Sağ kenar çubuğu (sidebar) verileri — ResourcePageLayout'a aktarılır
// ---------------------------------------------------------------------------
export const sidebarData = {
  cta: {
    title: "SSL Sertifikanızı Alın",
    description: "CSR'ınız hazır mı? Hemen sertifika başvurunuzu tamamlayın.",
    buttonLabel: "Sertifikaları İncele",
    buttonHref: "/ssl",
    badge: "Anında Aktivasyon",
  },
  relatedLinks: [
    {
      heading: "İlgili Konular",
      links: [
        { label: "SSL Nedir?", href: "/kaynaklar/ssl-nedir" },
        { label: "DV / OV / EV Farkları", href: "/kaynaklar/dv-ov-ev-farklari" },
        { label: "Sertifika Kurulum Rehberi", href: "/destek/kurulum" },
        { label: "Sık Sorulan Sorular", href: "/kaynaklar/sss" },
      ],
    },
  ],
  highlightBox: {
    icon: "keyRound" as const,
    title: "Özel Anahtarı Kaybetmeyin",
    description:
      "CSR oluştururken üretilen .key dosyasını güvenli tutun. Bu dosya olmadan sertifikanızı yükleyemezsiniz.",
  },
};
