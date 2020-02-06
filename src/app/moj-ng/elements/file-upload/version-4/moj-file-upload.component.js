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
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var moj_messages_service_1 = require("../../../messages/moj-messages.service");
var moj_file_upload_base_1 = require("../moj-file-upload.base");
var core_2 = require("@ngx-translate/core");
var forms_1 = require("@angular/forms");
var element_base_1 = require("../../base/element.base");
var permission_service_1 = require("../../../../moj-ng/permissions/permission.service");
/**
  * Usage example
  ```html
  <moj-sync-file-upload name="docsForApprove" [labelTextKey]="'Texts.docsForApprove'" [enabledFileTypes]="'pdf|png|jpg'" [(ngModel)]="files" [controlWidthColumns]="4"
            [required]="isRequired1" (fileUploadComplete)="fileUploadComplete($event)"></moj-sync-file-upload>
<moj-sync-file-upload name="docsForCheck" [labelTextKey]="'Texts.docsForCheck'" [enabledFileTypes]="'pdf'" [(ngModel)]="files2" [controlWidthColumns]="4"
            [designType]="fuDesignType.Single" [required]="isRequired2"></moj-sync-file-upload>
  ```
  * ```typescript
  import { MojFileUploadDesignType } from "../../moj-ng/elements/website/moj-file-upload/moj-file-upload.base";
  ...
  export class FileUploadExampleComponent {
      files = [];
      files2 = [];
      fuDesignType = MojFileUploadDesignType;
      fileUploadComplete(file){
          file.anyProperty = 4;
      }
  }
  *```
 */
var MojSyncFileUploadComponent = /** @class */ (function (_super) {
    __extends(MojSyncFileUploadComponent, _super);
    function MojSyncFileUploadComponent(mojUploadService, mojMessagesService, translateService, cdr, el, _injector, permissionService) {
        var _this = _super.call(this, mojUploadService, mojMessagesService, translateService, cdr, el, _injector, permissionService) || this;
        _this.mojUploadService = mojUploadService;
        _this.mojMessagesService = mojMessagesService;
        _this.translateService = translateService;
        _this.cdr = cdr;
        _this.el = el;
        _this._injector = _injector;
        return _this;
    }
    MojSyncFileUploadComponent_1 = MojSyncFileUploadComponent;
    MojSyncFileUploadComponent.prototype.sendFiles = function (files) {
        var _this = this;
        if (files === void 0) { files = []; }
        this.totalSize = 0;
        this.uploadedChosenFilesSize = 0;
        this.disabled = true;
        this.showProgress = true;
        this.totalProgress = 0;
        this.generalUploadStart.emit();
        for (var i = 0; i < files.length; i++) {
            this.totalSize += files[i].size;
        }
        var source = rxjs_1.forkJoin(Array.from(files).map(function (file) {
            return new rxjs_1.Observable(function (observer) {
                _this.mojUploadService.uploadFile(file).subscribe(function (data) {
                    switch (data.event.type) {
                        case http_1.HttpEventType.Sent:
                            _this.fileUploadStart.emit(data.file);
                            break;
                        case http_1.HttpEventType.UploadProgress:
                            _this.totalProgress = (data.event.loaded + _this.uploadedChosenFilesSize) / _this.totalSize * 100;
                            if (data.event.loaded === data.event.total) {
                                _this.uploadedChosenFilesSize += data.event.total;
                            }
                            break;
                        case http_1.HttpEventType.ResponseHeader:
                            if (!data.event.ok)
                                _this.handleError();
                            break;
                        case http_1.HttpEventType.Response:
                            data.file.GUID = data.event.body;
                            _this.addFileUploadedToFilesArray(data.file);
                            observer.next();
                            observer.complete();
                            _this.fileUploadComplete.emit(data.file);
                            break;
                        default:
                            break;
                    }
                }, function (error) {
                    _this.handleError();
                    _this.fileUploadError.emit(error);
                });
            });
        }));
        this.uploadSubscription = source.subscribe(function (next) {
        }, function (error) {
            _this.handleError();
            _this.generalUploadError.emit(error);
        }, function () {
            _this.init();
            _this.generalUploadComplete.emit();
        });
    };
    MojSyncFileUploadComponent.prototype.ngOnDestroy = function () {
        if (this.uploadSubscription)
            this.uploadSubscription.unsubscribe();
    };
    var MojSyncFileUploadComponent_1;
    MojSyncFileUploadComponent = MojSyncFileUploadComponent_1 = __decorate([
        core_1.Component({
            selector: 'moj-sync-file-upload',
            templateUrl: '../moj-file-upload.component.html',
            styleUrls: ['../moj-file-upload.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    multi: true,
                    useExisting: core_1.forwardRef(function () { return MojSyncFileUploadComponent_1; }),
                },
                { provide: element_base_1.ElementBase, useExisting: core_1.forwardRef(function () { return MojSyncFileUploadComponent_1; }) }]
        }),
        __metadata("design:paramtypes", [moj_file_upload_service_1.MojFileUploadService, moj_messages_service_1.MojMessagesService,
            core_2.TranslateService, core_1.ChangeDetectorRef, core_1.ElementRef, core_1.Injector, permission_service_1.PermissionService])
    ], MojSyncFileUploadComponent);
    return MojSyncFileUploadComponent;
}(moj_file_upload_base_1.MojBaseFileUploadComponent));
exports.MojSyncFileUploadComponent = MojSyncFileUploadComponent;
//# sourceMappingURL=moj-file-upload.component.js.map