type Props = {
  brand?: string;
};

const BRAND_LOGOS: Record<string, string> = {
  RapidSSL: "/logos/rapidssl.png",
  PositiveSSL: "/logos/positiveSSL.png",
  Sectigo: "/logos/sectigo.png",
  GeoTrust: "/logos/geotrust.png",
  Thawte: "/logos/thawte.png",
  DigiCert: "/logos/digicert.svg",
};

export default function BrandBadge({ brand }: Props) {
  const logo = brand ? BRAND_LOGOS[brand] : undefined;

  return (
    <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center p-2">
      {logo ? (
        <img src={logo} alt={brand} className="max-h-8 object-contain" />
      ) : (
        <span className="text-xs font-bold text-slate-700">
          {(brand || "SSL").slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  );
}
