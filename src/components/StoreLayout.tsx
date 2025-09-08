import { Routes, Route, Link, useParams } from "react-router-dom";
import ProductList from "./ProductList";
import Cart from "./Cart";

function StoreLayout() {
  
  const { storeId } = useParams<{ storeId: string }>();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Store: {storeId}
      </h1>

      {/* Store navigation */}
      <nav className="flex gap-4 mb-6">
        <Link to={`/store/${storeId}/products`} className="text-blue-600 hover:underline">
          Products
        </Link>
        <Link to={`/store/${storeId}/cart`} className="text-blue-600 hover:underline">
          Cart
        </Link>
      </nav>

      {/* Nested routes */}
      <Routes>
        <Route path="products" element={<ProductList storeId={storeId!} />} />
        <Route path="cart" element={<Cart storeId={storeId!} />} />
      </Routes>
    </div>
  );
}

export default StoreLayout;
