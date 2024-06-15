import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { MENU_PAYLOAD } from '@shared/configs';
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
        redirectTo: MENU_PAYLOAD.DASHBOARD,
        pathMatch: 'full',
      },
      {
        path: MENU_PAYLOAD.DASHBOARD,
        loadChildren: () => import('@pages/dashboard/dashboard-shell.routes').then(r => r.dashboardShellRoutes),
      },
      {
        path: MENU_PAYLOAD.BLOG,
        loadChildren: () => import('@pages/blog/blog-shell.routes').then(r => r.blogShellRoutes),
      },
      {
        path: MENU_PAYLOAD.BIKE_ROUTES,
        loadChildren: () => import('@pages/bike-routes/bike-routes-shell.routes').then(r => r.bikeRoutesShellRoutes),
      },
      {
        path: MENU_PAYLOAD.EVENTS,
        loadChildren: () => import('@pages/events/events-shell.routes').then(r => r.eventsShellRoutes),
      },
      {
        path: MENU_PAYLOAD.FORUM,
        loadChildren: () => import('@pages/forum/forum-shell.routes').then(r => r.forumShellRoutes),
      },
    ],
  },
];
