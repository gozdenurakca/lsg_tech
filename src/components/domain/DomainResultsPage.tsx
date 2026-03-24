/*"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Heart,
  ShoppingCart,
  Check,
  ChevronRight,
  MapPin,
  Globe2,
  Monitor,
  Rocket,
  SlidersHorizontal,
  X,
  ArrowUpDown,
  Menu,
  ShieldCheck,
  Search,
  Zap,
  LayoutDashboard,
  Headphones,
  CreditCard,
} from "lucide-react";

import { EXTENSIONS, stripExtension, checkAvailability } from "./data";
import type { DomainResult } from "./types";
import DomainCartBar from "./DomainCartBar";
import { useCart } from "@/components/context/CartContext";
import NavbarMobile from "@/components/layout/navbar/NavbarMobile";
import Footer from "@/components/layout/Footer";

const EXT_COLOR: Record<string, string> = {
  ".com.tr": "text-blue-600",
  ".com": "text-emerald-600",
  ".net": "text-violet-600",
  ".net.tr": "text-amber-600",
  ".org": "text-pink-600",
  ".io": "text-cyan-600",
  ".biz": "text-orange-600",
  ".co": "text-teal-600",
};

const EXT_BG: Record<string, string> = {
  ".com.tr": "bg-blue-50 border-blue-200 text-blue-700",
  ".com": "bg-emerald-50 border-emerald-200 text-emerald-700",
  ".net": "bg-violet-50 border-violet-200 text-violet-700",
  ".net.tr": "bg-amber-50 border-amber-200 text-amber-700",
  ".org": "bg-pink-50 border-pink-200 text-pink-700",
  ".io": "bg-cyan-50 border-cyan-200 text-cyan-700",
  ".biz": "bg-orange-50 border-orange-200 text-orange-700",
  ".co": "bg-teal-50 border-teal-200 text-teal-700",
};

const TLD_CARDS = [
  {
    ext: ".com.tr",
    slug: "com-tr",
    label: "Türkiye #1",
    icon: MapPin,
    bg: "bg-blue-50",
    color: "text-blue-600",
    border: "border-blue-100",
  },
  {
    ext: ".com",
    slug: "com",
    label: "Global",
    icon: "Globe"2,
    bg: "bg-emerald-50",
    color: "text-emerald-600",
    border: "border-emerald-100",
  },
  {
    ext: ".net",
    slug: "net",
    label: "Teknoloji",
    icon: Monitor,
    bg: "bg-violet-50",
    color: "text-violet-600",
    border: "border-violet-100",
  },
  {
    ext: ".io",
    slug: "io",
    label: "Startup",
    icon: Rocket,
    bg: "bg-cyan-50",
    color: "text-cyan-600",
    border: "border-cyan-100",
  },
];

type SortMode = "default" | "price-asc" | "price-desc";

function ResultRow({
  base,
  result,
  inCart,
  onToggleCart,
}: {
  base: string;
  result: DomainResult;
  inCart: boolean;
  onToggleCart: () => void;
}) {
  const { ext, available, loading, price, period } = result;
  const extColor = EXT_COLOR[ext] ?? "text-slate-500";
  const oldPrice = available ? Math.round(price * 1.8) : null;

  return (
    <div
      className={`flex items-center gap-3 px-5 py-3.5 border-b border-slate-50 last:border-0 transition-colors
      ${!loading && !available ? "opacity-40" : "hover:bg-slate-50/70"}`}
    >
      <button className="text-slate-200 hover:text-red-400 transition-colors shrink-0">
        <Heart size={15} />
      </button>

      <div className="flex-1 min-w-0">
        {loading ? (
          <div className="h-5 w-44 bg-slate-100 rounded animate-pulse" />
        ) : (
          <span className="font-semibold text-base text-slate-800">
            {base}
            <span className={extColor}>{ext}</span>
          </span>
        )}
        {!available && !loading && (
          <span className="ml-2 text-[10px] font-bold uppercase tracking-wide text-slate-400 border border-slate-200 rounded px-1.5 py-0.5">
            Alındı
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 shrink-0">
        {loading ? (
          <div className="h-5 w-20 bg-slate-100 rounded animate-pulse" />
        ) : available ? (
          <>
            <div className="text-right">
              {oldPrice && (
                <span className="text-slate-300 text-xs line-through block">
                  ₺{oldPrice}
                </span>
              )}
              <span className="font-bold text-slate-900 text-sm">₺{price}</span>
              <span className="text-slate-400 text-xs">/{period}</span>
            </div>
            <button
              onClick={onToggleCart}
              className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-all shrink-0
                ${
                  inCart
                    ? "bg-emerald-500 border-emerald-500 text-white"
                    : "bg-white border-slate-200 text-slate-500 hover:border-slate-900 hover:text-slate-900"
                }`}
            >
              {inCart ? <Check size={14} /> : <ShoppingCart size={14} />}
            </button>
          </>
        ) : (
          <button
            disabled
            className="w-9 h-9 rounded-lg border border-slate-100 bg-slate-50 flex items-center justify-center cursor-not-allowed"
          >
            <ShoppingCart size={14} className="text-slate-200" />
          </button>
        )}
      </div>
    </div>
  );
}

// ── Alt bileşen: Öne çıkan büyük kart ──────────────────────────────────────
function FeaturedCard({
  base,
  result,
  inCart,
  onToggleCart,
  badge,
  badgeClass,
  whyPoints,
}: {
  base: string;
  result: DomainResult;
  inCart: boolean;
  onToggleCart: () => void;
  badge: string;
  badgeClass: string;
  whyPoints?: string[];
}) {
  const { ext, available, loading, price, period } = result;
  const extColor = EXT_COLOR[ext] ?? "text-emerald-600";
  const oldPrice = available ? Math.round(price * 1.9) : null;

  return (
    <div className="relative bg-white border border-slate-200 rounded-2xl flex flex-col overflow-hidden hover:shadow-md transition-shadow">
      <button className="absolute top-4 right-4 text-slate-200 hover:text-red-400 transition-colors z-10">
        <Heart size={17} />
      </button>

      <div className="p-6 flex flex-col flex-1 gap-4">
        <span
          className={`self-start text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded ${badgeClass}`}
        >
          {badge}
        </span>

        {loading ? (
          <div className="h-10 w-48 bg-slate-100 rounded-xl animate-pulse" />
        ) : (
          <p className="text-3xl font-black text-slate-900 leading-tight break-all">
            {base}
            <span className={extColor}>{ext}</span>
          </p>
        )}

        {!loading && !available && (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400">
            <span className="w-2 h-2 rounded-full bg-slate-300 inline-block" />
            ALAN ADI ALINDI
          </span>
        )}

        {loading ? (
          <div className="h-8 w-28 bg-slate-100 rounded animate-pulse" />
        ) : available ? (
          <div>
            {oldPrice && (
              <span className="text-slate-300 text-sm line-through">
                ₺{oldPrice}
              </span>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-900">
                ₺{price}
              </span>
              <span className="text-slate-400 text-sm">/{period}</span>
            </div>
          </div>
        ) : (
          <div className="h-8" />
        )}

        {loading ? (
          <div className="h-12 bg-slate-100 rounded-xl animate-pulse" />
        ) : available ? (
          <button
            onClick={onToggleCart}
            className={`w-full py-3 rounded-xl font-bold text-sm transition-all
              ${
                inCart
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-slate-900 hover:bg-slate-700 text-white"
              }`}
          >
            {inCart ? "✓ Sepette" : "Sepete Ekle"}
          </button>
        ) : (
          <button
            disabled
            className="w-full py-3 rounded-xl font-bold text-sm bg-slate-100 text-slate-400 cursor-not-allowed"
          >
            Müsait Değil
          </button>
        )}

        {whyPoints && whyPoints.length > 0 && (
          <div className="border-t border-slate-100 pt-4 mt-auto">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
              Neden iyi bir seçim?
            </p>
            <ul className="space-y-1.5">
              {whyPoints.map((pt) => (
                <li
                  key={pt}
                  className="flex items-start gap-2 text-xs text-slate-500"
                >
                  <Check
                    size={11}
                    className="text-emerald-500 mt-0.5 shrink-0"
                  />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function BundleCard({
  base,
  results,
  cartStates,
  onToggle,
}: {
  base: string;
  results: DomainResult[];
  cartStates: Record<string, boolean>;
  onToggle: (r: DomainResult, name: string) => void;
}) {
  const available = results.filter((r) => r.available === true);
  const totalPrice = available.reduce((s, r) => s + r.price, 0);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl flex flex-col overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6 flex flex-col gap-4 flex-1">
        <span className="self-start text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded bg-violet-100 text-violet-700">
          Tümünü Al
        </span>

        <div>
          <p className="text-2xl font-black text-slate-900">{base}</p>
          <p className="text-xs text-slate-400 mt-1">
            Marka koruması için tüm uzantıları kaydedin
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {results.map((r) => {
            const extColor = EXT_COLOR[r.ext] ?? "text-slate-500";
            const isAvail = r.available === true;
            const inCart = cartStates[`${base}${r.ext}`] ?? false;
            return (
              <button
                key={r.ext}
                onClick={() =>
                  isAvail ? onToggle(r, `${base}${r.ext}`) : undefined
                }
                disabled={!isAvail || r.loading}
                className={`px-3 py-1.5 rounded-full text-sm font-bold border transition-all
                  ${
                    r.loading
                      ? "bg-slate-50 border-slate-100 text-slate-200 animate-pulse"
                      : !isAvail
                        ? "bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed line-through"
                        : inCart
                          ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                          : `bg-white border-slate-200 hover:border-slate-400 ${extColor}`
                  }`}
              >
                {r.ext}
              </button>
            );
          })}
        </div>

        {available.length > 0 ? (
          <div>
            <p className="text-xs text-slate-400">Müsait uzantılar toplamı</p>
            <p className="text-2xl font-black text-slate-900 mt-0.5">
              ₺{totalPrice}
              <span className="text-sm font-normal text-slate-400">/yıl</span>
            </p>
          </div>
        ) : (
          <p className="text-sm text-slate-400">
            Uzantılar kontrol ediliyor...
          </p>
        )}

        <div className="border-t border-slate-100 pt-4 mt-auto">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
            Neden iyi bir seçim?
          </p>
          <ul className="space-y-1.5">
            {[
              "Rakiplerin marka adınızı kullanmasını önleyin",
              "Farklı uzantılardan gelen trafiği yakalayın",
              "Dijital kimliğinizi tam olarak koruyun",
            ].map((pt) => (
              <li
                key={pt}
                className="flex items-start gap-2 text-xs text-slate-500"
              >
                <Check size={11} className="text-emerald-500 mt-0.5 shrink-0" />
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function DomainResultsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addItem, removeItem, isInCart, items } = useCart();

  const rawQuery = searchParams.get("q") || "";
  const tldHint = searchParams.get("tld") || ""; // e.g. ".com" from TLD page
  const baseDomain = stripExtension(rawQuery);

  const [searchInput, setSearchInput] = useState(rawQuery);
  const [results, setResults] = useState<DomainResult[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const [selectedExts, setSelectedExts] = useState<Set<string>>(new Set());
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortMode>("default");

  const runChecks = useCallback(async (base: string) => {
    if (!base) return;
    setResults(
      EXTENSIONS.map((e) => ({ ...e, available: null, loading: true })),
    );
    await Promise.all(
      EXTENSIONS.map(async (ext, idx) => {
        const available = await checkAvailability(`${base}${ext.ext}`);
        setResults((prev) => {
          const next = [...prev];
          next[idx] = { ...next[idx], available, loading: false };
          return next;
        });
      }),
    );
  }, []);

  useEffect(() => {
    runChecks(baseDomain);
  }, [baseDomain, runChecks]);

  const toggleCart = (result: DomainResult, name: string) => {
    if (isInCart(name)) {
      const item = items.find((i) => i.type === "domain" && i.name === name);
      if (item) removeItem(item.id);
    } else {
      addItem({ type: "domain", name, price: result.price, period: 1 });
    }
  };

  const toggleExt = (ext: string) => {
    setSelectedExts((prev) => {
      const next = new Set(prev);
      if (next.has(ext)) next.delete(ext);
      else next.add(ext);
      return next;
    });
  };

  const clearFilters = () => {
    setSelectedExts(new Set());
    setShowAvailableOnly(false);
    setSortBy("default");
  };

  const activeFilterCount =
    selectedExts.size +
    (showAvailableOnly ? 1 : 0) +
    (sortBy !== "default" ? 1 : 0);

  const domainItems = items.filter((i) => i.type === "domain");
  const handleNewSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const t = searchInput.trim();
    if (t) router.push(`/domain/results?q=${encodeURIComponent(t)}`);
  };

  const TLD_META: Record<
    string,
    { badge: string; badgeClass: string; whyPoints: string[] }
  > = {
    ".com.tr": {
      badge: "Türkiye #1",
      badgeClass: "bg-blue-100 text-blue-700",
      whyPoints: [
        "Türk kullanıcılar .com.tr'e daha çok güveniyor",
        "Google Türkiye'de yerel SEO avantajı sağlar",
        "Yalnızca Türk kişi/şirketlere tescil imkânı",
      ],
    },
    ".com": {
      badge: "Global Standart",
      badgeClass: "bg-emerald-100 text-emerald-700",
      whyPoints: [
        "Tüm dünyada en tanınan ve güvenilen uzantı",
        "Uluslararası müşterilere kolay ulaşım sağlar",
        "Yatırımcı ve ortaklarda güven oluşturur",
      ],
    },
    ".net": {
      badge: "Teknoloji",
      badgeClass: "bg-violet-100 text-violet-700",
      whyPoints: [
        "Teknoloji & yazılım projeleri için ideal",
        "Ağ altyapısı ve internet servisleri çağrışımı",
        "Global ölçekte hemen tanınan bir uzantı",
      ],
    },
    ".io": {
      badge: "Startup",
      badgeClass: "bg-cyan-100 text-cyan-700",
      whyPoints: [
        "SaaS & startup ekosisteminde tercih numarası 1",
        "Yatırımcılar tarafından teknoloji markası olarak algılanır",
        "Kısa ve akılda kalıcı domain adresleri elde edin",
      ],
    },
    ".org": {
      badge: "Güvenilir",
      badgeClass: "bg-pink-100 text-pink-700",
      whyPoints: [
        "Sivil toplum ve vakıflar için klasik seçim",
        "Kar amacı gütmeyen yapılarda güven simgesi",
        "Uluslararası tanınırlığı yüksek uzantı",
      ],
    },
    ".net.tr": {
      badge: "Yerel Ağ",
      badgeClass: "bg-amber-100 text-amber-700",
      whyPoints: [
        "Türkiye'ye özgü ağ hizmetleri için uygun",
        "Rakiplerin marka adınızı kullanmasını önler",
        "NIC.tr güvencesiyle tescil",
      ],
    },
    ".biz": {
      badge: "İş Dünyası",
      badgeClass: "bg-orange-100 text-orange-700",
      whyPoints: [
        "Ticari ve kurumsal markalar için özel uzantı",
        "Kısa ve profesyonel bir adres imkânı",
        "Global işletme kimliği için tanınan isim",
      ],
    },
    ".co": {
      badge: "Modern",
      badgeClass: "bg-teal-100 text-teal-700",
      whyPoints: [
        "Şirket (company) çağrışımı yapar",
        "Kısa ve modern bir domain adresi",
        "Girişim ekosisteminde popüler tercih",
      ],
    },
  };

  const defaultFeaturedMeta = {
    badge: "Öne Çıkan",
    badgeClass: "bg-blue-100 text-blue-700",
    whyPoints: [
      "Türk kullanıcılar .com.tr'e daha çok güveniyor",
      "Google Türkiye'de yerel SEO avantajı sağlar",
      "Yalnızca Türk kişi/şirketlere tescil imkânı",
    ],
  };

  const featuredExt = tldHint || ".com.tr";
  const featuredResult =
    results.find((r) => r.ext === featuredExt) ??
    results.find((r) => r.featured);
  const bundleResults = results.filter((r) => r.ext !== featuredExt);
  const loadedCount = results.filter((r) => !r.loading).length;
  const availableCount = results.filter((r) => r.available === true).length;

  let listResults = [...results];
  if (selectedExts.size > 0) {
    listResults = listResults.filter((r) => selectedExts.has(r.ext));
  }
  if (showAvailableOnly) {
    listResults = listResults.filter((r) => r.available === true || r.loading);
  }
  if (sortBy === "price-asc") {
    listResults = listResults.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
  } else if (sortBy === "price-desc") {
    listResults = listResults.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
  }

  if (!baseDomain) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center max-w-sm px-4">
          <p className="text-4xl mb-4">🔍</p>
          <h2 className="text-xl font-bold text-slate-800 mb-2">
            Bir alan adı arayın
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            Arama çubuğuna bir isim yazarak başlayın.
          </p>
          <Link
            href="/domain"
            className="bg-slate-900 text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-slate-700 transition-colors"
          >
            Alan Adı Ara
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F9FC] pb-28">
      <header className="bg-white sticky top-0 z-30 border-b border-slate-200 shadow-sm">
        <div className="px-4 py-2.5 flex items-center gap-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => setNavOpen(true)}
              className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
              title="Menüyü aç"
            >
              <Menu size={18} />
            </button>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <ShieldCheck size={14} className="text-white" />
              </div>
              <div className="hidden sm:block leading-none">
                <span className="font-extrabold text-slate-900 text-sm">
                  LSG
                </span>
                <span className="block text-[9px] text-indigo-500 font-semibold tracking-widest uppercase">
                  Teknoloji
                </span>
              </div>
            </Link>
          </div>

          <div className="flex-1" />

          <nav className="flex items-center gap-0.5">
            <Link
              href="/iletisim"
              className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Bize Ulaşın
            </Link>
            <Link
              href="/kaynaklar/sss"
              className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Yardım
            </Link>
            <Link
              href="/giris"
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1"
            >
              Giriş Yap
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <Link
              href="/sepet"
              className="ml-1 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <ShoppingCart size={15} />
            </Link>
          </nav>
        </div>

        <div className="px-4 py-2.5 flex items-center gap-3 max-w-3xl mx-auto w-full">
          <form
            onSubmit={handleNewSearch}
            className="flex-1 flex items-center border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-slate-400 focus-within:border-slate-900 focus-within:ring-1 focus-within:ring-slate-900 transition-all"
          >
            <button
              type="button"
              onClick={() => setFilterOpen(true)}
              className="relative shrink-0 flex items-center justify-center w-10 h-10 border-r border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors"
              title="Filtrele"
            >
              <SlidersHorizontal size={15} />
              {activeFilterCount > 0 && (
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-blue-600 border border-white" />
              )}
            </button>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Alan adı ara..."
              className="flex-1 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 bg-transparent focus:outline-none"
            />
          </form>
          <button
            onClick={() => {
              const t = searchInput.trim();
              if (t) router.push(`/domain/results?q=${encodeURIComponent(t)}`);
            }}
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-700 text-white font-bold text-sm transition-colors whitespace-nowrap"
          >
            <Search size={15} className="hidden sm:block" />
            Alan Adı Ara
          </button>
        </div>
      </header>

      {filterOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setFilterOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[92vw] bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out
          ${filterOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 shrink-0">
          <div>
            <h2 className="font-bold text-slate-900 text-base">
              Filtrele & Sırala
            </h2>
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs text-blue-600 hover:underline mt-0.5"
              >
                Tüm filtreleri temizle
              </button>
            )}
          </div>
          <button
            onClick={() => setFilterOpen(false)}
            className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-7">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ArrowUpDown size={14} className="text-slate-400" />
              <h3 className="text-xs font-black uppercase tracking-wide text-slate-500">
                Sırala
              </h3>
            </div>
            <div className="space-y-2">
              {(
                [
                  { value: "default", label: "Varsayılan" },
                  { value: "price-asc", label: "Fiyat: Düşükten yükseğe" },
                  { value: "price-desc", label: "Fiyat: Yüksekten düşüğe" },
                ] as { value: SortMode; label: string }[]
              ).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSortBy(opt.value)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium border transition-all
                    ${
                      sortBy === opt.value
                        ? "bg-slate-900 border-slate-900 text-white"
                        : "bg-slate-50 border-slate-100 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                    }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-wide text-slate-500 mb-3">
              Müsaitlik
            </h3>
            <button
              onClick={() => setShowAvailableOnly((v) => !v)}
              className={`flex items-center gap-3 w-full px-3.5 py-2.5 rounded-xl text-sm font-medium border transition-all
                ${
                  showAvailableOnly
                    ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                    : "bg-slate-50 border-slate-100 text-slate-600 hover:border-slate-300"
                }`}
            >
              <span
                className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-colors
                ${showAvailableOnly ? "bg-emerald-500 border-emerald-500" : "border-slate-300"}`}
              >
                {showAvailableOnly && (
                  <Check size={10} className="text-white" />
                )}
              </span>
              Yalnızca müsait olanları göster
            </button>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-black uppercase tracking-wide text-slate-500">
                Uzantı
              </h3>
              {selectedExts.size > 0 && (
                <button
                  onClick={() => setSelectedExts(new Set())}
                  className="text-xs text-slate-400 hover:text-slate-700"
                >
                  Temizle
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {EXTENSIONS.map((e) => {
                const isSelected = selectedExts.has(e.ext);
                const colorClass = isSelected
                  ? (EXT_BG[e.ext] ??
                    "bg-slate-100 border-slate-300 text-slate-700")
                  : "bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-800";
                return (
                  <button
                    key={e.ext}
                    onClick={() => toggleExt(e.ext)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${colorClass}`}
                  >
                    {isSelected && <span className="mr-1">✓</span>}
                    {e.ext}
                  </button>
                );
              })}
            </div>
            {selectedExts.size > 0 && (
              <p className="text-xs text-slate-400 mt-2">
                {selectedExts.size} uzantı seçildi
              </p>
            )}
          </div>
        </div>

        <div className="shrink-0 border-t border-slate-100 p-5">
          <button
            onClick={() => setFilterOpen(false)}
            className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-700 transition-colors"
          >
            Sonuçları Gör ({listResults.length})
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pt-8 pb-4">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            <span className="text-blue-600">&ldquo;{baseDomain}&rdquo;</span>{" "}
            için en uygun alan adları
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            {loadedCount < results.length
              ? "Müsaitlik kontrol ediliyor..."
              : `${availableCount} uzantı müsait · ${results.length} uzantı sorgulandı`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {featuredResult &&
            (() => {
              const fm = TLD_META[featuredResult.ext] ?? defaultFeaturedMeta;
              return (
                <FeaturedCard
                  base={baseDomain}
                  result={featuredResult}
                  inCart={isInCart(`${baseDomain}${featuredResult.ext}`)}
                  onToggleCart={() =>
                    toggleCart(
                      featuredResult,
                      `${baseDomain}${featuredResult.ext}`,
                    )
                  }
                  badge={fm.badge}
                  badgeClass={fm.badgeClass}
                  whyPoints={fm.whyPoints}
                />
              );
            })()}

          <BundleCard
            base={baseDomain}
            results={bundleResults}
            cartStates={Object.fromEntries(
              bundleResults.map((r) => [
                `${baseDomain}${r.ext}`,
                isInCart(`${baseDomain}${r.ext}`),
              ]),
            )}
            onToggle={toggleCart}
          />
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-slate-800 text-sm">
              &ldquo;{baseDomain}&rdquo; uzantılarını keşfet
            </h2>
            <Link
              href="/domain"
              className="text-xs text-blue-600 hover:underline flex items-center gap-1"
            >
              Tüm uzantılar <ChevronRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {TLD_CARDS.map(
              ({ ext, slug, label, icon: Icon, bg, color, border }) => {
                const r = results.find((res) => res.ext === ext);
                return (
                  <Link
                    key={ext}
                    href={`/domain/tld/${slug}`}
                    className={`bg-white border ${border} rounded-xl p-4 flex flex-col gap-2 hover:shadow-sm hover:border-opacity-80 transition-all`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center ${color}`}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className={`font-black text-base ${color}`}>{ext}</p>
                      <p className="text-xs text-slate-400">{label}</p>
                    </div>
                    {r && (
                      <p className="text-xs font-semibold text-slate-600 mt-auto">
                        {r.loading
                          ? "..."
                          : r.available
                            ? `₺${r.price}/yıl`
                            : "Alındı"}
                      </p>
                    )}
                  </Link>
                );
              },
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-slate-800 text-sm">
              Tüm sonuçlar ({listResults.length})
            </h2>
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs text-slate-400 hover:text-slate-700 underline"
              >
                Filtreleri temizle
              </button>
            )}
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            {listResults.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-sm">
                <p className="text-2xl mb-2">🔍</p>
                <p>Seçilen filtrelere uygun sonuç bulunamadı.</p>
                <button
                  onClick={clearFilters}
                  className="mt-3 text-blue-600 hover:underline text-xs font-semibold"
                >
                  Filtreleri temizle
                </button>
              </div>
            ) : (
              listResults.map((result) => (
                <ResultRow
                  key={result.ext}
                  base={baseDomain}
                  result={result}
                  inCart={isInCart(`${baseDomain}${result.ext}`)}
                  onToggleCart={() =>
                    toggleCart(result, `${baseDomain}${result.ext}`)
                  }
                />
              ))
            )}
          </div>
        </div>

        <div className="mt-14 mb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {[
              {
                value: "50K+",
                label: "Kayıtlı alan adı",
                sub: "Müşterilerimiz LSG üzerinden 50.000'den fazla domain yönetti.",
                bg: "bg-[#0f172a]",
                valueCls: "text-blue-400",
              },
              {
                value: "10K+",
                label: "Aktif müşteri",
                sub: "Küçük işletmeden kurumsal firmaya 10.000'i aşkın aktif kullanıcı.",
                bg: "bg-[#0f3460]",
                valueCls: "text-cyan-400",
              },
              {
                value: "7/24",
                label: "Teknik destek",
                sub: "Gece ya da gündüz, uzman destek ekibimiz her zaman yanınızda.",
                bg: "bg-[#0f172a]",
                valueCls: "text-emerald-400",
              },
              {
                value: "2 dk",
                label: "Ortalama aktivasyon",
                sub: "Ödemenizin ardından alan adınız dakikalar içinde aktif olur.",
                bg: "bg-[#1a1040]",
                valueCls: "text-violet-400",
              },
            ].map(({ value, label, sub, bg, valueCls }) => (
              <div
                key={label}
                className={`${bg} rounded-2xl p-6 flex flex-col gap-3 hover:scale-[1.02] transition-transform cursor-default`}
              >
                <p
                  className={`text-4xl md:text-5xl font-black leading-none ${valueCls}`}
                >
                  {value}
                </p>
                <div>
                  <p className="text-white font-bold text-sm leading-snug">
                    {label}
                  </p>
                  <p className="text-white/50 text-xs mt-1 leading-relaxed">
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <p className="text-slate-900 font-extrabold text-lg leading-tight">
                  Alan adınızla birlikte ne gelir?
                </p>
                <p className="text-slate-500 text-sm mt-1">
                  Her domain kaydında standart olarak sunulan hizmetler
                </p>
              </div>
              <Link
                href="/iletisim"
                className="shrink-0 self-start sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors"
              >
                Bize ulaşın <ChevronRight size={12} />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                {
                  icon: "Zap",
                  iconBg: "bg-amber-50",
                  iconColor: "text-amber-500",
                  title: "Hızlı Aktivasyon",
                  desc: "Ödeme sonrası alan adınız dakikalar içinde kullanıma hazır",
                },
                {
                  icon: LayoutDashboard,
                  iconBg: "bg-blue-50",
                  iconColor: "text-blue-500",
                  title: "Kolay Yönetim",
                  desc: "Tüm domain ayarlarınızı tek bir panelden yönetin",
                },
                {
                  icon: Headphones,
                  iconBg: "bg-emerald-50",
                  iconColor: "text-emerald-500",
                  title: "7/24 Destek",
                  desc: "Teknik bir sorunla karşılaştığınızda ekibimiz yanınızda",
                },
                {
                  icon: CreditCard,
                  iconBg: "bg-violet-50",
                  iconColor: "text-violet-500",
                  title: "Güvenli Ödeme",
                  desc: "256-bit SSL şifrelemeli altyapıyla güvenle ödeyin",
                },
              ].map(({ icon: Icon, iconBg, iconColor, title, desc }) => (
                <div
                  key={title}
                  className="bg-white hover:bg-slate-50 border border-slate-200 rounded-xl p-4 transition-colors"
                >
                  <div
                    className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center mb-3`}
                  >
                    <Icon size={17} className={iconColor} />
                  </div>
                  <p className="text-slate-800 font-bold text-xs leading-tight">
                    {title}
                  </p>
                  <p className="text-slate-500 text-[11px] mt-1 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DomainCartBar
        count={domainItems.length}
        totalPrice={domainItems.reduce((s, i) => s + i.price * i.period, 0)}
        onCheckout={() => router.push("/sepet")}
      />

      <NavbarMobile
        isMobileMenuOpen={navOpen}
        setIsMobileMenuOpen={setNavOpen}
        setActiveDropdown={() => {}}
        showOnAllScreens
      />

      <Footer />
    </main>
  );
}
*/
