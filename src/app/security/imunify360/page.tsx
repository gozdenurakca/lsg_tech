import Link from "next/link";

import { ICONS } from "@/lib/icons";

const {
  shield: ShieldIcon,
  check: CheckIcon,
  server: ServerIcon,
  activity: ActivityIcon,
  lock: LockIcon,
} = ICONS;

export default function Imunify360Page() {
  return (
    <main className="bg-[#f5f7fa] min-h-screen">
      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
            <ShieldIcon className="w-4 h-4" />
            POPÜLER Güvenlik Çözümü
          </div>

          <h1 className="text-5xl font-bold mb-6">
            Imunify360 Sunucu Güvenliği
          </h1>

          <p className="text-blue-100 max-w-3xl mx-auto text-lg">
            Linux sunucular için gelişmiş malware koruma, WAF ve otomatik tehdit
            engelleme sistemi.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Sunucunuzu Proaktif Olarak Koruyun
          </h2>

          <p className="text-slate-600 mb-8 leading-relaxed">
            Imunify360, gerçek zamanlı tehdit algılama, zararlı yazılım
            temizleme ve saldırı önleme sistemi ile sunucularınızı sürekli
            olarak izler ve korur.
          </p>

          <div className="space-y-4">
            {[
              "Gerçek zamanlı malware tarama",
              "Akıllı Web Application Firewall",
              "Brute-force koruması",
              "Otomatik zararlı dosya temizleme",
              "Proaktif saldırı engelleme",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckIcon className="w-5 h-5 text-green-600" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border p-10">
          <h3 className="text-2xl font-bold mb-6">Başlangıç Fiyatı</h3>

          <div className="text-4xl font-bold text-blue-900 mb-2">₺299</div>

          <div className="text-sm text-slate-500 mb-6">/ aylık lisans</div>

          <Link
            href="/giris"
            className="block w-full text-center bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Hemen Satın Al →
          </Link>

          <p className="text-xs text-slate-400 text-center mt-4">
            30 gün para iade garantisi
          </p>
        </div>
      </section>

      <section className="bg-white py-24 border-t">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <ServerIcon className="w-10 h-10 text-blue-900 mx-auto mb-4" />
            <h3 className="font-bold mb-3">Sunucu Seviyesi Koruma</h3>
            <p className="text-slate-600 text-sm">
              Tüm hosting altyapınızı tek noktadan koruyun.
            </p>
          </div>

          <div>
            <ActivityIcon className="w-10 h-10 text-blue-900 mx-auto mb-4" />
            <h3 className="font-bold mb-3">Gerçek Zamanlı İzleme</h3>
            <p className="text-slate-600 text-sm">
              Sürekli tehdit analizi ve otomatik müdahale.
            </p>
          </div>

          <div>
            <LockIcon className="w-10 h-10 text-blue-900 mx-auto mb-4" />
            <h3 className="font-bold mb-3">Akıllı WAF</h3>
            <p className="text-slate-600 text-sm">
              Zararlı trafiği anında filtreler.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Sunucunuzu Bugün Koruma Altına Alın
          </h2>

          <p className="text-blue-100 mb-10">
            Dakikalar içinde kurulum, anında güvenlik.
          </p>

          <Link
            href="/giris"
            className="bg-white text-blue-900 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Lisans Satın Al
          </Link>
        </div>
      </section>
    </main>
  );
}
