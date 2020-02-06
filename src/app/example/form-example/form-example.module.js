"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var moj_progress_module_1 = require("./../../moj-ng/elements/moj-progress/moj-progress.module");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var input_module_1 = require("../../moj-ng/elements/input.module");
var moj_shared_module_1 = require("../../moj-ng/shared/moj.shared.module");
var core_2 = require("@ngx-translate/core");
var form_example_component_1 = require("./form-example.component");
var sliding_menu_module_1 = require("../../moj-ng/elements/sliding-menu/sliding-menu.module");
var reactive_form_example_component_1 = require("./reactive-form-example/reactive-form-example.component");
var moj_directive_module_1 = require("../../moj-ng/directives/moj-directive.module");
var moj_ng_1 = require("../../moj-ng");
var FormExampleModule = /** @class */ (function () {
    function FormExampleModule() {
    }
    FormExampleModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, moj_directive_module_1.MojDirectiveModule,
                input_module_1.MojInputModule, moj_shared_module_1.MojSharedModule, core_2.TranslateModule, sliding_menu_module_1.MojSlidingMenuModule, moj_progress_module_1.MojProgressModule, moj_ng_1.ValidationsModule
            ],
            exports: [form_example_component_1.FormExampleComponent],
            declarations: [
                form_example_component_1.FormExampleComponent,
                reactive_form_example_component_1.ReactiveFormExampleComponent
            ]
        })
    ], FormExampleModule);
    return FormExampleModule;
}());
exports.FormExampleModule = FormExampleModule;
//# sourceMappingURL=form-example.module.js.map