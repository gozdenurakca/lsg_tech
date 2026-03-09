import connectDB from "@/lib/db";
import Product from "@/models/Product";
import { notFound } from "next/navigation";
import { ShieldCheck, CheckCircle, Clock } from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  await connectDB();

  const product: any = await Product.findOne({ slug: params.slug }).lean();

  if (!product) return notFound();

  return (
    <main className="bg-[#f5f7fa] min-h-screen">
      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">{product.name}</h1>

          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            {product.shortDescription}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Ürün Açıklaması</h2>

          <p className="text-slate-600 leading-relaxed mb-12">
            {product.description}
          </p>

          <h3 className="text-xl font-semibold mb-6">Dahil Olan Özellikler</h3>

          <div className="space-y-4">
            {product.features?.map((feature: string, i: number) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t pt-12">
            <h3 className="text-xl font-semibold mb-8">Teknik Özellikler</h3>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <ShieldCheck className="w-6 h-6 text-blue-900 mb-4" />
                <div className="text-sm text-slate-500">Garanti</div>
                <div className="font-semibold">{product.specs?.Warranty}</div>
              </div>

              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <ShieldCheck className="w-6 h-6 text-blue-900 mb-4" />
                <div className="text-sm text-slate-500">Şifreleme</div>
                <div className="font-semibold">{product.specs?.Encryption}</div>
              </div>

              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <Clock className="w-6 h-6 text-blue-900 mb-4" />
                <div className="text-sm text-slate-500">Yayın Süresi</div>
                <div className="font-semibold">{product.specs?.Issuance}</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-2xl shadow-2xl p-10 sticky top-28">
            <h3 className="text-xl font-bold mb-8">Ürünü Yapılandır</h3>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Sertifika Süresi
              </label>
              <select className="w-full border rounded-lg p-3">
                <option>1 Yıl</option>
                <option>2 Yıl</option>
                <option>3 Yıl</option>
              </select>
            </div>

            <div className="mb-10">
              <label className="block text-sm font-medium mb-2">
                Domain Sayısı
              </label>
              <input
                type="number"
                defaultValue={1}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div className="text-4xl font-bold text-blue-900 mb-2">
              ₺{product.price.oneYear}
            </div>

            <div className="text-sm text-slate-500 mb-8">/ yıl</div>

            <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 transition shadow-lg">
              Sepete Ekle
            </button>

            <div className="text-xs text-slate-500 mt-6 text-center">
              12 ay otomatik yenileme. 30 gün para iade garantisi.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 border-t">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Enterprise Seviyede Güvenlik
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <ShieldCheck className="w-10 h-10 text-blue-900 mx-auto mb-4" />
              <h3 className="font-semibold mb-3">Global Tarayıcı Uyumluluğu</h3>
              <p className="text-slate-600 text-sm">
                Tüm modern tarayıcılar ve cihazlarla %99.99 uyum.
              </p>
            </div>

            <div>
              <ShieldCheck className="w-10 h-10 text-blue-900 mx-auto mb-4" />
              <h3 className="font-semibold mb-3">Yüksek Sigorta Garantisi</h3>
              <p className="text-slate-600 text-sm">
                Olası veri ihlallerine karşı milyon dolarlık koruma.
              </p>
            </div>

            <div>
              <ShieldCheck className="w-10 h-10 text-blue-900 mx-auto mb-4" />
              <h3 className="font-semibold mb-3">Öncelikli Doğrulama</h3>
              <p className="text-slate-600 text-sm">
                Enterprise SLA ile hızlı issuance süreci.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/*import connectDB from "@/lib/db";
import Product from "@/models/Product";
import { notFound } from "next/navigation";
import { ShieldCheck, CheckCircle, Clock } from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  await connectDB();

  const { slug } = params;

  const product: any = await Product.findOne({ slug }).lean();

  if (!product) return notFound();

  return (
    <main className="bg-[#f5f7fa] min-h-screen">
      
      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">{product.name}</h1>

          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            {product.shortDescription}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Ürün Açıklaması</h2>

          <p className="text-slate-600 leading-relaxed mb-12">
            {product.description}
          </p>

          <h3 className="text-xl font-semibold mb-6">Dahil Olan Özellikler</h3>

          <div className="space-y-4">
            {product.features?.map((feature: string, i: number) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-white rounded-2xl shadow-2xl p-10 sticky top-28">
            <h3 className="text-xl font-bold mb-8">Ürünü Yapılandır</h3>

            <div className="text-4xl font-bold text-blue-900 mb-2">
              ₺{product.price?.oneYear}
            </div>

            <div className="text-sm text-slate-500 mb-8">/ yıl</div>

            <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 transition shadow-lg">
              Sepete Ekle
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

/*
import connectDB from "@/lib/db";
import Product from "@/models/Product";
import { notFound } from "next/navigation";
import { ShieldCheck, CheckCircle, Clock } from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  await connectDB();

  const product: any = await Product.findOne({ slug: params.slug }).lean();

  if (!product) return notFound();

  return (
    <main className="bg-[#f5f7fa] min-h-screen">
      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">{product.name}</h1>

          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            {product.shortDescription}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Ürün Açıklaması</h2>

          <p className="text-slate-600 leading-relaxed mb-12">
            {product.description}
          </p>

          <h3 className="text-xl font-semibold mb-6">Dahil Olan Özellikler</h3>

          <div className="space-y-4">
            {product.features?.map((feature: string, i: number) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t pt-12">
            <h3 className="text-xl font-semibold mb-8">Teknik Özellikler</h3>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <ShieldCheck className="w-6 h-6 text-blue-900 mb-4" />
                <div className="text-sm text-slate-500">Garanti</div>
                <div className="font-semibold">{product.specs?.Warranty}</div>
              </div>

              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <ShieldCheck className="w-6 h-6 text-blue-900 mb-4" />
                <div className="text-sm text-slate-500">Şifreleme</div>
                <div className="font-semibold">{product.specs?.Encryption}</div>
              </div>

              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <Clock className="w-6 h-6 text-blue-900 mb-4" />
                <div className="text-sm text-slate-500">Yayın Süresi</div>
                <div className="font-semibold">{product.specs?.Issuance}</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-2xl shadow-2xl p-10 sticky top-28">
            <h3 className="text-xl font-bold mb-8">Ürünü Yapılandır</h3>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Sertifika Süresi
              </label>
              <select className="w-full border rounded-lg p-3">
                <option>1 Yıl</option>
                <option>2 Yıl</option>
                <option>3 Yıl</option>
              </select>
            </div>

            <div className="mb-10">
              <label className="block text-sm font-medium mb-2">
                Domain Sayısı
              </label>
              <input
                type="number"
                defaultValue={1}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div className="text-4xl font-bold text-blue-900 mb-2">
              ₺{product.price.oneYear}
            </div>

            <div className="text-sm text-slate-500 mb-8">/ yıl</div>

            <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 transition shadow-lg">
              Sepete Ekle
            </button>

            <div className="text-xs text-slate-500 mt-6 text-center">
              12 ay otomatik yenileme. 30 gün para iade garantisi.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 border-t">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Enterprise Seviyede Güvenlik
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <ShieldCheck className="w-10 h-10 text-blue-900 mx-auto mb-4" />
              <h3 className="font-semibold mb-3">Global Tarayıcı Uyumluluğu</h3>
              <p className="text-slate-600 text-sm">
                Tüm modern tarayıcılar ve cihazlarla %99.99 uyum.
              </p>
            </div>

            <div>
              <ShieldCheck className="w-10 h-10 text-blue-900 mx-auto mb-4" />
              <h3 className="font-semibold mb-3">Yüksek Sigorta Garantisi</h3>
              <p className="text-slate-600 text-sm">
                Olası veri ihlallerine karşı milyon dolarlık koruma.
              </p>
            </div>

            <div>
              <ShieldCheck className="w-10 h-10 text-blue-900 mx-auto mb-4" />
              <h3 className="font-semibold mb-3">Öncelikli Doğrulama</h3>
              <p className="text-slate-600 text-sm">
                Enterprise SLA ile hızlı issuance süreci.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
*/
