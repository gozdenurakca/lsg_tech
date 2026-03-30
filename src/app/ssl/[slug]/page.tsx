import connectDB from "@/lib/db";
import Product from "@/models/Product";
import { notFound } from "next/navigation";

import Hero from "@/components/marketing/hero/ProductHero";
import TrustBar from "@/components/marketing/TrustBar";
import InfoSection from "@/components/marketing/InfoSection";
import PricingSection from "@/components/pricing/PricingSection";

import SslPricingRow from "@/components/ssl/SslPricingRow";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  await connectDB();

  const product: any = await Product.findOne({
    slug: params.slug,
  }).lean();

  if (!product) return notFound();

  return (
    <main className="bg-white text-slate-900">
      <Hero
        badge={{
          icon: "ShieldCheck",
          label: `${product.validation} SSL`,
        }}
        title={product.name}
        subtitle={product.shortDescription}
        imageSrc="/images/ssl-hero.png"
        primaryButton={{
          label: "Satın Al",
          href: "#pricing",
        }}
      />
      <TrustBar
        id="guven"
        title="Kurumsal seviyede güvenlik"
        description="256-bit şifreleme, global tarayıcı uyumluluğu ve yüksek garanti ile maksimum koruma."
        imageSrc="/images/ssl-trust.png"
        stats={[
          {
            value: product.specs?.Issuance || "-",
            label: "Aktivasyon",
          },
          {
            value: product.specs?.Encryption || "-",
            label: "Şifreleme",
          },
          {
            value: "HTTPS",
            label: "Güven kilidi",
          },
          {
            value: product.specs?.Warranty || "-",
            label: "Garanti",
          },
        ]}
      />
      <PricingSection
        id="pricing"
        layout="list"
        title="Fiyatlandırma"
        subtitle="Esnek süre seçenekleri ile satın alın."
        products={[product]}
        renderRow={(p: any) => (
          <SslPricingRow key={p.slug} product={p} defaultYears={1} featured />
        )}
      />
      <InfoSection
        title="Neler Dahil?"
        items={[
          ...(product.features?.map((f: string) => ({
            title: f,
            desc: "",
            icon: "check",
          })) || []),

          {
            title: "Hızlı Aktivasyon",
            desc: product.specs?.Issuance,
            icon: "zap",
          },
          {
            title: "Güçlü Şifreleme",
            desc: product.specs?.Encryption,
            icon: "lock",
          },
          {
            title: "Sigorta Garantisi",
            desc: product.specs?.Warranty,
            icon: "shield",
          },
        ]}
      />
      <section className="py-24 border-t text-center">
        <h2 className="text-3xl font-bold mb-6">
          Enterprise Seviyede Güvenlik
        </h2>

        <p className="text-slate-600 max-w-2xl mx-auto">
          {product.description}
        </p>
      </section>
    </main>
  );
}
