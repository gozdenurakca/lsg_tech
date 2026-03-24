"use client";

import { ICONS } from "@/lib/icons";

const PRIORITIES = [
  {
    label: "Düşük",
    eta: "~24 saat",
    color: "bg-blue-500",
  },
  {
    label: "Orta",
    eta: "~8 saat",
    color: "bg-orange-400",
  },
  {
    label: "Yüksek",
    eta: "~2 saat",
    color: "bg-red-500",
  },
] as const;

const HELP_LINKS = [
  { icon: "key", text: "Şifre nasıl sıfırlanır?" },
  { icon: "globe", text: "DNS ayarları rehberi" },
  { icon: "lock", text: "SSL kurulum adımları" },
  { icon: "mail", text: "E-posta kurulum rehberi" },
] as const;

export default function SupportSidebar() {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <h3 className="font-extrabold text-[#1b2a4a] text-sm mb-4 flex items-center gap-2">
          <ICONS.clock size={16} className="text-blue-500" />
          Tahmini Yanıt Süreleri
        </h3>

        <div className="flex flex-col gap-3">
          {PRIORITIES.map((p) => (
            <div
              key={p.label}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${p.color}`} />
                <span className="text-gray-600">{p.label}</span>
              </div>

              <span className="font-bold text-[#1b2a4a]">{p.eta}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400">
          <span className="w-2 h-2 bg-[#2ecc8f] rounded-full animate-pulse" />
          Canlı destek 7/24 aktif
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <h3 className="font-extrabold text-[#1b2a4a] text-sm mb-4 flex items-center gap-2">
          <ICONS.book size={16} className="text-blue-500" />
          Önce Burayı Deneyin
        </h3>

        <div className="flex flex-col gap-2">
          {HELP_LINKS.map(({ icon, text }) => {
            const Icon = ICONS[icon] ?? ICONS.message;

            return (
              <a
                key={text}
                href="#"
                className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-[#2ecc8f] py-1.5 transition-colors group"
              >
                <Icon size={16} />
                <span className="group-hover:underline">{text}</span>
              </a>
            );
          })}
        </div>
      </div>

      <a
        href="#chat"
        className="group flex items-center gap-4 bg-[#152238] rounded-2xl p-5 border border-[#2ecc8f]/20 hover:border-[#2ecc8f]/50 transition-all"
      >
        <div className="w-12 h-12 bg-[#2ecc8f]/15 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
          <ICONS.message size={22} className="text-[#2ecc8f]" />
        </div>

        <div>
          <p className="text-white font-bold text-sm">Canlı Destek</p>
          <p className="text-white/50 text-xs">Ortalama yanıt: 2 dk</p>
        </div>

        <span className="ml-auto text-[#2ecc8f] text-lg group-hover:translate-x-1 transition-transform">
          →
        </span>
      </a>
    </div>
  );
}
