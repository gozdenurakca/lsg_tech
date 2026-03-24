"use client";

import DvOvEvHeroVisual from "./DvOvEvHeroVisual";
import { ICONS } from "@/lib/icons";
import ResourcePageLayout from "../shared/ResourcePageLayout";
import ResourceBottomCTA from "../shared/ResourceBottomCTA";

type CertType = {
  id: string;
  label: string;
  fullName: string;
  tone: "emerald" | "blue" | "amber";
  icon: keyof typeof ICONS;
  forWhom: string;
  validationTime: string;
  browserIndicator: string;
  description: string;
  pros: string[];
  cons: string[];
  useCase: string[];
};

const TONE = {
  emerald: {
    card: "border-emerald-200 bg-emerald-50/40",
    badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
    icon: "bg-emerald-100 text-emerald-700",
    heading: "text-emerald-800",
    check: "text-emerald-600",
    meta: "bg-white border-emerald-100 text-emerald-700",
  },
  blue: {
    card: "border-blue-200 bg-blue-50/40",
    badge: "bg-blue-100 text-blue-700 border-blue-200",
    icon: "bg-blue-100 text-blue-700",
    heading: "text-blue-800",
    check: "text-blue-600",
    meta: "bg-white border-blue-100 text-blue-700",
  },
  amber: {
    card: "border-amber-200 bg-amber-50/40",
    badge: "bg-amber-100 text-amber-700 border-amber-200",
    icon: "bg-amber-100 text-amber-700",
    heading: "text-amber-800",
    check: "text-amber-600",
    meta: "bg-white border-amber-100 text-amber-700",
  },
};

const sidebarData = {
  cta: {
    title: "Doğru Sertifikayı Seçin",
    description:
      "DV, OV veya EV sertifika seçeneklerini karşılaştırın; ihtiyacınıza en uygununu hemen alın.",
    buttonLabel: "SSL Sertifikalarını İncele",
    buttonHref: "/ssl",
    badge: "Hızlı Teslimat",
  },
  relatedLinks: [
    {
      heading: "İlgili Konular",
      links: [
        { label: "SSL Nedir?", href: "/kaynaklar/ssl-nedir" },
        { label: "Sık Sorulan Sorular", href: "/kaynaklar/sss" },
        { label: "Webinar & Eğitimler", href: "/kaynaklar/webinar" },
        { label: "SSL Ürün Karşılaştırması", href: "/ssl#karsilastirma" },
      ],
    },
  ],
  highlightBox: {
    icon: "shieldCheck" as keyof typeof ICONS,
    title: "Hangi seviye size uygun?",
    description:
      "Kişisel blog için DV yeterlidir. Kurumsal ve ödeme alan siteler için OV veya EV tercih edilmelidir.",
  },
};

const certTypes: CertType[] = [
  {
    id: "dv",
    label: "DV",
    fullName: "Domain Validation",
    tone: "emerald",
    icon: "shieldCheck",
    forWhom: "Kişisel siteler, bloglar, küçük işletmeler",
    validationTime: "Dakikalar içinde",
    browserIndicator: "Kilit simgesi ve HTTPS görünür",
    description:
      "Domain Validation (Alan Adı Doğrulama) sertifikası, yalnızca alan adı sahipliğini doğrular. Sertifika otoritesi (CA), e-posta veya DNS kaydı üzerinden doğrulama yapar. Kurumsal kimlik kontrolü yapılmaz.",
    pros: [
      "Dakikalar içinde otomatik olarak verilir",
      "En uygun maliyetli SSL seçeneği",
      "Teknik kurulum son derece kolay",
      "Kişisel ve bilgi amaçlı siteler için yeterli güvenlik sağlar",
    ],
    cons: [
      "Kurumsal kimlik bilgisi sertifikada yer almaz",
      "E-ticaret ve finansal işlemler için önerilmez",
      "Ziyaretçiye kurum güvencesi sunmaz",
    ],
    useCase: ["Blog & kişisel site", "Portföy sayfası", "Geliştirme / test ortamı", "Küçük bilgi siteleri"],
  },
  {
    id: "ov",
    label: "OV",
    fullName: "Organization Validation",
    tone: "blue",
    icon: "shieldHalf",
    forWhom: "Orta ve büyük ölçekli işletmeler",
    validationTime: "1–3 iş günü",
    browserIndicator: "Kilit simgesi + sertifikada kurum adı görünür",
    description:
      "Organization Validation (Kurum Doğrulama) sertifikası, alan adı sahipliğinin yanı sıra şirketin yasal varlığını da doğrular. CA, ticaret sicil kaydı ve iletişim bilgilerini inceler. Sertifika detaylarında şirket adı yer alır.",
    pros: [
      "Sertifikada şirket adı ve ülke bilgisi görünür",
      "Kurumsal güvenilirlik ve marka itibarı sağlar",
      "DV'ye kıyasla çok daha güçlü kimlik doğrulama",
      "B2B ve kurumsal web siteleri için endüstri standardı",
    ],
    cons: [
      "Doğrulama süreci 1–3 iş günü sürebilir",
      "DV'ye göre daha yüksek maliyetli",
      "Tarayıcı adres çubuğunda yeşil bar görünmez",
    ],
    useCase: ["Kurumsal web sitesi", "SaaS uygulaması", "Üyelik / giriş sayfası", "B2B servisler"],
  },
  {
    id: "ev",
    label: "EV",
    fullName: "Extended Validation",
    tone: "amber",
    icon: "building",
    forWhom: "Bankalar, fintech, büyük e-ticaret siteleri",
    validationTime: "3–7 iş günü",
    browserIndicator: "Sertifikada şirket adı + yüksek güven göstergesi",
    description:
      "Extended Validation (Genişletilmiş Doğrulama) sertifikası, en kapsamlı kimlik doğrulama sürecine sahip SSL türüdür. CA, şirketin yasal, fiziksel ve operasyonel varlığını titizlikle inceler. Özellikle finansal ve ödeme sistemleri için tercih edilir.",
    pros: [
      "En yüksek güven seviyesini sağlar",
      "Phishing saldırılarına karşı güçlü koruma",
      "Sertifika detaylarında tam şirket bilgisi yer alır",
      "Finans ve e-ticaret sektöründe güven artırır",
    ],
    cons: [
      "En uzun doğrulama süreci (3–7 iş günü)",
      "En yüksek maliyet",
      "Modern tarayıcılarda yeşil adres çubuğu artık gösterilmez",
    ],
    useCase: ["Bankacılık & fintech", "Büyük e-ticaret platformları", "Sigorta ve finansal hizmetler", "Devlet kurumları"],
  },
];

export default function DvOvEvPage() {
  return (
    <ResourcePageLayout
      title="DV, OV ve EV Sertifika Farkları"
      description="SSL sertifika türleri arasındaki farkları öğrenin; işletmeniz için doğru doğrulama seviyesini seçin."
      badge="Karşılaştırma Rehberi"
      breadcrumbs={[
        { label: "Kaynaklar", href: "/kaynaklar" },
        { label: "DV / OV / EV Farkları" },
      ]}
      sidebar={sidebarData}
      heroVisual={<DvOvEvHeroVisual />}
    >
      <div className="space-y-6">
        {certTypes.map((cert) => {
          const Icon = ICONS[cert.icon];
          const ClockIcon = ICONS.clock;
          const BadgeIcon = ICONS.badge;
          const CheckIcon = ICONS.checkCircle;
          const CloseIcon = ICONS.xCircle;
          const UsersIcon = ICONS.users;
          const t = TONE[cert.tone];

          return (
            <article
              key={cert.id}
              id={cert.id}
              className={`scroll-mt-28 rounded-2xl border p-6 shadow-sm transition-all hover:shadow-md lg:p-8 ${t.card}`}
            >
              {/* Header */}
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${t.icon}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <span className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-bold tracking-wide ${t.badge}`}>
                    {cert.label}
                  </span>
                  <h2 className={`text-xl font-semibold ${t.heading}`}>{cert.fullName}</h2>
                </div>
              </div>

              <div className="mb-5 h-px bg-slate-200" />

              {/* Description */}
              <p className="mb-5 text-[15px] leading-7 text-slate-600">{cert.description}</p>

              {/* Meta chips */}
              <div className="mb-6 flex flex-wrap gap-3 text-sm">
                <div className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-medium ${t.meta}`}>
                  <ClockIcon className="h-3.5 w-3.5" />
                  {cert.validationTime}
                </div>
                <div className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-medium ${t.meta}`}>
                  <BadgeIcon className="h-3.5 w-3.5" />
                  {cert.browserIndicator}
                </div>
                <div className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-medium ${t.meta}`}>
                  <UsersIcon className="h-3.5 w-3.5" />
                  {cert.forWhom}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Avantajlar</p>
                  <ul className="space-y-2">
                    {cert.pros.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckIcon className={`mt-0.5 h-4 w-4 shrink-0 ${t.check}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Dezavantajlar</p>
                  <ul className="space-y-2">
                    {cert.cons.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <CloseIcon className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Use cases */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Kullanım Alanları</p>
                <div className="flex flex-wrap gap-2">
                  {cert.useCase.map((uc) => (
                    <span
                      key={uc}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {uc}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <ResourceBottomCTA
        heading="Hangi sertifika size uygun?"
        subtext="Uzmanlarımız ihtiyacınıza göre doğru SSL sertifikasını seçmenize yardımcı olur."
        buttonLabel="SSL Sertifikalarını Gör"
        buttonHref="/ssl"
      />
    </ResourcePageLayout>
  );
}
