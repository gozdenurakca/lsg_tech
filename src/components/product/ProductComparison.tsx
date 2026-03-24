import { ICONS } from "@/lib/icons";

export type ComparisonFeature = {
  name: string;
  values: (string | boolean)[];
};

export type ComparisonProduct = {
  name: string;
  featured?: boolean;
};

type Props = {
  products: ComparisonProduct[];
  features: ComparisonFeature[];
  className?: string;
};

const CheckIcon = ICONS.checkCircle;
const XIcon = ICONS.xCircle;
function CellValue({ value }: { value: string | boolean }) {
  if (value === true)
    return <CheckIcon size={18} className="text-emerald-500 mx-auto" />;

  if (value === false)
    return <XIcon size={18} className="text-slate-300 mx-auto" />;

  return <span className="text-[13px] text-slate-700">{value}</span>;
}

export default function ProductComparison({
  products,
  features,
  className = "",
}: Props) {
  return (
    <div className={`overflow-x-auto mt-10 ${className}`}>
      <table className="w-full border border-slate-200 rounded-2xl overflow-hidden text-left">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="p-4 text-[13px] font-semibold text-slate-500 w-48">
              Özellik
            </th>
            {products.map((p) => (
              <th
                key={p.name}
                className={`p-4 text-[13px] font-bold text-center ${
                  p.featured ? "text-blue-900" : "text-slate-900"
                }`}
              >
                {p.name}
                {p.featured && (
                  <span className="ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-900 text-white align-middle">
                    Önerilen
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {features.map((f, idx) => (
            <tr
              key={f.name}
              className={`border-t border-slate-100 ${
                idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
              }`}
            >
              <td className="p-4 text-[13px] font-medium text-slate-700">
                {f.name}
              </td>
              {f.values.map((val, i) => (
                <td key={i} className="p-4 text-center">
                  <CellValue value={val} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
