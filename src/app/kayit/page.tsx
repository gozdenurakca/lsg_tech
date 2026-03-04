'use client'

import { useState } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

type AccountType = 'bireysel' | 'kurumsal'

export default function KayitPage() {
  const [accountType, setAccountType] = useState<AccountType>('bireysel')
  const [showPass, setShowPass] = useState(false)
  const [showPassConfirm, setShowPassConfirm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    // Kişisel bilgiler
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    // Organizasyon bilgileri
    companyName: '',
    companyPhone: '',
    country: 'TR',
    postalCode: '',
    address: '',
    addressLine2: '',
    city: '',
    state: '',
    // Hesap bilgileri
    username: '',
    password: '',
    passwordConfirm: '',
    securityQuestion: '',
    securityAnswer: '',
    currency: 'TRY',
    // vatNumber: '', // şimdilik opsiyonel
    // Onaylar
    terms: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const val =
      e.target.type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : e.target.value

    setForm(prev => ({ ...prev, [e.target.name]: val }))
    setError('')
  }

  const validate = () => {
    if (!form.firstName || !form.lastName || !form.email || !form.phone) {
      return 'Lütfen kişisel bilgileri eksiksiz doldurun.'
    }

    if (!form.companyName || !form.companyPhone || !form.country || !form.address || !form.city) {
      return 'Lütfen organizasyon bilgilerini eksiksiz doldurun.'
    }

    if (!form.username) return 'Kullanıcı adı zorunludur.'
    if (form.password.length < 8) return 'Şifre en az 8 karakter olmalıdır.'
    if (form.password !== form.passwordConfirm) return 'Şifreler eşleşmiyor.'
    if (!form.securityQuestion || !form.securityAnswer) return 'Güvenlik sorusu ve cevabı zorunludur.'
    if (!form.terms) return 'Kullanım şartlarını kabul etmelisiniz.'

    return ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const err = validate()
    if (err) {
      setError(err)
      return
    }

    setIsLoading(true)
    setError('')

    try {
      // 1) REGISTER (DB)
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accountType,
          firstName: form.firstName,
          lastName: form.lastName,
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: form.phone,
          jobTitle: form.jobTitle,

          companyName: form.companyName,
          companyPhone: form.companyPhone,
          country: form.country,
          postalCode: form.postalCode,
          address: form.address,
          addressLine2: form.addressLine2,
          city: form.city,
          state: form.state,

          username: form.username,
          password: form.password,

          securityQuestion: form.securityQuestion,
          securityAnswer: form.securityAnswer,

          currency: form.currency,

          role: 'customer',
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data?.message || 'Kayıt sırasında hata oluştu.')
        return
      }

      // 2) AUTO LOGIN (NextAuth Credentials)
      const login = await signIn('credentials', {
        email: form.email,
        password: form.password,
        redirect: false,
      })

      if (login?.error) {
        setError('Kayıt yapıldı ama giriş başarısız. Lütfen giriş yapmayı deneyin.')
        return
      }

      // 3) Redirect
      window.location.href = '/panel'
    } catch (e) {
      setError('Bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setIsLoading(false)
    }
  }

  const countries = [
    { code: 'TR', name: 'Türkiye' },
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'DE', name: 'Germany' },
  ]

  const currencies = [
    { code: 'TRY', symbol: '₺', name: 'Türk Lirası' },
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
  ]

  const securityQuestions = [
    'Annenizin kızlık soyadı nedir?',
    'İlk evcil hayvanınızın adı nedir?',
    'Doğduğunuz şehir neresidir?',
    'En sevdiğiniz öğretmeninizin adı nedir?',
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        .reg-root { font-family: 'Inter', sans-serif; }
        .reg-input { 
          width: 100%; padding: 10px 12px; border: 1.5px solid #d1d5db; 
          border-radius: 6px; font-size: 14px; color: #111827; 
          transition: all .2s; outline: none; box-sizing: border-box;
          background: #fff;
        }
        .reg-input:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,.1); }
        .reg-label { display: block; font-size: 13px; font-weight: 500; color: #374151; margin-bottom: 6px; }
        .reg-section { background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; margin-bottom: 20px; }
        .reg-section-title { font-size: 16px; font-weight: 600; color: #111827; margin-bottom: 4px; }
        .reg-section-desc { font-size: 13px; color: #6b7280; margin-bottom: 20px; }
        .reg-btn { 
          padding: 11px 24px; border-radius: 6px; font-weight: 600; 
          font-size: 14px; cursor: pointer; transition: all .2s; border: none;
        }
        .reg-btn-primary {
          background: #2563eb; color: white; box-shadow: 0 1px 3px rgba(0,0,0,.1);
        }
        .reg-btn-primary:hover:not(:disabled) { background: #1d4ed8; box-shadow: 0 4px 12px rgba(37,99,235,.3); }
        .reg-btn-primary:disabled { opacity: .6; cursor: not-allowed; }
        .reg-btn-secondary {
          background: white; color: #374151; border: 1.5px solid #d1d5db;
        }
        .reg-btn-secondary:hover { background: #f9fafb; }
        .spinner { 
          width: 16px; height: 16px; border: 2px solid rgba(255,255,255,.3); 
          border-top-color: white; border-radius: 50%; 
          animation: spin .7s linear infinite; 
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .reg-check {
          width: 16px; height: 16px; border: 1.5px solid #d1d5db; border-radius: 4px;
          cursor: pointer; transition: all .2s; flex-shrink: 0; appearance: none;
          background: #fff;
        }
        .reg-check:checked {
          background: #2563eb; border-color: #2563eb;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E");
        }
      `}</style>

      <div className="reg-root" style={{ minHeight: '100vh', background: '#f9fafb' }}>

        {/* Header */}
        <div style={{ background: '#1f2937', borderBottom: '1px solid #374151', padding: '16px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg, #2563eb, #3b82f6)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 18, fontWeight: 700 }}>L</div>
              <div>
                <div style={{ color: 'white', fontWeight: 600, fontSize: 16 }}>LSG Teknoloji</div>
                <div style={{ color: '#9ca3af', fontSize: 12 }}>SSL Sertifika Yönetimi</div>
              </div>
            </div>
            <Link href="/giris" style={{ color: '#60a5fa', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>
              Zaten hesabınız var mı? Giriş yapın
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 24px 60px' }}>

          {/* Account Type Switcher */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
            <button
              type="button"
              onClick={() => setAccountType('bireysel')}
              style={{
                flex: 1, padding: '12px 20px', borderRadius: 8,
                border: accountType === 'bireysel' ? '2px solid #2563eb' : '1.5px solid #d1d5db',
                background: accountType === 'bireysel' ? '#eff6ff' : 'white',
                color: accountType === 'bireysel' ? '#1e40af' : '#6b7280',
                fontWeight: 600, fontSize: 14, cursor: 'pointer',
                transition: 'all .2s',
              }}
            >
              👤 Bireysel Hesap
            </button>
            <button
              type="button"
              onClick={() => setAccountType('kurumsal')}
              style={{
                flex: 1, padding: '12px 20px', borderRadius: 8,
                border: accountType === 'kurumsal' ? '2px solid #2563eb' : '1.5px solid #d1d5db',
                background: accountType === 'kurumsal' ? '#eff6ff' : 'white',
                color: accountType === 'kurumsal' ? '#1e40af' : '#6b7280',
                fontWeight: 600, fontSize: 14, cursor: 'pointer',
                transition: 'all .2s',
              }}
            >
              🏢 Kurumsal Hesap
            </button>
          </div>

          {error && (
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '12px 16px', marginBottom: 20 }}>
              <span style={{ fontSize: 13, color: '#b91c1c' }}>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* Kişisel Bilgiler */}
            <div className="reg-section">
              <h2 className="reg-section-title">Kişisel Bilgileriniz</h2>
              <p className="reg-section-desc">Bu bilgiler hesabınıza bağlanacaktır</p>

              <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                <div style={{ flex: 1 }}>
                  <label className="reg-label">Ad</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange} className="reg-input" required />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="reg-label">Soyad</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange} className="reg-input" required />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label className="reg-label">E-posta Adresi</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="reg-input" required />
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <label className="reg-label">Telefon Numarası</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className="reg-input" placeholder="+90 5XX XXX XX XX" required />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="reg-label">İş Unvanı (opsiyonel)</label>
                  <input name="jobTitle" value={form.jobTitle} onChange={handleChange} className="reg-input" />
                </div>
              </div>
            </div>

            {/* Organizasyon Bilgileri */}
            <div className="reg-section">
              <h2 className="reg-section-title">Organizasyon Bilgileri</h2>
              <p className="reg-section-desc">
                {accountType === 'bireysel'
                  ? 'Bu bilgiler fatura için kullanılacaktır'
                  : 'Bu hesabınızdaki birincil organizasyon olacaktır'}
              </p>

              <div style={{ marginBottom: 16 }}>
                <label className="reg-label">
                  {accountType === 'bireysel' ? 'Fatura Adı' : 'Organizasyon Adı'}
                </label>
                <input name="companyName" value={form.companyName} onChange={handleChange} className="reg-input" required />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label className="reg-label">Telefon Numarası</label>
                <input name="companyPhone" value={form.companyPhone} onChange={handleChange} className="reg-input" required />
              </div>

              <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                <div style={{ flex: 2 }}>
                  <label className="reg-label">Ülke</label>
                  <select name="country" value={form.country} onChange={handleChange} className="reg-input" required>
                    {countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                  </select>
                </div>
                <div style={{ flex: 1 }}>
                  <label className="reg-label">Posta Kodu (opsiyonel)</label>
                  <input name="postalCode" value={form.postalCode} onChange={handleChange} className="reg-input" />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label className="reg-label">Adres</label>
                <input name="address" value={form.address} onChange={handleChange} className="reg-input" required />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label className="reg-label">Adres Satır 2 (opsiyonel)</label>
                <input name="addressLine2" value={form.addressLine2} onChange={handleChange} className="reg-input" />
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <label className="reg-label">Şehir</label>
                  <input name="city" value={form.city} onChange={handleChange} className="reg-input" required />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="reg-label">İlçe/Bölge (opsiyonel)</label>
                  <input name="state" value={form.state} onChange={handleChange} className="reg-input" />
                </div>
              </div>
            </div>

            {/* Hesap Bilgileri */}
            <div className="reg-section">
              <h2 className="reg-section-title">Hesap Bilgileri</h2>
              <p className="reg-section-desc">Giriş yapmak için kullanacağınız bilgiler</p>

              <div style={{ marginBottom: 16 }}>
                <label className="reg-label">Kullanıcı Adı</label>
                <input name="username" value={form.username} onChange={handleChange} className="reg-input" required />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label className="reg-label">Şifre</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPass ? 'text' : 'password'}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="reg-input"
                    style={{ paddingRight: 40 }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    style={{
                      position: 'absolute',
                      right: 10,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 4,
                      color: '#6b7280',
                    }}
                  >
                    {showPass ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label className="reg-label">Şifre Tekrar</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassConfirm ? 'text' : 'password'}
                    name="passwordConfirm"
                    value={form.passwordConfirm}
                    onChange={handleChange}
                    className="reg-input"
                    style={{ paddingRight: 40 }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassConfirm(!showPassConfirm)}
                    style={{
                      position: 'absolute',
                      right: 10,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 4,
                      color: '#6b7280',
                    }}
                  >
                    {showPassConfirm ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label className="reg-label">Güvenlik Sorusu</label>
                <select
                  name="securityQuestion"
                  value={form.securityQuestion}
                  onChange={handleChange}
                  className="reg-input"
                  required
                >
                  <option value="">Bir soru seçin</option>
                  {securityQuestions.map((q, i) => (
                    <option key={i} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label className="reg-label">Güvenlik Cevabı</label>
                <input
                  name="securityAnswer"
                  value={form.securityAnswer}
                  onChange={handleChange}
                  className="reg-input"
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <label className="reg-label">Para Birimi</label>
                  <select
                    name="currency"
                    value={form.currency}
                    onChange={handleChange}
                    className="reg-input"
                  >
                    {currencies.map(c => (
                      <option key={c.code} value={c.code}>
                        {c.symbol} {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Onay */}
            <div className="reg-section">
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  name="terms"
                  checked={form.terms as any}
                  onChange={handleChange}
                  className="reg-check"
                  style={{ marginTop: 2 }}
                />
                <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.5 }}>
                  <Link href="/kullanim-sartlari" style={{ color: '#2563eb', fontWeight: 500, textDecoration: 'none' }}>
                    Kullanım Şartları
                  </Link>{' '}
                  şartlarını okudum ve kabul ediyorum
                </span>
              </label>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button
                type="submit"
                disabled={isLoading}
                className="reg-btn reg-btn-primary"
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                }}
              >
                {isLoading ? (
                  <>
                    <div className="spinner" />
                    Hesap Oluşturuluyor...
                  </>
                ) : (
                  'Kaydol'
                )}
              </button>

              <Link href="/giris" className="reg-btn reg-btn-secondary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                İptal
              </Link>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div style={{ background: '#1f2937', borderTop: '1px solid #374151', padding: '20px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', textAlign: 'center', color: '#9ca3af', fontSize: 13 }}>
            © 2026 LSG Teknoloji ·{' '}
            <Link href="/kvkk" style={{ color: '#60a5fa', textDecoration: 'none' }}>KVKK</Link> ·{' '}
            <Link href="/gizlilik" style={{ color: '#60a5fa', textDecoration: 'none' }}>Gizlilik</Link> ·{' '}
            <Link href="/kullanim-sartlari" style={{ color: '#60a5fa', textDecoration: 'none' }}>Kullanım Şartları</Link>
          </div>
        </div>

      </div>
    </>
  )
}
