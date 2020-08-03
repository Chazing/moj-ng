import { HttpRequest, HttpClient, HttpEventType, HttpEvent, HttpHeaders, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { MessageType } from "../../messages/message.enum";
import { MojMessagesService } from "../../messages/moj-messages.service";
import { MojUtilsService } from "../../shared/utils";
import { TranslateService } from "@ngx-translate/core";
import { MojConfigService } from "../../shared/moj-config.service";
import { FileSizeType } from "./file-size-type";

@Injectable()
export class MojFileUploadService {
    constructor(private http: HttpClient, private mojMessagesService: MojMessagesService, private utils: MojUtilsService,
        private translateService: TranslateService, private mojConfigService: MojConfigService) {

    }

    checkFilesBeforeUpload(addedfiles, config) {
        let msg = "";
        let canAddFiles = true;
        if (addedfiles.length === 0) {
            msg = this.translateService.instant("MojTexts.fu.fileNotExist");
            canAddFiles = false;
        }
        if (addedfiles.length > 0) {
            var pattern = "\.(" + config.enabledFileTypes + ")$";
            var reg = new RegExp(pattern);
            var fileNameReg = new RegExp(config.fileNameRegexValidate);
            for (let i = 0; i < addedfiles.length; i++) {
                let file = addedfiles[i];
                //custom regex check of file name
                if (fileNameReg.test(file.name) === false) {
                    msg = msg + this.getMsg(file, null, this.translateService.instant("MojTexts.fu.fileNameError")) + "\n\n";
                    canAddFiles = false;
                }
                //file types check
                if (reg.test(file.name.toLowerCase()) === false) {
                    msg = msg + this.getMsg(file, config.enabledFileTypes) + "\n\n";
                    canAddFiles = false;
                }
                //'..' in file name
                if (file.name.toLowerCase().lastIndexOf("..") >= 0) {
                    msg = msg + this.getMsg(file, null, this.utils.stringFormat(this.translateService.instant("MojTexts.fu.fileNameError"), [".."])) + "<br><br>";
                    canAddFiles = false;
                }
                //'&' in file name
                if (file.name.toLowerCase().indexOf("&") >= 0) {
                    msg = msg + this.getMsg(file, null, this.utils.stringFormat(this.translateService.instant("MojTexts.fu.fileNameError"), ["&"])) + "<br><br>";
                    canAddFiles = false;
                }
                //file size check greater than 0
                if (file.size === 0) {
                    msg = msg + this.getMsg(file, null, this.translateService.instant("MojTexts.fu.zeroSize") + "<br><br>");
                    canAddFiles = false;
                }
                if (file.size > (config.maxFileSize * (config.fileSizeType ? config.fileSizeType : 1))) {
                    msg = msg + this.getMsg(file, null, this.utils.stringFormat(this.translateService.instant("MojTexts.fu.maxSize"), [this.converBytesToSizetype(config.maxFileSize, config.FileSizeType), (config.FileSizeType && config.FileSizeType != FileSizeType.byte ? FileSizeType[config.FileSizeType].toString() : FileSizeType[FileSizeType.MB].toString())])) + "<br><br>";
                    canAddFiles = false;
                }
            }
        }
        if (msg !== "") {
            setTimeout(() => {
                this.mojMessagesService.showMessage(null, "MojTexts.errorMessage", msg, MessageType.Error).subscribe();
            });
        }

        return canAddFiles;
    }

    converBytesToSizetype(maxFileSize, sizeType) {
        if (sizeType == FileSizeType.byte) {
            return parseFloat((maxFileSize / 1000000).toString())
        }
        return maxFileSize
    }

    uploadFile(file) {
        var formData = new FormData();
        var chunk = file.slice(0, file.size);
        formData.append('file', chunk);
        formData.append('fileName', file.name);
        formData.append('fums', this.mojConfigService.configuration.fums);
        const headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data' });

        const req = new HttpRequest('POST', this.mojConfigService.configuration.uploadServerUrl, formData, {
            reportProgress: true,
            headers: headers,
            responseType: "text"
        });

        return this.http.request(req).pipe(map(event => { return { event: event, file: file } }));
        // return this.http.post(this.mojConfigService.configuration.uploadServerUrl, formData).pipe(map(event => { return { event: event, file: file } }));
    }

    getMsg(file?, fileTypes?, msg?) {
        if (msg === null || typeof (msg) === "undefined") msg = "";
        if (typeof (file) === "undefined" || file === null) file = { name: this.translateService.instant("MojTexts.fu.thisFile") };
        if (typeof (fileTypes) !== "undefined" && fileTypes !== null) {
            var types = fileTypes.split("|");
            var msgTypes = types.join(", ");
            msg = this.utils.stringFormat(this.translateService.instant("MojTexts.fu.fileTypeError"), [msgTypes]);
        }
        return (file.name + " " + this.translateService.instant("MojTexts.fu.cannotUploaded") + msg.replace("\n", "<br>"));
    }

    cloneFilesArray(files: any[]): any[] {
        const newFiles = files.slice(0);
        return newFiles;
    }
}


