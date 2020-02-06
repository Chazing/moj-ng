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
var moj_shared_module_1 = require("../../moj-ng/shared/moj.shared.module");
var moj_grid_module_1 = require("../../moj-ng/elements/grid/moj-grid.module");
var example_component_1 = require("./example.component");
var ExampleModule = /** @class */ (function () {
    function ExampleModule() {
    }
    ExampleModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                moj_shared_module_1.MojSharedModule, moj_grid_module_1.MojGridModule,
            ],
            exports: [
                example_component_1.ExampleComponent
            ],
            declarations: [
                example_component_1.ExampleComponent
            ]
        })
    ], ExampleModule);
    return ExampleModule;
}());
exports.ExampleModule = ExampleModule;
//# sourceMappingURL=example.module.js.map