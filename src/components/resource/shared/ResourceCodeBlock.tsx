"use client";

import { useState } from "react";
import { ICONS } from "@/lib/icons";

const TerminalIcon   = ICONS.terminal;
const ClipboardIcon  = ICONS.clipboardCopy;
const CheckIcon      = ICONS.check;

interface ResourceCodeBlockProps {
  code: string;
  label?: string;
}

export default function ResourceCodeBlock({ code, label }: ResourceCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0d1117] mt-4">
      {label && (
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800/60 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <TerminalIcon size={12} className="text-slate-400" />
            <span className="text-xs font-mono text-slate-400">{label}</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            {copied ? (
              <><CheckIcon size={12} className="text-emerald-400" /><span className="text-emerald-400">Kopyalandı</span></>
            ) : (
              <><ClipboardIcon size={12} /><span>Kopyala</span></>
            )}
          </button>
        </div>
      )}
      <pre className="px-5 py-4 text-[13px] font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre-wrap break-all">
        {code}
      </pre>
    </div>
  );
}
