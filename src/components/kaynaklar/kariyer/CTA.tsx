"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-28 bg-[#F7F9FF] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{
        backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[.18em] text-sky-600 font-medium mb-6" style={{ fontFamily: "'DM Sans',sans-serif" }}>
          Hazır mısın?
        </p>
        <h2 className="text-4xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Syne',sans-serif" }}>
          Ekibimize Katılmak <br />
          <span className="text-sky-600">İçin Başvur</span>
        </h2>
        <p className="text-sm text-slate-500 mb-10 max-w-md mx-auto" style={{ fontFamily: "'DM Sans',sans-serif" }}>
          Aradığın pozisyonu göremiyorsan spontan başvurunu ilet — uygun bir
          açık pozisyon oluştuğunda seni ilk biz ararız.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#pozisyonlar"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-sm text-white transition hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#0EA5E9,#38BDF8)", fontFamily: "'DM Sans',sans-serif" }}>
            Açık Pozisyonlar
          </a>
          <Link href="/iletisim"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-sm transition"
            style={{ border: "1px solid #CBD5E1", color: "#475569", fontFamily: "'DM Sans',sans-serif" }}>
            Spontan Başvuru →
          </Link>
        </div>
      </div>
    </section>
  );
}
