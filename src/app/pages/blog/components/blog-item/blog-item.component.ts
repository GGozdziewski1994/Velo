import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PostItemComponent } from '@components/post-item';

@Component({
  selector: 'app-blog-item',
  standalone: true,
  imports: [PostItemComponent, NgOptimizedImage],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogItemComponent {}
