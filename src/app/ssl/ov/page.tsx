import Hero from "@/components/marketing/hero/ProductHero";
import TrustBar from "@/components/marketing/TrustBar";
import InfoSection from "@/components/marketing/InfoSection";
import SslFilteredPricing from "@/components/ssl/SslFilteredPricing";

import { getProducts } from "@/lib/api/products";
import { sortByBrand } from "@/lib/utils/sortProducts";
import type { Product } from "@/lib/ssl/types";

export default async function OVMarketingPage() {
  const products: Product[] = await getProducts("OV");

  const singleDomainProducts = products.filter(
    (p) => p.productType && ["Standard", "Wildcard"].includes(p.productType),
  );
  const multiDomainProducts = products.filter(
    (p) => p.productType === "Multi-Domain",
  );

  const sortedSingle = sortByBrand(singleDomainProducts);
  const sortedMultiDomain = sortByBrand(multiDomainProducts);

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
          </div>
        }
      />

      <SslFilteredPricing
        singleDomainProducts={sortedSingle}
        multiDomainProducts={sortedMultiDomain}
        title="OV SSL Paketleri"
        subtitle="Kurumsal güven için şirket doğrulamalı SSL çözümleri."
        eyebrow="Organization Validation"
        eyebrowColor="text-emerald-500"
      />

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
            desc: "Kurumsal web siteleri, e-ticaret platformları ve müşteri verisi toplayan siteler",
          },
        ]}
      />
    </main>
  );
}
