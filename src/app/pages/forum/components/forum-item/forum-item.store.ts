import { Injectable, inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, catchError, switchMap, tap } from 'rxjs';

import { EntryResponse } from '@models/entries.interface';
import { ForumService } from '@services/forum.service';

@Injectable()
export class ForumItemComponentStore extends ComponentStore<{ entry: EntryResponse | null }> {
  #service = inject(ForumService);

  readonly entrySignal = this.selectSignal(state => state.entry);

  readonly getEntryById = this.effect<{ id: string }>(trigger$ =>
    trigger$.pipe(
      switchMap(({ id }) =>
        this.#service.getEntry(id).pipe(
          tap({
            next: entry => this.patchState({ entry }),
            error: e => console.error(e),
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor() {
    super({ entry: null });
  }
}
