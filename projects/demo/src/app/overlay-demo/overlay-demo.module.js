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
var popup_demo_component_1 = require("./popup-demo/popup-demo.component");
var sliding_menu_demo_component_1 = require("./sliding-menu-demo/sliding-menu-demo.component");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var moj_ng_1 = require("@moj/moj-ng");
var demo_site_internal_module_1 = require("../demo-site-internal/demo-site-internal.module");
var dialog_demo_component_1 = require("./dialog-demo/dialog-demo.component");
var OverlayDemoModule = /** @class */ (function () {
    function OverlayDemoModule() {
    }
    OverlayDemoModule = __decorate([
        core_1.NgModule({
            declarations: [dialog_demo_component_1.DialogDemoComponent, popup_demo_component_1.PopupDemoComponent, sliding_menu_demo_component_1.SlidingMenuDemoComponent],
            imports: [
                common_1.CommonModule,
                demo_site_internal_module_1.DemoSiteInternalModule,
                forms_1.FormsModule, moj_ng_1.MojInputModule, moj_ng_1.MojSharedModule, moj_ng_1.MojSlidingMenuModule, moj_ng_1.MojFilterModule,
                router_1.RouterModule.forChild([
                    { path: 'popup-demo', component: popup_demo_component_1.PopupDemoComponent },
                    { path: 'sliding-menu-demo', component: sliding_menu_demo_component_1.SlidingMenuDemoComponent }
                ])
            ],
            entryComponents: [dialog_demo_component_1.DialogDemoComponent]
        })
    ], OverlayDemoModule);
    return OverlayDemoModule;
}());
exports.OverlayDemoModule = OverlayDemoModule;
//# sourceMappingURL=overlay-demo.module.js.map