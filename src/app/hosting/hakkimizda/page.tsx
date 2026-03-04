import Link from "next/link"
import {
  ShieldCheck,
  Globe2,
  Users,
  Award,
  Server,
  Lock
} from "lucide-react"

export default function HakkimizdaPage() {
  return (
    <main className="bg-white min-h-screen">

      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.2),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.2),transparent_40%)]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-widest text-blue-300 text-sm mb-6">
            LSG Teknoloji
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Dijital Güvenliğin
            <br />
            Kurumsal Adresi
          </h1>

          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            SSL sertifikaları, web uygulama güvenliği ve
            kurumsal siber güvenlik çözümlerinde
            güvenilir iş ortağınız.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-8">
            Güvenli Altyapılar, Sürdürülebilir Teknoloji
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            LSG Teknoloji, işletmelerin dijital varlıklarını
            korumak için global sertifika otoriteleri ile
            entegre çalışan profesyonel güvenlik çözümleri sunar.
          </p>

          <p className="text-slate-600 leading-relaxed mb-6">
            DigiCert ve Sectigo gibi dünya lideri markalarla
            iş ortaklığı yaparak; güvenilir, ölçeklenebilir ve
            yüksek performanslı SSL altyapıları sağlıyoruz.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Finans, e-ticaret, SaaS ve kurumsal IT altyapılarında
            binlerce aktif sertifika yönetimi ile
            operasyonel sürekliliği garanti ediyoruz.
          </p>
        </div>

        <div className="bg-slate-50 rounded-3xl p-12 border border-slate-200 shadow-sm">
          <div className="space-y-10">

            <div className="flex items-start gap-5">
              <ShieldCheck className="w-8 h-8 text-blue-900" />
              <div>
                <h3 className="font-semibold text-lg">
                  10.000+ Aktif Sertifika
                </h3>
                <p className="text-slate-500 text-sm">
                  Türkiye genelinde aktif kurumsal güvenlik yönetimi
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <Server className="w-8 h-8 text-blue-900" />
              <div>
                <h3 className="font-semibold text-lg">
                  Enterprise SLA
                </h3>
                <p className="text-slate-500 text-sm">
                  Öncelikli doğrulama ve hızlı sertifika issuance
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <Globe2 className="w-8 h-8 text-blue-900" />
              <div>
                <h3 className="font-semibold text-lg">
                  Global Uyumluluk
                </h3>
                <p className="text-slate-500 text-sm">
                  Tüm modern tarayıcılar ve platformlar ile tam uyum
                </p>
              </div>
            </div>

          </div>
        </div>

      </section>

      <section className="bg-slate-50 py-28 border-t">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-16">
            Temel Değerlerimiz
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="bg-white p-10 rounded-2xl border shadow-sm">
              <Lock className="w-8 h-8 text-blue-900 mx-auto mb-6" />
              <h3 className="font-semibold mb-4">Güven</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sertifika yönetiminden WAF çözümlerine kadar
                her aşamada maksimum güvenlik yaklaşımı.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl border shadow-sm">
              <Users className="w-8 h-8 text-blue-900 mx-auto mb-6" />
              <h3 className="font-semibold mb-4">Uzmanlık</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Kurumsal IT altyapılarında deneyimli teknik ekip.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl border shadow-sm">
              <Award className="w-8 h-8 text-blue-900 mx-auto mb-6" />
              <h3 className="font-semibold mb-4">Sürdürülebilirlik</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Uzun vadeli, ölçeklenebilir güvenlik mimarileri.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Kurumsal Güvenlik Çözümünüz Hazır
          </h2>

          <p className="text-slate-300 mb-10">
            Dijital altyapınızı bir üst seviyeye taşımak için bizimle iletişime geçin.
          </p>

          <Link
            href="/iletisim"
            className="inline-block bg-white text-blue-900 px-12 py-4 rounded-xl font-semibold hover:bg-blue-50 transition shadow-xl"
          >
            İletişime Geç →
          </Link>
        </div>
      </section>

    </main>
  )
}
