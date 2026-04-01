"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ICONS } from "@/lib/icons";
import { useCart } from "@/components/context/CartContext";

import BrandBadge from "@/components/ssl/BrandBadge";
import TierPill from "@/components/ssl/TierPill";

import type { Product, Years } from "@/lib/ssl/types";
import {
  formatTRY,
  getTotal,
  calcSavings,
  getIssuance,
  getValidationLabel,
  resolveTier,
} from "@/lib/ssl/pricing";

type Props = {
  product: Product;
  defaultYears?: Years;
  featured?: boolean;
  showDomainCounter?: boolean;
};

export default function SslPricingRow({
  product,
  defaultYears = 3,
  featured = false,
  showDomainCounter = false,
}: Props) {
  const [years, setYears] = useState<Years>(defaultYears);
  const isWildcardProduct = product.productType === "Wildcard";
  const isMultiDomainProduct = product.productType === "Multi-Domain";
  const defaultDomains = isMultiDomainProduct
    ? (product.domainSupport?.multiDomainLimit ?? 3)
    : 1;
  const [standardDomains, setStandardDomains] = useState(defaultDomains);
  const [wildcardDomains, setWildcardDomains] = useState(
    isWildcardProduct ? 1 : 0,
  );
  const { addItem } = useCart();
  const router = useRouter();
  const baseTotal = useMemo(() => getTotal(product, years), [product, years]);
  const pricePerDomain = product.price?.pricePerDomain ?? 0;
  const extraStandard = Math.max(0, standardDomains - defaultDomains);
  const extraWildcard = wildcardDomains;
  const domainExtra = showDomainCounter
    ? (extraStandard + extraWildcard) * pricePerDomain * years
    : 0;
  const total = baseTotal + domainExtra;
  const monthly = total > 0 ? total / (years * 12) : 0;
  const oneYearTotal = Number(product.price?.oneYear ?? 0);
  const savingsPct = calcSavings(oneYearTotal, baseTotal, years);
  const tier = resolveTier(product);
  const issuance = getIssuance(product);
  const validationLabel = getValidationLabel(product);
  const safeName = product.name?.trim() || "SSL Sertifikası";
  const safeSlug = product.slug?.trim() || "";
  const safeBrand = product.brand?.trim() || "SSL";
  const safeProductType = product.productType?.trim() || "SSL";
  const safeDescription =
    product.shortDescription?.trim() ||
    product.description?.trim() ||
    "Güvenli bağlantı ve veri şifreleme sağlayan SSL çözümü.";

  const features = Array.isArray(product.features)
    ? product.features.slice(0, 6)
    : [];

  const hasPrice = total > 0;
  const detailHref = safeSlug ? `/ssl/${safeSlug}` : "/ssl";

  const handleAddToCart = () => {
    if (!hasPrice) return;

    addItem({
      type: "ssl",
      plan: safeName,
      price: total / years,
      period: years,
    });

    router.push("/sepet");
  };

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-3xl border bg-white shadow-sm transition",
        "hover:-translate-y-1 hover:shadow-2xl",
        "w-full",
        featured ? "border-blue-200 shadow-lg" : "border-slate-200",
      ].join(" ")}
    >
      {featured && (
        <div className="absolute -inset-1 opacity-60 blur-2xl bg-gradient-to-r from-sky-200 to-indigo-200" />
      )}

      <div className="relative p-6 md:p-7">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
          <div className="flex items-start gap-4 min-w-0">
            <BrandBadge brand={safeBrand} />

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg md:text-xl font-extrabold text-slate-900 break-words">
                  {safeName}
                </h3>

                <TierPill tier={tier} />

                {featured && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-3 py-1 text-xs font-bold shadow">
                    <ICONS.sparkles className="w-3.5 h-3.5" />
                    Önerilen
                  </span>
                )}

                {savingsPct > 0 && (
                  <span className="rounded-full bg-emerald-100 text-emerald-900 px-3 py-1 text-xs font-bold">
                    %{savingsPct} tasarruf
                  </span>
                )}
              </div>

              <p className="text-slate-600 text-sm mt-2 max-w-2xl">
                {safeDescription}
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-slate-50 border">
                  Aktivasyon: <b>{issuance}</b>
                </span>

                <span className="px-3 py-1 rounded-full bg-slate-50 border">
                  Doğrulama: <b>{validationLabel}</b>
                </span>

                <span className="px-3 py-1 rounded-full bg-slate-50 border">
                  Tip: <b>{safeProductType}</b>
                </span>

                <span className="px-3 py-1 rounded-full bg-slate-50 border">
                  Marka: <b>{safeBrand}</b>
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[420px]">
            {" "}
            <div className="relative overflow-hidden rounded-2xl border p-5 md:p-6 bg-slate-50/40">
              {/* Blurred logo watermark */}
              <div className="pointer-events-none absolute -bottom-6 -right-6 w-40 h-40 rounded-3xl bg-gradient-to-br from-primary via-blue-600 to-indigo-700 opacity-10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-4 -right-4 w-28 h-28 rounded-2xl bg-gradient-to-br from-primary via-blue-600 to-indigo-700 opacity-15 blur-xl flex items-center justify-center">
                <span className="text-white text-5xl font-bold select-none">
                  L
                </span>
              </div>
              {showDomainCounter && (
                <div className="mb-4 space-y-3">
                  {isMultiDomainProduct && (
                    <p className="text-sm font-semibold text-slate-700 mb-1">
                      Number of domains to protect?
                    </p>
                  )}

                  {/* STANDARD DOMAINS — Wildcard ürünler hariç hepsinde */}
                  {!isWildcardProduct && (
                    <div className="flex items-center justify-between rounded-xl border bg-white px-4 py-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          Standard domains
                        </p>
                        <p className="text-xs text-slate-400">mydomain.com</p>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border border-blue-200 px-1 py-1">
                        <button
                          type="button"
                          onClick={() =>
                            setStandardDomains((c) => Math.max(1, c - 1))
                          }
                          className="w-7 h-7 flex items-center justify-center text-blue-500 font-bold text-lg transition hover:bg-blue-50 rounded"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm font-semibold">
                          {standardDomains}
                        </span>
                        <button
                          type="button"
                          onClick={() => setStandardDomains((c) => c + 1)}
                          className="w-7 h-7 flex items-center justify-center text-blue-500 font-bold text-lg transition hover:bg-blue-50 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}

                  {/* WILDCARD DOMAINS — Sadece Wildcard ürünlerde veya wildcard destekleyen Multi-Domain'lerde */}
                  {(isWildcardProduct ||
                    (isMultiDomainProduct &&
                      product.domainSupport?.wildcard)) && (
                    <div className="flex items-center justify-between rounded-xl border bg-white px-4 py-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          Wildcard domains
                        </p>
                        <p className="text-xs text-slate-400">*.mydomain.com</p>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border border-blue-200 px-1 py-1">
                        <button
                          type="button"
                          onClick={() =>
                            setWildcardDomains((c) =>
                              Math.max(isWildcardProduct ? 1 : 0, c - 1),
                            )
                          }
                          className="w-7 h-7 flex items-center justify-center text-blue-500 font-bold text-lg transition hover:bg-blue-50 rounded"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm font-semibold">
                          {wildcardDomains}
                        </span>
                        <button
                          type="button"
                          onClick={() => setWildcardDomains((c) => c + 1)}
                          className="w-7 h-7 flex items-center justify-center text-blue-500 font-bold text-lg transition hover:bg-blue-50 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="inline-flex rounded-xl border bg-white p-1">
                {[1, 2, 3].map((y) => (
                  <button
                    key={y}
                    type="button"
                    onClick={() => setYears(y as Years)}
                    className={[
                      "px-4 py-2 text-sm font-semibold rounded-lg transition",
                      years === y
                        ? "bg-slate-900 text-white"
                        : "text-slate-700 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {y} Yıl
                  </button>
                ))}
              </div>

              <div className="mt-5">
                {hasPrice ? (
                  <>
                    <div className="text-4xl md:text-5xl font-extrabold text-slate-900">
                      {formatTRY(monthly)}
                      <span className="text-lg text-slate-600"> /ay</span>
                    </div>

                    <div className="mt-2 text-sm text-slate-600">
                      {years} yıl için bugün <b>{formatTRY(total)}</b> ödeyin.
                    </div>

                    {/* Domain ek ücret kırılımı */}
                    {showDomainCounter &&
                      (extraStandard > 0 || extraWildcard > 0) &&
                      pricePerDomain > 0 && (
                        <div className="mt-3 rounded-xl bg-blue-50 border border-blue-100 px-4 py-2.5 text-xs text-slate-600 space-y-1">
                          <div className="flex justify-between">
                            <span>
                              {isWildcardProduct
                                ? `Baz fiyat (1 wildcard domain)`
                                : isMultiDomainProduct
                                  ? `Baz fiyat (${defaultDomains} domain)`
                                  : `Baz fiyat (1 domain)`}
                            </span>
                            <span className="font-semibold">
                              {formatTRY(baseTotal)}
                            </span>
                          </div>
                          {extraStandard > 0 && (
                            <div className="flex justify-between text-blue-600">
                              <span>
                                +{extraStandard} ekstra standard domain ×{" "}
                                {formatTRY(pricePerDomain)} × {years} yıl
                              </span>
                              <span className="font-semibold">
                                {formatTRY(
                                  extraStandard * pricePerDomain * years,
                                )}
                              </span>
                            </div>
                          )}
                          {extraWildcard > 0 && (
                            <div className="flex justify-between text-blue-600">
                              <span>
                                {isWildcardProduct
                                  ? `+${extraWildcard} ekstra wildcard domain × ${formatTRY(pricePerDomain)} × ${years} yıl`
                                  : `+${extraWildcard} wildcard domain × ${formatTRY(pricePerDomain)} × ${years} yıl`}
                              </span>
                              <span className="font-semibold">
                                {formatTRY(
                                  extraWildcard * pricePerDomain * years,
                                )}
                              </span>
                            </div>
                          )}
                          <div className="flex justify-between border-t border-blue-200 pt-1 font-bold text-slate-800">
                            <span>Toplam</span>
                            <span>{formatTRY(total)}</span>
                          </div>
                        </div>
                      )}
                  </>
                ) : (
                  <>
                    <div className="text-3xl md:text-4xl font-extrabold text-slate-900">
                      Teklif Alın
                    </div>

                    <div className="mt-2 text-sm text-slate-600">
                      Bu ürün için fiyat bilgisi şu an gösterilemiyor.
                    </div>
                  </>
                )}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  disabled={!hasPrice}
                  onClick={handleAddToCart}
                  className={[
                    "inline-flex items-center justify-center gap-2 rounded-2xl py-3 font-semibold transition",
                    hasPrice
                      ? "bg-slate-900 text-white hover:bg-slate-800"
                      : "bg-slate-200 text-slate-500 cursor-not-allowed",
                  ].join(" ")}
                >
                  <ICONS.cart className="w-4 h-4" />
                  Sepete Ekle
                </button>

                <Link
                  href={detailHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border bg-white py-3 font-semibold hover:bg-slate-50 transition"
                >
                  Detay
                  <ICONS.arrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-3 text-[11px] text-slate-500">
                * Fiyatlar seçilen süreye göre peşin tahsil edilir.
              </div>
            </div>
          </div>
        </div>

        {features.length > 0 && (
          <div className="mt-6 border-t pt-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-sm">
                  <ICONS.check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
