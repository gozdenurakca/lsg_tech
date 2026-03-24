import type { ReactNode } from "react";
import ResourceHero from "./ResourceHero";
import ResourceContent from "./ResourceContent";
import ResourceSidebar, { type ResourceSidebarProps } from "./ResourceSidebar";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export interface ResourcePageLayoutProps {
  title: string;
  description?: string;
  badge?: string;
  icon?: ReactNode;
  heroVisual?: ReactNode;
  sidebar?: ResourceSidebarProps;
  fullWidth?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  children: ReactNode;
}

export default function ResourcePageLayout({
  title,
  description,
  badge,
  icon,
  heroVisual,
  sidebar,
  fullWidth = false,
  breadcrumbs,
  children,
}: ResourcePageLayoutProps) {
  return (
    <div className="min-h-screen bg-white pt-24 text-slate-900">
      <ResourceHero
        title={title}
        description={description}
        badge={badge}
        icon={icon}
        heroVisual={heroVisual}
        breadcrumbs={breadcrumbs}
      />

      <ResourceContent
        fullWidth={fullWidth || !sidebar}
        sidebar={sidebar ? <ResourceSidebar {...sidebar} /> : undefined}
      >
        {children}
      </ResourceContent>
    </div>
  );
}
