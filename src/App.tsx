import { useEffect, useState } from 'react'
import './App.css'
import { getStoreById, getProductsByStore, getPackagesByStore } from './services/service'
import type { Store } from './objects/store.ts'
import type { Product } from './objects/product.ts'
import SiteHeader from './components/siteheader.tsx'
import PackagePage from './components/packagepage.tsx'
import ProductPage from './components/ProductPage.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import type { Package } from './objects/package.ts'
import PackageListItem from './components/packagelistitem.tsx'
import ProductListItem from './components/packagelistitem.tsx'

const App = () => {

  const [store, setStore] = useState<Store>();
  const [packages, setPackages] = useState<Package[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {

    // Load store data
    const s: Store = getStoreById(1);
    setStore(s);

    // Load packages for the store
    const pkgs: Package[] = getPackagesByStore(s.id);
    setPackages(pkgs);

    // Load products for the store
    const prods: Product[] = getProductsByStore(s.id);
    setProducts(prods);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={
            <div>
              {store && (
                <SiteHeader key={store.id} companyName={store.name} logo={store.logo} url={store.url} />
              )}
              <br />
              <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Packages</h2>
                {packages.length > 0 ? (
                  <div>
                    {packages.map((p) => (
                      <PackageListItem id={p.id} title={p.title} description={p.description} imageUrl={p.imageUrl} price={p.price} /> 
                    ))}
                  </div>
                 ) : (
                  <p>No packages available.</p>
                )}
              </div>
              <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Products</h2>
                {products.length > 0 ? (
                  <div>
                  {products.map((p) => (
                    <ProductListItem id={p.id} title={p.title} description={p.description} imageUrl={p.imageUrl} price={p.price} /> 
                    ))}
                  </div>
                 ) : (
                  <p>No products available.</p>
                )}
              </div>
            </div>
          }
        />

        {/* Store routes */}
        <Route path="/package/:packageId" element={<PackagePage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App