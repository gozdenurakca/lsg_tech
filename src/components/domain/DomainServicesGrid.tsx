/*
çok önemli !!
cross-sell :SSL ,Hosting, email
*/
"use client";

import Link from "next/link";
import { ICONS } from "@/lib/icons";

type IconKey = keyof typeof ICONS;

type Service = {
  icon: IconKey;
  color: string;
  bg: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
};

const SERVICES: Service[] = [
  {
    icon: "globe",
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Sitenizi bugün yayına alın",
    desc: "Sürükle-bırak editörümüz ile site kurun.",
    cta: "Hosting Partner",
    href: "/hosting/hosting-partner",
  },
  {
    icon: "lock",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    title: "Tarayıcıda kilit simgesi görünsün",
    desc: "SSL ile güvenli ve SEO uyumlu olun.",
    cta: "SSL Sertifikası Alın",
    href: "/pricing/ssl/dv",
  },
  {
    icon: "mail",
    color: "text-violet-600",
    bg: "bg-violet-50",
    title: "Kurumsal e-posta",
    desc: "siz@firmaniz.com.tr adresiyle profesyonel olun.",
    cta: "Bize Ulaşın",
    href: "/iletisim",
  },
  {
    icon: "server",
    color: "text-sky-600",
    bg: "bg-sky-50",
    title: "Günlük yedekleme",
    desc: "Verileriniz güvende, otomatik backup.",
    cta: "Bayilik Programı",
    href: "/hosting/bayilik",
  },
  {
    icon: "shieldCheck",
    color: "text-amber-600",
    bg: "bg-amber-50",
    title: "Marka koruması",
    desc: "Tüm uzantıları tescil edin.",
    cta: "Uzantıları Keşfet",
    href: "/domain",
  },
  {
    icon: "headphones",
    color: "text-rose-600",
    bg: "bg-rose-50",
    title: "7/24 destek",
    desc: "Türkçe destek hattı",
    cta: "İletişime Geç",
    href: "/iletisim",
  },
];

export default function DomainServicesGrid() {
  return (
    <section className="bg-[#F7F9FC] py-20 px-6 border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
            İnternetteki her şey birbirine bağlı
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            Alan adınız dijital varlığınızın temeli.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((item) => {
            const Icon = ICONS[item.icon];

            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-4 hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center ${item.color}`}
                >
                  <Icon size={20} />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-sm mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  {item.cta}
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
