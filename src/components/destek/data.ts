import {ICONS} from "@/lib/icons"
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

export type BadgeColor = "green" | "blue";
export type IconKey = keyof typeof ICONS;


export type ChannelIcon =
  | "message"
  | "phone"
  | "mail"
  | "users";


export interface ContactChannel {
  id: string;
  icon: IconKey;
  title: string;
  subtitle?: string;
  description: string;
  badge?: string | null;
  badgeColor?: BadgeColor | null;
  cta: string;
  href: string;
  available: boolean;
}

export interface QuickTopic {
  icon: IconKey;
  label: string;
  href: string;
}

export interface WorkingHour {
  day: string;
  hours: string;
}

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: "chat",
    icon: "message",
    title: "Canlı Destek",
    subtitle: "7/24 çevrimiçi",
    description:
      "Uzman ekibimizle anında bağlantı kurun. Ortalama yanıt süresi 2 dakika.",
    badge: "7/24",
    badgeColor: "green",
    cta: "Sohbeti Başlat",
    href: "#chat",
    available: true,
  },
  {
    id: "phone",
    icon: "phone",
    title: "Telefon Desteği",
    subtitle: "Hafta içi 09:00 – 18:00",
    description:
      "Türkçe konuşan destek ekibimizi doğrudan arayın ve hızlı destek alın.",
    badge: "TR",
    badgeColor: "blue",
    cta: "0850 XXX XX XX",
    href: "tel:+908500000000",
    available: true,
  },
  {
    id: "email",
    icon: "mail",
    title: "E-posta Desteği",
    subtitle: "Yanıt süresi: 4–8 saat",
    description:
      "Detaylı sorunlarınız için form doldurun, size en kısa sürede dönüş yapalım.",
    badge: null,
    badgeColor: null,
    cta: "Form Gönder",
    href: "#form",
    available: true,
  },
  {
    id: "community",
    icon: "users",
    title: "Topluluk Forumu",
    subtitle: "200.000+ üye",
    description:
      "Diğer kullanıcıların çözümlerinden yararlanın ve deneyimlerinizi paylaşın.",
    badge: null,
    badgeColor: null,
    cta: "Foruma Git",
    href: "#forum",
    available: true,
  },
];


export const QUICK_TOPICS: QuickTopic[] = [
  { icon: "key", label: "Şifre Sıfırlama", href: "#" },
  { icon: "globe", label: "Alan Adı Transferi", href: "#" },
  { icon: "creditCard", label: "Fatura & Ödeme", href: "#" },
  { icon: "shield", label: "SSL Sertifikası", href: "#" },
  { icon: "mail", label: "E-posta Kurulumu", href: "#" },
  { icon: "server", label: "Hosting Sorunları", href: "#" },
  { icon: "shieldRaw", label: "Web Güvenliği", href: "#" },
  { icon: "settings", label: "DNS Ayarları", href: "#" },
];


export const FORM_SUBJECTS: string[] = [
  "Konu seçin...",
  "Alan Adı",
  "Hosting",
  "E-posta",
  "SSL Sertifikası",
  "Web Güvenliği",
  "Fatura & Ödeme",
  "Teknik Destek",
  "Hesap Yönetimi",
  "Diğer",
];


export const WORKING_HOURS: WorkingHour[] = [
  { day: "Pazartesi – Cuma", hours: "09:00 – 18:00" },
  { day: "Cumartesi", hours: "10:00 – 16:00" },
  { day: "Pazar", hours: "Kapalı" },
];