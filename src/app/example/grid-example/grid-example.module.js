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
var moj_grid_module_1 = require("../../moj-ng/elements/grid/moj-grid.module");
var grid_example_component_1 = require("./grid-example.component");
var edit_dialog_example_component_1 = require("./edit-dialog-example.component");
var grid_example_service_1 = require("./grid-example.service");
var edit_popup_example_component_1 = require("./edit-popup-example.component");
var core_2 = require("@ngx-translate/core");
var moj_shared_module_1 = require("../../moj-ng/shared/moj.shared.module");
var input_module_1 = require("../../moj-ng/elements/input.module");
var example_module_1 = require("../example-component/example.module");
var grid_edit_inline_example_component_1 = require("./grid-edit-inline-example.component");
var grid_server_side_example_component_1 = require("./grid-server-side/grid-server-side-example.component");
var GridExampleModule = /** @class */ (function () {
    function GridExampleModule() {
    }
    GridExampleModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                moj_grid_module_1.MojGridModule,
                core_2.TranslateModule,
                moj_shared_module_1.MojSharedModule,
                input_module_1.MojInputModule,
                example_module_1.ExampleModule
            ],
            exports: [moj_grid_module_1.MojGridModule, grid_example_component_1.GridExampleComponent, edit_dialog_example_component_1.EditDialogExampleComponent, edit_popup_example_component_1.EditPopupExampleComponent, grid_edit_inline_example_component_1.GridEditInlineExampleComponent],
            declarations: [
                grid_example_component_1.GridExampleComponent, edit_dialog_example_component_1.EditDialogExampleComponent, edit_popup_example_component_1.EditPopupExampleComponent, grid_edit_inline_example_component_1.GridEditInlineExampleComponent, grid_server_side_example_component_1.GridServerSideExample
            ],
            entryComponents: [edit_popup_example_component_1.EditPopupExampleComponent, edit_dialog_example_component_1.EditDialogExampleComponent],
            providers: [grid_example_service_1.GridExampleService]
        })
    ], GridExampleModule);
    return GridExampleModule;
}());
exports.GridExampleModule = GridExampleModule;
//# sourceMappingURL=grid-example.module.js.map