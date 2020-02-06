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
var moj_file_upload_base_1 = require("../moj-file-upload.base");
var moj_file_upload_service_1 = require("../moj-file-upload.service");
var core_2 = require("@ngx-translate/core");
var moj_messages_service_1 = require("../../../messages/moj-messages.service");
var http_1 = require("@angular/common/http");
var util_1 = require("util");
var operators_1 = require("rxjs/operators");
var moj_config_service_1 = require("../../../shared/moj-config.service");
var forms_1 = require("@angular/forms");
var element_base_1 = require("../../base/element.base");
var permission_service_1 = require("../../../../moj-ng/permissions/permission.service");
var message_enum_1 = require("../../../../moj-ng/messages/message.enum");
/**
  * Usage example
  ```html
  <moj-file-upload name="docsForApprove" [labelTextKey]="'Texts.docsForApprove'" [enabledFileTypes]="'pdf|png|jpg'" [(ngModel)]="files" [controlWidthColumns]="4"
            [required]="isRequired1" (fileUploadComplete)="fileUploadComplete($event)"></moj-file-upload>
    <moj-file-upload name="docsForCheck" [labelTextKey]="'Texts.docsForCheck'" [enabledFileTypes]="'pdf'" [(ngModel)]="files2" [controlWidthColumns]="4"
            [designType]="fuDesignType.Single" [required]="isRequired2"></moj-file-upload>
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
var MojFileUploadComponent = /** @class */ (function (_super) {
    __extends(MojFileUploadComponent, _super);
    function MojFileUploadComponent(mojUploadService, mojMessagesService, translateService, cdr, http, httpHandler, mojConfigService, el, _injector, permissionService) {
        var _this = _super.call(this, mojUploadService, mojMessagesService, translateService, cdr, el, _injector, permissionService) || this;
        _this.mojUploadService = mojUploadService;
        _this.mojMessagesService = mojMessagesService;
        _this.translateService = translateService;
        _this.cdr = cdr;
        _this.http = http;
        _this.httpHandler = httpHandler;
        _this.mojConfigService = mojConfigService;
        _this.el = el;
        _this._injector = _injector;
        _this.permissionService = permissionService;
        _this.uploads = [];
        return _this;
    }
    MojFileUploadComponent_1 = MojFileUploadComponent;
    MojFileUploadComponent.prototype.sendFiles = function (files) {
        if (files === void 0) { files = []; }
        this.totalSize = 0;
        this.uploadedChosenFilesSize = 0;
        this.disabled = true;
        this.showProgress = true;
        this.totalProgress = 0;
        this.errMsg = "";
        this.uploads = [];
        this.generalUploadStart.emit();
        this.createTickets(files);
    };
    MojFileUploadComponent.prototype.createTickets = function (files) {
        var _this = this;
        this.pushFilesToUpload(files);
        var registerUrl = this.mojConfigService.configuration.registerHandlerUrl;
        var filesToSend = new Array();
        for (var i = 0; i < this.uploads.length; i++) {
            if (this.uploads[i].isValid == true) {
                filesToSend.push(this.uploads[i]);
            }
        }
        if (filesToSend.length > 0) {
            registerUrl = registerUrl + '?FilesToSend';
            var files2 = [];
            for (i = 0; i < filesToSend.length; i++) {
                files2.push({
                    oldID: filesToSend[i].fileId,
                    FileName: encodeURI(filesToSend[i].fileName),
                    FileSize: filesToSend[i].fileSize,
                    FileType: this.getFileExtension(filesToSend[i].fileName),
                    LastModificationDate: filesToSend[i].file.lastModified
                });
            }
        }
        return this.http.post(registerUrl, "FilesToSend=" + JSON.stringify(files2), {
            headers: { 'Content-Type': "application/x-www-form-urlencoded" }
        }).subscribe(function (data) {
            if (util_1.isArray(data)) {
                data.forEach(function (x) {
                    _this.uploads.find(function (y) { return y.fileId == x.OldId; }).fileGUID = x.FileID.toUpperCase();
                });
            }
            _this.uploadFile();
        }, function (error) {
            _this.generalUploadError.emit(error);
            _this.mojMessagesService.showMessage(null, "MojTexts.errorMessage", _this.translateService.instant("MojTexts.error"), message_enum_1.MessageType.Error).subscribe();
            //this.handleError("Failed To Register Files in CreateTickets function");
        });
        // }
    };
    MojFileUploadComponent.prototype.pushFilesToUpload = function (files) {
        var file, id;
        for (var i = 0; i < files.length; i++) {
            file = files[i];
            id = this.generateTempId();
            file.TotalFilesCount = files.length;
            file.FileIndex = (i + 1);
            file.FileType = this.getFileExtension(file.name);
            file.Name = file.name;
            var upload = new moj_file_upload_base_1.FileUpload(file, id);
            this.uploads.push(upload);
            this.totalSize += file.size;
            // file.TotalFilesCount = file.TotalFilesCount;
            // file.FileIndex = file.FileIndex;
            // //*******************************************
            // //*******************************************
            // file.fileId = id
            // file.fileGUID = null;
            // file.fileName = file.name;
            // file.fileSize = file.size;
            // file.uploadSize = file.size;
            // file.isValid = true;
            // file.uploadedBytes = 0;
        }
    };
    MojFileUploadComponent.prototype.uploadNextFile = function () {
        this.uploads.splice(0, 1); // remove first element that represents the uploaded file
        this.uploadFile();
    };
    MojFileUploadComponent.prototype.uploadFile = function () {
        if (this.uploads.length > 0) // there are files to upload
         {
            if (this.uploads[0].fileGUID == null || this.uploads[0].fileGUID == '' || this.uploads[0].fileGUID == 'undefined') {
                this.handleError("Cannot upload files without GUID");
            }
            else {
                this.ajaxUpload(this.uploads[0]);
            }
        }
        else // all chosen files uploaded
         {
            this.generalUploadComplete.emit();
            this.init();
        }
    };
    MojFileUploadComponent.prototype.ajaxUpload = function (upload) {
        // ChunkFile upload
        var SIZE = upload.file.size;
        var BYTES_PER_CHUNK = 1024 * 1024; // 1MB chunk sizes.
        var start = 0;
        var end = SIZE;
        var chunkNum = 0;
        var chunksQuantity = 1;
        var completedChunks = 0;
        var successfulRequests = 0;
        var failedRequests = 0;
        // synchroneous upload - next chunk is sent after the current one is successfully uploaded
        this.loadChunk(start, end, upload, chunkNum, successfulRequests, failedRequests, completedChunks, chunksQuantity, BYTES_PER_CHUNK);
    };
    MojFileUploadComponent.prototype.loadChunk = function (start, end, upload, chunkNum, successfulRequests, failedRequests, completedChunks, chunksQuantity, BYTES_PER_CHUNK) {
        var _this = this;
        var SIZE = upload.file.size;
        chunkNum++;
        var formData = new FormData();
        var chunk = upload.file.slice(start, end);
        // Append file data:
        formData.append("file", chunk);
        var uploadURL = this.mojConfigService.configuration.uploadServerUrl + "?isMultiPart=false&fileName=" + //"&action=upload&" +
            encodeURI(upload.file.name) + "&fileSize=" + SIZE + "&fid=" + upload.fileGUID + "&chunkNum=" + chunkNum + "&TotalFilesCount=" +
            upload.TotalFilesCount + "&FileIndex=" + upload.FileIndex + "&FileID=" + upload.fileGUID;
        var headers = new http_1.HttpHeaders({ 'Content-Type': 'multipart/form-data' });
        var req = new http_1.HttpRequest('POST', uploadURL, formData, {
            reportProgress: true,
            headers: headers,
            responseType: "text"
        });
        return this.httpHandler.handle(req).pipe(operators_1.map(function (event) { return { event: event, file: upload.file }; })).subscribe(function (data) {
            if (data.event) {
                switch (data.event.type) {
                    case http_1.HttpEventType.Sent:
                        _this.fileUploadStart.emit(data.file);
                        break;
                    case http_1.HttpEventType.UploadProgress:
                        if (data.event.total == data.event.loaded) // =100, chunk upload completed
                         {
                            completedChunks++;
                        }
                        _this.totalProgress = (data.event.loaded + _this.uploadedChosenFilesSize) / _this.totalSize * 100;
                        if (_this.totalProgress > 100) {
                            _this.totalProgress = 100;
                        }
                        if (data.event.loaded === data.event.total) {
                            _this.uploadedChosenFilesSize += data.event.total;
                        }
                        break;
                    case http_1.HttpEventType.ResponseHeader:
                        if (!data.event.ok)
                            _this.handleError();
                        break;
                    case http_1.HttpEventType.Response:
                        if (_this.isOK(data.event.body)) {
                            successfulRequests++;
                            if (successfulRequests >= chunksQuantity) {
                                // file upload completed
                                data.file.GUID = upload.fileGUID;
                                _this.uploadedChosenFilesSize += upload.fileSize;
                                // add file to array
                                _this.addFileUploadedToFilesArray(data.file);
                                _this.fileUploadComplete.emit(data.file);
                                _this.uploadNextFile();
                            }
                            else {
                                start = end;
                                end = start + BYTES_PER_CHUNK;
                                _this.loadChunk(start, end, upload, chunkNum, successfulRequests, failedRequests, completedChunks, chunksQuantity, BYTES_PER_CHUNK);
                            }
                        }
                        else if (data.event.status != 0) { // xhr.status == 0 and readyState=4 is when the request is cancelled, handled in another place
                            failedRequests++;
                            _this.handleError("Failed To Upload file" + upload.fileId + ". Server Response Status: " + data.event.status + ", Response Text=" + data.event.body);
                        }
                        break;
                    default:
                        break;
                }
            }
        }, function (error) {
            _this.handleError();
            _this.fileUploadError.emit(error);
        });
    };
    MojFileUploadComponent.prototype.isOK = function (xhrResponse) {
        var isOK = xhrResponse.indexOf("<ok") >= 0; // = $($.parseXML(xhrResponse)).find("ok").length > 0;
        return isOK;
    };
    MojFileUploadComponent.prototype.S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    MojFileUploadComponent.prototype.generateTempId = function () {
        var id = (this.S4() + this.S4()).toLowerCase();
        return id;
    };
    MojFileUploadComponent.prototype.getFileExtension = function (filename) {
        var a = filename.split(".");
        if (a.length === 1 || (a[0] === "" && a.length === 2)) {
            return "";
        }
        return "." + a.pop();
    };
    var MojFileUploadComponent_1;
    MojFileUploadComponent = MojFileUploadComponent_1 = __decorate([
        core_1.Component({
            selector: 'moj-file-upload',
            templateUrl: '../moj-file-upload.component.html',
            styleUrls: ['../moj-file-upload.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return MojFileUploadComponent_1; }),
                    multi: true
                },
                { provide: element_base_1.ElementBase, useExisting: core_1.forwardRef(function () { return MojFileUploadComponent_1; }) }]
        }),
        __metadata("design:paramtypes", [moj_file_upload_service_1.MojFileUploadService, moj_messages_service_1.MojMessagesService, core_2.TranslateService,
            core_1.ChangeDetectorRef, http_1.HttpClient, http_1.HttpHandler, moj_config_service_1.MojConfigService, core_1.ElementRef, core_1.Injector, permission_service_1.PermissionService])
    ], MojFileUploadComponent);
    return MojFileUploadComponent;
}(moj_file_upload_base_1.MojBaseFileUploadComponent));
exports.MojFileUploadComponent = MojFileUploadComponent;
//# sourceMappingURL=moj-file-upload.component.js.map