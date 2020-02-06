"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var primeng_1 = require("primeng/primeng");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var moj_shared_module_1 = require("../moj-ng/shared/moj.shared.module");
var grid_example_service_1 = require("./grid-example/grid-example.service");
var ExampleModule = /** @class */ (function () {
    function ExampleModule() {
    }
    ExampleModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                moj_shared_module_1.MojSharedModule,
                primeng_1.MultiSelectModule
            ],
            declarations: [],
            exports: [
                forms_1.FormsModule, common_1.CommonModule
            ],
            providers: [grid_example_service_1.GridExampleService],
        })
    ], ExampleModule);
    return ExampleModule;
}());
exports.ExampleModule = ExampleModule;
//# sourceMappingURL=example.module.js.map