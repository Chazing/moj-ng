import {
  NgModule,
  ErrorHandler,
  APP_INITIALIZER,
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpModule } from "@angular/http";
import {
  LocationStrategy,
  HashLocationStrategy,
} from "@angular/common";

import { MojSharedModule } from "./moj-ng/shared/moj.shared.module";
import {
  TranslateModule,
  TranslateLoader,
  TranslateService
} from "@ngx-translate/core";

import { AppComponent } from "./app.component";
import { GlobalErrorHandler } from "./moj-ng/error-handling/global-error-hander";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClient } from "@angular/common/http";
import { MojTranslateLoader } from "./moj-ng/shared/moj-translate-loader";
import { GridService } from "./moj-ng/elements/grid/service/moj-grid.service";
import { MojConfigService } from "./moj-ng/shared/moj-config.service";
import { MojUtilsService } from "./moj-ng/shared/utils";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
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
