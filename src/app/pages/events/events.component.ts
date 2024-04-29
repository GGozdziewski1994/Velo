import { AsyncPipe, NgClass, NgStyle, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { DateTime, Interval, MonthNumbers } from 'luxon';

import { eventsActions } from '../../store/actions';
import { selectVmForCalendar } from '../../store/selectors';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [MatButton, NgClass, AsyncPipe, NgStyle, NgTemplateOutlet],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent implements OnInit {
  #store = inject(Store);

  vm$ = this.#store.select(selectVmForCalendar);

  now = DateTime.local();
  currentYear = this.now.year;
  currentMonth = this.now.month;
  currentMonthName = this.now.monthLong;

  ngOnInit(): void {
    this.#store.dispatch(eventsActions.getEvents({ month: this.currentMonth, year: this.currentYear }));

    this.generateCalendar(this.now);
  }

  generateCalendar(date: DateTime): void {
    const weeks: DateTime[][] = [];

    const firstDay = date.startOf('month').startOf('week');
    const lastDay = date.endOf('month').endOf('week');

    const intervals: DateTime[] = Interval.fromDateTimes(firstDay, lastDay)
      .splitBy({ day: 1 })
      .map(d => d.start!);

    while (intervals.length > 0) {
      const intervalWeek = intervals.splice(0, 7);
      intervalWeek.forEach(day => day.weekday);
      weeks.push(intervalWeek);
    }

    this.#store.dispatch(eventsActions.setCalendarDays({ weeks }));
  }

  goToCurrentMonth(): void {
    this.#setUpDateTimeProperties(DateTime.local());
  }

  nextMonth(): void {
    const nextMonth = DateTime.local(this.currentYear, this.currentMonth, 1).plus({ months: 1 });

    this.#setUpDateTimeProperties(nextMonth);
  }

  previousMonth(): void {
    const previousMonth = DateTime.local(this.currentYear, this.currentMonth, 1).minus({ months: 1 });

    this.#setUpDateTimeProperties(previousMonth);
  }

  #setUpDateTimeProperties(dateTime: DateTime): void {
    this.currentYear = dateTime.year;
    this.currentMonth = dateTime.month as MonthNumbers;
    this.currentMonthName = dateTime.monthLong!;

    this.#store.dispatch(eventsActions.getEvents({ month: dateTime.month, year: dateTime.year }));

    this.generateCalendar(dateTime);
  }
}
