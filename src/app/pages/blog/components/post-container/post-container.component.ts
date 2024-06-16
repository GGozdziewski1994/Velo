import { DatePipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Post } from '@models/post.interface';
import { POST_DATE_FORMAT } from '@shared/configs';

@Component({
  selector: 'app-post-container',
  standalone: true,
  imports: [NgOptimizedImage, DatePipe],
  templateUrl: './post-container.component.html',
  styleUrl: './post-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostContainerComponent {
  postType = input<'trip' | 'post' | 'review'>('trip');
  post = input.required<Post>();

  dateFormat = POST_DATE_FORMAT;
}
