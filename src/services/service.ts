import type { Store } from '../objects/store';

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
