"use client";

import { useState } from "react";
import { ICONS } from "@/lib/icons";

const ArrowIcon = ICONS.arrowRight;
const MailIcon = ICONS.mail;
const BuildingIcon = ICONS.building;
const UserIcon = ICONS.users;
const MessageIcon = ICONS.message;

export default function HomeContact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    // TODO: API call
    setSent(true);
  }

  return (
    <section
      id="teklif"
      className="relative overflow-hidden bg-[#040E21] py-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.5)_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-300/40 font-semibold mb-5">
              Ücretsiz Danışmanlık
            </p>

            <h2 className="text-[clamp(32px,4vw,52px)] font-bold text-white leading-[1.1] tracking-tight mb-6">
              Doğru SSL çözümü
              <br />
              <span className="text-blue-400">sizin için seçelim</span>
            </h2>

            <p className="text-[15px] text-blue-200/50 leading-relaxed mb-10 max-w-sm">
              Uzman ekibimiz ihtiyacınızı analiz eder, bütçenize ve altyapınıza
              en uygun çözümü 24 saat içinde sunar.
            </p>

            <div className="space-y-4">
              {[
                "24 saat içinde uzman geri dönüşü",
                "Taahhütsüz, ücretsiz danışmanlık",
                "Altyapınıza özel fiyat teklifi",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  </div>
                  <span className="text-[14px] text-blue-200/60">{t}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex gap-8">
              {[
                { value: "10K+", label: "Aktif sertifika" },
                { value: "15+", label: "Yıllık tecrübe" },
                { value: "24s", label: "Ortalama yanıt" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[28px] font-bold text-white">
                    {s.value}
                  </div>
                  <div className="text-[11px] text-blue-200/35 mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/[0.04] border border-white/8 rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-[0_32px_80px_rgba(0,0,0,0.4)]">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center mb-6">
                  <MailIcon size={24} className="text-blue-400" />{" "}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Talebiniz Alındı
                </h3>
                <p className="text-[14px] text-blue-200/50">
                  24 saat içinde ekibimiz size ulaşacak.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-[17px] font-bold text-white mb-6">
                  Bilgilerinizi bırakın
                </h3>

                <div className="space-y-4">
                  <div className="relative">
                    <UserIcon
                      size={14}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/30"
                    />
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ad Soyad"
                      className="w-full bg-white/5 border border-white/8 rounded-xl pl-10 pr-4 py-3.5 text-[14px] text-white placeholder:text-blue-200/25 focus:outline-none focus:border-blue-500/40 focus:bg-white/8 transition"
                    />
                  </div>

                  <div className="relative">
                    <BuildingIcon
                      size={14}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/30"
                    />
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Şirket"
                      className="w-full bg-white/5 border border-white/8 rounded-xl pl-10 pr-4 py-3.5 text-[14px] text-white placeholder:text-blue-200/25 focus:outline-none focus:border-blue-500/40 focus:bg-white/8 transition"
                    />
                  </div>

                  <div className="relative">
                    <MailIcon
                      size={14}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/30"
                    />
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="E-Posta"
                      className="w-full bg-white/5 border border-white/8 rounded-xl pl-10 pr-4 py-3.5 text-[14px] text-white placeholder:text-blue-200/25 focus:outline-none focus:border-blue-500/40 focus:bg-white/8 transition"
                    />
                  </div>

                  <div className="relative">
                    <MessageIcon
                      size={14}
                      className="absolute left-4 top-4 text-blue-300/30"
                    />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Hangi güvenlik çözümü ile ilgileniyorsunuz?"
                      rows={4}
                      className="w-full bg-white/5 border border-white/8 rounded-xl pl-10 pr-4 py-3.5 text-[14px] text-white placeholder:text-blue-200/25 focus:outline-none focus:border-blue-500/40 focus:bg-white/8 transition resize-none"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="mt-6 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-[15px] py-4 rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5"
                >
                  Ücretsiz Teklif Alın <ArrowIcon size={16} />
                </button>

                <p className="mt-4 text-center text-[12px] text-blue-200/25">
                  Bilgileriniz üçüncü taraflarla paylaşılmaz.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
