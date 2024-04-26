import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostItemComponent {}
