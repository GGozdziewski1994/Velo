import { AsyncPipe, DatePipe, NgOptimizedImage, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatTooltip } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { StartRatingComponent } from '@components/start-rating';
import { TimeElapsedPipe } from '@shared/pipes';
import { selectForumEntries } from '@store/selectors';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [
    DatePipe,
    MatIcon,
    MatIconButton,
    MatMenu,
    NgStyle,
    NgOptimizedImage,
    TimeElapsedPipe,
    MatTooltip,
    StartRatingComponent,
    MatMenuTrigger,
    MatMenuItem,
    AsyncPipe,
  ],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForumComponent {
  #router = inject(Router);
  #route = inject(ActivatedRoute);
  #store = inject(Store);

  entries$ = this.#store.select(selectForumEntries);

  goToEntry(id: string): void {
    this.#router.navigate([id], { relativeTo: this.#route });
  }
}
