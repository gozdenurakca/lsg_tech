import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  stats: { title: string; desc: string }[];
  features: string[];
}

export default function SSLInfoSection({
  title,
  description,
  stats,
  features,
}: Props) {
  return (
    <section className="bg-slate-50 py-24 border-t">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            {title}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-8">{description}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {stats.map((x) => (
              <div
                key={x.title}
                className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm"
              >
                <div className="text-lg font-bold text-slate-900">
                  {x.title}
                </div>

                <div className="text-sm text-slate-600 mt-1">{x.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-200 to-indigo-200 blur-xl rounded-3xl opacity-60" />

          <div className="relative bg-white border border-slate-200 rounded-3xl p-10 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
              <Shield className="w-7 h-7 text-blue-900" />
            </div>

            <h3 className="text-2xl font-bold mt-6">Kimler İçin Uygun?</h3>

            <div className="mt-6 space-y-3 text-sm text-slate-700">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3 flex-wrap">
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition"
              >
                Paketlere Git
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
