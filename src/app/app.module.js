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
var common_1 = require("@angular/common");
var moj_shared_module_1 = require("./moj-ng/shared/moj.shared.module");
var core_2 = require("@ngx-translate/core");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/common/http");
var moj_translate_loader_1 = require("./moj-ng/shared/moj-translate-loader");
var moj_config_service_1 = require("./moj-ng/shared/moj-config.service");
var utils_1 = require("./moj-ng/shared/utils");
var environment_1 = require("../environments/environment");
var moj_ng_1 = require("./moj-ng");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                moj_shared_module_1.MojSharedModule,
                app_routing_module_1.AppRoutingModule,
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: function (http) { return new moj_translate_loader_1.MojTranslateLoader(http); },
                        deps: [http_1.HttpClient]
                    }
                })
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                { provide: core_1.ErrorHandler, useClass: moj_ng_1.GlobalErrorHandler },
                core_2.TranslateService,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                moj_config_service_1.MojConfigService,
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: function (utils) { return function () { return utils.initialize(environment_1.environment.configFile); }; },
                    deps: [utils_1.MojUtilsService],
                    multi: true
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map