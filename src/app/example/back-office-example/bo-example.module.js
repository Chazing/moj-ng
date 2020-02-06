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
var router_1 = require("@angular/router");
var back_office_module_1 = require("../../moj-ng/elements/back-office/back-office.module");
var app_main_tab_component_1 = require("./tabs-example/app-main-tab/app-main-tab.component");
var sub_tab1_component_1 = require("./tabs-example/app-main-tab/sub-tab1.component");
var sub_tab2_component_1 = require("./tabs-example/app-main-tab/sub-tab2.component");
var main_tab2_module_1 = require("./tabs-example/main-tab2/main-tab2.module");
var bo_example_component_1 = require("./tabs-example/bo-example.component");
var moj_shared_module_1 = require("../../moj-ng/shared/moj.shared.module");
var input_module_1 = require("../../moj-ng/elements/input.module");
var main_tab3_component_1 = require("./tabs-example/main-tab3/main-tab3.component");
var moj_tabs_module_1 = require("../../moj-ng/elements/tabs/moj-tabs.module");
var main_tab4_component_1 = require("./tabs-example/main-tab3/main-tab4.component");
var main_tab5_component_1 = require("./tabs-example/main-tab3/main-tab5.component");
var main_tab6_component_1 = require("./tabs-example/main-tab3/main-tab6.component");
var main_tab7_component_1 = require("./tabs-example/main-tab3/main-tab7.component");
var main_tab8_component_1 = require("./tabs-example/main-tab3/main-tab8.component");
var navigation_service_1 = require("../../moj-ng/elements/tabs/services/navigation.service");
var moj_file_upload_module_1 = require("../../moj-ng/elements/file-upload/moj-file-upload.module");
var tab3_side1_component_1 = require("./tabs-example/main-tab3/tab3-side1/tab3-side1.component");
var tab3_side2_component_1 = require("./tabs-example/main-tab3/tab3-side2/tab3-side2.component");
var tab3_side3_component_1 = require("./tabs-example/main-tab3/tab3-side3/tab3-side3.component");
var form_example_component_1 = require("../form-example/form-example.component");
var form_example_module_1 = require("../form-example/form-example.module");
var BOExampleModule = /** @class */ (function () {
    function BOExampleModule() {
    }
    BOExampleModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                moj_shared_module_1.MojSharedModule,
                input_module_1.MojInputModule,
                moj_tabs_module_1.MojTabsModule,
                back_office_module_1.MojBackOfficeModule,
                moj_file_upload_module_1.MojFileUploadModule,
                form_example_module_1.FormExampleModule,
                router_1.RouterModule.forChild([
                    { path: '', pathMatch: 'full', redirectTo: 'root' },
                    {
                        path: 'root',
                        component: bo_example_component_1.BOExampleComponent,
                        children: [
                            { path: '', pathMatch: 'full', redirectTo: 'main' },
                            {
                                path: 'main',
                                component: app_main_tab_component_1.AppMainTab,
                                children: [
                                    { path: '', pathMatch: 'full', redirectTo: 'sub-tab1' },
                                    { path: 'sub-tab1', component: sub_tab1_component_1.SubTab1 },
                                    { path: 'sub-tab2', component: sub_tab2_component_1.SubTab2 /*,canActivate:[MojGuard], data:{routerID:"#SubTab2"}*/ }
                                ]
                            },
                            { path: 'tab2', loadChildren: function () { return Promise.resolve().then(function () { return require('./tabs-example/main-tab2/main-tab2.module'); }).then(function (m) { return m.MainTab2Module; }); } },
                            { path: 'tab3', component: main_tab3_component_1.MainTab3Component, canActivate: [navigation_service_1.NavigationService] },
                            { path: 'tab4', component: main_tab4_component_1.MainTab4Component, canActivate: [navigation_service_1.NavigationService] },
                            { path: 'tab5', component: main_tab5_component_1.MainTab5Component, canActivate: [navigation_service_1.NavigationService] },
                            { path: 'tab6', component: main_tab6_component_1.MainTab6Component, canActivate: [navigation_service_1.NavigationService] },
                            { path: 'tab7', component: main_tab7_component_1.MainTab7Component, canActivate: [navigation_service_1.NavigationService] },
                            {
                                path: 'tab8/:id',
                                component: main_tab8_component_1.MainTab8Component,
                                canActivate: [navigation_service_1.NavigationService],
                                children: [
                                    { path: 'sub1', component: tab3_side1_component_1.Tab3Side1Component },
                                    { path: 'sub2', component: tab3_side2_component_1.Tab3Side2Component /*,data:{routerID:"#SubTab2"}*/ },
                                    { path: 'sub3', component: tab3_side3_component_1.Tab3Side3Component }
                                ]
                            },
                            { path: 'tab9', component: form_example_component_1.FormExampleComponent, canActivate: [navigation_service_1.NavigationService] },
                        ]
                    }
                ])
            ],
            exports: [router_1.RouterModule],
            declarations: [
                bo_example_component_1.BOExampleComponent,
                app_main_tab_component_1.AppMainTab,
                sub_tab1_component_1.SubTab1,
                sub_tab2_component_1.SubTab2,
                main_tab3_component_1.MainTab3Component,
                main_tab4_component_1.MainTab4Component,
                main_tab5_component_1.MainTab5Component,
                main_tab6_component_1.MainTab6Component,
                main_tab7_component_1.MainTab7Component,
                main_tab8_component_1.MainTab8Component,
                tab3_side1_component_1.Tab3Side1Component,
                tab3_side2_component_1.Tab3Side2Component,
                tab3_side3_component_1.Tab3Side3Component
            ]
        })
    ], BOExampleModule);
    return BOExampleModule;
}());
exports.BOExampleModule = BOExampleModule;
function getMainTab2Module() {
    return main_tab2_module_1.MainTab2Module;
}
exports.getMainTab2Module = getMainTab2Module;
//# sourceMappingURL=bo-example.module.js.map