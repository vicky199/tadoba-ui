export interface Menu {
  path: string;
  name: string;
}

export const menuList: Menu[] = [
  {
    path: '',
    name: 'Home'
  },
  {
    path: '/products',
    name: 'Products'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/contact',
    name: 'Contact'
  }
];
