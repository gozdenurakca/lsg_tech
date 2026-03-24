"use client";

interface Props {
  open: boolean;
  onClose: () => void;

  selectedExts: string[];
  toggleExt: (ext: string) => void;

  showAvailableOnly: boolean;
  setShowAvailableOnly: (val: boolean) => void;

  sortBy: string;
  setSortBy: (val: string) => void;

  clearFilters: () => void;
  total: number;
}

export default function FilterDrawer({
  open,
  onClose,
  selectedExts,
  toggleExt,
  showAvailableOnly,
  setShowAvailableOnly,
  sortBy,
  setSortBy,
  clearFilters,
  total,
}: Props) {
  if (!open) return null;

  const EXTENSIONS = [".com.tr", ".com", ".net", ".org", ".io"];

  return (
    <>
      {/* OVERLAY */}
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />

      {/* DRAWER */}
      <div className="fixed right-0 top-0 w-80 h-full bg-white z-50 shadow-2xl flex flex-col">
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="font-bold text-lg">Filtreler</h2>
          <button
            onClick={onClose}
            className="text-sm text-slate-500 hover:text-slate-900"
          >
            Kapat
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-6">
          {/* EXTENSIONS */}
          <div>
            <p className="text-sm font-semibold mb-2">Uzantılar</p>
            <div className="flex flex-wrap gap-2">
              {EXTENSIONS.map((ext) => {
                const active = selectedExts.includes(ext);

                return (
                  <button
                    key={ext}
                    onClick={() => toggleExt(ext)}
                    className={`px-3 py-1.5 rounded-lg text-sm border transition
                    ${
                      active
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-slate-700 border-slate-200"
                    }`}
                  >
                    {ext}
                  </button>
                );
              })}
            </div>
          </div>

          {/* AVAILABLE */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Sadece müsait olanlar</span>
            <input
              type="checkbox"
              checked={showAvailableOnly}
              onChange={(e) => setShowAvailableOnly(e.target.checked)}
            />
          </div>

          {/* SORT */}
          <div>
            <p className="text-sm font-semibold mb-2">Sıralama</p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg text-sm"
            >
              <option value="popular">Popüler</option>
              <option value="price-asc">Fiyat (artan)</option>
              <option value="price-desc">Fiyat (azalan)</option>
            </select>
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t px-5 py-4 flex items-center gap-3">
          <button
            onClick={clearFilters}
            className="flex-1 text-sm border border-slate-200 py-2 rounded-lg"
          >
            Temizle
          </button>

          <button
            onClick={onClose}
            className="flex-1 bg-slate-900 text-white text-sm font-bold py-2 rounded-lg"
          >
            {total} sonuç göster
          </button>
        </div>
      </div>
    </>
  );
}

/* (mobile filters)

export default function FilterDrawer({ open, onClose }: any) {
  if (!open) return null;

  return (
    <div className="fixed right-0 top-0 w-80 bg-white h-full shadow-xl">
      <button onClick={onClose}>Kapat</button>

      <p>Filtreler</p>
    </div>
  );
}
*/
