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
var moj_file_upload_service_1 = require("../moj-file-upload.service");
var moj_messages_service_1 = require("../../../messages/moj-messages.service");
var moj_file_upload_base_1 = require("../moj-file-upload.base");
var core_2 = require("@ngx-translate/core");
var forms_1 = require("@angular/forms");
var element_base_1 = require("../../base/element.base");
var permission_service_1 = require("../../../../moj-ng/permissions/permission.service");
/**
  * Usage example
  ```html
  <moj-input-file [(ngModel)]="files" [enabledFileTypes]="'pdf'" [designType]="fuDesignType.Single"
    [labelTextKey]="'Texts.docsForApprove'" [controlWidthColumns]="4" (fileUploadComplete)="fileUploadComplete($event)"></moj-input-file>
  ```
  * ```typescript
  import { MojFileUploadDesignType } from "../../moj-ng/elements/website/moj-file-upload/moj-file-upload.base";
  ...
  export class FileUploadExampleComponent {
      files = [];
      fuDesignType = MojFileUploadDesignType;
      fileUploadComplete(file){
          file.anyProperty = 4;
      }
  }
  *```
 */
var MojInputFileComponent = /** @class */ (function (_super) {
    __extends(MojInputFileComponent, _super);
    function MojInputFileComponent(mojUploadService, mojMessagesService, translateService, cdr, el, _injector, permissionService) {
        var _this = _super.call(this, mojUploadService, mojMessagesService, translateService, cdr, el, _injector, permissionService) || this;
        _this.mojUploadService = mojUploadService;
        _this.mojMessagesService = mojMessagesService;
        _this.translateService = translateService;
        _this.cdr = cdr;
        _this.el = el;
        _this._injector = _injector;
        return _this;
    }
    MojInputFileComponent_1 = MojInputFileComponent;
    MojInputFileComponent.prototype.sendFiles = function (files) {
        if (files === void 0) { files = []; }
        for (var i = 0; i < files.length; i++) {
            this.addFileUploadedToFilesArray(files[i]);
            this.fileUploadComplete.emit(files[i]);
        }
        this.generalUploadComplete.emit();
    };
    var MojInputFileComponent_1;
    MojInputFileComponent = MojInputFileComponent_1 = __decorate([
        core_1.Component({
            selector: 'moj-input-file',
            templateUrl: '../moj-file-upload.component.html',
            styleUrls: ['../moj-file-upload.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    multi: true,
                    useExisting: core_1.forwardRef(function () { return MojInputFileComponent_1; }),
                },
                { provide: element_base_1.ElementBase, useExisting: core_1.forwardRef(function () { return MojInputFileComponent_1; }) }]
        }),
        __metadata("design:paramtypes", [moj_file_upload_service_1.MojFileUploadService, moj_messages_service_1.MojMessagesService,
            core_2.TranslateService, core_1.ChangeDetectorRef, core_1.ElementRef,
            core_1.Injector, permission_service_1.PermissionService])
    ], MojInputFileComponent);
    return MojInputFileComponent;
}(moj_file_upload_base_1.MojBaseFileUploadComponent));
exports.MojInputFileComponent = MojInputFileComponent;
//# sourceMappingURL=moj-input-file.component.js.map