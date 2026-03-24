"use client";
import { ICONS } from "@/lib/icons";
import { useMemo, useState } from "react";
import ResourcePageLayout from "../shared/ResourcePageLayout";
import ResourceBottomCTA from "../shared/ResourceBottomCTA";
import ResourceNav from "../shared/ResourceNav";

const ChevronIcon = ICONS.chevronDown;
const HelpIcon = ICONS.help;
const SearchIcon = ICONS.search;
const categories = [
  { id: "genel", label: "Genel" },
  { id: "teknik", label: "Teknik" },
  { id: "satin-alma", label: "Satın Alma" },
  { id: "yenileme", label: "Yenileme" },
];

type FAQ = { q: string; a: string };

const faqData: Record<string, FAQ[]> = {
  genel: [
    {
      q: "SSL sertifikası nedir ve neden gereklidir?",
      a: "SSL (Secure Sockets Layer) sertifikası, web siteniz ile ziyaretçileriniz arasındaki veri iletimini şifreleyen bir dijital belgedir. Google ve diğer tarayıcılar HTTPS olmayan siteleri 'Güvenli Değil' olarak işaretler; bu nedenle her web sitesi için zorunlu bir gereksinim haline gelmiştir.",
    },
    {
      q: "Ücretsiz SSL ile ücretli SSL arasındaki fark nedir?",
      a: "Let's Encrypt gibi ücretsiz SSL sağlayıcıları yalnızca temel domain doğrulama (DV) sunar. Ücretli sertifikalar; kurumsal doğrulama (OV/EV), daha uzun geçerlilik süresi, wildcard ve çoklu domain desteği, garanti kapsamı ve 7/24 teknik destek gibi avantajlar sağlar.",
    },
    {
      q: "SSL sertifikam olduğunda SEO'ya etkisi var mı?",
      a: "Evet. Google, HTTPS kullanımını doğrudan bir sıralama faktörü olarak değerlendirmektedir. HTTPS'e geçiş, teknik SEO skorunuzu iyileştirir, aynı zamanda 'Güvenli Değil' uyarısını kaldırarak kullanıcı güvenini ve sayfa kalış süresini artırır.",
    },
    {
      q: "SSL sertifikası tüm cihazlarda çalışır mı?",
      a: "DigiCert sertifikaları, %99.9 tarayıcı ve cihaz uyumluluğuna sahiptir; Windows, macOS, iOS, Android ve tüm modern tarayıcılarda sorunsuz çalışır.",
    },
  ],
  teknik: [
    {
      q: "Wildcard SSL sertifikası nedir?",
      a: "Wildcard SSL, bir alan adının tüm alt alanlarını tek bir sertifika ile kapsar. Örneğin *.siteniz.com sertifikası; blog.siteniz.com, shop.siteniz.com ve mail.siteniz.com gibi tüm alt domainleri güvence altına alır.",
    },
    {
      q: "Multi-Domain (SAN) sertifikası ne işe yarar?",
      a: "SAN (Subject Alternative Name) sertifikaları, tek bir sertifika ile birden fazla farklı alan adını kapsar. Örneğin siteniz.com, siteniz.net ve siteniz.com.tr'yi aynı anda koruyabilirsiniz.",
    },
    {
      q: "CSR (Certificate Signing Request) nedir, nasıl oluşturulur?",
      a: "CSR, sunucunuzun sertifika otoritesine gönderdiği şifreli bir metin dosyasıdır. Sunucunuzda (Apache, Nginx, IIS vb.) OpenSSL ile oluşturulabilir. LSG Teknoloji paneli üzerinden CSR oluşturma aracını kullanabilirsiniz.",
    },
    {
      q: "SSL kurulumunun ardından hangi portun açık olması gerekir?",
      a: "HTTPS trafiği için 443 numaralı portun güvenlik duvarınızda açık olması gerekir. HTTP (port 80) trafiği ise HTTPS'e yönlendirme için açık tutulabilir.",
    },
    {
      q: "SSL sertifikamı sunucuma nasıl kurarım?",
      a: "Kurulum, sunucu yazılımınıza göre değişir. LSG Teknoloji satın alma panelinden sertifikanızı indirdikten sonra; Apache, Nginx, IIS veya cPanel için adım adım kurulum kılavuzlarımıza ulaşabilirsiniz.",
    },
  ],
  "satin-alma": [
    {
      q: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
      a: "Kredi kartı (Visa, Mastercard), banka havalesi ve fatura ile ödeme seçenekleri sunulmaktadır. Kurumsal müşteriler için vadeli ödeme düzenlenebilir.",
    },
    {
      q: "Fatura/e-fatura alabilir miyim?",
      a: "Evet. Satın alma sırasında şirket bilgilerinizi girerek KDV'li e-fatura ya da e-arşiv fatura alabilirsiniz. Tüm faturalar e-posta adresinize otomatik gönderilir.",
    },
    {
      q: "Sertifikamı satın aldıktan sonra kaç dakika içinde alabilirim?",
      a: "DV sertifikaları genellikle 5–15 dakika içinde verilir. OV sertifikaları 1–3 iş günü, EV sertifikaları ise 3–7 iş günü sürebilir. Süreç, doğrulama adımlarınızı tamamlamanıza bağlıdır.",
    },
  ],
  yenileme: [
    {
      q: "Sertifikamı ne zaman yenilemem gerekir?",
      a: "SSL sertifikaları maksimum 397 gün (yaklaşık 13 ay) geçerlidir. Süre dolmadan 30–60 gün önce yenileme işlemini başlatmanızı öneririz. LSG Teknoloji, sona erme tarihinden 60, 30 ve 7 gün önce hatırlatma e-postası gönderir.",
    },
    {
      q: "Yenileme işlemi sitemi etkiler mi?",
      a: "Yenileme süreci doğru planlandığında sitenizde herhangi bir kesinti yaşanmaz. Mevcut sertifikanız geçerliliğini sürdürürken yeni sertifikayı kurabilirsiniz.",
    },
    {
      q: "Sertifikamı erken yenileyebilir miyim? Kalan sürem zayi olur mu?",
      a: "Evet, erken yenileme yapabilirsiniz. Kalan geçerlilik süresi yeni sertifikanızın geçerlilik süresine eklenir (maksimum 397 gün sınırına kadar), böylece hiç zaman kaybetmezsiniz.",
    },
  ],
};

const sidebarData = {
  cta: {
    title: "Cevabınızı Bulamadınız mı?",
    description: "7/24 destek ekibimiz sorularınızı yanıtlamaya hazır.",
    buttonLabel: "Destek Al",
    buttonHref: "/iletisim",
  },
  relatedLinks: [
    {
      heading: "Diğer Kaynaklar",
      links: [
        { label: "SSL Nedir?", href: "/kaynaklar/ssl-nedir" },
        {
          label: "DV / OV / EV Farkları",
          href: "/kaynaklar/dv-ov-ev-farklari",
        },
        { label: "Webinar & Eğitimler", href: "/kaynaklar/webinar" },
      ],
    },
  ],
};

function AccordionItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="flex items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-50 text-xs font-semibold text-sky-700">
            {index + 1}
          </span>

          <span className="text-sm font-medium leading-6 text-slate-900">
            {faq.q}
          </span>
        </span>

        <ChevronIcon
          className={`h-4 w-4 flex-shrink-0 text-slate-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <>
          <div className="mx-5 h-px bg-slate-200" />
          <div className="px-5 pb-5 pt-4">
            <p className="pl-9 text-sm leading-7 text-slate-600">{faq.a}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default function SssPage() {
  const [activeCategory, setActiveCategory] = useState("genel");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return faqData[activeCategory] || [];
    }

    return Object.values(faqData)
      .flat()
      .filter(
        (item) =>
          item.q.toLowerCase().includes(query) ||
          item.a.toLowerCase().includes(query),
      );
  }, [activeCategory, searchQuery]);

  return (
    <ResourcePageLayout
      title="Sık Sorulan Sorular"
      description="SSL sertifikaları hakkında en çok merak edilen soruların cevaplarını burada bulabilirsiniz."
      badge="SSS"
      sidebar={sidebarData}
    >
      <div className="space-y-8">
        <div className="rounded-2xl border border-slate-200 bg-[#F7F9FC] p-4 sm:p-5">
          <div className="relative">
            <SearchIcon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />{" "}
            <input
              type="text"
              placeholder="Soruları ara…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-sky-300"
            />
          </div>

          {!searchQuery && (
            <div className="mt-4">
              <ResourceNav
                items={categories}
                activeId={activeCategory}
                onSelect={setActiveCategory}
              />
            </div>
          )}
        </div>

        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <AccordionItem
                key={`${faq.q}-${index}`}
                faq={faq}
                index={index}
              />
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center">
              <HelpIcon className="mx-auto mb-3 h-10 w-10 text-slate-300" />{" "}
              <p className="text-sm text-slate-500">
                Bu aramada sonuç bulunamadı.
              </p>
            </div>
          )}
        </div>

        <ResourceBottomCTA
          heading="Sorunuzu bulamadınız mı?"
          subtext="Destek ekibimizle doğrudan iletişime geçin."
          buttonLabel="Bize Ulaşın"
          buttonHref="/iletisim"
        />
      </div>
    </ResourcePageLayout>
  );
}
