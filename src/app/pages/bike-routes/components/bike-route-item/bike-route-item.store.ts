import { Injectable, inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, catchError, switchMap, tap } from 'rxjs';

import { BikeRouteItemResponse } from '@models/bike-routes.interface';
import { BikeRouteService } from '@services/bike-route.service';

@Injectable()
export class BikeRouteItemComponentStore extends ComponentStore<{ data: BikeRouteItemResponse | null }> {
  #service = inject(BikeRouteService);

  readonly dataSignal = this.selectSignal(state => state.data);

  readonly getBikeRouteItem = this.effect<{ id: string }>(trigger$ =>
    trigger$.pipe(
      switchMap(({ id }) =>
        this.#service.getBikeRouteItem(id).pipe(
          tap({
            next: data => this.patchState({ data }),
            error: e => console.error(e),
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor() {
    super({ data: null });
  }
}
