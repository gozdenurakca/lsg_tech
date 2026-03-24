/*
search input , CTA , trust badges
kritik conversion component
*/

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ShieldCheck, Zap, Headphones, Star, Lock } from "lucide-react";
import DomainCard from "@/components/domain/DomainCard";
import type { Extension } from "@/lib/domain/types";
import { stripExtension } from "@/lib/domain/utils";
import { QUICK_EXTENSIONS } from "@/lib/domain/extensions";

const STATS = [
  { value: "500K+", label: "Kayıtlı Domain" },
  { value: "7/24", label: "Türkçe Destek" },
  { value: "₺99'dan", label: "Başlayan Fiyatlar" },
  { value: "%100", label: "Güvenli Ödeme" },
];

const TRUST = [
  { icon: "ShieldCheck", label: "SSL Güvencesi" },
  { icon: "Lock", label: "Güvenli Ödeme" },
  { icon: "Zap", label: "Anında Aktivasyon" },
  { icon: Headphones, label: "7/24 Destek" },
  { icon: Star, label: "Müşteri Memnuniyeti" },
];

export default function DomainHero() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/domain/results?q=${encodeURIComponent(trimmed)}`);
  };

  const handlePill = (ext: string) => {
    const base = stripExtension(query) || "orneksite";
    setQuery(base + ext);
  };

  return (
    <section className="bg-gradient-to-br from-[#0b1628] to-[#1a3054] border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-14">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-blue-300">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            Türkiye&apos;nin En Hızlı Domain Kaydı
          </span>
        </div>

        <h1 className="text-center text-white font-extrabold text-4xl md:text-6xl leading-[1.1] tracking-tight mb-4">
          Markanı İnternete <span className="text-blue-400">Taşı</span>
        </h1>

        <p className="text-center text-slate-300 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Hayalindeki alan adını bul, hemen tescil et.{" "}
          <span className="text-white font-semibold">
            ₺99&apos;dan başlayan
          </span>{" "}
          fiyatlarla.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-5">
          <div className="flex items-stretch rounded-2xl overflow-hidden border border-white/20 shadow-lg bg-white/5 backdrop-blur-sm">
            <div className="flex items-center pl-5 text-slate-400">
              <Search size={18} />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="orneksite.com.tr"
              autoFocus
              className="flex-1 bg-transparent px-4 py-4 text-base text-white font-medium outline-none placeholder-slate-500"
            />
            <button
              type="submit"
              className="px-7 py-4 font-bold text-white text-sm whitespace-nowrap bg-blue-600 hover:bg-blue-500 transition-colors"
            >
              Alan Adı Sorgula
            </button>
          </div>
        </form>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {QUICK_EXTENSIONS.map((ext) => (
            <button
              key={ext}
              type="button"
              onClick={() => handlePill(ext)}
              className="px-4 py-1.5 rounded-full text-sm font-semibold text-slate-300 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-blue-400/50 hover:text-blue-300 transition-all"
            >
              {ext}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 mb-10">
          {STATS.map(({ value, label }) => (
            <div key={label} className="bg-white/5 px-6 py-5 text-center">
              <p className="text-2xl font-extrabold text-white mb-0.5">
                {value}
              </p>
              <p className="text-xs text-slate-400 font-medium">{label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {TRUST.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-slate-400 text-sm"
            >
              <Icon size={14} className="text-blue-400 shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
