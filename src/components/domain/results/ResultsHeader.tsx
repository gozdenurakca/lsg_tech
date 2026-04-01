"use client";

import Link from "next/link";
import Icon from "@/components/ui/Icon";

interface Props {
  baseDomain?: string;
  searchInput: string;
  setSearchInput: (val: string) => void;
  onSearch: (e: React.FormEvent) => void;

  activeFilterCount?: number;
  onOpenFilter?: () => void;

  loadedCount?: number;
  total?: number;
  availableCount?: number;
}

export default function ResultsHeader({
  baseDomain,
  searchInput,
  setSearchInput,
  onSearch,
  activeFilterCount = 0,
  onOpenFilter,
  loadedCount,
  total,
  availableCount,
}: Props) {
  return (
    <div className="sticky top-16 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-3">
        {/* BREADCRUMB / NAVIGATION */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link
            href="/domain"
            className="flex items-center gap-1 hover:text-slate-900 transition"
          >
            <Icon name="chevronLeft" size={13} className="-ml-0.5" />
            Alan Adı Ara
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/" className="hover:text-slate-900 transition">
            Ana Sayfa
          </Link>
        </div>

        {/* SEARCH BAR */}
        <form onSubmit={onSearch} className="flex items-stretch gap-2">
          <div className="flex items-center px-3 border border-slate-200 rounded-xl bg-white flex-1">
            <Icon name="search" size={16} className="text-slate-400" />

            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="alan adı ara..."
              className="flex-1 px-2 py-2 outline-none text-sm"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-700 transition"
          >
            Ara
          </button>

          {/* FILTER BUTTON */}
          {onOpenFilter && (
            <button
              type="button"
              onClick={onOpenFilter}
              className="relative px-3 py-2 border border-slate-200 rounded-xl text-sm hover:bg-slate-50"
            >
              Filtre
              {activeFilterCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          )}
        </form>

        {/* STATS */}
        {(loadedCount !== undefined || availableCount !== undefined) && (
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{availableCount ?? 0} uygun domain</span>

            {total !== undefined && (
              <span>
                {loadedCount ?? 0}/{total} yüklendi
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
/*  (search + filters)

import { Search } from "lucide-react";

export default function ResultsHeader({
  searchInput,
  setSearchInput,
  onSearch,
}: any) {
  return (
    <div className="sticky top-0 bg-white p-4 flex gap-2">
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="border px-3 py-2 flex-1"
      />

      <button onClick={onSearch}>
        <Search />
      </button>
    </div>
  );
}
*/
