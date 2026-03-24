import DomainTransferForm from "@/components/domain/DomainTransferForm";

// Alan adı transfer sayfası
//başka bir kayıt şirketinden LSG'ye domain taşımak için DomainTransferForm formunu render ediyor.

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
          Alan Adı Transfer
        </h1>
        <p className="text-slate-500 mb-10">
          Mevcut kayıt şirketinizdeki alan adınızı LSG Teknoloji'ye taşıyın.
        </p>
        <DomainTransferForm />
      </div>
    </main>
  );
}
