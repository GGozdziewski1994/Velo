import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { BLOG_TYPE_MAP } from '@map/blog-type.map';
import { EntriesDotTypesResponse } from '@models/entries-dot-types.interface';
import { EntriesResponse } from '@models/entries.interface';
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

    // Forum
    'Get entries': props<{ selectedType: string }>(),
    'Get entries success': props<{ entries: EntriesResponse[] }>(),
    'Get entries failure': props<{ error: HttpErrorResponse }>(),

    'Get dot types': emptyProps(),
    'Get dot types success': props<{ types: EntriesDotTypesResponse[] }>(),
    'Get dot types failure': props<{ error: HttpErrorResponse }>(),

    'empty action': emptyProps(),
  },
});
