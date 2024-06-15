import { Injectable, inject } from '@angular/core';
import { ComponentStore, OnStoreInit } from '@ngrx/component-store';
import { EMPTY, catchError, switchMap, tap } from 'rxjs';

import { BikeRoutesResponse } from '@models/bike-routes.interface';
import { BikeRouteService } from '@services/bike-route.service';

@Injectable()
export class BikeRouteDetailsComponentStore
  extends ComponentStore<{ data: BikeRoutesResponse[] }>
  implements OnStoreInit
{
  #service = inject(BikeRouteService);

  readonly data$ = this.select(state => state.data);

  readonly getBikeRoutes = this.effect(trigger$ =>
    trigger$.pipe(
      switchMap(() =>
        this.#service.getBikeRoutes().pipe(
          tap({
            next: data => this.patchState({ data }),
            error: e => console.error(e),
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  ngrxOnStoreInit(): void {
    this.getBikeRoutes();
  }

  constructor() {
    super({ data: [] });
  }
}
