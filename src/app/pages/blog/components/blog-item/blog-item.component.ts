import { DatePipe, NgOptimizedImage, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
export class BlogItemComponent implements OnInit {
  #componentStore = inject(BlogItemComponentStore);
  #store = inject(Store);

  routeId = toSignal(this.#store.select(selectRouteParam('id')));
  post = this.#componentStore.postSignal;

  dateFormat = POST_DATE_FORMAT;

  ngOnInit(): void {
    this.#componentStore.getPost({ id: this.routeId() as string });
  }
}
