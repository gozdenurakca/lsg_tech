/*
 * SSL Sertifika Kurulum Rehberi sayfasının (KurulumRehberiPage) içerik verilerini tutar.
 * UI bileşenlerinden bağımsız olarak metin, adım listeleri ve sidebar bilgilerini
 * tek bir yerde düzenlemeyi kolaylaştırır.
 
 * İçerik değişikliği gerektiğinde yalnızca bu dosyayı düzenlemek yeterlidir;
 * KurulumRehberiPage.tsx'e dokunmaya gerek kalmaz.
 */

export const SERVER_TABS = [
  { id: "nginx", label: "Nginx" },
  { id: "apache", label: "Apache" },
  { id: "iis", label: "Windows (IIS)" },
  { id: "cpanel", label: "cPanel" },
  { id: "plesk", label: "Plesk" },
];

export const PANEL_STEPS: Record<string, string[]> = {
  iis: [
    'IIS Manager\'ı açın → sunucu adını seçin → "Sunucu Sertifikaları".',
    '"Sertifika İsteğini Tamamla..." bağlantısına tıklayın.',
    'CA\'dan gelen .cer dosyasını seçin, kolay bir ad girin → "Kişisel" deposunu seçin.',
    '"Bağlamalar" → "Ekle" → tür: https, port: 443, sertifika: yeni sertifika → "Tamam".',
    "Siteyi yeniden başlatın.",
  ],
  cpanel: [
    'cPanel → "Güvenlik" → "SSL/TLS" → "Sertifikaları Yönet ve Kurulum Yap".',
    'Listeden domain\'i bulun → "Yönet" → "Otomatik Doldur" butonuna basın.',
    "Dolmazsa .crt içeriğini yapıştırın; CA Bundle alanına ara sertifikayı yapıştırın.",
    '"Sertifikayı Kur" butonuna tıklayın.',
  ],
  plesk: [
    'Plesk → ilgili domain → "SSL/TLS Sertifikaları".',
    'Listede CSR\'ı bulun → "Yükle" seçeneğine tıklayın.',
    '.crt içeriğini "Sertifika" alanına, CA Bundle\'ı "CA sertifikası" alanına yapıştırın.',
    '"Güncelle"ye basın → Domain ayarlarında yeni sertifikayı seçin → "Tamam".',
  ],
};

export const REQUIRED_FILES = [
  {
    colorKey: "emerald" as const,
    file: "siteniz.crt",
    desc: "SSL sertifikanızın kendisi — CA tarafından imzalanmış",
    iconKey: "shieldCheck" as const,
  },
  {
    colorKey: "sky" as const,
    file: "ca-bundle.crt",
    desc: "Ara sertifikalar (intermediate/chain) — zincir bütünlüğü için zorunlu",
    iconKey: "hardDrive" as const,
  },
  {
    colorKey: "violet" as const,
    file: "siteniz.key",
    desc: "Özel anahtar — CSR oluşturulurken sunucunuzda üretildi",
    iconKey: "server" as const,
  },
];

export const COMMON_ERRORS = [
  {
    title: "Sertifika zinciri eksik",
    desc: "CA Bundle yüklenmezse mobil tarayıcılar 'güvenilmez sertifika' hatası verir. Ara sertifikaları mutlaka ekleyin.",
  },
  {
    title: "Private key uyuşmazlığı",
    desc: "Sertifika, CSR'ı oluşturan private key ile eşleşmek zorunda. Farklı sunucularda oluşturulan CSR bu hataya yol açar.",
  },
  {
    title: "Mixed content (karma içerik)",
    desc: "HTTP ile yüklenen resim/script/CSS varsa tarayıcı uyarı verir. Tüm kaynakların https:// ile çağrıldığından emin olun.",
  },
  {
    title: "Restart yapılmaması",
    desc: "Sertifika dosyasını güncellemek yetmez — Nginx veya Apache'yi reload/restart etmeniz gerekir.",
  },
  {
    title: "Yanlış domain",
    desc: "Wildcard olmayan sertifika www.siteniz.com için alındıysa siteniz.com'da çalışmaz. CSR'daki Common Name'i kontrol edin.",
  },
];

export const RENEWAL_TIMELINE = [
  {
    days: "90 gün önce",
    text: "Yenileme sürecini başlatın. Yeni CSR oluşturun.",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    days: "30 gün önce",
    text: "Yeni sertifikayı aktive edin ve sunucuya kurun.",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
  {
    days: "7 gün önce",
    text: "Eski sertifikayı kaldırın, yalnızca yenisini bırakın.",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
];

export const sidebarData = {
  cta: {
    title: "SSL Sertifikası Almadınız mı?",
    description:
      "Kurulum öncesinde bir sertifikaya ihtiyacınız var. DigiCert onaylı DV, OV ve EV seçeneklerimize göz atın.",
    buttonLabel: "SSL Sertifikalarını İncele",
    buttonHref: "/ssl",
    badge: "Hızlı Aktivasyon",
  },
  relatedLinks: [
    {
      heading: "İlgili Konular",
      links: [
        { label: "CSR Oluşturma Rehberi", href: "/destek/csr" },
        { label: "SSL Nedir?", href: "/kaynaklar/ssl-nedir" },
        { label: "DV / OV / EV Farkları", href: "/kaynaklar/dv-ov-ev-farklari" },
        { label: "Destek Talebi Oluştur", href: "/support" },
      ],
    },
  ],
  highlightBox: {
    icon: "shieldCheck" as const,
    title: "Sertifika Zinciri",
    description:
      "En sık yapılan hata ara sertifikaları (CA Bundle) atlamaktır. Zincir eksik olursa bazı tarayıcılar güvensiz uyarısı gösterir.",
  },
};
