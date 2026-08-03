import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import reportWebVitals from '@vercel/analytics';

bootstrapApplication(AppComponent, appConfig)
    .then(() => {
        reportWebVitals.inject({});
    })
    .catch((err) => console.error(err));
