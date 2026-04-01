"use client";

import { useState } from "react";
import Link from "next/link";
import { ICONS } from "@/lib/icons";

type TabKey = "ssl" | "hosting" | "domain" | "security" | "web-security";

type ProductCard = {
  name: string;
  tag?: string;
  featured?: boolean;
  desc: string;
  features: string[];
  href: string;
};

type TabContent = {
  eyebrow: string;
  title: string;
  desc: string;
  cards: ProductCard[];
  allHref: string;
  allLabel: string;
  color: string;
};

const TABS: { id: TabKey; label: string; icon: keyof typeof ICONS }[] = [
  { id: "ssl", label: "SSL Sertifikaları", icon: "lock" },
  { id: "hosting", label: "İş Ortaklığı", icon: "users" },
  { id: "domain", label: "Alan Adı", icon: "globe" },
  { id: "web-security", label: "Web Güvenliği", icon: "shield" },
  { id: "security", label: "Siber Güvenlik", icon: "shield" },
];

const CONTENT: Record<TabKey, TabContent> = {
  ssl: {
    eyebrow: "DigiCert Yetkili Partner",
    title: "Her ihtiyaca uygun SSL",
    desc: "DV'den EV'ye, Wildcard ve Multi-Domain çözümlere kadar tüm sertifika türleri.",
    color: "text-blue-400",
    allHref: "/ssl",
    allLabel: "Tüm SSL Sertifikaları",
    cards: [
      {
        name: "Domain Validation (DV)",
        tag: "Başlangıç",
        desc: "Kişisel siteler için hızlı ve kolay SSL kurulumu.",
        features: [
          "Dakikalar içinde aktif",
          "256-bit şifreleme",
          "Domain doğrulama",
        ],
        href: "/ssl/dv",
      },
      {
        name: "Organization Validation (OV)",
        tag: "En Popüler",
        featured: true,
        desc: "Şirket doğrulaması ile daha yüksek güven sağlar.",
        features: ["Şirket doğrulaması", "Site mühürü", "Kurumsal güven"],
        href: "/ssl/ov",
      },
      {
        name: "Extended Validation (EV)",
        tag: "Premium",
        desc: "En yüksek güven seviyesi. Finans ve e-ticaret için ideal.",
        features: ["Tarayıcıda şirket adı", "Maksimum güven", "Yüksek dönüşüm"],
        href: "/ssl/ev",
      },
      {
        name: "Wildcard SSL",
        tag: "Esnek",
        desc: "Tüm alt domainleri tek sertifika ile koruyun.",
        features: ["Unlimited subdomain", "Kolay yönetim", "Maliyet avantajı"],
        href: "/ssl/wildcard",
      },
    ],
  },

  hosting: {
    eyebrow: "İş Ortaklığı Programı",
    title: "LSG ile birlikte büyüyün",
    desc: "Hosting, güvenlik ve dijital çözümleri kendi markanızla sunun.",
    color: "text-indigo-400",
    allHref: "/is-ortakligi",
    allLabel: "Tüm Partner Programları",
    cards: [
      {
        name: "Hosting Partner",
        tag: "Başlangıç",
        desc: "Hosting hizmetlerini kendi markanızla sunun.",
        features: ["WHMCS entegrasyonu", "Beyaz etiket", "Teknik destek"],
        href: "/partner/hosting",
      },
      {
        name: "Teknoloji Partneri",
        tag: "En Popüler",
        featured: true,
        desc: "API destekli güçlü entegrasyon çözümleri.",
        features: [
          "API entegrasyonu",
          "Global CA erişimi",
          "Proje bazlı çözümler",
        ],
        href: "/partner/teknoloji",
      },
      {
        name: "Bayilik Programı",
        tag: "Premium",
        desc: "Yüksek kâr marjı ile ürünleri yeniden satın.",
        features: ["Yüksek komisyon", "Tüm ürünler", "Öncelikli destek"],
        href: "/partner/bayilik",
      },
    ],
  },

  domain: {
    eyebrow: "Alan Adı Yönetimi",
    title: "Doğru domaini bulun",
    desc: "500+ uzantı ile domaininizi anında sorgulayın.",
    color: "text-sky-400",
    allHref: "/domain",
    allLabel: "Alan Adı Sorgula",
    cards: [
      {
        name: "Domain Sorgulama",
        tag: "Başlangıç",
        desc: "Domain uygunluğunu anında kontrol edin.",
        features: ["Anlık sorgu", "500+ TLD", "Hızlı sonuç"],
        href: "/domain",
      },
      {
        name: "Domain Transfer",
        tag: "En Popüler",
        featured: true,
        desc: "Domaininizi LSG’ye kolayca taşıyın.",
        features: ["Kolay transfer", "DNS yönetimi", "Kesintisiz taşıma"],
        href: "/domain/transfer",
      },
      {
        name: "Domain Yönetimi",
        tag: "Profesyonel",
        desc: "Tüm domainlerinizi tek panelden yönetin.",
        features: ["DNS", "WHOIS", "Otomatik yenileme"],
        href: "/domain/manage",
      },
    ],
  },

  "web-security": {
    eyebrow: "Web Güvenliği",
    title: "Web sitenizi koruyun",
    desc: "Malware, DDoS ve saldırılara karşı tam koruma.",
    color: "text-emerald-400",
    allHref: "/web-guvenligi",
    allLabel: "Tüm Web Güvenliği Çözümleri",
    cards: [
      {
        name: "SiteLock",
        tag: "Başlangıç",
        desc: "Web sitenizi otomatik olarak koruyun.",
        features: ["Malware tarama", "Otomatik temizlik", "Zafiyet analizi"],
        href: "/web-guvenligi/sitelock",
      },
      {
        name: "Secure Site Pro",
        tag: "En Popüler",
        featured: true,
        desc: "WAF + CDN + DDoS koruma.",
        features: ["WAF", "CDN", "DDoS koruması"],
        href: "/web-guvenligi/secure-site-pro",
      },
    ],
  },

  security: {
    eyebrow: "Siber Güvenlik",
    title: "Kurumsal çözümler",
    desc: "Enterprise seviyede güvenlik platformları.",
    color: "text-emerald-400",
    allHref: "/guvenlik",
    allLabel: "Tüm Güvenlik Çözümleri",
    cards: [
      {
        name: "SecurEnvoy",
        tag: "MFA",
        desc: "Multi-factor authentication çözümü.",
        features: ["Passwordless", "AD entegrasyonu", "Zero Trust"],
        href: "/guvenlik/securenvoy",
      },
      {
        name: "NoSpamProxy",
        tag: "E-posta",
        featured: true,
        desc: "Gelişmiş e-posta güvenliği.",
        features: ["Anti-spam", "Encryption", "Gateway"],
        href: "/guvenlik/nospamproxy",
      },
      {
        name: "Keeper",
        tag: "PAM",
        desc: "Parola ve erişim yönetimi.",
        features: ["Vault", "Privileged access", "Zero knowledge"],
        href: "/guvenlik/keeper",
      },
      {
        name: "KeyTalk",
        tag: "PKI",
        desc: "Otomatik sertifika yönetimi.",
        features: ["PKI", "Device auth", "Automation"],
        href: "/guvenlik/keytalk",
      },
      {
        name: "Venafi",
        tag: "CLM",
        desc: "Certificate lifecycle management.",
        features: ["Lifecycle", "Risk", "Auto renew"],
        href: "/guvenlik/venafi",
      },
    ],
  },
};

export default function HomeProducts() {
  const [active, setActive] = useState<TabKey>("ssl");
  const content = CONTENT[active];

  return (
    <section id="products" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.2em] text-blue-500/50 font-bold mb-3">
            Ürün & Hizmetler
          </p>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold text-slate-900">
            Tüm dijital ihtiyaçlarınız burada
          </h2>
        </div>

        {/* TABS */}
        <div className="flex gap-1.5 bg-white border rounded-2xl p-1.5 mb-10 overflow-x-auto">
          {TABS.map((tab) => {
            const Icon = ICONS[tab.icon];
            const isActive = active === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold transition ${
                  isActive
                    ? "bg-[#040E21] text-white"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* LEFT */}
          <div>
            <p className={`text-xs font-bold mb-2 ${content.color}`}>
              {content.eyebrow}
            </p>
            <h3 className="text-xl font-bold mb-3">{content.title}</h3>
            <p className="text-sm text-slate-500 mb-6">{content.desc}</p>

            <Link href={content.allHref} className="font-bold text-sm">
              {content.allLabel} →
            </Link>
          </div>

          {/* CARDS */}
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-4">
            {content.cards.map((card) => (
              <Link key={card.name} href={card.href} className="block group">
                <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
                  <h4 className="font-bold mb-2">{card.name}</h4>
                  <p className="text-sm text-slate-500 mb-4">{card.desc}</p>

                  <ul className="text-sm space-y-1 mb-4">
                    {card.features.map((f) => (
                      <li key={f}>✓ {f}</li>
                    ))}
                  </ul>

                  <span className="text-sm font-bold text-blue-600 group-hover:underline">
                    Detayları Gör →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
