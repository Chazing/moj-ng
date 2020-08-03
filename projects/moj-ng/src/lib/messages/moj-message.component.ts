import { Component, Input, Output, EventEmitter, HostListener, AfterViewInit, ViewChild, Renderer, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { MessageType, DialogResultEnum } from "./message.enum";
import { ButtonStyle } from '../elements/buttons/button-style';
import { MojDialogService } from './moj-dialog.service';
import { MessageData } from './messages.model';
import { Alignment } from '../elements/general/general.enum';

@Component({
    selector: 'moj-message',
    templateUrl: 'moj-message.component.html',
    styleUrls: ['moj-message.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MojMessageComponent implements AfterViewInit {
    @Input() data: MessageData;

    @ViewChild('approve', { static: true }) approveButton;
    public buttonStyle = ButtonStyle;
    messageType = MessageType;
    buttonsAlign = Alignment;

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.approveButton.button.nativeElement.focus();
        });
    }

    constructor(protected dialogService: MojDialogService) {

    }

    get messageTypeString(): string {
        return this.messageType[this.data.messageType];
    }


    get messageTitle(): string {
        return this.data.messageTitle;
    }
    onCancelButtonClick() {
        this.dialogService.closeDialog({ dialogResultType: DialogResultEnum.Cancel });
    }

    onApproveButtonClick() {
        this.dialogService.closeDialog({ dialogResultType: DialogResultEnum.OK });
    }
}