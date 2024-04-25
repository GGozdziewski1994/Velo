import { Routes } from '@angular/router';

import { ShellComponent } from './shell.component';

export const shellRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () => import('@pages/').then(c => c.DashboardComponent),
      },
      {
        path: 'blog',
        loadComponent: () => import('@pages/').then(c => c.BlogComponent),
      },
      {
        path: 'trasy',
        loadComponent: () => import('@pages/').then(c => c.RoutesComponent),
      },
      {
        path: 'wydarzenia',
        loadComponent: () => import('@pages/').then(c => c.EventsComponent),
      },
      {
        path: 'forum',
        loadComponent: () => import('@pages/').then(c => c.ForumComponent),
      },
    ],
  },
];
