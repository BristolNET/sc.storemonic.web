import type { Store } from '../objects/store';
import type { Product } from '../objects/product';
import { storesMock } from '../services/mockdata';
import { productsMock } from '../services/mockdata';
import type { Package } from "../objects/package";
import { packagesMock } from '../services/mockdata';

export async function fetchData(url: string): Promise<any> {

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export function postData(url: string, data: any): Promise<any> {

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

export function putData(url: string, data: any): Promise<any> {

  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

export function getStores(): Store[] {

  return [
    { id: 1, name: 'LMVSC Travel Basketball', location: '123 Main St', url: 'https://simonikcustom.com/LMVSC', logo: 'https://www.soccerwire.com/wp-content/uploads/2019/06/LMVSC-350x200.png' },
    { id: 2, name: 'Edison Theatre Company', location: '456 Mall Rd', url: 'https://simonikcustom.com/ETC', logo: 'https://static.wixstatic.com/media/5741fd_1c1968f2071d422f9504c78037d7c9bb~mv2_d_4134_5823_s_4_2.png' }
  ];
}

export function getStoreById(storeId: number): Store {

  const store: Store | undefined =  storesMock.find(s => s.id === storeId);
  if (!store) {
    throw new Error(`Store with ID ${storeId} not found`);
  }
  return store;
}

export function getPackagesByStore(storeId: number): Package[] {
  
  const packages: Package[] = packagesMock.filter(p => p.storeId === storeId);

  return (packages.length === 0) ? [] : packages;
}

export function getProductsByStore(storeId: number): Product[] {

  const products: Product[] = productsMock.filter(p => p.storeId === storeId);

  return (products.length === 0) ? [] : products;
}

// export function getProduct(productId: number): Product
//  | undefined {

//   return _products.find(p => p.id === productId);
// }
