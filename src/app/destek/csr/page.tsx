import CsrRehberiPage from "@/components/resource/csr/CsrRehberiPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CSR Oluşturma Rehberi | LSG Teknoloji",
  description:
    "Sertifika İmzalama Talebi (CSR) nedir, hangi bilgileri içermeli ve sunucunuzda nasıl oluşturulur. OpenSSL, cPanel, IIS ve Plesk için adım adım rehber.",
}

export default function CsrPage() {
  return <CsrRehberiPage />
}
