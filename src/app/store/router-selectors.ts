import { ActivatedRoute } from '@angular/router';
import { RouterReducerState, getRouterSelectors } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const routerReducerKey = 'router';

export const selectRoute = createFeatureSelector<RouterReducerState>(routerReducerKey);

export const {
  selectCurrentRoute,
  selectFragment,
  selectQueryParams,
  selectQueryParam,
  selectRouteParams,
  selectRouteParam,
  selectRouteData,
  selectUrl,
  selectTitle,
} = getRouterSelectors(selectRoute);

export const selectCurrentRoutePath = createSelector(
  selectCurrentRoute,
  (currentRoute: ActivatedRoute) => currentRoute?.routeConfig?.path ?? '$'
);
