import Link from "next/link";
import {
  Zap,
  Sparkles,
  ArrowRight,
  Shield,
  BadgeCheck,
  Lock,
} from "lucide-react";

interface Stat {
  k: string;
  v: string;
}

interface Props {
  badge: string;
  title: string;
  description: string;

  cardTitle?: string;
  cardDescription?: string;

  stats?: Stat[];

  featuredSlug?: string;

  note?: string;
}

export default function SSLHero({
  badge,
  title,
  description,
  cardTitle = "HTTPS Güven Kilidi",
  cardDescription = "Ziyaretçi güveni + SEO avantajı + hızlı aktivasyon",
  stats = [
    { k: "Aktivasyon", v: "5–10 dk" },
    { k: "Şifreleme", v: "256-bit" },
    { k: "Uyumluluk", v: "Modern tarayıcılar" },
    { k: "Garanti", v: "Temel güvence" },
  ],
  featuredSlug,
  note = "* SSL sertifikaları sitenizi HTTPS ile korur.",
}: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950" />
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-indigo-500/30 blur-3xl rounded-full" />
      <div className="absolute -bottom-48 -left-44 w-[560px] h-[560px] bg-sky-500/20 blur-3xl rounded-full" />
      <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative max-w-6xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm mb-6">
              <Zap className="w-4 h-4 text-sky-200" />

              <span className="text-white/90">{badge}</span>

              <span className="ml-1 inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/10 border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                Premium güven
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              {title}
            </h1>

            <p className="text-blue-100/90 text-lg leading-relaxed mb-10 max-w-xl">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Link
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 bg-white text-blue-950 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Paketleri Gör
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 border border-white/30 bg-white/5 px-8 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all"
              >
                Uzmanla Görüş
              </Link>
            </div>

            {/* Feature Pills */}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-white/80">
              {[
                { icon: BadgeCheck, text: "256-bit şifreleme" },
                { icon: Shield, text: "Tarayıcı uyumu" },
                { icon: Lock, text: "HTTPS kilidi" },
              ].map((i) => {
                const Icon = i.icon;

                return (
                  <span
                    key={i.text}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/10"
                  >
                    <Icon className="w-4 h-4 text-sky-200" />
                    {i.text}
                  </span>
                );
              })}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500/40 to-indigo-500/40 blur-xl rounded-3xl" />

            <div className="relative bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-10">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-white font-bold text-lg">
                    {cardTitle}
                  </div>

                  <div className="text-white/80 text-sm mt-1">
                    {cardDescription}
                  </div>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-sky-200" />
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl bg-white/5 border border-white/10 p-4"
                  >
                    <div className="text-xs text-white/70">{s.k}</div>

                    <div className="text-sm font-semibold text-white mt-1">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured Button */}
              {featuredSlug && (
                <Link
                  href={`/ssl/${featuredSlug}`}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-95 transition"
                >
                  Önerilen Paketi İncele
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}

              {/* Note */}
              <div className="mt-4 text-[11px] text-white/70">{note}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
