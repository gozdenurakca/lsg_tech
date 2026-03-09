"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const POPULAR_EXTENSIONS = [
  ".com.tr",
  ".com",
  ".net",
  ".org",
  ".io",
  ".net.tr",
];

export default function DomainSearchPage() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/domain/results?q=${encodeURIComponent(trimmed)}`);
  };

  const handleExtensionClick = (ext: string) => {
    // Strip any existing extension then append the chosen one
    const exts = [
      ".com.tr",
      ".net.tr",
      ".org.tr",
      ".com",
      ".net",
      ".org",
      ".io",
    ];
    let base = query.trim().toLowerCase();
    exts.forEach((e) => {
      if (base.endsWith(e)) base = base.slice(0, -e.length);
    });
    setQuery(base + ext);
  };

  return (
    <main className="min-h-screen bg-[#1b2a4a] font-sans">
      {/* NAV */}
      <nav className="flex items-center justify-between px-10 py-4 bg-[#152238]">
        <span className="text-white text-2xl font-extrabold tracking-tight">
          domain<span className="text-[#2ecc8f]">tr</span>
        </span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
          {["Alan Adları", "Hosting", "SSL", "Destek"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <button className="text-sm font-semibold text-[#152238] bg-[#2ecc8f] hover:bg-[#27b87d] px-5 py-2 rounded-full transition-colors">
          Giriş Yap
        </button>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center px-4 py-28 overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(46,204,143,0.13) 0%, transparent 70%)",
          }}
        />

        <p className="mb-4 text-[#2ecc8f] text-sm font-bold uppercase tracking-widest">
          Alan Adı Sorgula
        </p>
        <h1 className="text-center text-white font-extrabold text-4xl md:text-6xl leading-tight mb-4">
          Hayalindeki alan adı
          <br />
          <span className="text-[#2ecc8f]">seni bekliyor mu?</span>
        </h1>
        <p className="text-white/50 text-lg mb-10 text-center max-w-md">
          Milyonlarca domain arasında sana özel olanı bul ve hemen tescil et.
        </p>

        {/* SEARCH BOX */}
        <form
          onSubmit={handleSearch}
          className="w-full max-w-2xl relative z-10"
        >
          <div className="flex items-stretch bg-white rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <input
              type="text"
              value={query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setQuery(e.target.value)
              }
              placeholder="orneksite.com.tr"
              className="flex-1 px-6 py-5 text-lg text-[#1b2a4a] font-medium outline-none placeholder-gray-400"
              autoFocus
            />
            <button
              type="submit"
              className="bg-[#2ecc8f] hover:bg-[#27b87d] active:scale-95 text-white font-bold text-base px-8 transition-all duration-150 whitespace-nowrap"
            >
              Alan Adı Sorgula
            </button>
          </div>

          {/* Extension pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {POPULAR_EXTENSIONS.map((ext) => (
              <button
                key={ext}
                type="button"
                onClick={() => handleExtensionClick(ext)}
                className="px-4 py-1.5 rounded-full text-sm font-semibold text-white/70 border border-white/20 bg-white/5 hover:bg-white/15 hover:text-white transition-all"
              >
                {ext}
              </button>
            ))}
          </div>
        </form>

        {/* TRUST BADGES */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 text-white/40 text-sm">
          {[
            { icon: "🔒", label: "Güvenli Ödeme" },
            { icon: "🏆", label: "20M+ Müşteri" },
            { icon: "⚡", label: "Anında Tescil" },
            { icon: "🇹🇷", label: "Türkçe Destek" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <span>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR EXTENSIONS SECTION */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-white/80 text-lg font-bold mb-6">
          Popüler Uzantılar
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { ext: ".com.tr", desc: "Türkiye'nin tercihi", price: "₺149" },
            { ext: ".com", desc: "Global standart", price: "₺299" },
            { ext: ".net", desc: "Teknoloji alanları", price: "₺259" },
            { ext: ".org", desc: "Sivil kuruluşlar", price: "₺229" },
            { ext: ".io", desc: "Tech startuplar", price: "₺699" },
            { ext: ".net.tr", desc: "Türkiye ağları", price: "₺149" },
          ].map(({ ext, desc, price }) => (
            <div
              key={ext}
              onClick={() => handleExtensionClick(ext)}
              className="group cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#2ecc8f]/40 rounded-xl p-5 flex items-center justify-between transition-all duration-200"
            >
              <div>
                <p className="text-white font-bold text-xl group-hover:text-[#2ecc8f] transition-colors">
                  {ext}
                </p>
                <p className="text-white/40 text-sm mt-0.5">{desc}</p>
              </div>
              <p className="text-[#2ecc8f] font-bold text-lg">
                {price}
                <span className="text-white/30 text-xs font-normal">/yıl</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
