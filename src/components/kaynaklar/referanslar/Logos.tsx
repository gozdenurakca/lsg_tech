"use client";

import Image from "next/image";

const sections = [
  {
    title: "Finans Kuruluşları",
    tag: "Bankacılık & Fintek",
    accent: "#0EA5E9",
    logos: [
      { name: "TCMB", src: "/references/tcmb.png" },
      { name: "Ziraat Bankası", src: "/references/ziraat.png" },
      { name: "VakıfBank", src: "/references/vakifbank.png" },
      { name: "Halkbank", src: "/references/halkbank.png" },
      { name: "Şekerbank", src: "/references/sekerbank.png" },
      { name: "Golden Global", src: "/references/golden.png" },
      { name: "DestekBank", src: "/references/destekbank.png" },
      { name: "MUFG", src: "/references/mufg.png" },
      { name: "Papara", src: "/references/papara.png" },
      { name: "QPay", src: "/references/qpay.png" },
    ],
  },
  {
    title: "Resmi Kurumlar",
    tag: "Kamu & Üniversiteler",
    accent: "#6366F1",
    logos: [
      { name: "Cumhurbaşkanlığı", src: "/references/cb.png" },
      { name: "İçişleri Bakanlığı", src: "/references/icisleri.png" },
      { name: "ETKB", src: "/references/etkb.png" },
      { name: "Ticaret Bakanlığı", src: "/references/ticaret.png" },
      { name: "İBB", src: "/references/ibb.png" },
      { name: "Boğaziçi Üniv.", src: "/references/bogazici.png" },
      { name: "TSE", src: "/references/tse.png" },
      { name: "TRT", src: "/references/trt.png" },
    ],
  },
  {
    title: "Telekomünikasyon",
    tag: "Telekom & Altyapı",
    accent: "#10B981",
    logos: [
      { name: "Türk Telekom", src: "/references/tt.png" },
      { name: "Turhost", src: "/references/turhost.png" },
      { name: "İşnet", src: "/references/isnet.png" },
    ],
  },
  {
    title: "Özel Şirketler",
    tag: "Kurumsal & Holding",
    accent: "#F59E0B",
    logos: [
      { name: "Doğuş Grubu", src: "/references/dogus.png" },
      { name: "Eczacıbaşı", src: "/references/eczacibasi.png" },
      { name: "Borusan Holding", src: "/references/borusan.png" },
      { name: "KoçSistem", src: "/references/kocsistem.png" },
    ],
  },
];

const CSS = `
  .logo-card{transition:transform .25s,box-shadow .25s,border-color .25s}
  .logo-card:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(0,0,0,0.08)}
`;

export default function Logos() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      {sections.map((section, si) => {
        const isDark = si % 2 === 1;
        return (
          <section
            key={si}
            className="relative py-24 overflow-hidden"
            style={{ background: isDark ? "#F7F9FF" : "#FFFFFF" }}
          >
            {isDark && (
              <div
                className="absolute inset-0 pointer-events-none opacity-35"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
            )}

            <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-5 mb-14">
                <div className="flex-shrink-0">
                  <p
                    className="text-[10px] uppercase tracking-widest font-medium mb-1"
                    style={{
                      color: section.accent,
                      fontFamily: "'DM Sans',sans-serif",
                    }}
                  >
                    {section.tag}
                  </p>
                  <h2
                    className="text-2xl font-bold text-slate-900"
                    style={{ fontFamily: "'Syne',sans-serif" }}
                  >
                    {section.title}
                  </h2>
                </div>
                <div
                  className="flex-1 h-[1px]"
                  style={{
                    background: `linear-gradient(90deg,${section.accent}40,transparent)`,
                  }}
                />
                <span
                  className="text-xs text-slate-400"
                  style={{ fontFamily: "'DM Sans',sans-serif" }}
                >
                  {section.logos.length} referans
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {section.logos.map((logo, li) => (
                  <div
                    key={li}
                    className="logo-card relative bg-white rounded-2xl border border-slate-100 p-7 flex items-center justify-center group overflow-hidden"
                    style={{ minHeight: 96 }}
                  >
                    <div
                      className="absolute top-0 left-4 right-4 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                      style={{
                        background: `linear-gradient(90deg,transparent,${section.accent},transparent)`,
                      }}
                    />

                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={130}
                      height={55}
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
