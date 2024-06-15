import { createSelector } from '@ngrx/store';
import { DateTime, Interval } from 'luxon';

import { daysOfTheWeek } from '@shared/configs';

import { reducerFeature } from './reducer';

const dateTimeLocal = DateTime.local();

const selectWeeksOfCalendar = createSelector(reducerFeature.selectSelectedDateTime, selectedDateTime => {
  if (!selectedDateTime) return [];

  const weeks: DateTime[][] = [];

  const firstDay = selectedDateTime.startOf('month').startOf('week');
  const lastDay = selectedDateTime.endOf('month').endOf('week');

  const intervals: DateTime[] = Interval.fromDateTimes(firstDay, lastDay)
    .splitBy({ day: 1 })
    .map(d => d.start!);

  while (intervals.length > 0) {
    const intervalWeek = intervals.splice(0, 7);
    intervalWeek.forEach(day => day.weekday);
    weeks.push(intervalWeek);
  }

  return weeks;
});

const selectCalendarMenage = createSelector(
  reducerFeature.selectCalendarData,
  selectWeeksOfCalendar,
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
  reducerFeature.selectSelectedYear,
  reducerFeature.selectSelectedMonth,
  reducerFeature.selectSelectedMonthName,
  reducerFeature.selectIsDateParamValid,
  (calendarData, selectedYear, selectedMonth, selectedMonthName, isDateParamValid) => ({
    calendarData,
    days: daysOfTheWeek,
    selectedYear,
    selectedMonth,
    selectedMonthName,
    isDateParamValid,
  })
);
