import { Routes } from '@angular/router';

import { MENU_PAYLOAD } from '@shared/configs';

export const routes: Routes = [
  {
    path: MENU_PAYLOAD.APP,
    loadChildren: () => import('@shared/shell').then(r => r.shellRoutes),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: MENU_PAYLOAD.APP,
  },
  {
    path: '**',
    redirectTo: MENU_PAYLOAD.APP,
  },
];
