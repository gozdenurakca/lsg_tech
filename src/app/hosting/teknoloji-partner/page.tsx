'use client'

import Link from "next/link"
import {
  Code2,
  ShieldCheck,
  Cpu,
  Layers,
  BadgeCheck,
  Headphones,
  CheckCircle2,
  GitBranch,
} from "lucide-react"

export default function TechnologyPartnerPage() {
  return (
    <main className="bg-white min-h-screen text-slate-900">

      <section className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[640px] h-[640px] bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-[640px] h-[640px] bg-blue-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="uppercase tracking-widest text-sm text-indigo-300 mb-6">
                Technology Partner Program
              </p>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
                Platformunuza Güvenlik Entegre Edin
              </h1>

              <p className="text-indigo-100 text-lg leading-relaxed mb-12">
                API-first mimari ile SSL, WAF ve güvenlik çözümlerini
                yazılımınıza native olarak entegre edin. Ortak ürün geliştirme,
                teknik destek ve go-to-market iş birliği ile büyüyün.
              </p>

              <div className="flex gap-6 flex-wrap">
                <Link
  href="/partners/technology/apply"
  className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition"
>
  Teknoloji Partner Başvurusu
</Link>


                <Link
                  href="/iletisim"
                  className="border border-white/40 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
                >
                  Teknik Görüşme Planla
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 text-center">
              {[
                { value: "REST API", label: "Full Automation" },
                { value: "Webhook", label: "Real-time Events" },
                { value: "SDK", label: "Developer Tools" },
                { value: "Co-Marketing", label: "Ortak Lansman" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8"
                >
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-indigo-200 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Kimler İçin?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-10">
              SaaS sağlayıcıları, yazılım şirketleri ve dijital platformlar için
              tasarlanmış teknik partner modeli. Güvenliği ürününüzün doğal bir
              parçası haline getirin.
            </p>

            <div className="space-y-4">
              {[
                "SaaS & bulut platformları",
                "E-ticaret altyapı sağlayıcıları",
                "ERP / CRM yazılım firmaları",
                "Fintech & ödeme sistemleri",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border rounded-2xl p-10">
            <div className="flex items-center gap-3 mb-6">
              <BadgeCheck className="w-6 h-6 text-indigo-900" />
              <h3 className="text-xl font-semibold">
                Entegrasyon Modeli
              </h3>
            </div>

            <div className="grid gap-6 text-sm">
              {[
                { title: "RESTful API", desc: "Provisioning & lifecycle yönetimi" },
                { title: "Webhook Desteği", desc: "Gerçek zamanlı durum bildirimleri" },
                { title: "SDK & Dokümantasyon", desc: "Hızlı geliştirme için araçlar" },
                { title: "Test Ortamı", desc: "Sandbox ve staging desteği" },
              ].map((item) => (
                <div key={item.title} className="bg-white border rounded-xl p-6">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-slate-600 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="bg-slate-50 py-28 border-y">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">
            Technology Partner Özellikleri
          </h2>

          <div className="grid md:grid-cols-3 gap-14">
            {[
              {
                icon: Code2,
                title: "API-first Mimari",
                desc: "Tüm ürün lifecycle süreçlerini API üzerinden yönetin."
              },
              {
                icon: Cpu,
                title: "Modüler Güvenlik",
                desc: "SSL, WAF ve Malware taramayı bağımsız veya paket olarak sunun."
              },
              {
                icon: GitBranch,
                title: "Ortak Ürün Geliştirme",
                desc: "Custom entegrasyon ve özel projeler için teknik ekip desteği."
              },
              {
                icon: Layers,
                title: "White-label Opsiyon",
                desc: "Markanıza özel güvenlik çözümleri."
              },
              {
                icon: ShieldCheck,
                title: "Enterprise SLA",
                desc: "Yüksek doğrulama hızı ve öncelikli operasyon desteği."
              },
              {
                icon: Headphones,
                title: "Teknik Partner Ekibi",
                desc: "Developer-to-developer iletişim ve escalation hattı."
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border rounded-2xl p-10">
                <item.icon className="w-9 h-9 text-indigo-900 mb-6" />
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
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-20">
            İş Birliği Süreci
          </h2>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              "Başvuru & Değerlendirme",
              "Teknik Workshop",
              "Sandbox Entegrasyon",
              "Lansman & Co-Marketing"
            ].map((step, i) => (
              <div key={i}>
                <div className="w-16 h-16 rounded-full bg-indigo-900 text-white flex items-center justify-center mx-auto mb-6 font-bold text-lg">
                  {i + 1}
                </div>
                <p className="font-medium text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-950 to-indigo-950 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Platformunuzu Güvenlikle Güçlendirin
          </h2>
          <p className="text-indigo-100 mb-10">
            Güvenlik çözümlerini ürününüzün doğal bir parçası haline getirin.
          </p>

          <Link
            href="/iletisim"
            className="bg-white text-indigo-900 px-12 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition"
          >
            Teknik Ekiple Görüş →
          </Link>
        </div>
      </section>

    </main>
  )
}
