import Hero from "@/components/marketing/hero/ProductHero";
import TrustBar from "@/components/marketing/TrustBar";
import InfoSection from "@/components/marketing/InfoSection";
import PricingSection from "@/components/pricing/PricingSection";

import SslPricingRow from "@/components/ssl/SslPricingRow";

import { getProducts, getBrands } from "@/lib/api/products";
import { sortByBrand } from "@/lib/utils/sortProducts";
import type { Product } from "@/lib/ssl/types";

export default async function OVMarketingPage() {
  const [standardProducts, wildcardProducts, brands] = await Promise.all([
    getProducts("OV", "Standard"),
    getProducts("OV", "Wildcard"),
    getBrands("OV"),
  ]);

  const sortedStandard = sortByBrand(standardProducts);
  const sortedWildcard = sortByBrand(wildcardProducts);

  return (
    <main className="bg-white text-slate-900">
      <Hero
        badge={{
          icon: "ShieldCheck",
          label: "Organization Validation SSL",
        }}
        title="OV SSL Sertifikaları"
        subtitle="Şirket doğrulaması ile daha güçlü güven sinyali. Kurumsal web siteleri ve e-ticaret platformları için ideal SSL çözümü."
        imageSrc="/images/ov.png"
        primaryButton={{
          label: "Sertifika Seç",
          href: "#pricing",
        }}
      />

      <TrustBar
        id="guven"
        title="Şirket doğrulaması ile kurumsal güven"
        description="OV SSL sertifikaları ile ziyaretçilerinize işletmenizin doğrulanmış olduğunu gösterin ve güven oluşturun."
        stats={[
          { value: "1–3 gün", label: "Aktivasyon" },
          { value: "256-bit", label: "Şifreleme" },
          { value: "OV", label: "Doğrulama" },
          { value: "Kurumsal", label: "Güven" },
        ]}
        visual={
          <div className="w-full h-full bg-gradient-to-br from-[#1a3c2e] via-[#1f4d38] to-[#0f2d1e] flex flex-col items-center justify-center gap-6 p-10">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-52 h-52 rounded-full bg-emerald-500/10 animate-pulse" />
              <div className="absolute w-40 h-40 rounded-full bg-emerald-500/15" />
              <svg
                width="120"
                height="120"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 drop-shadow-xl"
              >
                <path
                  d="M16 3L26 7V14C26 21 21.5 26 16 29C10.5 26 6 21 6 14V7L16 3Z"
                  fill="#ECEFF1"
                  fillOpacity="0.95"
                />
                <path
                  d="M12.5 16.5L15 19L20 13.5"
                  stroke="#2E7D32"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-center">
              <div className="text-emerald-400 font-bold text-[13px] uppercase tracking-widest mb-1">
                Organization Validated
              </div>
              <div className="text-white/60 text-[12px]">
                Şirket kimliği doğrulandı
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-emerald-500/40" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
              <div className="w-8 h-px bg-emerald-500/40" />
            </div>
          </div>
        }
      />

      <PricingSection<Product>
        id="pricing"
        layout="list"
        title="OV SSL Paketleri"
        subtitle="Kurumsal güven için şirket doğrulamalı SSL çözümleri."
        products={sortedStandard}
        renderRow={(product: Product, idx: number) => (
          <SslPricingRow
            key={product._id ?? product.slug}
            product={product}
            defaultYears={3}
            featured={product.featured || idx === 0}
          />
        )}
      />

      {sortedWildcard.length > 0 && (
        <PricingSection<Product>
          layout="list"
          title="Wildcard OV SSL Paketleri"
          subtitle="Tüm alt domainler için kurumsal güvenlik sağlayın."
          products={sortedWildcard}
          renderRow={(product: Product, idx: number) => (
            <SslPricingRow
              key={product._id ?? product.slug}
              product={product}
              defaultYears={3}
              featured={product.featured || idx === 0}
            />
          )}
        />
      )}

      <InfoSection
        title="OV SSL Nedir?"
        items={[
          {
            title:
              "OV (Organization Validation) SSL, alan adı doğrulamasına ek olarak başvuran şirketin yasal varlığını doğrulayan SSL sertifikasıdır.",
            desc: "Bu sayede ziyaretçiler web sitesinin gerçek bir işletmeye ait olduğunu görebilir.",
          },
          {
            title: "1–3 gün",
            desc: "Aktivasyon süresi",
          },
          {
            title: "OV",
            desc: "Şirket doğrulaması",
          },
          {
            title: "256-bit",
            desc: "Güvenli şifreleme",
          },
          {
            title: "Güven",
            desc: "Kurumsal itibar",
          },
          {
            title: "Kullanım alanı",
            desc: "Kurumsal web siteleri, E-ticaret platformları, müşteri verisi toplayan siteler",
          },
        ]}
      />
    </main>
  );
}
