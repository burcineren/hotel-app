import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { appEffects, appStore } from './app.state';
import { provideEffects } from '@ngrx/effects';
import { provideTransloco } from '@jsverse/transloco';
import { translocoLoader } from './core/loader/transloco-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideStore(appStore),
    provideEffects(appEffects),
    provideTransloco({
      config: {
        defaultLang: 'en',
        fallbackLang: 'en',
        prodMode: !isDevMode(),
      },
      loader: translocoLoader,
    }),
  ],
};
