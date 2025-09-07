import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomerSite from './components/customersite.tsx'
import { getStores } from './services/service'
import type { Store } from './objects/store.ts'

const App = () => {


  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    getActiveStores();
  }, []);

  // Loads active stores
  const getActiveStores = () => {

    // const fetchStores = async () => {
    //   const result = await getStores();
    //   setStores(result);
    // };
    // fetchStores();
    const result = getStores();
    setStores(result);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10 underline">Simonik Custom Apparel</h1>
      <div className="flex flex-row content-center justify-center">
        { stores.map(store => (
          <CustomerSite key={store.id} companyName={store.name} logo={store.logo} url={store.url} />
        ))}
      </div>
    </div>
  )
}

export default App