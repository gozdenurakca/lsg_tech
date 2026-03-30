import Hero from "@/components/marketing/hero/ProductHero";
import TrustBar from "@/components/marketing/TrustBar";
import PricingSection from "@/components/pricing/PricingSection";
import PricingNavbar from "@/components/pricing/PricingNavbar";
import SslPricingRow from "@/components/ssl/SslPricingRow";

import { getProducts } from "@/lib/api/products";
import { sortByBrand } from "@/lib/utils/sortProducts";
import type { Product } from "@/lib/ssl/types";

export default async function SSLPricingPage() {
  const [dvProducts, ovProducts, evProducts, wildcardProducts] =
    await Promise.all([
      getProducts("DV", "Standard"),
      getProducts("OV", "Standard"),
      getProducts("EV", "Standard"),
      getProducts("DV", "Wildcard"),
    ]);

  const sortedDV = sortByBrand(dvProducts);
  const sortedOV = sortByBrand(ovProducts);
  const sortedEV = sortByBrand(evProducts);
  const sortedWildcard = sortByBrand(wildcardProducts);

  return (
    <main className="bg-white text-slate-900">
      <Hero
        badge={{
          icon: "ShieldCheck",
          label: "SSL Fiyatlandırma",
        }}
        title="SSL Sertifikası Fiyatları"
        subtitle="Siteniz için en uygun SSL sertifikasını seçin. Tüm ihtiyaçlarınıza uygun DV, OV, EV ve Wildcard çözümleri."
        imageSrc="/images/pricing.png"
        imageGradient="from-indigo-600 via-purple-600 to-blue-600"
        floatingCard={{
          icon: "ShieldCheck",
          eyebrow: "Sıfır Risk",
          text: "%100 Orijinal Lisans",
          iconBg: "bg-white",
          iconColor: "text-blue-600",
        }}
        primaryButton={{
          label: "Tüm Planları İncele",
          href: "#pricing",
        }}
        secondaryButton={{
          label: "SSL Nedir?",
          href: "/ssl",
        }}
      />

      <PricingNavbar />

      <div id="pricing" className="bg-[#f8fafc] py-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-3"></p>
          <p className="text-slate-500 max-w-xl mx-auto">
            Hızlı kurulumdan maksimum güvene kadar,
          </p>
          <p className="text-slate-500 max-w-xl mx-auto">
            tüm SSL ihtiyaçlarınız için en rekabetçi fiyatlar burada.
          </p>
        </div>
      </div>

      {sortedDV.length > 0 && (
        <PricingSection<Product>
          id="dv-pricing"
          layout="list"
          title="DV (Domain Validation) SSL Paketleri"
          subtitle="Dakikalar içinde aktif olan HTTPS koruması. Bloglar ve standart kişisel siteler için ideal."
          products={sortedDV}
          bgColor="bg-white"
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

      {sortedOV.length > 0 && (
        <PricingSection<Product>
          id="ov-pricing"
          layout="list"
          title="OV (Organization Validation) SSL Paketleri"
          subtitle="Kurumsal kimlik doğrulaması içeren profesyonel güvenlik çözümleri. E-ticaret siteleri ve kurumsal firmalar için."
          products={sortedOV}
          bgColor="bg-[#f8fafc]"
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

      {sortedEV.length > 0 && (
        <PricingSection<Product>
          id="ev-pricing"
          layout="list"
          title="EV (Extended Validation) SSL Paketleri"
          subtitle="En üst düzeyde kimlik doğrulaması (Yeşil Bar). Bankalar, e-ticaret portalları ve maksimum güven arayanlar için."
          products={sortedEV}
          bgColor="bg-white"
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

      {sortedWildcard.length > 0 && (
        <PricingSection<Product>
          id="wildcard-pricing"
          layout="list"
          title="Wildcard SSL Paketleri"
          subtitle="Ana alan adınız (*.ornek.com) ve tüm alt alan adlarınız (subdomains) için sınırsız koruma sağlayan tek bir sertifika."
          products={sortedWildcard}
          bgColor="bg-[#f8fafc]"
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

      <TrustBar
        id="fiyat-gucencesi"
        title="Şeffaf Fiyatlandırma, Gizli Ücret Yok"
        description="Tüm SSL sertifikalarımız onaylı otoritelerden sağlanır. Sepette ek maliyetlerle karşılaşmadan, orijinal lisanslara en uygun fiyatlarla sahip olun."
        visual={
          <div className="relative w-full h-full min-h-[420px] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-tr from-slate-50 to-blue-50/50 flex flex-col items-center justify-center p-12 border border-slate-100">
            <img
              src="/images/guven2.png"
              alt="Orijinal Lisans Güvencesi"
              className="w-full max-w-[340px] h-auto object-contain drop-shadow-2xl translate-y-[-10px]"
            />
          </div>
        }
        stats={[
          { value: "%100", label: "Orijinal Lisans" },
          { value: "₺0", label: "Ek Kurulum Ücreti" },
          { value: "30 Gün", label: "İade Garantisi" },
          { value: "7/24", label: "Ücretsiz Destek" },
        ]}
      />
    </main>
  );
}
