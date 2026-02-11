export enum ProductCategory {
  CANDLE = 'Bougies',
  DIFFUSER = 'Diffuseurs',
  SPRAY = 'Sprays',
  INCENSE = 'Encens',
  SET = 'Coffrets'
}

export interface OlfactoryProfile {
  top: string[];
  heart: string[];
  base: string[];
  intensity: number; // 1-5
  floral: number; // 0-100 for chart
  woody: number;
  spicy: number;
  fresh: number;
  sweet: number;
  oriental: number;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  story: string;
  image: string;
  secondaryImage?: string;
  weight?: string;
  olfactory: OlfactoryProfile;
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Page = 'HOME' | 'SHOP' | 'PRODUCT_DETAIL' | 'UNIVERSE' | 'JOURNAL' | 'CONTACT';