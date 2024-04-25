export interface NavbarItem {
  link: string;
  title: string;
}

export const menuNavItems: NavbarItem[] = [
  {
    link: 'dashboard',
    title: 'Strona główna',
  },
  {
    link: 'blog',
    title: 'Blog',
  },
  {
    link: 'trasy',
    title: 'Trasy',
  },
  {
    link: 'wydarzenia',
    title: 'Wydarzenia',
  },
  {
    link: 'forum',
    title: 'Forum',
  },
];
