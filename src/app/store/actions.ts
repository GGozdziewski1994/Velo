import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, props } from '@ngrx/store';
import { DateTime } from 'luxon';

import { Events } from '@models/events.interface';

export const eventsActions = createActionGroup({
  source: 'Events',
  events: {
    'Get events': props<{ month: number; year: number }>(),
    'Get events success': props<{ events: Events[] }>(),
    'Get events failure': props<{ error: HttpErrorResponse }>(),

    'Set calendar days': props<{ weeks: DateTime[][] }>(),
  },
});
