"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var environment_1 = require("./environments/environment");
var browser_supported_1 = require("./app/moj-ng/scripts/browser-supported");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
if (browser_supported_1.IsSupportBrowser())
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map