interface Props {
  certificatesCount: number
  expiringCount: number
  ordersCount: number
  openTicketsCount: number
}

export default function CustomerDashboard({
  certificatesCount,
  expiringCount,
  ordersCount,
  openTicketsCount,
}: Props) {
  return (
    <div className="space-y-8">

      {/* ÜST UYARI BAR (Expiring SSL varsa) */}
      {expiringCount > 0 && (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 px-6 py-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="font-semibold">
              ⚠ {expiringCount} sertifikanız 30 gün içinde sona erecek
            </p>
            <p className="text-sm mt-1">
              Kesinti yaşamamak için yenileme işlemini başlatmanız önerilir.
            </p>
          </div>
          <a
            href="/panel/ssl"
            className="bg-amber-500 hover:bg-amber-600 text-white text-sm px-4 py-2 rounded-lg font-medium transition"
          >
            Sertifikaları Gör
          </a>
        </div>
      )}

      {/* KPI KARTLARI */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <DashboardCard
          title="Aktif Sertifikalar"
          value={certificatesCount}
          desc={
            expiringCount > 0
              ? `${expiringCount} tanesi yakında sona eriyor`
              : "Tüm sertifikalar güncel"
          }
          highlight={expiringCount > 0}
        />

        <DashboardCard
          title="Toplam Sipariş"
          value={ordersCount}
          desc="Tüm sipariş geçmişiniz"
        />

        <DashboardCard
          title="Açık Destek Talepleri"
          value={openTicketsCount}
          desc={
            openTicketsCount > 0
              ? "Yanıt bekleyen talepleriniz var"
              : "Aktif talep bulunmuyor"
          }
          highlight={openTicketsCount > 0}
        />

        <DashboardCard
          title="Hesap Durumu"
          value="Aktif"
          desc="Herhangi bir kısıtlama yok"
          status="success"
        />

      </div>
    </div>
  )
}

interface CardProps {
  title: string
  value: string | number
  desc: string
  highlight?: boolean
  status?: "success" | "warning" | "default"
}

function DashboardCard({
  title,
  value,
  desc,
  highlight = false,
  status = "default",
}: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl border p-6 transition-all duration-200
        ${highlight ? "border-amber-300 shadow-md" : "border-slate-200 shadow-sm"}
      `}
    >
      <h3 className="text-sm text-slate-500 font-medium">{title}</h3>

      <div
        className={`
          text-3xl font-bold mt-3
          ${
            status === "success"
              ? "text-emerald-600"
              : highlight
              ? "text-amber-600"
              : "text-slate-900"
          }
        `}
      >
        {value}
      </div>

      <p className="text-xs text-slate-500 mt-3">{desc}</p>
    </div>
  )
}
