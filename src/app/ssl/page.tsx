import Link from "next/link"
import connectDB from "@/lib/db"
import Product from "@/models/Product"

import {
  ShieldCheck,
  Lock,
  ArrowRight,
  Globe,
  Headphones,
  BadgeCheck,
  Shield,
  Building2,
  Crown,
  CheckCircle,
} from "lucide-react"

export default async function SSLPage() {
  await connectDB()

  const products = await Product.find({ category: "SSL" }).lean()

  return (
    <main className="bg-[#f4f6f8] text-slate-900 overflow-hidden">

      <section className="relative py-32 bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-900 text-white overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-semibold">
            <ShieldCheck className="w-4 h-4 text-blue-200" />
            256-bit Şifreleme + Global Güven
          </div>

          <h1 className="mt-8 text-5xl md:text-6xl font-bold">
            TLS / SSL Sertifikaları
          </h1>

          <p className="mt-8 text-xl text-blue-100 max-w-3xl mx-auto">
            Güvenli bağlantılar, marka itibarı ve arama motoru avantajı.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {[
            { value: "256-bit", label: "Şifreleme", icon: Lock },
            { value: "99.99%", label: "Tarayıcı Uyumluluğu", icon: Globe },
            { value: "24/7", label: "Uzman Destek", icon: Headphones },
            { value: "30 Gün", label: "Para İade Garantisi", icon: BadgeCheck },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg border p-8 text-center">
              <stat.icon className="w-8 h-8 text-blue-900 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-900">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            SSL Ürünlerimiz
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {products.map((product: any) => (
              <div
                key={product._id}
                className="bg-white p-10 rounded-3xl shadow-lg border border-slate-200 hover:shadow-2xl transition"
              >

                <h3 className="text-2xl font-bold mb-4">
                  {product.name}
                </h3>

                <p className="text-slate-600 mb-6">
                  {product.shortDescription}
                </p>

                <div className="text-3xl font-bold text-blue-900 mb-8">
                  {product.price.oneYear}₺ / yıl
                </div>

                <Link
                  href={`/ssl/${product.slug}`}
                  className="block text-center bg-blue-900 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 transition"
                >
                  Detayları Gör →
                </Link>

              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-950 to-indigo-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold">
            SSL Sertifikanızı Bugün Aktif Edin
          </h2>

          <Link
            href="/ssl/dv-ssl"
            className="inline-block mt-10 bg-white text-blue-900 px-12 py-4 rounded-xl font-bold"
          >
            Hemen Başla
          </Link>
        </div>
      </section>

    </main>
  )
}
