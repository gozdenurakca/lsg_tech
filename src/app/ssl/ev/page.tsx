import Link from "next/link"
import { Crown, ShieldCheck, CheckCircle, BadgeCheck } from "lucide-react"

export default function EVMarketingPage() {
  return (
    <main className="bg-white">

      <section className="bg-gradient-to-r from-indigo-950 to-blue-950 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
            <Crown className="w-4 h-4" />
            Extended Validation
          </div>

          <h1 className="text-5xl font-bold mb-6">
            EV SSL Sertifikaları
          </h1>

          <p className="text-indigo-100 max-w-3xl mx-auto text-lg mb-12">
            En yüksek güven seviyesi. Bankacılık, finans ve büyük ölçekli
            e-ticaret platformları için maksimum kurumsal itibar.
          </p>

          <Link
            href="/pricing/ssl/ev"
            className="inline-block bg-white text-indigo-900 px-10 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition"
          >
            Enterprise Paketleri Gör
          </Link>

        </div>
      </section>


      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              EV SSL Nedir?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Extended Validation sertifikaları,
              en kapsamlı doğrulama sürecinden geçer.
              Sertifika otoritesi şirketin hukuki, fiziksel ve operasyonel varlığını doğrular.
            </p>

            <div className="space-y-4">
              {[
                "En üst düzey kimlik doğrulama",
                "Yüksek garanti limitleri",
                "Kurumsal prestij",
                "Finans ve kamu uyumlu"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 rounded-3xl p-12 text-center">
            <ShieldCheck className="w-14 h-14 text-indigo-900 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-4">
              Maksimum Marka Güveni
            </h3>
            <p className="text-slate-600 text-sm">
              Ziyaretçiler, sitenizin arkasında doğrulanmış bir
              kurumsal yapı olduğunu görür.
            </p>
          </div>

        </div>
      </section>


      {/* ENTERPRISE DIFFERENCE */}
      <section className="bg-[#f5f7fa] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-16">
            OV ve EV Arasındaki Fark
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-white p-10 rounded-2xl shadow">
              <h3 className="font-bold text-lg mb-4">Organization Validation</h3>
              <p className="text-slate-600 text-sm">
                Alan adı + şirket doğrulaması.
                Kurumsal güven sağlar.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow border-2 border-indigo-900">
              <h3 className="font-bold text-lg mb-4">Extended Validation</h3>
              <p className="text-slate-600 text-sm">
                En kapsamlı doğrulama süreci.
                Maksimum güven ve marka itibarı.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ENTERPRISE FEATURES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">

          <div>
            <BadgeCheck className="w-10 h-10 text-indigo-900 mx-auto mb-4" />
            <h3 className="font-bold mb-3">Yüksek Garanti</h3>
            <p className="text-slate-600 text-sm">
              1M$ – 2M$+ garanti seçenekleri.
            </p>
          </div>

          <div>
            <ShieldCheck className="w-10 h-10 text-indigo-900 mx-auto mb-4" />
            <h3 className="font-bold mb-3">Enterprise SLA</h3>
            <p className="text-slate-600 text-sm">
              Öncelikli doğrulama ve hızlı issuance.
            </p>
          </div>

          <div>
            <Crown className="w-10 h-10 text-indigo-900 mx-auto mb-4" />
            <h3 className="font-bold mb-3">Kurumsal Prestij</h3>
            <p className="text-slate-600 text-sm">
              Finans ve büyük markalar için ideal.
            </p>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-950 to-blue-950 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Maksimum Güven Seviyesine Geçin
          </h2>

          <p className="text-indigo-100 mb-10">
            EV SSL ile markanızı üst segmente taşıyın.
          </p>

          <Link
            href="/pricing/ssl/ev"
            className="bg-white text-indigo-900 px-10 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition"
          >
            Enterprise Fiyatları Gör
          </Link>
        </div>
      </section>

    </main>
  )
}
