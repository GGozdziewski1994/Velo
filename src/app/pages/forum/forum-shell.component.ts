import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuPanelComponent } from '@components/menu-panel';

@Component({
  selector: 'app-forum-shell',
  standalone: true,
  imports: [MenuPanelComponent, RouterOutlet],
  template: ` <app-menu-panel [dotItems]="dotTypes" [iconItems]="iconsTypes" [(selectedItem)]="selectType">
    <router-outlet />
  </app-menu-panel>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForumShellComponent {
  protected selectType = signal<'all' | 'following' | string>('all');

  protected iconsTypes = [
    { label: 'Wszystkie wpisy', type: 'all', icon: 'forum' },
    { label: 'Obserwowane', type: 'following', icon: 'star' },
  ];

  protected dotTypes = [
    { label: 'Najlepsze trasy', type: 'routes', dotBackground: '#3339FF' },
    { label: 'Wymiana hamulców', type: 'breaks', dotBackground: '#80FF33' },
    { label: 'Dieta', type: 'diet', dotBackground: '#110A03' },
    { label: 'Odzież', type: 'clothing', dotBackground: '#147E1C' },
  ];

  constructor() {
    effect(() => {
      console.log(this.selectType());
    });
  }
}
