"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var demo_site_internal_module_1 = require("./../../demo-site-internal/demo-site-internal.module");
var core_1 = require("@angular/core");
var moj_ng_1 = require("@moj/moj-ng");
var ag_grid_demo_component_1 = require("./ag-grid/ag-grid-demo.component");
var quick_filter_demo_component_1 = require("./quick-filter/quick-filter-demo.component");
var edit_grid_demo_component_1 = require("./edit-grid/edit-grid-demo.component");
var edit_grid_component_component_1 = require("./edit-grid/edit-grid-component.component");
var grid_demo_routing_module_1 = require("./grid-demo-routing.module");
var edit_inline_demo_component_1 = require("./edit-inline-demo/edit-inline-demo.component");
var edit_popup_demo_component_1 = require("./edit-popup-demo/edit-popup-demo.component");
var moj_columns_demo_component_1 = require("./moj-columns-demo/moj-columns-demo.component");
var action_popup_demo_component_1 = require("./action-poup-demo/action-popup-demo.component");
var GridDemoModule = /** @class */ (function () {
    function GridDemoModule() {
    }
    GridDemoModule = __decorate([
        core_1.NgModule({
            imports: [
                moj_ng_1.MojGridModule,
                moj_ng_1.MojSharedModule,
                moj_ng_1.MojInputModule,
                moj_ng_1.MojWebsiteModule,
                demo_site_internal_module_1.DemoSiteInternalModule,
                grid_demo_routing_module_1.GridDemoRoutingModule
            ],
            exports: [moj_ng_1.MojGridModule,
                ag_grid_demo_component_1.AGGridDemoComponent,
                quick_filter_demo_component_1.QuickFilterDemoComponent,
                edit_grid_demo_component_1.EditGridDemoComponent
            ],
            declarations: [
                ag_grid_demo_component_1.AGGridDemoComponent,
                quick_filter_demo_component_1.QuickFilterDemoComponent,
                edit_grid_demo_component_1.EditGridDemoComponent,
                edit_grid_component_component_1.EditGridComponentDemoComponent,
                edit_inline_demo_component_1.EditInlineDemoComponent,
                edit_popup_demo_component_1.EditPopupDemoComponent,
                moj_columns_demo_component_1.MojColumnsDemoComponent,
                action_popup_demo_component_1.ActionPopupDemoComponent
            ],
            entryComponents: [
                edit_grid_component_component_1.EditGridComponentDemoComponent
            ]
        })
    ], GridDemoModule);
    return GridDemoModule;
}());
exports.GridDemoModule = GridDemoModule;
//# sourceMappingURL=grid-demo.module.js.map