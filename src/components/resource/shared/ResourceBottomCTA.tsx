import Link from "next/link";
import { ICONS } from "@/lib/icons";

interface ResourceBottomCTAProps {
  heading: string;
  subtext: string;
  buttonLabel: string;
  buttonHref: string;
  className?: string;
}

export default function ResourceBottomCTA({
  heading,
  subtext,
  buttonLabel,
  buttonHref,
  className = "",
}: ResourceBottomCTAProps) {
  const ArrowRightIcon = ICONS.arrowRight;

  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-[#F7F9FC] p-6 sm:p-8 ${className}`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <h3 className="text-xl font-semibold text-slate-900">{heading}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{subtext}</p>
        </div>

        <Link
          href={buttonHref}
          className="group inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          {buttonLabel}
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
