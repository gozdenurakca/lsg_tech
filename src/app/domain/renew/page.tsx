/*
Alan adı yenileme sayfası, kayıtlı domain'in süresini uzatmak için DomainRenewForm formunu render ediyor.
*/

import DomainRenewForm from "@/components/domain/DomainRenewForm";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
          Alan Adı Yenileme
        </h1>
        <p className="text-slate-500 mb-10">
          Kayıtlı alan adınızın süresini uzatın.
        </p>
        <DomainRenewForm />
      </div>
    </main>
  );
}
