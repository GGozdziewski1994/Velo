import { Injectable, inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, catchError, map, switchMap, tap } from 'rxjs';

import { Post } from '@models/post.interface';
import { PostsParams } from '@models/posts-params.interface';
import { PostsService } from '@services/posts.service';

@Injectable()
export class BlogComponentStore extends ComponentStore<{ posts: Post[] }> {
  #service = inject(PostsService);

  readonly postsSignal = this.selectSignal(state => state.posts);

  readonly getAllPosts = this.effect<{ params?: PostsParams }>(trigger$ =>
    trigger$.pipe(
      map(({ params }) => (params?.type === 'all' ? { ...params, type: '' } : params)),
      switchMap(params =>
        this.#service.getPosts(params).pipe(
          tap({
            next: posts => this.patchState({ posts }),
            error: e => console.error(e),
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor() {
    super({ posts: [] });
  }
}
