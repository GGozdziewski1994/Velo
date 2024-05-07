import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { NgOptimizedImage, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { StartRatingComponent } from '@components/start-rating';

@Component({
  selector: 'app-forum-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatLabel,
    MatFormField,
    MatInput,
    CdkTextareaAutosize,
    MatButton,
    NgStyle,
    StartRatingComponent,
  ],
  templateUrl: './forum-item.component.html',
  styleUrl: './forum-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForumItemComponent {
  protected rating = signal<number | null>(null);

  constructor() {
    effect(() => {
      console.log(this.rating());
    });
  }
}
