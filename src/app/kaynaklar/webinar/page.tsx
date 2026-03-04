'use client'

import { useState } from 'react'
import Link from 'next/link'

type FilterType = 'all' | 'upcoming' | 'past'

export default function WebinarlarPage() {
  const [filter, setFilter] = useState<FilterType>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const webinars = [
    {
      id: 1,
      title: 'SSL Sertifikası Nasıl Seçilir? 2026 Rehberi',
      description:
        'DV, OV ve EV SSL sertifikaları arasındaki farkları öğrenin. İşletmeniz için doğru sertifikayı nasıl seçeceğinizi keşfedin.',
      date: '2026-02-25',
      time: '14:00',
      duration: '45 dakika',
      speaker: 'Ahmet Yılmaz',
      speakerTitle: 'SSL Güvenlik Uzmanı',
      status: 'upcoming',
      attendees: 124,
      topics: ['SSL Seçimi', 'Güvenlik', 'E-ticaret'],
    },
    {
      id: 2,
      title: 'Wildcard SSL ile Maliyetleri Düşürün',
      description:
        'Tek bir sertifika ile tüm subdomainlerinizi koruyun. Wildcard SSL kullanarak %70\'e varan maliyet tasarrufu sağlayın.',
      date: '2026-03-05',
      time: '15:00',
      duration: '30 dakika',
      speaker: 'Elif Demir',
      speakerTitle: 'Teknik Danışman',
      status: 'upcoming',
      attendees: 89,
      topics: ['Wildcard SSL', 'Maliyet', 'Optimizasyon'],
    },
    {
      id: 3,
      title: 'HTTPS Geçişi: Adım Adım Rehber',
      description:
        'Web sitenizi HTTP\'den HTTPS\'ye nasıl geçirirsiniz? SEO etkilerini minimize etmek için ipuçları.',
      date: '2026-02-10',
      time: '16:00',
      duration: '60 dakika',
      speaker: 'Mehmet Kaya',
      speakerTitle: 'SEO Uzmanı',
      status: 'past',
      attendees: 256,
      topics: ['HTTPS', 'SEO', 'Migration'],
    },
  ]

  const filteredWebinars = webinars.filter((w) => {
    const matchesFilter = filter === 'all' || w.status === filter
    const matchesSearch =
      searchQuery === '' ||
      w.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .webinar-page {
          font-family: 'Inter', sans-serif;
          background: #f8fafc;
          min-height: 100vh;
        }

        .webinar-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%);
          color: white;
          padding: 90px 24px;
          text-align: center;
        }

        .webinar-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 24px;
        }

        .webinar-search input {
          width: 100%;
          padding: 14px 20px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 15px;
          transition: all 0.2s;
          background: white;
        }

        .webinar-search input:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 4px rgba(37,99,235,0.15);
        }

        .webinar-filters {
          display: flex;
          gap: 12px;
          margin: 32px 0;
          flex-wrap: wrap;
        }

        .webinar-filter-btn {
          padding: 10px 20px;
          border-radius: 8px;
          border: 2px solid #e2e8f0;
          background: white;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.2s;
          color: #475569;
        }

        .webinar-filter-btn.active {
          background: linear-gradient(135deg, #2563eb, #1e3a8a);
          color: white;
          border-color: #2563eb;
          box-shadow: 0 6px 20px rgba(37,99,235,0.3);
        }

        .webinar-filter-btn:hover:not(.active) {
          border-color: #2563eb;
          color: #2563eb;
        }

        .webinar-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 24px;
        }

        .webinar-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s;
        }

        .webinar-card:hover {
          box-shadow: 0 20px 40px rgba(37,99,235,0.1);
          transform: translateY(-6px);
        }

        .webinar-header {
          background: linear-gradient(135deg, #1e3a8a, #2563eb);
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 18px;
        }

        .webinar-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .webinar-badge.upcoming {
          background: #dbeafe;
          color: #1d4ed8;
        }

        .webinar-badge.past {
          background: #e2e8f0;
          color: #475569;
        }

        .webinar-topic {
          display: inline-block;
          padding: 4px 10px;
          background: #eff6ff;
          border-radius: 6px;
          font-size: 12px;
          color: #2563eb;
          margin-right: 6px;
          margin-bottom: 6px;
        }
      `}</style>

      <div className="webinar-page">
        <div className="webinar-hero">
          <h1 style={{ fontSize: 48, fontWeight: 800, marginBottom: 16 }}>
            SSL & Güvenlik Webinarları
          </h1>
          <p style={{ fontSize: 20, opacity: 0.9 }}>
            Ücretsiz online eğitimlerle SSL güvenliği konusunda uzmanlaşın.
          </p>
        </div>

        <div className="webinar-content">
          <div className="webinar-search">
            <input
              type="text"
              placeholder="Webinar ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="webinar-filters">
            <button
              className={`webinar-filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Tümü
            </button>
            <button
              className={`webinar-filter-btn ${filter === 'upcoming' ? 'active' : ''}`}
              onClick={() => setFilter('upcoming')}
            >
              Yaklaşan
            </button>
            <button
              className={`webinar-filter-btn ${filter === 'past' ? 'active' : ''}`}
              onClick={() => setFilter('past')}
            >
              Kayıtlar
            </button>
          </div>

          <div className="webinar-grid">
            {filteredWebinars.map((webinar) => (
              <div key={webinar.id} className="webinar-card">
                <div className="webinar-header">
                  {webinar.status === 'upcoming' ? 'Canlı Webinar' : 'Webinar Kaydı'}
                </div>

                <div style={{ padding: 24 }}>
                  <div style={{ marginBottom: 12 }}>
                    <span className={`webinar-badge ${webinar.status}`}>
                      {webinar.status === 'upcoming' ? 'Yaklaşan' : 'Kayıt'}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>
                    {webinar.title}
                  </h3>

                  <p style={{ fontSize: 14, color: '#64748b', marginBottom: 16 }}>
                    {webinar.description}
                  </p>

                  <div style={{ marginBottom: 16 }}>
                    {webinar.topics.map((topic, i) => (
                      <span key={i} className="webinar-topic">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div style={{ fontSize: 14, color: '#64748b', marginBottom: 16 }}>
                    {formatDate(webinar.date)} • {webinar.time} • {webinar.duration}
                  </div>

                  {webinar.status === 'upcoming' ? (
                    <button
                      style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: 8,
                        background:
                          'linear-gradient(135deg, #2563eb, #1e3a8a)',
                        color: 'white',
                        border: 'none',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Ücretsiz Kayıt Ol
                    </button>
                  ) : (
                    <button
                      style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: 8,
                        background: 'white',
                        color: '#2563eb',
                        border: '2px solid #2563eb',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Kaydı İzle
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              background:
                'linear-gradient(135deg, #1e3a8a, #2563eb)',
              color: 'white',
              padding: 48,
              textAlign: 'center',
              borderRadius: 16,
              marginTop: 60,
            }}
          >
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
              Webinar Bildirimlerini Kaçırmayın!
            </h2>
            <p style={{ marginBottom: 24 }}>
              Yeni webinarlardan ilk siz haberdar olun.
            </p>
            <button
              style={{
                padding: '12px 32px',
                borderRadius: 8,
                background: 'white',
                color: '#2563eb',
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Abone Ol
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
