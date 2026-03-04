import Link from "next/link"

const openPositions = [
  {
    title: "Frontend Developer",
    location: "Istanbul, Türkiye",
    type: "Tam Zamanlı",
  },
  {
    title: "Backend Developer",
    location: "Remote",
    type: "Tam Zamanlı",
  },
  {
    title: "DevOps Mühendisi",
    location: "Ankara, Türkiye",
    type: "Tam Zamanlı",
  },
  {
    title: "Müşteri Başarı Uzmanı",
    location: "Istanbul, Türkiye",
    type: "Part-Time",
  },
]

export default function CareersPage() {
  return (
    <main className="bg-white min-h-screen text-slate-900">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white text-center py-28 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          LSG Teknoloji’de Kariyer
        </h1>

        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Dijital güvenlik sektöründe fark yaratan bir ekibin parçası olun.
          Yenilikçi projelerimizde yer almak ve kariyerinizi bir üst seviyeye taşımak
          için açık pozisyonları inceleyin.
        </p>

        <Link
          href="#open-positions"
          className="inline-block mt-10 bg-white text-blue-900 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
        >
          Açık Pozisyonlara Göz At
        </Link>
      </section>

      {/* ================= STATEMENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Biz Kimiz?</h2>
        <p className="text-slate-600 leading-relaxed">
          LSG Teknoloji, SSL sertifikaları ve siber güvenlik çözümleri sunan
          Türkiye merkezli bir teknoloji şirketidir.  
          Müşterilerimizin dijital varlık güvenliğini en üst seviyeye çıkarmak
          için çalışıyoruz ve bu yolda **senin gibi yeteneklere ihtiyacımız var**.
        </p>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section id="open-positions" className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-8">
            Açık Pozisyonlar
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {openPositions.map((job, index) => (
              <div
                key={index}
                className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold text-blue-900 mb-2">
                  {job.title}
                </h4>
                <div className="text-sm text-slate-600 mb-4">
                  <span>{job.location}</span> &middot; <span>{job.type}</span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  LSG Teknoloji’nin uzman ekibine katılmak için mükemmel fırsat!
                  Pozisyonun gereksinimlerini ve çalışma detaylarını inceleyin.
                </p>

                <Link
                  href={"/iletisim"}
                  className="inline-block bg-blue-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-800 transition text-sm"
                >
                  Başvur
                </Link>
              </div>
            ))}
          </div>

          {openPositions.length === 0 && (
            <p className="text-center text-slate-500 mt-6">
              Şu anda açık pozisyon bulunmamaktadır.
            </p>
          )}
        </div>
      </section>

      {/* ================= WHY WORK WITH US ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h3 className="text-3xl font-bold mb-6">
          Neden LSG Teknoloji?
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: "🚀",
              title: "Hızlı Büyüme",
              desc: "Teknoloji trendlerini takip eden, büyüyen bir ekibin parçası olun.",
            },
            {
              icon: "🛡️",
              title: "Güvenli Çalışma Ortamı",
              desc: "Açık iletişim, destek ve sürdürülebilir iş kültürü.",
            },
            {
              icon: "✨",
              title: "Sürekli Öğrenme",
              desc: "Eğitimler ve teknik gelişim fırsatları.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border shadow-sm">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ekibimize Katılmak İçin Hazır mısın?
          </h2>

          <Link
            href="/iletisim"
            className="bg-white text-blue-900 px-12 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Bizimle İletişime Geç →
          </Link>
        </div>
      </section>

    </main>
  )
}
