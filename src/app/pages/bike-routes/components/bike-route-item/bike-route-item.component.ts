import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { provideComponentStore } from '@ngrx/component-store';

import { BikeRouteDetailsComponent } from '../bike-route-details/bike-route-details.component';
import { BikeRouteItemComponentStore } from './bike-route-item.store';

@Component({
  selector: 'app-bike-route-item',
  standalone: true,
  imports: [MatButton, MatIcon, NgOptimizedImage, BikeRouteDetailsComponent],
  templateUrl: './bike-route-item.component.html',
  styleUrl: './bike-route-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideComponentStore(BikeRouteItemComponentStore)],
})
export class BikeRouteItemComponent {
  #componentStore = inject(BikeRouteItemComponentStore);
  #router = inject(Router);
  #route = inject(ActivatedRoute);

  bikeRouteItem = this.#componentStore.dataSignal;

  back(): void {
    this.#router.navigate(['..'], { relativeTo: this.#route });
  }
}
