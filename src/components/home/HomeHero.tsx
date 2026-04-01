import Image from "next/image";
import Link from "next/link";
import { ICONS } from "@/lib/icons";
const ArrowIcon = ICONS.arrowRight;
const CheckIcon = ICONS.check;
const ShieldIcon = ICONS.shield;
const ServerIcon = ICONS.server;
const GlobeIcon = ICONS.globe;

export default function HomeHero() {
  return (
    <section className="relative bg-[#020A18] pt-24 pb-0 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px",
          }}
        />

        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-indigo-700/10 blur-[140px] rounded-full" />

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_30%,#020A18_100%)]" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(99,179,237,0.6) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 65%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="pb-8">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[12px] font-semibold tracking-wide"
            style={{
              background: "rgba(16,185,129,0.06)",
              border: "1px solid rgba(16,185,129,0.18)",
              color: "rgba(110,231,183,0.85)",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            DigiCert Yetkili Türkiye Partneri
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[540px]">
          <div className="pb-16">
            <h1
              className="text-[clamp(40px,5.5vw,70px)] font-extrabold text-white leading-[1.02] tracking-[-0.02em] mb-6"
              style={{ textShadow: "0 0 80px rgba(59,130,246,0.15)" }}
            >
              İşinizi dijitale
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #38bdf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                güvenle taşıyın
              </span>
            </h1>

            <p className="text-[16px] text-blue-100/70 leading-[1.75] max-w-[420px] mb-10">
              SSL sertifikası, web hosting, alan adı, siber güvenlik ve kurumsal
              çözümlerle işletmenizin tüm dijital altyapısını tek panelden
              yönetin.
            </p>

            <ul className="space-y-3 mb-11">
              {[
                "Hepsi bir arada: SSL, hosting, domain, güvenlik",
                "DigiCert ve global CA'lardan resmi sertifikalar",
                "7/24 Türkçe teknik destek",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 text-[14px] text-blue-100/60"
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(52,211,153,0.1)",
                      border: "1px solid rgba(52,211,153,0.25)",
                    }}
                  >
                    <CheckIcon size={12} className="text-emerald-400" />{" "}
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mb-12">
              <Link
                href="#products"
                className="group inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-all hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #4f46e5)",
                  boxShadow:
                    "0 8px 32px rgba(37,99,235,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                Ürünleri Keşfet
                <ArrowIcon
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/#teklif"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-all hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                Ücretsiz Teklif Al
              </Link>
            </div>

            <div className="flex gap-0">
              {[
                { val: "5,000+", lbl: "Aktif müşteri" },
                { val: "99.9%", lbl: "Uptime" },
                { val: "15+", lbl: "Yıl deneyim" },
              ].map((m, i) => (
                <div key={m.lbl} className="flex items-stretch gap-0">
                  {i > 0 && (
                    <div className="w-px mx-6 self-stretch bg-blue-900/50" />
                  )}
                  <div>
                    <div className="text-[20px] font-extrabold text-white tracking-tight">
                      {m.val}
                    </div>
                    <div className="text-[11px] text-blue-200/35 mt-0.5">
                      {m.lbl}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:flex items-end justify-center h-full pt-6">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full -z-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
              }}
            />

            <div
              className="relative w-full max-w-[500px] h-[450px] rounded-3xl overflow-hidden"
              style={{
                boxShadow:
                  "0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(99,179,237,0.08)",
              }}
            >
              <Image
                src="/images/resim1.png"
                alt="LSG Dijital Çözümler"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020A18]/80 via-[#020A18]/10 to-transparent" />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" }}
              />
            </div>

            <div
              className="absolute top-10 -left-8 rounded-2xl px-4 py-3.5 flex items-center gap-3"
              style={{
                background: "rgba(15,35,70,0.75)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(99,179,237,0.12)",
                boxShadow:
                  "0 16px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(52,211,153,0.1)",
                  border: "1px solid rgba(52,211,153,0.2)",
                }}
              >
                <ShieldIcon size={17} className="text-emerald-400" />{" "}
              </div>
              <div>
                <div className="text-[10px] text-blue-200/35 font-medium tracking-wide uppercase">
                  SSL Durumu
                </div>
                <div className="text-[13px] font-bold text-white">
                  Güvende ✓
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-14 -right-8 rounded-2xl px-4 py-3.5 flex items-center gap-3"
              style={{
                background: "rgba(7,21,41,0.85)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(99,179,237,0.12)",
                boxShadow:
                  "0 16px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(99,102,241,0.12)",
                  border: "1px solid rgba(99,102,241,0.22)",
                }}
              >
                <ServerIcon size={17} className="text-indigo-400" />{" "}
              </div>
              <div>
                <div className="text-[10px] text-blue-200/35 font-medium tracking-wide uppercase">
                  Hosting
                </div>
                <div className="text-[13px] font-bold text-white">
                  99.9% uptime
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-44 right-6 rounded-2xl px-4 py-3.5 flex items-center gap-3"
              style={{
                background: "rgba(7,21,41,0.85)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(99,179,237,0.12)",
                boxShadow:
                  "0 16px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(56,189,248,0.1)",
                  border: "1px solid rgba(56,189,248,0.2)",
                }}
              >
                {/* domain */}
                <GlobeIcon size={17} className="text-sky-400" />{" "}
              </div>
              <div>
                <div className="text-[10px] text-blue-200/35 font-medium tracking-wide uppercase">
                  Domain
                </div>
                <div className="text-[13px] font-bold text-white">
                  Global DNS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-14 bg-gradient-to-b from-[#0B1426] via-[#0E1C3A] to-[#0F254F]" />
    </section>
  );
}
