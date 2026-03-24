import { Suspense } from "react";
import DomainResultsPage from "@/components/domain/results/DomainResultsPage";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7F9FC]" />}>
      <DomainResultsPage />
    </Suspense>
  );
}
