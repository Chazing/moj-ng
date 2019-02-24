import { DialogResultEnum } from "./message.enum";

export interface DialogResult {
    dialogResultType: DialogResultEnum;
    data?: any;
}