"use client";

import { useEffect, useState } from "react";
import { ICONS } from "@/lib/icons";

export default function PricingNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Sadece 50px'den fazla kaydırıldıysa tetikle
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const links = [
    { label: "DV SSL", href: "#dv-pricing" },
    { label: "OV SSL", href: "#ov-pricing" },
    { label: "EV SSL", href: "#ev-pricing" },
    { label: "Wildcard SSL", href: "#wildcard-pricing" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100"
          : "bg-white border-b border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
        <button
          onClick={scrollTop}
          className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-500 flex items-center justify-center transition-all flex-shrink-0"
          title="Başa Dön"
        >
          <ICONS.arrowUp size={16} />
        </button>

        <div className="w-px h-6 bg-slate-200 flex-shrink-0 hidden md:block" />

        <div className="flex flex-1 items-center gap-2 overflow-x-auto scrollbar-hide">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap px-4 py-2 rounded-xl text-[13px] font-bold text-slate-600 hover:text-blue-900 hover:bg-blue-50 transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
