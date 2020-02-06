import { Component, Input, Output, EventEmitter, HostListener, AfterViewInit, ViewChild, Renderer, ViewContainerRef } from '@angular/core';
import { MessageType, DialogResultEnum } from "./message.enum";
import { ButtonStyle } from '../elements/buttons/button-style';
import { MojDialogService } from './moj-dialog.service';
import { MessageData } from './message-data.model';

@Component({
    selector: 'moj-message',
    templateUrl: 'moj-message.component.html',
    styleUrls: ['moj-message.component.scss']
})
export class MojMessageComponent implements AfterViewInit {
    @Input() data: MessageData;

    @ViewChild('approve', { static: true}) approveButton;
    public buttonStyle = ButtonStyle;

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.approveButton.button.nativeElement.focus();
        });
    }

    constructor(protected dialogService: MojDialogService) {

    }

    get messageTypeString(): string {
        return MessageType[this.data.messageType];
    }

    onCancelButtonClick() {
        this.dialogService.closeDialog({ dialogResultType: DialogResultEnum.Cancel });
    }

    onApproveButtonClick() {
        this.dialogService.closeDialog({ dialogResultType: DialogResultEnum.OK });
    }
}