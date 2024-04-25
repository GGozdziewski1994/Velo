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
        loadComponent: () => import('@pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
      },
      {
        path: 'blog',
        loadComponent: () => import('@pages/blog/blog.component').then(c => c.BlogComponent),
      },
      {
        path: 'trasy',
        loadComponent: () => import('@pages/routes/routes.component').then(c => c.RoutesComponent),
      },
      {
        path: 'wydarzenia',
        loadComponent: () => import('@pages/events/events.component').then(c => c.EventsComponent),
      },
      {
        path: 'forum',
        loadComponent: () => import('@pages/forum/forum.component').then(c => c.ForumComponent),
      },
    ],
  },
];
