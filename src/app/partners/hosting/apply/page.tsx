"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function HostingApplyPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    const payload = {
      companyName: formData.get("companyName"),
      email: formData.get("email"),
      website: formData.get("website"),
      message: formData.get("message"),
      type: "hosting",
    }

    try {
      const res = await fetch("/api/partner-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error("Hata")

      setSubmitted(true)
    } catch (err) {
      alert("Başvuru gönderilemedi.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <div className="bg-white p-14 rounded-3xl shadow-2xl text-center max-w-xl">
          <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">
            Başvurunuz Alındı
          </h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Hosting Partner başvurunuz başarıyla iletildi.
            Teknik ekibimiz 24–48 saat içerisinde sizinle iletişime geçecektir.
          </p>

          <Link
            href="/kurumsal/hosting-partner"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Hosting Sayfasına Dön
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-28 px-6 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Hosting Partner Başvuru
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            WHMCS ve hosting altyapınıza SSL & güvenlik çözümlerini entegre
            ederek gelir modelinizi büyütün.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">

          <div className="bg-white p-12 rounded-3xl shadow-xl border">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Partner Bilgileri
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Şirket Adı
                </label>
                <input
                  required
                  name="companyName"
                  type="text"
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-900 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Kurumsal E-posta
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-900 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Web Sitesi
                </label>
                <input
                  name="website"
                  type="text"
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-900 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Altyapı & Beklenti
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-900 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 transition disabled:opacity-50"
              >
                {loading ? "Gönderiliyor..." : "Başvuruyu Gönder"}
              </button>

              <p className="text-xs text-slate-500 text-center">
                Başvurular teknik ekip tarafından manuel değerlendirilir.
              </p>
            </form>
          </div>

        </div>
      </section>

    </main>
  )
}
