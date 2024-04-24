import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('@shared/').then(r => r.shellRoutes),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app',
  },
  {
    path: '**',
    redirectTo: 'app',
  },
];
