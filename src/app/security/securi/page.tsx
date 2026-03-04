import Link from "next/link"
import { Shield, Globe, Activity, Lock, CheckCircle, Server } from "lucide-react"

export default function SecuriPage() {
  return (
    <main className="bg-[#f5f7fa] min-h-screen">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-indigo-950 to-blue-950 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
            <Shield className="w-4 h-4" />
            Web Güvenlik Platformu
          </div>

          <h1 className="text-5xl font-bold mb-6">
            Securi Web Güvenlik Çözümü
          </h1>

          <p className="text-blue-100 max-w-3xl mx-auto text-lg">
            Web sitenizi DDoS saldırılarına, zararlı yazılımlara ve
            güvenlik açıklarına karşı 7/24 koruyun.
          </p>

        </div>
      </section>

      {/* ================= OVERVIEW + PRICE ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Tüm Web Güvenliği Tek Platformda
          </h2>

          <p className="text-slate-600 mb-8 leading-relaxed">
            Securi, gelişmiş Web Application Firewall (WAF), DDoS
            koruması ve malware temizleme sistemi ile sitenizi
            proaktif olarak savunur.
          </p>

          <div className="space-y-4">
            {[
              "Cloud tabanlı WAF koruması",
              "DDoS saldırı engelleme",
              "Otomatik malware temizleme",
              "SSL entegrasyonu",
              "Gerçek zamanlı güvenlik izleme"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PRICE CARD */}
        <div className="bg-white rounded-2xl shadow-xl border p-10">
          <h3 className="text-2xl font-bold mb-6">
            Başlangıç Paketi
          </h3>

          <div className="text-4xl font-bold text-indigo-900 mb-2">
            ₺499
          </div>

          <div className="text-sm text-slate-500 mb-6">
            / aylık
          </div>

          <Link
            href="/giris"
            className="block w-full text-center bg-indigo-900 text-white py-3 rounded-lg font-semibold hover:bg-indigo-800 transition"
          >
            Hemen Satın Al →
          </Link>

          <p className="text-xs text-slate-400 text-center mt-4">
            30 gün para iade garantisi
          </p>
        </div>

      </section>

      {/* ================= FEATURE GRID ================= */}
      <section className="bg-white py-24 border-t">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">

          <div>
            <Globe className="w-10 h-10 text-indigo-900 mx-auto mb-4" />
            <h3 className="font-bold mb-3">Global CDN Güvenliği</h3>
            <p className="text-slate-600 text-sm">
              Dünya genelinde düşük gecikme ile güvenlik.
            </p>
          </div>

          <div>
            <Activity className="w-10 h-10 text-indigo-900 mx-auto mb-4" />
            <h3 className="font-bold mb-3">Gerçek Zamanlı Analiz</h3>
            <p className="text-slate-600 text-sm">
              Anlık tehdit tespiti ve otomatik müdahale.
            </p>
          </div>

          <div>
            <Server className="w-10 h-10 text-indigo-900 mx-auto mb-4" />
            <h3 className="font-bold mb-3">Tam Entegrasyon</h3>
            <p className="text-slate-600 text-sm">
              Hosting ve SSL altyapınızla uyumlu çalışır.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-gradient-to-r from-indigo-950 to-blue-950 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Web Sitenizi Güvenceye Alın
          </h2>

          <p className="text-blue-100 mb-10">
            Saldırıları engelleyin, performansı artırın.
          </p>

          <Link
            href="/giris"
            className="bg-white text-indigo-900 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Koruma Başlat
          </Link>
        </div>
      </section>

    </main>
  )
}
