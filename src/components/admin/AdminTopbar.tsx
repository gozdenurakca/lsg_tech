"use client";

import { signOut, useSession } from "next-auth/react";

export default function AdminTopbar() {
  const { data: session } = useSession();

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
      <div>
        <h1 className="text-lg font-semibold text-slate-800">Admin Paneli</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm text-slate-600">{session?.user?.name}</div>

        <button
          onClick={() => signOut({ callbackUrl: "/giris" })}
          className="text-sm font-medium text-red-600 hover:underline"
        >
          Çıkış Yap
        </button>
      </div>
    </header>
  );
}
