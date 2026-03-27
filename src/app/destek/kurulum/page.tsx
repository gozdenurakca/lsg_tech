import KurulumRehberiPage from "@/components/resource/kurulum/KurulumRehberiPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSL Sertifika Kurulum Rehberi | LSG Teknoloji",
  description:
    "SSL sertifikanızı Nginx, Apache, IIS, cPanel ve Plesk üzerinde adım adım nasıl kuracağınızı öğrenin. HTTP→HTTPS yönlendirmesi ve doğrulama dahil.",
};

export default function KurulumPage() {
  return <KurulumRehberiPage />;
}
