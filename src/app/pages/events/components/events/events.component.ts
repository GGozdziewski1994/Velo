import { AsyncPipe, NgClass, NgStyle, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Store } from '@ngrx/store';

import { storeAppActions } from '@store/actions';
import { selectVmForCalendar } from '@store/selectors';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgTemplateOutlet, NgStyle, NgClass, MatButton, AsyncPipe],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {
  #store = inject(Store);

  vm$ = this.#store.select(selectVmForCalendar);

  menageMonths(key: 'next' | 'current' | 'prev'): void {
    this.#store.dispatch(storeAppActions.menageMonths({ key }));
  }
}
