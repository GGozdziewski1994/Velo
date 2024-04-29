import { HttpErrorResponse } from '@angular/common/http';
import { createFeature, createReducer, on } from '@ngrx/store';
import { DateTime } from 'luxon';

import { Events } from '@models/events.interface';

import { eventsActions } from './actions';

export const eventsFeatureKey = 'events';

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
  on(eventsActions.getEvents, state => ({
    ...state,
    isLoading: true,
  })),
  on(
    eventsActions.getEventsSuccess,
    (state, { events }): State => ({
      ...state,
      calendarData: { events },
      isLoading: false,
    })
  ),
  on(eventsActions.getEventsFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),

  on(
    eventsActions.setCalendarDays,
    (state, { weeks }): State => ({
      ...state,
      weeks,
    })
  )
);

export const reducerFeature = createFeature({
  name: eventsFeatureKey,
  reducer,
});
