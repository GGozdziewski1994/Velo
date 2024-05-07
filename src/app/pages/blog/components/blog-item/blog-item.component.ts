import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogItemComponent {}
