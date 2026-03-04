'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  MessageCircle,
  Search,
  LayoutList,
  HelpCircle,
  Settings,
  DollarSign,
  Headphones,
  Phone,
  BookOpen,
  X
} from 'lucide-react'


type Category = 'all' | 'genel' | 'teknik' | 'fiyatlandirma' | 'destek'

export default function SSSPage() {
  const [openId, setOpenId] = useState<number | null>(null)
  const [category, setCategory] = useState<Category>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const faqs = [
    {
      id: 1,
      category: 'genel',
      question: 'SSL Sertifikası Nedir?',
      answer: 'SSL (Secure Sockets Layer) sertifikası, web siteniz ile ziyaretçilerinizin tarayıcıları arasında şifreli bir bağlantı kuran dijital bir sertifikadır. SSL, hassas bilgilerin (kredi kartı numaraları, şifreler, kişisel veriler) güvenli bir şekilde aktarılmasını sağlar ve sitenizin HTTPS protokolü ile çalışmasını mümkün kılar.',
    },
    {
      id: 2,
      category: 'genel',
      question: 'Neden SSL Sertifikasına İhtiyacım Var?',
      answer: 'SSL sertifikası birçok açıdan kritik öneme sahiptir: 1) Google, HTTPS sitelerini arama sıralamalarında öne çıkarır (SEO avantajı). 2) Modern tarayıcılar SSL olmayan siteleri "Güvenli Değil" olarak işaretler, bu da ziyaretçi kaybına neden olur. 3) E-ticaret siteleri için zorunludur - ödeme işlemleri için SSL gereklidir. 4) GDPR ve PCI-DSS gibi düzenlemelere uyum için gereklidir. 5) Müşteri güvenini artırır ve dönüşüm oranlarını iyileştirir.',
    },
    {
      id: 3,
      category: 'genel',
      question: 'DV, OV ve EV SSL Arasındaki Fark Nedir?',
      answer: 'DV (Domain Validated): Sadece domain sahipliği doğrulanır, 5-10 dakikada kurulur, en uygun fiyatlıdır. Bloglar ve küçük siteler için idealdir. OV (Organization Validated): Şirket kimliği de doğrulanır, 1-3 gün sürer, orta seviye güvenlik sağlar. E-ticaret ve kurumsal siteler için uygundur. EV (Extended Validation): En yüksek doğrulama seviyesi, 3-7 gün kapsamlı inceleme, bazı tarayıcılarda adres çubuğunda şirket adı görünür. Bankalar ve büyük e-ticaret siteleri için önerilir.',
    },
    {
      id: 4,
      category: 'teknik',
      question: 'SSL Kurulumu Ne Kadar Sürer?',
      answer: 'Kurulum süresi SSL tipine göre değişir: DV SSL için 5-10 dakika (otomatik doğrulama), OV SSL için 1-3 iş günü (şirket doğrulaması gerektirir), EV SSL için 3-7 iş günü (kapsamlı inceleme yapılır). Teknik kurulum ise hosting türünüze bağlı olarak 10-30 dakika arasında değişir. cPanel, Plesk gibi kontrol panelleri otomatik kurulum sunar.',
    },
    {
      id: 5,
      category: 'teknik',
      question: 'Wildcard SSL Nedir?',
      answer: 'Wildcard SSL, ana domain ve tüm subdomainlerinizi tek bir sertifika ile korur. Örneğin: example.com, www.example.com, mail.example.com, shop.example.com hepsi aynı sertifika altında çalışır. Bu, her subdomain için ayrı SSL almaktan çok daha ekonomiktir. Sınırsız subdomain desteği sunar ve yönetimi kolaylaştırır.',
    },
    {
      id: 6,
      category: 'teknik',
      question: 'Multi-Domain (SAN) SSL Nedir?',
      answer: 'Multi-Domain SSL (Subject Alternative Name), tek bir sertifika ile birden fazla farklı domaini korur. Örneğin: example.com, example.net, myshop.com aynı sertifikada olabilir. En fazla 250 domain eklenebilir. Birden fazla web sitesi yöneten şirketler için idealdir. Wildcard\'tan farkı: Wildcard subdomain\'leri, Multi-Domain farklı domainleri kapsar.',
    },
    {
      id: 7,
      category: 'teknik',
      question: 'SSL Sertifikamı Nasıl Yenilerim?',
      answer: 'SSL sertifikaları genellikle 1 yıl geçerlidir. Yenileme süreci şöyledir: 1) Süre dolmadan 30 gün önce e-posta ile hatırlatma alırsınız. 2) Yenileme linkine tıklayıp ödeme yaparsınız. 3) DV SSL otomatik yenilenir, OV/EV için doğrulama tekrarlanabilir. 4) Teknik kurulum genellikle otomatiktir. Otomatik yenileme aktif ederseniz, sertifikanız hiç kesinti olmadan yenilenir.',
    },
    {
      id: 8,
      category: 'fiyatlandirma',
      question: 'SSL Fiyatları Neden Değişiyor?',
      answer: 'SSL fiyatları şu faktörlere göre değişir: 1) Doğrulama seviyesi (DV < OV < EV), 2) Sertifika süresi (1-3 yıl), 3) Kapsam (single domain, wildcard, multi-domain), 4) Garanti tutarı ($50K - $1.75M), 5) Marka (Sectigo, DigiCert, GeoTrust). Premium markalarda daha yüksek garanti, daha iyi destek ve prestij söz konusudur.',
    },
    {
      id: 9,
      category: 'fiyatlandirma',
      question: 'Ücretsiz SSL ile Ücretli SSL Arasındaki Fark Nedir?',
      answer: "Ücretsiz SSL (Let's Encrypt): 90 günde bir yenilenir, sadece DV doğrulama, sınırlı destek, garanti yok. Küçük projeler için yeterlidir. Ücretli SSL: 1-3 yıl geçerli, OV/EV seçenekleri, 7/24 destek, yüksek garanti ($50K-$1.75M), site mührü, kurumsal güvenilirlik. E-ticaret ve kurumsal siteler için ücretli SSL şarttır.",
    },
    {
      id: 10,
      category: 'fiyatlandirma',
      question: 'SSL İçin İade Politikanız Nedir?',
      answer: 'SSL sertifikaları için 30 gün para iade garantisi sunuyoruz. Eğer herhangi bir nedenle memnun kalmazsanız, ilk 30 gün içinde tam iade alabilirsiniz. İade süreci 3-5 iş günü içinde tamamlanır. Not: Sertifika düzenlendikten sonra bile iade hakkınız devam eder, ancak EV SSL gibi kapsamlı doğrulama gerektiren ürünlerde doğrulama başladıysa kısmi ücret kesintisi olabilir.',
    },
    {
      id: 11,
      category: 'destek',
      question: 'SSL Kurulumunda Yardım Alabilir Miyim?',
      answer: 'Evet! Ücretsiz kurulum desteği sunuyoruz. Destek seçenekleri: 1) Canlı sohbet: Anında yardım (7/24), 2) Ticket sistemi: Detaylı teknik destek (4 saat içinde yanıt), 3) Telefon desteği: Acil durumlar için (mesai saatleri), 4) Kurulum rehberleri: Adım adım dokümantasyon, 5) Video eğitimler: Görsel anlatım. Ayrıca ücretli profesyonel kurulum hizmeti de mevcuttur (₺299).',
    },
    {
      id: 12,
      category: 'destek',
      question: 'SSL Hatası Alıyorum, Ne Yapmalıyım?',
      answer: 'SSL hataları genellikle şu sebeplerden olur: 1) Sertifika doğru kurulmamış (sunucu yapılandırması kontrol edin), 2) Mixed content hatası (HTTP + HTTPS karışık içerik, tüm kaynakları HTTPS yapın), 3) Sertifika süresi dolmuş (yenileme yapın), 4) Ara sertifika (intermediate certificate) eksik (CA bundle yükleyin), 5) Alan adı eşleşmiyor (sertifika yanlış domain için). SSL Checker aracımızla sorunları tespit edebilir veya destek ekibimize başvurabilirsiniz.',
    },
    {
      id: 13,
      category: 'teknik',
      question: 'Code Signing Sertifikası Nedir?',
      answer: 'Code Signing, yazılımlarınızı ve kodlarınızı dijital olarak imzalamanızı sağlar. Faydaları: 1) Kullanıcılar yazılımın sizden geldiğini doğrular, 2) Windows SmartScreen uyarılarını engeller, 3) Kodun değiştirilmediğini garanti eder, 4) Uygulama mağazalarında yayınlamak için gereklidir (Microsoft Store, Adobe), 5) Kurumsal güvenilirlik sağlar. Windows drivers, .exe dosyaları, makrolar için şarttır.',
    },
    {
      id: 14,
      category: 'teknik',
      question: 'SSL ve TLS Arasındaki Fark Nedir?',
      answer: 'SSL (Secure Sockets Layer) eski protokoldür ve artık kullanılmamaktadır (güvenlik açıkları nedeniyle). TLS (Transport Layer Security) SSL\'in geliştirilmiş halefidir. Günümüzde "SSL sertifikası" dediğimizde aslında TLS 1.2 veya TLS 1.3 kullanılır. Sektör alışkanlığından "SSL" terimi yaygın olsa da, teknik olarak TLS kullanılır. TLS 1.3 en yeni ve en güvenli versiyondur (2018).',
    },
    {
      id: 15,
      category: 'genel',
      question: 'Mobil Uygulamalar İçin SSL Gerekli Mi?',
      answer: 'Kesinlikle evet! Mobil uygulamalar API\'ler üzerinden backend sunucularla iletişim kurar. Bu iletişimin SSL/TLS ile şifrelenmesi zorunludur. Aksi halde: 1) Kullanıcı verileri çalınabilir (man-in-the-middle saldırıları), 2) Apple App Store ve Google Play Store güvenlik politikaları ihlal edilir, 3) GDPR/KVKK gibi düzenlemelere uyum sağlananamaz. API sunucunuz için mutlaka SSL sertifikası kullanın.',
    },
    {
      id: 16,
      category: 'destek',
      question: 'SSL Sertifikamı İptal Edebilir Miyim?',
      answer: 'Evet, SSL sertifikanızı istediğiniz zaman iptal edebilirsiniz. İptal sebepleri: 1) Private key (özel anahtar) tehlikeye girdi, 2) Domain el değiştirdi, 3) Yanlış bilgilerle düzenlendi, 4) Artık kullanılmıyor. İptal süreci: Kontrol panelinizden "İptal" butonuna tıklayın, sebep belirtin, onaylayın. İptal 24 saat içinde tamamlanır. İptal edilen sertifikalar için kısmi iade yapılabilir (kullanım süresine göre).',
    },
    {
      id: 17,
      category: 'fiyatlandirma',
      question: 'Toplu Alımda İndirim Var Mı?',
      answer: 'Evet! Toplu SSL alımlarında cazip indirimler sunuyoruz: 5-10 sertifika: %15 indirim, 11-25 sertifika: %25 indirim, 26-50 sertifika: %35 indirim, 50+ sertifika: Özel fiyatlandırma. Ayrıca kurumsal bayilik programımız ile %40\'a varan komisyon kazanabilirsiniz. Detaylı bilgi için satış ekibimizle iletişime geçin: sales@lsgtech.com',
    },
    {
      id: 18,
      category: 'teknik',
      question: 'CSR (Certificate Signing Request) Nedir?',
      answer: 'CSR, SSL sertifikası almak için sunucunuzda oluşturduğunuz şifreli bir dosyadır. İçeriği: Domain adı, şirket bilgileri, konum bilgileri, public key (genel anahtar). CSR oluşturma: cPanel, Plesk veya OpenSSL komut satırı ile yapılır. CSR\'yi bize gönderirsiniz, biz de CA (Certificate Authority) tarafından imzalanmış sertifikayı size veririz. CSR oluşturucu aracımızı kullanarak kolayca oluşturabilirsiniz.',
    },
  ]

 const categories = [
  { id: 'all', label: 'Tümü', icon: <LayoutList size={18} />, count: faqs.length },
  { id: 'genel', label: 'Genel', icon: <HelpCircle size={18} />, count: faqs.filter(f => f.category === 'genel').length },
  { id: 'teknik', label: 'Teknik', icon: <Settings size={18} />, count: faqs.filter(f => f.category === 'teknik').length },
  { id: 'fiyatlandirma', label: 'Fiyatlandırma', icon: <DollarSign size={18} />, count: faqs.filter(f => f.category === 'fiyatlandirma').length },
  { id: 'destek', label: 'Destek', icon: <Headphones size={18} />, count: faqs.filter(f => f.category === 'destek').length },
]


  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = category === 'all' || faq.category === category
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <>
      <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  .sss-page {
    font-family: 'Inter', sans-serif;
    background: #f8fafc;
    min-height: 100vh;
  }

  /* HERO */
  .sss-hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%);
    color: white;
    padding: 80px 24px;
    text-align: center;
  }

  .sss-content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 60px 24px;
  }

  /* SEARCH */
  .sss-search {
    position: relative;
    margin-bottom: 32px;
  }

  .sss-search input {
    width: 100%;
    padding: 16px 56px;
    border: 2px solid #e2e8f0;
    border-radius: 16px;
    font-size: 16px;
    transition: all 0.2s;
    background: white;
    box-shadow: 0 6px 18px rgba(37,99,235,0.05);
  }

  .sss-search input:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 4px rgba(37,99,235,0.12);
  }

  /* CATEGORIES */
  .sss-categories {
    display: flex;
    gap: 12px;
    margin-bottom: 40px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .sss-category-btn {
    padding: 12px 24px;
    border-radius: 12px;
    border: 2px solid #e2e8f0;
    background: white;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;
    transition: all 0.25s;
    color: #475569;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .sss-category-btn.active {
    background: linear-gradient(135deg, #2563eb, #1e3a8a);
    color: white;
    border-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(37,99,235,0.35);
  }

  .sss-category-btn:hover:not(.active) {
    border-color: #2563eb;
    color: #2563eb;
    transform: translateY(-2px);
  }

  /* FAQ ITEM */
  .sss-faq-item {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    margin-bottom: 16px;
    overflow: hidden;
    transition: all 0.3s;
  }

  .sss-faq-item:hover {
    box-shadow: 0 12px 30px rgba(37,99,235,0.08);
    transform: translateY(-2px);
  }

  .sss-faq-question {
    padding: 20px 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    transition: background 0.2s;
  }

  .sss-faq-question:hover {
    background: #eff6ff;
  }

  .sss-faq-answer {
    padding: 0 24px 20px 24px;
    color: #475569;
    line-height: 1.8;
    font-size: 15px;
  }

  /* ICON */
  .sss-icon {
    width: 26px;
    height: 26px;
    border-radius: 8px;
    background: #dbeafe;
    color: #1d4ed8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-weight: 700;
    transition: all 0.25s;
  }

  .sss-faq-item.open .sss-icon {
    background: #2563eb;
    color: white;
    transform: rotate(90deg);
  }
`}</style>


      <div className="sss-page">

        {/* Hero */}
        <div className="sss-hero">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
<MessageCircle size={48} strokeWidth={1.5} style={{ marginBottom: 16 }} />
            <h1 style={{ fontSize: 48, fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
              Sıkça Sorulan Sorular
            </h1>
            <p style={{ fontSize: 20, opacity: 0.9, lineHeight: 1.6 }}>
              SSL sertifikaları hakkında merak ettiğiniz her şey. Cevap bulamadınız mı? Destek ekibimize ulaşın.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="sss-content">

          {/* Search */}
          <div className="sss-search">
           <Search
  size={22}
  strokeWidth={1.5}
  style={{
    position: 'absolute',
    left: 20,
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#94a3b8'
  }}
/>

            <input
              type="text"
              placeholder="Soru arayın... (örn: SSL nedir, wildcard, fiyat)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: '#9ca3af', fontSize: 20 }}
              >
                <X size={20} strokeWidth={2} />

              </button>
            )}
          </div>

          {/* Categories */}
          <div className="sss-categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`sss-category-btn ${category === cat.id ? 'active' : ''}`}
                onClick={() => setCategory(cat.id as Category)}
              >
                <span style={{ fontSize: 18 }}>{cat.icon}</span>
                <span>{cat.label}</span>
                <span style={{ 
                  fontSize: 12, 
                  background: category === cat.id ? 'rgba(255,255,255,0.2)' : '#f3f4f6',
                  padding: '2px 8px', 
                  borderRadius: 6,
                  fontWeight: 700
                }}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div style={{ marginBottom: 24, color: '#6b7280', fontSize: 15, textAlign: 'center' }}>
            {filteredFaqs.length} soru bulundu
          </div>

          {/* FAQ List */}
          <div>
            {filteredFaqs.map((faq) => (
              <div 
                key={faq.id} 
                className={`sss-faq-item ${openId === faq.id ? 'open' : ''}`}
              >
                <div 
                  className="sss-faq-question"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1 }}>
                    <div className="sss-icon">
                      {openId === faq.id ? '−' : '+'}
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#111827', margin: 0 }}>
                      {faq.question}
                    </h3>
                  </div>
                  <svg 
                    style={{ 
                      width: 20, 
                      height: 20, 
                      color: '#9ca3af', 
                      transition: 'transform 0.2s',
                      transform: openId === faq.id ? 'rotate(180deg)' : 'rotate(0)'
                    }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {openId === faq.id && (
                  <div className="sss-faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredFaqs.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
<Search size={64} strokeWidth={1.5} style={{ marginBottom: 16 }} />
              <h3 style={{ fontSize: 24, fontWeight: 700, color: '#111827', marginBottom: 12 }}>
                Sonuç bulunamadı
              </h3>
              <p style={{ color: '#6b7280', marginBottom: 24, fontSize: 16 }}>
                Aradığınız soruyu bulamadık. Farklı kelimeler deneyin veya tüm soruları görüntüleyin.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setCategory('all'); }}
                style={{
                  padding: '12px 28px', borderRadius: 10, background: '#06b6d4',
                  color: 'white', border: 'none', fontWeight: 600, cursor: 'pointer',
                  fontSize: 15
                }}
              >
                Tüm Soruları Göster
              </button>
            </div>
          )}

          {/* CTA Boxes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 60 }}>
            
            <div style={{ background: 'linear-gradient(135deg, #06b6d4, #0891b2)', color: 'white', padding: 32, borderRadius: 16, textAlign: 'center' }}>
<Phone size={48} strokeWidth={1.5} style={{ marginBottom: 16 }} />
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>
                Cevap Bulamadınız mı?
              </h3>
              <p style={{ fontSize: 14, opacity: 0.9, marginBottom: 20, lineHeight: 1.6 }}>
                Destek ekibimiz 7/24 hizmetinizde. Sorularınızı yanıtlamak için buradayız.
              </p>
              <Link 
                href="/destek"
                style={{
                  display: 'inline-block', padding: '12px 24px', background: 'white',
                  color: '#06b6d4', borderRadius: 8, fontWeight: 600,
                  textDecoration: 'none', transition: 'all 0.2s'
                }}
              >
                Destek Talebi Aç →
              </Link>
            </div>

            <div style={{ background: 'white', border: '2px solid #e5e7eb', padding: 32, borderRadius: 16, textAlign: 'center' }}>
<BookOpen size={48} strokeWidth={1.5} style={{ marginBottom: 16 }} />
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#111827' }}>
                Daha Fazla Bilgi
              </h3>
              <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 20, lineHeight: 1.6 }}>
                Rehberlerimiz, videolarımız ve dokümantasyonumuzla SSL konusunda uzmanlaşın.
              </p>
              <Link 
                href="/kaynaklar"
                style={{
                  display: 'inline-block', padding: '12px 24px', background: '#06b6d4',
                  color: 'white', borderRadius: 8, fontWeight: 600,
                  textDecoration: 'none', transition: 'all 0.2s'
                }}
              >
                Kaynaklara Git →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}