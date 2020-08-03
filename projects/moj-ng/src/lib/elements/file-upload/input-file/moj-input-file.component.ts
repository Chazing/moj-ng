import { PermissionService } from './../../../permissions/permission.service';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, Injector, ElementRef } from '@angular/core';
import { MojFileUploadService } from '../moj-file-upload.service';
import { MojMessagesService } from '../../../messages/moj-messages.service';
import { MojBaseFileUploadComponent, fuAnimations } from '../moj-file-upload.base';
import { TranslateService } from '@ngx-translate/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ElementBase } from '../../base/element.base';
import { FileStatusType } from '../file-status-type';
import { trigger, animate, transition, state, style } from '@angular/animations';

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
@Component({
    selector: 'moj-input-file',
    templateUrl: '../moj-file-upload.component.html',
    styleUrls: ['../moj-file-upload.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
    animations: fuAnimations,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => MojInputFileComponent),
    },
    { provide: ElementBase, useExisting: forwardRef(() => MojInputFileComponent) }]
})
export class MojInputFileComponent extends MojBaseFileUploadComponent {

    sendFiles(files: any[] = []) {
        for (var i = 0; i < files.length; i++) {
            files[i].status = FileStatusType.Complete;
            this.addFileUploadedToFilesArray(files[i]);
            this.fileUploadComplete.emit(files[i]);
            // this.showProgress = true;
            // this.totalProgress = 50;
        }
        this.generalUploadComplete.emit();
    }

    constructor(protected mojUploadService: MojFileUploadService, protected mojMessagesService: MojMessagesService,
        protected translateService: TranslateService, protected cdr: ChangeDetectorRef, protected el: ElementRef
        , protected _injector: Injector, permissionService: PermissionService) {
        super(mojUploadService, mojMessagesService, translateService, cdr, el, _injector, permissionService);
    }

}
