import { PermissionService } from './../../../permissions/permission.service';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, Injector, ElementRef } from '@angular/core';
import { MojFileUploadService } from '../moj-file-upload.service';
import { Observable, forkJoin, Subscription } from "rxjs"
import { HttpEventType } from '@angular/common/http';
import { MojMessagesService } from '../../../messages/moj-messages.service';
import { MojBaseFileUploadComponent, fuAnimations } from '../moj-file-upload.base';
import { TranslateService } from '@ngx-translate/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ElementBase } from '../../base/element.base';
import { FileStatusType } from '../file-status-type';
import { trigger, state, transition, animate, style } from '@angular/animations';


/**
  * Usage example
  ```html
  <moj-sync-file-upload name="docsForApprove" [labelTextKey]="'Texts.docsForApprove'" [enabledFileTypes]="'pdf|png|jpg'" [(ngModel)]="files" [controlWidthColumns]="6"
			[required]="isRequired1" (fileUploadComplete)="fileUploadComplete($event)"></moj-sync-file-upload>
	<moj-sync-file-upload name="docsForCheck" [labelTextKey]="'Texts.docsForCheck'" [enabledFileTypes]="'pdf'" [(ngModel)]="files2" [controlWidthColumns]="6"
            [isWrapped]="true"></moj-sync-file-upload>
    <moj-sync-file-upload name="entityFiles" [labelTextKey]="'Texts.fileToUpload'" [enabledFileTypes]="'pdf|png|jpg'"
        [(ngModel)]="files2" [controlWidthColumns]="6">
        <ng-template #fileActions let-file>
            <button (click)="click(file)">Click</button>
        </ng-template>
    </moj-sync-file-upload>
    <moj-sync-file-upload name="fld44" [labelTextKey]="'Texts.fileToUpload'" [enabledFileTypes]="'pdf|png|jpg'"
        [(ngModel)]="files2" [controlWidthColumns]="6" [enableDeleteFile]="false">
    </moj-sync-file-upload>
    <moj-sync-file-upload name="fld44" [labelTextKey]="'Texts.fileToUpload'" [enabledFileTypes]="'pdf|png|jpg'"
        [(ngModel)]="files2" [controlWidthColumns]="6" [enableDeleteFile]="enableDelete">
    </moj-sync-file-upload>
  ```
  * ```typescript
  ...
  export class FileUploadExampleComponent {
    files = [];
    files2 = [];
    fileUploadComplete(file){
        file.anyProperty = 4;
    }
    click(file) {
        console.log(file);
    }

    enableDelete(file) {
        if (file.mojId)
            return false;
        return true;
    }
  }
  *```
 */
@Component({
    selector: 'moj-sync-file-upload',
    templateUrl: '../moj-file-upload.component.html',
    styleUrls: ['../moj-file-upload.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: fuAnimations,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => MojSyncFileUploadComponent),
    },
    { provide: ElementBase, useExisting: forwardRef(() => MojSyncFileUploadComponent) }]
})
export class MojSyncFileUploadComponent extends MojBaseFileUploadComponent {
    uploadSubscription: Subscription;
    sendFiles(files: any[] = []) {
        this.totalSize = 0;
        this.uploadedChosenFilesSize = 0;
        this.disabled = true;
        this.showProgress = true;
        this.totalProgress = 0;
        this.generalUploadStart.emit();
        for (var i = 0; i < files.length; i++) {
            this.totalSize += files[i].size;
        }

        var source = forkJoin(
            Array.from(files).map(file => {
                return new Observable((observer) => {
                    this.mojUploadService.uploadFile(file).subscribe(
                        data => {
                            if (data.event) {
                                switch (data.event.type) {
                                    case HttpEventType.Sent:
                                        this.fileUploadStart.emit(data.file);
                                        break;
                                    case HttpEventType.UploadProgress:
                                        this.totalProgress = (data.event.loaded + this.uploadedChosenFilesSize) / this.totalSize * 100;
                                        if (data.event.loaded === data.event.total) {
                                            this.uploadedChosenFilesSize += data.event.total;
                                        }
                                        break;
                                    case HttpEventType.ResponseHeader:
                                        if (!data.event.ok)
                                            this.handleError();
                                        break;
                                    case HttpEventType.Response:
                                        // if (data.event.body && data.event.body.toLowerCase().indexOf("error") < 0) {
                                        //     data.file.GUID = data.event.body;
                                        //     data.file.status = FileStatusType.Complete;
                                        //     this.addFileUploadedToFilesArray(data.file);
                                        //     observer.next();
                                        //     observer.complete();
                                        //     this.fileUploadComplete.emit(data.file);
                                        // }
                                        // else
                                        //     this.handleError();
                                        break;
                                    default:
                                        break;
                                }
                            }
                        },
                        error => {
                            this.handleError();
                            this.fileUploadError.emit(error);
                        }
                    );
                })
            })
        );

        this.uploadSubscription = source.subscribe(
            next => {
            },
            error => {
                this.handleError();
                this.generalUploadError.emit(error);
            },
            () => {
                this.init();
                this.generalUploadComplete.emit();
            }
        );
    }

    constructor(protected mojUploadService: MojFileUploadService, protected mojMessagesService: MojMessagesService,
        protected translateService: TranslateService, protected cdr: ChangeDetectorRef, protected el: ElementRef, protected _injector: Injector, permissionService: PermissionService) {
        super(mojUploadService, mojMessagesService, translateService, cdr, el, _injector, permissionService);
    }

    ngOnDestroy() {
        if (this.uploadSubscription)
            this.uploadSubscription.unsubscribe();
    }
}
