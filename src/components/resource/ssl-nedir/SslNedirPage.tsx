"use client";
import ResourcePageLayout from "../shared/ResourcePageLayout";
import ResourceBottomCTA from "../shared/ResourceBottomCTA";
import {
  ResourceSectionList,
  type ResourceSection,
} from "../shared/ResourceSectionCard";

const sidebarData = {
  cta: {
    title: "SSL Sertifikanızı Bugün Alın",
    description:
      "DV, OV veya EV sertifika seçenekleriyle sitenizi güvence altına alın.",
    buttonLabel: "Sertifikaları İncele",
    buttonHref: "/ssl",
    badge: "En Uygun Fiyat",
  },
  relatedLinks: [
    {
      heading: "İlgili Konular",
      links: [
        {
          label: "DV / OV / EV Farkları",
          href: "/kaynaklar/dv-ov-ev-farklari",
        },
        { label: "Sık Sorulan Sorular", href: "/kaynaklar/sss" },
        { label: "Webinar & Eğitimler", href: "/kaynaklar/webinar" },
        { label: "SSL Ürün Karşılaştırması", href: "/ssl#karsilastirma" },
      ],
    },
  ],
  highlightBox: {
    icon: "lock",
    title: "HTTPS = Güven",
    description:
      "SSL olmayan siteler tarayıcılar tarafından 'Güvenli değil' olarak işaretlenir ve ziyaretçileri kaçırır.",
  },
};
const sections: ResourceSection[] = [
  {
    id: "ssl-nedir",
    heading: "SSL Nedir?",
    icon: "shieldCheck",
    body: `SSL (Secure Sockets Layer), web sunucusu ile tarayıcı arasındaki veri iletimini şifreleyen bir güvenlik protokolüdür. Günümüzde teknik olarak TLS (Transport Layer Security) olarak adlandırılsa da, sektörde hâlâ yaygın biçimde "SSL" terimi kullanılmaktadır.

SSL sertifikası, web sitenizin adres çubuğunda "https://" ve kilit simgesi görünmesini sağlar; böylece ziyaretçileriniz bağlantının güvenli olduğunu anlar.`,
  },
  {
    id: "nasil-calisir",
    heading: "SSL Nasıl Çalışır?",
    icon: "globe",
    body: `SSL, asimetrik şifreleme (açık anahtar / özel anahtar çifti) kullanarak güvenli bir "el sıkışma" (handshake) gerçekleştirir. Bu süreçte:

1. Tarayıcı sunucudan SSL sertifikasını ister.
2. Sunucu geçerli bir sertifikasını tarayıcıya gönderir.
3. Tarayıcı sertifikayı güvenilir bir Sertifika Otoritesi'ne (CA) doğrular.
4. Şifreli oturum başlatılır ve tüm veri aktarımı bu oturum üzerinden yapılır.`,
  },
  {
    id: "neden-gerekli",
    heading: "Neden Zorunlu?",
    icon: "success",
    body: `SSL artık isteğe bağlı değil, zorunlu bir standart:`,
    bullets: [
      "Google, HTTPS olmayan siteleri arama sonuçlarında geri sıraya atar.",
      "Chrome ve Firefox, HTTP siteleri 'Güvenli Değil' olarak işaretler.",
      "E-ticaret ve üyelik sistemleri için yasal yükümlülük oluşturabilir.",
      "Ziyaretçi güveni ve dönüşüm oranlarını doğrudan etkiler.",
      "PCI DSS uyumluluğu için ödeme alınan sitelerde zorunludur.",
    ],
  },
];

export default function SslNedirPage() {
  return (
    <ResourcePageLayout
      title="SSL Nedir?"
      description="Web sitenizin güvenliğini sağlayan SSL/TLS sertifikalarını, nasıl çalıştıklarını ve neden kritik öneme sahip olduklarını öğrenin."
      badge="Başlangıç Rehberi"
      sidebar={sidebarData}
    >
      <div className="space-y-10">
        <ResourceSectionList sections={sections} />

        <ResourceBottomCTA
          heading="Sitenizi güvence altına almaya hazır mısınız?"
          subtext="DigiCert onaylı sertifikalar, 7/24 destek ile birlikte."
          buttonLabel="SSL Sertifikalarını Gör"
          buttonHref="/ssl"
        />
      </div>
    </ResourcePageLayout>
  );
}
