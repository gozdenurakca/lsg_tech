import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import connectDB from "@/lib/db"
import SslOrder from "@/models/SslOrder"
import SslOrderCard from "@/components/customer/SslOrderCard"
import { ShoppingBag } from "lucide-react"

export default async function OrdersPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect("/giris")
  if (session.user.role !== "customer") redirect("/admin")

  await connectDB()

  const orders = await SslOrder.find({ accountId: session.user.id })
    .sort({ createdAt: -1 })
    .lean()

  const serialized = orders.map((o: any) => ({
    _id: String(o._id),
    productSlug: o.productSlug,
    domain: o.domain,
    period: o.period,
    status: o.status,
    csr: o.csr ?? null,
    digicertOrderId: o.digicertOrderId ?? null,
    errorMessage: o.errorMessage ?? null,
    createdAt: o.createdAt?.toISOString?.() ?? "",
  }))

  const pendingCsr  = serialized.filter((o) => o.status === "paid" && !o.csr)
  const active      = serialized.filter((o) => o.status === "issued")
  const inProgress  = serialized.filter((o) => o.status === "provisioning")
  const other       = serialized.filter(
    (o) => !["paid", "issued", "provisioning"].includes(o.status) || (o.status === "paid" && o.csr)
  )

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Başlık */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
          <ShoppingBag size={18} className="text-blue-600" />
        </div>
        <div>
          <h1 className="text-lg font-extrabold text-slate-800">SSL Siparişlerim</h1>
          <p className="text-xs text-slate-400">{serialized.length} sipariş</p>
        </div>
      </div>

      {serialized.length === 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
          <ShoppingBag size={32} className="text-slate-300 mx-auto mb-3" />
          <p className="text-sm font-semibold text-slate-500">Henüz SSL siparişiniz yok.</p>
        </div>
      )}

      {/* CSR Beklenenler — en üstte ve dikkat çekici */}
      {pendingCsr.length > 0 && (
        <section>
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
            ⚠ CSR Girişi Bekleniyor ({pendingCsr.length})
          </p>
          <div className="space-y-3">
            {pendingCsr.map((o) => (
              <SslOrderCard key={o._id} order={o} />
            ))}
          </div>
        </section>
      )}

      {/* İşlemde */}
      {inProgress.length > 0 && (
        <section>
          <p className="text-xs font-bold text-violet-500 uppercase tracking-widest mb-3">
            İşlemde ({inProgress.length})
          </p>
          <div className="space-y-3">
            {inProgress.map((o) => (
              <SslOrderCard key={o._id} order={o} />
            ))}
          </div>
        </section>
      )}

      {/* Aktif */}
      {active.length > 0 && (
        <section>
          <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">
            Aktif Sertifikalar ({active.length})
          </p>
          <div className="space-y-3">
            {active.map((o) => (
              <SslOrderCard key={o._id} order={o} />
            ))}
          </div>
        </section>
      )}

      {/* Diğerleri */}
      {other.length > 0 && (
        <section>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
            Diğer ({other.length})
          </p>
          <div className="space-y-3">
            {other.map((o) => (
              <SslOrderCard key={o._id} order={o} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
