import type { ReactNode } from "react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface ResourceHeroProps {
  title: string;
  description?: string;
  badge?: string;
  icon?: ReactNode;
  heroVisual?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
}

export default function ResourceHero({
  title,
  description,
  badge,
  icon,
  heroVisual,
  breadcrumbs,
}: ResourceHeroProps) {
  const hasVisual = Boolean(heroVisual);

  return (
    <section className="border-b border-slate-200 bg-[#F7F9FC]">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-12 sm:px-6 lg:px-8 lg:pt-16 lg:pb-14">
        <div
          className={
            hasVisual
              ? "grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_420px]"
              : "max-w-3xl"
          }
        >
          <div className="min-w-0">
            {breadcrumbs && breadcrumbs.length > 0 && (
              <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                {breadcrumbs.map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="transition hover:text-sky-600"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-slate-700 font-medium">
                        {item.label}
                      </span>
                    )}

                    {i < breadcrumbs.length - 1 && (
                      <span className="text-slate-300">/</span>
                    )}
                  </span>
                ))}
              </div>
            )}

            {(badge || icon) && (
              <div className="mb-4 flex items-center gap-3">
                {icon && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-sky-700 shadow-sm">
                    {icon}
                  </div>
                )}

                {badge && (
                  <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                    {badge}
                  </span>
                )}
              </div>
            )}

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
              {title}
            </h1>

            {description && (
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                {description}
              </p>
            )}
          </div>

          {hasVisual && (
            <div className="relative hidden lg:block">
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                {heroVisual}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
