'use client'

import Link from 'next/link'

export default function DvOvEvFarkiPage() {
  return (
    <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        .comp-page { font-family: 'Inter', sans-serif; }
        .comp-hero {
          background: linear-gradient(135deg, #0f766e 0%, #14b8a6 50%, #2dd4bf 100%);
          color: white; padding: 80px 24px; text-align: center;
        }
        .comp-content { max-width: 1200px; margin: 0 auto; padding: 60px 24px; }
        .comp-section { margin-bottom: 48px; }
        .comp-title { font-size: 32px; font-weight: 700; color: #111827; margin-bottom: 16px; }
        .comp-text { font-size: 16px; line-height: 1.8; color: #4b5563; margin-bottom: 16px; }
        .comp-breadcrumb {
          max-width: 1200px; margin: 0 auto; padding: 16px 24px;
          font-size: 14px; color: #6b7280;
        }
        .comp-breadcrumb a { color: #14b8a6; text-decoration: none; }
        .comp-breadcrumb a:hover { text-decoration: underline; }
        .comp-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px; margin: 32px 0;
        }
        .comp-card {
          background: white; border: 2px solid #e5e7eb; border-radius: 12px;
          padding: 28px; transition: all 0.3s;
        }
        .comp-card:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.1); transform: translateY(-4px); }
        .comp-card.featured { border-color: #14b8a6; background: linear-gradient(to bottom, #f0fdfa, white); }
        .comp-badge {
          display: inline-block; padding: 6px 12px; border-radius: 6px;
          font-size: 12px; font-weight: 700; text-transform: uppercase;
          margin-bottom: 16px;
        }
        .comp-badge.dv { background: #dbeafe; color: #1e40af; }
        .comp-badge.ov { background: #dcfce7; color: #166534; }
        .comp-badge.ev { background: #fef3c7; color: #92400e; }
        .comp-feature-list { padding: 0; margin: 20px 0; list-style: none; }
        .comp-feature-list li {
          padding: 10px 0; border-bottom: 1px solid #f3f4f6;
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 15px; color: #374151;
        }
        .comp-feature-list li:last-child { border-bottom: none; }
      `}</style>

      <div className="comp-page">

        <div className="comp-breadcrumb">
          <Link href="/">Ana Sayfa</Link> / <Link href="/kaynaklar">Kaynaklar</Link> / <span>DV / OV / EV Farkı</span>
        </div>

        <div className="comp-hero">
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h1 style={{ fontSize: 48, fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
              DV, OV ve EV SSL Sertifikaları: <br/>Ne Fark Eder?
            </h1>
            <p style={{ fontSize: 20, opacity: 0.9, lineHeight: 1.6 }}>
              İşletmeniz için doğru SSL sertifika türünü seçin. Doğrulama seviyeleri, güvenlik ve fiyat karşılaştırması.
            </p>
          </div>
        </div>

        <div className="comp-content">

          <div className="comp-section">
            <div className="comp-text">
              SSL sertifikaları, <strong>doğrulama seviyesine</strong> göre üç ana kategoriye ayrılır: 
              <strong> Domain Validated (DV)</strong>, <strong>Organization Validated (OV)</strong> ve{' '}
              <strong>Extended Validation (EV)</strong>. Her biri farklı güvenlik seviyeleri, 
              doğrulama süreçleri ve kullanım senaryoları sunar.
            </div>
          </div>

          <div className="comp-grid">
            
            <div className="comp-card">
              <div className="comp-badge dv">TEMEL SEVİYE</div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111827', marginBottom: 8 }}>
                DV SSL
              </h2>
              <div style={{ fontSize: 14, color: '#6b7280', marginBottom: 16 }}>Domain Validated</div>
             

              <ul className="comp-feature-list">
                <li>
                  <svg style={{ width: 18, height: 18, color: '#3b82f6', flexShrink: 0, marginTop: 2 }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span>Sadece <strong>domain sahipliği</strong> doğrulanır</span>
                </li>
                <li>
                  <svg style={{ width: 18, height: 18, color: '#3b82f6', flexShrink: 0, marginTop: 2 }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span><strong>5-10 dakika</strong> kurulum</span>
                </li>
                <li>
                  <svg style={{ width: 18, height: 18, color: '#3b82f6', flexShrink: 0, marginTop: 2 }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span>256-bit şifreleme</span>
                </li>
                <li>
                  <svg style={{ width: 18, height: 18, color: '#3b82f6', flexShrink: 0, marginTop: 2 }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span>Kilit simgesi görüntülenir</span>
                </li>
              </ul>

              <div style={{ background: '#f0fdf4', padding: 16, borderRadius: 8, marginTop: 16 }}>
                <div style={{ fontWeight: 600, color: '#166534', fontSize: 14, marginBottom: 6 }}>Kimler İçin?</div>
                <div style={{ fontSize: 13, color: '#15803d', lineHeight: 1.6 }}>
                  Bloglar, kişisel siteler, küçük işletmeler, landing page'ler
                </div>
              </div>
            </div>

            <div className="comp-card featured">
              <div className="comp-badge ov">ÖNERİLEN</div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111827', marginBottom: 8 }}>
                OV SSL
              </h2>
              <div style={{ fontSize: 14, color: '#6b7280', marginBottom: 16 }}>Organization Validated</div>
             

              <ul className="comp-feature-list">
                <li>
                  <svg style={{ width: 18, height: 18, color: '#10b981', flexShrink: 0, marginTop: 2 }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span><strong>Şirket kimliği</strong> doğrulanır</span>
                </li>
                <li>
                  <svg style={{ width: 18, height: 18, color: '#10b981', flexShrink: 0, marginTop: 2 }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span><strong>1-3 gün</strong> doğrulama</span>
                </li>
                <li>
                  <svg style={{ width: 18, height: 18, color: '#10b981', flexShrink: 0, marginTop: 2 }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span>Sertifikada <strong>şirket adı</strong> görünür</span>
                </li>
              
                <li>
                  <svg style={{ width: 18, height: 18, color: '#10b981', flexShrink: 0, marginTop: 2 }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span>Dinamik site mührü</span>
                </li>
              </ul>

              <div style={{ background: '#f0fdf4', padding: 16, borderRadius: 8, marginTop: 16 }}>
                <div style={{ fontWeight: 600, color: '#166534', fontSize: 14, marginBottom: 6 }}>Kimler İçin?</div>
                <div style={{ fontSize: 13, color: '#15803d', lineHeight: 1.6 }}>
                  E-ticaret siteleri, kurumsal şirketler, SaaS platformları
                </div>
              </div>
            </div>

            <div className="comp-card">
              <div className="comp-badge ev">MAKSİMUM GÜVENLİK</div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111827', marginBottom: 8 }}>
                EV SSL
              </h2>
              <div style={{ fontSize: 14, color: '#6b7280', marginBottom: 16 }}>Extended Validation</div>
              

              <ul className="comp-feature-list">
                <li>
                  <svg style={{ width: 18, height: 18, color: '#f59e0b', flexShrink: 0, marginTop: 2 }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span><strong>En yüksek doğrulama</strong> seviyesi</span>
                </li>
                <li>
                  <svg style={{ width: 18, height: 18, color: '#f59e0b', flexShrink: 0, marginTop: 2 }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span><strong>3-7 gün</strong> kapsamlı inceleme</span>
                </li>
                <li>
                  <svg style={{ width: 18, height: 18, color: '#f59e0b', flexShrink: 0, marginTop: 2 }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span>Adres çubuğunda <strong>şirket adı</strong> (bazı tarayıcılarda)</span>
                </li>
                <li>
                  <svg style={{ width: 18, height: 18, color: '#f59e0b', flexShrink: 0, marginTop: 2 }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span>Premium dinamik mühür</span>
                </li>
              </ul>

              <div style={{ background: '#fffbeb', padding: 16, borderRadius: 8, marginTop: 16 }}>
                <div style={{ fontWeight: 600, color: '#92400e', fontSize: 14, marginBottom: 6 }}>Kimler İçin?</div>
                <div style={{ fontSize: 13, color: '#92400e', lineHeight: 1.6 }}>
                  Bankalar, finans kurumları, büyük e-ticaret, hükümet siteleri
                </div>
              </div>
            </div>

          </div>

          <div className="comp-section">
            <h2 className="comp-title">Detaylı Karşılaştırma Tablosu</h2>
            <div style={{ overflowX: 'auto', marginTop: 24 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <thead>
                  <tr style={{ background: '#f9fafb' }}>
                    <th style={{ padding: 16, textAlign: 'left', fontWeight: 600, color: '#111827', borderBottom: '2px solid #e5e7eb' }}>Özellik</th>
                    <th style={{ padding: 16, textAlign: 'center', fontWeight: 600, color: '#1e40af', borderBottom: '2px solid #e5e7eb' }}>DV SSL</th>
                    <th style={{ padding: 16, textAlign: 'center', fontWeight: 600, color: '#166534', borderBottom: '2px solid #e5e7eb' }}>OV SSL</th>
                    <th style={{ padding: 16, textAlign: 'center', fontWeight: 600, color: '#92400e', borderBottom: '2px solid #e5e7eb' }}>EV SSL</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Doğrulama Süresi', dv: '5-10 dakika', ov: '1-3 gün', ev: '3-7 gün' },
                    { feature: 'Domain Sahipliği', dv: '✅', ov: '✅', ev: '✅' },
                    { feature: 'Şirket Doğrulama', dv: '❌', ov: '✅', ev: '✅' },
                    { feature: 'Yasal Doküman İncelemesi', dv: '❌', ov: '✅', ev: '✅✅' },
                    { feature: 'Telefon Doğrulama', dv: '❌', ov: '✅', ev: '✅' },
                    { feature: 'Şifreleme Gücü', dv: '256-bit', ov: '256-bit', ev: '256-bit' },
                    { feature: 'Adres Çubuğunda Şirket Adı', dv: '❌', ov: '❌', ev: '✅' },
                    { feature: 'Dinamik Site Mührü', dv: '✅', ov: '✅', ev: '✅ Premium' },
                    { feature: 'Tarayıcı Uyumluluğu', dv: '%99.9', ov: '%99.9', ev: '%99.9' },
                    { feature: 'Mobil Uyumlu', dv: '✅', ov: '✅', ev: '✅' },
                    { feature: 'Wildcard Desteği', dv: '✅', ov: '✅', ev: '❌' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #f3f4f6' }}>
                      <td style={{ padding: 16, fontWeight: 500, color: '#374151' }}>{row.feature}</td>
                      <td style={{ padding: 16, textAlign: 'center', color: '#6b7280' }}>{row.dv}</td>
                      <td style={{ padding: 16, textAlign: 'center', color: '#6b7280' }}>{row.ov}</td>
                      <td style={{ padding: 16, textAlign: 'center', color: '#6b7280' }}>{row.ev}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="comp-section">
            <h2 className="comp-title">Hangi SSL Sertifikasını Seçmeliyim?</h2>
            
            <div style={{ background: '#dbeafe', padding: 24, borderRadius: 12, marginTop: 20, borderLeft: '4px solid #3b82f6' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#1e40af', marginBottom: 12 }}>
                DV SSL'i seçin eğer:
              </h3>
              <ul style={{ paddingLeft: 20, margin: 0, color: '#1e40af' }}>
                <li>Kişisel blog veya portföy sitesi işletiyorsanız</li>
                <li>Hızlı kurulum istiyorsanız (5 dakika)</li>
                <li>Bütçeniz kısıtlıysa</li>
                <li>E-ticaret yapmıyorsanız</li>
              </ul>
            </div>

            <div style={{ background: '#dcfce7', padding: 24, borderRadius: 12, marginTop: 16, borderLeft: '4px solid #10b981' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#166534', marginBottom: 12 }}>
                OV SSL'i seçin eğer:
              </h3>
              <ul style={{ paddingLeft: 20, margin: 0, color: '#166534' }}>
                <li>E-ticaret sitesi işletiyorsanız</li>
                <li>Kurumsal bir şirketseniz</li>
                <li>Müşterilerinize ekstra güven vermek istiyorsanız</li>
                <li>Sertifikada şirket adınızın görünmesini istiyorsanız</li>
              </ul>
            </div>

            <div style={{ background: '#fef3c7', padding: 24, borderRadius: 12, marginTop: 16, borderLeft: '4px solid #f59e0b' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: '#92400e', marginBottom: 12 }}>
                EV SSL'i seçin eğer:
              </h3>
              <ul style={{ paddingLeft: 20, margin: 0, color: '#92400e' }}>
                <li>Finans/bankacılık sektöründeyseniz</li>
                <li>Yüksek değerli işlemler yapıyorsanız</li>
                <li>Maksimum güvenlik ve güvenilirlik gerekiyorsa</li>
                <li>Yeşil adres çubuğu (bazı tarayıcılarda) istiyorsanız</li>
              </ul>
            </div>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #14b8a6, #0d9488)', color: 'white', padding: 48, textAlign: 'center', borderRadius: 16, marginTop: 48 }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 12 }}>
              Hâlâ Karar Veremedim?
            </h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 28, maxWidth: 600, margin: '0 auto 28px' }}>
              SSL uzmanlarımız size en uygun sertifikayı seçmenizde yardımcı olabilir. 
              Ücretsiz danışmanlık için bizimle iletişime geçin.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                href="/iletisim" 
                style={{ 
                  display: 'inline-block', padding: '14px 32px', background: 'white',
                  color: '#14b8a6', borderRadius: 8, fontWeight: 600,
                  textDecoration: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
              >
                Uzmanla Görüş →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}