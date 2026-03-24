//  (search + filters)

import { Search } from "lucide-react";

export default function ResultsHeader({
  searchInput,
  setSearchInput,
  onSearch,
}: any) {
  return (
    <div className="sticky top-0 bg-white p-4 flex gap-2">
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="border px-3 py-2 flex-1"
      />

      <button onClick={onSearch}>
        <Search />
      </button>
    </div>
  );
}
