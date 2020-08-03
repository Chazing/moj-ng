import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { MojMessageComponent } from "./moj-message.component";
import { MessageType } from "./message.enum";
import { TranslateService } from '@ngx-translate/core';
import { MojDialogService } from './moj-dialog.service';
import { DialogResult } from './dialog-result';
import { MessageData } from './messages.model';
import { Observable } from 'rxjs';

@Injectable()
export class MojMessagesService {
    constructor(private dialogService: MojDialogService, private translateService: TranslateService) {

    }

    /**
      example
      ```typescript
      constructor(private messagesService: MojMessagesService) {
      
      }
      this.messageService.confirm(res.message, undefined).subscribe((result: DialogResult) => {
          if (result.dialogResultType === DialogResultEnum.OK)
            alert('OK');
          else
            alert('Cancel')
        });
      * ```
     */
    public confirm(message: string, title: string, messageHtml?: string, width: number = 500, okButtonText?: string, cancelButtonText?: string, isApproveOnEnter?: boolean, closable: boolean = true, iconClass: string = null,height?:number,preventScroll?:boolean): Observable<DialogResult> {
        let data: MessageData = {
            messageType: MessageType.Confirm,
            messageTitle: title ? this.translateService.instant(title) : this.translateService.instant("MojMessages." + MessageType[MessageType.Confirm]),
            messageText: message,
            okButtonText: okButtonText,
            cancelButtonText: cancelButtonText,
            isApproveOnEnter: isApproveOnEnter,
            messageHtml: messageHtml,
            iconClass: iconClass,
            height:height,
            preventScroll:preventScroll
        }
        width = width ? width : 500;
        
        this.dialogService.openDialog(null, MojMessageComponent, width,height, data, true,preventScroll,null,null, closable);
        return Observable.create(observer => {
            this.dialogService.dialogResult.subscribe((result) => {
                observer.next(result);
                observer.complete();
            })
        });
    }

    /**
  * example
  * ```typescript
  * constructor(private messagesService: MojMessagesService) {}
  * this.messageService.showMessage("MojTexts.error", "MojTexts.errorMessage", null, MessageType.Error).subscribe((result) => {
  *
  * });
  * ```
  */
    public showMessage(message: string, title: string, messageHtml?: string, messageType: MessageType = MessageType.Error, width: number = 500, okButtonText?: string, isApproveOnEnter?: boolean, appendTo?: ViewContainerRef, closable: boolean = true, iconClass: string = null,height?:number,preventScroll?:boolean): Observable<DialogResult> {
        let data: MessageData = {
            messageTitle: title ? this.translateService.instant(title) : this.translateService.instant("MojMessages." + MessageType[messageType]),
            messageType: messageType,
            messageText: message,
            okButtonText: okButtonText,
            isApproveOnEnter: isApproveOnEnter,
            messageHtml: messageHtml,
            iconClass: iconClass,
            preventScroll:preventScroll,
            height:height

        }
        width = width ? width : 500;
        this.dialogService.openDialog(null, MojMessageComponent, width, height, data, true, preventScroll, null, null, closable);
        return Observable.create(observer => {
            this.dialogService.dialogResult.subscribe((result) => {
                observer.next(result);
                observer.complete();
            })
        });
    }
}