import Link from "next/link";
import {
  Globe2,
  ShieldCheck,
  CheckCircle,
  Layers,
  Sparkles,
  Crown,
} from "lucide-react";

export default function WildcardSSLPage() {
  return (
    <main className="bg-[#f5f7fa] min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-900 text-white py-28 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur px-4 py-2 rounded-full text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            Sınırsız Subdomain Koruması
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Wildcard SSL Sertifikası
          </h1>

          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            *.domaininiz.com formatındaki tüm alt domainleri tek sertifika ile
            güvence altına alın.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-start">
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Tüm Alt Domainler Tek Sertifikada
          </h2>

          <p className="text-slate-600 mb-10 leading-relaxed">
            blog.domain.com, shop.domain.com, api.domain.com gibi tüm alt alan
            adlarını ayrı ayrı sertifika almadan merkezi ve ekonomik şekilde
            koruyun.
          </p>

          <div className="space-y-5">
            {[
              "Sınırsız subdomain desteği",
              "256-bit güçlü şifreleme",
              "Global tarayıcı uyumluluğu",
              "Tek sertifika ile merkezi yönetim",
              "Hızlı issuance (dakikalar içinde)",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - PRICE CARD */}
        <div className="bg-white rounded-3xl shadow-2xl border p-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-semibold">Wildcard SSL Planı</h3>
            <span className="bg-blue-900 text-white text-xs px-4 py-1 rounded-full font-semibold">
              POPÜLER
            </span>
          </div>

          <div className="text-5xl font-bold text-blue-900 mb-3">₺999</div>

          <div className="text-sm text-slate-500 mb-8">/ yıl</div>

          <div className="border-t border-slate-200 pt-8 space-y-4 mb-10 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Subdomain Limiti</span>
              <span className="font-semibold">Sınırsız</span>
            </div>
            <div className="flex justify-between">
              <span>Garanti</span>
              <span className="font-semibold">$50,000</span>
            </div>
            <div className="flex justify-between">
              <span>Yayınlama</span>
              <span className="font-semibold">10 dakika</span>
            </div>
          </div>

          <Link
            href="/giris"
            className="block w-full text-center bg-blue-900 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 transition shadow-xl"
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
            <Globe2 className="w-10 h-10 text-blue-900 mx-auto mb-4" />
            <h3 className="font-bold mb-3">SaaS Platformları</h3>
            <p className="text-slate-600 text-sm">
              Müşteri alt domain yapılarını güvenle yönetin.
            </p>
          </div>

          <div>
            <Layers className="w-10 h-10 text-blue-900 mx-auto mb-4" />
            <h3 className="font-bold mb-3">Çoklu Servis Yapıları</h3>
            <p className="text-slate-600 text-sm">
              API, dashboard ve uygulama servislerini koruyun.
            </p>
          </div>

          <div>
            <Crown className="w-10 h-10 text-blue-900 mx-auto mb-4" />
            <h3 className="font-bold mb-3">Enterprise Kullanım</h3>
            <p className="text-slate-600 text-sm">
              Ölçeklenebilir ve merkezi SSL yönetimi.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Tüm Alt Domainlerinizi Tek Sertifikada Toplayın
          </h2>

          <p className="text-blue-100 mb-10">
            Operasyonel maliyeti azaltın, güvenliği artırın.
          </p>

          <Link
            href="/iletisim"
            className="bg-white text-blue-900 px-12 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Kurumsal Teklif Al
          </Link>
        </div>
      </section>
    </main>
  );
}
