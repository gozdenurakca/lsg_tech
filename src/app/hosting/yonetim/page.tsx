import Image from "next/image";
import Link from "next/link";

export default function YonetimPage() {
  return (
    <main className="bg-[#f5f7fa] min-h-screen">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-32 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <p className="uppercase tracking-[0.25em] text-xs text-blue-400 mb-6">
            Leadership
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Yönetim Ekibimiz
          </h1>

          <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed">
            LSG Teknoloji’nin stratejik vizyonunu şekillendiren, güvenlik ve
            teknoloji alanında deneyimli lider kadromuz.
          </p>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/team/omer.png"
              alt="Ömer Güneş"
              width={420}
              height={420}
              className="rounded-3xl shadow-2xl object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">CEO’dan Mesaj</h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              LSG Teknoloji olarak dijital güvenliği yalnızca bir ürün değil,
              kurumsal sürdürülebilirliğin temel unsuru olarak görüyoruz.
              Amacımız Türkiye ve global pazarda güvenliğin standartlarını
              yükseltmektir.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Teknoloji, güven ve inovasyonu birleştirerek müşterilerimize
              sürdürülebilir çözümler sunuyoruz.
            </p>

            <div className="mt-10 border-l-4 border-blue-900 pl-6">
              <div className="font-semibold text-lg">Ömer Güneş</div>
              <div className="text-slate-500 text-sm">Kurucu & CEO</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-20">
            Yönetim Kurulu & Üst Düzey Kadro
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
            {[
              {
                name: "Ezgi Göz Güven",
                title: "Chief Executive Officer",
                bio: "Stratejik vizyon, global büyüme ve kurumsal liderlik.",
              },
              {
                name: "Alper Burak Yakak",
                title: "Chief Technology Officer",
                bio: "Altyapı, güvenlik mimarisi ve AR-GE yönetimi.",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-lg border border-slate-200 p-10 text-center transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-8" />

                <h3 className="text-xl font-bold mb-2">{member.name}</h3>

                <div className="text-blue-900 font-semibold mb-4 text-sm uppercase tracking-wide">
                  {member.title}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-28 border-t">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Kurumsal Yönetişim</h2>

          <p className="text-slate-600 leading-relaxed">
            LSG Teknoloji; şeffaflık, hesap verebilirlik ve etik değerlere
            bağlılık prensipleri doğrultusunda yönetilmektedir. Yönetim yapımız
            sürdürülebilir büyüme ve global güvenlik standartlarına uyum üzerine
            kuruludur.
          </p>

          <Link
            href="/kurumsal/misyon-vizyon"
            className="inline-block mt-12 bg-blue-900 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-800 transition shadow-lg"
          >
            Kurumsal İlkelerimizi İnceleyin →
          </Link>
        </div>
      </section>
    </main>
  );
}
