"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

import { stripExtension } from "@/lib/domain/utils";
import { useResults } from "@/lib/domain/useResults";
import { TLD_META } from "@/lib/domain/tldMeta";

import ResultRow from "./ResultRow";
import FeaturedCard from "./FeaturedCard";
import BundleCard from "./BundleCard";
import ResultsHeader from "./ResultsHeader";
import ResultsList from "./ResultsList";
import FilterDrawer from "./FilterDrawer";

import DomainCartBar from "@/components/domain/DomainCartBar";
import { useCart } from "@/components/context/CartContext";

export default function DomainResultsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addItem, removeItem, isInCart, items } = useCart();

  const rawQuery = searchParams.get("q") || "";
  const tldHint = searchParams.get("tld") || "";

  const baseDomain = stripExtension(rawQuery);

  const [searchInput, setSearchInput] = useState(rawQuery);
  const [filterOpen, setFilterOpen] = useState(false);

  // 🔥 HOOK
  const {
    results,
    filtered,
    selectedExts,
    toggleExt,
    showAvailableOnly,
    setShowAvailableOnly,
    sortBy,
    setSortBy,
    clearFilters,
    activeFilterCount,
    loadedCount,
    availableCount,
  } = useResults(baseDomain);

  // 🛒 CART
  const toggleCart = (result: any, name: string) => {
    if (isInCart(name)) {
      const item = items.find((i) => i.type === "domain" && i.name === name);
      if (item) removeItem(item.id);
    } else {
      addItem({
        type: "domain",
        name,
        price: result.price,
        period: 1,
      });
    }
  };

  const domainItems = items.filter((i) => i.type === "domain");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const t = searchInput.trim();
    if (t) {
      router.push(`/domain/results?q=${encodeURIComponent(t)}`);
    }
  };

  const featuredExt = tldHint || ".com.tr";
  const featuredResult =
    results.find((r) => r.ext === featuredExt) ??
    results.find((r) => r.featured);

  const bundleResults = results.filter((r) => r.ext !== featuredExt);

  const featuredMeta = (featuredResult && TLD_META[featuredResult.ext]) || {
    badge: "Öne Çıkan",
    badgeClass: "bg-blue-100 text-blue-700",
    whyPoints: [],
  };

  if (!baseDomain) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-4xl mb-4">🔍</p>
          <h2 className="text-xl font-bold mb-2">Bir alan adı arayın</h2>
          <Link
            href="/domain"
            className="bg-slate-900 text-white px-6 py-3 rounded-xl"
          >
            Alan Adı Ara
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F9FC] pb-28">
      <ResultsHeader
        baseDomain={baseDomain}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onSearch={handleSearch}
        activeFilterCount={activeFilterCount}
        onOpenFilter={() => setFilterOpen(true)}
        loadedCount={loadedCount}
        total={results.length}
        availableCount={availableCount}
      />

      <FilterDrawer
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        selectedExts={Array.from(selectedExts)}
        toggleExt={toggleExt}
        showAvailableOnly={showAvailableOnly}
        setShowAvailableOnly={setShowAvailableOnly}
        sortBy={sortBy}
        setSortBy={setSortBy}
        clearFilters={clearFilters}
        total={filtered.length}
      />

      <div className="max-w-5xl mx-auto px-4 pt-8">
        {/* FEATURED */}
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {featuredResult && (
            <FeaturedCard
              base={baseDomain}
              result={featuredResult}
              inCart={isInCart(`${baseDomain}${featuredResult.ext}`)}
              onToggleCart={() =>
                toggleCart(featuredResult, `${baseDomain}${featuredResult.ext}`)
              }
              badge={featuredMeta.badge}
              badgeClass={featuredMeta.badgeClass}
              whyPoints={featuredMeta.whyPoints}
            />
          )}

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

        {/* LIST */}
        <ResultsList
          results={filtered}
          base={baseDomain}
          isInCart={isInCart}
          toggleCart={toggleCart}
          clearFilters={clearFilters}
        />
      </div>

      {/* CART BAR */}
      <DomainCartBar
        count={domainItems.length}
        totalPrice={domainItems.reduce((s, i) => s + i.price * i.period, 0)}
        onCheckout={() => router.push("/sepet")}
      />
    </main>
  );
}
