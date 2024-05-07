import { Routes } from '@angular/router';

import { DashboardShellComponent } from './dashboard-shell.component';

export const dashboardShellRoutes: Routes = [
  {
    path: '',
    component: DashboardShellComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./components/dashboard/dashboard.component').then(c => c.DashboardComponent),
      },
    ],
  },
];
