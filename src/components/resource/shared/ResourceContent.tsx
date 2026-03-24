import { ReactNode } from "react";

interface ResourceContentProps {
  children: ReactNode;
  sidebar?: ReactNode;
  fullWidth?: boolean;
}

export default function ResourceContent({
  children,
  sidebar,
  fullWidth = false,
}: ResourceContentProps) {
  if (fullWidth || !sidebar) {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8 lg:py-12">
        <div className="min-w-0">{children}</div>

        <aside className="lg:sticky lg:top-28 lg:self-start">{sidebar}</aside>
      </div>
    </section>
  );
}
