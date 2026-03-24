"use client";

import { useState } from "react";
import HostingApplyForm from "@/components/hosting/apply/Form";
import HostingApplyHero from "@/components/hosting/apply/Hero";
import HostingApplySuccess from "@/components/hosting/Success";

export default function HostingApplyPage() {
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
      message: fd.get("message"),
      type: "hosting",
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
      alert("Başvuru gönderilemedi.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return <HostingApplySuccess />;

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
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(99,102,241,0.2) 0%, transparent 65%)",
        }}
      />

      <HostingApplyHero />
      <HostingApplyForm onSubmit={handleSubmit} loading={loading} />
    </main>
  );
}
