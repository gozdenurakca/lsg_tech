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
  tagline: string;
  price: number;
  oldPrice?: number | null;
    period?: string; 

  // UI
  color: string;
  lightBg: string;
  textColor: string;
  borderColor: string;

  highlights: string[];
  featured?: boolean;
};

export type DomainResult = Extension & {
  available: boolean | null;
  loading: boolean;
};