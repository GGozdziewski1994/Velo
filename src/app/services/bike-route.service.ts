import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BikeRouteItemResponse, BikeRoutesResponse } from '@models/bike-routes.interface';

import { API_URL } from '../app.config';

@Injectable({ providedIn: 'root' })
export class BikeRouteService {
  #http = inject(HttpClient);
  api = inject(API_URL);

  getAllBikeRoutes(): Observable<BikeRoutesResponse[]> {
    return this.#http.get<BikeRoutesResponse[]>(`${this.api}/bike-routes`);
  }

  getBikeRouteItem(id: string): Observable<BikeRouteItemResponse> {
    return this.#http.get<BikeRouteItemResponse>(`${this.api}/bike-route/${id}`);
  }
}
