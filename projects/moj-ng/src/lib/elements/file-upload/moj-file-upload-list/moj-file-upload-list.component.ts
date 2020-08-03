import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { FileStatusType } from '../file-status-type';
import { DialogResultEnum } from '../../../messages/message.enum';
import { MojMessagesService } from '../../../messages/moj-messages.service';

@Component({
    selector: 'moj-file-upload-list',
    templateUrl: './moj-file-upload-list.component.html',
    styleUrls: ['./moj-file-upload-list.component.scss']
})
export class MojFileUploadListComponent implements OnInit {

    @Input() titleKey: string;
    @Input() files: any[];
    @Input() fileActionsRef: TemplateRef<any>;
    @Input() enableDeleteFile: boolean | Function = true;

    @Output() fileUploadDelete: EventEmitter<any> = new EventEmitter();

    fileStatusType = FileStatusType;

    formatBytes(file, decimals?) {
        let bytes = file.size;
        if (!bytes) return;
        if (bytes == 0) return '0 Bytes';
        var k = 1024,
            dm = decimals <= 0 ? 0 : decimals || 2,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    deleteFile(file: any) {
        this.mojMessagesService.confirm("MojTexts.fu.confirmFileDelete", "MojTexts.alertMessage", null).subscribe((result) => {
            if (result.dialogResultType == DialogResultEnum.OK) {
                this.fileUploadDelete.emit(file);
            }
        });
    }

    showDeleteFileButton(file): boolean {
        if (typeof this.enableDeleteFile === 'undefined') return true;
        if (typeof this.enableDeleteFile === 'function')
            return this.enableDeleteFile(file);
        return this.enableDeleteFile;
    }


    constructor(private mojMessagesService: MojMessagesService) { }

    ngOnInit() {
    }

}
