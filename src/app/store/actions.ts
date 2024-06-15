import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Events } from '@models/events.interface';

export const storeAppActions = createActionGroup({
  source: 'App',
  events: {
    'Get events': props<{ month: number; year: number }>(),
    'Get events success': props<{ events: Events[] }>(),
    'Get events failure': props<{ error: HttpErrorResponse }>(),

    'Set date time': props<{ selectedYear: number; selectedMonth: number }>(),

    'Menage months': props<{ key: 'next' | 'prev' | 'current' }>(),

    'empty action': emptyProps(),
  },
});
