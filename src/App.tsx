import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StoreLayout from "./components/StoreLayout";
import { getStores } from "./services/service";
import ProductPage from "./components/ProductPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-4">Select a Store</h1>
              <ul className="space-y-2">
                { getStores().map((store) => (
                  <li key={store.id}>
                    <Link
                      to={`/store/${store.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {store.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          }
        />

        {/* Store routes */}
        <Route path="/store/:storeId/*" element={<StoreLayout />} />
        <Route path="/productpage/:productId" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
