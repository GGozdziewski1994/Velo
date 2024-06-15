import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { provideComponentStore } from '@ngrx/component-store';

import { BIKE_TYPE_OPTIONS_MAP } from '@map/bike-type-options.map';
import { DISTANCE_OPTIONS_MAP } from '@map/distance-options.map';
import { REGION_OPTIONS_MAP } from '@map/region-options.map';
import {
  bikeTypeSelectOptionsConfig,
  distanceSelectOptionsConfig,
  regionSelectOptionsConfig,
} from '@pages/bike-routes/configs';
import { ValueOf } from '@shared/types/value-of.type';

import { BikeRouteDetailsComponent } from '../bike-route-details/bike-route-details.component';
import { BikeRoutesComponentStore } from './bike-routes.store';

@Component({
  selector: 'app-bike-routes',
  standalone: true,
  imports: [
    NgOptimizedImage,
    BikeRouteDetailsComponent,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    MatButton,
    ReactiveFormsModule,
  ],
  templateUrl: './bike-routes.component.html',
  styleUrl: './bike-routes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideComponentStore(BikeRoutesComponentStore)],
})
export class BikeRoutesComponent {
  #componentStore = inject(BikeRoutesComponentStore);
  #router = inject(Router);
  #route = inject(ActivatedRoute);

  bikeRoutes = this.#componentStore.dataSignal;

  regionSelect = regionSelectOptionsConfig;
  bikeType = bikeTypeSelectOptionsConfig;
  distanceSelect = distanceSelectOptionsConfig;
  form = new FormGroup({
    region: new FormControl<ValueOf<typeof REGION_OPTIONS_MAP>[] | null>(null),
    bikeType: new FormControl<ValueOf<typeof BIKE_TYPE_OPTIONS_MAP>[] | null>(null),
    distance: new FormControl<ValueOf<typeof DISTANCE_OPTIONS_MAP> | null>(null),
  });

  filter(): void {
    console.log(this.form.getRawValue());
  }

  goToItem(id: string): void {
    this.#router.navigate([id], { relativeTo: this.#route });
  }
}
