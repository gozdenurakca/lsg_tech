"use client";

import Link from "next/link";
import { ICONS } from "@/lib/icons";

const steps = ["Başvuru", "Teknik İnceleme", "Entegrasyon", "Canlıya Geç"];

const SuccessIcon = ICONS.success;
const CheckIcon = ICONS.check;

export default function Success() {
  return (
    <main
      className="min-h-screen flex items-center justify-center p-6"
      style={{ background: "#020A18" }}
    >
      <div
        className="relative text-center max-w-lg w-full rounded-3xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.09)",
          padding: "56px 48px",
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8"
          style={{
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.3)",
          }}
        >
          <SuccessIcon
            size={36}
            style={{ color: "#818CF8" }}
            strokeWidth={1.5}
          />
        </div>

        <h1 className="text-3xl font-bold text-blue-100 mb-4">
          Teknik ekibimiz sizinle iletişime geçecek.
        </h1>

        <div className="flex justify-center gap-4">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 border border-white/20">
                {i === 0 ? <CheckIcon size={12} /> : i + 1}
              </div>
              <span className="text-xs text-blue-200/50">{s}</span>
            </div>
          ))}
        </div>

        <Link href="/hosting/hosting-partner">
          ← Hosting Partner sayfasına dön
        </Link>
      </div>
    </main>
  );
}
