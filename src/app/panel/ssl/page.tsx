import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ICONS } from "@/lib/icons";
import Link from "next/link";
import connectDB from "@/lib/db";
import Certificate from "@/models/Certificate";

export default async function SslCertificatesPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) redirect("/giris");

  await connectDB();

  // Veritabanından gerçek sertifikaları çekiyoruz
  const rawCertificates = await Certificate.find({ user: session.user.id })
    .sort({ expiresAt: 1 }) // Önce süresi dolacak olanlar gelsin
    .lean();

  const certificates = JSON.parse(JSON.stringify(rawCertificates));

  // Eğer DB boş ise Dummy verilerle UI'ın nasıl görüneceğini gösterelim (Demoya özel)
  const displayCerts = certificates.length > 0 ? certificates : [
    {
      _id: "cert_1",
      domain: "guvenlisirket.com.tr",
      status: "active",
      createdAt: "2024-01-15T10:00:00Z",
      expiresAt: "2025-01-15T10:00:00Z",
      type: "Pro SSL - Kurumsal Doğrulama (OV)",
    },
    {
      _id: "cert_2",
      domain: "startup-projem.io",
      status: "pending",
      createdAt: "2024-03-25T14:30:00Z",
      expiresAt: "2025-03-25T14:30:00Z",
      type: "Standart SSL - Domain Doğrulama (DV)",
    },
    {
      _id: "cert_3",
      domain: "eskitasarimim.net",
      status: "expired",
      createdAt: "2022-05-10T09:15:00Z",
      expiresAt: "2023-05-10T09:15:00Z",
      type: "Premium SSL - Genişletilmiş (EV)",
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* BAŞLIK VE YENİ ALIM */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">SSL Sertifikalarım</h1>
          <p className="text-slate-500 mt-2 text-sm max-w-2xl">
            Sipariş verdiğiniz tüm SSL sertifikalarını görüntüleyebilir, doğrulama adımlarını tamamlayabilir ve sertifika dosyalarınızı (CRT, Private Key) indirebilirsiniz.
          </p>
        </div>
        <Link 
          href="/pricing/ssl" 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5"
        >
          <ICONS.shieldCheck size={18} />
          Yeni SSL Al
        </Link>
      </div>

      {/* İSTATİSTİKLER */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
            <ICONS.shield size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Toplam Sertifika</p>
            <p className="text-2xl font-bold text-slate-900 leading-none mt-1">{displayCerts.length}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
            <ICONS.checkCircle size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Aktif Koruma</p>
            <p className="text-2xl font-bold text-slate-900 leading-none mt-1">
              {displayCerts.filter((c: any) => c.status === "active").length}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
            <ICONS.clock size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Doğrulama Bekleyen</p>
            <p className="text-2xl font-bold text-slate-900 leading-none mt-1">
              {displayCerts.filter((c: any) => c.status === "pending").length}
            </p>
          </div>
        </div>
      </div>

      {/* TABLO */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200/80 overflow-hidden">
        {displayCerts.length === 0 ? (
          <div className="py-24 flex flex-col items-center justify-center text-center px-4">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100">
              <ICONS.shieldX size={32} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-700">Henüz sertifikanız yok</h3>
            <p className="text-sm text-slate-500 mt-2 max-w-sm">
              Sitenizin güvenliğini hemen sağlamak için bir SSL sertifikası satın alabilirsiniz.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 uppercase text-[11px] font-extrabold tracking-wider text-slate-500">
                  <th className="px-6 py-4">Alan Adı (Domain)</th>
                  <th className="px-6 py-4">Sertifika Türü</th>
                  <th className="px-6 py-4">Durum / Doğrulama</th>
                  <th className="px-6 py-4">Bitiş Tarihi</th>
                  <th className="px-6 py-4 text-right">İşlemler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {displayCerts.map((cert: any) => {
                  const expDate = new Date(cert.expiresAt).toLocaleDateString("tr-TR");
                  
                  const isExpired = cert.status === "expired";
                  const isPending = cert.status === "pending";
                  const isActive = cert.status === "active";
                  
                  // Bitişine az kalmış mı hesaplama (örneğin 30 günden az)
                  const now = new Date();
                  const targetDate = new Date(cert.expiresAt);
                  const diffTime = targetDate.getTime() - now.getTime();
                  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                  const expiringSoon = diffDays > 0 && diffDays <= 30;

                  return (
                    <tr key={cert._id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border 
                            ${isActive ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 
                              isPending ? 'bg-amber-50 text-amber-600 border-amber-100' : 
                              'bg-rose-50 text-rose-600 border-rose-100'}`}
                          >
                            {isActive ? <ICONS.lock size={18} /> : 
                             isPending ? <ICONS.loader size={18} className="animate-spin-slow" /> : 
                             <ICONS.shieldX size={18} />}
                          </div>
                          <div>
                            <span className="font-bold text-[15px] text-slate-800 block">
                              {cert.domain}
                            </span>
                            {isActive && (
                              <a href={`https://${cert.domain}`} target="_blank" rel="noreferrer" className="text-xs text-blue-500 font-medium hover:underline inline-flex items-center gap-1 mt-0.5">
                                Siteye Git <ICONS.externalLink size={10} />
                              </a>
                            )}
                          </div>
                        </div>
                      </td>
                      
                      <td className="px-6 py-5">
                        <span className="text-sm text-slate-600 font-medium bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60">
                          {cert.type || "Standart SSL"}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex flex-col gap-1 items-start">
                          {isActive && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-full border border-emerald-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              Aktif Kullanımda
                            </span>
                          )}
                          {isExpired && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-700 text-[11px] font-bold rounded-full border border-rose-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                              Süresi Doldu
                            </span>
                          )}
                          {isPending && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 text-[11px] font-bold rounded-full border border-amber-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                              Doğrulama Bekliyor
                            </span>
                          )}

                          {/* Doğrulama Yöntemi Bilgisi */}
                          {isPending && (
                            <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1 ml-1 mt-1">
                              <ICONS.mailCheck size={10} /> E-posta Doğrulaması (admin@{cert.domain})
                            </span>
                          )}
                        </div>
                      </td>
                      
                      <td className="px-6 py-5 text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <span className={isExpired ? "text-rose-600 font-bold" : expiringSoon ? "text-amber-600 font-bold" : "text-slate-600"}>
                            {expDate}
                          </span>
                          {expiringSoon && !isExpired && (
                            <span title={`${diffDays} gün kaldı`} className="flex h-2.5 w-2.5 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {isPending && (
                            <button className="text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-4 py-2 rounded-xl transition-colors shadow-sm flex items-center gap-1.5">
                              <ICONS.key size={14} /> Doğrula
                            </button>
                          )}
                          
                          {isActive && (
                            <button className="text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-4 py-2 rounded-xl transition-colors shadow-sm flex items-center gap-1.5">
                              <ICONS.download size={14} /> Sertifikayı İndir
                            </button>
                          )}

                          <button className="text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 w-9 h-9 flex items-center justify-center rounded-xl transition-colors shadow-sm" title="Ayarlar">
                            <ICONS.settings size={14} />
                          </button>
                        </div>
                        {/* Mobil görünüm için yedek buton */}
                        <div className="xl:hidden">
                            <button className="text-xs font-bold text-blue-600 hover:text-blue-800">
                              Yönet
                            </button>
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
