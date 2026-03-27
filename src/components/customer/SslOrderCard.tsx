"use client"

import { useState } from "react"
import {
  Shield,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  ChevronDown,
  ChevronUp,
  FileCode2,
} from "lucide-react"

interface SslOrder {
  _id: string
  productSlug: string
  domain: string
  period: number
  status: string
  csr?: string
  digicertOrderId?: string
  errorMessage?: string
  createdAt: string
}

const STATUS_CONFIG: Record<
  string,
  { label: string; color: string; bg: string; icon: React.ElementType }
> = {
  created:          { label: "Oluşturuldu",        color: "text-slate-500",   bg: "bg-slate-100",   icon: Clock },
  pending_payment:  { label: "Ödeme Bekleniyor",   color: "text-amber-600",   bg: "bg-amber-50",    icon: Clock },
  paid:             { label: "CSR Bekleniyor",      color: "text-blue-600",    bg: "bg-blue-50",     icon: FileCode2 },
  provisioning:     { label: "İşleniyor",           color: "text-violet-600",  bg: "bg-violet-50",   icon: Loader2 },
  issued:           { label: "Aktif",               color: "text-emerald-600", bg: "bg-emerald-50",  icon: CheckCircle2 },
  failed:           { label: "Hata",                color: "text-red-600",     bg: "bg-red-50",      icon: AlertTriangle },
}

export default function SslOrderCard({ order }: { order: SslOrder }) {
  const [open, setOpen] = useState(order.status === "paid" && !order.csr)
  const [csr, setCsr] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [currentStatus, setCurrentStatus] = useState(order.status)

  const cfg = STATUS_CONFIG[currentStatus] ?? STATUS_CONFIG.created
  const StatusIcon = cfg.icon

  const needsCsr = currentStatus === "paid" && !order.csr

  const handleSubmitCsr = async () => {
    setError("")
    setSuccess("")

    if (!csr.trim()) {
      setError("CSR alanı boş bırakılamaz.")
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`/api/panel/orders/${order._id}/csr`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ csr }),
      })

      const data = await res.json()

      if (!res.ok || !data.ok) {
        setError(data.error || "Bir hata oluştu.")
        return
      }

      setCurrentStatus(data.status ?? "provisioning")
      setSuccess(data.message || "CSR başarıyla gönderildi.")
      setCsr("")
      setOpen(false)
    } catch {
      setError("Sunucu bağlantı hatası.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      {/* ── Kart başlığı ── */}
      <div className="flex items-center gap-4 p-5">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
          <Shield size={18} className="text-emerald-600" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-slate-800 truncate">{order.domain}</p>
          <p className="text-xs text-slate-400 mt-0.5">
            {order.productSlug} · {order.period} yıl
          </p>
        </div>

        {/* Status badge */}
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${cfg.bg} ${cfg.color}`}
        >
          <StatusIcon
            size={11}
            className={currentStatus === "provisioning" ? "animate-spin" : ""}
          />
          {cfg.label}
        </span>

        {/* Toggle — sadece CSR gerekiyorsa veya hata varsa */}
        {(needsCsr || currentStatus === "failed") && (
          <button
            onClick={() => setOpen((v) => !v)}
            className="ml-2 w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors"
          >
            {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        )}
      </div>

      {/* ── CSR formu (sadece "paid" ve CSR yoksa) ── */}
      {open && needsCsr && (
        <div className="border-t border-slate-100 p-5 bg-slate-50">
          <div className="flex items-start gap-3 mb-4 p-3 rounded-xl bg-blue-50 border border-blue-100">
            <FileCode2 size={15} className="text-blue-500 mt-0.5 shrink-0" />
            <div className="text-xs text-blue-700 leading-relaxed">
              <p className="font-bold mb-1">CSR Nedir?</p>
              <p>
                Certificate Signing Request — SSL sertifikanızın oluşturulabilmesi için
                sunucunuzdan elde etmeniz gereken bir kod bloğudur.{" "}
                <code className="bg-blue-100 px-1 py-0.5 rounded text-[11px]">
                  openssl req -new -newkey rsa:2048 -nodes -keyout server.key -out server.csr
                </code>{" "}
                komutuyla üretebilirsiniz.
              </p>
            </div>
          </div>

          <label className="block text-xs font-bold text-slate-600 mb-2">
            CSR Yapıştırın
          </label>
          <textarea
            value={csr}
            onChange={(e) => setCsr(e.target.value)}
            rows={8}
            placeholder={`-----BEGIN CERTIFICATE REQUEST-----\nMIIB...\n-----END CERTIFICATE REQUEST-----`}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none text-xs font-mono text-slate-700 bg-white resize-none transition"
          />

          {error && (
            <p className="mt-2 text-xs text-red-600 flex items-center gap-1.5">
              <AlertTriangle size={12} /> {error}
            </p>
          )}
          {success && (
            <p className="mt-2 text-xs text-emerald-600 flex items-center gap-1.5">
              <CheckCircle2 size={12} /> {success}
            </p>
          )}

          <button
            onClick={handleSubmitCsr}
            disabled={loading}
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white px-5 py-2.5 rounded-xl disabled:opacity-60 transition-opacity"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #4f46e5)" }}
          >
            {loading ? (
              <><Loader2 size={14} className="animate-spin" /> Gönderiliyor...</>
            ) : (
              <>CSR Gönder & Başvuruyu Başlat</>
            )}
          </button>
        </div>
      )}

      {/* ── Hata mesajı ── */}
      {open && currentStatus === "failed" && order.errorMessage && (
        <div className="border-t border-red-100 p-4 bg-red-50">
          <p className="text-xs text-red-600 flex items-start gap-2">
            <AlertTriangle size={13} className="mt-0.5 shrink-0" />
            <span>{order.errorMessage}</span>
          </p>
        </div>
      )}
    </div>
  )
}
