import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';

import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideClientHydration(withEventReplay()),
        provideHttpClient(withFetch()),
        provideAnimations(),
        provideTranslateService({
            fallbackLang: 'en',
            lang: 'en',
            loader: provideTranslateHttpLoader({
                prefix: '/i18n/',
                suffix: '.json',
            }),
        }),
        provideAppInitializer(() => {
            const translate = inject(TranslateService);
            translate.use(translate.getBrowserLang() || 'en');
        }),
    ],
};
