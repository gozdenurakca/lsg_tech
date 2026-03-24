import HomeProducts from "@/components/HomeProducts";

import HomeHero from "@/components/home/HomeHero";
import HomeStats from "@/components/home/HomeStats";
import HomePartners from "@/components/home/HomePartners";
import HomeGuide from "@/components/home/HomeGuide";
import HomeSecurity from "@/components/home/HomeSecurity";
import HomeResources from "@/components/home/HomeResources";
import HomeContact from "@/components/home/HomeContact";
import HomeTrust from "@/components/home/HomeTrust";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="bg-[#f4f5f7] text-slate-900">
      <HomeHero />
      <HomeStats />
      <HomeProducts />
      <HomeGuide />
      <HomeSecurity />
      <HomeTrust />
      <HomeResources />
      <HomePartners />
      <HomeContact />
    </main>
  );
}
