"use client";

import Link from "next/link";
import { ICONS } from "@/lib/icons";

const ITEMS = [
  {
    title: "Secure Site Pro",
    desc: "Web sitenizi koruyan güvenlik ve izleme aracı",
    href: "/web-guvenligi/secure-site-pro",
    icon: "box",
    badge: "Pro",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
  },
  {
    title: "SiteLock",
    desc: "Web sitesi güvenlik koruma hizmeti",
    href: "/web-guvenligi/sitelock",
    icon: "shieldCheck",
    badge: "Tarama",
    color: "#6366F1",
    bg: "rgba(99,102,241,0.08)",
  },
] as const;

const ArrowIcon = ICONS.arrowUpRight;
export default function WebSecurityDropdown({
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
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-indigo-500" />

      <Link
        href="/web-guvenligi"
        onClick={stop}
        className="group block px-5 pt-4 pb-3 border-b border-gray-100 hover:bg-slate-50 transition"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
              Web Güvenliği
            </p>
            <p className="text-sm font-semibold text-gray-800 mt-0.5 group-hover:text-blue-600 transition">
              Koruma, izleme ve güvenlik katmanları
            </p>
          </div>

          <ArrowIcon size={14} />
        </div>
      </Link>

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
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition"
                  style={{ background: item.bg }}
                >
                  <Icon
                    size={14}
                    style={{ color: item.color }}
                    strokeWidth={1.8}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
                      {item.title}
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
