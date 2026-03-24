"use client";

import Link from "next/link";
import { ICONS } from "@/lib/icons";

const ITEMS = [
  {
    name: "Bayilik Programı",
    desc: "Satış & pazarlama desteğiyle bayilik modeli",
    href: "/hosting/bayilik",
    icon: "users",
    badge: "Reseller",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
  },
  {
    name: "Hosting Partner",
    desc: "Barındırma çözümlerinde ortak operasyon",
    href: "/hosting/hosting-partner",
    icon: "handshake",
    badge: "Partner",
    color: "#6366F1",
    bg: "rgba(99,102,241,0.08)",
  },
  {
    name: "Teknoloji Partner",
    desc: "Entegrasyon, API ve ürün iş birlikleri",
    href: "/hosting/teknoloji-partner",
    icon: "boxes",
    badge: "Tech",
    color: "#0EA5E9",
    bg: "rgba(14,165,233,0.08)",
  },
] as const;

export default function HostingDropdown({
  closeAll,
}: {
  closeAll: () => void;
}) {
  const stop = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeAll();
  };

  return (
    <div
      className="w-[420px] max-w-[calc(100vw-32px)] bg-white rounded-2xl overflow-hidden z-50"
      style={{
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.08), 0 30px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
      }}
    >
      <div className="h-[2px] w-full bg-gradient-to-r from-indigo-500 to-blue-500" />

      <div className="px-5 pt-4 pb-3 border-b border-gray-100">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
          Hosting
        </p>
        <p className="text-sm font-semibold text-gray-800 mt-0.5">
          İş ortaklığı programları
        </p>
      </div>

      <div className="p-4">
        <div className="space-y-1">
          {ITEMS.map((item) => {
            const Icon = ICONS[item.icon] ?? ICONS.box;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={stop}
                className="group flex items-start gap-3 px-3 py-3 rounded-xl transition hover:bg-slate-50"
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                  style={{ background: item.bg }}
                >
                  <Icon
                    size={14}
                    style={{ color: item.color }}
                    strokeWidth={1.8}
                  />
                </div>

                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                      {item.name}
                    </span>

                    <span
                      className="text-[9px] font-bold px-1.5 py-0.5 rounded-md"
                      style={{ background: item.bg, color: item.color }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
