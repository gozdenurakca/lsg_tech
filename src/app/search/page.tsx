"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { ICONS } from "@/lib/icons";

const data = [
  {
    category: "SSL",
    items: [
      {
        title: "DV SSL Sertifikası",
        desc: "Hızlı doğrulama ile temel SSL güvenliği.",
        href: "/ssl/dv",
      },
      {
        title: "Kurumsal SSL (OV)",
        desc: "Şirket doğrulamalı güvenli sertifika.",
        href: "/ssl/ov",
      },
      {
        title: "Multi Domain SSL",
        desc: "Birden fazla domain için SSL.",
        href: "/ssl/multi-domain",
      },
    ],
  },
  {
    category: "Domain",
    items: [
      {
        title: "Domain Sorgula",
        desc: "Alan adı uygunluk kontrolü.",
        href: "/domain/search",
      },
      {
        title: "Domain Transfer",
        desc: "Alan adınızı taşıyın.",
        href: "/domain/transfer",
      },
      {
        title: "Domain Yenile",
        desc: "Alan adınızı uzatın.",
        href: "/domain/renew",
      },
    ],
  },
];

export default function SearchPage() {
  const params = useSearchParams();
  const router = useRouter();

  const q = params.get("q") || "";
  const [query, setQuery] = useState(q);

  const { search: SearchIcon } = ICONS;

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${query}`);
  }

  function highlight(text: string) {
    if (!q) return text;

    const parts = text.split(new RegExp(`(${q})`, "gi"));

    return parts.map((part, i) =>
      part.toLowerCase() === q.toLowerCase() ? (
        <span key={i} className="bg-yellow-200 text-black px-1 rounded">
          {part}
        </span>
      ) : (
        part
      ),
    );
  }

  const hasResults = data.some((group) =>
    group.items.some((item) =>
      item.title.toLowerCase().includes(q.toLowerCase()),
    ),
  );

  return (
    <main className="min-h-screen bg-slate-50">
      {/* 🔥 SEARCH HERO */}
      <section className="relative py-20 border-b bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          {/* 🔥 TOP BADGE */}
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-slate-400">
              Arama
            </span>
          </div>
          <form onSubmit={handleSearch}>
            <div className="relative">
              <SearchIcon
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="SSL, domain, hosting..."
                className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/30 outline-none text-lg shadow-sm focus:shadow-md transition"
              />
            </div>
          </form>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">
              Sonuçlar
            </p>

            <p className="text-sm text-slate-500">
              "<span className="font-medium text-slate-700">{q}</span>" için
              sonuçlar
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 RESULTS */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {!hasResults && (
            <div className="text-center py-24 text-slate-500">
              Sonuç bulunamadı
            </div>
          )}

          {data.map((group, gi) => {
            const filtered = group.items.filter((item) =>
              item.title.toLowerCase().includes(q.toLowerCase()),
            );

            if (filtered.length === 0) return null;

            return (
              <div key={gi}>
                {/* CATEGORY */}
                <h2 className="text-sm font-semibold text-slate-500 mb-4">
                  {group.category}
                </h2>

                {/* ITEMS */}
                <div className="space-y-4">
                  {filtered.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => router.push(item.href)}
                      className="group p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg hover:border-slate-300 transition cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1 text-lg">
                            {highlight(item.title)}
                          </h3>

                          <p className="text-sm text-slate-500">
                            {highlight(item.desc)}
                          </p>
                        </div>

                        <span className="text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition">
                          İncele →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
