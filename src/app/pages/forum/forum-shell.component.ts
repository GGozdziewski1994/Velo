import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, effect, inject, signal, untracked } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { MenuPanelComponent } from '@components/menu-panel';
import { baseTypesConfig } from '@pages/forum/components/config/base-types.config';
import { storeAppActions } from '@store/actions';
import { selectForumEntriesDotTypes } from '@store/selectors';

@Component({
  selector: 'app-forum-shell',
  standalone: true,
  imports: [MenuPanelComponent, RouterOutlet, AsyncPipe],
  template: ` <app-menu-panel
    [dotItems]="(dotTypes$ | async) || []"
    [iconItems]="baseTypes"
    [(selectedItem)]="selectType">
    <router-outlet />
  </app-menu-panel>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForumShellComponent implements OnInit {
  #store = inject(Store);

  selectType = signal<'following' | string>('');
  initFlowEffect = effect(() => {
    const selectedType = this.selectType();
    console.log(selectedType);

    untracked(() => {
      this.#getEntries(selectedType);
    });
  });

  baseTypes = baseTypesConfig;
  dotTypes$ = this.#store.select(selectForumEntriesDotTypes);

  ngOnInit(): void {
    this.#initFlow();
  }

  #getEntries(selectedType: string): void {
    this.#store.dispatch(storeAppActions.getEntries({ selectedType }));
  }

  #initFlow(): void {
    this.#getEntries(this.selectType());
    this.#store.dispatch(storeAppActions.getDotTypes());
  }
}
