"use client";

interface Props {
  base: string;
  results: any[];
  onToggle: (result: any, name: string) => void;
  cartStates: Record<string, boolean>;
}

export default function BundleCard({
  base,
  results,
  onToggle,
  cartStates,
}: Props) {
  const available = results.filter((r) => r.available);

  const total = available.reduce((s, r) => s + r.price, 0);

  const formatPrice = (val: number) =>
    new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
    }).format(val);

  return (
    <div className="bg-white p-6 rounded-2xl border flex flex-col gap-4">
      {/* TITLE */}
      <div>
        <h3 className="font-bold text-slate-900 text-lg">{base}</h3>
        <p className="text-xs text-slate-500">
          Birden fazla uzantı alarak markanı koru
        </p>
      </div>

      {/* EXTENSIONS */}
      <div className="flex gap-2 flex-wrap">
        {results.map((r) => {
          const name = `${base}${r.ext}`;
          const inCart = cartStates[name];

          return (
            <button
              key={r.ext}
              onClick={() => onToggle(r, name)}
              disabled={!r.available}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold border transition-all
              ${
                !r.available
                  ? "bg-slate-100 text-slate-400 border-slate-100 cursor-not-allowed"
                  : inCart
                    ? "bg-emerald-500 text-white border-emerald-500"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-900 hover:text-slate-900"
              }`}
            >
              {r.ext}
            </button>
          );
        })}
      </div>

      {/* PRICE */}
      <div className="flex items-center justify-between mt-2">
        <div>
          <p className="text-xs text-slate-400">Toplam</p>
          <p className="font-bold text-lg text-slate-900">
            {formatPrice(total)}
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={() => {
            available.forEach((r) => {
              const name = `${base}${r.ext}`;
              if (!cartStates[name]) {
                onToggle(r, name);
              }
            });
          }}
          className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-700 transition-all"
        >
          Tümünü Sepete Ekle
        </button>
      </div>
    </div>
  );
}

/* (upsell)

export default function BundleCard({
  base,
  results,
  onToggle,
  cartStates,
}: any) {
  const available = results.filter((r: any) => r.available);

  const total = available.reduce((s: number, r: any) => s + r.price, 0);

  return (
    <div className="bg-white p-6 rounded-2xl border">
      <h3 className="font-bold">{base}</h3>

      <div className="flex gap-2 flex-wrap">
        {results.map((r: any) => (
          <button key={r.ext}>{r.ext}</button>
        ))}
      </div>

      <p>₺{total}</p>
    </div>
  );
}
*/
