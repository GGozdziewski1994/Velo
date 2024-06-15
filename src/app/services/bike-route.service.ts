import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BikeRouteItemResponse, BikeRoutesResponse } from '@models/bike-routes.interface';

@Injectable({ providedIn: 'root' })
export class BikeRouteService {
  #httpClient = inject(HttpClient);

  getAllBikeRoutes(): Observable<BikeRoutesResponse[]> {
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

  getBikeRouteItem(id: string): Observable<BikeRouteItemResponse> {
    return of({
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
      description: [
        {
          title: 'Title',
          subtitle:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at\n' +
            '        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as\n' +
            "        opposed to using 'Content here, content here'",
          img: 'https://media.istockphoto.com/id/1402134796/pl/zdj%C4%99cie/sylwetka-rowerzysty-o-zachodzie-s%C5%82o%C5%84ca.jpg?s=2048x2048&w=is&k=20&c=6ZGAo5IymMQ2ddWpnAz2x2ue94H1vGp2SuhY6Eo4mtc=',
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        },
        {
          subtitle:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at\n' +
            '        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as\n' +
            "        opposed to using 'Content here, content here'",
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        },
        {
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        },
        {
          title: 'Title',
          img: 'https://media.istockphoto.com/id/1402134796/pl/zdj%C4%99cie/sylwetka-rowerzysty-o-zachodzie-s%C5%82o%C5%84ca.jpg?s=2048x2048&w=is&k=20&c=6ZGAo5IymMQ2ddWpnAz2x2ue94H1vGp2SuhY6Eo4mtc=',
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        },
      ],
    });
  }
}
