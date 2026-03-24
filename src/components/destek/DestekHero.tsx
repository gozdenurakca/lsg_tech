import { ICONS } from "@/lib/icons";

interface Topic {
  icon: keyof typeof ICONS;
  label: string;
  href: string;
}

interface ContactHeroProps {
  topics: Topic[];
}

export default function ContactHero({ topics }: ContactHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#152238] text-white">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-emerald-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 pt-40 pb-32 text-center relative">
        <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Destek
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Yardım etmek için <br />
          <span className="text-emerald-400">buradayız</span>
        </h1>

        <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
          Alan adı transferinden SSL kurulumuna kadar her konuda destek ekibimiz
          yanınızda.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {topics.map((topic) => {
            const Icon = ICONS[topic.icon] || ICONS.help;

            return (
              <a
                key={topic.label}
                href={topic.href}
                className="flex items-center gap-2 px-4 py-2 rounded-lg
                bg-white/5 hover:bg-white/10
                border border-white/10 hover:border-emerald-500/40
                text-white text-sm transition-all backdrop-blur-md"
              >
                <Icon size={16} />
                {topic.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
