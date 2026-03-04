'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { getSession } from 'next-auth/react'



type Tab = 'bireysel' | 'bayi'

export default function GirisPage() {
  const router = useRouter()

  const [tab, setTab] = useState<Tab>('bireysel')
  const [showPass, setShowPass] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    email: '',
    password: '',
    bayiKodu: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsLoading(true)
  setError('')

  const result = await signIn('credentials', {
    email: form.email,
    password: form.password,
    redirect: false,
  })

  if (result?.error) {
    setIsLoading(false)
    setError(result.error)
    return
  }

  const session = await getSession()

  setIsLoading(false)

  if (session?.user?.role === 'admin') {
    router.push('/admin')
  } else {
    router.push('/panel')
  }
}




  return (
    <div className="flex min-h-[calc(100vh-80px)] bg-gray-50">

      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-[#060f1e] via-[#0a1a35] to-[#0f2550] p-16 flex-col justify-center
">

        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(148,189,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(148,189,255,.2)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-4 py-1 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-blue-200 text-xs font-medium">
              Güvenli Bağlantı Aktif
            </span>
          </div>

          <h1 className="text-4xl font-extrabold text-white leading-tight mb-4">
            Dijital Güvenliğin <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Merkezi
            </span>
          </h1>

          <p className="text-blue-200/70 text-sm max-w-md mb-10">
            SSL sertifikalarınızı yönetin, siparişlerinizi takip edin ve
            güvenlik çözümlerinize tek noktadan erişin.
          </p>
        </div>

        <div className="relative z-10 flex gap-10 text-white text-sm">
          <div>
            <div className="font-bold text-lg">10K+</div>
            <div className="text-blue-200/60 text-xs">Aktif Sertifika</div>
          </div>
          <div>
            <div className="font-bold text-lg">99.9%</div>
            <div className="text-blue-200/60 text-xs">Uptime</div>
          </div>
          <div>
            <div className="font-bold text-lg">24/7</div>
            <div className="text-blue-200/60 text-xs">Destek</div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">
              Hoş Geldiniz
            </h2>
            <p className="text-sm text-slate-500">
              Hesabınıza erişmek için giriş yapın
            </p>
          </div>

          <div className="flex bg-slate-200 rounded-xl p-1 mb-6">
            {['bireysel', 'bayi'].map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTab(t as Tab)
                  setError('')
                }}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition ${
                  tab === t
                    ? 'bg-white shadow text-blue-600'
                    : 'text-slate-500'
                }`}
              >
                {t === 'bireysel' ? '👤 Bireysel' : '🏢 Bayi'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {tab === 'bayi' && (
              <input
                name="bayiKodu"
                value={form.bayiKodu}
                onChange={handleChange}
                placeholder="Bayi Kodu"
                required
                className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
              />
            )}

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E-posta"
              required
              className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <div className="relative">
              <input
                type={showPass ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Şifre"
                required
                className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-3 text-slate-400 text-sm"
              >
                {showPass ? 'Gizle' : 'Göster'}
              </button>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-lg font-semibold text-white transition ${
                tab === 'bayi'
                  ? 'bg-purple-600 hover:bg-purple-700'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-500">
            Hesabınız yok mu?{' '}
            <a href="/kayit" className="text-blue-600 font-semibold">
              Ücretsiz Kayıt Olun
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
