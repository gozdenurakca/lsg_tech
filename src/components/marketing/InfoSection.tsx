"use client";

export type InfoItem = {
  title: string;
  desc: string;
};

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  items?: InfoItem[];
};

export default function InfoSection({ id, eyebrow, title, items = [] }: Props) {
  return (
    <section id={id} className="py-28 bg-[#f1f5f9] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          {eyebrow && (
            <p className="text-[11px] uppercase tracking-[0.25em] text-blue-500 font-bold mb-4">
              {eyebrow}
            </p>
          )}
          <h2 className="text-[clamp(30px,3vw,44px)] font-bold text-slate-900">
            {title}
          </h2>
        </div>

        {items.length === 0 ? (
          <div className="text-center text-slate-400 text-sm">
            İçerik bulunamadı
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-x-16 gap-y-16">
            {items.map((item, i) => (
              <div key={item.title + i}>
                <h3 className="text-[20px] font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-[16px] text-slate-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
