"use client";

/*
 * /destek/kurulum route'unda gösterilen SSL Sertifika Kurulum Rehberi sayfasıdır.
 * Kullanıcıya satın aldığı sertifikayı farklı sunucu ortamlarına
 * (Nginx, Apache, IIS, cPanel, Plesk) nasıl kuracağını adım adım anlatır.

 * İçerik verileri (sekme tanımları, adım listeleri, sidebar metinleri vb.)
 * ayrı bir dosyada tutulur → kurulum-content.ts
 * UI yapısında değişiklik olmadan içerik güncellemesi yapılabilir.
 */

import { useState } from "react";
import { ICONS } from "@/lib/icons";

import ResourcePageLayout from "../shared/ResourcePageLayout";
import ResourceBottomCTA from "../shared/ResourceBottomCTA";
import ResourceNav from "../shared/ResourceNav";
import { ResourceSectionBlock } from "../shared/ResourceSectionCard";
import ResourceCodeBlock from "../shared/ResourceCodeBlock";
import ResourceInfoBox from "../shared/ResourceInfoBox";

import {
  SERVER_TABS,
  PANEL_STEPS,
  REQUIRED_FILES,
  COMMON_ERRORS,
  RENEWAL_TIMELINE,
  sidebarData,
} from "./kurulum-content";

const WrenchIcon = ICONS.wrench;
const ShieldCheckIcon = ICONS.shieldCheck;
const ServerIcon = ICONS.server;
const HardDriveIcon = ICONS.hardDrive;
const AlertIcon = ICONS.alert;

const FILE_ICONS = {
  shieldCheck: ShieldCheckIcon,
  hardDrive: HardDriveIcon,
  server: ServerIcon,
} as const;

const FILE_COLORS: Record<string, { bg: string; text: string }> = {
  emerald: { bg: "bg-emerald-50 border-emerald-100", text: "text-emerald-600" },
  sky: { bg: "bg-sky-50 border-sky-100", text: "text-sky-600" },
  violet: { bg: "bg-violet-50 border-violet-100", text: "text-violet-600" },
};

export default function KurulumRehberiPage() {
  const [activeServer, setActiveServer] = useState("nginx");

  return (
    <ResourcePageLayout
      title="SSL Sertifika Kurulum Rehberi"
      description="Satın aldığınız SSL sertifikasını Nginx, Apache, IIS, cPanel ve Plesk üzerinde adım adım nasıl kuracağınızı öğrenin."
      badge="Teknik Rehber"
      icon={<WrenchIcon className="h-7 w-7" />}
      sidebar={sidebarData}
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Destek", href: "/support" },
        { label: "SSL Kurulum Rehberi" },
      ]}
    >
      <div className="space-y-6">
        <ResourceSectionBlock
          id="kurulum-oncesi"
          icon="download"
          title="Kurulum Öncesi Hazırlık"
        >
          <p>
            CA sertifikanızı onayladıktan sonra size üç dosya gönderir. Hazır
            olduklarından emin olun:
          </p>
          <div className="mt-4 space-y-3">
            {REQUIRED_FILES.map((item) => {
              const Icon = FILE_ICONS[item.iconKey];
              const colors = FILE_COLORS[item.colorKey];
              return (
                <div
                  key={item.file}
                  className={`flex items-start gap-3 p-3 rounded-xl border ${colors.bg}`}
                >
                  <Icon
                    size={15}
                    className={`${colors.text} mt-0.5 shrink-0`}
                  />
                  <div>
                    <code className="text-xs font-mono font-bold text-slate-700">
                      {item.file}
                    </code>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <ResourceInfoBox type="warning">
            <strong>Özel anahtarı (.key)</strong> sunucunuzda güvenli tutun —
            CA'ya veya başka kişilere gönderilmemeli.
          </ResourceInfoBox>
        </ResourceSectionBlock>
        <ResourceSectionBlock
          id="sunucu-kurulum"
          icon="server"
          title="Sunucuya Göre Kurulum"
        >
          <p className="mb-5">
            Kullandığınız web sunucusu veya panel türüne göre seçim yapın:
          </p>

          <ResourceNav
            items={SERVER_TABS}
            activeId={activeServer}
            onSelect={setActiveServer}
          />

          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 mt-4">
            {activeServer === "nginx" && (
              <div className="space-y-3">
                <p>Sertifika ve CA bundle'ı birleştirin:</p>
                <ResourceCodeBlock
                  label="Terminal"
                  code={`cat siteniz.crt ca-bundle.crt > siteniz_chain.crt`}
                />
                <p>Nginx config'e SSL bloğunu ekleyin:</p>
                <ResourceCodeBlock
                  label="nginx.conf"
                  code={`server {
    listen 443 ssl;
    server_name siteniz.com www.siteniz.com;
    ssl_certificate     /etc/ssl/siteniz_chain.crt;
    ssl_certificate_key /etc/ssl/siteniz.key;
    ssl_protocols       TLSv1.2 TLSv1.3;
}
server {
    listen 80;
    server_name siteniz.com www.siteniz.com;
    return 301 https://$host$request_uri;
}`}
                />
                <ResourceCodeBlock
                  label="Terminal"
                  code={`nginx -t && systemctl reload nginx`}
                />
                <ResourceInfoBox type="success">
                  <code className="bg-emerald-100 px-1 rounded text-xs">
                    nginx -t
                  </code>{" "}
                  komutu <strong>syntax is ok</strong> yazıyorsa kurulum
                  doğrudur.
                </ResourceInfoBox>
              </div>
            )}

            {activeServer === "apache" && (
              <div className="space-y-3">
                <ResourceCodeBlock
                  label="httpd.conf / ssl.conf"
                  code={`<VirtualHost *:443>
    ServerName siteniz.com
    SSLEngine on
    SSLCertificateFile      /etc/ssl/siteniz.crt
    SSLCertificateKeyFile   /etc/ssl/siteniz.key
    SSLCertificateChainFile /etc/ssl/ca-bundle.crt
    SSLProtocol all -SSLv3 -TLSv1 -TLSv1.1
</VirtualHost>
<VirtualHost *:80>
    ServerName siteniz.com
    Redirect permanent / https://siteniz.com/
</VirtualHost>`}
                />
                <ResourceCodeBlock
                  label="Terminal"
                  code={`a2enmod ssl && apachectl configtest && systemctl reload apache2`}
                />
                <ResourceInfoBox>
                  Apache 2.4.8+ sürümlerinde{" "}
                  <code className="bg-blue-100 px-1 rounded text-xs">
                    SSLCertificateChainFile
                  </code>{" "}
                  kaldırılmıştır; zinciri{" "}
                  <code className="bg-blue-100 px-1 rounded text-xs">
                    SSLCertificateFile
                  </code>{" "}
                  içinde birleştirin.
                </ResourceInfoBox>
              </div>
            )}

            {(activeServer === "iis" ||
              activeServer === "cpanel" ||
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

                {activeServer === "iis" && (
                  <ResourceInfoBox type="warning">
                    Private key eşleşmesi zorunludur — CSR'ı oluşturduğunuz
                    sunucu ile aynı sunucuda kurulum yapın.
                  </ResourceInfoBox>
                )}
                {activeServer === "cpanel" && (
                  <ResourceInfoBox type="success">
                    cPanel kurulum sonrası HTTPS'i otomatik aktif eder. "SSL/TLS
                    Durumu" sayfasından tüm domain'leri takip edebilirsiniz.
                  </ResourceInfoBox>
                )}
              </ol>
            )}
          </div>
        </ResourceSectionBlock>

        <ResourceSectionBlock
          id="dogrulama"
          icon="monitor"
          title="Kurulumu Doğrulama"
        >
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-slate-700 mb-1">
                1. Tarayıcıdan kontrol
              </p>
              <p className="text-slate-500 text-sm">
                Sitenizi{" "}
                <code className="bg-slate-100 px-1 rounded text-xs">
                  https://
                </code>{" "}
                ile açın. Adres çubuğunda kilit simgesi varsa kurulum
                başarılıdır.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-700 mb-1">
                2. OpenSSL ile terminal kontrolü
              </p>
              <ResourceCodeBlock
                label="Terminal"
                code={`openssl s_client -connect siteniz.com:443 -servername siteniz.com`}
              />
              <p className="text-slate-500 text-sm mt-2">
                <code className="bg-slate-100 px-1 rounded text-xs">
                  Verify return code: 0 (ok)
                </code>{" "}
                görünüyorsa zincir eksiksizdir.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-700 mb-1">
                3. SSL Labs testi
              </p>
              <p className="text-slate-500 text-sm">
                <strong>ssllabs.com/ssltest</strong> ile sitenizin SSL notunu
                öğrenin. A veya A+ notu güvenli yapılandırma demektir.
              </p>
            </div>
          </div>
          <ResourceInfoBox>
            Kurulum sonrası tarayıcı önbelleğini temizleyin (
            <code className="bg-blue-100 px-1 rounded text-xs">
              Ctrl+Shift+R
            </code>
            ).
          </ResourceInfoBox>
        </ResourceSectionBlock>

        <ResourceSectionBlock
          id="yonlendirme"
          icon="rotateCw"
          title="HTTP → HTTPS Yönlendirmesi"
        >
          <p>
            Tüm HTTP trafiğinin HTTPS'e yönlendirilmesi hem güvenlik hem SEO
            için kritiktir.
          </p>
          <p className="font-semibold text-slate-700 mt-4 mb-1">Nginx</p>
          <ResourceCodeBlock
            label="nginx.conf"
            code={`server {\n    listen 80;\n    server_name siteniz.com www.siteniz.com;\n    return 301 https://$host$request_uri;\n}`}
          />
          <p className="font-semibold text-slate-700 mt-4 mb-1">
            Apache (.htaccess)
          </p>
          <ResourceCodeBlock
            label=".htaccess"
            code={`RewriteEngine On\nRewriteCond %{HTTPS} off\nRewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]`}
          />
          <ResourceInfoBox type="warning">
            WordPress gibi CMS'lerde yönlendirmenin yanı sıra{" "}
            <strong>Site URL</strong> ayarını da{" "}
            <code className="bg-amber-100 px-1 rounded text-xs">https://</code>{" "}
            ile güncelleyin. Aksi hâlde mixed content hatası oluşur.
          </ResourceInfoBox>
        </ResourceSectionBlock>

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

        <ResourceSectionBlock
          id="yenileme"
          icon="cloud"
          title="Sertifika Yenileme"
        >
          <p>
            SSL sertifikaları 1–2 yıllık süreyle satılır. Süre dolmadan
            yenilemeniz gerekir.
          </p>
          <div className="mt-4 space-y-2">
            {RENEWAL_TIMELINE.map((item) => (
              <div
                key={item.days}
                className={`flex items-start gap-3 p-3 rounded-xl border ${item.color}`}
              >
                <span className="text-xs font-bold shrink-0 w-24">
                  {item.days}
                </span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
          <ResourceInfoBox>
            LSG panelinden yenileme hatırlatma e-postalarını aktif edebilirsiniz
            — son kullanma tarihinden 90, 30 ve 7 gün önce otomatik bildirim
            gönderilir.
          </ResourceInfoBox>
        </ResourceSectionBlock>
      </div>

      <div className="mt-8">
        <ResourceBottomCTA
          heading="Kurulumda sorun mu yaşıyorsunuz?"
          subtext="7/24 teknik destek ekibimiz kurulum sürecinde yanınızda."
          buttonLabel="Destek Talebi Oluştur"
          buttonHref="/support"
        />
      </div>
    </ResourcePageLayout>
  );
}
