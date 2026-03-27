import type { ReactNode } from "react";
import { ICONS } from "@/lib/icons";

const InfoIcon    = ICONS.info;
const AlertIcon   = ICONS.alert;
const SuccessIcon = ICONS.success;

interface ResourceInfoBoxProps {
  type?: "info" | "warning" | "success";
  children: ReactNode;
}

const STYLES = {
  info:    { cls: "bg-blue-50 border-blue-200 text-blue-800",       Icon: InfoIcon,    iconCls: "text-blue-500" },
  warning: { cls: "bg-amber-50 border-amber-200 text-amber-800",    Icon: AlertIcon,   iconCls: "text-amber-500" },
  success: { cls: "bg-emerald-50 border-emerald-200 text-emerald-800", Icon: SuccessIcon, iconCls: "text-emerald-500" },
} as const;

export default function ResourceInfoBox({ type = "info", children }: ResourceInfoBoxProps) {
  const { cls, Icon, iconCls } = STYLES[type];

  return (
    <div className={`flex gap-3 p-4 rounded-xl mt-4 border text-sm leading-relaxed ${cls}`}>
      <Icon size={16} className={`shrink-0 mt-0.5 ${iconCls}`} />
      <span>{children}</span>
    </div>
  );
}
