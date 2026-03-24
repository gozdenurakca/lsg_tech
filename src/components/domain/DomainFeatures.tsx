/*
marketing carousel = güven, kullanım kolaylığı
SADECE MARKETING !
*/

"use client";

/*
marketing carousel = güven, kullanım kolaylığı
SADECE MARKETING !
*/

import { useState } from "react";
import Icon from "@/components/ui/Icon";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const FEATURES = [
  {
    title: "Dünyanın En Güvenilir Domain Sağlayıcısı",
    desc: "LSG Teknoloji, 500.000'den fazla kayıtlı domain ve 20+ yıllık sektör deneyimiyle yanınızda.",
    visual: <SecurityVisual />,
  },
  {
    title: "500'den Fazla Uzantı Arasından Seçin",
    desc: ".com.tr'den .io'ya, markanızı en iyi yansıtan uzantıyı saniyeler içinde bulun ve kaydedin.",
    visual: <ExtensionsVisual />,
  },
  {
    title: "Teknik Bilgiye Gerek Yok",
    desc: "Alan adınızı aldıktan sonra kolay yönetim paneliyle DNS, yönlendirme ve e-posta ayarlarını yapın.",
    visual: <EasySetupVisual />,
  },
  {
    title: "Domain Al, Online Varlığını Kur",
    desc: "Alan adıyla birlikte hosting, SSL ve e-posta çözümlerini tek pakette edinin.",
    visual: <OnlinePresenceVisual />,
  },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function DomainFeatures() {
  const [active, setActive] = useState(0);
  const total = FEATURES.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const visibleDesktop = FEATURES;
  const visibleMobile = [FEATURES[active]];

  return (
    <section className="bg-white py-20 px-6 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Alan adınızı <span className="text-blue-600">güvenle</span> satın
            alın
          </h2>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center transition-all"
            >
              <Icon name="chevronLeft" size={18} />
            </button>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center transition-all"
            >
              <Icon name="chevronRight" size={18} />
            </button>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-4 gap-5">
          {visibleDesktop.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <FeatureCard {...visibleMobile[0]} />

          <div className="flex justify-center gap-1.5 mt-5">
            {FEATURES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === active ? "bg-blue-600 w-4" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FEATURE CARD
───────────────────────────────────────────── */

function FeatureCard({
  title,
  desc,
  visual,
}: {
  title: string;
  desc: string;
  visual: React.ReactNode;
}) {
  return (
    <div className="group flex flex-col rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="h-48 bg-slate-50 flex items-center justify-center">
        {visual}
      </div>

      <div className="p-5 flex-1">
        <h3 className="font-extrabold text-slate-900 text-base mb-2 group-hover:text-blue-700 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm">{desc}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VISUALS
───────────────────────────────────────────── */

function SecurityVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white rounded-xl shadow-md px-5 py-4 w-44">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
            <Icon name="shieldCheck" size={13} className="text-white" />
          </div>
          <span className="text-xs font-bold">orneksite.com.tr</span>
        </div>

        <div className="text-xs text-emerald-600 font-semibold">
          Güvenli & Aktif
        </div>
      </div>
    </div>
  );
}

function ExtensionsVisual() {
  const exts = [".com.tr", ".com", ".net", ".io", ".org", ".net.tr"];

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="grid grid-cols-3 gap-2">
        {exts.map((e) => (
          <span
            key={e}
            className="text-xs font-bold bg-white px-2 py-1 rounded"
          >
            {e}
          </span>
        ))}
      </div>
    </div>
  );
}

function EasySetupVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="bg-white rounded-xl p-4 w-44 space-y-2">
        {["Domain", "DNS", "Mail"].map((l, i) => (
          <div key={l} className="flex items-center gap-2">
            <div className="w-4 h-4 bg-emerald-500 rounded-full" />
            <span className="text-xs">{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OnlinePresenceVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="bg-white rounded-xl p-4 w-44">
        <div className="flex items-center gap-2 mb-2">
          <Icon name="globe" size={14} />
          <span className="text-xs">orneksite.com.tr</span>
        </div>
        <Icon name="rocket" size={16} className="text-orange-500" />
      </div>
    </div>
  );
}
