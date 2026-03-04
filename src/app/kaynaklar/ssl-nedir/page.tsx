'use client'

import Link from 'next/link'
import {
  ShieldCheck,
  Lock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Globe,
} from 'lucide-react'

export default function SslNedirPage() {
  return (
    <div className="font-inter text-slate-800">

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-slate-500">
        <Link href="/" className="text-blue-600 hover:underline">Ana Sayfa</Link> /
        <Link href="/kaynaklar" className="ml-1 text-blue-600 hover:underline">Kaynaklar</Link> /
        <span className="ml-1 text-slate-700 font-medium">SSL Nedir?</span>
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-600 text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            SSL Sertifikası Nedir?
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Web sitenizi şifreleyin, ziyaretçilerinize güven verin ve arama motoru sıralamalarında avantaj elde edin.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-16">

        {/* SSL Tanım */}
        <div>
          <p className="text-lg leading-8 text-slate-600">
            <strong>SSL (Secure Sockets Layer)</strong>, web sitesi ile ziyaretçi
            arasında şifreli bir bağlantı kuran güvenlik protokolüdür.
            Hassas verilerin (şifre, kredi kartı, kişisel bilgiler)
            üçüncü kişiler tarafından okunmasını engeller.
          </p>

          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-lg">Basit Tanım</h3>
            </div>
            <p className="text-slate-600 leading-7">
              SSL, siteniz ile kullanıcı arasındaki verileri şifreler.
              HTTP’yi HTTPS’e dönüştürür ve adres çubuğunda kilit simgesi görünmesini sağlar.
            </p>
          </div>
        </div>

        {/* Nasıl Çalışır */}
        <div>
          <h2 className="text-3xl font-bold mb-6">SSL Nasıl Çalışır?</h2>

          <ol className="space-y-4 text-slate-600 leading-7">
            <li><strong>1. El Sıkışma:</strong> Tarayıcı sertifika talep eder.</li>
            <li><strong>2. Doğrulama:</strong> Sertifikanın yetkili bir otorite tarafından verildiği kontrol edilir.</li>
            <li><strong>3. Şifreleme:</strong> Güvenli anahtar değişimi yapılır.</li>
            <li><strong>4. Güvenli İletişim:</strong> Tüm veri 256-bit şifreleme ile korunur.</li>
          </ol>
        </div>

        {/* Faydalar */}
        <div>
          <h2 className="text-3xl font-bold mb-10">SSL'in Faydaları</h2>

          <div className="grid md:grid-cols-2 gap-8">

            <FeatureCard
              icon={<ShieldCheck />}
              title="Veri Güvenliği"
              desc="Hassas bilgileriniz 256-bit şifreleme ile korunur."
            />

            <FeatureCard
              icon={<CheckCircle2 />}
              title="Müşteri Güveni"
              desc="Kilit simgesi ile ziyaretçilerinize profesyonel güven sunarsınız."
            />

            <FeatureCard
              icon={<TrendingUp />}
              title="SEO Avantajı"
              desc="Google HTTPS sitelerini sıralamada öne çıkarır."
            />

            <FeatureCard
              icon={<Globe />}
              title="Regülasyon Uyumu"
              desc="PCI-DSS ve KVKK gibi gereklilikleri karşılamaya yardımcı olur."
            />
          </div>
        </div>

        {/* SSL Olmazsa */}
        <div>
          <h2 className="text-3xl font-bold mb-6">SSL Olmadan Ne Olur?</h2>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4 text-red-700">
              <AlertTriangle className="w-6 h-6" />
              <h3 className="font-semibold">Riskler</h3>
            </div>

            <ul className="space-y-2 text-red-700 text-sm">
              <li>• Tarayıcıda “Güvenli Değil” uyarısı görünür</li>
              <li>• Ziyaretçi kaybı yaşarsınız</li>
              <li>• SEO sıralamanız düşer</li>
              <li>• E-ticaret siteleri ödeme alamaz</li>
            </ul>
          </div>
        </div>

        {/* HTTP vs HTTPS */}
        <div>
          <h2 className="text-3xl font-bold mb-6">HTTP vs HTTPS</h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 text-left">Özellik</th>
                  <th className="p-4 text-left">HTTP</th>
                  <th className="p-4 text-left">HTTPS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Şifreleme', 'Yok', '256-bit'],
                  ['Güvenlik', 'Düşük', 'Yüksek'],
                  ['SEO', 'Dezavantaj', 'Avantaj'],
                  ['E-Ticaret', 'Uygun Değil', 'Zorunlu'],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="p-4 font-medium">{row[0]}</td>
                    <td className="p-4 text-slate-500">{row[1]}</td>
                    <td className="p-4 text-slate-600 font-semibold">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sitenizi Bugün Güvence Altına Alın
          </h2>
          <p className="mb-8 opacity-90">
            5 dakikada kurulum, anında aktivasyon.
          </p>

          <Link
            href="/ssl/dv-ssl"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow hover:shadow-lg transition"
          >
            SSL Sertifikası Satın Al
          </Link>
        </div>

      </section>
    </div>
  )
}

function FeatureCard({ icon, title, desc }: any) {
  return (
    <div className="border border-slate-200 rounded-xl p-6 hover:shadow-xl transition">
      <div className="text-blue-600 mb-4 w-8 h-8">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-6">{desc}</p>
    </div>
  )
}
