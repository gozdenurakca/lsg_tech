import connectDB from "@/lib/db"
import Product from "@/models/Product"
import Link from "next/link"
import { Check, Zap } from "lucide-react"

export default async function DVPage() {
  await connectDB()

  const products = await Product.find({
    validation: "DV",
    category: "SSL",
  })
    .sort({ "price.oneYear": 1 })
    .lean()

  return (
    <main className="bg-[#f5f7fa] min-h-screen">

      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
            <Zap className="w-4 h-4" />
            Domain Validation
          </div>

          <h1 className="text-5xl font-bold mb-6">
            DV SSL Sertifikaları
          </h1>

          <p className="text-blue-100 max-w-3xl mx-auto text-lg mb-12">
            Hızlı kurulum, uygun maliyet ve temel HTTPS koruması.
            Bloglar ve küçük işletmeler için idealdir.
          </p>

          <div className="inline-flex bg-white/10 backdrop-blur border border-white/20 rounded-lg p-1">
            <Link
              href="/ssl/dv"
              className="px-6 py-2 rounded-md bg-white text-blue-900 text-sm font-semibold"
            >
              Domain Validation
            </Link>
            <Link
              href="/ssl/ov"
              className="px-6 py-2 rounded-md text-sm font-semibold text-white hover:bg-white/20 transition"
            >
              Organization Validation
            </Link>
            <Link
              href="/ssl/ev"
              className="px-6 py-2 rounded-md text-sm font-semibold text-white hover:bg-white/20 transition"
            >
              Extended Validation
            </Link>
          </div>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 py-20">
        {products.map((product: any) => (
          <div
            key={product._id}
            className={`bg-white rounded-2xl shadow-lg border p-10 flex flex-col transition-all
            ${product.featured ? "ring-2 ring-blue-900 scale-[1.03]" : "hover:shadow-2xl"}`}
          >
            {product.featured && (
              <span className="bg-blue-900 text-white text-xs px-4 py-1 rounded-full font-semibold mb-6 text-center">
                POPÜLER
              </span>
            )}

            <h3 className="text-2xl font-bold mb-4">
              {product.name}
            </h3>

            <p className="text-slate-500 mb-8">
              {product.shortDescription}
            </p>

            <div className="mb-8">
              <div className="text-4xl font-bold text-blue-900">
                ₺{product.price.oneYear}
              </div>
              <div className="text-sm text-slate-500">
                / yıl
              </div>
            </div>

            <div className="space-y-3 mb-10 flex-1">
              {product.specs &&
                Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-green-600 mt-1" />
                    <span>
                      <strong>{key}:</strong> {value as string}
                    </span>
                  </div>
                ))}
            </div>

            <Link
              href={`/ssl/${product.slug}`}
              className="block w-full text-center bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Ürünü İncele →
            </Link>
          </div>
        ))}
      </section>

    </main>
  )
}
