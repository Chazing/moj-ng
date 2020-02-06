import { NgModule, APP_INITIALIZER, ErrorHandler } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MojSharedModule, PermissionsModule, permissionsModule, GlobalErrorHandler, MojInputModule } from "@moj/moj-ng"
import { MojWebsiteModule } from "@moj/moj-ng"
import { TranslateModule, TranslateLoader, TranslateService } from "@ngx-translate/core";
import { AppComponent } from "./app.component"
import { HttpClient } from "@angular/common/http";
import { MojTranslateLoader } from "@moj/moj-ng";
import { AppRoutingModule } from "./app-routing.module";
import { MojConfigService } from "@moj/moj-ng";
import { environment } from "../environments/environment";
import { MojUtilsService } from "@moj/moj-ng";
import { SidebarModule, AccordionModule, PanelMenuModule } from 'primeng/primeng';
import { ComponentsDemoModule } from "./components-demo/components-demo.module";
import { FormsModule } from "@angular/forms";
import { DemoSiteInternalModule } from "./demo-site-internal/demo-site-internal.module";





@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        MojSharedModule,
        MojInputModule,
        MojWebsiteModule,
        DemoSiteInternalModule,
        ComponentsDemoModule,
        PanelMenuModule,
        SidebarModule,
        AccordionModule,
        FormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (http: HttpClient) => new MojTranslateLoader(http),
                deps: [HttpClient]
            }
        }),
        AppRoutingModule],
    bootstrap: [AppComponent],
    providers: [
        TranslateService,
        MojConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: (utils: MojUtilsService) => () => utils.initialize(environment.configFile),
            deps: [MojUtilsService],
            multi: true
        },
        { provide: ErrorHandler, useClass: GlobalErrorHandler }
    ]
})
export class AppModule {
}
