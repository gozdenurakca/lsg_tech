// SEO + landing page content

export const INFO_SECTIONS = {
  domain: [
    { title: "SEO avantajı", desc: "..." },
  ],
};

export const TLD_META : Record <
string, 
{badge : string;
    badgeClass:string;
    whyPoints :string[];
}
> = 
{
  ".com.tr": {
    badge: "Türkiye #1",
    badgeClass: "bg-blue-100 text-blue-700",
    whyPoints: [
      "Türk kullanıcılar .com.tr'e daha çok güveniyor",
      "Google Türkiye'de yerel SEO avantajı sağlar",
      "Yalnızca Türk kişi/şirketlere tescil imkânı",
    ],
  },
  ".com": {
    badge: "Global Standart",
    badgeClass: "bg-emerald-100 text-emerald-700",
    whyPoints: [
      "Tüm dünyada en tanınan uzantı",
      "Uluslararası müşterilere erişim",
      "Yatırımcı güveni",
    ],
  },
  ".net": {
    badge: "Teknoloji",
    badgeClass: "bg-violet-100 text-violet-700",
    whyPoints: [
      "Yazılım projeleri için ideal",
      "Teknik marka algısı",
      "Global tanınırlık",
    ],
  },
};