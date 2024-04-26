import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostContainerComponent } from '@components/post-container/post-container.component';
import { posts } from '@shared/configs';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [PostContainerComponent, NgClass],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  protected selectCategory = signal<'trip' | 'post' | 'review' | 'all'>('all');

  protected posts = [...posts, ...posts, ...posts, ...posts];
  protected categories: { label: string; type: 'trip' | 'post' | 'review' | 'all' }[] = [
    { label: 'Wszystkie', type: 'all' },
    { label: 'Tripy', type: 'trip' },
    { label: 'Posty', type: 'post' },
    { label: 'Recenzje', type: 'review' },
  ];

  goToBlogItem(id: string): void {
    this.router.navigate(['../blog', id], { relativeTo: this.route });
  }
}
