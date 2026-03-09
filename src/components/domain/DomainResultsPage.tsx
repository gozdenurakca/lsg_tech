"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import DomainCard from "@/components/domain/DomainCard";

type Extension = {
  ext: string;
  price: number;
  period: string;
  featured: boolean;
};

type DomainResult = Extension & {
  available: boolean | null;
  loading: boolean;
};

type PrimaryCardProps = {
  domain: string;
  result: DomainResult;
  inCart: boolean;
  onToggleCart: () => void;
};

// ─── Simulated availability data (replace with real API calls) ───────────────
const EXTENSIONS: Extension[] = [
  { ext: ".com.tr", price: 149, period: "yıl", featured: true },
  { ext: ".com", price: 299, period: "yıl", featured: false },
  { ext: ".net", price: 259, period: "yıl", featured: false },
  { ext: ".org", price: 229, period: "yıl", featured: false },
  { ext: ".io", price: 699, period: "yıl", featured: false },
  { ext: ".net.tr", price: 149, period: "yıl", featured: false },
  { ext: ".biz", price: 319, period: "yıl", featured: false },
  { ext: ".co", price: 499, period: "yıl", featured: false },
];

async function checkAvailability(domain: string): Promise<boolean> {
  // TODO: Replace with your real whois/availability API
  // e.g. await fetch(`/api/domain-check?domain=${domain}`)
  await new Promise((r) => setTimeout(r, 800 + Math.random() * 400));
  return Math.random() > 0.35; // ~65% chance available (demo)
}

function stripExtension(raw: string): string {
  const exts = [
    ".com.tr",
    ".net.tr",
    ".org.tr",
    ".com",
    ".net",
    ".org",
    ".io",
    ".biz",
    ".co",
  ];
  let base = raw
    .trim()
    .toLowerCase()
    .replace(/https?:\/\//, "")
    .replace(/\/$/, "");
  exts.forEach((e) => {
    if (base.endsWith(e)) base = base.slice(0, -e.length);
  });
  return base;
}

export default function DomainResultsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const rawQuery = searchParams.get("q") || "";
  const baseDomain = stripExtension(rawQuery);

  const [searchInput, setSearchInput] = useState(rawQuery);
  const [results, setResults] = useState<DomainResult[]>([]);
  const [cart, setCart] = useState<string[]>([]);

  const runChecks = useCallback(async (base: string) => {
    if (!base) return;
    setResults(
      EXTENSIONS.map((e) => ({ ...e, available: null, loading: true })),
    );

    const promises = EXTENSIONS.map(async (ext, idx) => {
      const available = await checkAvailability(`${base}${ext.ext}`);
      setResults((prev) => {
        const next = [...prev];
        next[idx] = { ...next[idx], available, loading: false };
        return next;
      });
    });
    await Promise.all(promises);
  }, []);

  useEffect(() => {
    runChecks(baseDomain);
  }, [baseDomain, runChecks]);

  const toggleCart = (domain: string) => {
    setCart((prev) =>
      prev.includes(domain)
        ? prev.filter((d) => d !== domain)
        : [...prev, domain],
    );
  };

  const handleNewSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    router.push(
      `/domain-search/results?q=${encodeURIComponent(searchInput.trim())}`,
    );
  };

  const availableCount = results.filter((r) => r.available === true).length;
  const primaryResult = results.find((r) => r.featured);

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* ── TOP BAR ── */}
      <header className="bg-[#152238] sticky top-0 z-30 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-4">
          <a
            href="/domain-search"
            className="text-white font-extrabold text-xl tracking-tight shrink-0"
          >
            domain<span className="text-[#2ecc8f]">tr</span>
          </a>

          {/* Inline search */}
          <form onSubmit={handleNewSearch} className="flex flex-1 max-w-2xl">
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 px-4 py-2.5 text-sm rounded-l-lg outline-none text-[#1b2a4a] font-medium"
              placeholder="Yeni domain ara..."
            />
            <button
              type="submit"
              className="bg-[#2ecc8f] hover:bg-[#27b87d] text-white text-sm font-bold px-5 rounded-r-lg transition-colors"
            >
              Sorgula
            </button>
          </form>

          {/* Cart badge */}
          {cart.length > 0 && (
            <button className="ml-auto flex items-center gap-2 bg-[#2ecc8f] hover:bg-[#27b87d] text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors shrink-0">
              🛒 Sepet
              <span className="bg-white text-[#2ecc8f] text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            </button>
          )}
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* ── PRIMARY RESULT (featured extension) ── */}
        {primaryResult && (
          <div className="mb-8">
            <PrimaryResultCard
              domain={`${baseDomain}${primaryResult.ext}`}
              result={primaryResult}
              inCart={cart.includes(`${baseDomain}${primaryResult.ext}`)}
              onToggleCart={() =>
                toggleCart(`${baseDomain}${primaryResult.ext}`)
              }
            />
          </div>
        )}

        {/* ── RESULTS HEADER ── */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[#1b2a4a] font-bold text-lg">
            "{baseDomain}" için diğer seçenekler
          </h2>
          {availableCount > 0 && (
            <span className="text-sm text-gray-500 font-medium">
              {availableCount} uzantı müsait
            </span>
          )}
        </div>

        {/* ── RESULT LIST ── */}
        <div className="flex flex-col gap-3">
          {results
            .filter((r) => !r.featured)
            .map((result) => (
              <DomainCard
                key={result.ext}
                domain={`${baseDomain}${result.ext}`}
                result={result}
                inCart={cart.includes(`${baseDomain}${result.ext}`)}
                onToggleCart={() => toggleCart(`${baseDomain}${result.ext}`)}
              />
            ))}
        </div>

        {/* ── CHECKOUT BAR (sticky bottom, appears when cart has items) ── */}
        {cart.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-[#152238] border-t border-white/10 px-6 py-4 flex items-center justify-between z-40 shadow-2xl">
            <div className="text-white">
              <p className="text-sm text-white/60">Seçilen alan adları</p>
              <p className="font-bold">{cart.length} domain seçildi</p>
            </div>
            <button className="bg-[#2ecc8f] hover:bg-[#27b87d] text-white font-bold px-8 py-3 rounded-xl text-base transition-colors">
              Satın Al →
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

function PrimaryResultCard({
  domain,
  result,
  inCart,
  onToggleCart,
}: PrimaryCardProps) {
  const { available, loading, price, period } = result;

  return (
    <div
      className={`rounded-2xl border-2 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm transition-all
      ${
        loading
          ? "border-gray-200 bg-white"
          : available
            ? "border-[#2ecc8f] bg-white"
            : "border-gray-200 bg-gray-50"
      }`}
    >
      <div className="flex items-center gap-4">
        <div>
          <p className="text-2xl font-extrabold text-[#1b2a4a] break-all">
            {domain}
          </p>
          <div className="mt-1.5">
            {loading ? (
              <SkeletonBadge />
            ) : available ? (
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block" />
                Müsait
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-red-400 rounded-full inline-block" />
                Alınmış
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        {!loading && available && (
          <>
            <div className="text-right">
              <p className="text-2xl font-extrabold text-[#1b2a4a]">₺{price}</p>
              <p className="text-xs text-gray-400">/{period}</p>
            </div>
            <button
              onClick={onToggleCart}
              className={`px-7 py-3 rounded-xl font-bold text-base transition-all active:scale-95 ${
                inCart
                  ? "bg-emerald-600 text-white"
                  : "bg-[#2ecc8f] hover:bg-[#27b87d] text-white"
              }`}
            >
              {inCart ? "✓ Sepette" : "Sepete Ekle"}
            </button>
          </>
        )}
        {!loading && !available && (
          <button className="px-7 py-3 rounded-xl font-bold text-base bg-gray-200 text-gray-400 cursor-not-allowed">
            Müsait Değil
          </button>
        )}
        {loading && <LoadingButton />}
      </div>
    </div>
  );
}

function SkeletonBadge() {
  return <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />;
}
function LoadingButton() {
  return <div className="h-12 w-36 bg-gray-200 rounded-xl animate-pulse" />;
}
