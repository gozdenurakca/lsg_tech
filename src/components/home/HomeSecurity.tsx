"use client";

import Image from "next/image";
import Link from "next/link";
import { ICONS } from "@/lib/icons";

const ArrowIcon = ICONS.arrowRight;
const CheckIcon = ICONS.check;

const SOLUTIONS = [
  {
    href: "/hosting/bayilik",
    iconBg: "bg-indigo-100 group-hover:bg-indigo-600",
    iconColor: "text-indigo-600 group-hover:text-white",
    icon: "server",
    title: "Web Hosting",
    desc: "cPanel, SSD NVMe ve günlük yedekleme ile kesintisiz, hızlı hosting.",
  },
  {
    href: "/domain",
    iconBg: "bg-sky-100 group-hover:bg-sky-600",
    iconColor: "text-sky-600 group-hover:text-white",
    icon: "globe",
    title: "Alan Adı Tescili",
    desc: ".com.tr, .com ve 500+ uzantıyla markanızı dijitale taşıyın.",
  },
  {
    href: "/cozumler/sunucu-guvenligi",
    iconBg: "bg-orange-100 group-hover:bg-orange-600",
    iconColor: "text-orange-600 group-hover:text-white",
    icon: "shield",
    title: "Sunucu Güvenliği",
    desc: "Imunify360 ile DDoS koruması, real-time tarama ve otomatik temizlik.",
  },
  {
    href: "/web-guvenligi",
    iconBg: "bg-emerald-100 group-hover:bg-emerald-600",
    iconColor: "text-emerald-600 group-hover:text-white",
    icon: "lock",
    title: "Web Sitesi Güvenliği",
    desc: "WAF, günlük malware tarama ve otomatik temizlikle siteniz her zaman güvende.",
  },
];

export default function HomeSecurity() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#eef2ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {SOLUTIONS.map((s) => {
              const Icon = ICONS[s.icon] || ICONS.server;

              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
                >
                  <div className="flex gap-4 mb-4">
                    <div
                      className={`w-12 h-12 flex items-center justify-center ${s.iconBg}`}
                    >
                      <Icon className={`w-6 h-6 ${s.iconColor}`} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">{s.title}</h3>
                      <p className="text-sm text-slate-500">{s.desc}</p>
                    </div>
                  </div>

                  <span className="flex items-center gap-2 text-sm font-semibold">
                    Daha Fazla Bilgi <ArrowIcon size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Sol — metin */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">
              Uçtan Uca Koruma
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug mb-5">
              Siteniz her an{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
                güvende
              </span>
            </h2>
            <p className="text-slate-500 text-base leading-7 mb-8">
              Otomatik yenileme, gerçek zamanlı tarama ve çok katmanlı güvenlik
              duvarı ile web sitenizi tehditlere karşı 7/24 koruyun.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                { text: "SSL sertifikası otomatik yenileme", color: "text-emerald-500" },
                { text: "Real-time malware tarama ve temizlik", color: "text-emerald-500" },
                { text: "WAF ile SQL enjeksiyon & XSS koruması", color: "text-emerald-500" },
                { text: "DDoS saldırılarına karşı anlık engelleme", color: "text-emerald-500" },
                { text: "Günlük otomatik yedekleme", color: "text-emerald-500" },
              ].map(({ text, color }) => (
                <li key={text} className="flex items-center gap-3">
                  <span className={`flex-shrink-0 w-5 h-5 ${color}`}>
                    <CheckIcon className="w-5 h-5" />
                  </span>
                  <span className="text-slate-700 text-sm font-medium">{text}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/guvenlik"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-md"
            >
              Güvenlik Çözümlerini Keşfet <ArrowIcon size={15} />
            </Link>
          </div>

          {/* Sağ — görsel kart */}
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-md rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl">
              {/* Başlık */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <ICONS.shieldCheck size={20} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Güvenlik Durumu</p>
                  <p className="text-emerald-400 text-xs font-medium">● Aktif Koruma</p>
                </div>
              </div>

              {/* Metrikler */}
              <div className="space-y-3 mb-6">
                {[
                  { label: "SSL Sertifikası", status: "Geçerli", ok: true },
                  { label: "Malware Tarama", status: "Temiz", ok: true },
                  { label: "WAF Durumu", status: "Aktif", ok: true },
                  { label: "DDoS Koruması", status: "Etkin", ok: true },
                ].map(({ label, status, ok }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3"
                  >
                    <span className="text-slate-400 text-xs">{label}</span>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        ok
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Alt bilgi */}
              <div className="flex items-center gap-2 text-xs text-slate-500 border-t border-white/10 pt-4">
                <ICONS.clock size={12} />
                <span>Son tarama: 2 dakika önce</span>
              </div>
            </div>

            {/* Dekoratif arka plan blur */}
            <div className="absolute -z-10 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>
    </>
  );
}
