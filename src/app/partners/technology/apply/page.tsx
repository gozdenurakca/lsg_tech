"use client";

import { useState } from "react";
import TechApplyHero from "@/components/technology/TechApplyHero";
import TechApplyForm from "@/components/technology/TechApplyForm";
import TechApplySuccess from "@/components/technology/TechApplySuccess";

export default function TechnologyPartnerApplyPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const payload = {
      companyName: fd.get("companyName"),
      email: fd.get("email"),
      website: fd.get("website"),
      monthlyUsers: fd.get("monthlyUsers"),
      message: fd.get("message"),
      type: "technology",
    };

    try {
      const res = await fetch("/api/partner-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      alert("Başvuru gönderilemedi. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return <TechApplySuccess />;

  return (
    <main className="min-h-screen" style={{ background: "#020A18" }}>
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#4A90D9 1px,transparent 1px),linear-gradient(to bottom,#4A90D9 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(14,165,233,0.18) 0%, transparent 65%)",
        }}
      />

      <TechApplyHero />
      <TechApplyForm onSubmit={handleSubmit} loading={loading} />
    </main>
  );
}
