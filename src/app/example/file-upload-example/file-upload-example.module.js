"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moj_shared_module_1 = require("../../moj-ng/shared/moj.shared.module");
var file_upload_example_component_1 = require("./file-upload-example.component");
var moj_file_upload_module_1 = require("../../moj-ng/elements/file-upload/moj-file-upload.module");
var input_module_1 = require("../../moj-ng/elements/input.module");
var moj_grid_module_1 = require("../../moj-ng/elements/grid/moj-grid.module");
var new_file_component_1 = require("./new-file.component");
var FileUploadExampleModule = /** @class */ (function () {
    function FileUploadExampleModule() {
    }
    FileUploadExampleModule = __decorate([
        core_1.NgModule({
            imports: [
                input_module_1.MojInputModule, moj_shared_module_1.MojSharedModule, moj_file_upload_module_1.MojFileUploadModule, moj_grid_module_1.MojGridModule
            ],
            exports: [file_upload_example_component_1.FileUploadExampleComponent],
            declarations: [
                file_upload_example_component_1.FileUploadExampleComponent, new_file_component_1.NewFileComponent
            ],
            entryComponents: [new_file_component_1.NewFileComponent]
        })
    ], FileUploadExampleModule);
    return FileUploadExampleModule;
}());
exports.FileUploadExampleModule = FileUploadExampleModule;
//# sourceMappingURL=file-upload-example.module.js.map