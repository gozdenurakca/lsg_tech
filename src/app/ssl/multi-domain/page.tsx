import Link from "next/link"
import {
  Globe2,
  ShieldCheck,
  CheckCircle,
  Layers,
  Building2,
  Crown
} from "lucide-react"

export default function MultiDomainSSLPage() {
  return (
    <main className="bg-[#f5f7fa] min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-blue-950 to-indigo-900 text-white py-28 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur px-4 py-2 rounded-full text-sm mb-8">
            <Layers className="w-4 h-4" />
            SAN (Subject Alternative Name) Destekli
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Multi-Domain SSL Sertifikası
          </h1>

          <p className="text-indigo-100 text-lg max-w-3xl mx-auto">
            Tek bir SSL sertifikası ile birden fazla domaini
            merkezi ve kurumsal seviyede yönetin.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Kurumsal Domain Yönetimi
          </h2>

          <p className="text-slate-600 mb-10 leading-relaxed">
            domain1.com, domain2.com, domain3.com gibi
            farklı alan adlarını tek sertifika altında
            toplayarak operasyonel karmaşıklığı azaltın.
          </p>

          <div className="space-y-5">
            {[
              "250 domain’e kadar destek",
              "Tek merkezden sertifika yönetimi",
              "256-bit güçlü şifreleme",
              "Global tarayıcı uyumluluğu",
              "Enterprise SLA ve öncelikli issuance"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - PREMIUM CARD */}
        <div className="bg-white rounded-3xl shadow-2xl border p-12">

          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-semibold">
              Enterprise Multi-Domain Plan
            </h3>
            <span className="bg-indigo-900 text-white text-xs px-4 py-1 rounded-full font-semibold">
              ÖNERİLEN
            </span>
          </div>

          <div className="text-5xl font-bold text-indigo-900 mb-3">
            ₺3.999
          </div>

          <div className="text-sm text-slate-500 mb-8">
            / yıl
          </div>

          <div className="border-t border-slate-200 pt-8 space-y-4 mb-10 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Domain Limiti</span>
              <span className="font-semibold">250</span>
            </div>
            <div className="flex justify-between">
              <span>Garanti</span>
              <span className="font-semibold">$1.000.000+</span>
            </div>
            <div className="flex justify-between">
              <span>Yayınlama</span>
              <span className="font-semibold">1-3 gün</span>
            </div>
          </div>

          <Link
            href="/giris"
            className="block w-full text-center bg-indigo-900 text-white py-4 rounded-xl font-semibold hover:bg-indigo-800 transition shadow-xl"
          >
            Sepete Ekle →
          </Link>

          <p className="text-xs text-slate-400 mt-6 text-center">
            30 gün para iade garantisi • Otomatik yenileme
          </p>
        </div>

      </section>

      {/* ================= USE CASE ================= */}
      <section className="bg-white py-24 border-t">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-16 text-center">

          <div>
            <Building2 className="w-10 h-10 text-indigo-900 mx-auto mb-4" />
            <h3 className="font-bold mb-3">Holding & Grup Şirketleri</h3>
            <p className="text-slate-600 text-sm">
              Birden fazla markayı tek sertifika ile yönetin.
            </p>
          </div>

          <div>
            <Globe2 className="w-10 h-10 text-indigo-900 mx-auto mb-4" />
            <h3 className="font-bold mb-3">Uluslararası Yapılar</h3>
            <p className="text-slate-600 text-sm">
              Farklı TLD uzantılarını merkezi güvenlikle koruyun.
            </p>
          </div>

          <div>
            <Crown className="w-10 h-10 text-indigo-900 mx-auto mb-4" />
            <h3 className="font-bold mb-3">Enterprise IT</h3>
            <p className="text-slate-600 text-sm">
              Operasyonel maliyetleri azaltın, riskleri minimize edin.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-gradient-to-r from-indigo-950 to-blue-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Çoklu Domainlerinizi Tek Merkezden Yönetin
          </h2>

          <p className="text-indigo-100 mb-10">
            Enterprise seviyede kontrol, güven ve ölçeklenebilirlik.
          </p>

          <Link
            href="/iletisim"
            className="bg-white text-indigo-900 px-12 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition"
          >
            Kurumsal Teklif Al
          </Link>
        </div>
      </section>

    </main>
  )
}
