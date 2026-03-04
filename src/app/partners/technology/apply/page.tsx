'use client'

import { useState } from "react"
import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function TechnologyPartnerApplyPage() {

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setLoading(true)

  const formData = new FormData(e.currentTarget)

  const data = {
    companyName: formData.get("companyName"),
    email: formData.get("email"),
    website: formData.get("website"),
    monthlyUsers: formData.get("monthlyUsers"),
    message: formData.get("message"),
  }

  try {
    const res = await fetch("/api/partner-application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      throw new Error("Submit failed")
    }

    setSubmitted(true)

  } catch (error) {
    console.error(error)
    alert("Bir hata oluştu. Lütfen tekrar deneyin.")
  } finally {
    setLoading(false)
  }
}


  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-indigo-950 p-6">
        <div className="bg-white p-14 rounded-3xl shadow-2xl text-center max-w-xl">
          <CheckCircle2 className="w-20 h-20 text-emerald-600 mx-auto mb-8" />

          <h1 className="text-4xl font-bold mb-6">
            Başvurunuz Alındı
          </h1>

          <p className="text-slate-600 leading-relaxed mb-10">
            Technology Partner başvurunuz başarıyla iletildi.
            Partner ekibimiz 24–48 saat içinde sizinle iletişime geçecektir.
          </p>

          <Link
            href="/kurumsal/teknoloji-partner"
            className="inline-block bg-indigo-900 text-white px-10 py-4 rounded-xl font-semibold hover:bg-indigo-800 transition"
          >
            Partner Sayfasına Dön
          </Link>
        </div>
      </main>
    )
  }

  return (
    
    <main className="min-h-screen bg-white pt-20">

      {/* HEADER */}
      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Technology Partner Başvuru
          </h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
            API entegrasyonu ve ortak ürün geliştirme için başvurunuzu gönderin.
          </p>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
                        Teknik ekibimiz sizinle iletişime geçecektir.

          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-14">

          {/* SOL BİLGİ BLOĞU */}
          <div className="lg:col-span-1 space-y-10">

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Süreç
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>• Başvuru değerlendirmesi</li>
                <li>• Teknik workshop</li>
                <li>• Sandbox erişimi</li>
                <li>• Lansman & iş birliği</li>
              </ul>
            </div>

            <div className="bg-slate-50 border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-indigo-900" />
                <span className="font-semibold text-sm">
                  Güvenlik Notu
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Başvuru bilgileriniz güvenli şekilde saklanır ve yalnızca
                partner değerlendirme sürecinde kullanılır.
              </p>
            </div>

          </div>

          {/* FORM */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white border rounded-3xl shadow-xl p-12 space-y-8"
            >

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="companyName"
                  required
                  type="text"
                  placeholder="Şirket Adı"
                  className="w-full border rounded-xl px-5 py-4 focus:ring-2 focus:ring-indigo-600 outline-none"
                />

                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Kurumsal E-posta"
                  className="w-full border rounded-xl px-5 py-4 focus:ring-2 focus:ring-indigo-600 outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="website"
                  type="text"
                  placeholder="Web Sitesi"
                  className="w-full border rounded-xl px-5 py-4 focus:ring-2 focus:ring-indigo-600 outline-none"
                />

                <input
                  name="monthlyUsers"
                  type="text"
                  placeholder="Aylık aktif kullanıcı sayısı"
                  className="w-full border rounded-xl px-5 py-4 focus:ring-2 focus:ring-indigo-600 outline-none"
                />
              </div>

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Platformunuz, mevcut altyapınız ve entegrasyon beklentiniz"
                className="w-full border rounded-xl px-5 py-4 focus:ring-2 focus:ring-indigo-600 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-900 text-white py-5 rounded-xl font-semibold hover:bg-indigo-800 transition flex items-center justify-center gap-3 disabled:opacity-60"
              >
                {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                {loading ? "Gönderiliyor..." : "Başvuruyu Gönder"}
              </button>

              <p className="text-xs text-slate-400 text-center">
                Başvurunuz 24–48 saat içinde değerlendirilir.
              </p>

            </form>
          </div>

        </div>
      </section>

    </main>
  )
}
