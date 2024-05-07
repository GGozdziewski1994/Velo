import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { EventsService } from '@services/events.service';

import { storeAppActions } from './actions';

@Injectable()
export class Effects {
  #actions$ = inject(Actions);
  #eventService = inject(EventsService);

  calendarData$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(storeAppActions.getEvents),
      switchMap(({ month, year }) =>
        this.#eventService.getCalendarData(month, year).pipe(
          map(events => storeAppActions.getEventsSuccess(events)),
          catchError(error => of(storeAppActions.getEventsFailure({ error })))
        )
      )
    )
  );
}
