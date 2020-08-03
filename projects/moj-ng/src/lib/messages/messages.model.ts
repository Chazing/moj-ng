import { MessageType } from './message.enum';
export interface MessageData {
    messageType: MessageType,
    messageTitle: string,
    messageText: string,
    okButtonText: string,
    cancelButtonText?: string,
    isApproveOnEnter: boolean,
    messageHtml: string,
    iconClass: string
    height:number,
    preventScroll:boolean
}

export interface SnakbarActionButton {
    textKey: string,
    id?: string,
    data?: any
}

export interface SnackbarData {
    messageTextKey: string,
    buttons?: SnakbarActionButton[],
    iconClass?: string,
    sticky?: boolean,
    durationSeconds?: number,
    hideCloseButton?: boolean
}

export interface SnackbarResult {
    button?: SnakbarActionButton,
    isCloseButtonClicked?: boolean
}

