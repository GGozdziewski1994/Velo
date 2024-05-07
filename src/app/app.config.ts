import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import localePl from '@angular/common/locales/pl';
import { ApplicationConfig, InjectionToken, LOCALE_ID } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';

import { environment } from '@env/environments';

import { routes } from './app.routes';
import { Effects } from './store/effects';
import { reducerFeature } from './store/reducer';

export const API_URL = new InjectionToken<string>('API_URL');

registerLocaleData(localePl);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    provideStore(),
    provideState(reducerFeature),
    provideEffects([Effects]),
    { provide: API_URL, useValue: environment.API_URL },
    { provide: LOCALE_ID, useValue: 'pl-PL' },
  ],
};
