"use client";

import Link from "next/link";
import { ICONS } from "@/lib/icons";

const steps = ["Başvuru", "Teknik İnceleme", "Entegrasyon", "Canlıya Geç"];

const SuccessIcon = ICONS.success;
export default function Success() {
  return (
    <main
      className="min-h-screen flex items-center justify-center p-6"
      style={{ background: "#020A18" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <div
        className="fixed inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#4A90D9 1px,transparent 1px),linear-gradient(to bottom,#4A90D9 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(99,102,241,0.18) 0%, transparent 70%)",
        }}
      />

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
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg,transparent,#6366F1,#818CF8,transparent)",
          }}
        />

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

        <p
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "#818CF8",
            marginBottom: 12,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              display: "block",
              width: 20,
              height: 1,
              background: "#818CF8",
              opacity: 0.4,
            }}
          />
          Başvuru Alındı
          <span
            style={{
              display: "block",
              width: 20,
              height: 1,
              background: "#818CF8",
              opacity: 0.4,
            }}
          />
        </p>

        <h1
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: 36,
            fontWeight: 800,
            color: "#E2EFFF",
            lineHeight: 1.1,
            letterSpacing: "-.02em",
            marginBottom: 16,
          }}
        >
          Teknik ekibimiz
          <br />
          sizinle iletişime geçecek.
        </h1>

        <p
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 14,
            fontWeight: 300,
            color: "rgba(186,214,255,0.65)",
            lineHeight: 1.7,
            marginBottom: 32,
          }}
        >
          Hosting Partner başvurunuz alındı. Teknik değerlendirme süreci
          <span style={{ color: "#818CF8" }}> 24–48 iş saati </span>
          içinde tamamlanır.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 12,
            padding: "20px 0",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            marginBottom: 32,
          }}
        >
          {steps.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    i === 0
                      ? "linear-gradient(135deg,#6366F1,#818CF8)"
                      : "rgba(255,255,255,0.06)",
                  border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)",
                  fontFamily: "'Syne',sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  color: i === 0 ? "#fff" : "rgba(186,214,255,0.3)",
                }}
              >
                {i === 0 ? "✓" : i + 1}
              </div>
              <span
                style={{
                  fontSize: 11,
                  fontFamily: "'DM Sans',sans-serif",
                  color: i === 0 ? "#A5B4FC" : "rgba(186,214,255,0.3)",
                }}
              >
                {s}
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/hosting/hosting-partner"
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 13,
            fontWeight: 500,
            color: "rgba(186,214,255,0.5)",
          }}
        >
          ← Hosting Partner sayfasına dön
        </Link>
      </div>
    </main>
  );
}
