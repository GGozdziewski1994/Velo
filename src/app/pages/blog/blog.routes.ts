import { Routes } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';

export const blogRoutes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: ':id',
    loadComponent: () => import('./components/blog-item/blog-item.component').then(c => c.BlogItemComponent),
  },
];
