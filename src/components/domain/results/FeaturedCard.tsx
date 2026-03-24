// (hero result)
import { Check } from "lucide-react";
import type { DomainResult } from "@/lib/domain/types";
export default function FeaturedCard({
  base,
  result,
  inCart,
  onToggleCart,
  badge,
  badgeClass,
  whyPoints,
}: any) {
  const { ext, available, loading, price } = result;

  return (
    <div className="bg-white p-6 rounded-2xl border">
      <span className={badgeClass}>{badge}</span>

      <h2 className="text-3xl font-black">
        {base}
        <span className="text-blue-600">{ext}</span>
      </h2>

      {available && <p className="text-xl font-bold">₺{price}</p>}

      <button onClick={onToggleCart}>
        {inCart ? "Sepette" : "Sepete Ekle"}
      </button>

      {whyPoints && (
        <ul>
          {whyPoints.map((p: string) => (
            <li key={p}>
              <Check size={12} /> {p}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
