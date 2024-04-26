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
        loadChildren: () => import('@pages/dashboard/dashboard.routes').then(r => r.dashboardRoutes),
      },
      {
        path: 'blog',
        loadChildren: () => import('@pages/blog/blog.routes').then(r => r.blogRoutes),
      },
      {
        path: 'trasy',
        loadChildren: () => import('@pages/bikeRoutes/bikeRoutes.routes').then(r => r.bikeRoutesRoutes),
      },
      {
        path: 'wydarzenia',
        loadChildren: () => import('@pages/events/events.routes').then(r => r.eventsRoutes),
      },
      {
        path: 'forum',
        loadChildren: () => import('@pages/forum/forum.routes').then(r => r.forumRoutes),
      },
    ],
  },
];
