import connectDB from "@/lib/db"
import PartnerApplication from "@/models/PartnerApplication"
import StatusSelect from "./StatusSelect"

export default async function AdminPartnersPage({
  searchParams,
}: {
  searchParams?: { type?: string }
}) {
  await connectDB()

  const filter: any = {}

  if (searchParams?.type && searchParams.type !== "all") {
    filter.type = searchParams.type
  }

  const applications = await PartnerApplication.find(filter)
    .sort({ createdAt: -1 })
    .lean()

  const totalCount = await PartnerApplication.countDocuments()
  const techCount = await PartnerApplication.countDocuments({ type: "technology" })
  const hostingCount = await PartnerApplication.countDocuments({ type: "hosting" })
  const bayilikCount = await PartnerApplication.countDocuments({ type: "bayilik" })

  return (
    <div className="p-10 space-y-8">
      
      <h1 className="text-3xl font-bold">
        Başvurular
      </h1>

      <div className="flex gap-4">
        <FilterButton label="Tümü" count={totalCount} href="/admin/partners?type=all" />
        <FilterButton label="Technology" count={techCount} href="/admin/partners?type=technology" />
        <FilterButton label="Hosting" count={hostingCount} href="/admin/partners?type=hosting" />
        <FilterButton label="Bayilik" count={bayilikCount} href="/admin/partners?type=bayilik" />
      </div>

      <div className="overflow-x-auto border rounded-xl shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="p-4 text-left">Şirket</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Tip</th>
              <th className="p-4 text-left">Durum</th>
              <th className="p-4 text-left">Tarih</th>
            </tr>
          </thead>

          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-6 text-center text-slate-500">
                  Başvuru bulunamadı.
                </td>
              </tr>
            ) : (
              applications.map((app: any) => (
                <tr key={app._id} className="border-t hover:bg-slate-50">
                  
                  <td className="p-4 font-medium">
                    {app.companyName}
                  </td>

                  <td className="p-4">
                    {app.email}
                  </td>

                  <td className="p-4">
                    <TypeBadge type={app.type} />
                  </td>

                  <td className="p-4">
                    <StatusSelect
                      id={app._id.toString()}
                      currentStatus={app.status}
                    />
                  </td>

                  <td className="p-4 text-slate-500">
                    {new Date(app.createdAt).toLocaleDateString()}
                  </td>

                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
function TypeBadge({ type }: { type: string }) {

  const styles: Record<string, string> = {
    technology: "bg-indigo-100 text-indigo-700",
    hosting: "bg-blue-100 text-blue-700",
    bayilik: "bg-purple-100 text-purple-700",
  }

  const labels: Record<string, string> = {
    technology: "Technology",
    hosting: "Hosting",
    bayilik: "Bayilik",
  }

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[type]}`}>
      {labels[type]}
    </span>
  )
}
function FilterButton({
  label,
  count,
  href,
}: {
  label: string
  count: number
  href: string
}) {
  return (
    <a
      href={href}
      className="px-4 py-2 rounded-lg border bg-white hover:bg-slate-50 text-sm font-medium"
    >
      {label} ({count})
    </a>
  )
}
