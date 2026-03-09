"use client";

import { useState } from "react";

interface Props {
  userId: string;
  status: "active" | "suspended";
  role: string;
}

export default function UserStatusToggle({ userId, status, role }: Props) {
  const [loading, setLoading] = useState(false);

  // Sadece customer için göster
  if (role !== "customer") return null;

  const handleClick = async () => {
    setLoading(true);

    await fetch(`/api/admin/users/${userId}`, {
      method: "PATCH",
    });

    window.location.reload();
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="text-xs px-3 py-1 rounded-lg border hover:bg-slate-100 disabled:opacity-50"
    >
      {loading ? "..." : status === "active" ? "Askıya Al" : "Aktif Et"}
    </button>
  );
}
