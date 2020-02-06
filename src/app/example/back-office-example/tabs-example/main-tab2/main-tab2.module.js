"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("../../../../../../node_modules/@angular/core");
var common_1 = require("../../../../../../node_modules/@angular/common");
var router_1 = require("../../../../../../node_modules/@angular/router");
var main_tab2_component_1 = require("./main-tab2.component");
var navigation_service_1 = require("../../../../moj-ng/elements/tabs/services/navigation.service");
var grid_example_module_1 = require("../../../grid-example/grid-example.module");
var moj_shared_module_1 = require("../../../../moj-ng/shared/moj.shared.module");
var moj_slide_preview_doc_module_1 = require("../../../../moj-ng/elements/documents/moj-slide-preview-doc/moj-slide-preview-doc.module");
var tab2_second_component_1 = require("./tab2-second/tab2-second.component");
var tab2_side1_component_1 = require("./tab2-side1/tab2-side1.component");
var tab2_side3_component_1 = require("./tab2-side3/tab2-side3.component");
var tab2_side2_component_1 = require("./tab2-side2/tab2-side2.component");
var dataview_1 = require("primeng/dataview");
var moj_filter_module_1 = require("../../../../moj-ng/elements/filter/moj-filter.module");
var MainTab2Module = /** @class */ (function () {
    function MainTab2Module() {
    }
    MainTab2Module = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, dataview_1.DataViewModule, moj_shared_module_1.MojSharedModule, grid_example_module_1.GridExampleModule, moj_slide_preview_doc_module_1.MojSlidePreviewDocModule, moj_filter_module_1.MojFilterModule, router_1.RouterModule.forChild([
                    { path: "", pathMatch: "full", redirectTo: "hello-tab2" },
                    { path: "hello-tab2", component: main_tab2_component_1.MainTab2Component, canActivate: [navigation_service_1.NavigationService], children: [
                            { path: 'sub1', pathMatch: "full", component: tab2_side1_component_1.Tab2Side1Component },
                            { path: 'sub2', pathMatch: "full", component: tab2_side2_component_1.Tab2Side2Component /*,data:{routerID:"#sub2"}*/ },
                            { path: 'sub3', pathMatch: "full", component: tab2_side3_component_1.Tab2Side3Component },
                        ] },
                    { path: "hello-tab2-second", component: tab2_second_component_1.Tab2SecondComponent, canActivate: [navigation_service_1.NavigationService] }
                ])],
            exports: [router_1.RouterModule],
            declarations: [main_tab2_component_1.MainTab2Component, tab2_second_component_1.Tab2SecondComponent, tab2_side1_component_1.Tab2Side1Component, tab2_side2_component_1.Tab2Side2Component, tab2_side3_component_1.Tab2Side3Component]
        })
    ], MainTab2Module);
    return MainTab2Module;
}());
exports.MainTab2Module = MainTab2Module;
//# sourceMappingURL=main-tab2.module.js.map