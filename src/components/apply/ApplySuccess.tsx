"use client";

import Link from "next/link";
import { ICONS } from "@/lib/icons";

export default function ApplySuccess() {
  const SuccessIcon = ICONS.success;

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-[#020A18]">
      <div className="success-card text-center max-w-lg">
        <SuccessIcon size={36} className="mx-auto mb-6 text-blue-400" />

        <p className="success-eyebrow">Başvuru Alındı</p>

        <h1 className="success-title">Harika bir adım attınız</h1>

        <p className="success-body">
          Partner ekibimiz başvurunuzu inceleyecek ve 24 saat içinde sizinle
          iletişime geçecektir.
        </p>

        <Link href="/kurumsal/bayilik" className="text-blue-400">
          ← Bayilik sayfasına dön
        </Link>
      </div>
    </main>
  );
}
