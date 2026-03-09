const BRAND_ORDER = [
  "DigiCert",
  "Sectigo",
  "GeoTrust",
  "Thawte",
  "RapidSSL",
  "PositiveSSL",
];

export function sortByBrand(arr: any[]) {
  return [...arr].sort((a, b) => {
    const ai = BRAND_ORDER.indexOf(a.brand);
    const bi = BRAND_ORDER.indexOf(b.brand);

    const aRank = ai === -1 ? 999 : ai;
    const bRank = bi === -1 ? 999 : bi;

    if (aRank !== bRank) return aRank - bRank;

    return String(a.name || "").localeCompare(String(b.name || ""), "tr");
  });
}