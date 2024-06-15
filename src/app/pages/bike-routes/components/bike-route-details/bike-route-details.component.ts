import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

import { BikeRouteDetails, BikeRouteDetailsResponse } from '@models/bike-routes.interface';

import { bikeRouteDetailsConfig } from '../../configs';

@Component({
  selector: 'app-bike-route-details',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './bike-route-details.component.html',
  styleUrl: './bike-route-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeRouteDetailsComponent {
  details = input.required<BikeRouteDetails[], BikeRouteDetailsResponse[]>({
    transform: details =>
      bikeRouteDetailsConfig.map(data => {
        const value = details.find(detail => detail.type === data.type)?.value ?? '';

        return {
          ...data,
          value: typeof value === 'boolean' ? (value ? 'Tak' : 'Nie') : value,
        };
      }),
  });
}
