import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {ngrxProductFeature} from './core/store/reducers';
import {ProductEffects} from './core/store/effects';
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideAnimationsAsync(),
    provideStore({
      ngrxProduct: ngrxProductFeature.reducer
    }),
    provideEffects([ProductEffects]),
    provideHttpClient(),
  ]
};
