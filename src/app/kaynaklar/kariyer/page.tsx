import Hero from "@/components/kaynaklar/kariyer/Hero";
import Positions from "@/components/kaynaklar/kariyer/Positions";
import Perks from "@/components/kaynaklar/kariyer/Perks";
import CTA from "@/components/kaynaklar/kariyer/CTA";

export default function CareersPage() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <Positions />
      <Perks />
      <CTA />
    </main>
  );
}
