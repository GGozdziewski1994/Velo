import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { catchError, filter, map, of, switchMap, tap, withLatestFrom } from 'rxjs';

import { EventsService } from '@services/events.service';
import { MENU_PAYLOAD } from '@shared/configs';
import { reducerFeature } from '@store/reducer';
import { selectRouteParam } from '@store/router-selectors';

import { storeAppActions } from './actions';

@Injectable()
export class Effects {
  #actions$ = inject(Actions);
  #eventService = inject(EventsService);
  #store = inject(Store);
  #router = inject(Router);
  #route = inject(ActivatedRoute);

  routerNavigated$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      withLatestFrom(this.#store.select(selectRouteParam('id'))),
      filter(([{ payload }]) => payload.event.url.includes(`${MENU_PAYLOAD.EVENTS}`)),
      map(([, id]) =>
        !id
          ? (this.#router.navigate(
              [`${MENU_PAYLOAD.APP}/${MENU_PAYLOAD.EVENTS}/${DateTime.now().year}-${DateTime.now().month}`],
              {
                relativeTo: this.#route,
              }
            ),
            storeAppActions.emptyAction())
          : storeAppActions.setDateTime({
              selectedMonth: DateTime.fromFormat(id as string, 'yyyy-M').month,
              selectedYear: DateTime.fromFormat(id as string, 'yyyy-M').year,
            })
      )
    )
  );

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

  setDateTime$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(storeAppActions.setDateTime),
      withLatestFrom(this.#store.select(reducerFeature.selectIsDateParamValid)),
      filter(([, isDateParamValid]) => isDateParamValid),
      map(([{ selectedYear, selectedMonth }]) =>
        storeAppActions.getEvents({
          year: selectedYear,
          month: selectedMonth,
        })
      )
    )
  );

  menageMonths$ = createEffect(
    () =>
      this.#actions$.pipe(
        ofType(storeAppActions.menageMonths),
        withLatestFrom(
          this.#store.select(reducerFeature.selectSelectedMonth),
          this.#store.select(reducerFeature.selectSelectedYear)
        ),
        tap(([{ key }, selectedMonth, selectedYear]) => {
          let dateTime: DateTime;

          key === 'next'
            ? (dateTime = DateTime.local(selectedYear!, selectedMonth!).plus({
                months: 1,
              }))
            : key === 'prev'
              ? (dateTime = DateTime.local(selectedYear!, selectedMonth!).minus({ months: 1 }))
              : (dateTime = DateTime.local());

          this.#router.navigate([`${MENU_PAYLOAD.APP}/${MENU_PAYLOAD.EVENTS}/${dateTime.year}-${dateTime.month}`], {
            relativeTo: this.#route,
          });
        })
      ),
    { dispatch: false }
  );
}
