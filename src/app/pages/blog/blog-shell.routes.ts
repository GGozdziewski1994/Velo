import { Routes } from '@angular/router';

import { BlogShellComponent } from './blog-shell.component';

export const blogShellRoutes: Routes = [
  {
    path: '',
    component: BlogShellComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./components/blog/blog.component').then(c => c.BlogComponent),
      },
    ],
  },
  {
    path: ':id',
    loadComponent: () => import('./components/blog-item/blog-item.component').then(c => c.BlogItemComponent),
  },
];
