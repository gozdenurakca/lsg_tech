import DomainTldPage from "@/components/domain/DomainTldPage";

// /domain/tld/[slug] — Uzantıya özel landing sayfası
// Örnek: /domain/tld/com-tr, /domain/tld/com, /domain/tld/io

interface Props {
  params: { slug: string };
}

export default function Page({ params }: Props) {
  return <DomainTldPage slug={params.slug} />;
}

export function generateStaticParams() {
  return [
    { slug: "com-tr" },
    { slug: "com" },
    { slug: "net" },
    { slug: "org" },
    { slug: "io" },
    { slug: "net-tr" },
  ];
}
