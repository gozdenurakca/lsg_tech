import Link from "next/link";
import { ICONS } from "@/lib/icons";

const {
  shield: ShieldIcon,
  server: ServerIcon,
  lock: LockIcon,
  activity: ActivityIcon,
  check: CheckIcon,
} = ICONS;

export default function WebFirewallPage() {
  return (
    <main className="bg-[#f5f7fa] min-h-screen">
      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
            <ShieldIcon className="w-4 h-4" />
            Web Application Firewall
          </div>

          <h1 className="text-5xl font-bold mb-6">
            Web Firewall (WAF) Koruması
          </h1>

          <p className="text-blue-100 max-w-3xl mx-auto text-lg">
            SQL Injection, XSS ve bot saldırılarına karşı gelişmiş uygulama
            katmanı güvenliği.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Gelişmiş Uygulama Katmanı Güvenliği
          </h2>

          <p className="text-slate-600 mb-8 leading-relaxed">
            Web Firewall çözümümüz, uygulama seviyesinde gelen zararlı trafiği
            analiz eder ve otomatik olarak engeller. Hem performans hem güvenlik
            sağlar.
          </p>

          <div className="space-y-4">
            {[
              "OWASP Top 10 saldırı koruması",
              "Bot ve brute-force engelleme",
              "IP reputation filtreleme",
              "Gerçek zamanlı trafik analizi",
              "CDN uyumlu güvenlik",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckIcon className="w-5 h-5 text-green-600" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border p-10">
          <h3 className="text-2xl font-bold mb-6">Business Plan</h3>

          <div className="text-4xl font-bold text-blue-900 mb-2">₺399</div>

          <div className="text-sm text-slate-500 mb-6">/ aylık</div>

          <Link
            href="/giris"
            className="block w-full text-center bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Hemen Aktif Et →
          </Link>

          <p className="text-xs text-slate-400 text-center mt-4">
            7/24 aktif koruma • SLA destekli
          </p>
        </div>
      </section>

      <section className="bg-white py-24 border-t">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <LockIcon className="w-10 h-10 text-blue-900 mx-auto mb-4" />
            <h3 className="font-bold mb-3">Zero-Day Koruma</h3>
            <p className="text-slate-600 text-sm">
              Yeni ortaya çıkan tehditlere karşı anlık savunma.
            </p>
          </div>

          <div>
            <ActivityIcon className="w-10 h-10 text-blue-900 mx-auto mb-4" />
            <h3 className="font-bold mb-3">Anomali Tespiti</h3>
            <p className="text-slate-600 text-sm">
              Şüpheli davranışları otomatik algılama.
            </p>
          </div>

          <div>
            <ServerIcon className="w-10 h-10 text-blue-900 mx-auto mb-4" />
            <h3 className="font-bold mb-3">Enterprise SLA</h3>
            <p className="text-slate-600 text-sm">
              Öncelikli müdahale ve teknik destek.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Sitenizi Anında Koruma Altına Alın
          </h2>

          <p className="text-blue-100 mb-10">
            WAF ile saldırılara karşı güçlü bir savunma hattı kurun.
          </p>

          <Link
            href="/giris"
            className="bg-white text-blue-900 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Güvenliği Başlat
          </Link>
        </div>
      </section>
    </main>
  );
}
