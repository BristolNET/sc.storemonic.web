import { useEffect, useState } from "react";
import type { Product } from "../objects/product";
import ProductDisplay from "./ProductDisplay";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/service";

export default function ProductPage() {

  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
  if (!productId) {
      setProduct(null);
      return;
  }
  const id = parseInt(productId, 10);
  if (isNaN(id)) {
      setProduct(null);
      return;
  }
  const p: Product | undefined = getProduct(id);
  setProduct(p ?? null);
  }, [productId]);

  if (!product) return <p className="p-4">Product not found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <ProductDisplay product={product} />
    </div>
  );
}
