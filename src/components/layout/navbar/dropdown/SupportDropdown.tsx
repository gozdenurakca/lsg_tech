"use client";

import Link from "next/link";
import { ICONS } from "@/lib/icons";

const SUPPORT_ITEMS = [
  {
    icon: "lifeBuoy",
    name: "Destek Talebi Oluştur",
    desc: "Teknik ekibimize ulaşın",
    href: "/destek/talep",
  },
  {
    icon: "message",
    name: "İletişim",
    desc: "Bize mesaj gönderin",
    href: "/iletisim",
  },
  {
    icon: "phone",
    name: "Telefon Desteği",
    desc: "+90 (850) 000 00 00",
    href: "tel:+908500000000",
  },
  {
    icon: "mail",
    name: "E-posta",
    desc: "support@lsgtech.com",
    href: "mailto:support@lsgtech.com",
  },
] as const;

const ArrowIcon = ICONS.arrowUpRight;
export default function SupportDropdown({
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
      className="w-[360px] max-w-[calc(100vw-32px)] bg-white rounded-2xl overflow-hidden z-50"
      style={{
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.08), 0 30px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
      }}
    >
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-indigo-500" />

      <Link
        href="/destek"
        onClick={stop}
        className="group block px-5 pt-4 pb-3 border-b border-gray-100 hover:bg-slate-50 transition"
      >
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
            Destek
          </p>

          <ArrowIcon size={14} />
        </div>
      </Link>

      <div className="p-4 space-y-1">
        {SUPPORT_ITEMS.map((item) => {
          const Icon = ICONS[item.icon] ?? ICONS.lifeBuoy;

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={stop}
              className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <Icon size={14} className="text-blue-600" />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
                  {item.name}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
