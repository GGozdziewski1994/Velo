import { Routes } from '@angular/router';

import { ForumComponent } from '@pages/forum/components/forum/forum.component';

import { ForumShellComponent } from './forum-shell.component';

export const forumShellRoutes: Routes = [
  {
    path: '',
    component: ForumShellComponent,
    children: [
      {
        path: '',
        component: ForumComponent,
      },
      {
        path: ':id',
        loadComponent: () => import('./components/forum-item/forum-item.component').then(c => c.ForumItemComponent),
      },
    ],
  },
];
