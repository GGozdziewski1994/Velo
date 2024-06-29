import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { EventsResponse } from '@models/events.interface';

import { API_URL } from '../app.config';

@Injectable({ providedIn: 'root' })
export class EventsService {
  #http = inject(HttpClient);
  api = inject(API_URL);

  getCalendarData(month: number, year: number): Observable<EventsResponse[]> {
    return this.#http.get<EventsResponse[]>(`${this.api}/events?month=${month}&year=${year}`);
  }
}
