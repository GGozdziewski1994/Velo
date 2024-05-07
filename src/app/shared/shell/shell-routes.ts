import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { Effects } from '@store/effects';
import { reducerFeature } from '@store/reducer';

import { ShellComponent } from './shell.component';

export const shellRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    providers: [provideState(reducerFeature), provideEffects([Effects])],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@pages/dashboard/dashboard-shell.routes').then(r => r.dashboardShellRoutes),
      },
      {
        path: 'blog',
        loadChildren: () => import('@pages/blog/blog-shell.routes').then(r => r.blogShellRoutes),
      },
      {
        path: 'trasy',
        loadChildren: () => import('@pages/bike-routes/bike-routes-shell.routes').then(r => r.bikeRoutesShellRoutes),
      },
      {
        path: 'wydarzenia',
        loadChildren: () => import('@pages/events/events-shell.routes').then(r => r.eventsShellRoutes),
      },
      {
        path: 'forum',
        loadChildren: () => import('@pages/forum/forum-shell.routes').then(r => r.forumShellRoutes),
      },
    ],
  },
];
