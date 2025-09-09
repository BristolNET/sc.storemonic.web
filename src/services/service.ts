import type { Store } from '../objects/store';
import type { Product } from '../objects/product';

const _products: Product[] = [
  { id: 1, title: 'Widget A', description: '', price: 19.99, storeId: 1 },
  { id: 2, title: 'Widget B', description: '', price: 29.99, storeId: 1 },
  { id: 3, title: 'Gadget C', description: '', price: 39.99, storeId: 2 },
  { id: 4, title: 'Gadget D', description: '', price: 49.99, storeId: 2 }
];

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
    { id: 1, name: 'LMVSC Travel Basketball', logo: 'https://www.soccerwire.com/wp-content/uploads/2019/06/LMVSC-350x200.png' },
    { id: 2, name: 'Edison Theatre Company', logo: 'https://static.wixstatic.com/media/5741fd_1c1968f2071d422f9504c78037d7c9bb~mv2_d_4134_5823_s_4_2.png' }
  ];
}

export function getProductsByStore(storeId: number): Product[] {
  return _products.filter(p => p.storeId === storeId);
}

export function getProduct(productId: number): Product | undefined {
  return _products.filter(p => p.id === productId)[0];
}
