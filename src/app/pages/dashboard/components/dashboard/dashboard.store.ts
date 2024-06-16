import { Injectable, inject } from '@angular/core';
import { ComponentStore, OnStoreInit } from '@ngrx/component-store';
import { EMPTY, catchError, switchMap, tap } from 'rxjs';

import { DashboardResponse } from '@models/dashboard.interface';
import { Post } from '@models/post.interface';
import { PostsParams } from '@models/posts-params.interface';
import { DashboardService } from '@services/dashboard.service';
import { PostsService } from '@services/posts.service';

@Injectable()
export class DashboardComponentStore
  extends ComponentStore<{ dashboardData: DashboardResponse | null; posts: Post[] }>
  implements OnStoreInit
{
  #service = inject(DashboardService);
  #postService = inject(PostsService);

  #initPostParams: PostsParams = { _start: 0, _limit: 4 };

  readonly dashboardDataSignal = this.selectSignal(state => state.dashboardData);
  readonly postsSignal = this.selectSignal(state => state.posts);

  readonly getDashboardData = this.effect(trigger$ =>
    trigger$.pipe(
      switchMap(() =>
        this.#service.getDashboardData().pipe(
          tap({
            next: dashboardData => this.patchState({ dashboardData }),
            error: e => console.error(e),
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  readonly getPosts = this.effect<PostsParams>(trigger$ =>
    trigger$.pipe(
      switchMap(params =>
        this.#postService.getPosts(params).pipe(
          tap({
            next: posts => this.patchState({ posts }),
            error: e => console.error(e),
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  ngrxOnStoreInit(): void {
    this.getDashboardData();
    this.getPosts(this.#initPostParams);
  }

  constructor() {
    super({ dashboardData: null, posts: [] });
  }
}
