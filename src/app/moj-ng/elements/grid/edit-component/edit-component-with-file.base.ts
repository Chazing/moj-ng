import { ViewChild, AfterViewInit } from "@angular/core";
import { EditComponentBase } from "./edit-component.base";
import { HttpEventType } from "@angular/common/http";
import { MojFileUploadComponent } from "../../file-upload/version-3/moj-file-upload.component";
import { MojFileUploadService } from "../../file-upload/moj-file-upload.service";

export class EditComponentWithFileBase extends EditComponentBase implements AfterViewInit {
    filesToAdd = [];//use in mojGridPanel
    files = [];//the input for fileUpload component

    @ViewChild(MojFileUploadComponent, { static: true}) fileUpload: MojFileUploadComponent;
    
    constructor(protected mojUploadService: MojFileUploadService){
        super();
    }

    ngAfterViewInit(){
        //if there is fileupload component and gridPanel set files to add
        if(this.fileUpload && this.filesToAdd && this.filesToAdd.length > 0){
            let config = {
                    enabledFileTypes: this.fileUpload.enabledFileTypes,
                    multiple: this.fileUpload.multiple,
                    maxFileSize: this.fileUpload.maxFileSize,
                    FileSizeType:this.fileUpload.fileSizeType
                }
            //check the files according to fileUpload component properties
            let canAddFiles = this.mojUploadService.checkFilesBeforeUpload(this.filesToAdd, config);
            if(canAddFiles){
                this.mojUploadService.uploadFile(this.filesToAdd[0]).subscribe(data => {
                    if (data.event.type ==  HttpEventType.Response) {
                        data.file.GUID = data.event.body;
                        var addedFiles = []; 
                        addedFiles.push(data.file);
                        this.files = addedFiles;
                    }
                });
            }
        }
    }

}