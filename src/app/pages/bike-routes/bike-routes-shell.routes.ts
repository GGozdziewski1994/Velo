import { Routes } from '@angular/router';

import { BikeRoutesShellComponent } from './bike-routes-shell.component';

export const bikeRoutesShellRoutes: Routes = [
  {
    path: '',
    component: BikeRoutesShellComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@pages/bike-routes/components/bike-routes/bike-routes.component').then(c => c.BikeRoutesComponent),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('@pages/bike-routes/components/bike-route-item/bike-route-item.component').then(
            c => c.BikeRouteItemComponent
          ),
      },
    ],
  },
];
