import type { ReactNode } from "react";
import { ICONS } from "@/lib/icons";

export interface ResourceSection {
  id: string;
  heading: string;
  icon: keyof typeof ICONS;
  body: string;
  bullets?: string[];
}

interface ResourceSectionCardProps {
  section: ResourceSection;
}

// JSX içerik gerektiren teknik sayfalar için genişletilmiş versiyon
export interface ResourceSectionBlockProps {
  id: string;
  icon: keyof typeof ICONS;
  title: string;
  children: ReactNode;
}

const CheckIcon = ICONS.checkCircle;

export function ResourceSectionCard({ section }: ResourceSectionCardProps) {
  const SectionIcon = ICONS[section.icon];

  return (
    <article
      id={section.id}
      className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md lg:p-8"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-700">
          <SectionIcon className="h-5 w-5" />
        </div>

        <h2 className="text-xl font-semibold text-slate-900">
          {section.heading}
        </h2>
      </div>

      <div className="mb-5 h-px bg-slate-200" />

      <div className="whitespace-pre-line text-[15px] leading-7 text-slate-600">
        {section.body}
      </div>

      {(section.bullets ?? []).length > 0 && (
        <ul className="mt-6 space-y-3">
          {(section.bullets ?? []).map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-slate-600"
            >
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function ResourceSectionBlock({ id, icon, title, children }: ResourceSectionBlockProps) {
  const SectionIcon = ICONS[icon];

  return (
    <article
      id={id}
      className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md lg:p-8"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-700">
          <SectionIcon className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      </div>
      <div className="mb-5 h-px bg-slate-200" />
      <div className="text-[15px] leading-7 text-slate-600">{children}</div>
    </article>
  );
}

interface ResourceSectionListProps {
  sections: ResourceSection[];
}

export function ResourceSectionList({ sections }: ResourceSectionListProps) {
  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <ResourceSectionCard key={section.id} section={section} />
      ))}
    </div>
  );
}
