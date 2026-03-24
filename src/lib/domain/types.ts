//Domain modülü için ortak TypeScript tipleri 
// TypeScript modelleri

/* 
import type { Extension } from "./extensions";

export type DomainResult = Extension & {
  available: boolean | null;
  loading: boolean;
};
*/

export type Extension = {
  ext: string;
  label?: string;
  tagline?: string;
  price: number;
  oldPrice?: number | null;
  period?: string;

  // UI (opsiyonel — bazı kullanım yerlerinde olmayabilir)
  color?: string;
  lightBg?: string;
  textColor?: string;
  borderColor?: string;

  highlights?: string[];
  featured?: boolean;
};

export type DomainResult = Extension & {
  available: boolean | null;
  loading: boolean;
};