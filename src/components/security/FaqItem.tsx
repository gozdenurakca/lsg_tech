"use client";

import { useState } from "react";

type FaqItemProps = {
  item: {
    q: string;
    a: string;
  };
};

export default function FaqItem({ item }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between py-5 gap-4"
      >
        <span className="font-semibold text-[#1b2a4a] text-base">{item.q}</span>

        <span
          className={`text-[#2ecc8f] text-xl font-bold shrink-0 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {open && (
        <p className="pb-5 text-gray-500 text-sm leading-relaxed">{item.a}</p>
      )}
    </div>
  );
}
