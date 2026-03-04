import Link from "next/link"
import { Shield, Zap, CheckCircle } from "lucide-react"

export default function DVMarketingPage() {
  return (
    <main className="bg-white">

      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
            <Zap className="w-4 h-4" />
            Domain Validation
          </div>

          <h1 className="text-5xl font-bold mb-6">
            DV SSL Sertifikaları
          </h1>

          <p className="text-blue-100 max-w-3xl mx-auto text-lg mb-12">
            Dakikalar içinde aktif olan HTTPS koruması.
            Bloglar, kişisel siteler ve küçük işletmeler için ideal çözüm.
          </p>

          <Link
            href="/pricing/ssl/dv"
            className="inline-block bg-white text-blue-900 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Paketleri Gör
          </Link>

        </div>
      </section>


      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              DV SSL Nedir?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Domain Validation SSL sertifikaları yalnızca alan adının
              sahipliğini doğrular. En hızlı ve en ekonomik SSL türüdür.
            </p>

            <div className="space-y-4">
              {[
                "5–10 dakika içinde issuance",
                "256-bit güçlü şifreleme",
                "Tüm modern tarayıcılarla uyumlu",
                "SEO avantajı"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 rounded-3xl p-12 text-center">
            <Shield className="w-14 h-14 text-blue-900 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-4">
              Kimler İçin Uygun?
            </h3>
            <p className="text-slate-600 text-sm">
              Blog siteleri, startup landing page’leri,
              küçük işletme web siteleri.
            </p>
          </div>

        </div>
      </section>


      <section className="bg-[#f5f7fa] py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Hızlı Başlayın
          </h2>

          <p className="text-slate-600 mb-10">
            DV SSL ile sitenizi dakikalar içinde HTTPS’e taşıyın.
          </p>

          <Link
            href="/pricing/ssl/dv"
            className="bg-blue-900 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Fiyatları Gör
          </Link>
        </div>
      </section>

    </main>
  )
}
