// src/types.ts
export interface ProductOption {
  id: string;
  name: string;         // e.g. "Size" or "Color"
  values: string[];     // e.g. ["Small", "Medium", "Large"]
}

export interface ProductImage {
  url: string;
  alt?: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  storeId: number;
  // options?: ProductOption[];     // e.g. Size, Color
  // availableSizes?: string[];     // convenience array if just Size
  // availableColors?: string[];
  // images?: ProductImage[];
  // sku?: string;
  // inventoryQuantity?: number;
  // Add other fields as needed:
  // categories?: string[];
  // variants?: ProductVariant[];
}

export interface ProductVariant {
  id: string;
  title: string;
  price?: number;
  sku?: string;
  options: Record<string, string>; // e.g. { Size: "M", Color: "Blue" }
  inventoryQuantity?: number;
  image?: ProductImage;
}
