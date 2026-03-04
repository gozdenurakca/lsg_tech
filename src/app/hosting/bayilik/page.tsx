import Link from "next/link"
import {
  ShieldCheck,
  TrendingUp,
  Users,
  Globe,
  CheckCircle,
  BadgeCheck
} from "lucide-react"

export default function BayilikPage() {
  return (
    <main className="bg-white min-h-screen text-slate-900">

      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="uppercase tracking-widest text-sm text-blue-300 mb-6">
                Global Partner Network
              </p>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
                LSG  Bayilik Programı
              </h1>

              <p className="text-blue-100 text-lg leading-relaxed mb-12">
                SSL ve siber güvenlik çözümlerimizi kendi markanızla sunarak
                sürdürülebilir ve ölçeklenebilir bir gelir modeli oluşturun.
                Enterprise altyapı, teknik destek ve kurumsal SLA garantisi.
              </p>

              <div className="flex gap-6 flex-wrap">
                <Link
                  href="/partners/bayi/apply"

                  className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
                >
                  Bayilik Başvurusu
                </Link>

                <Link
                  href="/iletisim"
                  className="border border-white/40 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
                >
                  Satış Ekibiyle Görüş
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 text-center">

              {[
                { value: "150+", label: "Aktif Partner" },
                { value: "99.9%", label: "SLA Uptime" },
                { value: "40%", label: "Max. Kâr Marjı" },
                { value: "24/7", label: "Partner Destek" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8"
                >
                  <div className="text-3xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-200 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-20">
Bayilikte Sizi Öne Çıkaran Faktörler          </h2>

          <div className="grid md:grid-cols-3 gap-16">

            {[
              {
                icon: TrendingUp,
                title: "Yüksek Gelir Potansiyeli",
                desc: "Kademeli indirim yapısı ile sürdürülebilir ve öngörülebilir gelir modeli."
              },
              {
                icon: ShieldCheck,
                title: "White-Label & API",
                desc: "WHMCS ve özel API entegrasyonu ile kendi markanız altında satış."
              },
              {
                icon: Users,
                title: "Dedicated Partner Manager",
                desc: "Özel hesap yöneticisi ve öncelikli teknik destek."
              }
            ].map((item, i) => (
              <div key={i}>
                <item.icon className="w-10 h-10 text-blue-900 mb-6" />
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      <section className="bg-slate-50 py-28 border-y">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-20">
            Bayilik Süreci
          </h2>

          <div className="grid md:grid-cols-4 gap-12 text-center">

            {[
              "Başvuru & Ön Değerlendirme",
              "Sözleşme & Onboarding",
              "API / WHMCS Entegrasyonu",
              "Aktif Satış & Ölçekleme"
            ].map((step, i) => (
              <div key={i}>
                <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center mx-auto mb-6 font-bold text-lg">
                  {i + 1}
                </div>
                <p className="font-medium text-slate-700">
                  {step}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-20">
            Bayilik Seviyeleri
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              { name: "Silver", discount: "%20" },
              { name: "Gold", discount: "%30" },
              { name: "Platinum", discount: "%40" }
            ].map((tier, i) => (
              <div
                key={i}
                className="border rounded-2xl p-12 text-center hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {tier.name}
                </h3>

                <div className="text-4xl font-bold text-blue-900 mb-6">
                  {tier.discount}
                </div>

                <div className="space-y-3 text-sm text-slate-600 mb-8">
                  <div className="flex justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    SSL Ürün Erişimi
                  </div>
                  <div className="flex justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Teknik Dokümantasyon
                  </div>
                  <div className="flex justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Partner Paneli
                  </div>
                </div>

                <Link
                  href="/partners/bayi/apply"
                  className="block bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                >
                  Başvur
                </Link>
              </div>
            ))}

          </div>
        </div>
      </section>
    </main>
  )
}
