import { HttpErrorResponse } from '@angular/common/http';
import { createFeature, createReducer, on } from '@ngrx/store';
import { DateTime } from 'luxon';

import { Events } from '@models/events.interface';

import { storeAppActions } from './actions';

export const storeFeatureKey = 'store-feature-key';

export interface State {
  calendarData: { events: Events[] };
  weeks: DateTime[][];
  days: string[];
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

export const initialState: State = {
  calendarData: {
    events: [],
  },
  weeks: [],
  days: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'],
  isLoading: false,
  error: null,
};

const reducer = createReducer(
  initialState,
  on(storeAppActions.getEvents, state => ({
    ...state,
    isLoading: true,
  })),
  on(
    storeAppActions.getEventsSuccess,
    (state, { events }): State => ({
      ...state,
      calendarData: { events },
      isLoading: false,
    })
  ),
  on(storeAppActions.getEventsFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),

  on(
    storeAppActions.setCalendarDays,
    (state, { weeks }): State => ({
      ...state,
      weeks,
    })
  )
);

export const reducerFeature = createFeature({
  name: storeFeatureKey,
  reducer,
});
