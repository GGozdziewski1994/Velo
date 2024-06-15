import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BikeRoutesResponse } from '@models/bike-routes.interface';

@Injectable({ providedIn: 'root' })
export class BikeRouteService {
  #httpClient = inject(HttpClient);

  getBikeRoutes(): Observable<BikeRoutesResponse[]> {
    return of([
      {
        id: '1',
        map: 'https://media.istockphoto.com/id/1450333869/pl/zdj%C4%99cie/fitness-sportowiec-i-rowerzysta-z-rowerem-na-g%C3%B3rskiej-drodze-dla-zdrowia-dobrego.jpg?s=2048x2048&w=is&k=20&c=WEu53mI0cOKScsqI30F5y4fL4WuL7XnN8th_-qDsdFA=',
        title: 'Trasa wokół Poznania',
        details: [
          {
            type: 'bikeType',
            value: 'Gravel, Trekking',
          },
          {
            type: 'region',
            value: 'Wielkopolska',
          },
          {
            type: 'time',
            value: '2h',
          },
          {
            type: 'distance',
            value: '50 km',
          },
          {
            type: 'level',
            value: 'Średnia',
          },
          {
            type: 'family',
            value: false,
          },
          {
            type: 'routeType',
            value: 'Szlak',
          },
          {
            type: 'laps',
            value: false,
          },
          {
            type: 'road',
            value: 'Szuter 80%, Asfalt 20%',
          },
        ],
      },
      {
        id: '2',
        map: 'https://media.istockphoto.com/id/1450333869/pl/zdj%C4%99cie/fitness-sportowiec-i-rowerzysta-z-rowerem-na-g%C3%B3rskiej-drodze-dla-zdrowia-dobrego.jpg?s=2048x2048&w=is&k=20&c=WEu53mI0cOKScsqI30F5y4fL4WuL7XnN8th_-qDsdFA=',
        title: 'Velo Dunajec',
        details: [
          {
            type: 'bikeType',
            value: 'Gravel, Szosa, Trekking',
          },
          {
            type: 'region',
            value: 'Małopolska',
          },
          {
            type: 'time',
            value: '7h',
          },
          {
            type: 'distance',
            value: '250 km',
          },
          {
            type: 'level',
            value: 'Średnia',
          },
          {
            type: 'family',
            value: true,
          },
          {
            type: 'routeType',
            value: 'Trasa',
          },
          {
            type: 'laps',
            value: true,
          },
          {
            type: 'road',
            value: 'Asfalt 90%, Szuter 10%',
          },
        ],
      },
    ]);
  }
}
