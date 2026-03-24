"use client";

import { useState } from "react";
import CategoryStep from "@/components/support/CategoryStep";
import DetailsStep from "@/components/support/DetailsStep";
import SummaryStep from "@/components/support/SummaryStep";
import SupportSidebar from "@/components/support/SupportSidebar";

type FormData = {
  category: string;
  priority: string;
  subject: string;
  message: string;
  name: string;
  email: string;
  orderNo: string;
};

const CATEGORIES = [
  { value: "ssl", label: "SSL Sertifikası" },
  { value: "hosting", label: "Hosting" },
  { value: "domain", label: "Alan Adı" },
  { value: "email", label: "E-posta" },
  { value: "web-security", label: "Web Güvenliği" },
  { value: "billing", label: "Fatura & Ödeme" },
  { value: "dns", label: "DNS Ayarları" },
  { value: "other", label: "Diğer" },
];

const PRIORITIES = [
  { value: "low", label: "Düşük", eta: "~24 saat" },
  { value: "medium", label: "Orta", eta: "~8 saat" },
  { value: "high", label: "Yüksek", eta: "~2 saat" },
];

export default function SupportTicketPage() {
  const [step, setStep] = useState(0);

  const [form, setForm] = useState<FormData>({
    category: "",
    priority: "medium",
    subject: "",
    message: "",
    name: "",
    email: "",
    orderNo: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);

    await fetch("/api/support/ticket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setLoading(false);

    alert("Ticket oluşturuldu");

    setStep(0);
  };

  return (
    <div className="relative min-h-screen pt-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="absolute top-1/3 -left-32 w-[500px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {step === 0 && (
            <CategoryStep
              form={form}
              setForm={setForm}
              errors={errors}
              setErrors={setErrors}
              next={() => setStep(1)}
            />
          )}

          {step === 1 && (
            <DetailsStep
              form={form}
              setForm={setForm}
              errors={errors}
              setErrors={setErrors}
              next={() => setStep(2)}
              back={() => setStep(0)}
            />
          )}

          {step === 2 && (
            <SummaryStep
              form={form}
              categories={CATEGORIES}
              priorities={PRIORITIES}
              loading={loading}
              back={() => setStep(1)}
              submit={submit}
            />
          )}
        </div>

        <SupportSidebar />
      </div>
    </div>
  );
}
