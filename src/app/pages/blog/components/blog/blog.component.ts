import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { provideComponentStore } from '@ngrx/component-store';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, filter, tap } from 'rxjs';

import { selectBlogType } from '@store/selectors';

import { PostContainerComponent } from '../post-container/post-container.component';
import { BlogComponentStore } from './blog.store';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [PostContainerComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideComponentStore(BlogComponentStore)],
})
export class BlogComponent implements OnInit {
  #componentStore = inject(BlogComponentStore);
  #store = inject(Store);
  #destroyRef = inject(DestroyRef);
  #router = inject(Router);
  #route = inject(ActivatedRoute);

  posts = this.#componentStore.postsSignal;

  type$ = this.#store.select(selectBlogType);

  ngOnInit(): void {
    this.type$
      .pipe(
        distinctUntilChanged(),
        filter(type => !!type),
        tap(type => this.#componentStore.getAllPosts({ params: { type } })),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe();
  }

  goToBlogItem(id: string): void {
    this.#router.navigate([id], { relativeTo: this.#route });
  }
}
