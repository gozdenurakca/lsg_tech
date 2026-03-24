"use client";

import { useState } from "react";
import { ICONS } from "@/lib/icons";

type Props = {
  question: string;
  answer: string;
};

const ChevronIcon = ICONS.ChevronDown;

export default function FAQItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-semibold">{question}</span>

        <ChevronIcon
          size={18}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-6 pb-5 text-sm text-slate-600 border-t">
          {answer}
        </div>
      )}
    </div>
  );
}
