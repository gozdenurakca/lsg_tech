"use client";

import { useState } from "react";
import { ICONS } from "@/lib/icons";

interface Props {
  userId: string;
  status: "active" | "suspended";
  role: string;
}

export default function UserStatusToggle({ userId, status, role }: Props) {
  const [loading, setLoading] = useState(false);

  if (role !== "customer") return null;

  const isSuspended = status === "suspended";

  const handleClick = async () => {
    setLoading(true);
    await fetch(`/api/admin/users/${userId}`, { method: "PATCH" });
    window.location.reload();
  };

  const PauseIcon = ICONS.pause;
  const PlayIcon = ICONS.play;
  const LoaderIcon = ICONS.loader;

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`
        inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all
        disabled:opacity-50 disabled:cursor-not-allowed
        ${
          isSuspended
            ? "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
            : "border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100"
        }
      `}
    >
      {loading ? (
        <LoaderIcon size={13} className="animate-spin" />
      ) : isSuspended ? (
        <PlayIcon size={13} />
      ) : (
        <PauseIcon size={13} />
      )}

      {loading ? "İşleniyor..." : isSuspended ? "Aktif Et" : "Askıya Al"}
    </button>
  );
}
