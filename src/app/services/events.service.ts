import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Events } from '@models/events.interface';

@Injectable({ providedIn: 'root' })
export class EventsService {
  #http = inject(HttpClient);

  getCalendarData(month: number, year: number): Observable<{ events: Events[] }> {
    const fakeData = [
      {
        month: 4,
        events: [
          {
            id: '346346',
            eventDay: 26,
            eventMonth: 4,
            eventYear: 2024,
            image:
              'https://img1.wsimg.com/isteam/ip/f61dd058-d039-4339-8730-b7b97d988d6d/Warta%20Gravel%20HS.png/:/rs=h:200,cg:true,m/qt=q:100/ll',
            linkPage: 'https://wartagravel.com/',
          },
        ],
      },
    ];

    const index = fakeData.findIndex(data => data.month === month);

    return of({ events: index !== -1 ? fakeData[index].events : [] });
  }
}
