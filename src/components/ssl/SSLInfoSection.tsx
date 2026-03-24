import { ICONS } from "@/lib/icons";

type Stat = { title: string; desc: string };

type Props = {
  title: string;
  description: string;
  stats?: Stat[];
  features?: string[];
};

export default function SslInfoSection({
  title,
  description,
  stats = [],
  features = [],
}: Props) {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-[clamp(32px,3vw,44px)] font-extrabold text-slate-900 mb-6 tracking-tight">
              {title}
            </h2>

            <p className="text-[17px] text-slate-600 leading-relaxed mb-10 max-w-xl">
              {description}
            </p>

            {features.length > 0 && (
              <div>
                <h3 className="text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-5">
                  Kimler için ideal?
                </h3>

                <ul className="space-y-4">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[15px] text-slate-700 hover:text-slate-900 transition"
                    >
                      <ICONS.check
                        size={18}
                        className="text-blue-600 flex-shrink-0 mt-[2px]"
                      />
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {stats.length > 0 && (
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div
                  key={s.title}
                  className="group relative bg-white border border-slate-200 rounded-2xl p-7 transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100"
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-50 to-transparent" />

                  <div className="relative">
                    <div className="text-[32px] font-extrabold text-blue-900 mb-3">
                      {s.title}
                    </div>

                    <div className="text-[13px] text-slate-500 font-medium leading-relaxed">
                      {s.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
