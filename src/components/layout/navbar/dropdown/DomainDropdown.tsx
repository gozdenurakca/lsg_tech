"use client";

import Link from "next/link";
import { ICONS } from "@/lib/icons";

const OPERATIONS = [
  {
    name: "Alan Adı Sorgula",
    desc: "Uygun domain bulun ve hemen kaydedin",
    href: "/domain",
    icon: "search",
  },
  {
    name: "Alan Adı Tescil",
    desc: "Yeni domain kaydı oluşturun",
    href: "/domain/tescil",
    icon: "add",
  },
  {
    name: "Alan Adı Transfer",
    desc: "Mevcut domaininizi taşıyın",
    href: "/domain/transfer",
    icon: "transfer",
  },
  {
    name: "Alan Adı Yenileme",
    desc: "Süre uzatma ve yönetim",
    href: "/domain/yenileme",
    icon: "refresh",
  },
] as const;

const ArrowIcon = ICONS.arrowUpRight;

export default function DomainDropdown({ closeAll }: { closeAll: () => void }) {
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
      <div className="h-[2px] w-full bg-gradient-to-r from-emerald-500 to-teal-500" />

      <Link
        href="/domain"
        onClick={stop}
        className="group block px-6 pt-5 pb-4 border-b border-gray-100 hover:bg-slate-50 transition"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
              Alan Adları
            </p>
            <p className="text-sm font-semibold text-gray-800 mt-0.5 group-hover:text-emerald-600 transition">
              Domain tescil, transfer ve yönetim işlemleri
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
            Domain Ara
            <ArrowIcon size={13} />
          </div>
        </div>
      </Link>

      <div className="px-5 py-4">
        <div className="space-y-1">
          {OPERATIONS.map((item) => {
            const Icon = ICONS[item.icon] ?? ICONS.search;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={stop}
                className="group flex items-start gap-3 px-3 py-3 rounded-xl transition hover:bg-slate-50"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <Icon size={14} className="text-emerald-600" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-emerald-600">
                    {item.name}
                  </p>
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
