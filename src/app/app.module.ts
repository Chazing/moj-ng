import { NgModule, ErrorHandler, APP_INITIALIZER, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MojSharedModule } from './moj-ng/shared/moj.shared.module';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient } from '@angular/common/http';
import { MojTranslateLoader } from './moj-ng/shared/moj-translate-loader';
import { MojConfigService } from './moj-ng/shared/moj-config.service';
import { MojUtilsService } from './moj-ng/shared/utils';
import { environment } from '../environments/environment';
import { GlobalErrorHandler } from './moj-ng';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MojSharedModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new MojTranslateLoader(http),
        deps: [HttpClient]
      }
    })
  ],  
  bootstrap: [AppComponent],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    TranslateService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    MojConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: (utils: MojUtilsService) => () => utils.initialize(environment.configFile),
      deps: [MojUtilsService],
      multi: true
    }
  ]
})
export class AppModule {}
