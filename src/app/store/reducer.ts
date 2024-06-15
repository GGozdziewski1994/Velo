import { HttpErrorResponse } from '@angular/common/http';
import { createFeature, createReducer, on } from '@ngrx/store';
import { DateTime } from 'luxon';

import { Events } from '@models/events.interface';

import { storeAppActions } from './actions';

export const storeFeatureKey = 'store-feature-key';

export interface State {
  calendarData: { events: Events[] };
  isLoading: boolean;
  selectedYear: number | null;
  selectedMonth: number | null;
  selectedDateTime: DateTime | null;
  selectedMonthName: string | null;
  isDateParamValid: boolean;
  error: HttpErrorResponse | null;
}

export const initialState: State = {
  calendarData: {
    events: [],
  },
  selectedYear: null,
  selectedMonth: null,
  selectedDateTime: null,
  selectedMonthName: null,
  isDateParamValid: false,
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

  on(storeAppActions.setDateTime, (state, { selectedYear, selectedMonth }): State => {
    const dateTime = DateTime.local(selectedYear, selectedMonth);

    return {
      ...state,
      selectedYear,
      selectedMonth,
      selectedDateTime: dateTime,
      selectedMonthName: dateTime.monthLong,
      isDateParamValid: dateTime.isValid,
    };
  })
);

export const reducerFeature = createFeature({
  name: storeFeatureKey,
  reducer,
});
