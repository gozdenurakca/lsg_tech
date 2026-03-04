"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function StatusSelect({
  id,
  currentStatus,
}: {
  id: string
  currentStatus: string
}) {

  const [status, setStatus] = useState(currentStatus)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value
    setStatus(newStatus)
    setLoading(true)

    await fetch(`/api/partner-application/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })

    setLoading(false)
    router.refresh()
  }

  const statusStyles: Record<string, string> = {
    new: "bg-blue-50 text-blue-700 border-blue-200",
    reviewing: "bg-yellow-50 text-yellow-700 border-yellow-200",
    approved: "bg-emerald-50 text-emerald-700 border-emerald-200",
    rejected: "bg-red-50 text-red-700 border-red-200",
  }

  return (
    <select
      value={status}
      onChange={handleChange}
      disabled={loading}
      className={`border rounded-lg px-3 py-1 text-sm font-medium transition 
        ${statusStyles[status]}`}
    >
      <option value="new">Yeni</option>
      <option value="reviewing">İnceleniyor</option>
      <option value="approved">Onaylandı</option>
      <option value="rejected">Reddedildi</option>
    </select>
  )
}
