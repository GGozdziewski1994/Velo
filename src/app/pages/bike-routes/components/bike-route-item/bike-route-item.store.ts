import { Injectable, inject } from '@angular/core';
import { ComponentStore, OnStoreInit } from '@ngrx/component-store';
import { Store } from '@ngrx/store';
import { EMPTY, catchError, switchMap, tap } from 'rxjs';

import { BikeRouteItemResponse } from '@models/bike-routes.interface';
import { BikeRouteService } from '@services/bike-route.service';
import { selectRouteParam } from '@store/router-selectors';

@Injectable()
export class BikeRouteItemComponentStore
  extends ComponentStore<{ data: BikeRouteItemResponse | null }>
  implements OnStoreInit
{
  #service = inject(BikeRouteService);
  #store = inject(Store);

  readonly idSignal = this.#store.selectSignal(selectRouteParam('id'));
  readonly dataSignal = this.selectSignal(state => state.data);

  readonly getBikeRouteItem = this.effect<string>(trigger$ =>
    trigger$.pipe(
      switchMap(id =>
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

  ngrxOnStoreInit(): void {
    this.getBikeRouteItem(this.idSignal() as string);
  }

  constructor() {
    super({ data: null });
  }
}
