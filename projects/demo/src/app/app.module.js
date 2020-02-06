"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var moj_ng_1 = require("@moj/moj-ng");
var moj_ng_2 = require("@moj/moj-ng");
var core_2 = require("@ngx-translate/core");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/common/http");
var moj_ng_3 = require("@moj/moj-ng");
var app_routing_module_1 = require("./app-routing.module");
var moj_ng_4 = require("@moj/moj-ng");
var environment_1 = require("../environments/environment");
var moj_ng_5 = require("@moj/moj-ng");
var primeng_1 = require("primeng/primeng");
var components_demo_module_1 = require("./components-demo/components-demo.module");
var forms_1 = require("@angular/forms");
var demo_site_internal_module_1 = require("./demo-site-internal/demo-site-internal.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                moj_ng_1.MojSharedModule,
                moj_ng_1.MojInputModule,
                moj_ng_2.MojWebsiteModule,
                demo_site_internal_module_1.DemoSiteInternalModule,
                components_demo_module_1.ComponentsDemoModule,
                primeng_1.PanelMenuModule,
                primeng_1.SidebarModule,
                primeng_1.AccordionModule,
                forms_1.FormsModule,
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: function (http) { return new moj_ng_3.MojTranslateLoader(http); },
                        deps: [http_1.HttpClient]
                    }
                }),
                app_routing_module_1.AppRoutingModule],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                core_2.TranslateService,
                moj_ng_4.MojConfigService,
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: function (utils) { return function () { return utils.initialize(environment_1.environment.configFile); }; },
                    deps: [moj_ng_5.MojUtilsService],
                    multi: true
                },
                { provide: core_1.ErrorHandler, useClass: moj_ng_1.GlobalErrorHandler }
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map