import Link from "next/link"
import {
  Server,
  ShieldCheck,
  PlugZap,
  RefreshCw,
  BadgeCheck,
  Headphones,
  CheckCircle2,
  TrendingUp,
} from "lucide-react"

export default function HostingPartnerPage() {
  return (
    <main className="bg-white min-h-screen text-slate-900">

      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[640px] h-[640px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-[640px] h-[640px] bg-indigo-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="uppercase tracking-widest text-sm text-blue-300 mb-6">
                Hosting Partner Program
              </p>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
                Hosting Müşterilerinize SSL & Güvenliği Tek Panelden Sunun
              </h1>

              <p className="text-blue-100 text-lg leading-relaxed mb-12">
                WHMCS / API entegrasyonu ile otomatik provisioning, yenileme ve
                upsell akışları. Hosting paketlerinize SSL, WAF ve malware taramayı
                ekleyin; müşteri memnuniyetini artırın, gelir yaratın.
              </p>

              <div className="flex gap-6 flex-wrap">
                <Link
                  href="/partners/hosting/apply"
                  className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
                >
                  Hosting Partner Başvurusu
                </Link>

                <Link
                  href="/iletisim"
                  className="border border-white/40 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
                >
                  Entegrasyon Görüşmesi
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 text-center">
              {[
                { value: "WHMCS", label: "Auto Provisioning" },
                { value: "99.9%", label: "SLA Uptime" },
                { value: "24/7", label: "Partner Support" },
                { value: "Up to 40%", label: "Kâr Marjı" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8"
                >
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blue-200 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Kimler İçin?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-10">
                Hosting firmaları, domain kayıt şirketleri ve ajanslar için
                tasarlanmış enterprise partner modeli. Müşterilerinizin SSL ve
                güvenlik ihtiyaçlarını tek bir satış akışında karşılayın.
              </p>

              <div className="space-y-4">
                {[
                  "Hosting paketlerinde SSL upsell",
                  "Panel içinden otomatik kurulum ve yenileme",
                  "White-label satış ve faturalama seçenekleri",
                  "Enterprise SLA ve öncelikli doğrulama",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="text-slate-700">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-6">
                <BadgeCheck className="w-6 h-6 text-blue-900" />
                <h3 className="text-xl font-semibold">
                  Hosting Bundle Önerisi
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 text-sm">
                {[
                  { title: "DV / OV / EV SSL", desc: "HTTPS + güven damgası" },
                  { title: "Wildcard / Multi-Domain", desc: "Ölçeklenebilir sertifika" },
                  { title: "Web Firewall (WAF)", desc: "Uygulama katmanı koruma" },
                  { title: "Malware Tarama", desc: "Sürekli izleme & temizleme" },
                ].map((x) => (
                  <div key={x.title} className="bg-white border rounded-xl p-6">
                    <div className="font-semibold">{x.title}</div>
                    <div className="text-slate-600 mt-1">{x.desc}</div>
                  </div>
                ))}
              </div>

            
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-28 border-y">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">
            Hosting Partner Özellikleri
          </h2>

          <div className="grid md:grid-cols-3 gap-14">
            {[
              {
                icon: PlugZap,
                title: "WHMCS & API Entegrasyonu",
                desc: "Sipariş, kurulum, doğrulama ve yenileme süreçleri otomatik."
              },
              {
                icon: RefreshCw,
                title: "Otomatik Yenileme Akışı",
                desc: "Bitiş uyarıları, fatura ve yenileme akışları standart hale gelir."
              },
              {
                icon: Headphones,
                title: "Öncelikli Teknik Destek",
                desc: "Partner ekibiniz için 24/7 destek ve hızlı escalation."
              },
              {
                icon: ShieldCheck,
                title: "Enterprise Güvenlik Paketleri",
                desc: "SSL + WAF + Malware tarama ile tek paket, daha yüksek ARPU."
              },
              {
                icon: Server,
                title: "Hosting Uyumlu Provisioning",
                desc: "cPanel / Plesk ekosistemine uygun iş akışı ve dokümantasyon."
              },
              {
                icon: TrendingUp,
                title: "Gelir ve Upsell Modeli",
                desc: "Katma değerli güvenlik ürünleriyle marjlarınızı büyütün."
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border rounded-2xl p-10">
                <item.icon className="w-9 h-9 text-blue-900 mb-6" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">
            Nasıl Başlarız?
          </h2>

          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              "Partner Başvurusu",
              "Teknik & Ticari Onboarding",
              "WHMCS/API Kurulum",
              "Canlıya Alma & Satış"
            ].map((step, i) => (
              <div key={i}>
                <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center mx-auto mb-6 font-bold text-lg">
                  {i + 1}
                </div>
                <p className="font-medium text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      <section className="bg-gradient-to-r from-slate-950 to-blue-950 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Hosting Paketlerinizi Güvenlikle Büyütün
          </h2>
          <p className="text-blue-100 mb-10">
            SSL + WAF + Malware tarama ile daha yüksek gelir, daha az churn.
          </p>

          <Link
            href="/iletisim"
            className="bg-white text-blue-900 px-12 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Satış Ekibiyle Görüş →
          </Link>
        </div>
      </section>
    </main>
  )
}
