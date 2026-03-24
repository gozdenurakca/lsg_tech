// (upsell)

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
