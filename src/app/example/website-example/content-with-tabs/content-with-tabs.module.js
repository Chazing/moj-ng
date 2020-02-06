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
var entity_layout_component_1 = require("./entity-layout/entity-layout.component");
var entity_files_component_1 = require("./entity-files/entity-files.component");
var entity_docs_component_1 = require("./entity-docs/entity-docs.component");
var moj_tabs_module_1 = require("../../../moj-ng/elements/tabs/moj-tabs.module");
var entity_requests_component_1 = require("./entity-requests/entity-requests.component");
var moj_grid_module_1 = require("../../../moj-ng/elements/grid/moj-grid.module");
var dataview_1 = require("primeng/dataview");
//import { MojGuard } from '../../../moj-ng/permissions/moj-guard';
var ContentWithTabsModule = /** @class */ (function () {
    function ContentWithTabsModule() {
    }
    ContentWithTabsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild([
                    { path: "", pathMatch: "full", redirectTo: "entity-layout" },
                    { path: "entity-layout", component: entity_layout_component_1.EntityLayoutComponent,
                        children: [
                            { path: "", pathMatch: "full", redirectTo: "entityFiles" },
                            { path: "entityFiles", component: entity_files_component_1.EntityFilesComponent /*,canActivate: [MojGuard],data:{routerID:"#entityFiles"}*/ },
                            { path: "entityDocs", component: entity_docs_component_1.EntityDocsComponent },
                            { path: "entityRequests", component: entity_requests_component_1.EntityRequestsComponent }
                        ]
                    }
                ]),
                moj_tabs_module_1.MojTabsModule, moj_grid_module_1.MojGridModule, dataview_1.DataViewModule
            ],
            declarations: [entity_layout_component_1.EntityLayoutComponent, entity_files_component_1.EntityFilesComponent, entity_docs_component_1.EntityDocsComponent, entity_requests_component_1.EntityRequestsComponent],
            entryComponents: [entity_files_component_1.EntityFilesComponent, entity_docs_component_1.EntityDocsComponent, entity_requests_component_1.EntityRequestsComponent],
            exports: [entity_layout_component_1.EntityLayoutComponent, entity_files_component_1.EntityFilesComponent, entity_docs_component_1.EntityDocsComponent, entity_requests_component_1.EntityRequestsComponent, router_1.RouterModule]
        })
    ], ContentWithTabsModule);
    return ContentWithTabsModule;
}());
exports.ContentWithTabsModule = ContentWithTabsModule;
//# sourceMappingURL=content-with-tabs.module.js.map