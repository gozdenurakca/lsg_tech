"use client";

/**
 * CsrRehberiPage.tsx
 *
 * /destek/csr route'unda gösterilen CSR Oluşturma Rehberi sayfasıdır.
 * Kullanıcıya SSL sertifikası başvurusu için gerekli olan
 * Certificate Signing Request'in (CSR) nasıl oluşturulacağını anlatır.
 * Linux, macOS, Windows IIS, cPanel ve Plesk için ayrı talimatlar sunar.
 *
 * İçerik verileri (alan tablosu, sekme tanımları, adım listeleri, sidebar)
 * ayrı bir dosyada tutulur → csr-content.ts
 * UI yapısında değişiklik olmadan içerik güncellemesi yapılabilir.
 *
 * Kullanılan shared bileşenler:
 *   - ResourcePageLayout   : başlık, breadcrumb, sidebar çerçevesi
 *   - ResourceNav          : sekme çubuğu (Linux / macOS / IIS ...)
 *   - ResourceSectionBlock : ikonlu bölüm kartı
 *   - ResourceCodeBlock    : kopyalama butonlu dark kod kutusu
 *   - ResourceInfoBox      : bilgi / uyarı / başarı kutusu
 *   - ResourceBottomCTA    : sayfa sonu eylem çağrısı
 */

import { useState } from "react";
import { ICONS } from "@/lib/icons";

// Shared layout ve UI bileşenleri
import ResourcePageLayout from "../shared/ResourcePageLayout";
import ResourceBottomCTA from "../shared/ResourceBottomCTA";
import ResourceNav from "../shared/ResourceNav";
import { ResourceSectionBlock } from "../shared/ResourceSectionCard";
import ResourceCodeBlock from "../shared/ResourceCodeBlock";
import ResourceInfoBox from "../shared/ResourceInfoBox";

// İçerik verileri — bu dosyaya dokunmadan metinler güncellenebilir
import {
  CSR_FIELDS,
  SERVER_TABS,
  PANEL_STEPS,
  COMMON_ERRORS,
  sidebarData,
} from "./csr-content";

// ---------------------------------------------------------------------------
// İkon kısayolları — ICONS nesnesinden bir kez alınır
// ---------------------------------------------------------------------------
const FileCode2Icon  = ICONS.fileCode;
const AlertIcon      = ICONS.alert;

// İkon haritası: csr-content'teki iconKey string'lerini bileşene çevirir
const FIELD_ICONS = {
  globe:       ICONS.globe,
  building:    ICONS.building,
  hash:        ICONS.hash,
  mapPin:      ICONS.mapPin,
  shieldCheck: ICONS.shieldCheck,
} as const;

// ---------------------------------------------------------------------------
// Ana bileşen
// ---------------------------------------------------------------------------
export default function CsrRehberiPage() {
  // Aktif sunucu sekmesi — varsayılan: Linux (OpenSSL)
  const [activeServer, setActiveServer] = useState("openssl");

  return (
    <ResourcePageLayout
      title="CSR Oluşturma Rehberi"
      description="Sertifika İmzalama Talebi (CSR) nedir, hangi bilgileri içermeli ve sunucunuzda nasıl oluşturulur — adım adım anlatım."
      badge="Teknik Rehber"
      icon={<FileCode2Icon className="h-7 w-7" />}
      sidebar={sidebarData}
    >
      <div className="space-y-6">

        {/* ----------------------------------------------------------------
            Bölüm 1: CSR Nedir — genel tanım ve private key ilişkisi
        ---------------------------------------------------------------- */}
        <ResourceSectionBlock id="csr-nedir" icon="fileCode" title="CSR Nedir?">
          <p>
            <strong>CSR (Certificate Signing Request)</strong> — SSL
            sertifikanızın bir Sertifika Otoritesi (CA) tarafından
            düzenlenebilmesi için sunucunuzda oluşturmanız gereken şifreli bir
            veri bloğudur.
          </p>
          <p className="mt-4">
            CSR oluşturulurken eş zamanlı olarak bir{" "}
            <strong>özel anahtar (private key)</strong> da üretilir; bu anahtar
            sunucunuzda kalır ve asla paylaşılmaz.
          </p>
          <ResourceInfoBox>
            CSR içeriği{" "}
            <code className="bg-blue-100 px-1 rounded text-xs">
              -----BEGIN CERTIFICATE REQUEST-----
            </code>{" "}
            ile başlar,{" "}
            <code className="bg-blue-100 px-1 rounded text-xs">
              -----END CERTIFICATE REQUEST-----
            </code>{" "}
            ile biter. Bu satırlar dahil tüm içeriği kopyalamanız gerekir.
          </ResourceInfoBox>
        </ResourceSectionBlock>

        {/* ----------------------------------------------------------------
            Bölüm 2: CSR alanları tablosu — csr-content.ts'ten gelir
            İkonlar FIELD_ICONS haritası üzerinden çözümlenir
        ---------------------------------------------------------------- */}
        <ResourceSectionBlock
          id="csr-alanlari"
          icon="hash"
          title="CSR'da Hangi Bilgiler Yer Alır?"
        >
          <p className="mb-5">
            Yanlış bilgi girilmesi başvurunun reddine yol açabilir:
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Alan</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Açıklama</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Örnek</th>
                  <th className="text-center px-4 py-3 font-semibold text-slate-700">Zorunlu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {CSR_FIELDS.map(({ iconKey, field, desc, example, required }) => {
                  const Icon = FIELD_ICONS[iconKey];
                  return (
                    <tr key={field} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Icon size={14} className="text-sky-500 shrink-0" />
                          <code className="text-xs font-mono text-slate-700">{field}</code>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-500">{desc}</td>
                      <td className="px-4 py-3">
                        <code className="text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                          {example}
                        </code>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-block w-2 h-2 rounded-full ${
                            required ? "bg-emerald-500" : "bg-slate-300"
                          }`}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <ResourceInfoBox type="warning">
            <strong>Wildcard SSL</strong> için Common Name alanına{" "}
            <code className="bg-amber-100 px-1 rounded text-xs">*.siteniz.com</code>{" "}
            şeklinde yıldız (*) ön eki ile girmeniz gerekir.
          </ResourceInfoBox>
        </ResourceSectionBlock>

        {/* ----------------------------------------------------------------
            Bölüm 3: Adım adım CSR oluşturma — sekmeli yapı
            Linux/macOS: OpenSSL komutları; IIS/cPanel/Plesk: adım listesi
        ---------------------------------------------------------------- */}
        <ResourceSectionBlock
          id="csr-olusturma"
          icon="server"
          title="Adım Adım CSR Oluşturma"
        >
          <p className="mb-5">
            Kullandığınız sunucu veya panel türüne göre seçim yapın:
          </p>

          {/* Sekme çubuğu */}
          <ResourceNav
            items={SERVER_TABS}
            activeId={activeServer}
            onSelect={setActiveServer}
          />

          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 mt-4">

            {/* Linux — OpenSSL komutu */}
            {activeServer === "openssl" && (
              <div className="space-y-3">
                <p>SSH ile sunucunuza bağlanın ve aşağıdaki komutu çalıştırın:</p>
                <ResourceCodeBlock
                  label="Terminal"
                  code={`openssl req -new -newkey rsa:2048 -nodes \\\n  -keyout siteniz.key -out siteniz.csr`}
                />
                <ResourceInfoBox>
                  <code className="bg-blue-100 px-1 rounded text-xs">siteniz.key</code>{" "}
                  özel anahtarınızdır — paylaşmayın. CSR içeriğini görmek için:{" "}
                  <code className="bg-blue-100 px-1 rounded text-xs">cat siteniz.csr</code>
                </ResourceInfoBox>
              </div>
            )}

            {/* macOS — Homebrew + OpenSSL */}
            {activeServer === "macos" && (
              <div className="space-y-3">
                <p>Homebrew ile güncel OpenSSL kurulumu (opsiyonel):</p>
                <ResourceCodeBlock label="Terminal" code={`brew install openssl`} />
                <p>CSR ve özel anahtarı oluşturun:</p>
                <ResourceCodeBlock
                  label="Terminal"
                  code={`openssl req -new -newkey rsa:2048 -nodes \\\n  -keyout siteniz.key -out siteniz.csr`}
                />
                <ResourceInfoBox type="warning">
                  macOS,{" "}
                  <code className="bg-amber-100 px-1 rounded text-xs">.key</code>{" "}
                  dosyasını Keychain'e eklemeye çalışabilir. Dosyaları proje
                  klasörüne kaydedin.
                </ResourceInfoBox>
              </div>
            )}

            {/* IIS / cPanel / Plesk — adım listesi (csr-content'ten gelir) */}
            {(activeServer === "cpanel" ||
              activeServer === "iis" ||
              activeServer === "plesk") && (
              <ol className="space-y-3 list-none">
                {PANEL_STEPS[activeServer].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}

                {/* IIS'e özgü ek uyarı */}
                {activeServer === "iis" && (
                  <ResourceInfoBox type="warning">
                    Sertifikayı farklı sunucuya taşımak için{" "}
                    <strong>.pfx</strong> formatında dışa aktarmanız gerekir.
                  </ResourceInfoBox>
                )}
              </ol>
            )}
          </div>
        </ResourceSectionBlock>

        {/* ----------------------------------------------------------------
            Bölüm 4: CSR doğrulama — göndermeden önce kontrol
        ---------------------------------------------------------------- */}
        <ResourceSectionBlock
          id="csr-dogrulama"
          icon="shieldCheck"
          title="CSR'ı Doğrulama"
        >
          <p>Göndermeden önce OpenSSL ile kontrol edin:</p>
          <ResourceCodeBlock
            label="Terminal"
            code={`openssl req -text -noout -verify -in siteniz.csr`}
          />
          <p className="mt-4">
            Çıktıda{" "}
            <code className="bg-slate-100 px-1 rounded text-xs">verify OK</code>{" "}
            görünüyorsa CSR geçerlidir.
          </p>
          <ResourceInfoBox>
            Online araç tercih ediyorsanız <strong>DigiCert CSR Checker</strong>{" "}
            veya <strong>SSL Shopper CSR Decoder</strong> kullanabilirsiniz —
            özel anahtarı içermez, güvenlidir.
          </ResourceInfoBox>
        </ResourceSectionBlock>

        {/* ----------------------------------------------------------------
            Bölüm 5: Sık yapılan hatalar — csr-content.ts'ten gelir
        ---------------------------------------------------------------- */}
        <ResourceSectionBlock
          id="sik-hatalar"
          icon="alert"
          title="Sık Yapılan Hatalar"
        >
          <ul className="space-y-4">
            {COMMON_ERRORS.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <AlertIcon size={14} className="text-amber-500 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-700">{item.title}</p>
                  <p className="text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </ResourceSectionBlock>

      </div>

      {/* Sayfa sonu eylem çağrısı */}
      <div className="mt-8">
        <ResourceBottomCTA
          heading="CSR'ınız hazır mı?"
          subtext="CSR'ınızı oluşturduktan sonra SSL başvurunuzu tamamlamak için sadece birkaç dakikanız yeter."
          buttonLabel="SSL Sertifikası Al"
          buttonHref="/ssl"
        />
      </div>
    </ResourcePageLayout>
  );
}
