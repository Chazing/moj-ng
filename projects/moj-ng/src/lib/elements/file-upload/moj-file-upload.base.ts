import { Input, Output, EventEmitter, ChangeDetectorRef, Injector, ElementRef, ViewChild, ContentChild, TemplateRef } from "@angular/core";
import { DialogResultEnum, MessageType } from "../../messages/message.enum";
import { MojFileUploadService } from "./moj-file-upload.service";
import { MojMessagesService } from "../../messages/moj-messages.service";
import { TranslateService } from "@ngx-translate/core";
import { ElementBase } from "../base/element.base";
import { isArray } from "util";
import { PermissionService } from "../../permissions/permission.service";
import { FileSizeType } from "./file-size-type";
import { trigger, state, style, transition, animate} from '@angular/animations';
export const fuAnimations=[
    trigger('bodyExpansion', [
      state('collapsed', style({ height: '0px' })),
      state('expanded', style({ height: '*' })),
      transition('expanded => collapsed', [animate("0.2s")]),
      transition('collapsed => expanded', [animate("0.2s")])
    ]),
    trigger('bodyOpacity', [
      state('collapsed', style({ opacity: '0' })),
      state('expanded', style({ opacity: '1' })),
      transition('expanded => collapsed', [animate("0.22s")]),
      transition('collapsed => expanded', [animate("0.22s")])
    ])]

export enum MojFileUploadDesignType {
    List = 0,
    Single = 1
}

export class FileUpload {
    constructor(private file, private id) { }
    //object from tehila - must
    TotalFilesCount = this.file.TotalFilesCount;
    FileIndex = this.file.FileIndex;
    fileId = this.id
    fileGUID = null;
    fileName = this.file.name;
    name = this.file.name;
    fileSize = this.file.size;
    uploadSize = this.file.size;
    isValid = true;
    uploadedBytes = 0;
}

export class MojBaseFileUploadComponent extends ElementBase<any> {
    @Input() enabledFileTypes: string = "*";
    @Input() tooltipTextKey: string = "browse";
    @Input() multiple: boolean = true;
    @Input() maxFileSize: number = 104.857;
    @Input() fileSizeType: FileSizeType = FileSizeType.MB;
    @Input() showFileList: boolean = true;
    @Input() sendFilesOnUpload: boolean = true;
    @Input() isWrapped: boolean = false;

    @Input() enableDeleteFile: boolean | Function = true;
    @Input() fileNameRegexValidate: string = "";
    @Input() showToggle: boolean = true;//for collapse
    @Input() isOpen:boolean=true;//for collapse
    @Output() generalUploadStart: EventEmitter<any> = new EventEmitter();
    @Output() generalUploadComplete: EventEmitter<any> = new EventEmitter();
    @Output() generalUploadError: EventEmitter<any> = new EventEmitter();
    @Output() fileUploadStart: EventEmitter<any> = new EventEmitter();
    @Output() fileUploadComplete: EventEmitter<any> = new EventEmitter();
    @Output() fileUploadError: EventEmitter<any> = new EventEmitter();
    @Output() fileUploadDelete: EventEmitter<any> = new EventEmitter();
    @Output() inputFileChange: EventEmitter<any> = new EventEmitter();

    @ViewChild("upload", { static: true, read: ElementRef }) imgEl: ElementRef;
    imageUrl: string | ArrayBuffer = "https://bulma.io/images/placeholders/480x480.png";

    @ContentChild("fileActions", { static: true })
    fileActionsRef: TemplateRef<any>;

    get manipulateFileTyps() {
        return "." + this.enabledFileTypes.toLowerCase().replace(/\|/g, ",.");
    }

    totalProgress: number = 50;
    showProgress: boolean;
    errMsg: string;
    addMoreFileEnable: boolean = true;
    totalSize: number = 0;
    uploadedChosenFilesSize: number = 0;
    event;

    get existingFiles(): any[] {
        if (this.value && this.value.length > 0)
            return this.value.filter(x => x.mojId);
        return this.value;
    }
    get newFiles(): any[] {
        if (this.value && this.value.length > 0)
            return this.value.filter(x => !x.mojId);
        return this.value;
    }

    fileChange(event) {
        if (event.target.files && event.target.files.length > 0) {
            var addedfiles = event.target.files;
            if (!this.multiple && (addedfiles.length > 1 || (this.value && this.value.length > 0)))
                this.mojMessagesService.showMessage(this.translateService.instant("MojTexts.fu.noMultiDraggable"), "MojTexts.errorMessage", null, MessageType.Error);
            else {
                this.checkAndUpload(addedfiles);
                this.inputFileChange.emit(event);
                this.event = event;
            }
        }
    }

    readURL(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = event => {
            file.imageUrl = reader.result;
        };
    }

    checkAndUpload(addedfiles) {
        var config = {
            enabledFileTypes: this.enabledFileTypes,
            multiple: this.multiple,
            maxFileSize: this.maxFileSize,
            fileSizeType: this.fileSizeType,
            fileNameRegexValidate: this.fileNameRegexValidate
        }
        let canAddFiles = this.mojUploadService.checkFilesBeforeUpload(addedfiles, config);
        if (canAddFiles) {
            if (this.sendFilesOnUpload) {
                this.sendFiles(addedfiles);
            }
            else {
                this.value = addedfiles;
            }
        }
    }

    sendFiles(files: any[] = []) {

    }

    init() {
        setTimeout(x => {
            this.showProgress = false;
            this.disabled = false;
            if (this.event)
                this.event.target.value = "";
            this.cdr.detectChanges();
        }, 1);
    }

    handleError(msg?: string) {
        this.errMsg = this.translateService.instant("MojTexts.fu.fileUploadError");
        if (msg != undefined)
            this.errMsg = msg;
        console.log(this.errMsg);
        this.mojMessagesService.showMessage(this.errMsg, "MojTexts.errorMessage");
        this.init();
    }

    addFileUploadedToFilesArray(file: any) {
        let files = this.value;
        if (files === undefined || files === null) files = [];
        files.push(file);
        this.value = this.mojUploadService.cloneFilesArray(files);
    }

    onDrop(files) {
        if (files.length > 0 && !this.disabled) {
            if (!this.multiple && (files.length > 1 || (this.value && this.value.length > 0)))
                this.mojMessagesService.showMessage(this.translateService.instant("MojTexts.fu.noMultiDraggable"), "MojTexts.errorMessage", null, MessageType.Error);
            else
                this.checkAndUpload(files);
        }
    }

    deleteFile(file: any) {
        let files = this.value;
        files.splice(files.indexOf(file), 1);
        this.value = this.mojUploadService.cloneFilesArray(files);
        this.fileUploadDelete.emit(file);
    }

    constructor(protected mojUploadService: MojFileUploadService, protected mojMessagesService: MojMessagesService,
        protected translateService: TranslateService, protected cdr: ChangeDetectorRef,
        protected el: ElementRef, protected _injector: Injector, permissionService: PermissionService) {
        super(el, _injector, permissionService);
    }

    ngOnInit() {
        super.ngOnInit();
        if (this.value && !isArray(this.value))
            throw ("[(ngModel)] for moj-file-upload must be an array type variable");
        if (this.isWrapped)
            this.controlColWidth = "col-sm-12";
    }

    // registerOnChange(fn) {
    //     super.registerOnChange(fn);
    //     if (this.designType == MojFileUploadDesignType.Single && (this.value == null || this.value.length == 0)) {
    //         this.propagateChange([{ }]);
    //     }
    // }
    isDisableAddMoreFile(value) {
        return this.disabled || value && value.length > 0;
    }

}