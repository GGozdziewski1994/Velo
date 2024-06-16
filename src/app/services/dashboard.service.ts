import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { DashboardResponse } from '@models/dashboard.interface';

import { API_URL } from '../app.config';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  #http = inject(HttpClient);
  api = inject(API_URL);

  getDashboardData(): Observable<DashboardResponse> {
    return this.#http.get<DashboardResponse>(`${this.api}/dashboard`);
  }
}
