import PageHero from "@/components/marketing/hero/PageHero";
import ApplyForm from "@/components/apply/ApplyForm";
import TrustBar from "@/components/marketing/TrustBar";

export default function TeklifPage() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero
        label="ÜCRETSİZ TEKLİF"
        titleShimmer="Size Özel"
        titleStatic="Çözüm Hazırlayalım"
        subtitle="SSL, Hosting, Domain ve web güvenliği çözümleri için ihtiyacınıza en uygun teklifi hızlıca alın."
        centered
      />

      <ApplyForm />

      <TrustBar
        eyebrow="NEDEN LSG"
        title="Kurumsal seviyede güvenlik"
        description="Global markalarla çalışan altyapımız ve uzman ekibimiz ile projelerinizi güvenle yönetiyoruz."
        imageSrc="/images/security.png"
        stats={[
          { value: "500+", label: "Aktif Müşteri" },
          { value: "7/24", label: "Teknik Destek" },
          { value: "%99.9", label: "Uptime Garantisi" },
          { value: "Global", label: "Partner Ağı" },
        ]}
      />
    </main>
  );
}
