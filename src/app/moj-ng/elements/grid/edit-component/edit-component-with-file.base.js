"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var edit_component_base_1 = require("./edit-component.base");
var http_1 = require("@angular/common/http");
var moj_file_upload_component_1 = require("../../file-upload/version-3/moj-file-upload.component");
var EditComponentWithFileBase = /** @class */ (function (_super) {
    __extends(EditComponentWithFileBase, _super);
    function EditComponentWithFileBase(mojUploadService) {
        var _this = _super.call(this) || this;
        _this.mojUploadService = mojUploadService;
        _this.filesToAdd = []; //use in mojGridPanel
        _this.files = []; //the input for fileUpload component
        return _this;
    }
    EditComponentWithFileBase.prototype.ngAfterViewInit = function () {
        var _this = this;
        //if there is fileupload component and gridPanel set files to add
        if (this.fileUpload && this.filesToAdd && this.filesToAdd.length > 0) {
            var config = {
                enabledFileTypes: this.fileUpload.enabledFileTypes,
                multiple: this.fileUpload.multiple,
                maxFileSize: this.fileUpload.maxFileSize,
                FileSizeType: this.fileUpload.fileSizeType
            };
            //check the files according to fileUpload component properties
            var canAddFiles = this.mojUploadService.checkFilesBeforeUpload(this.filesToAdd, config);
            if (canAddFiles) {
                this.mojUploadService.uploadFile(this.filesToAdd[0]).subscribe(function (data) {
                    if (data.event.type == http_1.HttpEventType.Response) {
                        data.file.GUID = data.event.body;
                        var addedFiles = [];
                        addedFiles.push(data.file);
                        _this.files = addedFiles;
                    }
                });
            }
        }
    };
    __decorate([
        core_1.ViewChild(moj_file_upload_component_1.MojFileUploadComponent, { static: true }),
        __metadata("design:type", moj_file_upload_component_1.MojFileUploadComponent)
    ], EditComponentWithFileBase.prototype, "fileUpload", void 0);
    return EditComponentWithFileBase;
}(edit_component_base_1.EditComponentBase));
exports.EditComponentWithFileBase = EditComponentWithFileBase;
//# sourceMappingURL=edit-component-with-file.base.js.map