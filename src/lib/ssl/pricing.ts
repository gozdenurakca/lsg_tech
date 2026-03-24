import type { Product, Years } from "@/lib/ssl/types";

export function formatTRY(n: number, digits = 2) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(n);
}

export function getTotal(product: Product, years: Years) {
  const p = product.price || {};

  if (years === 1) return Number(p.oneYear || 0);
  if (years === 2) return Number(p.twoYear || 0);
  return Number(p.threeYear || 0);
}

export function calcSavings(
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

export function getIssuance(product: Product) {
  return (
    product.issuanceTime ||
    product.specs?.Issuance ||
    (product.validation === "DV"
      ? "5–10 dk"
      : product.validation === "OV"
        ? "1–3 gün"
        : product.validation === "EV"
          ? "3–7 gün"
          : "Bilgi yok")
  );
}

export function getValidationLabel(product: Product) {
  return product.validation === "DV"
    ? "Domain (DV)"
    : product.validation === "OV"
      ? "Organization (OV)"
      : product.validation === "EV"
        ? "Extended (EV)"
        : "Standart";
}

export function resolveTier(
  product: Product,
): "Basic" | "Premium" | "Enterprise" {
  if (product.tier) return product.tier;
  if (product.validation === "EV") return "Enterprise";
  if (product.validation === "OV") return "Premium";
  return "Basic";
}