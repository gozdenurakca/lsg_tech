/*
search input , CTA , trust badges
kritik conversion component
*/

"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import Icon from "@/components/ui/Icon";
import { stripExtension } from "@/lib/domain/utils";
import { EXTENSIONS, QUICK_EXTENSIONS } from "@/lib/domain/extensions";

/* ─── Static data ─────────────────────────────────────────── */

const PLACEHOLDER_CYCLE = [
  "markan.com.tr",
  "sirketim.com",
  "startup.io",
  "projem.net",
  "ajansin.com.tr",
];

const STATS = [
  { value: "500K+",  label: "Kayıtlı Domain",   icon: "globe" },
  { value: "7/24",   label: "Türkçe Destek",     icon: "headphones" },
  { value: "₺99'dan",label: "Başlayan Fiyatlar", icon: "tag" },
  { value: "%100",   label: "Güvenli Ödeme",     icon: "shieldCheck" },
];

const FLOATING_DOMAINS = [
  { name: "markan.com.tr",  available: true,  price: "₺149", accentClass: "bg-blue-500/15 border-blue-500/30",  dotClass: "bg-emerald-400" },
  { name: "sirketim.com",   available: false, price: null,   accentClass: "bg-red-500/10  border-red-500/20",   dotClass: "bg-red-400"     },
  { name: "projem.io",      available: true,  price: "₺699", accentClass: "bg-cyan-500/15 border-cyan-500/30",  dotClass: "bg-emerald-400" },
  { name: "markam.net",     available: true,  price: "₺259", accentClass: "bg-violet-500/15 border-violet-500/30", dotClass: "bg-emerald-400" },
  { name: "startup.com.tr", available: true,  price: "₺149", accentClass: "bg-blue-500/15 border-blue-500/30",  dotClass: "bg-emerald-400" },
];

const TLD_GRID = EXTENSIONS.slice(0, 6).map((e) => ({
  ext: e.ext,
  price: e.price,
  oldPrice: e.oldPrice,
  badgeClass: e.color,
}));

const TICKER_ITEMS = [
  "galaksi.com.tr", "mimarlik.net", "yazilim.io", "sağlık.com",
  "egitim.com.tr", "lojistik.net", "fintech.io", "danismanlik.com",
  "guzellik.com.tr", "spor.net", "teknoloji.io", "mutfak.com",
];

type RightTab = "domains" | "prices";

/* ─── Component ──────────────────────────────────────────────── */

export default function DomainHero() {
  const [query, setQuery]         = useState("");
  const [focused, setFocused]     = useState(false);
  const [activeTab, setActiveTab] = useState<RightTab>("domains");
  const [placeholder, setPlaceholder] = useState(PLACEHOLDER_CYCLE[0]);
  const [charIdx, setCharIdx]     = useState(0);
  const [deleting, setDeleting]   = useState(false);
  const [wordIdx, setWordIdx]     = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  /* ── typewriter placeholder ── */
  useEffect(() => {
    const word = PLACEHOLDER_CYCLE[wordIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= word.length) {
      setPlaceholder(word.slice(0, charIdx));
      timer = setTimeout(() => setCharIdx((c) => c + 1), 80);
    } else if (!deleting && charIdx > word.length) {
      timer = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      setPlaceholder(word.slice(0, charIdx));
      timer = setTimeout(() => setCharIdx((c) => c - 1), 45);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % PLACEHOLDER_CYCLE.length);
      setCharIdx(0);
    }
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx]);

  /* ── handlers ── */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/domain/results?q=${encodeURIComponent(trimmed)}`);
  };

  const handlePill = (ext: string) => {
    const base = stripExtension(query) || "orneksite";
    setQuery(base + ext);
    inputRef.current?.focus();
  };

  /* ── render ── */
  return (
    <section className="relative bg-[#060d1a] overflow-hidden border-b border-white/5">

      {/* ── AURORA BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Large aurora blobs */}
        <div className="blob absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)" }} />
        <div className="blob absolute top-10 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)", animationDelay: "-6s" }} />
        <div className="blob absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)", animationDelay: "-12s" }} />
        {/* Subtle ring accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-blue-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-indigo-500/5" />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }} />
        {/* Top fade */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#060d1a] to-transparent" />
      </div>

      {/* ── MAIN GRID ── */}
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-10 lg:grid lg:grid-cols-[1fr_440px] lg:gap-20 lg:items-center">

        {/* ── LEFT ── */}
        <div className="animate-fade-in-up">

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold
            bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-blue-300 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            Türkiye&apos;nin En Hızlı Domain Kaydı
          </div>

          {/* Headline */}
          <h1 className="text-white font-extrabold leading-[1.06] tracking-tight mb-6"
            style={{ fontSize: "clamp(38px,4.8vw,64px)" }}>
            Markanı İnternete{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                Taşı
              </span>
              {/* underline glow */}
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-blue-500/60 via-cyan-500/60 to-indigo-500/60 blur-[2px]" />
            </span>
            <br />
            <span className="text-slate-400 font-semibold" style={{ fontSize: "0.58em", letterSpacing: "0.01em" }}>
              Hayalindeki alan adını saniyeler içinde tescil et
            </span>
          </h1>

          {/* Search bar */}
          <form onSubmit={handleSubmit} className="mb-5">
            <div
              className={`flex items-stretch rounded-2xl border shadow-2xl transition-all duration-300 ${
                focused
                  ? "border-blue-500/60 shadow-blue-900/50 bg-white/8"
                  : "border-white/12 shadow-blue-950/40 bg-white/5"
              } backdrop-blur-md overflow-hidden`}
              style={{ boxShadow: focused ? "0 0 0 3px rgba(59,130,246,0.12), 0 20px 60px rgba(0,0,50,0.5)" : undefined }}
            >
              <div className="flex items-center pl-5">
                <Icon name="search" size={17} className={`transition-colors ${focused ? "text-blue-400" : "text-slate-600"}`} />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder={placeholder || "…"}
                autoFocus
                className="flex-1 bg-transparent px-4 py-4 text-[15px] text-white font-medium outline-none placeholder-slate-600"
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-7 py-4 font-bold text-white text-sm whitespace-nowrap
                  bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500
                  transition-all duration-200 active:scale-95"
              >
                Sorgula
                <Icon name="arrowRight" size={14} className="text-white/80" />
              </button>
            </div>
          </form>

          {/* Quick pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {QUICK_EXTENSIONS.map((ext) => (
              <button
                key={ext}
                type="button"
                onClick={() => handlePill(ext)}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-400 border border-white/8
                  bg-white/4 hover:bg-blue-500/15 hover:border-blue-500/40 hover:text-blue-300 transition-all duration-150"
              >
                {ext}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-2">
            {STATS.map(({ value, label, icon }) => (
              <div key={label}
                className="flex flex-col items-center gap-1.5 bg-white/3 border border-white/6 rounded-xl py-3 px-2 text-center">
                <Icon name={icon} size={14} className="text-blue-400/70" />
                <p className="text-lg font-extrabold text-white leading-none">{value}</p>
                <p className="text-[10px] text-slate-500 font-medium leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="hidden lg:flex flex-col gap-3">

          {/* Panel header tabs */}
          <div className="flex items-center gap-1 bg-white/4 border border-white/8 rounded-xl p-1">
            <button
              type="button"
              onClick={() => setActiveTab("domains")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "domains"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              <Icon name="globe" size={12} />
              Popüler Domainler
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("prices")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "prices"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              <Icon name="tag" size={12} />
              TLD Fiyatları
            </button>
          </div>

          {/* Domain availability cards */}
          {activeTab === "domains" && (
            <div className="flex flex-col gap-2">
              {FLOATING_DOMAINS.map((d, i) => (
                <div
                  key={d.name}
                  className={`flex items-center justify-between border rounded-2xl px-4 py-3 backdrop-blur-sm
                    transition-all duration-200 hover:scale-[1.015] ${d.accentClass}`}
                  style={{
                    animationDelay: `${i * 80}ms`,
                    transform: `translateX(${i % 2 === 0 ? "0px" : "16px"})`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${d.dotClass} ${d.available ? "shadow-sm shadow-emerald-400/60" : "shadow-sm shadow-red-400/60"}`} />
                    <span className="text-white font-semibold text-[13px] font-mono">{d.name}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    {d.available ? (
                      <>
                        <span className="text-emerald-400 text-[11px] font-bold">Müsait</span>
                        <span className="text-white font-bold text-sm">
                          {d.price}<span className="text-slate-600 font-normal text-[10px]">/yıl</span>
                        </span>
                        <button className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold transition-colors">
                          Sepet
                        </button>
                      </>
                    ) : (
                      <>
                        <span className="text-red-400 text-[11px] font-bold">Alındı</span>
                        <button className="px-2.5 py-1 rounded-lg bg-white/8 hover:bg-white/12 text-slate-300 text-[11px] font-bold transition-colors">
                          Benzer
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
              <p className="text-center text-[10px] text-slate-700 pt-1">
                Kendi domain&apos;ini aramak için soldaki kutuyu kullan
              </p>
            </div>
          )}

          {/* TLD price grid */}
          {activeTab === "prices" && (
            <div className="grid grid-cols-3 gap-2">
              {TLD_GRID.map(({ ext, price, oldPrice, badgeClass }) => (
                <button
                  key={ext}
                  type="button"
                  onClick={() => handlePill(ext)}
                  className="group flex flex-col items-center bg-white/4 hover:bg-white/8 border border-white/8
                    hover:border-white/16 rounded-2xl px-3 py-4 transition-all duration-150 hover:scale-[1.03]"
                >
                  <span className={`text-[11px] font-black text-white px-2.5 py-0.5 rounded-lg mb-2.5 ${badgeClass}`}>
                    {ext}
                  </span>
                  {oldPrice && (
                    <span className="text-[10px] text-slate-700 line-through mb-0.5">₺{oldPrice}</span>
                  )}
                  <span className="text-white font-extrabold text-base leading-none">₺{price}</span>
                  <span className="text-slate-600 text-[10px] mt-0.5">/yıl</span>
                  <span className="text-blue-400/0 group-hover:text-blue-400/80 text-[10px] font-medium mt-2 transition-all">
                    Seç →
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Promo strip */}
          <div className="flex items-center gap-2.5 bg-gradient-to-r from-blue-600/15 to-indigo-600/10
            border border-blue-500/20 rounded-xl px-4 py-3">
            <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0">
              <Icon name="zap" size={14} className="text-blue-400" />
            </div>
            <div>
              <p className="text-white text-[12px] font-bold">Ücretsiz Eklentiler</p>
              <p className="text-slate-500 text-[11px]">Her domain ile DNS yönetimi, e-posta yönlendirme ve URL maskeleme ücretsiz</p>
            </div>
          </div>
        </div>

      </div>

      {/* ── TICKER ── */}
      <div className="relative border-t border-white/5 overflow-hidden py-3">
        <div className="flex gap-0 whitespace-nowrap"
          style={{ animation: "tickerScroll 30s linear infinite" }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 px-6 text-[11px] text-slate-600 font-medium">
              <span className="w-1 h-1 rounded-full bg-blue-500/40 shrink-0" />
              {item}
            </span>
          ))}
        </div>
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#060d1a] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#060d1a] to-transparent pointer-events-none" />
      </div>

      {/* ── TRUST BAR ── */}
      <div className="relative border-t border-white/5 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {[
            { icon: "shieldCheck", label: "SSL Güvencesi" },
            { icon: "lock",        label: "Güvenli Ödeme" },
            { icon: "zap",         label: "Anında Aktivasyon" },
            { icon: "headphones",  label: "7/24 Türkçe Destek" },
            { icon: "star",        label: "Müşteri Memnuniyeti" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 text-slate-600 text-xs hover:text-slate-400 transition-colors">
              <Icon name={icon} size={11} className="text-blue-500/70 shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker keyframe */}
      <style>{`
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  );
}
