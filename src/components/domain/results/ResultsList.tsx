// (list wrapper)

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
