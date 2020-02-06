"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var moj_shared_module_1 = require("@moj/moj-ng/shared/moj.shared.module");
var moj_ng_1 = require("@moj/moj-ng");
var router_1 = require("@angular/router");
var moj_loading_demo_component_1 = require("./moj-loading-demo/moj-loading-demo.component");
var progress_demo_component_1 = require("./progress-demo/progress-demo.component");
var recaptcha_demo_component_1 = require("./recaptcha-demo/recaptcha-demo.component");
var invisible_recaptcha_demo_component_1 = require("./invisible-recaptcha-demo/invisible-recaptcha-demo.component");
var resize_demo_component_1 = require("./resize-demo/resize-demo.component");
var filter_demo_component_1 = require("./filter-demo/filter-demo-component");
var demo_site_internal_module_1 = require("../demo-site-internal/demo-site-internal.module");
var MiscDemoModule = /** @class */ (function () {
    function MiscDemoModule() {
    }
    MiscDemoModule = __decorate([
        core_1.NgModule({
            declarations: [
                moj_loading_demo_component_1.MojLoadingDemoComponent,
                progress_demo_component_1.ProgressDemoComponent,
                recaptcha_demo_component_1.RecaptchaDemoComponent,
                invisible_recaptcha_demo_component_1.InvisibleRecaptchaDemoComponent,
                resize_demo_component_1.ResizeDemoComponent,
                filter_demo_component_1.FilterDemoComponent
            ],
            imports: [
                common_1.CommonModule, moj_shared_module_1.MojSharedModule, moj_ng_1.MojInputModule, moj_ng_1.MojProgressModule, moj_ng_1.MojWebsiteModule, moj_ng_1.MojFilterModule, demo_site_internal_module_1.DemoSiteInternalModule, router_1.RouterModule.forChild([
                    { path: 'loading-demo', component: moj_loading_demo_component_1.MojLoadingDemoComponent },
                    { path: 'progress-demo', component: progress_demo_component_1.ProgressDemoComponent },
                    { path: 'recaptcha-demo', component: recaptcha_demo_component_1.RecaptchaDemoComponent },
                    { path: 'invisible-recaptcha-demo', component: invisible_recaptcha_demo_component_1.InvisibleRecaptchaDemoComponent },
                    { path: 'resize-demo', component: resize_demo_component_1.ResizeDemoComponent },
                    { path: 'filter-demo', component: filter_demo_component_1.FilterDemoComponent }
                ])
            ]
        })
    ], MiscDemoModule);
    return MiscDemoModule;
}());
exports.MiscDemoModule = MiscDemoModule;
//# sourceMappingURL=misc-demo.module.js.map