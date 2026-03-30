import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ICONS } from "@/lib/icons";
import Link from "next/link";

export default async function DomainsPage() {
  const session = await getServerSession(authOptions);
  
  // Güvenlik: Kullanıcı giriş yapmamışsa yönlendir.
  if (!session) redirect("/giris");

  // Geçici (MOCK) Veri: İleride veritabanına bağlanacak (örn: Domain.find({ userId: session.user.id }))
  const mockDomains = [
    {
      _id: "dom_1",
      name: "guvenlisirket.com.tr",
      status: "active",
      registeredAt: "2024-01-15T10:00:00Z",
      expiresAt: "2025-01-15T10:00:00Z",
      autoRenew: true,
      provider: "nic.tr"
    },
    {
      _id: "dom_2",
      name: "startup-projem.io",
      status: "active",
      registeredAt: "2023-11-20T14:30:00Z",
      expiresAt: "2024-11-20T14:30:00Z",
      autoRenew: false,
      provider: "global"
    },
    {
      _id: "dom_3",
      name: "eskitasarimim.net",
      status: "expired",
      registeredAt: "2022-05-10T09:15:00Z",
      expiresAt: "2023-05-10T09:15:00Z",
      autoRenew: false,
      provider: "global"
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Üst Bilgi ve Aksiyon Alanı */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Alan Adlarım</h1>
          <p className="text-slate-500 mt-2 text-sm max-w-2xl">
            Satın aldığınız veya transfer ettiğiniz tüm alan adlarını yönetebilir, DNS kayıtlarını düzenleyebilir ve yenileme işlemlerini yapabilirsiniz.
          </p>
        </div>
        <Link 
          href="/domain" 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5"
        >
          <ICONS.globe size={18} />
          Yeni Alan Adı Al
        </Link>
      </div>

      {/* İstatistik Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
            <ICONS.globe2 size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Toplam Domain</p>
            <p className="text-2xl font-bold text-slate-900 leading-none mt-1">{mockDomains.length}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
            <ICONS.checkCircle size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Aktif Sayısı</p>
            <p className="text-2xl font-bold text-slate-900 leading-none mt-1">
              {mockDomains.filter(d => d.status === "active").length}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
            <ICONS.alertCircle size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Süresi Dolmuş</p>
            <p className="text-2xl font-bold text-slate-900 leading-none mt-1">
              {mockDomains.filter(d => d.status === "expired").length}
            </p>
          </div>
        </div>
      </div>

      {/* Alan Adı Listesi Tablosu */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200/80 overflow-hidden">
        {mockDomains.length === 0 ? (
          <div className="py-24 flex flex-col items-center justify-center text-center px-4">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100">
              <ICONS.globe size={32} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-700">Henüz alan adınız yok</h3>
            <p className="text-sm text-slate-500 mt-2 max-w-sm">
              Projeniz için hemen yeni bir alan adı kaydedebilir veya mevcut alan adınızı bize transfer edebilirsiniz.
            </p>
            <Link 
              href="/domain" 
              className="mt-6 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              Domain Sorgula
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 uppercase text-[11px] font-extrabold tracking-wider text-slate-500">
                  <th className="px-6 py-4">Alan Adı</th>
                  <th className="px-6 py-4">Durum</th>
                  <th className="px-6 py-4">Kayıt Tarihi</th>
                  <th className="px-6 py-4">Bitiş Tarihi</th>
                  <th className="px-6 py-4 text-center">Oto. Yenileme</th>
                  <th className="px-6 py-4 text-right">İşlemler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockDomains.map((domain) => {
                  const regDate = new Date(domain.registeredAt).toLocaleDateString("tr-TR");
                  const expDate = new Date(domain.expiresAt).toLocaleDateString("tr-TR");
                  
                  const isExpired = domain.status === "expired";
                  
                  return (
                    <tr key={domain._id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isExpired ? 'bg-slate-100 text-slate-400' : 'bg-blue-50 text-blue-600'}`}>
                            <ICONS.globe size={16} />
                          </div>
                          <div>
                            <span className="font-bold text-[15px] text-slate-800 block">
                              {domain.name}
                            </span>
                            <span className="text-xs text-slate-400 font-medium">
                              Sağlayıcı: {domain.provider === "nic.tr" ? "TRABİS (.TR)" : "Global ICANN"}
                            </span>
                          </div>
                        </div>
                      </td>
                      
                      <td className="px-6 py-5">
                        {domain.status === "active" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-full border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Aktif
                          </span>
                        )}
                        {domain.status === "expired" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-700 text-[11px] font-bold rounded-full border border-rose-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                            Süresi Doldu
                          </span>
                        )}
                        {domain.status === "pending_transfer" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 text-[11px] font-bold rounded-full border border-amber-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                            Transferde
                          </span>
                        )}
                      </td>
                      
                      <td className="px-6 py-5 text-sm text-slate-600 font-medium">
                        {regDate}
                      </td>
                      
                      <td className="px-6 py-5 text-sm font-medium">
                        <span className={isExpired ? "text-rose-600 font-bold" : "text-slate-600"}>
                          {expDate}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-center">
                        {/* Fake Toggle UI */}
                        <div className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors cursor-pointer ${domain.autoRenew ? "bg-blue-500" : "bg-slate-300"}`}>
                          <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${domain.autoRenew ? "translate-x-4.5" : "translate-x-1"}`} style={{ transform: domain.autoRenew ? 'translateX(18px)' : 'translateX(4px)' }} />
                        </div>
                      </td>

                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {isExpired ? (
                            <Link 
                              href={`/domain/renew?domain=${domain.name}`}
                              className="text-xs font-bold text-white bg-rose-500 hover:bg-rose-600 px-4 py-2 rounded-xl transition-colors shadow-sm"
                            >
                              Yenile
                            </Link>
                          ) : (
                            <Link 
                              href={`/panel/domains/${domain._id}`}
                              className="text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 px-4 py-2 rounded-xl transition-colors shadow-sm flex items-center gap-2"
                            >
                              <ICONS.settings size={14} />
                              Yönet
                            </Link>
                          )}
                        </div>
                        {/* Her zaman görünür bir buton, hover yapılmadığında da */}
                        <div className="xl:hidden">
                            <Link 
                              href={`/panel/domains/${domain._id}`}
                              className="text-xs font-bold text-blue-600 hover:text-blue-800"
                            >
                              Ayarlar
                            </Link>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
