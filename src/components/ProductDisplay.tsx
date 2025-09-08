import type { Product } from "../objects/product";

interface Props {
  product: Product;
}

export default function ProductDisplay({ product }: Props) {
  const { title, description, price, 
        //images, availableSizes, availableColors, options 
    } = product;

//   // Normalize options (so you can use Size/Color arrays or formal options)
//   const normalizedOptions: ProductOption[] = [
//     ...(options ?? []),
//     ...(availableSizes ? [{ id: "size", name: "Size", values: availableSizes }] : []),
//     ...(availableColors ? [{ id: "color", name: "Color", values: availableColors }] : []),
//   ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Images */}
      <div>
        <div className="aspect-square overflow-hidden rounded-xl border">
        </div>
      </div>

      {/* Details */}
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mt-2 text-gray-700">{description}</p>
        <p className="mt-4 text-xl font-medium">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
