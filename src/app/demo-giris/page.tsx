"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

function DemoLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);
    setLoading(true);

    try {
      const res = await fetch("/api/demo-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push(redirect);
        router.refresh();
      } else {
        setError(true);
        setPassword("");
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-12">
            <Image
              src="/images/logo.png"
              alt="TRLSG"
              fill
              className="object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="text-center mb-6">
            {/* Lock icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-xl mb-4">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-white font-bold text-xl">Demo Erişimi</h1>
            <p className="text-slate-400 text-sm mt-1">
              Bu demo özel davetlilere açıktır.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Erişim şifresini girin"
                autoFocus
                className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500 transition text-sm ${
                  error
                    ? "border-red-500/60 focus:ring-red-500"
                    : "border-white/10"
                }`}
              />
              {error && (
                <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Hatalı şifre. Tekrar deneyin.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition text-sm"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Kontrol ediliyor...
                </span>
              ) : (
                "Giriş Yap"
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-slate-600 text-xs mt-6">
          Erişim için{" "}
          <a
            href="mailto:info@trlsg.com"
            className="text-slate-500 hover:text-slate-400 underline"
          >
            iletişime geçin
          </a>
        </p>
      </div>
    </div>
  );
}

export default function DemoGirisPage() {
  return (
    <Suspense>
      <DemoLoginForm />
    </Suspense>
  );
}
