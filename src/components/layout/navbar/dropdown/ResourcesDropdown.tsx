"use client";

import Link from "next/link";
import { ICONS } from "@/lib/icons";

const ABOUT_LINKS = [
  {
    name: "Hakkımızda",
    desc: "Misyon, vizyon ve hikayemiz",
    href: "/kaynaklar/hakkimizda",
  },
  {
    name: "Referanslar",
    desc: "Güvendiğimiz markalar",
    href: "/kaynaklar/referanslar",
  },
  {
    name: "Kariyer",
    desc: "Ekibimize katılın",
    href: "/kaynaklar/kariyer",
  },
];

const LEARN_LINKS = [
  {
    icon: "shieldCheck",
    name: "SSL Nedir?",
    desc: "Başlangıç rehberi",
    href: "/kaynaklar/ssl-nedir",
    accent: "#0EA5E9",
    bg: "rgba(14,165,233,0.08)",
  },
  {
    icon: "book",
    name: "DV / OV / EV Farkları",
    desc: "Hangi sertifika uygun?",
    href: "/kaynaklar/dv-ov-ev-farklari",
    accent: "#6366F1",
    bg: "rgba(99,102,241,0.08)",
  },
  {
    icon: "help",
    name: "SSS",
    desc: "Hızlı cevaplar",
    href: "/kaynaklar/sss",
    accent: "#0EA5E9",
    bg: "rgba(14,165,233,0.08)",
  },
  {
    icon: "video",
    name: "Webinar",
    desc: "Canlı & kayıtlı içerikler",
    href: "/kaynaklar/webinar",
    accent: "#6366F1",
    bg: "rgba(99,102,241,0.08)",
  },
] as const;

const ArrowIcon = ICONS.arrowUpRight;

export default function ResourcesDropdown({
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
      className="w-[520px] max-w-[calc(100vw-32px)] bg-white rounded-2xl overflow-hidden z-50"
      style={{
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.08), 0 30px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
      }}
    >
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-indigo-500" />

      <Link
        href="/kaynaklar"
        onClick={stop}
        className="group block px-5 pt-4 pb-3 border-b border-gray-100 hover:bg-slate-50 transition"
      >
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
            Kaynaklar
          </p>
          <ArrowIcon size={14} />
        </div>
      </Link>

      <div className="grid grid-cols-2">
        <div className="p-4 border-r border-gray-100">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.16em] mb-3">
            LSG
          </p>

          <div className="space-y-1">
            {ABOUT_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={stop}
                className="group flex items-start gap-2 px-2 py-2 rounded-lg hover:bg-slate-50 transition"
              >
                <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-blue-400/40 group-hover:bg-blue-500" />
                <div>
                  <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-gray-400">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="p-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.16em] mb-3">
            Öğrenin
          </p>

          <div className="space-y-1">
            {LEARN_LINKS.map((item) => {
              const Icon = ICONS[item.icon] ?? ICONS.book;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={stop}
                  className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-50 transition"
                >
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center"
                    style={{ background: item.bg }}
                  >
                    <Icon size={13} style={{ color: item.accent }} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-gray-400">{item.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
