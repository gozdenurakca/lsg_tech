"use client";

type NavbarSearchProps = {
  isSearchOpen: boolean;
  setIsSearchOpen: (v: boolean) => void;
};

export default function NavbarSearch({
  isSearchOpen,
  setIsSearchOpen,
}: NavbarSearchProps) {
  if (!isSearchOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-[60] flex items-start justify-center pt-32 animate-fade-in"
      onClick={() => setIsSearchOpen(false)}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 animate-slide-in-down"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="relative">
            <input
              type="text"
              placeholder="SSL sertifikası, güvenlik, domain, hosting..."
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all"
              autoFocus
            />

            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            Popüler:{" "}
            <span className="text-primary cursor-pointer hover:underline">
              DV SSL
            </span>
            ,{" "}
            <span className="text-primary cursor-pointer hover:underline">
              Multi-Domain SSL
            </span>
            ,{" "}
            <span className="text-primary cursor-pointer hover:underline">
              Kurumsal SSL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
