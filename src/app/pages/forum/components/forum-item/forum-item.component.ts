import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { NgOptimizedImage, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, signal, untracked } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatTooltip } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { provideComponentStore } from '@ngrx/component-store';
import { Store } from '@ngrx/store';

import { StartRatingComponent } from '@components/start-rating';
import { ForumItemComponentStore } from '@pages/forum/components/forum-item/forum-item.store';
import { TimeElapsedPipe } from '@shared/pipes';
import { selectRouteParam } from '@store/router-selectors';

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
    TimeElapsedPipe,
    MatTooltip,
  ],
  templateUrl: './forum-item.component.html',
  styleUrl: './forum-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideComponentStore(ForumItemComponentStore)],
})
export class ForumItemComponent {
  #router = inject(Router);
  #route = inject(ActivatedRoute);
  #store = inject(Store);
  #componentStore = inject(ForumItemComponentStore);

  entry = this.#componentStore.entrySignal;
  routeId = this.#store.selectSignal(selectRouteParam('id'));
  initIdFlowEffect = effect(() => {
    const id = this.routeId() as string;

    untracked(() => {
      this.#componentStore.getEntryById({ id });
    });
  });

  rating = signal<number | null>(null);
  initRatingFlowEffect = effect(() => {
    console.log(this.rating());
  });

  back(): void {
    this.#router.navigate(['../'], { relativeTo: this.#route });
  }
}
