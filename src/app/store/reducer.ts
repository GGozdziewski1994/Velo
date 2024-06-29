import { HttpErrorResponse } from '@angular/common/http';
import { createFeature, createReducer, on } from '@ngrx/store';
import { DateTime } from 'luxon';

import { BLOG_TYPE_MAP } from '@map/blog-type.map';
import { Events } from '@models/events.interface';
import { ValueOf } from '@shared/types';

import { storeAppActions } from './actions';

export const storeFeatureKey = 'store-feature-key';

export interface State {
  calendarData: { events: Events[] };
  selectedYear: number | null;
  selectedMonth: number | null;
  selectedDateTime: DateTime | null;
  selectedMonthName: string | null;
  isDateParamValid: boolean;
  blogType: ValueOf<typeof BLOG_TYPE_MAP>;
  isLoading: boolean;
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
  blogType: BLOG_TYPE_MAP.ALL,
  isLoading: false,
  error: null,
};

const reducer = createReducer(
  initialState,
  // Events
  on(storeAppActions.getEvents, state => ({
    ...state,
    isLoading: true,
  })),
  on(
    storeAppActions.getEventsSuccess,
    (state, { events }): State => ({
      ...state,
      calendarData: { events: events[0]?.events ?? [] },
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
  }),

  // Blog
  on(storeAppActions.blogType, (state, { blogType }) => ({
    ...state,
    blogType,
  }))
);

export const reducerFeature = createFeature({
  name: storeFeatureKey,
  reducer,
});
