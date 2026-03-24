"use client";

import { useState } from "react";
import ApplyHero from "@/components/apply/ApplyHero";
import ApplyForm from "@/components/apply/ApplyForm";
import { STYLES } from "@/components/apply/applyStyles";

export default function ResellerApplyPage() {
  return (
    <main className="min-h-screen" style={{ background: "#020A18" }}>
      <style>{STYLES}</style>

      <ApplyHero />

      <ApplyForm />
    </main>
  );
}
