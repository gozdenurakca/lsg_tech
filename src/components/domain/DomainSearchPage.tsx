"use client";

// Alan Adı Sorgula sayfasının page-level bileşeni.
// tamamen marketing page, conversion odaklı.

import DomainHero from "./DomainHero";
import DomainExtensions from "./DomainExtensions";
import DomainFeatures from "./DomainFeatures";
import DomainServicesGrid from "./DomainServicesGrid";
import DomainHowTo from "./DomainHowTo";

export default function DomainSearchPage() {
  return (
    <main className="min-h-screen">
      <DomainHero />
      <DomainExtensions />
      <DomainFeatures />
      <DomainServicesGrid />
      <DomainHowTo />
    </main>
  );
}
