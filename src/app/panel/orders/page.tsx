import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import connectDB from "@/lib/db";
import Order from "@/models/Order";
import { ICONS } from "@/lib/icons";

export default async function OrdersPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/giris");

  await connectDB();
  
  // SslOrder değil, artık Global E-Ticaret Sepet şemamız (Order) çekilecek.
  const rawOrders = await Order.find({ user: session.user.id })
    .sort({ createdAt: -1 })
    .lean();

  const orders = JSON.parse(JSON.stringify(rawOrders));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800">Siparişlerim</h1>
        <p className="text-slate-500 text-sm mt-1">Tüm SSL, Domain ve Hosting alışverişlerinizi buradan takip edebilir ve faturalarınızı indirebilirsiniz.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        {orders.length === 0 ? (
          <div className="py-24 flex flex-col items-center justify-center text-center px-4">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <ICONS.cart size={32} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-700">Henüz siparişiniz yok</h3>
            <p className="text-sm text-slate-500 mt-2 max-w-sm">
              TLS/SSL, Domain veya Hosting siparişi vererek dijital güvenlik yolculuğunuza hemen başlayabilirsiniz.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100 uppercase text-[10px] font-extrabold tracking-wider text-slate-500">
                  <th className="px-6 py-4">Sipariş No</th>
                  <th className="px-6 py-4">Sipariş Tarihi</th>
                  <th className="px-6 py-4">Detaylar (Ürünler)</th>
                  <th className="px-6 py-4">Toplam Tutar</th>
                  <th className="px-6 py-4">Durum</th>
                  <th className="px-6 py-4 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {orders.map((order: any) => {
                  const date = new Date(order.createdAt).toLocaleDateString("tr-TR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  });

                  return (
                    <tr key={order._id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-5 font-semibold text-sm text-slate-700">
                        {order.orderNumber || "LSG-ESKİ-SİPARİŞ"}
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-500">
                        {date}
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex flex-col gap-1">
                          {order.items && order.items.length > 0 ? (
                            order.items.map((item: any, i: number) => (
                              <div key={i} className="text-[13px] font-medium text-slate-700 bg-slate-100 inline-block px-2 py-1 rounded w-max border border-slate-200 shadow-sm">
                                {item.name} <span className="text-slate-400 font-normal ml-1 border-l border-slate-200 pl-1">{item.period} Yıl</span>
                              </div>
                            ))
                          ) : (
                            <span className="text-xs text-slate-400 italic">Ürün detayı yok</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-5 font-bold text-slate-800 text-sm">
                        ${order.amount.toFixed(2)}
                      </td>
                      <td className="px-6 py-5">
                        {order.status === "paid" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Ödendi
                          </span>
                        )}
                        {order.status === "pending" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full border border-amber-200 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                            Bekliyor
                          </span>
                        )}
                        {(order.status === "cancelled" || order.status === "failed") && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-700 text-xs font-bold rounded-full border border-red-200 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            İptal
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="text-blue-600 hover:text-blue-800 text-xs font-bold flex items-center gap-1.5 justify-end ml-auto bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition-colors border border-blue-200/50 shadow-sm">
                          <ICONS.file size={14} />
                          Fatura İndir
                        </button>
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
