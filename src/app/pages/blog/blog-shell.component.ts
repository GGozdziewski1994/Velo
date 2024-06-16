import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, filter, tap } from 'rxjs';

import { MenuPanelComponent } from '@components/menu-panel';
import { BLOG_TYPE_MAP } from '@map/blog-type.map';
import { blogTypeConfig } from '@shared/configs/blog-type.config';
import { ValueOf } from '@shared/types';
import { storeAppActions } from '@store/actions';

import { PostContainerComponent } from './components/post-container/post-container.component';

@Component({
  selector: 'app-blog-shell',
  standalone: true,
  imports: [PostContainerComponent, NgClass, MenuPanelComponent, RouterOutlet],
  template: ` <app-menu-panel [basicItems]="types" [(selectedItem)]="selectedType">
    <router-outlet />
  </app-menu-panel>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogShellComponent implements OnInit {
  #store = inject(Store);
  #destroyRef = inject(DestroyRef);

  selectedType = signal<ValueOf<typeof BLOG_TYPE_MAP>>('all');
  selectedType$ = toObservable(this.selectedType);

  types = blogTypeConfig;

  ngOnInit(): void {
    this.selectedType$
      .pipe(
        distinctUntilChanged(),
        filter(blogType => !!blogType),
        tap(blogType => this.#store.dispatch(storeAppActions.blogType({ blogType }))),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe();
  }
}
