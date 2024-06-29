import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { BLOG_TYPE_MAP } from '@map/blog-type.map';
import { EventsResponse } from '@models/events.interface';
import { ValueOf } from '@shared/types';

export const storeAppActions = createActionGroup({
  source: 'App',
  events: {
    // Events
    'Get events': props<{ month: number; year: number }>(),
    'Get events success': props<{ events: EventsResponse[] }>(),
    'Get events failure': props<{ error: HttpErrorResponse }>(),
    'Set date time': props<{ selectedYear: number; selectedMonth: number }>(),
    'Menage months': props<{ key: 'next' | 'prev' | 'current' }>(),

    // Blog
    'blog type': props<{ blogType: ValueOf<typeof BLOG_TYPE_MAP> }>(),

    'empty action': emptyProps(),
  },
});
