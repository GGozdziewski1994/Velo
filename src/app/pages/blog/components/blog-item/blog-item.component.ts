import { DatePipe, NgOptimizedImage, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, untracked } from '@angular/core';
import { provideComponentStore } from '@ngrx/component-store';
import { Store } from '@ngrx/store';

import { POST_DATE_FORMAT } from '@shared/configs';
import { selectRouteParam } from '@store/router-selectors';

import { BlogItemComponentStore } from './blog-item.store';

@Component({
  selector: 'app-blog-item',
  standalone: true,
  imports: [NgOptimizedImage, NgStyle, DatePipe],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideComponentStore(BlogItemComponentStore)],
})
export class BlogItemComponent {
  #componentStore = inject(BlogItemComponentStore);
  #store = inject(Store);

  routeId = this.#store.selectSignal(selectRouteParam('id'));
  post = this.#componentStore.postSignal;

  initFlowEffect = effect(() => {
    const id = this.routeId() as string;

    untracked(() => {
      this.#componentStore.getPost({ id });
    });
  });

  dateFormat = POST_DATE_FORMAT;
}
