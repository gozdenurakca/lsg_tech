"use client";

import Link from "next/link";
import { ICONS } from "@/lib/icons";

type PricingCard = {
  name: string;
  tag: string | null;
  featured?: boolean;
  desc: string;
  features: string[];
  scanFreq: string;
  support: string;
  cleanup: string;
  href: string;
  detailHref: string;
};

const PRICING_CARDS: PricingCard[] = [
  {
    name: "SiteLock",
    tag: null,
    desc: "Kişisel site ve bloglar için günlük tarama, blacklist izleme ve temel koruma.",
    features: [
      "Günlük malware tarama",
      "Blacklist izleme",
      "5 sayfa derinlik taraması",
      "E-posta uyarıları",
      "Google Safe Browsing izleme",
    ],
    scanFreq: "Günlük",
    support: "E-posta",
    cleanup: "Manuel",
    href: "/#teklif",
    detailHref: "/web-guvenligi/sitelock",
  },
  {
    name: "Secure Site Pro",
    tag: "Önerilen",
    featured: true,
    desc: "E-ticaret ve kurumsal siteler için WAF, otomatik temizlik ve 7/24 izleme.",
    features: [
      "Sürekli malware tarama",
      "WAF koruması dahil",
      "Sınırsız sayfa taraması",
      "Otomatik zararlı temizlik",
      "Blacklist kaldırma yardımı",
      "DDoS koruması",
    ],
    scanFreq: "Sürekli",
    support: "7/24",
    cleanup: "Otomatik",
    href: "/#teklif",
    detailHref: "/web-guvenligi/secure-site-pro",
  },
];

const StarIcon = ICONS.star;
const CheckIcon = ICONS.checkCircle;
const ArrowIcon = ICONS.arrowRight;
const ExternalIcon = ICONS.externalLink;

export default function SecurityPricingSection() {
  return (
    <section id="planlar" className="py-24 bg-[#f8fafc] scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-600/60 font-bold mb-3">
            Güvenlik Planları
          </p>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold text-slate-900 mb-4">
            Sitenize özel güvenlik planı
          </h2>
          <p className="text-[16px] text-slate-500 max-w-lg mx-auto">
            Malware tarama, WAF ve izleme özelliklerini ihtiyacınıza göre seçin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PRICING_CARDS.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                p.featured
                  ? "shadow-[0_8px_48px_rgba(5,150,105,0.15)] ring-2 ring-emerald-600/20"
                  : "shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.11)]"
              }`}
            >
              <div
                className={`h-[3px] w-full ${
                  p.featured
                    ? "bg-gradient-to-r from-emerald-500 to-teal-400"
                    : "bg-slate-100"
                }`}
              />

              {p.tag && (
                <div className="absolute top-5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-700 text-white shadow whitespace-nowrap">
                    {p.featured && <StarIcon size={9} className="fill-white" />}
                    {p.tag}
                  </span>
                </div>
              )}

              <div
                className={`flex flex-col flex-1 p-7 ${p.tag ? "pt-12" : ""}`}
              >
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">
                  {p.name}
                </h3>

                <p className="text-[13px] text-slate-400 leading-relaxed mb-6">
                  {p.desc}
                </p>

                <ul className="space-y-2 mb-6">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-[13px] text-slate-600"
                    >
                      <span className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                        <CheckIcon
                          size={9}
                          className="text-emerald-600"
                          strokeWidth={3}
                        />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="h-px bg-slate-100 mb-5" />

                <dl className="grid grid-cols-3 gap-2 mb-7">
                  {[
                    { icon: "refresh", label: "Tarama", val: p.scanFreq },
                    { icon: "shield", label: "Temizlik", val: p.cleanup },
                    { icon: "clock", label: "Destek", val: p.support },
                  ].map((s) => {
                    const Icon = ICONS[s.icon];
                    return (
                      <div
                        key={s.label}
                        className="flex flex-col items-center text-center bg-slate-50 rounded-xl px-2 py-3 border border-slate-100"
                      >
                        <Icon size={14} className="text-emerald-500 mb-1.5" />
                        <dt className="text-[10px] text-slate-400 font-medium mb-1">
                          {s.label}
                        </dt>
                        <dd className="text-[11px] font-bold text-slate-800">
                          {s.val}
                        </dd>
                      </div>
                    );
                  })}
                </dl>

                <div className="mt-auto flex flex-col gap-2">
                  {/* Detayları Gör */}
                  <Link
                    href={p.detailHref}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[13px] font-semibold border border-slate-200 text-slate-600 hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50 transition-all"
                  >
                    <ExternalIcon size={13} />
                    Detayları Gör
                  </Link>

                  {/* Teklif / Başla */}
                  <Link
                    href={p.href}
                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[14px] font-bold transition-all hover:-translate-y-0.5 ${
                      p.featured
                        ? "bg-emerald-700 hover:bg-emerald-600 text-white shadow-md shadow-emerald-700/20"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    Teklif Al <ArrowIcon size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
