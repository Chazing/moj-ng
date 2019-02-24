export class MojLanguage {
    code: string = "he";
    value: string;
    dir:  MojDirection = MojDirection.rtl;
}

export enum MojDirection {
    rtl,
    ltr
}