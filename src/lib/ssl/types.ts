export type Years = 1 | 2 | 3;

export type Product = {
  _id?: string;

  name: string;
  slug: string;

  brand?: string;
  validation?: "DV" | "OV" | "EV";
  productType?: string;
  tier?: "Basic" | "Premium" | "Enterprise";

  description?: string;
  shortDescription?: string;

  issuanceTime?: string;

  features?: string[];

  originalPrice?: number;
  discount?: number;

  featured?: boolean;

  price?: {
    oneYear?: number;
    twoYear?: number;
    threeYear?: number;
    pricePerDomain?: number;
  };

  specs?: {
    Warranty?: string;
    Encryption?: string;
    Issuance?: string;
  };

  domainSupport?: {
    standard?: boolean;
    wildcard?: boolean;
    multiDomainLimit?: number;
  };

  // 🔥 UI KULLANIMI İÇİN EKLENENLER (CRITICAL)
  period?: string;                 // "/yıl"
  tag?: string | null;             // badge (örn: "En Popüler")
  warranty?: string;               // specs.Warranty flatten
  issuance?: string;               // specs.Issuance flatten

  // 🔥 NAV / LINK
  href?: string;
};