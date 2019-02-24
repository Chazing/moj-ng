import { Component, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, Injector, ElementRef } from '@angular/core';
import { MojFileUploadService } from '../moj-file-upload.service';
import { Observable, forkJoin, Subscription } from "rxjs"
import { HttpEventType } from '@angular/common/http';
import { MojMessagesService } from '../../../messages/moj-messages.service';
import { MojFileUploadDesignType, MojBaseFileUploadComponent } from '../moj-file-upload.base';
import { TranslateService } from '@ngx-translate/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ElementBase } from '../../base/element.base';

/**
  * Usage example
  ```html
  <moj-new-file-upload name="docsForApprove" [labelTextKey]="'Texts.docsForApprove'" [enabledFileTypes]="'pdf|png|jpg'" [(ngModel)]="files" [isLabelAboveControl]="true" [controlWidthColumns]="4"
			[required]="isRequired1" (fileUploadComplete)="fileUploadComplete($event)"></moj-new-file-upload>
<moj-new-file-upload name="docsForCheck" [labelTextKey]="'Texts.docsForCheck'" [enabledFileTypes]="'pdf'" [(ngModel)]="files2" [isLabelAboveControl]="true" [controlWidthColumns]="4"
			[designType]="fuDesignType.Single" [required]="isRequired2"></moj-new-file-upload>
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
@Component({
  selector: 'moj-new-file-upload',
  templateUrl: '../moj-file-upload.component.html',
  styleUrls: ['../moj-file-upload.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [{ 
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => MojNewFileUploadComponent),
  },
  {provide: ElementBase, useExisting: forwardRef(() => MojNewFileUploadComponent)}]
})
export class MojNewFileUploadComponent extends MojBaseFileUploadComponent {
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
                                    if(!data.event.ok)
                                        this.handleError();
                                    break;
                                case HttpEventType.Response: 
                                    data.file.GUID = data.event.body;
                                    this.addFileUploadedToFilesArray(data.file);
                                    observer.next();
                                    observer.complete();
                                    this.fileUploadComplete.emit(data.file);
                                    break;
                                default:
                                    break;
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
                if(this.designType == MojFileUploadDesignType.Single)
                    this.addMoreFileEnable = false;
                this.init();
                this.generalUploadComplete.emit();
            }
        );
    }

    constructor(protected mojUploadService: MojFileUploadService, protected mojMessagesService: MojMessagesService, 
        protected translateService: TranslateService, protected cdr: ChangeDetectorRef,protected el: ElementRef, protected _injector: Injector) {
        super(mojUploadService, mojMessagesService, translateService, cdr, el, _injector);
    }

    ngOnDestroy() {
        if(this.uploadSubscription)
            this.uploadSubscription.unsubscribe();
    }
}
