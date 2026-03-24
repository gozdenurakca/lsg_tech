/*
onboarding anlatımı
*/

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Aklınızdaki ismi yazın",
    desc: "Marka adınızı, isminizi ya da bir fikri arama çubuğuna girin. Sistem uygun uzantıları anlık listeler.",
  },
  {
    num: "02",
    title: "Uzantınızı seçin",
    desc: ".com.tr, .com, .net... hangisi size uygun? Türkiye odaklı bir işletme için .com.tr genellikle ilk tercih.",
  },
  {
    num: "03",
    title: "Birden fazlasını sepete alın",
    desc: "Marka koruması için aynı ismin farklı uzantılarını kaydedin. Rakipler sizi taklit etmeye çalışabilir.",
  },
  {
    num: "04",
    title: "Ödemeyi tamamlayın",
    desc: "Güvenli ödeme sonrası alan adınız dakikalar içinde aktif olur. Fatura otomatik gelir.",
  },
  {
    num: "05",
    title: "Otomatik yenilemeyi açık tutun",
    desc: "Süre dolma riski almayın. Otomatik yenileme ile alan adınız her zaman sizin.",
  },
];

export default function DomainHowTo() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/domain/results?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <section className="bg-white py-20 px-6 border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
            İlk sorgudan aktif domaine:{" "}
            <span className="text-blue-600">5 dakika</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            Teknik bilgiye gerek yok. Aklınızdaki ismi yazın, seçin, ödeyin —
            alan adınız hemen hazır.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {STEPS.map(({ num, title, desc }) => (
            <div key={num} className="relative">
              <div className="hidden lg:block absolute top-5 left-full w-4 h-px bg-slate-200 z-0" />

              <div className="bg-[#F7F9FC] rounded-2xl p-5 h-full flex flex-col gap-3 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200">
                <span className="text-2xl font-black text-slate-200 leading-none">
                  {num}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-800 leading-snug mb-1.5">
                    {title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl px-8 py-10 text-center">
          <p className="text-white font-bold text-lg mb-2">Hemen başlayın</p>
          <p className="text-slate-400 text-sm mb-6">
            Alan adınızı şimdi sorgulayın, müsaitse 3 dakikada kaydedin.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex max-w-md mx-auto rounded-xl overflow-hidden border border-white/10 bg-white/5"
          >
            <div className="flex items-center pl-4 text-slate-400">
              <Search size={16} />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="orneksite.com.tr"
              className="flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder-slate-500"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-colors"
            >
              Sorgula
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
