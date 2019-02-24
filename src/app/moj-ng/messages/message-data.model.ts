import { MessageType } from './message.enum';
export interface MessageData {
    messageType: MessageType,
    messageText: string,
    okButtonText: string,
    cancelButtonText?: string,
    isApproveOnEnter: boolean,
    messageHtml: string
}