"use client";

import { useState } from "react";
import SslPricingRow from "@/components/ssl/SslPricingRow";
import type { Product } from "@/lib/ssl/types";

type Tab = "single" | "multi";

type Props = {
  singleDomainProducts: Product[];
  multiDomainProducts: Product[];
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  eyebrowColor?: string;
};

export default function SslFilteredPricing({
  singleDomainProducts,
  multiDomainProducts,
  title = "SSL Paketleri",
  subtitle = "İhtiyacınıza uygun sertifikayı seçin.",
  eyebrow = "SSL Paketleri",
  eyebrowColor = "text-blue-500",
}: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("single");

  const hasMulti = multiDomainProducts.length > 0;

  const products =
    activeTab === "single" ? singleDomainProducts : multiDomainProducts;

  const tabs = [
    { key: "single", label: "Single Domain" },
    ...(hasMulti ? [{ key: "multi", label: "Multi-Domain" }] : []),
  ];

  return (
    <section id="pricing" className="py-20 bg-[#f8fafc] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p
            className={`text-[11px] uppercase tracking-[0.25em] font-bold mb-3 ${eyebrowColor}`}
          >
            {eyebrow}
          </p>
          <h2 className="text-[clamp(26px,3vw,40px)] font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm">{subtitle}</p>
        </div>

        <div className="flex items-center gap-3 mb-10 bg-white border border-slate-200 rounded-2xl px-4 py-3 w-fit mx-auto shadow-sm">
          <span className="text-sm font-semibold text-slate-500 mr-2 whitespace-nowrap">
            Sertifika Türü
          </span>

          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as Tab)}
              className={[
                "px-5 py-2 rounded-xl text-sm font-semibold transition-all",
                activeTab === tab.key
                  ? "bg-blue-600 text-white shadow"
                  : "text-slate-600 hover:bg-slate-100",
              ].join(" ")}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {products.length > 0 ? (
          <div className="flex flex-col gap-5">
            {products.map((product, idx) => (
              <SslPricingRow
                key={product._id ?? product.slug}
                product={product}
                defaultYears={3}
                featured={product.featured || idx === 0}
                showDomainCounter={activeTab === "multi"}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400 text-sm">
            Bu kategori için henüz ürün bulunmuyor.
          </div>
        )}
      </div>
    </section>
  );
}
