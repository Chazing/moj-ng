"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var multiselect_example_component_1 = require("../multiselect/multiselect-example.component");
var autocomplete_example_component_1 = require("../autocomplete/autocomplete-example.component");
var file_upload_example_component_1 = require("../file-upload-example/file-upload-example.component");
var grid_example_component_1 = require("../grid-example/grid-example.component");
var website_example_component_1 = require("./website-example.component");
var wizard_example_component_1 = require("../wizard/wizard-example.component");
var form_example_component_1 = require("../form-example/form-example.component");
var datepicker_example_component_1 = require("../datepicker-example/datepicker-example.component");
var dialog_example_component_1 = require("../dialog-example/dialog-example.component");
var recaptcha_example_component_1 = require("../recaptcha-example/recaptcha-example.component");
var reactive_form_example_component_1 = require("../form-example/reactive-form-example/reactive-form-example.component");
var grid_edit_inline_example_component_1 = require("../grid-example/grid-edit-inline-example.component");
var buttons_example_component_1 = require("../buttons/buttons-example.component");
var grid_server_side_example_component_1 = require("../grid-example/grid-server-side/grid-server-side-example.component");
var editor_example_component_1 = require("../editor/editor-example.component");
var grid_example_guard_1 = require("../common/guards/grid-example-guard");
var moj_guard_1 = require("../../moj-ng/permissions/moj-guard");
var websiteRoutes = [
    {
        path: '',
        component: website_example_component_1.WebsiteExampleComponent,
        children: [
            { path: 'autocomplete', component: autocomplete_example_component_1.AutocompleteExampleComponent, canActivate: [moj_guard_1.MojGuard], data: { routerID: '#autocomplete' } },
            { path: 'multiselect', component: multiselect_example_component_1.MultiSelectExampleComponent, canActivate: [moj_guard_1.MojGuard], data: { routerID: '#multiselect' } },
            { path: 'file-upload', component: file_upload_example_component_1.FileUploadExampleComponent, canActivate: [moj_guard_1.MojGuard], data: { routerID: '#file-upload' } },
            { path: 'grid', component: grid_example_component_1.GridExampleComponent, canDeactivate: [grid_example_guard_1.GridExampleGuard], data: { routerID: '#grid' } },
            { path: 'grid-edit-inline', component: grid_edit_inline_example_component_1.GridEditInlineExampleComponent, canActivate: [moj_guard_1.MojGuard], data: { routerID: 'gridEdit' } },
            { path: 'grid-server-side', component: grid_server_side_example_component_1.GridServerSideExample, canActivate: [moj_guard_1.MojGuard] },
            { path: 'wizard', component: wizard_example_component_1.WizardExampleComponent, canActivate: [moj_guard_1.MojGuard] },
            { path: 'form', component: form_example_component_1.FormExampleComponent, canActivate: [moj_guard_1.MojGuard], data: { routerID: '#form' } },
            { path: 'reactiveform', component: reactive_form_example_component_1.ReactiveFormExampleComponent, canActivate: [moj_guard_1.MojGuard] },
            { path: 'datepicker', component: datepicker_example_component_1.DatepickerExampleComponent, canActivate: [moj_guard_1.MojGuard] },
            { path: 'dialog', component: dialog_example_component_1.DialogExampleComponent, canActivate: [moj_guard_1.MojGuard] },
            { path: 'recaptcha', component: recaptcha_example_component_1.RecaptchaExampleComponent, canActivate: [moj_guard_1.MojGuard] },
            { path: 'buttons', component: buttons_example_component_1.ButtonsExampleComponent, canActivate: [moj_guard_1.MojGuard], data: { routerID: '#Button' } },
            { path: 'editor', component: editor_example_component_1.EditorExampleComponent, canActivate: [moj_guard_1.MojGuard] },
            // { path: 'on-off-switch', component: OnOffSwitchComponent  },     
            { path: "entity", loadChildren: function () { return Promise.resolve().then(function () { return require('./content-with-tabs/content-with-tabs.module'); }).then(function (m) { return m.ContentWithTabsModule; }); } }
            // "./content-with-tabs/content-with-tabs.module#ContentWithTabsModule"}          
            // {
            //     path: "entity-layout", component: EntityLayoutComponent, 
            //     children: [
            //         { path: "", pathMatch: "full", redirectTo: "entityFiles" },
            //         { path: "entityFiles", component: EntityFilesComponent},
            //         { path: "entityDocs", component: EntityDocsComponent},
            //         { path: "entityRequests", component: EntityRequestsComponent}
            //     ]
            // }
        ]
    },
];
var WebsiteRoutingModule = /** @class */ (function () {
    function WebsiteRoutingModule() {
    }
    WebsiteRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(websiteRoutes)
            ],
            exports: [router_1.RouterModule]
        })
    ], WebsiteRoutingModule);
    return WebsiteRoutingModule;
}());
exports.WebsiteRoutingModule = WebsiteRoutingModule;
//# sourceMappingURL=website-example-routing.module.js.map