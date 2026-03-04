import Image from "next/image"

const sections = [
  {
    title: "Finans Kuruluşları",
    logos: [
      { name: "TCMB", src: "/references/tcmb.png" },
      { name: "Ziraat Bankası", src: "/references/ziraat.png" },
      { name: "VakıfBank", src: "/references/vakifbank.png" },
      { name: "Halkbank", src: "/references/halkbank.png" },
      { name: "Şekerbank", src: "/references/sekerbank.png" },
      { name: "Golden Global Bank", src: "/references/golden.png" },
      { name: "DestekBank", src: "/references/destekbank.png" },
      { name: "MUFG", src: "/references/mufg.png" },
      { name: "Papara", src: "/references/papara.png" },
      { name: "QPay", src: "/references/qpay.png" },
    ],
  },
  {
    title: "Resmi Kurumlar",
    logos: [
      { name: "Cumhurbaşkanlığı", src: "/references/cb.png" },
      { name: "İçişleri Bakanlığı", src: "/references/icisleri.png" },
      { name: "ETKB", src: "/references/etkb.png" },
      { name: "Ticaret Bakanlığı", src: "/references/ticaret.png" },
      { name: "İBB", src: "/references/ibb.png" },
      { name: "Boğaziçi Üniversitesi", src: "/references/bogazici.png" },
      { name: "TSE", src: "/references/tse.png" },
      { name: "TRT", src: "/references/trt.png" },
    ],
  },
  {
    title: "Telekomünikasyon",
    logos: [
      { name: "Türk Telekom", src: "/references/tt.png" },
      { name: "Turhost", src: "/references/turhost.png" },
      { name: "İşnet", src: "/references/isnet.png" },
      { name: "Doruknet", src: "/references/doruknet.png" },
    ],
  },
  {
    title: "Özel Şirketler",
    logos: [
      { name: "Doğuş Grubu", src: "/references/dogus.png" },
      { name: "Eczacıbaşı", src: "/references/eczacibasi.png" },
      { name: "Borusan Holding", src: "/references/borusan.png" },
      { name: "KoçSistem", src: "/references/kocsistem.png" },
    ],
  },
]

export default function ReferanslarPage() {
  return (
    <main className="bg-[#f5f7fa] min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            Güvenilir Kurumsal Referanslar
          </h1>
          <p className="text-blue-100 text-lg">
            Finans kuruluşlarından kamu kurumlarına kadar
            yüzlerce organizasyon LSG Teknoloji’yi tercih ediyor.
          </p>

          <div className="mt-10 text-4xl font-bold">
            250+ Kurumsal Referans
          </div>
        </div>
      </section>

      {/* LOGO SECTIONS */}
      {sections.map((section, index) => (
        <section key={index} className="py-20">
          <div className="max-w-6xl mx-auto px-6">

            <div className="mb-12 text-center">
              <h2 className="text-2xl font-semibold text-slate-800">
                {section.title}
              </h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center">
              {section.logos.map((logo, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex items-center justify-center group"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={140}
                    height={60}
                    className="object-contain grayscale group-hover:grayscale-0 transition duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

          </div>
        </section>
      ))}

      {/* TRUST METRICS */}
      <section className="bg-white border-t py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-3xl font-bold text-indigo-900">99.99%</div>
            <p className="text-slate-600 mt-2">Kesintisiz Hizmet Oranı</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-indigo-900">24/7</div>
            <p className="text-slate-600 mt-2">Uzman Teknik Destek</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-indigo-900">ISO Uyumlu</div>
            <p className="text-slate-600 mt-2">Kurumsal Güvenlik Standartları</p>
          </div>
        </div>
      </section>

    </main>
  )
}
