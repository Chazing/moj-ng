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
var forms_1 = require("@angular/forms");
var editor_demo_component_1 = require("./editor-demo.component");
var moj_ng_1 = require("src/app/moj-ng");
var EditorDemoModule = /** @class */ (function () {
    function EditorDemoModule() {
    }
    EditorDemoModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                moj_ng_1.MojEditorModule,
                demo_site_internal_module_1.DemoSiteInternalModule
            ],
            exports: [editor_demo_component_1.EditorDemoComponent],
            declarations: [
                editor_demo_component_1.EditorDemoComponent
            ]
        })
    ], EditorDemoModule);
    return EditorDemoModule;
}());
exports.EditorDemoModule = EditorDemoModule;
//# sourceMappingURL=editor-demo.module.js.map