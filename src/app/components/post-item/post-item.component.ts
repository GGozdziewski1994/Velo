import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Post } from '@models/';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostItemComponent {
  postType = input<'trip' | 'post' | 'review'>('trip');
  post = input.required<Post>();
}
