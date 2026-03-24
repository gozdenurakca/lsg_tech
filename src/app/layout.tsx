import { Metadata } from "next";
import "./styles/globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

import Providers from "@/components/providers";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),

  title: "SSL Sertifikası ve Web Güvenlik Çözümleri | TRLSG & WTWOS",
  description:
    "DigiCert, Sectigo ve Comodo SSL sertifikaları. Türkiye'nin güvenilir SSL ve web güvenlik çözümleri sağlayıcısı.",
  keywords: [
    "SSL sertifikası",
    "DigiCert",
    "Sectigo",
    "Comodo",
    "DV SSL",
    "OV SSL",
    "EV SSL",
    "wildcard SSL",
    "web güvenliği",
  ],
  authors: [{ name: "LSG Teknoloji" }],

  openGraph: {
    title: "SSL Sertifikası ve Web Güvenlik Çözümleri",
    description:
      "DigiCert, Sectigo SSL sertifikaları ve profesyonel web güvenlik çözümleri",
    url: "https://trlsg.com",
    siteName: "TRLSG",
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SSL Sertifikası ve Web Güvenlik Çözümleri",
    description:
      "DigiCert, Sectigo SSL sertifikaları ve profesyonel web güvenlik çözümleri",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
