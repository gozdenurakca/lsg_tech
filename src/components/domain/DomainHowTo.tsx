/*
onboarding anlatımı
*/

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Icon from "@/components/ui/Icon";

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
    desc: "Marka koruması için aynı ismin farklı uzantılarını kaydedin.",
  },
  {
    num: "04",
    title: "Ödemeyi tamamlayın",
    desc: "Güvenli ödeme sonrası alan adınız dakikalar içinde aktif olur.",
  },
  {
    num: "05",
    title: "Otomatik yenilemeyi açık tutun",
    desc: "Süre dolma riski almayın.",
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {STEPS.map(({ num, title, desc }) => (
            <div key={num} className="bg-[#F7F9FC] rounded-2xl p-5 border">
              <span className="text-2xl font-black text-slate-200">{num}</span>
              <p className="text-sm font-bold mt-2">{title}</p>
              <p className="text-xs text-slate-500">{desc}</p>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex max-w-md mx-auto rounded-xl overflow-hidden border bg-white"
        >
          <div className="flex items-center pl-4 text-slate-400">
            <Icon name="search" size={16} />
          </div>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="orneksite.com.tr"
            className="flex-1 px-3 py-3"
          />

          <button className="px-5 bg-blue-600 text-white font-bold">
            Sorgula
          </button>
        </form>
      </div>
    </section>
  );
}
