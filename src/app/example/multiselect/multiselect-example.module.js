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
var input_module_1 = require("../../moj-ng/elements/input.module");
var multiselect_example_component_1 = require("./multiselect-example.component");
var example_module_1 = require("../example-component/example.module");
var MultiSelectExampleModule = /** @class */ (function () {
    function MultiSelectExampleModule() {
    }
    MultiSelectExampleModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                input_module_1.MojInputModule,
                example_module_1.ExampleModule,
            ],
            exports: [multiselect_example_component_1.MultiSelectExampleComponent],
            declarations: [
                multiselect_example_component_1.MultiSelectExampleComponent
            ]
        })
    ], MultiSelectExampleModule);
    return MultiSelectExampleModule;
}());
exports.MultiSelectExampleModule = MultiSelectExampleModule;
//# sourceMappingURL=multiselect-example.module.js.map