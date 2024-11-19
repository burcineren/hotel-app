import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { ReservationService } from './core/services/reservation/reservation.service';
import { appEffects, appStore } from './app.state';
import { provideEffects } from '@ngrx/effects';
import { provideTransloco } from '@jsverse/transloco';
import { translocoLoader } from './core/loader/transloco-loader';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideTransloco({
      config: {
        defaultLang: 'en', // Set the default language
        fallbackLang: 'en', // Set the fallback language
        prodMode: true, // Enable production mode to disable dev tools
      },
      loader: translocoLoader, // Provide the loader for translations
    }),
    provideAnimationsAsync(),
    provideStore(appStore),
    provideEffects(appEffects),
    ReservationService,
  ],
};
