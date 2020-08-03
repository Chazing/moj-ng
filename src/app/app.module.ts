import { MojTranslateLoader, MojSharedModule, GlobalErrorHandler, MojUtilsService, MojConfigService } from '@moj/moj-ng';
import { NgModule, ErrorHandler, APP_INITIALIZER, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

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
