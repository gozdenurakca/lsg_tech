import Link from "next/link"
import { Building2, ShieldCheck, CheckCircle } from "lucide-react"

export default function OVMarketingPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
            <Building2 className="w-4 h-4" />
            Organization Validation
          </div>

          <h1 className="text-5xl font-bold mb-6">
            OV SSL Sertifikaları
          </h1>

          <p className="text-blue-100 max-w-3xl mx-auto text-lg mb-12">
            Şirket doğrulaması ile kurumsal güven sağlayın.
            E-ticaret ve şirket web siteleri için ideal çözümdür.
          </p>

          <Link
            href="/pricing/ssl/ov"
            className="inline-block bg-white text-blue-900 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Paketleri Gör
          </Link>

        </div>
      </section>


      {/* WHAT IS OV */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              OV SSL Nedir?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Organization Validation SSL sertifikaları,
              sertifika otoritesi tarafından şirket bilgilerinin doğrulanmasıyla verilir.
              Bu sayede ziyaretçiler işletmenizin gerçek ve doğrulanmış olduğunu görür.
            </p>

            <div className="space-y-4">
              {[
                "Şirket doğrulaması",
                "256-bit güçlü şifreleme",
                "Kurumsal güven algısı",
                "E-ticaret uyumlu"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 rounded-3xl p-12 text-center">
            <ShieldCheck className="w-14 h-14 text-blue-900 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-4">
              Kimler İçin Uygun?
            </h3>
            <p className="text-slate-600 text-sm">
              E-ticaret siteleri, şirket web siteleri,
              müşteri verisi toplayan platformlar.
            </p>
          </div>

        </div>
      </section>


      {/* DIFFERENCE BLOCK */}
      <section className="bg-[#f5f7fa] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-16">
            DV ve OV Arasındaki Fark
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-white p-10 rounded-2xl shadow">
              <h3 className="font-bold text-lg mb-4">Domain Validation</h3>
              <p className="text-slate-600 text-sm">
                Sadece alan adı sahipliği doğrulanır.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow border-2 border-blue-900">
              <h3 className="font-bold text-lg mb-4">Organization Validation</h3>
              <p className="text-slate-600 text-sm">
                Alan adı + şirket kimliği doğrulanır.
                Kurumsal güven seviyesi daha yüksektir.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Kurumsal Güveninizi Artırın
          </h2>

          <p className="text-blue-100 mb-10">
            OV SSL ile müşterilerinize güven verin.
          </p>

          <Link
            href="/pricing/ssl/ov"
            className="bg-white text-blue-900 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Fiyatları Gör
          </Link>
        </div>
      </section>

    </main>
  )
}
