export const PLANS = [
  {
    id: "standart",
    name: "Standart",
    price: 139.99,
    period: "ay",
    billing: "İlk 2 yıllık dönem için",
    highlight: false,
    features: [
      "%100 risksiz, 30 günlük para iadesi garantisi",
      "Tek web sitesinin korunmasına yardımcı olur",
      "Yılda 1 kez site temizleme ve onarma",
      "Ücretsiz Gelişmiş Güven Damgası",
      "SSL Sertifikası dahil",
      "Web Uygulaması Güvenlik Duvarı (WAF)",
      "Günlük kötü amaçlı yazılım taraması",
    ],
    cta: "Sepete Ekle",
  },
  {
    id: "gelismis",
    name: "Gelişmiş",
    price: 329.99,
    period: "ay",
    billing: "İlk 2 yıllık dönem için",
    highlight: true,
    badge: "En Popüler",
    features: [
      "%100 risksiz, 30 günlük para iadesi garantisi",
      "Tek web sitesinin korunmasına yardımcı olur",
      "Yılda 5 kez site temizleme ve onarma",
      "25 GB günlük güvenli yedekleme",
      "5 kata kadar daha hızlı performans",
      "DDoS koruması",
      "Ücretsiz Gelişmiş Güven Damgası",
      "SSL Sertifikası dahil",
      "Web Uygulaması Güvenlik Duvarı (WAF)",
    ],
    cta: "Sepete Ekle",
  },
  {
    id: "premium",
    name: "Premium",
    price: 429.99,
    period: "ay",
    billing: "İlk 2 yıllık dönem için",
    highlight: false,
    features: [
      "%100 risksiz, 30 günlük para iadesi garantisi",
      "Tek web sitesinin korunmasına yardımcı olur",
      "Sınırsız web sitesi temizleme ve onarma",
      "Sınırsız depolama alanı, güvenli günlük yedekleme",
      "5 kata kadar daha hızlı performans",
      "DDoS koruması",
      "Ücretsiz Gelişmiş Güven Damgası",
      "SSL Sertifikası dahil",
      "Web Uygulaması Güvenlik Duvarı (WAF)",
    ],
    cta: "Sepete Ekle",
  },
];


export const INCLUDED_FEATURES = [
  {
    icon : "shield",
    title: "Gelişmiş Güven Damgası",
    desc: "Sitenizin şifrelenmiş ve güvenlik duvarı korumasına sahip olduğunu doğrulayan etkileşimli güven damgası.",
  },
  {
    icon: "lock",
    title: "SSL Sertifikası",
    desc: "SHA-2 ve 2048 bit şifreleme ile veri güvenliği ve daha iyi SEO.",
  },
  {
    icon: "flame",
    title: "Web Application Firewall (WAF)",
    desc: "Sitenizi SQL injection ve diğer saldırılara karşı korur.",
  },
  {
    icon: "search",
    title: "Günlük Malware Taraması",
    desc: "Web siteniz düzenli olarak taranır ve tehditler tespit edilir.",
  },
  {
    icon: "activity",
    title: "Sürekli İzleme",
    desc: "Blacklist durumu, SSL değişiklikleri ve uptime kontrolü.",
  },
  {
    icon: "zap",
    title: "CDN ile Daha Hızlı",
    desc: "Global CDN ile sayfalar daha hızlı yüklenir.",
  },
];


export const BENEFITS = [
  {
    icon: "trophy",
    title: "Ziyaretçilere güven verin",
    desc: "SSL ve WAF ile ziyaretçilerinize sitenizin güvenli olduğunu gösterin.",
  },
  {
    icon: "brush",
    title: "Malware temizleme",
    desc: "Kötü amaçlı yazılım tespit edildiğinde hızlı şekilde temizlenir.",
  },
  {
    icon: "rocket",
    title: "Performans artışı",
    desc: "CDN sayesinde web sitenizin yüklenme süresi ciddi şekilde hızlanır.",
  },
  {
    icon: "database",
    title: "Yedekleme ve geri yükleme",
    desc: "Günlük otomatik yedekleme ve tek tıklama ile geri yükleme.",
  },
];


export const FAQ_ITEMS = [
  {
    q: "Web Sitesi Güvenliği nedir?",
    a: "Web sitenizi kötü amaçlı yazılımlar, saldırılar ve güvenlik açıklarına karşı koruyan hizmetlerin bütünüdür.",
  },
  {
    q: "SSL sertifikası yeterli mi?",
    a: "Hayır. SSL sadece veri şifreler. WAF ve malware koruması ayrıca gereklidir.",
  },
  {
    q: "Sitem ne sıklıkla taranır?",
    a: "Planınıza bağlı olarak günlük veya daha sık tarama yapılabilir.",
  },
];


export const NAV_LINKS = [
  { href: "#plans", label: "Planlar ve Fiyatlandırma" },
  { href: "#trust-seal", label: "Gelişmiş Güven Damgası" },
  { href: "#what-is", label: "Web Sitesi Güvenliği Nedir?" },
  { href: "#benefits", label: "Avantajlar" },
  { href: "#faq", label: "SSS" },
];