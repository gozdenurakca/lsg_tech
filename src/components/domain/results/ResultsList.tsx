"use client";

import ResultRow from "./ResultRow";

interface Props {
  results: any[];
  base: string;
  isInCart: (name: string) => boolean;
  toggleCart: (result: any, name: string) => void;
  clearFilters?: () => void;
}

export default function ResultsList({
  results,
  base,
  isInCart,
  toggleCart,
  clearFilters,
}: Props) {
  // 🔥 EMPTY STATE
  if (!results || results.length === 0) {
    return (
      <div className="bg-white rounded-xl border p-8 text-center">
        <p className="text-sm text-slate-500 mb-3">Sonuç bulunamadı</p>

        {clearFilters && (
          <button
            onClick={clearFilters}
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            Filtreleri temizle
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      {results.map((r) => {
        const name = `${base}${r.ext}`;
        const inCart = isInCart(name);

        return (
          <ResultRow
            key={r.ext}
            base={base}
            result={r}
            inCart={inCart}
            onToggleCart={() => toggleCart(r, name)}
          />
        );
      })}
    </div>
  );
}

/* (list wrapper)

import ResultRow from "./ResultRow";

export default function ResultsList({
  results,
  base,
  isInCart,
  toggleCart,
}: any) {
  return (
    <div className="bg-white rounded-xl border">
      {results.map((r: any) => (
        <ResultRow
          key={r.ext}
          base={base}
          result={r}
          inCart={isInCart(`${base}${r.ext}`)}
          onToggleCart={() => toggleCart(r, `${base}${r.ext}`)}
        />
      ))}
    </div>
  );
}
*/
