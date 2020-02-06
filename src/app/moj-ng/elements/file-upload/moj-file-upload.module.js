"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moj_file_upload_component_1 = require("./version-4/moj-file-upload.component");
var moj_file_upload_service_1 = require("./moj-file-upload.service");
var core_2 = require("@ngx-translate/core");
var common_1 = require("@angular/common");
var moj_file_upload_component_2 = require("./version-3/moj-file-upload.component");
var moj_directive_module_1 = require("../../directives/moj-directive.module");
var input_module_1 = require("../input.module");
var moj_shared_module_1 = require("../../../moj-ng/shared/moj.shared.module");
var moj_input_file_component_1 = require("./input-file/moj-input-file.component");
var MojFileUploadModule = /** @class */ (function () {
    function MojFileUploadModule() {
    }
    MojFileUploadModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, core_2.TranslateModule, moj_shared_module_1.MojSharedModule, moj_directive_module_1.MojDirectiveModule, input_module_1.MojInputModule],
            exports: [moj_file_upload_component_1.MojSyncFileUploadComponent, moj_file_upload_component_2.MojFileUploadComponent, moj_input_file_component_1.MojInputFileComponent],
            declarations: [moj_file_upload_component_1.MojSyncFileUploadComponent, moj_file_upload_component_2.MojFileUploadComponent, moj_input_file_component_1.MojInputFileComponent],
            providers: [moj_file_upload_service_1.MojFileUploadService]
        })
    ], MojFileUploadModule);
    return MojFileUploadModule;
}());
exports.MojFileUploadModule = MojFileUploadModule;
//# sourceMappingURL=moj-file-upload.module.js.map