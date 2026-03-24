import Hero from "@/components/kaynaklar/hakkimizda/Hero";
import About from "@/components/kaynaklar/hakkimizda/About";
import Timeline from "@/components/kaynaklar/hakkimizda/Timeline";
import Values from "@/components/kaynaklar/hakkimizda/Values";
import CTA from "@/components/kaynaklar/hakkimizda/CTA";

export default function HakkimizdaPage() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <About />
      <Timeline />
      <Values />
      <CTA />
    </main>
  );
}
