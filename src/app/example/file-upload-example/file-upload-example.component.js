"use strict";
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
var edit_options_model_1 = require("../../moj-ng/elements/grid/edit-component/edit-options.model");
var moj_grid_service_1 = require("../../moj-ng/elements/grid/service/moj-grid.service");
var new_file_component_1 = require("./new-file.component");
var moj_file_upload_base_1 = require("../../moj-ng/elements/file-upload/moj-file-upload.base");
var element_size_enum_1 = require("../../moj-ng/elements/base/element-size.enum");
var dataview_type_enum_1 = require("../../moj-ng/elements/grid/models/dataview-type.enum");
var file_size_type_1 = require("../../moj-ng/elements/file-upload/file-size-type");
var FileUploadExampleComponent = /** @class */ (function () {
    function FileUploadExampleComponent(gridService) {
        this.gridService = gridService;
        this.dataViewType = dataview_type_enum_1.MojDataViewType;
        this.sizeType = file_size_type_1.FileSizeType;
        this.fuDesignType = moj_file_upload_base_1.MojFileUploadDesignType;
        this.size = element_size_enum_1.ElementSize;
        this.editOptions = new edit_options_model_1.EditOptions();
        this.isRequired1 = false;
        this.isRequired2 = false;
    }
    FileUploadExampleComponent.prototype.fileUploadComplete = function (file) {
        file.docType = 4;
    };
    FileUploadExampleComponent.prototype.ngOnInit = function () {
        this.rowData = [{ fileDate: new Date(), fileType: 'doc', fileName: 'שם מסמך', ticNum: '1' }];
        this.columns = [
            this.gridService.getMojDateColumn("fileDate"),
            this.gridService.getMojColumn("fileType"),
            this.gridService.getMojColumn("fileName"),
            this.gridService.getMojColumn("ticNum")
        ];
        this.gridOptions = this.gridService.getMojGridOptions();
        this.editOptions.editComponentType = new_file_component_1.NewFileComponent;
    };
    FileUploadExampleComponent = __decorate([
        core_1.Component({
            selector: "file-upload-example",
            templateUrl: "file-upload-example.component.html"
        }),
        __metadata("design:paramtypes", [moj_grid_service_1.GridService])
    ], FileUploadExampleComponent);
    return FileUploadExampleComponent;
}());
exports.FileUploadExampleComponent = FileUploadExampleComponent;
//# sourceMappingURL=file-upload-example.component.js.map