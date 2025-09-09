import type { Store } from "../objects/store";

export const storesMock: Store[] = [
    { id: 1, name: 'LMVSC Travel Basketball', location: '123 Main St', url: 'https://simonikcustom.com/LMVSC', logo: 'https://www.soccerwire.com/wp-content/uploads/2019/06/LMVSC-350x200.png' },
    { id: 2, name: 'Edison Theatre Company', location: '456 Mall Rd', url: 'https://simonikcustom.com/ETC', logo: 'https://static.wixstatic.com/media/5741fd_1c1968f2071d422f9504c78037d7c9bb~mv2_d_4134_5823_s_4_2.png' }
];

export const packagesMock = [
    { 
      id: 1, 
      title: 'Full Uniform Package', 
      description: 'All the gear your player needs for the season', 
      price: 130.00, 
      imageUrl: 'https://static.augustasportswear.com/product/1731_1734_silo3_aws_640.jpg', 
      products: [],
      storeId: 1 
    }
];

export const productsMock = [
    { 
      id: 1, 
      title: 'Badge Logo Hoodie', 
      description: 'Hoodie with the LMVSC badge logo', 
      price: 30.00, 
      imageUrl: 'https://static.augustasportswear.com/product/695HBM_QZB_quarter_aws_640.jpg', 
      storeId: 1 
    }
];
