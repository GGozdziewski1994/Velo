import { createSelector } from '@ngrx/store';
import { DateTime } from 'luxon';

import { reducerFeature } from './reducer';

const dateTimeLocal = DateTime.local();

const selectCalendarMenage = createSelector(
  reducerFeature.selectCalendarData,
  reducerFeature.selectWeeks,
  (calendarData, weeks) =>
    weeks.map(week =>
      week.map(day => ({
        day: day.day,
        month: day.month,
        event: calendarData.events.find(event => event.eventDay === day.day && event.eventMonth === day.month),
        isToday: day.hasSame(dateTimeLocal, 'day'),
        isWeekend: day.weekday === 6 || day.weekday === 7,
      }))
    )
);

export const selectVmForCalendar = createSelector(
  selectCalendarMenage,
  reducerFeature.selectDays,
  (calendarData, days) => ({ calendarData, days })
);
