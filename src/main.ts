import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { IsSupportBrowser } from '../projects/moj-ng/src/lib/scripts/browser-supported';

if (environment.production) {
  enableProdMode();
}
if (IsSupportBrowser())
  platformBrowserDynamic().bootstrapModule(AppModule);
