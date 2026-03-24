"use client";

import Image from "next/image";
import Link from "next/link";
import { ICONS } from "@/lib/icons";
import { CheckCircleIcon } from "lucide-react";

const { shield: ShieldIcon, arrowRight: ArrowRightIcon } = ICONS;
export default function SunucuGuvenligiPage() {
  return (
    <main className="bg-[#f4f6f8] text-slate-900 overflow-hidden">
      <section className="relative pt-32 pb-32 bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-900 text-white overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] [background-size:24px_24px]" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-semibold">
            <ShieldIcon className="w-4 h-4 text-blue-200" />
            ENTERPRISE SERVER SECURITY
          </div>

          <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight">
            Kurumsal Sunucu Güvenliği
          </h1>

          <p className="mt-8 text-blue-100 text-lg max-w-3xl mx-auto">
            Malware, brute-force, DDoS ve zero-day tehditlere karşı
            sunucularınızı 7/24 izliyor ve proaktif olarak koruyoruz.
          </p>

          <Link
            href="/#teklif"
            className="group inline-flex items-center gap-2 mt-12 bg-white text-blue-900 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition shadow-2xl hover:-translate-y-1"
          >
            Ücretsiz Güvenlik Analizi
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Sunucularınız Gerçekten Güvende Mi?
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            Çoğu saldırı fark edilmeden sistemlere sızar. Yanlış yapılandırma ve
            güncellenmemiş servisler kritik risk oluşturur.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { text: "Brute-force & Bot Saldırıları", icon: "activity" },
              { text: "Ransomware & Malware", icon: "bug" },
              { text: "Yanlış Firewall Konfigürasyonu", icon: "flame" },
            ].map((item, i) => {
              const Icon = ICONS[item.icon];

              return (
                <div key={i} className="group ...">
                  <Icon className="w-8 h-8 text-blue-900 mb-6 mx-auto group-hover:scale-110 transition-transform" />
                  <div className="font-semibold text-lg">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#f4f6f8]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Real-Time Malware Koruması",
              desc: "Dosya sisteminizi anlık tarar ve zararlı yazılımları otomatik izole eder.",
              icon: "radar",
            },
            {
              title: "Gelişmiş WAF & IPS",
              desc: "SQL injection, XSS ve brute-force saldırılarına karşı katmanlı koruma.",
              icon: "layers",
            },
            {
              title: "Davranış Analizi",
              desc: "Makine öğrenmesi destekli tehdit algılama ve anomali tespiti.",
              icon: "server",
            },
          ].map((item, i) => {
            const Icon = ICONS[item.icon];

            return (
              <div
                key={i}
                className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <Icon className="w-10 h-10 text-blue-900 mb-6 group-hover:scale-110 transition-transform" />

                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="/images/resim3.png"
              alt="Server Security Monitoring"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold">Neden LSG Sunucu Güvenliği?</h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Merkezi güvenlik paneli ve otomatik patch yönetimi ile altyapınızı
              sürekli güncel ve korumalı tutuyoruz.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Zero-day tehdit koruması",
                "Otomatik patch yönetimi",
                "Merkezi güvenlik paneli",
                "ISO / KVKK / GDPR uyumluluğu",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200"
                >
                  <CheckCircleIcon className="w-5 h-5 text-emerald-600" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#f4f6f8] text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold">Güvenlik Sürecimiz</h2>

          <div className="mt-16 grid md:grid-cols-4 gap-8">
            {[
              "Altyapı Analizi",
              "Risk Tespiti",
              "Koruma Katmanlarının Kurulumu",
              "7/24 İzleme & Raporlama",
            ].map((step, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="text-blue-900 font-bold text-lg mb-3">
                  0{i + 1}
                </div>
                <div className="font-semibold">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-gradient-to-br from-blue-950 to-indigo-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold">
            Sunucu Güvenliğinizi Bugün Güçlendirin
          </h2>

          <p className="mt-6 text-blue-100">
            Uzman güvenlik ekibimiz altyapınızı analiz eder ve size özel
            kurumsal koruma planı oluşturur.
          </p>

          <Link
            href="/#teklif"
            className="inline-block mt-10 bg-white text-blue-900 px-12 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-2xl hover:-translate-y-1"
          >
            Hemen Teklif Alın
          </Link>
        </div>
      </section>
    </main>
  );
}
