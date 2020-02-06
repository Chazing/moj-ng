import { Injectable, ViewContainerRef } from '@angular/core';
import { MojMessageComponent } from "./moj-message.component";
import { MessageType } from "./message.enum";
import { TranslateService } from '@ngx-translate/core';
import { MojDialogService } from './moj-dialog.service';
import { DialogResult } from './dialog-result';
import { MessageData } from './message-data.model';
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
    public confirm(message: string, title: string, messageHtml?: string, width: number = 300, okButtonText?: string, cancelButtonText?: string, isApproveOnEnter?: boolean,closable:boolean=true): Observable<DialogResult> {
        let data: MessageData = {
            messageType: MessageType.Confirm,
            messageText: message,
            okButtonText: okButtonText,
            cancelButtonText: cancelButtonText,
            isApproveOnEnter: isApproveOnEnter,
            messageHtml: messageHtml
        }
        if (!title) {
            title = "MojMessages." + MessageType[MessageType.Confirm];
        }
        this.dialogService.openDialog(title ? this.translateService.instant(title) : null, MojMessageComponent, width, null, data,true,null,null,null,closable);
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
    public showMessage(message: string, title: string, messageHtml?: string, messageType: MessageType = MessageType.Error, width: number = 300, okButtonText?: string, isApproveOnEnter?: boolean, appendTo?: ViewContainerRef,closable:boolean=true): Observable<DialogResult> {
        let data: MessageData = {
            messageType: messageType,
            messageText: message,
            okButtonText: okButtonText,
            isApproveOnEnter: isApproveOnEnter,
            messageHtml: messageHtml
        }
        if (!title) {
            title = "MojMessages." + MessageType[messageType];
        }
        this.dialogService.openDialog(title ? this.translateService.instant(title) : null, MojMessageComponent, width, null, data,true,null,null,null,closable);
        return Observable.create(observer => {
            this.dialogService.dialogResult.subscribe((result) => {
                observer.next(result);
                observer.complete();
            })
        });
    }
}