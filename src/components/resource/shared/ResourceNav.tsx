type Props = {
  items: { id: string; label: string }[];
  activeId: string;
  onSelect: (id: string) => void;
};

export default function ResourceNav({ items, activeId, onSelect }: Props) {
  return (
    <div className="border-y border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
        {items.map((item) => {
          const isActive = activeId === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                isActive
                  ? "bg-sky-600 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
