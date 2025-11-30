import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import '@angular/localize/init';

import reportWebVitals from '@vercel/analytics';
import { Router, NavigationEnd } from '@angular/router';

bootstrapApplication(AppComponent, appConfig)
    .then((appRef) => {
        reportWebVitals.inject({});

        const router = appRef.injector.get(Router);
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                reportWebVitals.track('pageview', { url: event.urlAfterRedirects });
            }
        });
    })
    .catch((err) => console.error(err));
