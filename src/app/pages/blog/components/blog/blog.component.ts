import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostContainerComponent } from '@pages/blog/components/post-container/post-container.component';
import { posts } from '@shared/configs';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [PostContainerComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  #router = inject(Router);
  #route = inject(ActivatedRoute);

  protected posts = [...posts, ...posts, ...posts, ...posts];

  goToBlogItem(id: string): void {
    this.#router.navigate([id], { relativeTo: this.#route });
  }
}
