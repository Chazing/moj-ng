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
var edit_component_with_file_base_1 = require("../../moj-ng/elements/grid/edit-component/edit-component-with-file.base");
var moj_file_upload_service_1 = require("../../moj-ng/elements/file-upload/moj-file-upload.service");
var NewFileComponent = /** @class */ (function (_super) {
    __extends(NewFileComponent, _super);
    function NewFileComponent(mojUploadService) {
        return _super.call(this, mojUploadService) || this;
    }
    NewFileComponent.prototype.ngOnInit = function () {
        if (!this.editedItem) {
            this.editedItem = {};
        }
    };
    NewFileComponent.prototype.saveFile = function () {
    };
    NewFileComponent = __decorate([
        core_1.Component({
            selector: "new-file",
            templateUrl: "new-file.component.html"
        }),
        __metadata("design:paramtypes", [moj_file_upload_service_1.MojFileUploadService])
    ], NewFileComponent);
    return NewFileComponent;
}(edit_component_with_file_base_1.EditComponentWithFileBase));
exports.NewFileComponent = NewFileComponent;
//# sourceMappingURL=new-file.component.js.map