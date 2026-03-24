/*
marketing carousel = güven, kullanım kolaylığı
SADECE MARKETING !
*/
"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Globe,
  Zap,
  Rocket,
} from "lucide-react";

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
    desc: "Alan adıyla birlikte hosting, SSL ve e-posta çözümlerini tek pakette edinin. Her şey hazır.",
    visual: <OnlinePresenceVisual />,
  },
];

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
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 max-w-xs md:max-w-none">
            Alan adınızı <span className="text-blue-600">güvenle</span> satın
            alın
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center transition-all"
            >
              <ChevronLeft size={18} className="text-slate-500" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center transition-all"
            >
              <ChevronRight size={18} className="text-slate-500" />
            </button>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-4 gap-5">
          {visibleDesktop.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>

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
    <div className="group flex flex-col rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default">
      <div className="h-48 bg-slate-50 flex items-center justify-center overflow-hidden">
        {visual}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-extrabold text-slate-900 text-base leading-snug mb-2 group-hover:text-blue-700 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function SecurityVisual() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
      }}
    >
      <div className="bg-white rounded-xl shadow-md px-5 py-4 w-44 relative">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
            <ShieldCheck size={13} className="text-white" />
          </div>
          <span className="text-xs font-bold text-slate-700">
            orneksite.com.tr
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold bg-emerald-50 rounded-full px-2 py-1 w-fit">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
          Güvenli & Aktif
        </div>
        <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-slate-500">
          <ShieldCheck size={11} className="text-blue-500" />
          SSL Korumalı
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow px-2.5 py-1.5 flex items-center gap-1.5">
        <ShieldCheck size={13} className="text-blue-600" />
        <span className="text-[11px] font-bold text-slate-700">Doğrulandı</span>
      </div>
    </div>
  );
}

function ExtensionsVisual() {
  const exts = [
    { label: ".com.tr", color: "bg-blue-100 text-blue-700" },
    { label: ".com", color: "bg-emerald-100 text-emerald-700" },
    { label: ".net", color: "bg-violet-100 text-violet-700" },
    { label: ".io", color: "bg-cyan-100 text-cyan-700" },
    { label: ".org", color: "bg-pink-100 text-pink-700" },
    { label: ".net.tr", color: "bg-amber-100 text-amber-700" },
  ];
  return (
    <div
      className="relative w-full h-full flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
      }}
    >
      <div className="grid grid-cols-3 gap-2 w-full max-w-[180px]">
        {exts.map(({ label, color }) => (
          <span
            key={label}
            className={`${color} text-[11px] font-extrabold px-2 py-1.5 rounded-lg text-center`}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="absolute top-3 right-3 bg-white rounded-full shadow px-2 py-1">
        <span className="text-[10px] font-bold text-slate-600">
          500+ uzantı
        </span>
      </div>
    </div>
  );
}

function EasySetupVisual() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)",
      }}
    >
      <div className="bg-white rounded-xl shadow-md p-4 w-44 space-y-2.5">
        {[
          { done: true, label: "Domain Kaydı" },
          { done: true, label: "DNS Ayarı" },
          { done: false, label: "E-posta Kur" },
        ].map(({ done, label }) => (
          <div key={label} className="flex items-center gap-2.5">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                done ? "bg-emerald-500" : "bg-slate-200"
              }`}
            >
              {done && (
                <span className="text-white text-[10px] font-black">✓</span>
              )}
            </div>
            <span
              className={`text-xs font-semibold ${done ? "text-slate-700" : "text-slate-400"}`}
            >
              {label}
            </span>
          </div>
        ))}
        <div className="pt-1">
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-400 rounded-full"
              style={{ width: "66%" }}
            />
          </div>
          <p className="text-[10px] text-slate-400 mt-1">2/3 tamamlandı</p>
        </div>
      </div>
      <div className="absolute top-3 left-3 bg-violet-500 text-white rounded-full px-2 py-0.5">
        <span className="text-[10px] font-bold flex items-center gap-1">
          <Zap size={9} /> Kolay Kurulum
        </span>
      </div>
    </div>
  );
}

function OnlinePresenceVisual() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
      }}
    >
      <div className="bg-white rounded-xl shadow-md p-4 w-44">
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex gap-0.5">
            <span className="w-2 h-2 rounded-full bg-red-300" />
            <span className="w-2 h-2 rounded-full bg-yellow-300" />
            <span className="w-2 h-2 rounded-full bg-green-300" />
          </div>
          <div className="flex-1 h-3 bg-slate-100 rounded-full text-[8px] text-slate-400 flex items-center px-1.5 overflow-hidden">
            orneksite.com.tr
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="h-2 bg-slate-100 rounded w-full" />
          <div className="h-2 bg-slate-100 rounded w-4/5" />
          <div className="h-8 bg-gradient-to-r from-orange-100 to-amber-100 rounded mt-2" />
          <div className="h-2 bg-slate-100 rounded w-3/4" />
        </div>
      </div>
      <div className="absolute bottom-3 right-3 bg-orange-500 text-white rounded-lg px-2 py-1 flex items-center gap-1">
        <Rocket size={11} />
        <span className="text-[10px] font-bold">Yayında!</span>
      </div>
      <div className="absolute top-3 right-3">
        <Globe size={18} className="text-orange-400" />
      </div>
    </div>
  );
}
