"use client";

import Link from "next/link";
import { ICONS } from "@/lib/icons";

type Stat = { k: string; v: string };

type Props = {
  badge?: string;
  title: string;
  description: string;
  cardTitle?: string;
  cardDescription?: string;
  stats?: Stat[];
  note?: string;
};

export default function SslHero({
  badge,
  title,
  description,
  stats = [],
  note,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-28 pb-24">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          {badge && (
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 backdrop-blur">
              <ICONS.shieldCheck size={14} />
              {badge}
            </div>
          )}

          <h1 className="text-[clamp(40px,5vw,64px)] font-extrabold leading-[1.05] tracking-tight mb-6">
            {title}
          </h1>

          <p className="text-[18px] text-slate-300 leading-relaxed mb-10 max-w-xl">
            {description}
          </p>

          {stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {stats.map((s) => (
                <div
                  key={s.k}
                  className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-5 text-center transition hover:bg-white/10"
                >
                  <div className="text-[22px] font-extrabold text-white mb-1">
                    {s.v}
                  </div>

                  <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wide">
                    {s.k}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 text-white font-bold px-8 py-3.5 rounded-xl text-[15px] transition hover:-translate-y-0.5 shadow-lg shadow-blue-500/30"
            >
              Sertifika Seç
              <ICONS.arrowRight size={16} />
            </a>

            <Link
              href="/kaynaklar/ssl-nedir"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl text-[15px] transition hover:-translate-y-0.5"
            >
              Daha Fazla Bilgi
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <ICONS.lock size={16} />
              256-bit Encryption
            </span>

            <span className="flex items-center gap-2">
              <ICONS.shieldCheck size={16} />
              Trusted CA Providers
            </span>

            <span className="flex items-center gap-2">
              <ICONS.globe size={16} />
              Global Browser Support
            </span>
          </div>

          {note && <p className="mt-6 text-xs text-slate-500">{note}</p>}
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-[40px] blur-2xl" />

          <div className="relative bg-white/5 border border-white/10 backdrop-blur rounded-[28px] p-12 flex items-center justify-center">
            <ICONS.shieldCheck
              size={120}
              className="text-blue-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
