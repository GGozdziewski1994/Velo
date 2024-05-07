import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { NgOptimizedImage, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';

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
    MatIconButton,
    MatIcon,
  ],
  templateUrl: './forum-item.component.html',
  styleUrl: './forum-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForumItemComponent {
  #router = inject(Router);
  #route = inject(ActivatedRoute);

  protected rating = signal<number | null>(null);

  constructor() {
    effect(() => {
      console.log(this.rating());
    });
  }

  back(): void {
    this.#router.navigate(['../'], { relativeTo: this.#route });
  }
}
