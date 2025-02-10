export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  category: ElementCategory;
  electronConfiguration: string;
  shells: number[];
  neutrons: number;
  isotopes: Isotope[];
}

export interface Isotope {
  massNumber: number;
  abundance: number;
}

export type ElementCategory =
  | 'noble-gas'
  | 'alkali-metal'
  | 'alkaline-earth-metal'
  | 'transition-metal'
  | 'post-transition-metal'
  | 'metalloid'
  | 'nonmetal'
  | 'halogen'
  | 'lanthanide'
  | 'actinide';