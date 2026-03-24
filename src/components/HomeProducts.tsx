"use client";

import { useState } from "react";
import Link from "next/link";
import { ICONS } from "@/lib/icons";

type TabKey = "ssl" | "hosting" | "domain" | "security" | "bayi";

type ProductCard = {
  name: string;
  tag?: string;
  featured?: boolean;
  price: string;
  period: string;
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
  { id: "hosting", label: "Web Hosting", icon: "server" },
  { id: "domain", label: "Alan Adı", icon: "globe" },
  { id: "security", label: "Siber Güvenlik", icon: "shield" },
  { id: "bayi", label: "Bayilik", icon: "users" },
];

const CONTENT: Record<TabKey, TabContent> = {
  ssl: {
    eyebrow: "DigiCert Yetkili Partner",
    title: "Her ihtiyaca uygun SSL",
    desc: "DV'den EV'ye, Wildcard'dan Multi-Domain'e kadar tüm sertifika türleri.",
    color: "text-blue-400",
    allHref: "/ssl",
    allLabel: "Tüm SSL Sertifikaları",
    cards: [
      {
        name: "Domain Validation",
        tag: "Başlangıç",
        price: "₺299",
        period: "/yıl",
        desc: "Kişisel site ve bloglar için hızlı, uygun fiyatlı DV sertifikası.",
        features: [
          "Dakikalar içinde aktif",
          "256-bit şifreleme",
          "Ücretsiz yeniden düzenleme",
        ],
        href: "/ssl/dv",
      },
      {
        name: "Organization Validation",
        tag: "En Popüler",
        featured: true,
        price: "₺799",
        period: "/yıl",
        desc: "Kurumsal kimlik doğrulamalı, şirketler için güven standartı.",
        features: ["Şirket doğrulaması", "Site mühürü dahil", "7/24 destek"],
        href: "/ssl/ov",
      },
      {
        name: "Extended Validation",
        tag: "Premium",
        price: "₺1.999",
        period: "/yıl",
        desc: "Maksimum güven. Finans ve e-ticaret için EV standartı.",
        features: [
          "Tarayıcıda şirket adı",
          "$1.75M garanti",
          "En yüksek güven",
        ],
        href: "/ssl/ev",
      },
    ],
  },

  hosting: {
    eyebrow: "Yönetilen Hosting",
    title: "Hızlı, güvenli hosting",
    desc: "cPanel, SSD NVMe diskler ve otomatik yedekleme ile kurumsal kalite hosting.",
    color: "text-indigo-400",
    allHref: "/hosting",
    allLabel: "Tüm Hosting Planları",
    cards: [
      {
        name: "Starter Hosting",
        tag: "Bireysel",
        price: "₺149",
        period: "/ay",
        desc: "Kişisel projeler ve küçük siteler için ideal başlangıç paketi.",
        features: ["5 GB SSD depolama", "cPanel dahil", "Ücretsiz SSL"],
        href: "/hosting/starter",
      },
      {
        name: "Business Hosting",
        tag: "En Popüler",
        featured: true,
        price: "₺349",
        period: "/ay",
        desc: "Orta ölçekli işletmeler için güçlü ve ölçeklenebilir hosting.",
        features: ["50 GB SSD NVMe", "Sınırsız e-posta", "Günlük yedekleme"],
        href: "/hosting/business",
      },
      {
        name: "Reseller Hosting",
        tag: "Bayi",
        price: "₺699",
        period: "/ay",
        desc: "Kendi hosting markanızı oluşturun. WHM + cPanel dahil.",
        features: ["Sınırsız cPanel", "WHMCS lisansı", "Beyaz etiket"],
        href: "/hosting/reseller",
      },
    ],
  },

  domain: {
    eyebrow: "Alan Adı Tescili",
    title: "Markanızı dijitale taşıyın",
    desc: ".com.tr, .com, .net ve 500+ TLD seçeneğiyle alan adınızı hemen alın.",
    color: "text-sky-400",
    allHref: "/alan-adi",
    allLabel: "Alan Adı Ara",
    cards: [
      {
        name: ".com.tr",
        tag: "Türkiye",
        price: "₺99",
        period: "/yıl",
        desc: "Türk işletmeleri için en güvenilir ulusal alan adı uzantısı.",
        features: ["Kimlik doğrulamalı", "Yerel SEO avantajı", "Hızlı tescil"],
        href: "/alan-adi/com-tr",
      },
      {
        name: ".com",
        tag: "En Popüler",
        featured: true,
        price: "₺249",
        period: "/yıl",
        desc: "Global marka için en tanınan ve tercih edilen alan adı uzantısı.",
        features: ["Global tanınırlık", "Sınırsız transfer", "WHOIS koruması"],
        href: "/alan-adi/com",
      },
      {
        name: "Premium Paket",
        tag: "Özel",
        price: "₺399",
        period: "/yıl",
        desc: ".com + .com.tr + Ücretsiz DV SSL paketi. Hem yerel hem global.",
        features: [".com + .com.tr", "Ücretsiz DV SSL", "Ücretsiz gizlilik"],
        href: "/alan-adi/paket",
      },
    ],
  },

  security: {
    eyebrow: "Siber Güvenlik",
    title: "Tehditlere karşı tam koruma",
    desc: "Malware tarama, WAF, DDoS koruması ve 7/24 izleme ile güvende kalın.",
    color: "text-emerald-400",
    allHref: "/guvenlik",
    allLabel: "Tüm Güvenlik Çözümleri",
    cards: [
      {
        name: "Web Sitesi Güvenliği",
        tag: "Temel",
        price: "₺299",
        period: "/ay",
        desc: "Günlük malware tarama, WAF ve otomatik temizlik ile site koruması.",
        features: ["Günlük tarama", "WAF koruması", "Otomatik temizlik"],
        href: "/guvenlik/web",
      },
      {
        name: "Sunucu Güvenliği",
        tag: "En Popüler",
        featured: true,
        price: "₺599",
        period: "/ay",
        desc: "Imunify360 ile sunucu genelinde DDoS ve saldırı koruması.",
        features: ["Imunify360 dahil", "DDoS koruması", "Real-time izleme"],
        href: "/guvenlik/sunucu",
      },
      {
        name: "Kurumsal Paket",
        tag: "Enterprise",
        price: "Teklif Al",
        period: "",
        desc: "SOC hizmeti, penetrasyon testi ve özel güvenlik danışmanlığı.",
        features: ["SOC izleme", "Penetrasyon testi", "Özel danışman"],
        href: "/guvenlik/kurumsal",
      },
    ],
  },

  bayi: {
    eyebrow: "Partner Programı",
    title: "LSG ile büyüyün",
    desc: "SSL, hosting ve güvenlik ürünlerini bayiniz üzerinden satın, kâr edin.",
    color: "text-purple-400",
    allHref: "/bayi",
    allLabel: "Bayilik Başvurusu",
    cards: [
      {
        name: "Hosting Partner",
        tag: "Giriş",
        price: "%20",
        period: "komisyon",
        desc: "Hosting ürünlerini yeniden satın. WHMCS entegrasyonu ve panel dahil.",
        features: ["WHMCS lisansı", "Beyaz etiket panel", "Teknik destek"],
        href: "/bayi/hosting",
      },
      {
        name: "SSL Bayi",
        tag: "En Popüler",
        featured: true,
        price: "%30",
        period: "komisyon",
        desc: "DigiCert, GeoTrust ve Sectigo sertifikalarını bayi fiyatına satın.",
        features: ["Tüm CA'lar dahil", "Otomatik provizyon", "API erişimi"],
        href: "/bayi/ssl",
      },
      {
        name: "Yetkili Bayi",
        tag: "Premium",
        price: "%40",
        period: "komisyon",
        desc: "Tüm ürün gamına erişim. Öncelikli destek ve ortak marka fırsatı.",
        features: ["Tüm ürünler", "Öncelikli destek", "Co-marketing"],
        href: "/bayi/yetkili",
      },
    ],
  },
};

export default function HomeProducts() {
  const [active, setActive] = useState<TabKey>("ssl");
  const content = CONTENT[active];

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.2em] text-blue-500/50 font-bold mb-3">
            Ürün & Hizmetler
          </p>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold text-slate-900">
            Tüm dijital ihtiyaçlarınız burada
          </h2>
        </div>

        <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-2xl p-1.5 mb-10 overflow-x-auto [scrollbar-width:none]">
          {TABS.map((tab) => {
            const Icon = ICONS[tab.icon] ?? ICONS.lock;
            const isActive = active === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                  isActive
                    ? "bg-[#040E21] text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-1">
            <p
              className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${content.color}`}
            >
              {content.eyebrow}
            </p>

            <h3 className="text-[22px] font-bold text-slate-900 mb-3 leading-tight">
              {content.title}
            </h3>

            <p className="text-[14px] text-slate-500 leading-relaxed mb-6">
              {content.desc}
            </p>

            <Link
              href={content.allHref}
              className="inline-flex items-center gap-1.5 text-[13px] font-bold text-slate-900 hover:gap-3 transition-all"
            >
              {content.allLabel}
              <ICONS.arrowRight size={13} />
            </Link>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-4">
            {content.cards.map((card) => (
              <div
                key={card.name}
                className={`relative flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 ${
                  card.featured
                    ? "shadow-[0_8px_32px_rgba(11,61,145,0.12)] ring-2 ring-blue-600/15"
                    : "shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
                }`}
              >
                <div
                  className={`h-[3px] w-full ${
                    card.featured
                      ? "bg-gradient-to-r from-blue-600 to-indigo-500"
                      : "bg-slate-100"
                  }`}
                />

                {card.tag && (
                  <div className="px-5 pt-4">
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        card.featured
                          ? "bg-blue-900 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {card.featured && (
                        <ICONS.star size={8} className="fill-white" />
                      )}
                      {card.tag}
                    </span>
                  </div>
                )}

                <div className="flex flex-col flex-1 px-5 pt-3 pb-5">
                  <h4 className="text-[15px] font-bold text-slate-900 mb-1">
                    {card.name}
                  </h4>

                  <p className="text-[12px] text-slate-400 leading-relaxed mb-4">
                    {card.desc}
                  </p>

                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-[24px] font-extrabold text-slate-900">
                      {card.price}
                    </span>
                    {card.period && (
                      <span className="text-[12px] text-slate-400">
                        {card.period}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-1.5 mb-5 flex-1">
                    {card.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-[12px] text-slate-600"
                      >
                        <ICONS.check
                          size={12}
                          className="text-emerald-500 flex-shrink-0"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={card.href}
                    className={`flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-[13px] font-bold transition-all ${
                      card.featured
                        ? "bg-blue-900 hover:bg-blue-800 text-white"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    Başla
                    <ICONS.arrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
