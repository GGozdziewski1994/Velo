import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuPanelComponent } from '@components/menu-panel';

import { PostContainerComponent } from './components/post-container/post-container.component';

@Component({
  selector: 'app-blog-shell',
  standalone: true,
  imports: [PostContainerComponent, NgClass, MenuPanelComponent, RouterOutlet],
  template: ` <app-menu-panel [basicItems]="categories" [(selectedItem)]="selectCategory">
    <router-outlet />
  </app-menu-panel>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogShellComponent {
  protected selectCategory = signal<'trip' | 'post' | 'review' | 'all'>('all');

  protected categories = [
    { label: 'Wszystkie', type: 'all' },
    { label: 'Tripy', type: 'trip' },
    { label: 'Posty', type: 'post' },
    { label: 'Recenzje', type: 'review' },
  ];

  constructor() {
    effect(() => {
      console.log(this.selectCategory());
    });
  }
}
