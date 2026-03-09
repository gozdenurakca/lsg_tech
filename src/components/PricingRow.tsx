"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle, ShoppingCart, Sparkles } from "lucide-react";

type Years = 1 | 2 | 3;

const BRAND_LOGOS: Record<string, string> = {
  RapidSSL: "/logos/rapidssl.png",
  PositiveSSL: "/logos/positiveSSL.png",
  Sectigo: "/logos/sectigo.png",
  GeoTrust: "/logos/geotrust.png",
  Thawte: "/logos/thawte.png",
};
function formatTRY(n: number, digits = 2) {
  try {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: digits,
      minimumFractionDigits: digits,
    }).format(n);
  } catch {
    return `₺${Number(n).toFixed(digits)}`;
  }
}

function first2(s?: string) {
  return (s || "DV").slice(0, 2).toUpperCase();
}

function getTotalForYears(product: any, years: Years) {
  const p = product?.price || {};
  if (years === 1) return Number(p.oneYear || 0);
  if (years === 2) return Number(p.twoYear || 0);
  return Number(p.threeYear || 0);
}

function calcSavingsPct(
  oneYearTotal: number,
  selectedTotal: number,
  years: Years,
) {
  if (!oneYearTotal || years === 1) return 0;
  const monthly1 = oneYearTotal / 12;
  const monthlySel = selectedTotal / (years * 12);
  const pct = Math.round(((monthly1 - monthlySel) / monthly1) * 100);
  return Math.max(0, pct);
}

function BrandBadge({ brand }: { brand: string }) {
  const logo = BRAND_LOGOS[brand];

  return (
    <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center p-2">
      {logo ? (
        <img src={logo} alt={brand} className="max-h-8 object-contain" />
      ) : (
        <span className="text-xs font-bold text-slate-700">
          {first2(brand)}
        </span>
      )}
    </div>
  );
}

function TierPill({ tier }: { tier?: string }) {
  const t = tier || "Basic";

  if (t === "Premium") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 text-amber-900 px-3 py-1 text-xs font-bold">
        <Sparkles className="w-3.5 h-3.5" /> Premium
      </span>
    );
  }

  if (t === "Enterprise") {
    return (
      <span className="inline-flex items-center rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-bold">
        Enterprise
      </span>
    );
  }

  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-800 px-3 py-1 text-xs font-bold">
      Basic
    </span>
  );
}

export default function PricingRow({
  product,
  defaultYears = 3,
  featured = false,
}: {
  product: any;
  defaultYears?: Years;
  featured?: boolean;
}) {
  const [years, setYears] = useState<Years>(defaultYears);

  const total = useMemo(
    () => getTotalForYears(product, years),
    [product, years],
  );
  const monthly = useMemo(
    () => (years * 12 ? total / (years * 12) : 0),
    [total, years],
  );

  const oneYearTotal = useMemo(
    () => Number(product?.price?.oneYear || 0),
    [product],
  );
  const savingsPct = useMemo(
    () => calcSavingsPct(oneYearTotal, total, years),
    [oneYearTotal, total, years],
  );

  const issuance =
    product?.issuanceTime ||
    product?.specs?.Issuance ||
    (product?.validation === "DV"
      ? "5–10 dk"
      : product?.validation === "OV"
        ? "1–3 gün"
        : "3–7 gün");

  const validationLabel =
    product?.validation === "DV"
      ? "Domain (DV)"
      : product?.validation === "OV"
        ? "Organization (OV)"
        : "Extended (EV)";

  const features = Array.isArray(product?.features) ? product.features : [];

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-3xl border bg-white shadow-sm transition-all",
        "hover:-translate-y-0.5 hover:shadow-xl",
        featured ? "border-blue-200 shadow-lg" : "border-slate-200",
      ].join(" ")}
    >
      {featured && (
        <div className="pointer-events-none absolute -inset-1 opacity-60 blur-2xl bg-gradient-to-r from-sky-200 to-indigo-200" />
      )}

      <div className="relative p-6 md:p-7">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="min-w-0 flex items-start gap-4">
            <BrandBadge brand={product?.brand || "SSL"} />

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg md:text-xl font-extrabold text-slate-900 truncate">
                  {product?.name}
                </h3>

                <TierPill tier={product?.tier} />

                {featured && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-3 py-1 text-xs font-bold shadow">
                    <Sparkles className="w-3.5 h-3.5" /> Önerilen
                  </span>
                )}

                {savingsPct > 0 && (
                  <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-900 px-3 py-1 text-xs font-bold">
                    %{savingsPct} tasarruf
                  </span>
                )}
              </div>

              <p className="text-slate-600 text-sm mt-2 line-clamp-2 max-w-2xl">
                {product?.shortDescription || product?.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
                  Aktivasyon: <span className="font-semibold">{issuance}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
                  Doğrulama:{" "}
                  <span className="font-semibold">{validationLabel}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
                  Tip:{" "}
                  <span className="font-semibold">{product?.productType}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
                  Marka: <span className="font-semibold">{product?.brand}</span>
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Pricing panel */}
          <div className="w-full lg:w-[420px]">
            <div
              className={[
                "rounded-2xl border p-5 md:p-6",
                featured
                  ? "border-blue-200 bg-blue-50/40"
                  : "border-slate-200 bg-slate-50/40",
              ].join(" ")}
            >
              {/* duration selector */}
              <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1">
                {[1, 2, 3].map((y) => (
                  <button
                    key={y}
                    onClick={() => setYears(y as Years)}
                    className={[
                      "px-4 py-2 text-sm font-semibold rounded-lg transition",
                      years === y
                        ? "bg-slate-900 text-white shadow"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {y} Yıl
                  </button>
                ))}
              </div>

              {/* price */}
              <div className="mt-5">
                <div className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-none">
                  {formatTRY(monthly, 2)}
                  <span className="text-base md:text-lg font-semibold text-slate-600">
                    {" "}
                    /ay
                  </span>
                </div>

                <div className="mt-2 text-sm text-slate-600">
                  {years} yıllık süre ile bugün{" "}
                  <span className="font-bold text-slate-900">
                    {formatTRY(total, 2)}
                  </span>{" "}
                  ödeyin.
                </div>

                {product?.originalPrice &&
                Number(product.originalPrice) >
                  Number(getTotalForYears(product, years)) ? (
                  <div className="mt-2 text-sm text-slate-500">
                    <span className="line-through">
                      {formatTRY(Number(product.originalPrice), 2)}
                    </span>
                    {product?.discount ? (
                      <span className="ml-2 font-semibold text-emerald-700">
                        %{product.discount} indirim
                      </span>
                    ) : null}
                  </div>
                ) : null}
              </div>

              {/* actions */}
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 text-white py-3 font-semibold hover:bg-slate-800 transition">
                  <ShoppingCart className="w-4 h-4" />
                  Sepete Ekle
                </button>

                <Link
                  href={`/ssl/${product?.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white text-slate-900 py-3 font-semibold hover:bg-slate-50 transition"
                >
                  Detay <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-3 text-[11px] text-slate-500">
                * Fiyatlar seçilen süreye göre peşin tahsil edilir.
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES (optional) */}
        {features.length > 0 && (
          <div className="mt-6 border-t pt-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {features.slice(0, 6).map((f: string) => (
                <div
                  key={f}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                  <span className="leading-relaxed">{f}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
