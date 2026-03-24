import Link from "next/link";
import { ICONS } from "@/lib/icons";

interface ResourceStoryCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
  category?: string;
  date?: string;
}

const ArrowUpRightIcon = ICONS.arrowUpRight;

export default function ResourceStoryCard({
  title,
  description,
  href,
  image,
  category,
  date,
}: ResourceStoryCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
    >
      <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">
            Görsel
          </div>
        )}
      </div>

      <div className="p-5">
        {(category || date) && (
          <div className="mb-3 flex items-center justify-between gap-3 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
            <span>{category}</span>
            <span>{date}</span>
          </div>
        )}

        <h3 className="line-clamp-2 text-lg font-semibold leading-7 text-slate-900 transition-colors group-hover:text-sky-700">
          {title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
          {description}
        </p>

        <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sky-700">
          İncele
          <ArrowUpRightIcon className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
