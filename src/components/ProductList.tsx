
import { getProductsByStore } from "../services/service";
import { Link } from "react-router-dom";

interface ProductListProps {
  storeId: string;
}

const ProductList = ({ storeId }: ProductListProps) => {
  // Simulated products (normally fetched from API with storeId)
  const products = getProductsByStore(Number(storeId));

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Products for {storeId}</h2>
      <ul className="list-disc ml-6">
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/productpage/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
