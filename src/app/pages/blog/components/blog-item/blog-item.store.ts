import { Injectable, OnDestroy, inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, catchError, switchMap, tap } from 'rxjs';

import { PostItem } from '@models/post.interface';
import { PostsService } from '@services/posts.service';

@Injectable()
export class BlogItemComponentStore extends ComponentStore<{ post: PostItem | null }> implements OnDestroy {
  #service = inject(PostsService);

  readonly postSignal = this.selectSignal(state => state.post);

  readonly getPost = this.effect<{ id: string }>(trigger$ =>
    trigger$.pipe(
      switchMap(({ id }) =>
        this.#service.getPost(id as string).pipe(
          tap({
            next: post => this.patchState({ post }),
            error: e => console.error(e),
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  override ngOnDestroy(): void {
    super.ngOnDestroy();

    this.patchState({ post: null });
  }

  constructor() {
    super({ post: null });
  }
}
