"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dynamic_form_module_1 = require("../../moj-ng/elements/dynamic-form/dynamic-form.module");
var dynamic_form_example_component_1 = require("./dynamic-form-example.component");
var moj_ng_1 = require("../../moj-ng");
var DynamicFormExampleModule = /** @class */ (function () {
    function DynamicFormExampleModule() {
    }
    DynamicFormExampleModule = __decorate([
        core_1.NgModule({
            imports: [
                moj_ng_1.MojSharedModule,
                dynamic_form_module_1.MojDynamicFormModule
            ],
            exports: [dynamic_form_example_component_1.DynamicFormExampleComponent],
            declarations: [
                dynamic_form_example_component_1.DynamicFormExampleComponent
            ]
        })
    ], DynamicFormExampleModule);
    return DynamicFormExampleModule;
}());
exports.DynamicFormExampleModule = DynamicFormExampleModule;
//# sourceMappingURL=dynamic-form-example.module.js.map