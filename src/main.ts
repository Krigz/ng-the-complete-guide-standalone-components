import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
// import { AnalyticsService } from './app/shared/analytics.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
      // AnalyticsService // if you don't use the "providedIn: root" syntax in the service
    ]
  });