/*
landing page for each TLD
mesela ; /domain/com veya /domain/com.tr
SEO + conversion page
*/
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ICONS } from "@/lib/icons";

type IconKey = keyof typeof ICONS;

interface Fact {
  icon: IconKey;
  bg: string;
  color: string;
  title: string;
  desc: string;
}

const TLD_DATA: Record<
  string,
  {
    ext: string;
    headline: string;
    sub: string;
    price: number;
    oldPrice?: number;
    accentBg: string;
    accentText: string;
    accentIconBg: string;
    heroBg: string;
    tag: string;
    facts: Fact[];
    steps: string[];
  }
> = {
  "com-tr": {
    ext: ".com.tr",
    headline: ".com.tr — Türkiye'deki markanızın dijital kilit taşı",
    sub: "Türk kullanıcıların ilk baktığı uzantı.",
    price: 149,
    oldPrice: 299,
    accentBg: "bg-blue-600",
    accentText: "text-blue-600",
    accentIconBg: "bg-blue-100",
    heroBg: "from-blue-50/60 to-white",
    tag: "Türkiye #1",
    facts: [
      {
        icon: "mapPin",
        bg: "bg-blue-50",
        color: "text-blue-600",
        title: "Yerel güven",
        desc: "Türk kullanıcılar .com.tr’ye güvenir.",
      },
      {
        icon: "trending",
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        title: "SEO avantajı",
        desc: "Yerel aramalarda avantaj sağlar.",
      },
      {
        icon: "shieldCheck",
        bg: "bg-violet-50",
        color: "text-violet-600",
        title: "NIC.tr güvencesi",
        desc: "Sadece Türkiye’ye özel kayıt.",
      },
      {
        icon: "mail",
        bg: "bg-amber-50",
        color: "text-amber-600",
        title: "Kurumsal e-posta",
        desc: "Profesyonel görünüm sağlar.",
      },
    ],
    steps: [
      "Alan adını yaz",
      "Müsaitliği kontrol et",
      "Sepete ekle",
      "Ödeme sonrası aktif",
    ],
  },

  com: {
    ext: ".com",
    headline: ".com — Küresel sahneye açılan kapı",
    sub: "Dünyanın en bilinen uzantısı.",
    price: 299,
    accentBg: "bg-emerald-600",
    accentText: "text-emerald-600",
    accentIconBg: "bg-emerald-100",
    heroBg: "from-emerald-50/60 to-white",
    tag: "Global",
    facts: [
      {
        icon: "globe",
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        title: "Global erişim",
        desc: "Her yerde tanınır.",
      },
      {
        icon: "badge",
        bg: "bg-blue-50",
        color: "text-blue-600",
        title: "Güven",
        desc: "Profesyonel algı oluşturur.",
      },
      {
        icon: "cart",
        bg: "bg-violet-50",
        color: "text-violet-600",
        title: "E-ticaret",
        desc: "Satış için ideal.",
      },
      {
        icon: "link",
        bg: "bg-amber-50",
        color: "text-amber-600",
        title: "Kolay hatırlanır",
        desc: "Marka değeri artırır.",
      },
    ],
    steps: [
      "Alan adı yaz",
      "Müsaitliği kontrol et",
      "Sepete ekle",
      "Anında aktif",
    ],
  },
};

const TRUST = [
  { icon: "shieldCheck", label: "SSL dahil", desc: "Tüm paketlerde" },
  { icon: "zap", label: "Anında aktif", desc: "Dakikalar içinde" },
  { icon: "globe", label: "DNS yönetimi", desc: "Tam kontrol" },
  { icon: "headphones", label: "7/24 destek", desc: "Türkçe destek" },
];

export default function DomainTldPage({ slug }: { slug: string }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const meta = TLD_DATA[slug];

  if (!meta) {
    return (
      <main className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-slate-400 mb-4">Uzantı bulunamadı</p>
          <Link href="/domain" className="text-sky-600 hover:underline">
            Geri dön
          </Link>
        </div>
      </main>
    );
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    router.push(
      `/domain/results?q=${encodeURIComponent(query)}&tld=${meta.ext}`,
    );
  };

  return (
    <main className="min-h-screen bg-white pt-16">
      {/* BACK */}
      <div className="max-w-5xl mx-auto px-6 pt-6">
        <Link
          href="/domain"
          className="flex items-center gap-2 text-sm text-gray-500"
        >
          <ArrowLeft size={14} /> Geri
        </Link>
      </div>

      {/* HERO */}
      <section className={`bg-gradient-to-br ${meta.heroBg} px-6 py-14`}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <span
              className={`${meta.accentBg} text-white px-3 py-1 rounded-full text-xs`}
            >
              {meta.tag}
            </span>

            <h1 className="text-3xl font-bold mt-4">{meta.headline}</h1>
            <p className="text-gray-500 mt-2">{meta.sub}</p>

            <div className="mt-6 text-4xl font-bold text-blue-600">
              ₺{meta.price}
            </div>
          </div>

          <form
            onSubmit={handleSearch}
            className="bg-white p-6 rounded-xl shadow"
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="domain adı"
              className="w-full border p-3 rounded-lg"
            />
            <button className="mt-4 w-full bg-blue-600 text-white p-3 rounded-lg">
              Sorgula
            </button>
          </form>
        </div>
      </section>

      {/* FACTS */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
          {meta.facts.map((f) => {
            const IconComp = ICONS[f.icon];

            if (!IconComp) {
              console.error("Icon bulunamadı:", f.icon);
              return null;
            }

            return (
              <div key={f.title} className="flex gap-4 p-4 border rounded-xl">
                <IconComp className={f.color} size={18} />

                <div>
                  <h3 className="font-bold">{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* TRUST */}
      <section className="py-8 border-t">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST.map((t) => {
            const IconComp = ICONS[t.icon];

            if (!IconComp) {
              console.error("Icon bulunamadı:", t.icon);
              return null;
            }

            return (
              <div key={t.label} className="flex items-center gap-2">
                <IconComp size={16} className="text-slate-500" />
                <span className="text-sm">{t.label}</span>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
