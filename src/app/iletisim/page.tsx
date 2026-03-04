import Link from "next/link";

export default function IletisimPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Güvenli Dijital Gelecek İçin <br /> Bizimle İletişime Geçin
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            SSL, PKI, Code Signing ve Enterprise güvenlik çözümlerimiz hakkında
            uzman ekibimizle görüşün.
          </p>
        </div>
      </section>

      {/* ================= CONTACT OPTIONS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {/* Sales */}
          <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4">Satış Ekibi</h3>
            <p className="text-gray-600 mb-6">
              Kurumsal çözümler ve fiyat teklifleri için satış ekibimizle görüşün.
            </p>
            <p className="font-semibold text-gray-900">sales@lsgtech.com</p>
            <p className="text-gray-600">+90 (850) 000 00 00</p>
          </div>

          {/* Support */}
          <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4">Teknik Destek</h3>
            <p className="text-gray-600 mb-6">
              SSL kurulumu, CSR, PKI ve güvenlik konularında destek alın.
            </p>
            <p className="font-semibold text-gray-900">support@lsgtech.com</p>
            <p className="text-gray-600">Hafta içi 09:00 – 18:00</p>
          </div>

          {/* Enterprise */}
          <div className="p-8 rounded-2xl border-2 border-blue-600 bg-blue-50 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4 text-blue-800">Enterprise 7/24</h3>
            <p className="text-gray-700 mb-6">
              Enterprise müşterilerimize özel 7/24 öncelikli destek.
            </p>
            <Link
              href="/iletisim"
              className="inline-block bg-blue-700 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-800 transition"
            >
              Enterprise Destek Talebi
            </Link>
          </div>

        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Bize Mesaj Gönderin</h2>
            <p className="text-gray-600 mt-4">
              Uzmanlarımız en kısa sürede sizinle iletişime geçecektir.
            </p>
          </div>

          <form className="bg-white p-10 rounded-2xl shadow-lg space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Ad Soyad</label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">E-posta</label>
                <input
                  type="email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Konu</label>
              <select className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Genel Bilgi</option>
                <option>Fiyat Teklifi</option>
                <option>Teknik Destek</option>
                <option>Enterprise Çözüm</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Mesaj</label>
              <textarea
                rows={5}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition"
            >
              Mesajı Gönder
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
