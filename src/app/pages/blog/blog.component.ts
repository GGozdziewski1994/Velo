import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { PostContainerComponent } from '@components/';

import { posts } from '../../shared/configs/posts-draft.config';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [PostContainerComponent, NgClass],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  protected selectCategory = signal<'trip' | 'post' | 'review' | 'all'>('all');

  protected posts = [...posts, ...posts, ...posts, ...posts];

  protected categories: { label: string; type: 'trip' | 'post' | 'review' | 'all' }[] = [
    { label: 'Wszystkie', type: 'all' },
    { label: 'Tripy', type: 'trip' },
    { label: 'Posty', type: 'post' },
    { label: 'Recenzje', type: 'review' },
  ];
}
