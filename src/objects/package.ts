import type { Product } from "./product";

export interface Package {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  products: Product[];
  storeId: number;
}