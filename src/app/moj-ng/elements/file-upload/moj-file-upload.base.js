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
var message_enum_1 = require("../../messages/message.enum");
var element_base_1 = require("../base/element.base");
var util_1 = require("util");
var file_size_type_1 = require("./file-size-type");
var MojFileUploadDesignType;
(function (MojFileUploadDesignType) {
    MojFileUploadDesignType[MojFileUploadDesignType["List"] = 0] = "List";
    MojFileUploadDesignType[MojFileUploadDesignType["Single"] = 1] = "Single";
})(MojFileUploadDesignType = exports.MojFileUploadDesignType || (exports.MojFileUploadDesignType = {}));
var FileUpload = /** @class */ (function () {
    function FileUpload(file, id) {
        this.file = file;
        this.id = id;
        //object from tehila - must
        this.TotalFilesCount = this.file.TotalFilesCount;
        this.FileIndex = this.file.FileIndex;
        this.fileId = this.id;
        this.fileGUID = null;
        this.fileName = this.file.name;
        this.name = this.file.name;
        this.fileSize = this.file.size;
        this.uploadSize = this.file.size;
        this.isValid = true;
        this.uploadedBytes = 0;
    }
    return FileUpload;
}());
exports.FileUpload = FileUpload;
var MojBaseFileUploadComponent = /** @class */ (function (_super) {
    __extends(MojBaseFileUploadComponent, _super);
    function MojBaseFileUploadComponent(mojUploadService, mojMessagesService, translateService, cdr, el, _injector, permissionService) {
        var _this = _super.call(this, el, _injector, permissionService) || this;
        _this.mojUploadService = mojUploadService;
        _this.mojMessagesService = mojMessagesService;
        _this.translateService = translateService;
        _this.cdr = cdr;
        _this.el = el;
        _this._injector = _injector;
        _this.enabledFileTypes = "*";
        _this.tooltipTextKey = "browse";
        _this.multiple = true;
        _this.maxFileSize = 104.857;
        _this.fileSizeType = file_size_type_1.FileSizeType.MB;
        _this.designType = MojFileUploadDesignType.List;
        _this.showFileList = true;
        _this.sendFilesOnUpload = true;
        _this.generalUploadStart = new core_1.EventEmitter();
        _this.generalUploadComplete = new core_1.EventEmitter();
        _this.generalUploadError = new core_1.EventEmitter();
        _this.fileUploadStart = new core_1.EventEmitter();
        _this.fileUploadComplete = new core_1.EventEmitter();
        _this.fileUploadError = new core_1.EventEmitter();
        _this.fileUploadDelete = new core_1.EventEmitter();
        _this.inputFileChange = new core_1.EventEmitter();
        _this.totalProgress = 50;
        _this.addMoreFileEnable = true;
        _this.fileUploadDesignType = MojFileUploadDesignType;
        _this.totalSize = 0;
        _this.uploadedChosenFilesSize = 0;
        _this.showAddFileSection = false;
        return _this;
    }
    Object.defineProperty(MojBaseFileUploadComponent.prototype, "manipulateFileTyps", {
        get: function () {
            return "." + this.enabledFileTypes.toLowerCase().replace(/\|/g, ",.");
        },
        enumerable: true,
        configurable: true
    });
    MojBaseFileUploadComponent.prototype.fileChange = function (event) {
        if (event.target.files && event.target.files.length > 0) {
            var addedfiles = event.target.files;
            this.checkAndUpload(addedfiles);
            this.inputFileChange.emit(event);
            this.event = event;
        }
    };
    MojBaseFileUploadComponent.prototype.checkAndUpload = function (addedfiles) {
        var config = {
            enabledFileTypes: this.enabledFileTypes,
            multiple: this.multiple,
            maxFileSize: this.maxFileSize,
            FileSizeType: this.fileSizeType
        };
        var canAddFiles = this.mojUploadService.checkFilesBeforeUpload(addedfiles, config);
        if (canAddFiles) {
            if (this.sendFilesOnUpload) {
                this.sendFiles(addedfiles);
            }
            else {
                this.value = addedfiles;
            }
        }
    };
    MojBaseFileUploadComponent.prototype.sendFiles = function (files) {
        if (files === void 0) { files = []; }
    };
    MojBaseFileUploadComponent.prototype.init = function () {
        var _this = this;
        setTimeout(function (x) {
            _this.showProgress = false;
            _this.disabled = false;
            _this.showAddFileSection = false;
            if (_this.event)
                _this.event.target.value = "";
            _this.cdr.detectChanges();
        }, 1);
    };
    MojBaseFileUploadComponent.prototype.handleError = function (msg) {
        this.errMsg = this.translateService.instant("MojTexts.fu.fileUploadError");
        if (msg != undefined)
            this.errMsg = msg;
        console.log(this.errMsg);
        this.mojMessagesService.showMessage(this.errMsg, "MojTexts.errorMessage");
        this.init();
    };
    MojBaseFileUploadComponent.prototype.addFileUploadedToFilesArray = function (file) {
        var files = this.value;
        if (files === undefined || files === null)
            files = [];
        files.push(file);
        this.value = this.mojUploadService.cloneFilesArray(files);
    };
    MojBaseFileUploadComponent.prototype.deleteFile = function (file) {
        var _this = this;
        this.mojMessagesService.confirm("MojTexts.fu.confirmFileDelete", "MojTexts.alertMessage", null).subscribe(function (result) {
            if (result.dialogResultType == message_enum_1.DialogResultEnum.OK) {
                var files = _this.value;
                files.splice(files.indexOf(file), 1);
                _this.value = _this.mojUploadService.cloneFilesArray(files);
                _this.fileUploadDelete.emit(file);
                // this.cdr.detectChanges();
            }
        });
    };
    MojBaseFileUploadComponent.prototype.addFile = function () {
        this.showAddFileSection = true;
    };
    MojBaseFileUploadComponent.prototype.removeAddFile = function () {
        this.showAddFileSection = false;
    };
    MojBaseFileUploadComponent.prototype.showRemoveAddFile = function () {
        return this.value && this.value.length > 0;
    };
    MojBaseFileUploadComponent.prototype.showAddFile = function () {
        return !this.value || this.value.length == 0 || this.showAddFileSection;
    };
    MojBaseFileUploadComponent.prototype.onDrop = function (files) {
        if (files.length > 0 && !this.disabled) {
            if (!this.multiple && (files.length > 1 || (this.value && this.value.length > 0)))
                this.mojMessagesService.showMessage(this.translateService.instant("MojTexts.fu.noMultiDraggable"), "MojTexts.errorMessage", null, message_enum_1.MessageType.Error);
            else
                this.checkAndUpload(files);
        }
    };
    MojBaseFileUploadComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.value && !util_1.isArray(this.value))
            throw ("[(ngModel)] for moj-file-upload must be an array type variable");
    };
    // registerOnChange(fn) {
    //     super.registerOnChange(fn);
    //     if (this.designType == MojFileUploadDesignType.Single && (this.value == null || this.value.length == 0)) {
    //         this.propagateChange([{ }]);
    //     }
    // }
    MojBaseFileUploadComponent.prototype.isDisableAddMoreFile = function (value) {
        return this.disabled || this.designType == MojFileUploadDesignType.Single && value && value.length > 0;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojBaseFileUploadComponent.prototype, "enabledFileTypes", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojBaseFileUploadComponent.prototype, "tooltipTextKey", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojBaseFileUploadComponent.prototype, "multiple", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MojBaseFileUploadComponent.prototype, "maxFileSize", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MojBaseFileUploadComponent.prototype, "fileSizeType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MojBaseFileUploadComponent.prototype, "designType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojBaseFileUploadComponent.prototype, "showFileList", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojBaseFileUploadComponent.prototype, "sendFilesOnUpload", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], MojBaseFileUploadComponent.prototype, "generalUploadStart", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], MojBaseFileUploadComponent.prototype, "generalUploadComplete", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], MojBaseFileUploadComponent.prototype, "generalUploadError", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], MojBaseFileUploadComponent.prototype, "fileUploadStart", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], MojBaseFileUploadComponent.prototype, "fileUploadComplete", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], MojBaseFileUploadComponent.prototype, "fileUploadError", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], MojBaseFileUploadComponent.prototype, "fileUploadDelete", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], MojBaseFileUploadComponent.prototype, "inputFileChange", void 0);
    return MojBaseFileUploadComponent;
}(element_base_1.ElementBase));
exports.MojBaseFileUploadComponent = MojBaseFileUploadComponent;
//# sourceMappingURL=moj-file-upload.base.js.map