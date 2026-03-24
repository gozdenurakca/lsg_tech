"use client";

import Link from "next/link";
import { ICONS } from "@/lib/icons";

type Product = {
  name: string;
  description: string;
  href: string;
  icon: keyof typeof ICONS;
};

const PRODUCTS: Product[] = [
  {
    name: "Secure Site Pro",
    description:
      "Web sitenizi zararlı yazılımlara, saldırılara ve güvenlik açıklarına karşı koruyan gelişmiş güvenlik çözümü.",
    href: "/web-guvenligi/secure-site-pro",
    icon: "shieldCheck",
  },
  {
    name: "SiteLock",
    description:
      "Web sitenizi sürekli tarayan ve tehditleri tespit eden profesyonel website güvenlik hizmeti.",
    href: "/web-guvenligi/sitelock",
    icon: "box",
  },
];

export default function SecurityProducts() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1b2a4a] mb-4">
            Web Sitenizi Koruyacak Güvenlik Çözümleri
          </h2>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Web sitenizi kötü amaçlı yazılımlar, saldırılar ve güvenlik
            açıklarına karşı korumak için profesyonel güvenlik çözümlerimizi
            keşfedin.
          </p>
        </div>

        <div className="space-y-6">
          {PRODUCTS.map((product) => {
            const Icon = ICONS[product.icon];

            return (
              <Link
                key={product.name}
                href={product.href}
                className="group flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-500/40 transition-all"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>

                  <div>
                    <p className="font-bold text-lg text-[#1b2a4a]">
                      {product.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>

                <span className="text-gray-400 text-xl group-hover:translate-x-1 transition">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
