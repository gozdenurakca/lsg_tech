import { ICONS } from "@/lib/icons";
import Link from "next/link";

export interface SidebarLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SidebarCta {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  badge?: string;
}

export interface ResourceSidebarProps {
  relatedLinks?: { heading: string; links: SidebarLink[] }[];
  cta?: SidebarCta;
  highlightBox?: {
    icon?: keyof typeof ICONS;
    title: string;
    description: string;
  };
  className?: string;
}

const ArrowIcon = ICONS.arrowRight;
const ExternalIcon = ICONS.externalLink;
const ShieldIcon = ICONS.shield;
const TagIcon = ICONS.tag;

export default function ResourceSidebar({
  relatedLinks = [],
  cta,
  highlightBox,
  className = "",
}: ResourceSidebarProps) {
  const HighlightIcon = highlightBox?.icon
    ? ICONS[highlightBox.icon]
    : ShieldIcon;

  return (
    <div className={`space-y-5 ${className}`}>
      {highlightBox && (
        <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-sky-700">
              <HighlightIcon className="h-5 w-5" />
            </div>

            <div>
              <p className="mb-1 text-sm font-semibold text-slate-900">
                {highlightBox.title}
              </p>
              <p className="text-sm leading-6 text-slate-600">
                {highlightBox.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {cta && (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          {cta.badge && (
            <span className="mb-3 inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700">
              <TagIcon className="h-3 w-3" />
              {cta.badge}
            </span>
          )}

          <h3 className="mb-2 text-base font-semibold text-slate-900">
            {cta.title}
          </h3>

          <p className="mb-4 text-sm leading-6 text-slate-600">
            {cta.description}
          </p>

          <Link
            href={cta.buttonHref}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            {cta.buttonLabel}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      )}

      {relatedLinks.map((group, index) => (
        <div
          key={index}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            {group.heading}
          </h4>

          <ul className="space-y-2">
            {group.links.map((link, i) => (
              <li key={i}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-2 text-sm text-slate-600 transition hover:text-sky-700"
                  >
                    <span>{link.label}</span>
                    <ExternalIcon className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between gap-2 text-sm text-slate-600 transition hover:text-sky-700"
                  >
                    <span>{link.label}</span>
                    <ArrowIcon className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
