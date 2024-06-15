import { MENU_PAYLOAD } from './menu-payload.config';

export interface NavbarItem {
  link: string;
  title: string;
}

export const menuNavItems: NavbarItem[] = [
  {
    link: MENU_PAYLOAD.DASHBOARD,
    title: 'Strona główna',
  },
  {
    link: MENU_PAYLOAD.BLOG,
    title: 'Blog',
  },
  {
    link: MENU_PAYLOAD.BIKE_ROUTES,
    title: 'Trasy',
  },
  {
    link: MENU_PAYLOAD.EVENTS,
    title: 'Wydarzenia',
  },
  {
    link: MENU_PAYLOAD.FORUM,
    title: 'Forum',
  },
];
