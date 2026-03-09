import PricingRow from "@/components/PricingRow";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  products: any[];
  wildcardProducts?: any[];
  brands?: string[];
}

export default function SSLPricingSection({
  title,
  description,
  products,
  wildcardProducts = [],
}: Props) {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {title}
          </h2>

          <p className="text-slate-600 mt-3">{description}</p>
        </div>

        {products.length === 0 ? (
          <div className="text-center text-slate-600">
            Şu an listelenecek ürün bulunamadı.
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {products.map((product: any, idx: number) => (
              <PricingRow
                key={product._id}
                product={product}
                defaultYears={3}
                featured={product.featured || idx === 0}
              />
            ))}
          </div>
        )}

        {wildcardProducts.length > 0 && (
          <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                  Wildcard SSL Paketleri
                </h3>

                <p className="text-slate-600 mt-2">
                  Tüm alt alan adları için tek sertifika.
                </p>
              </div>

              <Link
                href="/ssl/wildcard"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:underline"
              >
                Wildcard sayfasına git
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-col gap-6">
              {wildcardProducts.map((product: any, idx: number) => (
                <PricingRow
                  key={product._id}
                  product={product}
                  defaultYears={3}
                  featured={product.featured || idx === 0}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
