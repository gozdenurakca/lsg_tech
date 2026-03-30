"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Ticket {
  _id: string;
  subject: string;
  category?: string;
  priority?: string;
  message?: string;
  status: string;
  createdAt: string;
}

interface Props {
  tickets: Ticket[];
  userEmail: string;
  userName: string;
}

const CATEGORIES = ["Teknik Destek", "Fatura & Ödeme", "Hesap İşlemleri", "SSL Sertifikası", "Domain", "Genel"];
const PRIORITIES = [
  { value: "low", label: "Düşük", color: "text-slate-500 bg-slate-50 border-slate-200" },
  { value: "medium", label: "Orta", color: "text-amber-600 bg-amber-50 border-amber-200" },
  { value: "high", label: "Yüksek", color: "text-orange-600 bg-orange-50 border-orange-200" },
  { value: "urgent", label: "Acil", color: "text-red-600 bg-red-50 border-red-200" },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "open") return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-200">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
      Açık
    </span>
  );
  if (status === "in_progress") return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full border border-amber-200">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
      İşlemde
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      Kapatıldı
    </span>
  );
}

function PriorityBadge({ priority }: { priority?: string }) {
  const p = PRIORITIES.find((x) => x.value === priority) ?? PRIORITIES[0];
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-semibold rounded-full border ${p.color}`}>
      {p.label}
    </span>
  );
}

export default function SupportPageClient({ tickets, userEmail, userName }: Props) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    category: CATEGORIES[0],
    priority: "medium",
    subject: "",
    message: "",
    orderNo: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/support/ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, name: userName, email: userEmail }),
      });
      setSuccess(true);
      setTimeout(() => {
        setModalOpen(false);
        setSuccess(false);
        setForm({ category: CATEGORIES[0], priority: "medium", subject: "", message: "", orderNo: "" });
        router.refresh();
      }, 1500);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800">Destek Taleplerim</h1>
          <p className="text-slate-500 text-sm mt-1">
            Sorularınız için destek talebi oluşturun, ekibimiz en kısa sürede yanıt verir.
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-sm shadow-blue-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Yeni Talep
        </button>
      </div>

      {/* Özet kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Toplam Talep", value: tickets.length, color: "text-slate-700", bg: "bg-slate-50 border-slate-200" },
          { label: "Açık", value: tickets.filter((t) => t.status === "open").length, color: "text-blue-700", bg: "bg-blue-50 border-blue-200" },
          { label: "Kapatıldı", value: tickets.filter((t) => t.status === "closed").length, color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" },
        ].map((card) => (
          <div key={card.label} className={`rounded-2xl border px-5 py-4 ${card.bg}`}>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{card.label}</p>
            <p className={`text-3xl font-extrabold mt-1 ${card.color}`}>{card.value}</p>
          </div>
        ))}
      </div>

      {/* Tablo */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        {tickets.length === 0 ? (
          <div className="py-24 flex flex-col items-center justify-center text-center px-4">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-700">Henüz destek talebiniz yok</h3>
            <p className="text-sm text-slate-500 mt-2 max-w-sm">
              Herhangi bir sorunla karşılaştığınızda destek ekibimize kolayca ulaşabilirsiniz.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              İlk Talebimi Oluştur
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100 uppercase text-[10px] font-extrabold tracking-wider text-slate-500">
                  <th className="px-6 py-4">Konu</th>
                  <th className="px-6 py-4">Kategori</th>
                  <th className="px-6 py-4">Öncelik</th>
                  <th className="px-6 py-4">Tarih</th>
                  <th className="px-6 py-4">Durum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tickets.map((ticket) => {
                  const date = new Date(ticket.createdAt).toLocaleDateString("tr-TR", {
                    day: "numeric", month: "long", year: "numeric",
                  });
                  return (
                    <tr key={ticket._id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-5">
                        <p className="font-semibold text-sm text-slate-800">{ticket.subject}</p>
                        {ticket.message && (
                          <p className="text-xs text-slate-400 mt-0.5 line-clamp-1 max-w-xs">{ticket.message}</p>
                        )}
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-500">{ticket.category || "—"}</td>
                      <td className="px-6 py-5">
                        <PriorityBadge priority={ticket.priority} />
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-500">{date}</td>
                      <td className="px-6 py-5">
                        <StatusBadge status={ticket.status} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Yeni Destek Talebi</h2>
                <p className="text-xs text-slate-500 mt-0.5">Ekibimiz ortalama 2 saat içinde yanıt verir.</p>
              </div>
              <button onClick={() => setModalOpen(false)} className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {success ? (
              <div className="py-16 flex flex-col items-center text-center px-6">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800">Talebiniz alındı!</h3>
                <p className="text-sm text-slate-500 mt-1">En kısa sürede geri dönüş yapacağız.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
                {/* Kategori */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Kategori</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 bg-white"
                  >
                    {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>

                {/* Öncelik */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Öncelik</label>
                  <div className="grid grid-cols-4 gap-2">
                    {PRIORITIES.map((p) => (
                      <button
                        type="button"
                        key={p.value}
                        onClick={() => setForm({ ...form, priority: p.value })}
                        className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                          form.priority === p.value ? p.color + " ring-2 ring-offset-1 ring-blue-400" : "border-slate-200 text-slate-500 bg-white hover:bg-slate-50"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Konu */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Konu <span className="text-red-400">*</span></label>
                  <input
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Sorunuzu kısaca özetleyin"
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 placeholder:text-slate-400"
                  />
                </div>

                {/* Sipariş No (opsiyonel) */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Sipariş No <span className="text-slate-400 font-normal">(opsiyonel)</span></label>
                  <input
                    value={form.orderNo}
                    onChange={(e) => setForm({ ...form, orderNo: e.target.value })}
                    placeholder="LSG-2024-XXXX"
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 placeholder:text-slate-400"
                  />
                </div>

                {/* Mesaj */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Mesaj <span className="text-red-400">*</span></label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Sorununuzu detaylı şekilde açıklayın..."
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 placeholder:text-slate-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold text-sm py-3 rounded-xl transition-colors"
                >
                  {loading ? "Gönderiliyor..." : "Talebi Gönder"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
