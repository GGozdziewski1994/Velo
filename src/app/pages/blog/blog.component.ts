import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
  effect,
  inject,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MenuPanelComponent } from '@components/menu-panel';
import { PostContainerComponent } from '@components/post-container/post-container.component';
import { posts } from '@shared/configs';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [PostContainerComponent, NgClass, MenuPanelComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent implements OnInit {
  #router = inject(Router);
  #route = inject(ActivatedRoute);
  #injector = inject(Injector);

  protected selectCategory = signal<'trip' | 'post' | 'review' | 'all'>('all');

  protected posts = [...posts, ...posts, ...posts, ...posts];
  protected categories = [
    { label: 'Wszystkie', type: 'all' },
    { label: 'Tripy', type: 'trip' },
    { label: 'Posty', type: 'post' },
    { label: 'Recenzje', type: 'review' },
  ];

  ngOnInit(): void {
    runInInjectionContext(this.#injector, () => {
      effect(() => {
        console.log(this.selectCategory());
      });
    });
  }

  goToBlogItem(id: string): void {
    this.#router.navigate(['../blog', id], { relativeTo: this.#route });
  }
}
