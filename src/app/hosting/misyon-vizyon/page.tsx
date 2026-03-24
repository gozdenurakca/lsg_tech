import Link from "next/link";
import { ICONS } from "@/lib/icons";

const {
  target: TargetIcon,
  eye: EyeIcon,
  shieldCheck: ShieldCheckIcon,
  globe: GlobeIcon,
  trendingUp: TrendingUpIcon,
} = ICONS;
export default function MisyonVizyonPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="uppercase tracking-widest text-blue-300 text-sm mb-6">
            Kurumsal
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Misyon & Vizyon
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed">
            Dijital güvenliği sürdürülebilir, ölçeklenebilir ve erişilebilir
            hale getirmek için çalışıyoruz.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 px-4 py-2 rounded-full text-sm mb-6">
            <TargetIcon className="w-4 h-4" />
            Misyonumuz
          </div>

          <h2 className="text-3xl font-bold mb-6">
            İşletmeler için güvenli dijital altyapılar oluşturmak
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            LSG Teknoloji olarak misyonumuz; işletmelerin dijital varlıklarını
            koruyan, kesintisiz çalışan ve global standartlara uygun güvenlik
            çözümleri sunmaktır.
          </p>

          <p className="text-slate-600 leading-relaxed">
            SSL sertifikaları, web güvenlik servisleri ve kurumsal siber
            güvenlik altyapıları ile müşterilerimizin risklerini minimize eder,
            operasyonel sürekliliğini garanti altına alırız.
          </p>
        </div>

        <div className="bg-slate-50 rounded-3xl p-12 border shadow-sm">
          <ShieldCheckIcon className="w-10 h-10 text-blue-900 mb-6" />
          <h3 className="text-xl font-semibold mb-4">Güven Odaklı Yaklaşım</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Her çözümümüzün merkezinde veri güvenliği, şeffaflık ve
            sürdürülebilir teknoloji bulunur.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-28 border-t">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="bg-white rounded-3xl p-12 border shadow-sm">
            <EyeIcon className="w-10 h-10 text-blue-900 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Uzun Vadeli Hedef</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Türkiye ve bölgesinde dijital güvenlik çözümlerinde referans marka
              olmak.
            </p>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 px-4 py-2 rounded-full text-sm mb-6">
              <EyeIcon className="w-4 h-4" />
              Vizyonumuz
            </div>

            <h2 className="text-3xl font-bold mb-6">
              Dijital güvenliğin stratejik iş ortağı olmak
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Vizyonumuz; sadece ürün sağlayan bir firma değil, müşterilerinin
              güvenlik stratejisini şekillendiren bir teknoloji partneri
              olmaktır.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Global iş ortaklıkları, yenilikçi çözümler ve güçlü teknik
              altyapımız ile sürdürülebilir güvenlik ekosistemi oluşturmayı
              hedefliyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-28 text-center">
        <h2 className="text-3xl font-bold mb-16">Stratejik Önceliklerimiz</h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <GlobeIcon className="w-8 h-8 text-blue-900 mx-auto mb-6" />
            <h3 className="font-semibold mb-3">Global Uyum</h3>
            <p className="text-slate-600 text-sm">
              Uluslararası güvenlik standartlarına tam uyum.
            </p>
          </div>

          <div>
            <ShieldCheckIcon className="w-8 h-8 text-blue-900 mx-auto mb-6" />
            <h3 className="font-semibold mb-3">Siber Dayanıklılık</h3>
            <p className="text-slate-600 text-sm">
              Risk azaltma ve saldırı yüzeyini minimize etme.
            </p>
          </div>

          <div>
            <TrendingUpIcon className="w-8 h-8 text-blue-900 mx-auto mb-6" />
            <h3 className="font-semibold mb-3">Sürdürülebilir Büyüme</h3>
            <p className="text-slate-600 text-sm">
              Ölçeklenebilir ve uzun vadeli güvenlik mimarileri.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Güvenli Dijital Geleceği Birlikte İnşa Edelim
          </h2>

          <Link
            href="/iletisim"
            className="inline-block bg-white text-blue-900 px-12 py-4 rounded-xl font-semibold hover:bg-blue-50 transition shadow-xl"
          >
            Bizimle İletişime Geç →
          </Link>
        </div>
      </section>
    </main>
  );
}
