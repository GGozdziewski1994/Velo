import { Routes } from '@angular/router';

import { EventsShellComponent } from './events-shell.component';

export const eventsShellRoutes: Routes = [
  {
    path: '',
    component: EventsShellComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./components/events/events.component').then(c => c.EventsComponent),
      },
    ],
  },
];
