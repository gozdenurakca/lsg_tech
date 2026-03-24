/*
reusable input
hero'da kullanılıyor, header'da da kullanılabilir (?)
iyi abstraction

*/

// Yeniden kullanılabilir arama çubuğu.
// Hem DomainHero hem de DomainResultsPage'deki sticky header'da kullanılır.
"use client";

import Icon from "@/components/ui/Icon";

import { QUICK_EXTENSIONS } from "@/lib/domain/extensions";
import { stripExtension } from "@/lib/domain/utils";

interface Props {
  value: string;
  onChange: (val: string) => void;
  onSubmit?: (val: string) => void;
  showPills?: boolean;
  placeholder?: string;
  size?: "default" | "compact";
}

export default function DomainSearchBar({
  value,
  onChange,
  onSubmit,
  showPills = true,
  placeholder = "orneksite.com.tr",
  size = "default",
}: Props) {
  const isCompact = size === "compact";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSubmit?.(trimmed);
  };

  const handlePillClick = (ext: string) => {
    const base = stripExtension(value) || "orneksite";
    onChange(base + ext);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="w-full">
        <div
          className={`flex items-stretch bg-white rounded-xl overflow-hidden border border-slate-200 ${
            isCompact
              ? "shadow-sm"
              : "shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-slate-400 focus-within:border-slate-900 focus-within:ring-1 focus-within:ring-slate-900"
          } transition-all`}
        >
          {/* ICON */}
          <div
            className={`shrink-0 flex items-center justify-center border-r border-slate-200 text-slate-400 ${
              isCompact ? "w-9 h-full" : "w-12 h-full"
            }`}
          >
            <Icon name="slidersHorizontal" size={isCompact ? 14 : 17} />
          </div>

          {/* INPUT */}
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            aria-label="Domain arama"
            autoFocus={!isCompact}
            className={`flex-1 text-slate-800 font-medium outline-none placeholder-slate-400 ${
              isCompact ? "px-3 py-2.5 text-sm" : "px-5 py-5 text-lg"
            }`}
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={!value.trim()}
            className={`shrink-0 bg-slate-900 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 text-white font-bold transition-all duration-150 whitespace-nowrap ${
              isCompact ? "px-5 text-sm" : "px-8 text-base"
            }`}
          >
            {isCompact ? "Sorgula" : "Alan Adı Ara"}
          </button>
        </div>
      </form>

      {/* EXTENSIONS */}
      {showPills && (
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {QUICK_EXTENSIONS.map((ext) => (
            <button
              key={ext}
              type="button"
              onClick={() => handlePillClick(ext)}
              className="px-4 py-1.5 rounded-full text-sm font-semibold text-slate-500 border border-slate-200 bg-white hover:bg-slate-50 hover:border-blue-900 hover:text-blue-900 transition-all"
            >
              {ext}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
