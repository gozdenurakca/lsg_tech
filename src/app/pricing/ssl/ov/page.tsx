import connectDB from "@/lib/db";
import Product from "@/models/Product";
import Link from "next/link";
import { ICONS } from "@/lib/icons";

const { check: CheckIcon, shield: ShieldIcon, building: BuildingIcon } = ICONS;

export default async function OVPage() {
  await connectDB();

  const products = await Product.find({
    validation: "OV",
    category: "SSL",
  })
    .sort({ "price.oneYear": 1 })
    .lean();

  return (
    <main className="bg-[#f5f7fa] min-h-screen">
      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
            <BuildingIcon className="w-4 h-4" />
            Organization Validation
          </div>

          <h1 className="text-5xl font-bold mb-6">
            Organization Validation (OV)
          </h1>

          <p className="text-blue-100 max-w-3xl mx-auto text-lg mb-12">
            Kurumsal doğrulama ile şirket güvenilirliğini artırın. E-ticaret,
            SaaS ve şirket web siteleri için ideal çözüm.
          </p>

          <div className="inline-flex bg-white/10 backdrop-blur border border-white/20 rounded-lg p-1">
            <Link
              href="/ssl/dv"
              className="px-6 py-2 rounded-md text-sm font-semibold text-white hover:bg-white/20 transition"
            >
              Domain Validation
            </Link>

            <Link
              href="/ssl/ov"
              className="px-6 py-2 rounded-md text-sm font-semibold bg-white text-blue-900"
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
            ${product.featured ? "ring-2 ring-blue-900 scale-[1.03]" : "hover:shadow-2xl hover:-translate-y-1"}`}
          >
            {product.featured && (
              <div className="text-center mb-6">
                <span className="bg-blue-900 text-white text-xs px-4 py-1 rounded-full font-semibold">
                  EN POPÜLER
                </span>
              </div>
            )}

            <h3 className="text-2xl font-bold mb-4">{product.name}</h3>

            <p className="text-slate-500 mb-8">{product.shortDescription}</p>

            <div className="mb-8">
              <div className="text-4xl font-bold text-blue-900">
                ₺{product.price.oneYear}
              </div>
              <div className="text-sm text-slate-500">/ yıl (1 yıl)</div>
              <div className="text-xs text-slate-400 mt-2">
                2 yıl: ₺{product.price.twoYear} • 3 yıl: ₺
                {product.price.threeYear}
              </div>
            </div>

            <div className="space-y-3 mb-10 flex-1">
              {product.specs &&
                Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex items-start gap-3 text-sm">
                    <CheckIcon className="w-4 h-4 text-green-600 mt-1" />
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

      <section className="bg-white py-24 border-t">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <ShieldIcon className="w-10 h-10 text-blue-900 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-3">
              Kurumsal Kimlik Doğrulama
            </h3>
            <p className="text-slate-600 text-sm">
              Sertifika otoritesi şirket bilgilerinizi resmi olarak doğrular.
            </p>
          </div>

          <div>
            <ShieldIcon className="w-10 h-10 text-blue-900 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-3">Artan Müşteri Güveni</h3>
            <p className="text-slate-600 text-sm">
              Ziyaretçiler sitenizin gerçek bir işletmeye ait olduğunu görür.
            </p>
          </div>

          <div>
            <ShieldIcon className="w-10 h-10 text-blue-900 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-3">E-Ticaret Uyumlu</h3>
            <p className="text-slate-600 text-sm">
              Ödeme sistemleri ve kurumsal platformlar için idealdir.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            İşletmenizi Güvence Altına Alın
          </h2>

          <p className="text-blue-100 mb-10">
            OV SSL ile kurumsal itibarınızı güçlendirin ve güveni artırın.
          </p>

          <Link
            href="/ssl/dv"
            className="bg-white text-blue-900 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition shadow-lg"
          >
            Tüm SSL Paketlerini Gör
          </Link>
        </div>
      </section>
    </main>
  );
}
