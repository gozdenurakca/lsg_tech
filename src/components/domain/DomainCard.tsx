"use client";

interface DomainResult {
  ext: string;
  price: number;
  period: string;
  available: boolean | null;
  loading: boolean;
}

interface DomainCardProps {
  domain: string;
  result: DomainResult;
  inCart: boolean;
  onToggleCart: () => void;
}

export default function DomainCard({
  domain,
  result,
  inCart,
  onToggleCart,
}: DomainCardProps) {
  const { available, loading, price, period } = result;

  return (
    <div
      className={`group flex items-center justify-between gap-4 rounded-xl border px-5 py-4 transition-all duration-200
        ${loading ? "bg-white border-gray-200" : ""}
        ${
          !loading && available
            ? "bg-white border-gray-200 hover:border-[#2ecc8f] hover:shadow-md cursor-default"
            : ""
        }
        ${!loading && !available ? "bg-gray-50 border-gray-100 opacity-60" : ""}`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <p
          className={`font-bold text-base truncate transition-colors
          ${
            available
              ? "text-[#1b2a4a] group-hover:text-[#2ecc8f]"
              : "text-gray-400"
          }`}
        >
          {domain}
        </p>

        {loading ? (
          <div className="h-5 w-16 bg-gray-200 rounded-full animate-pulse shrink-0" />
        ) : available ? (
          <span className="shrink-0 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
            Müsait
          </span>
        ) : (
          <span className="shrink-0 text-xs font-bold text-red-500 bg-red-50 px-2.5 py-0.5 rounded-full">
            Alınmış
          </span>
        )}
      </div>

      <div className="flex items-center gap-4 shrink-0">
        {loading ? (
          <>
            <div className="h-5 w-14 bg-gray-200 rounded animate-pulse" />
            <div className="h-9 w-28 bg-gray-200 rounded-lg animate-pulse" />
          </>
        ) : available ? (
          <>
            <div className="text-right">
              <span className="font-extrabold text-[#1b2a4a] text-lg">
                ₺{price}
              </span>
              <span className="text-gray-400 text-xs ml-1">/{period}</span>
            </div>

            <button
              onClick={onToggleCart}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all active:scale-95
                ${
                  inCart
                    ? "bg-emerald-600 text-white"
                    : "bg-[#2ecc8f] hover:bg-[#27b87d] text-white"
                }`}
            >
              {inCart ? "✓ Sepette" : "Sepete Ekle"}
            </button>
          </>
        ) : (
          <button
            disabled
            className="px-5 py-2 rounded-lg text-sm font-bold bg-gray-200 text-gray-400 cursor-not-allowed"
          >
            Müsait Değil
          </button>
        )}
      </div>
    </div>
  );
}
