"use client";

import { ICONS } from "@/lib/icons";
import { useMemo, useState } from "react";
import ResourcePageLayout from "@/components/resource/shared/ResourcePageLayout";
import ResourceNav from "@/components/resource/shared/ResourceNav";
import ResourceStoryCard from "@/components/resource/shared/ResourceStoryCard";
import ResourceBottomCTA from "@/components/resource/shared/ResourceBottomCTA";

const FILTERS = [
  { id: "all", label: "Tümü" },
  { id: "baslangic", label: "Başlangıç" },
  { id: "teknik", label: "Teknik Kurulum" },
  { id: "isletmeler", label: "İşletmeler" },
];

const WEBINARS = [
  {
    title: "SSL Nedir? Temelden Başlayalım",
    description:
      "SSL mantığını, sertifika tiplerini ve HTTPS yapısını adım adım anlatan giriş seviyesi webinar.",
    href: "/kaynaklar/webinar/ssl-nedir",
    category: "Başlangıç",
    date: "18 Mar 2026",
    image: "/images/resources/webinar-1.jpg",
    filter: "baslangic",
  },
  {
    title: "CSR Oluşturma ve Kurulum Süreci",
    description:
      "Apache, Nginx ve cPanel ortamlarında CSR üretimi ve kurulum akışını ele alıyoruz.",
    href: "/kaynaklar/webinar/csr-kurulum",
    category: "Teknik Kurulum",
    date: "14 Mar 2026",
    image: "/images/resources/webinar-2.jpg",
    filter: "teknik",
  },
  {
    title: "Kurumsal Şirketler için SSL Stratejisi",
    description:
      "DV, OV ve EV tercihlerini iş ihtiyaçlarına göre nasıl konumlandırmanız gerektiğini konuşuyoruz.",
    href: "/kaynaklar/webinar/ssl-stratejisi",
    category: "İşletmeler",
    date: "08 Mar 2026",
    image: "/images/resources/webinar-3.jpg",
    filter: "isletmeler",
  },
];

export default function WebinarPage() {
  const [activeId, setActiveId] = useState("all");

  const filtered = useMemo(() => {
    if (activeId === "all") return WEBINARS;
    return WEBINARS.filter((item) => item.filter === activeId);
  }, [activeId]);

  return (
    <ResourcePageLayout
      title="Webinar & Eğitimler"
      description="SSL sertifikaları, kurulum rehberleri ve siber güvenlik konularında ücretsiz canlı ve kayıtlı webinarlar."
      badge="Ücretsiz Eğitim"
      fullWidth
    >
      <ResourceNav items={FILTERS} activeId={activeId} onSelect={setActiveId} />

      <section className="pt-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-slate-900">
            Güncel Webinarlar
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Canlı yayınlar, kayıtlı oturumlar ve teknik eğitim içerikleri.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <ResourceStoryCard
              key={item.href}
              title={item.title}
              description={item.description}
              href={item.href}
              image={item.image}
              category={item.category}
              date={item.date}
            />
          ))}
        </div>

        <ResourceBottomCTA
          className="mt-10"
          heading="Webinar talebiniz mi var?"
          subtext="Ekibiniz için özel SSL, PKI veya web güvenliği eğitimi planlayalım."
          buttonLabel="İletişime Geç"
          buttonHref="/iletisim"
        />
      </section>
    </ResourcePageLayout>
  );
}
