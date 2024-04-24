import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, InjectionToken, LOCALE_ID } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { environment } from '@env/environments';

import { routes } from './app.routes';

export const API_URL = new InjectionToken<string>('API_URL');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    { provide: API_URL, useValue: environment.API_URL },
    { provide: LOCALE_ID, useValue: 'pl-PL' },
  ],
};
